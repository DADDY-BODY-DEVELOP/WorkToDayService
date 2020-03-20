var cron = require('node-cron');
var firebase = require('firebase');
const fetch = require('node-fetch');
const moment = require('moment');
var macaddress = require('macaddress');

var app = firebase.initializeApp({
    apiKey: "AIzaSyDYHgcGjAglCjsex4BjI9cFFR-KaGG2Ras",
    authDomain: "ufa66-checkin.firebaseapp.com",
    databaseURL: "https://ufa66-checkin.firebaseio.com",
    projectId: "ufa66-checkin",
    storageBucket: "ufa66-checkin.appspot.com",
    messagingSenderId: "1073662313747",
    appId: "1:1073662313747:web:3fbf437025e180f31186e6",
    measurementId: "G-ZGTDDBZWCQ"
});

cron.schedule('0 6 * * *', function () {

    macaddress.one(function (err, mac) {
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(json => {
                let newKey = 0;
                let updates = {};
                const list = {
                    "_key": newKey,
                    "ip": json.ip,
                    "mac": mac,
                    "datetime": moment().format(),
                }
                updates[`/tb_ip/` + newKey] = list;
                return app.database().ref().update(updates)
            });
        // console.log("Mac address for this host: %s", mac);
    });
});

cron.schedule('0 18 * * *', function () {

    macaddress.one(function (err, mac) {
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(json => {
                let newKey = 0;
                let updates = {};
                const list = {
                    "_key": newKey,
                    "ip": json.ip,
                    "mac": mac,
                    "datetime": moment().format(),
                }
                updates[`/tb_ip/` + newKey] = list;
                return app.database().ref().update(updates)
            });
        // console.log("Mac address for this host: %s", mac);
    });
});
