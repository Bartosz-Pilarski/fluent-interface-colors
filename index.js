import Colors from "./src/colors.js"

const colors = new Colors("Hello world")

colors.red().underline().render().log("Oh, okay").underline().render()