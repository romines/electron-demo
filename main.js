'use strict';
const electron = require('electron');
const app = electron.app;
/*

  To run as a normal app (useful for debugging), uncomment this stuff

*/

// const BrowserWindow = electron.BrowserWindow;
//
// var mainWindow = null;
//
// app.on('ready', function () {
//
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600
//   });
//
//   mainWindow.loadURL('file://' + __dirname + '/index.html');
//
// });


/*

  And comment out the following

*/

const menubar = require('menubar');

var mb = menubar();
