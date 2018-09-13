var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/production/win-unpacked/',
    outputDirectory: './build/production/winstaller/',
    authors: 'The Legion of the Desperate Programmers',
    setupExe: 'ravenode-setup.exe',
    loadingGif: './src/images/logos/ravenode.gif'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));