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
  let message = ''
  //message currently styled
  let currentMessage = ''
  let stylePrefix = ''

  //Define color functions on the fly
  Object.keys(colors).forEach((key) => {
    this[key] = () => {
      stylePrefix += colors[key]
      return this
    }
  })

  //lock in current styling and reset styles for the next message
  //doesn't include space for separation
  this.then = (newMessage) => {
    currentMessage = newMessage
    message += `${stylePrefix}${currentMessage}\x1b[0m`
    stylePrefix = ''
    return this
  }
  //lock in current message without resetting styles
  this.and = (newMessage) => {
    currentMessage = newMessage
    message += `${stylePrefix}${currentMessage}\x1b[0m`
    return this
  }
  
  //finalize message and render
  this.log = (newMessage) => {
    currentMessage = newMessage
    console.log(`${message}${stylePrefix}${currentMessage}\x1b[0m`)
    stylePrefix = ''
    message = ''
    return this
  }
}