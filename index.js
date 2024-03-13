const colors = require("./src/colors.js")

//Reset style for the next segment
colors.red.bold.then("Hello").blue.italic.log(" world!")
//Keep styling for the next segment
colors.red.bold.and("Hello ").blue.italic.log("world!")

colors.log('Colors displayed as:')
colors.italic.log('Standard')
colors.italic.log('Bold')
//Colors
colors.bold.log('Colors')
colors
  .black.and('black ')
  .red.and('red ')
  .green.and('green ')
  .yellow.and('yellow ')
  .blue.and('blue ')
  .magenta.and('magenta ')
  .cyan.and('cyan ')
  .white.log('white')
colors
  .bblack.and('black ')
  .bred.and('red ')
  .bgreen.and('green ')
  .byellow.and('yellow ')
  .bblue.and('blue ')
  .bmagenta.and('magenta ')
  .bcyan.and('cyan ')
  .bwhite.log('white')

//Backgrounds
colors.bold.log("Backgrounds")
colors
  .bgblack.and('black ')
  .bgred.and('red ')
  .bggreen.and('green ')
  .bgyellow.and('yellow ')
  .bgblue.and('blue ')
  .bgmagenta.and('magenta ')
  .bgcyan.and('cyan ')
  .bgwhite.log('white')
colors
  .bbgblack.and('black ')
  .bbgred.and('red ')
  .bbggreen.and('green ')
  .bbgyellow.and('yellow ')
  .bbgblue.and('blue ')
  .bbgmagenta.and('magenta ')
  .bbgcyan.and('cyan ')
  .bbgwhite.log('white').then('')
//Styles
colors.bold.log("Styles")

colors
  .yellow.bold.then('bold ')
  .yellow.dim.then('dim ')
  .yellow.italic.then('italic ')
  .yellow.underline.then('underline').then(' ')
  .yellow.inverse.then('inverse').then(' ')
  .yellow.hidden.then('hidden ').then(' ')
  .yellow.strikethrough.log('strikethrough')