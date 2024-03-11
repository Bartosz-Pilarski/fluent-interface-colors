const colors = {
  //Colors
  'black': '\x1b[30m',
  'red': '\x1b[31m',
  'green': '\x1b[32m',
  'yellow': '\x1b[33m',
  'blue': '\x1b[34m',
  'magenta': '\x1b[35m',
  'cyan': '\x1b[36m',
  'white': '\x1b[37m',
  //Styles
  'bold': '\x1b[1m',
  'dim': '\x1b[2m',
  'italic': '\x1b[3m',
  'underline': '\x1b[4m',
  'inverse': '\x1b[7m',
  'hidden': '\x1b[8m',
  'strikethrough': '\x1b[9m'
}

export default function() {
  //message history stack
  this.message = ''
  //message currently styled
  this.currentMessage = ''
  this.stylePrefix = ''

  //Define color functions on the fly
  Object.keys(colors).forEach((key) => {
    this[key] = () => {
      this.stylePrefix += colors[key]
      return this
    }
  })

  //lock in current styling and reset styles for the next message
  //doesn't include space for separation
  this.then = (newMessage) => {
    this.currentMessage = newMessage
    this.message += `${this.stylePrefix}${this.currentMessage}\x1b[0m`
    this.stylePrefix = ''
    return this
  }
  //lock in current message without resetting styles
  this.and = (newMessage) => {
    this.currentMessage = newMessage
    this.message += `${this.stylePrefix}${this.currentMessage}\x1b[0m`
    return this
  }
  
  //finalize message and render
  this.log = (newMessage) => {
    this.currentMessage = newMessage
    console.log(`${this.message}${this.stylePrefix}${this.currentMessage}\x1b[0m`)
    this.stylePrefix = ''
    this.message = ''
    return this
  }
}