const Discord = require('discord.js');

let botid = ('578634207484575744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Eğlence1 Komutları`)
    .addField('b*1vs1 @kişi ', 'Arkadaşınla 1 v 1 Savaşırsın')
    .addField('b*atatürk', 'Atatürk | Gazi M.Kemal Atatürk Gifleri')//ne kadar eğlence komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('b*ahshit', 'Ah Shit here we go again ')
    .addField('b*çay', 'Çay | Milli Içeceklerden Biri Çay!')
    .addField('b*dcnitro', 'Discord Nitro | Nitro Çerçeve')
    .addField('b*fbi', 'FBI | FBI OPEN DOOR')
    .addField('b*wwegif', 'wwe Gif atar ')
    .addField('b*youtube', 'Youtube da Aramak İstediğin Şeyi Gösterir')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AwaQy2k) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${578634207484575744}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence1',
  description: '',
  usage: ''
};