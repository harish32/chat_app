class Room {
  constructor(data) {
    Object.assign(this, data);
  }
  addMessage(msg) {
    this.history.push(msg);
  }
  clearhistor() {
    this.history = [];
  }
}

module.exports = Room;
