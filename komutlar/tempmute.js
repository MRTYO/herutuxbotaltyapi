const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = async (client, message, args) => {

  //!süreli-sustur@üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Yanlış yazdınız doğru yazım: b*tempmute <kullanıcı> <süre> ");
  if(tomute.hasPermission("VIEW_AUDIT_LOG")) return message.reply("***Hey Dostum ! Sen Kafayımı Sıyırdı Bu Bi Yetkili !?!?!?***");
let muterole = message.guild.roles.find(r => r.name === "Süreli-Susturulmuş");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Süreli-Susturulmuş",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("``Dostum Yanlış Kullanım Doğru Kullanım : b*tempmute <kullanıcı> <süre>``");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> **Kullanıcı Başırı Şekilde Ağzı Kokmuş Çorapla Tıkandı ! Süre : **  **${ms(ms(mutetime))}**`);
  

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **Hadi İyisin Çorabı Çıkardılar Git Bi Ağzını Yıka!**`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['süreli-sustur', 'tempmute'],
  permLevel: 1
};

exports.help = {
  name: 'tempmute',
  description: 'Modların ve üstündeki kişilerin 2 tane uyarı alanları süreli susturmasına yarar.',
  usage: 'tempmute [Kullanıcı] [Süre]'
};