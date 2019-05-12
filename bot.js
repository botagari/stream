const Discord = require('discord.js')
const client = new Discord.Client()

const developers = ["567694723679125514","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith('Mplay')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === ("Mleave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('Mwatch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith('Mlis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith('Mtwitch')) {
    client.user.setGame(argresult, "https://www.twitch.tv/ii7m0dy");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('Msetname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('Msetavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.login(process.env.TOKEN)
