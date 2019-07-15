const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Komutlar")
        .setDescription('')
        .setColor('RANDOM')
        .addField("** :tada: Eğlence Komutları :tada:**", `b*eğlence1 = Eğlence Komutlarını Gösterir `)
        .addField("** :tada: Eğlence Komutları :tada:**", `b*eğlence2 = Eğlence2 Komutlarını Gösterir `) 
        .addField("** :tada: Eğlence Komutları :tada:**", `b*eğlence3 = Eğlence3 Komutlarını Gösterir `)
        .addField("** :tada: Eğlence Komutları :tada:**", `b*eğlence4 = Eğlence4 Komutlarını Gösterir `)
        .addField("**» Botun Yardım Sunucusu (Support Server)**", "[Yardım Sunucusu](https://discord.gg/MkmsECP)")
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
    aliases: ['e', 'funy', 'eğlence', 'eğ'],
    permLevel: 0
};

exports.help = {
    name: 'eğlence',
    description: 'Tüm komutları gösterir.',
    usage: 'eğlence'
};