import Gun from "gun/gun";
import SEA from "gun/sea";
import unset from "gun/lib/unset.js";
import later from "gun/lib/later.js";
import { v4 as UUIDv4 } from "uuid";

// export const gun = Gun(`http://localhost:8080/gun`);
export const gun = Gun();

const sea = Gun.SEA;

let room = ``;
let GunRoom;
// export let messages;
export let login;
export function GetRooms() {
  let d = Rooms();
  return Rooms();
}
export function GetRoom() {
  return GunRoom;
}
export function ChangeRoom(room = "") {
  GunRoom = SetRoom(room);
  if (room != "") messages.add({ stamp: Date.now(), text: "Automated", sender: "Test" });
  login = Login();
}

ChangeRoom(``);

function CreateRound(ref, Time) {
  let refRounds = ref.get(`rounds`);
  let PrevTime = Time;
  for (let round = 1; round < 8; round++) {
    refRounds.put(round);
    PrevTime = CreatePhase(refRounds.get(round), `Countdown`, PrevTime, 10);
    PrevTime = CreatePhase(refRounds.get(round), `Creation`, PrevTime, 60);
    PrevTime = CreatePhase(refRounds.get(round), `Voting`, PrevTime, 60);
    PrevTime = CreatePhase(refRounds.get(round), `Review`, PrevTime, 20);
    refRounds.get(round).put(`acros`);
    refRounds.get(round).put(`bacros`);
  }
}

function CreatePhase(ref, Name, Time, Duration) {
  Time.setSeconds(Time.getSeconds() + Duration);
  ref.get(`name`).put(Name);
  ref.get(`time`).put(Time);
  return Time;
}

function Join(ref, user) {
  ref.get(`users`).put(user).put(points).put(0);
}

function Leave(ref, user) {
  ref.get(`users`).put(user).put(null);
  room = ``;
}

export function SetRoom(Room = ``) {
  if (Room == ``) {
    return gun.get(`backro`).get(`lobby`);
  }
  return gun.get(`backro`).get(`rooms`).get(Room);
}

function customStore(ref, methods = {}) {
  let store = {};
  const subscribers = [];

  function publish(data, key) {
    if (ref._.get === key) {
      // for gun.get(key)
      store = data;
    } else if (data) {
      // for gun.get(key).map()
      store[key] = data;
    } else {
      delete store[key];
    }
    for (let i = 0; i < subscribers.length; i += 1) {
      subscribers[i](store);
    }
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);

    // Publish initial value
    subscriber(store);

    // Add a listener to GUN data
    ref.on(publish);

    // return cleanup function to be called on component dismount
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
      if (!subscribers.length) {
        ref.off();
      }
    };
  }

  return { ...methods, subscribe };
}

function Messages(refGun) {
  return customStore(refGun.map(), {
    add: (name, text) => {
      let d = Date.now();
      let message = gun.get(d).put({ stamp: d, text: text, sender: name }, ShowAck);
      refGun.set(message);
    },
  });
}

function Players(refGun, roomID) {
  if (roomID != "")
    return customStore(refGun.map(), {
      add: (name) => {
        // let player = gun.get(player).put({ points: 0, name: name });
        // refGun.set(player);
      },
    });
}

export function GetMessages(ref) {
  return Messages(ref);
}
export function GetPlayers(ref, roomID) {
  return Players(ref, roomID);
}
// }

function Rooms() {
  // let r = gun.put("rooms");
  // let ref = gun.get(`backro`).put(r);
  let ref = gun.get(`backro`).get("rooms");
  return customStore(ref.map(), {
    add: (name) => {
      let a = UUIDv4().substr(0, 8).toUpperCase();
      let rooms = gun.get(a).put({ name: a });

      ref.set(rooms);
      // console.log(name);
      // console.log(gun.get(name));
      let p = gun.get(name).put({ points: 0, name: name });
      ref.get(a).get("players").set(p);
      return a;
    },
    del: (room) => {
      ref.get(room).put(null);
      // ChangeRoom(room);
    },
  });
}
function ShowAck(ack) {
  console.log(ack);
}
function Login() {
  let refLobby = gun.get("backro").get("lobby");
  let ref = gun.get("backro");
  return customStore(refLobby.map(), {
    test: () => {
      console.log("Testing Started");
      let message = gun.get(`1629671093149`).put({ text: "Stand alone test", sender: "Jerome" }, ShowAck);
      refLobby.set(message);
      message = gun.get(`1629671093150`).put({ text: "Stand alone test 2", sender: "Jerome" }, ShowAck);
      refLobby.set(message);
      console.log("Testing Ended");
    },
    clear: () => {
      // ref.get(`1629671093149`).put(null);
      // ref.get(`1629671093150`).put(null);
      // ref.get("lobby").put(null);
      // ref.get("rooms").put(null);
      // ref.get("users").put(null);
      // ref.get("messages").put(null);
      // gun.put("backro");
      localStorage.clear();
    },
  });
}
