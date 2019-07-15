const Discord = require('discord.js');

let botid = ('578634207484575744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Eğlence4 Komutları`)
    .addField('b*mazi', 'Mazi Lafları')
    .addField('b*kralol', 'Kral Olursun !')
    .addField('b*efkarvs', 'Kim Daha Efkar Kapışır')
    .addField('b*staff', 'Profil Resmini STAFF yapar')
    .addField('b*sev', '<3')
    .addField('b*balıktut', 'Balık Tutup Zengin Olursun*!')
    .addField('b*emojiyazı', 'Emojili Yazı Yazar')
    .addField('b*fakemesaj @kişi yazı  ', 'Sahte MESAJ Yollar ')
    .addField('b*hackle @kişi', 'Hacked BY ')
    .addField('b*event', 'Profil Resmini ŞEKİLLİ Yapar ')
    .addField('b*yala', 'Dondurma Yalarsın') 
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
  name: 'eğlence3',
  description: '',
  usage: ''
};