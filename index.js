const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const { readdirSync } = require('node:fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

readdirSync('./handlers').forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', (c) => {
    client.user.setPresence({ 
      activities: [{ name: `Next to You`, type: ActivityType.Streaming,
       url: 'https://www.youtube.com/watch?v=EnLE3J4lyig' }],
      status: 'idle',
    });
  });

client.login(TOKEN);