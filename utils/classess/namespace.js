class Namespace {
  constructor(data) {
    Object.assign(this, data);
    this.rooms = [];
  }
  addRoom(room) {
    this.rooms.push(room);
  }
}

module.exports = Namespace;
