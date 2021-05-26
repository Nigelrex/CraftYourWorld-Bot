const config = require('../../config.json');

module.exports = {
    name: 'wiki',
    aliases: "w",
    usage: "[query]",
    description: "Automagically search stuff on wiki for you.",
    availableTo: "@Members",
	execute: async(message, args) => {
        var embed
        if (args.length!=0) response = ({embed:{title:"Wikipedia Search", description:`https://en.wikipedia.org/wiki/${encodeURI(args.join(" "))}`, color:config.color}})
        else response = ({embed:{title:"You are not connected yet", description:`You need to say what you want to search for! Usage: \`${prefix}search [query]\`\nGenerated by <@${message.author.id}>`}})
        return message.channel.send(response)
        .catch(error => {
            message.reply({embed:{title:'There was an error searching for that.'}});
        });
    },
};