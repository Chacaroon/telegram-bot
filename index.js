const TelegramBot = require('node-telegram-bot-api');
const config = require('config');
const low = require('lowdb');

const words = low('words.json');

const bot = new TelegramBot(config.get('token'), {polling: true});

bot.onText(/\/add ([A-z]+) ([А-я]+)/, (msg, match) => {
    words.get('learn')
});