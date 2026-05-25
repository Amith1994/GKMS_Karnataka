const { contextBridge } = require('electron');
const pkg = require('./package.json');

contextBridge.exposeInMainWorld('appInfo', {
    platform: process.platform,
    version: pkg.version,
    name: pkg.productName || pkg.name,
    isElectron: true,
});
