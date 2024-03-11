import Colors from "./src/colors.js"

const colors = new Colors()

colors.italic().blue().log("Hello world")
colors.bold().underline().log("Reusability")

colors.red().then("yahoy").blue().log("yahey")
colors.blue().and("okay").bold().log("heey")