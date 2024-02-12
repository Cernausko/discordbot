const { Client, Intents, MessageAttachment } = require('discord.js');
const Welcomer = require('./structures/welcomer');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on("ready", () => {
    console.log("Welcome bot is ready and connected to discord!");
})

client.on("guildMemberAdd", async member => {
    const image = new Welcomer()
    .setBackground("https://cdn.discordapp.com/attachments/1193908216988454933/1206594484129759232/ad9f8ef34cbd3567db5df30e484bc00e.jpg?ex=65dc93ae&is=65ca1eae&hm=fa3a683e3134966ca4ea765dfe2771a4bda478b2aa6db2fbae958a06f69c5b4e&")
    .setGIF(false)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setName(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setBlur(2)

    const channel = await member.guild.channels.fetch()
    .then(channels => channels.find(x => x.name === "👋︱ᴀᴛᴠʏᴋᴇʟɪᴀɪ"))

    return channel?.send({
        files: [ new MessageAttachment(await image.generate(), "welcome.gif") ]
    })
})

client.login("MTIwNjU5MjI5MDEzOTY3NjY4Mw.G5TOtq.FNRmHroYcFHZswPSjKSSrGYh84zW_QfYowubi0")

