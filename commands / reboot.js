const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Tu n'as pas les permissions");
  let waiting = await message.channel
    .send("<a:load:520658910072274944> @everyone")
    .catch(console.error);

  let mentionedUser = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()

    .setImage("https://media.giphy.com/media/l0RbbuwEDoUtoIdU1K/giphy.gif")
    .setColor("#DC0202")
    .setAuthor("REBOOT")
    .setFooter(
      "Créer par adrien dt#1553",
      "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
    )
    .setDescription("Reboot annoncé à : " + message.content.slice(8));

  message.delete();

  waiting.edit(avatarembed).catch(console.error);
};

module.exports.help = {
  name: "reboot"
};
