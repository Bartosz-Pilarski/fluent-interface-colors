import ansi from "./ansiCodes.js"

export default function() {
  //Message history stack
  let message = ''
  //Message currently styled
  let stylePrefix = ''

  //Define color functions dynamically, based on array elements
  Object.keys(ansi).forEach((key) => {
    this[key] = () => {
      stylePrefix += ansi[key]
      return this
    }
  })

  //Lock in current message and styling, and reset styles for the next message.
  this.then = (newMessage) => {
    message += `${stylePrefix}${newMessage}\x1b[0m`
    stylePrefix = ''
    return this
  }
  //Lock in current message and styling without resetting styles
  this.and = (newMessage) => {
    message += `${stylePrefix}${newMessage}`
    return this
  }
  
  //Finalize all messages and render to console
  this.log = (newMessage) => {
    console.log(`${message}${stylePrefix}${newMessage}\x1b[0m`)
    stylePrefix = ''
    message = ''
    return this
  }
}