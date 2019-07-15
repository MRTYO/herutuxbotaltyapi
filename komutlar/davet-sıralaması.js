const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davetleri göremiyorum yeterli iznim yok');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function (invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**DAVET SIRALAMASÝ**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davet-sýrasý"],
    permLevel: 0,
    kategori: "sunucu",

};

exports.help = {
    name: 'davet-sýralamasý',
    description: 'Sunucunuza en çok kullanýcý getirenleri sýralar.',
    usage: 'davet-sýralamasý',

};