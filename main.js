const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
    host: "176.9.32.52", 
    port: 38620,       
    username: "BotNumberTwo", 
});

const antiafk = require("mineflayer-antiafk");

bot.loadPlugin(antiafk);

bot.on("spawn", () => {
  bot.afk.setOptions({ fishing: false }); //disables fishing
  bot.afk.start();
});
