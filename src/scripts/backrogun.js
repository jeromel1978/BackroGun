export default class BackroGun {
  constructor() {
  }
  initGun = ()=>{
    this.gun = new window.Gun();
    console.log("gun loaded");
  }
  initSEA = () => {
    setTimeout(() => {
      this.SEA = window.SEA;
      console.log("SEA loaded");
      this.user = this.gun.user();
      console.log("user loaded");
    }, 100);
  }
  gun;
  SEA;
  user;
}

class Auth {
  static MaxRooms = 20;
  static MaxPlayers = 20;
  static AveCharPerWord = 5;


  static Login = () => {};

  static LogOut = () => {};

  static Create = () => {};

  static Live = () => {};
}

class Game {
  RoomID = "";
  RoundCount = 5;
  Anchor = new Date();

  Phase = (Name, Duration, index = 0) => {
    return {
      name: Name,
      index: index,
      start: Anchor.setSeconds(Anchor.getSeconds() + Duration),
      acro: "",
    };
  };

  Template = [Phase("Lobby", 30),Phase("Lobby", 30)];

  static ListRoom = () => {};

  static JoinRoom = (RoomID) => {
    this.RoomID = RoomID;
  };

  static LeaveRoom = () => {};

  static CreateRoom = () => {};

  static ListPlayers = () => {};

  static SendMessage = () => {};

  static SendEntry = () => {};

  static ListEntries = () => {};

  static VoteEntries = () => {};

  static ReviewEntries = () => {};

  static Setup = () => {
    this.Anchor = new Date();
  };

  static ListPhase = () => {};
}
