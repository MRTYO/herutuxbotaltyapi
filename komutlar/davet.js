const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=8) **|** [Sunucunun Davet Linki](${invite}) **|** [Bot Destek Sunucusu](https://discord.gg/MkmsECP) `);
    message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sunucu Davetini Verir.',
  usage: 'davet'
};