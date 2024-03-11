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
  //Message history stack
  let message = ''
  //Message currently styled
  let stylePrefix = ''

  //Define color functions dynamically, based on array elements
  Object.keys(colors).forEach((key) => {
    this[key] = () => {
      stylePrefix += colors[key]
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