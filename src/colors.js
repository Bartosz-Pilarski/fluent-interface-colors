export default function(message) {
  this.currentMessage = message

  this.red = () => {
    this.currentMessage = `\x1b[31m${this.currentMessage}`
    return this
  }
  this.underline = () => {
    this.currentMessage = `\x1b[4m${this.currentMessage}`
    return this
  }
  //Change message
  this.log = (newMessage) => {
    this.currentMessage = newMessage
    return this
  }
  //Display message
  this.render = () => {
    console.log(`${this.currentMessage}\x1b[0m`)
    return this
  }
}