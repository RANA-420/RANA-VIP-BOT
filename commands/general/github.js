/**
 * GitHub Command
 */

module.exports = {
    name: 'github',
    aliases: ['repo', 'git', 'source', 'sc', 'script'],
    category: 'general',
    description: 'Show GitHub username',
    usage: '.github',

    async execute(sock, msg, args, extra) {
        const username = "ʏᴏᴜʀ ᴜꜱᴇʀ ɴᴀᴍᴇ"; // এখানে তোমার GitHub username দাও

        await extra.reply(
`*⎯͢✦ 𝐆ɪᴛʜᴜʙ ⪼ 〈${username}〉*`
        );
    }
};
