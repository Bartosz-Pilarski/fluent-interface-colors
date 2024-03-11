import Colors from "./src/colors.js"
const colors = new Colors()

colors.bold().red().and('Hello ').blue().log('World!')

//Colors
colors
  .bold()
  .black().and('black ')
  .red().and('red ')
  .green().and('green ')
  .yellow().and('yellow ')
  .blue().and('blue ')
  .magenta().and('magenta ')
  .cyan().and('cyan ')
  .white().log('white')

//Styles
colors
  .yellow().bold().then('bold ')
  .yellow().dim().then('dim ')
  .yellow().italic().then('italic ')
  .yellow().underline().then('underline').then(' ')
  .yellow().inverse().then('inverse').then(' ')
  .yellow().hidden().then('hidden ').then(' ')
  .yellow().strikethrough().log('strikethrough')