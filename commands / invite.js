const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let waiting = await message.channel
    .send("<a:load:520658910072274944>")
    .catch(console.error);
  let mentionedUser = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()

    .setImage("https://media.giphy.com/media/McIjqamIbiKgSzTL87/giphy.gif")
    .setColor("#FF00F7")
    .setTitle("***Lien d'invitation discord*** ")
    .setFooter('Créer par adrien dt#1553', 'https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048')
    .setDescription("https://discord.gg/wgzaeSm");

  message.delete();

  waiting.edit(avatarembed).catch(console.error);
};

module.exports.help = {
  name: "inv"
};
