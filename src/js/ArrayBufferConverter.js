export default class ArrayBufferConverter {
  static arrayBuffer = [];

  static load(buffer) {
    const view = new Uint16Array(buffer);
    for (let i = 0; i < view.length; i++) {
      this.arrayBuffer.push(view[i]);
    }
    return this.arrayBuffer;
  }

  static toString() {
    let dataArr = [];
    for (let i = 0; i < this.arrayBuffer.length; i++) {
      dataArr[i] = String.fromCharCode(this.arrayBuffer[i])
    }
    return dataArr.join('');
  }
}