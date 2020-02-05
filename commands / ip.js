const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Tu n'as pas les permissions");
  let waiting = await message.channel
    .send("<a:load:520658910072274944>")
    .catch(console.error);
  let mentionedUser = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()
    .setColor("#570792")
    .setTitle("*** voici l'ip du serveur ***")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/671444771944005633/671449004348801030/Sans_titre-1.jpg"
    )
    .setDescription("*** Faire F8 puis : connect 145.239.130.169:29805 ***")
    .setFooter(
      "Créer par adrien dt#1553",
      "https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048"
    );

  message.delete();

  waiting.edit(avatarembed).catch(console.error);
};

module.exports.help = {
  name: "ip"
};
