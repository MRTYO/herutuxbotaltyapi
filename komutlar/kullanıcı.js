const Discord = require('discord.js');

let botid = ('578634207484575744') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)
    .addField('b*kısalt <Link>', 'Link Kısaltma')//ne kadar kullanıcı komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('b*istatistik', 'Sunucu Bilgi')
    .addField('b*rapor <@kisi> <sebeb>', 'Kişiyi Şikayet Eder')
    .addField('b*havadurumu <Şehir>', 'Seçilen Şehrin Hava Durumu')
    .addField('b*nsfw-gif', '+18 Kanalda Porno Grafik (GIF)')
    .addField('b*davet-sıralaması', 'Sunucya En Çok Kim Davet Ettiğini Gösterir')
    .addField('b*tavsiye', 'Bot İçin Tavsiye Sölersiniz ')   
    .addField('b*hg <@kisi>', 'Resimli Hoş Geldin')
    .addField('b*twitch-gif', 'Twitch Gifleri')
    .addField('b*davet', 'Bulunduğunuz Sunucunun Davet Linki')
    .addField('b*talep', 'Sunucuda Bi Sorun Varsa Çözmene Sağlar')
    .addField('b*profil', 'Seviye System | XP Profilini Gösterir')
    .addField('b*sor <soru>', 'Bota Soru Sorarsın')
    .addField('b*tavsiye <tavsiyeniz>', 'Tavsiye Verirsiniz [Bu Sunucuda Tavsiyenizi Görebilirsiniz](https://discord.gg/AwaQy2k)')
    .addField('b*hastebin <kod|başlık>', 'Hastebin | Kod Sitesi ')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/AwaQy2k) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${578634207484575744}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'komutlar',
  description: '',
  usage: ''
};