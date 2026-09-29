require('dotenv').config();
const { Bot } = require('@maxhub/max-bot-api');

if (!process.env.MAX_BOT_TOKEN) {
    console.error("Ошибка: MAX_BOT_TOKEN не задан в .env");
    process.exit(1);
}

const bot = new Bot(process.env.MAX_BOT_TOKEN);

// Команда /start
bot.command('start', (kontekst) => {
    kontekst.reply('Добро пожаловать в «Светофор проверок».\n\nУзнайте, какие требования к вам применяются и что нужно проверить перед проверкой.', {
        attachments: [{
            type: 'inline_keyboard',
            payload: {
                buttons: [[{
                    type: 'open_app',
                    text: 'Проверить готовность',
                    web_app: { url: process.env.WEBAPP_URL }
                }]]
            }
        }]
    });
});

// Обработка данных из мини-приложения
bot.on('message_created', (kontekst) => {
    const soobshchenie = kontekst.message;
    if (soobshchenie && soobshchenie.web_app_data) {
        try {
            const dannye = JSON.parse(soobshchenie.web_app_data.data);
            let tekst = `Спасибо. Мы получили ваш результат.\n\n`;
            
            if (dannye.krasnyh > 0) {
                tekst += `Критичных требований: ${dannye.krasnyh}\n`;
            }
            if (dannye.zheltyh > 0) {
                tekst += `Требуют внимания: ${dannye.zheltyh}\n`;
            }
            tekst += `\nВсего проверено: ${dannye.vsego} требований.`;
            
            kontekst.reply(tekst);
        } catch (e) {
            kontekst.reply('Спасибо. Ваш результат сохранён.');
        }
    }
});

bot.catch((oshibka, kontekst) => {
    console.error('Ошибка бота:', oshibka);
});

console.log('Бот «Светофор проверок» запущен...');
bot.start();