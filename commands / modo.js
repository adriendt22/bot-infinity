const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Tu n'as pas les permissions");
  let waiting = await message.channel
    .send("<a:load:520658910072274944>")
    .catch(console.error);
  message.delete();
  let mentionedUser = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()

    .setColor("#F7FF00")
    .setTitle("🆘 ***HELP MODO***   🆘")
    .setThumbnail('https://i.imgur.com/u8LAFbO.png')
    .addField(
      "***.ban :***",
      "📝 ***Pour ban quelqu'un : *** .ban <@de la personne> <raison>"
    )
    .addField(
      "***.kick :***",
      "📝 ***Pour kick quelqu'un : *** .kick <@de la personne> <raison>"
    )
    .addField(
      "***.clear :***",
      "📝 ***Pour delete des messages : *** .clear <Nombre de message>"
    )
    .addField("***.on***", "***📝 Pour annoncer que le serveur est on ***")
    .addField("***.off***", "***📝 Pour pour annoncer que le serveur est off ***")
    .setFooter('Créer par adrien dt#1553', 'https://cdn.discordapp.com/avatars/251967495877951489/816f275d0190ad39b5d5c06e9bceef9c.png?size=2048')
    .setDescription("📝 Liste des commandes");

  waiting.edit(avatarembed).catch(console.error);
};

module.exports.help = {
  name: "mod"
};
