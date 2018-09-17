# Ravenode

[![Build Status](https://travis-ci.org/eligeorgios/Ravenode.svg?branch=master)](https://travis-ci.org/eligeorgios/Ravenode)
[![dependencies Status](https://david-dm.org/eligeorgios/ravenode/status.svg)](https://david-dm.org/eligeorgios/ravenode)
[![devDependencies Status](https://david-dm.org/eligeorgios/ravenode/dev-status.svg)](https://david-dm.org/eligeorgios/ravenode?type=dev)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/eligeorgios/Ravenode/)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/badges/shields.svg)](https://github.com/eligeorgios/Ravenode/)

A minimalist music player forked from Museeks.io

![Screenshot](https://github.com/eligeorgios/Ravenode/blob/master/docs/images/About.png)

It uses:
* [Node.js](https://nodejs.org/en/) as its javascript runtime,
* [NPM](https://npmjs.com) as our package manager,
* [Electron](https://github.com/atom/electron/) for our user interface,
* [React](https://facebook.github.io/react/) to programmatically generate the user interface (sigh),
* [Flux](https://facebook.github.io/flux/) and  
* [Redux](http://redux.js.org/) as data-flow pattern, whatever that is.

---

### What's inside?

Because Ravenode is meant to be a minimalistic music player, **you'll find some functionality, but no fancy features.** Here is a incomplete list of some of the features you''l find inside Ravenode

- ✨ Minimalistic and clean
- 🌟 Playlists management
- 🎶 Queue feature
- ➰ Shuffle and loop
- 😎 Dark theme
- 📻 Playback speed control
- 🛌 Sleep mode blocker
- 💻 Play songs as a background app
- 🎹 Supported formats: mp3, mp4, m4a/aac, flac, wav, ogg, 3gpp

Special thanks to the creators of [Museeks](https://museeks.io/) for coding these features.

---

### Releases notes

- [Over here!](https://github.com/eligeorgios/ravenode/releases)

---

### Installation

 All the unpacked binaries and installers are [over here](https://github.com/eligeorgios/ravenode/releases).

### Build

Remember that __branch `master` is unstable__ and may contain unfinished chunks of code or incomplete functions.

#### Configuring the environment

- Install [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com).

#### 🏗 Building 

Open the command line and type:
- `cd <YOUR PROJECTS DIR>`
- `git clone https://github.com/eligeorgios/ravenode.git`
- `cd ravenode`
- `npm i`
- `npm run build` (for production) or `npm run dev` (for development)
- `npm run ravenode` or `npm run museeks:dev`

#### Packaging

Assuming that you already followed the steps in section __Building__ and you already have a directory stuffed with all the Ravenode source files, you can use the below steps to package and create and installer for Ravenode.

##### Windows

Open the command line and type:
- `cd ravenode` (cd to the Ravenode directory)
- `npm i electron-builder`
- `npm i electron-winstaller`
- `npm run package:w` (this step packages Ravenode and creates a bunch of installers)
- `npm run installer:w` (Optional step, this is for those that need a Squirrel.Windows installer - the NSIS and MSI installers were created in the last step)

##### Mac OS X
Open the command line and type:
- `cd ravenode` (Go to project directory)
- `npm i electron-packager`
- `npm run package:m` (Only packages Ravenode, does not create the installer)
- `npm run installer:m` (MUST be run on a computer running Mac OS X)

---

### Troubleshooting

Museeks is currently in development. This implies some things can break after an update (database schemes changes, config...).

If you encounter freezes when starting the app, you can reset Museeks by following these steps:

- Go to the Museeks folder directory
    - Windows: `%AppData%\museeks`
    - OSX: `~/Library/Application Support/museeks`
    - Linux: `~/.config/museeks/` or `$XDG_CONFIG_HOME/museeks`
- Delete:
    - `IndexedDB` folder
    - `config.json` file
- Restart Museeks

If you still get problems after that, please open an issue :)

---

### Bug report

If you want to report a bug, first, thanks a lot, that helps us a lot. Please open an issue and mention your OS, your Museeks version, and how to reproduce it. Adding a screen of the console (Settings -> Advanced -> Enable dev mode) is a big help too.

---

### Contribute

- Fork and clone
- Master is usually unstable, checkout to a tag to have a stable state of the app
- `npm install && npm run dev` then run in a separate terminal `npm run museeks:debug`
- `npm run dev` will watch for file changes using Webpack which will recompile JSX and SASS files.

Please respect a few rules:

- Before making complex stuff, don't hesitate to open an issue first to discuss about it
- Make the code readable and comment if needed
- Make sure `npm run lint:sass && npm run lint:js` passes

Then open a PR :)

0.10.0
