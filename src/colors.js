export default function() {
  this.currentMessage = ''
  this.stylePrefix = ''

  this.red = () => {
    this.stylePrefix += '\x1b[31m'
    return this
  }
  this.underline = () => {
    this.stylePrefix += '\x1b[4m'
    return this
  }

  //define message and render
  this.log = (newMessage) => {
    this.currentMessage = newMessage
    console.log(`${this.stylePrefix}${this.currentMessage}\x1b[0m`)
    this.stylePrefix = ''
    return this
  }
  //Display message
  this.render = () => {
    console.log(`${this.currentMessage}\x1b[0m`)
    return this
  }
}