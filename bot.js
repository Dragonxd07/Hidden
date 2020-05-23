// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Online!');
client.user.setActivity('/help', { type: 'LISTENING' });


client.on('message', message => {
	console.log(message.content);

if (message.content === '/help') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Hidden Bot Help \n /hidden - Gives You The Link For Hidden On Roblox \n /version - Shows You Hidden Bots Version \n /group - Gives You The Link To The Roblox Group \n /help - Shows Help');
}

if (message.content === '/hidden') {
	message.channel.send('https://www.roblox.com/games/5005452599/Hidden-beta?refPageId=dccf56fc-08e0-4142-ac95-d1d8e67b7800');
}

if (message.content === '/version') {
	message.channel.send('ver: 1.0');
}

if (message.content === '/group') {
	message.channel.send('https://www.roblox.com/groups/6392714/Billionaire-Production#!/about');
}

});

});

// login to Discord with your app's token

client.login('NzEzNjEyNDM3ODA2NjQ1MjQ4.XsivcA.OzFjA05ZG3vlvzb432NDelZxeh4');