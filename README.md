# Simple JavaScript fluent interface implementation

## Overview
This is a small educational project that:
- Styles and colorizes terminal messages in node.js using ANSI codes,
- Implements a fluent API pattern for simplicity of use,
- Allows easy nested styling of console messages.

**Not all possible features are implemented (yet, anyways) - this project is not meant as a replacement for established libraries** 
...but I won't stop anyone from trying to use it anyways.

- [x] Core text colors,
- [x] Core text styling (bold, italic, strikethrough...),
- [x] Multiple styles/colors per line,
- [x] Additional color codes,
  - [x] Background colors
  - [x] Bold colors
- [ ] ()-less syntax

## Usage

Import and instance the project's code (src/colors.js file)
```javascript
import Colors from "./src/colors.js"
const colors = new Colors()
```
Start logging messages
```javascript
colors.red().bold().log("Hello world!")
```
![preview](https://github.com/Bartosz-Pilarski/fluent-interface-colors/assets/86968046/8c865c25-0c16-4cb4-890f-2f00b50d462d)

To use multiple styles per line simply use the .then(message) and .and(message) methods
```javascript
//Reset style for the next segment
colors.red().bold().then("Hello").blue().italic().log(" world!")
//Keep styling for the next segment
colors.red().bold().and("Hello ").blue().log("world!")
```
*Spaces are not added automatically between strings.*
