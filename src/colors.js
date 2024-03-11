import ansi from "./ansiCodes.js"

export default function() {
  //Message history stack
  let message = ''
  //Message currently styled
  let stylePrefix = ''

  const colors = {
    //Finalize all messages and render to console
    log: (newMessage) => {
      console.log(`${message}${stylePrefix}${newMessage}\x1b[0m`)
      stylePrefix = ''
      message = ''
      return colors
    },
    //Lock in current message and styling, and reset styles for the next message.
    then: (newMessage) => {
      message += `${stylePrefix}${newMessage}\x1b[0m`
      stylePrefix = ''
      return colors
    },
    //Lock in current message and styling without resetting styles
    and: (newMessage) => {
      message += `${stylePrefix}${newMessage}`
      return colors
    }
  }

  //Define color functions dynamically, based on array elements
  Object.keys(ansi).forEach((key) => {
    Object.defineProperty(colors, key, {
      get: () => { 
        stylePrefix += ansi[key]
        return colors
      }
    })
  })

  return colors
}