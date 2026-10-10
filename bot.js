const TelegramBot = require('node-telegram-bot-api');


const token = process.env.BOT_TOKEN;


if (!token) {
throw new Error('BOT_TOKEN is missing');
}


const bot = new TelegramBot(token, { polling: true });


bot.onText(//start/, (msg) => {
bot.sendMessage(
msg.chat.id,
'سلام! 🛍 به فروشگاه ما خوش اومدی.\nبرای باز کردن فروشگاه، از دکمه زیر استفاده کن.',
{
reply_markup: {
keyboard: [
[{ text: '🛍 فروشگاه', web_app: { url: 'https://voidarman.github.io/AT-Shop/' } }]
],
resize_keyboard: true
}
}
);
});


bot.on('web_app_data', (msg) => {
let data;


try {
data = JSON.parse(msg.web_app_data.data);
} catch {
return bot.sendMessage(msg.chat.id, 'درخواست نامعتبر بود.');
}


if (data.action === 'buy') {
bot.sendMessage(
msg.chat.id,
درخواست شما دریافت شد: ${data.product}\nفعلاً پرداخت فعال نیست.
);
}
});


console.log('Bot is running');


