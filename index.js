const mineflayer = require("mineflayer");

var options = {
    host: "176.9.32.52", 
    port: 38620,
    keepAlive: true,
    checkTimeoutInterval: 15*1000,
    username: "Server"
};

const bot = mineflayer.createBot(options);

const antiafk = require("mineflayer-antiafk");

bot.loadPlugin(antiafk);

bot.on("spawn", () => {
  bot.afk.setOptions({ fishing: false }); //disables fishing
  bot.afk.start();
});

bindEvents(bot);

function bindEvents(bot) {
    bot.on('login', function() {
      console.log("I logged in.");
      console.log("settings", bot.settings);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options);
      bot.loadPlugin(antiafk);

      bot.on("spawn", () => {
        bot.afk.setOptions({ fishing: false }); //disables fishing
        bot.afk.start();
      });
      bindEvents(bot);
    });
}
