/**
 * Ping Command
 */

module.exports = {
    name: 'ping',
    aliases: ['p'],
    category: 'general',
    description: 'Check bot response time',
    usage: '.ping',

    async execute(sock, msg) {
        try {
            const start = Date.now();

            const IMAGE_URL = "https://i.ibb.co.com/d4NJDwnt/file-00000000ab8c820b998b678c009cac77.png";

            const ping = Date.now() - start;

            const text = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💗⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
├❥ᰰຼ ❏ *𝐏๏፝֟ƞ̽ɢ ${ping} 𝐌ꜱ°🥹🎀*
├❥ᰰຼ ❏ *ꜱᴛᴀᴛᴜꜱ: 𝐎ɴʟɪɴᴇ*
╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💗⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯

*⎯͢✧🌷 𝐗-𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡*`;

            await sock.sendMessage(
                msg.key.remoteJid,
                {
                    image: { url: IMAGE_URL },
                    caption: text
                },
                {
                    quoted: msg
                }
            );

        } catch (err) {
            await sock.sendMessage(msg.key.remoteJid, {
                text: `❌ Error: ${err.message}`
            }, {
                quoted: msg
            });
        }
    }
};
