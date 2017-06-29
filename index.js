const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const bot = new TelegramBot(config.get('token'), {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, `Hello ${msg.from.first_name}!`);
});