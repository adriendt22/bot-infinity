const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kickUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kickUser)
    return message.channel.send("Je ne trouve pas cet utilisateur");
  let KickReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send("Tu n'as pas les permissions");
  if (kickUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "Cet utilisateur ne peut pas être expulsé ou banni"
    );

  let KickEmbed = new Discord.RichEmbed()
    .setTitle("__**KICK**__")
    .setColor("#bc0000")
    .setDescription(
      `${kickUser} à bien été kick par <@${message.author.id}> dans le channel : ${message.channel}. Motif du kick : ${KickReason}`
    );

  let KickChannel = message.guild.channels.find(`name`, "dev-logs");
  if (!KickChannel)
    return message.channel.send(
      "Je ne trouve pas le channel `dev-logs` si il n'existe pas merci de bien vouloir le créer."
    );

  message.guild.member(kickUser).kick(KickReason);
  KickChannel.send(KickEmbed);

  return;
};
module.exports.help = {
  name: "kick"
};
