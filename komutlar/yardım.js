const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Komutlar")
        .setDescription('')
        .setColor('RANDOM')
        .addField("``b*eğlence | Eğlence Menülerini Gösterir ``", "**︾**")
        .addField("``b*komutlar | Kullanıcı Komutlarını Gösterir``", "**︾**")
        .addField("``b*ayarlanabilir | Sunucu Ayarlarını Gösterir ``", "**︾**")
        .addField("``b*yetkili | Yetkili Komutlarını Gösterir Gösterir``", " Linkler",)
        .addField("**» Botun Yardım Sunucusu**", "[Yardım Sunucusu](https://discord.gg/MkmsECP)")
        .addField("**» Botun Davet Linki **", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=805829694)")
        .setFooter('🇹🇷 | BLOCKER Güncel Sürüm [ BETA v0.0.2  ]')
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};