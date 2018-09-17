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

Because Ravenode is meant to be a minimalistic music player, **you'll find some functionality, but no fancy features.** Here is a incomplete list of some of the features you''l find inside Ravenode.

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

- [On this page.](https://github.com/eligeorgios/ravenode/releases)

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
- `npm run build` (for production) or `npm run dev` (for development, see __Contributing__)
- `npm run ravenode` or `npm run museeks:dev` (the script `ravenode:dev` enables dev tools and logging for development.)

#### Packaging

Assuming that you have already followed the steps in section __?? Building__ and you already have a directory stuffed with all the Ravenode source files, you can use the below steps to package and create the installer for Ravenode.

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
- `npm i electron-installer-dmg`
- `npm run installer:m` (MUST be run on a computer running Mac OS X)

---

### Troubleshooting

*__Warning:__ This will completely reset your music library. After following these steps you will have to re-add your music and re-create your playlists.*
Occasionally we may change somehting in a new release, and that may cause Ravenode to freeze on startup. Follow these steps to fix Ravenode. 

- Go to the Museeks folder directory
    - Windows: `%AppData%\ravenode`
    - OSX: `~/Library/Application Support/ravenode`
    - Linux: `~/.config/ravenode/` or `$XDG_CONFIG_HOME/ravenode`
- Delete:
    - `IndexedDB` folder
    - `config.json` file
- Restart Ravenode

If Ravenode continues to freeze, please [open an issue](https://github.com/eligeorgios/ravenode/issues) describing your problem.

---

### Bug report

If you want to report a bug, first, thanks a lot, that helps us a lot. Please open an issue and mention your OS, your Museeks version, and how to reproduce it. Adding a screen of the console (Settings -> Advanced -> Enable dev mode) is a big help too.

---

### Rules for contributing

- Fork and clone
- Always checkout to a stable tag of Ravenode, since branch master is ~~normally~~ always unstable.
- In a new terminal windows, cd to the Ravenode directory and run `npm i` and then `npm run dev`
- To start Ravenode, run **in a separate terminal window** `npm run ravenode:dev` 
- `npm run dev` will get Webpack to detect file changes. When there are, Webpack will automatically recompile all SASS and Typescript files.
- For more info see section __?? Building__.


#### Now for the rules

- After making any changes, especially complex ones, always run `npm run lint:ts` and `npm run lint:sass`. Also check that `npm run build` works.
- Please conform to the code style used in Ravenode.
- Remember to comment freely in the code - other people will need to understand what you just did.
- Submit a pull request, specifying exactly what you did and why you did it.

