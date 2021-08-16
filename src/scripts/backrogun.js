export default class BackroGun {
  constructor() {}
}

class Auth {
  static Login = () => {};

  static LogOut = () => {};

  static Create = () => {};

  static Live = () => {};
}

class Game {
  RoomID = "";
  RoundCount = 5;
  Anchor = new Date();

  Phase = (Name, StartTime, index = 0) => {
    return {
      name: Name,
      index: index,
      start: Anchor.setSeconds(Anchor.getSeconds() + StartTime),
    };
  };

  Template = [Phase("Lobby", 30)];

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
