export default function(message) {
  this.currentMessage = message
  this.hello = () => {
    console.log("hello")
    return this
  }
  this.world = () => {
    console.log("world")
    return this
  }
}