const mineflayer = require("mineflayer");

var options = {
    host: "176.9.32.52", 
    port: 38620,
    keepAlive: true,
    checkTimeoutInterval: 15*1000,
    username: "Server"
};

var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {
  bot.on('login', function() {
    console.log("I logged in.");
    console.log("settings", bot.settings);
  });

  bot.on('kicked', function(reason) {
    console.log("I got kicked for", reason, "lol");

    bot = mineflayer.createBot(options);
    bindEvents(bot);
  });
}
