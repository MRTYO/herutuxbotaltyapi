const Discord = require('discord.js');

let botid = ('578634207484575744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Eğlence4 Komutları`)
    .addField('b*golat', '90 Dan Gol Atarsın')
    .addField('b*mcskin <skinadı>', 'Minecraft Skinleri Gösterir')
    .addField('b*avatar', 'Profil Resmini Atar')
    .addField('b*kılzabakışma', 'Kızla Bakışırsın')
    .addField('b*virüs', 'Virüs YÜklersin (şaka amaçlı)')
    .addField('b*hapishane', 'Profll Resmine HAPİSHANE Efekti Verir !')
    .addField('b*kapaklaflar',  'Kapak Laf Söyler')
    .addField('b*olay', 'Olay Var Dedik Geldik')
    .addField('b*discordakiyıkık', 'Discorda Kim Yıkık Onu Gösterir')
    .addField('b*su', 'Su Hayattır :)')
    .addField('b*csgo-kasa-açma', 'Şansını Dene Sende Bi Kasa Aç !')
    .addField('b*wanted', ' Profil Resmini WANTED Ayarlar ')
    .addField('b*boks', 'Boks Makinesine Vurursun')    
    .addField('b*gta', 'GTA Efekti Verir')
    .addField('b*intihar-et <intihar sebebi>', 'İntihar Edersin :(')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AwaQy2k) **|** [Bota Oy Ver (Vote)](https://www.loish-academy.cf/bot/578634207484575744)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence4',
  description: '',
  usage: ''
};