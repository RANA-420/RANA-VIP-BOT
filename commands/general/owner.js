/**
 * Owner Command - Sends bot owner's contact card (vCard)
 */

const config = require('../../config');

module.exports = {
    name: 'owner',
    aliases: ['creator', 'dev', 'botowner'],
    category: 'general',
    description: 'Show bot owner contact information',
    usage: '.owner',
    ownerOnly: false,

    async execute(sock, msg, args, extra) {
        try {
            const chatId = extra.from;

            // Owner names
            const ownerNames = Array.isArray(config.ownerName)
                ? config.ownerName
                : [config.ownerName];

            // Owner numbers
            const ownerNumbers = Array.isArray(config.ownerNumber)
                ? config.ownerNumber
                : [config.ownerNumber];

            // Create vCards
            const vCards = ownerNumbers.map((num, index) => {
                const name = ownerNames[index] || ownerNames[0] || 'Bot Owner';

                return {
                    vcard: `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:X-Shahin Bot;
TITLE:Bot Owner
TEL;type=CELL;type=VOICE;waid=${num}:${num}
END:VCARD`
                };
            });

            // Send Contact Card
            await sock.sendMessage(chatId, {
                contacts: {
                    displayName: ownerNames[0] || 'Bot Owner',
                    contacts: vCards
                }
            });

            // Stylish Owner Info
            const ownerInfo = `
╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💗⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
├❥ᰰຼ ❏ 🌸 *ɴᴀᴍᴇ:* 𝐒ʜꫝʜɪɴ 𝐑ꫝɴꫝ
├❥ᰰຼ ❏ 🏡 *ꜰʀᴏᴍ:* 𝐒ʏʟʜᴇᴛ
├❥ᰰຼ ❏ 📘 *ᴄʟᴀꜱꜱ:* 𝐈ɴᴛᴇʀ 𝟏sᴛ 𝐘ᴇꫝʀ
├❥ᰰຼ ❏ 💖 *ʀᴇʟᴀᴛɪᴏɴ:* 𝐌ꫝʀʀɪᴇᴅ ❤️💍
├❥ᰰຼ ❏ 🎯 *ʜᴏʙʙʏ:* 𝐉ꫝɴɪɴꫝ 😒
├❥ᰰຼ ❏ ☎️ *ɴᴜᴍʙᴇʀ:* 𝟎𝟏𝟑𝟒𝟕𝟑𝟎𝟎𝟎𝟗𝟓
├❥ᰰຼ ❏ 🤖 *ʙᴏᴛ:* 𝐗-𝐒ʜꫝʜɪɴ 🌷
╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💗⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
            `;

            await extra.reply(ownerInfo);

        } catch (error) {
            console.error('Owner command error:', error);
            await extra.reply(`❌ Error: ${error.message}`);
        }
    }
};
