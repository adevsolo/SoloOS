const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Soloo`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</subtosolo>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Solo Central`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://soloo.fun](https://soloo.fun)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
