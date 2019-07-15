const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyan�z�n ad�n� yaz�n�z.
    totalShards: 'auto',
    token: "NTc4NjM0MjA3NDg0NTc1NzQ0.XR4DCQ.9oa7C74l_wWuYKFyww2f4P6g0qc"// Buraya tokeninizi yaz�n�z.
});

scarew.spawn();

scarew.on('launch', shard => {
    console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);
