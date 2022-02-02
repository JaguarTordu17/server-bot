const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
    host: "176.9.32.52", 
    port: 38620,
    keepAlive: true,
    checkTimeoutInterval: 15*1000,
    username: "Server", 
});

const antiafk = require("mineflayer-antiafk");

bot.loadPlugin(antiafk);

bot.on("spawn", () => {
  bot.afk.setOptions({ fishing: false }); //disables fishing
  bot.afk.start();
});
