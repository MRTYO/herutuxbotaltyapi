const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

var sahip = ayarlar.sahip

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("id", "317974144253689856");

if(message.member !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(OGON) {
client.user.setStatus("online");
message.channel.send('Durum **Cevrimiçi** olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'durum-ayarla-cevrimici',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'durum-ayarla-cevrimici'
};
//XiR