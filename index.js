const mineflayer = require("mineflayer");

var options = {
    host: "94.130.53.134", 
    port: 38620,
    keepAlive: true,
    checkTimeoutInterval: 15*1000,
    username: "Server"
};

var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {

  bot.on('error', function(err) {
      console.log('Error attempting to reconnect: ' + err.errno + '.');
      if (err.code == undefined) {
          console.log('Invalid credentials OR bot needs to wait because it relogged too quickly.');
          console.log('Will retry to connect in 30 seconds. ');
          setTimeout(relog, 30000);
      }
  });

  bot.on('end', function() {
      console.log("Bot has ended");
      // If set less than 30s you will get an invalid credentials error, which we handle above.
      setTimeout(relog, 30000);  
  });
}

function relog() {
  console.log("Attempting to reconnect...");
  bot = mineflayer.createBot(options);
  bindEvents(bot);
}
