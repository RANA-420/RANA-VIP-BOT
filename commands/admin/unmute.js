/**
 * Unmute Command - Open group (all members can send)
 */

module.exports = {
  name: 'unmute',
  aliases: ['open', 'opengroup'],
  category: 'admin',
  description: 'Open group (all members can send messages)',
  usage: '.unmute',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {

      await sock.groupSettingUpdate(extra.from, 'not_announcement');

      await extra.reply(`
⎯͢✧🔓 𝐆ʀᴏᴜᴩ 𝐎ᴩᴇɴᴇᴅ 💗

*—𝐀ꜱꜱʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ ᴇᴠᴇʀʏᴏɴᴇ🤍*

▢ *𝐆ᴏʀᴜᴩ 𝐎𝐍..🌷❤️‍🩹*

▢ *𝐒ʜᴀʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 🤍*

⎯͢✧✅ 𝐀ʟʟ 𝐌ᴇᴍʙᴇʀs 𝐂ᴀɴ 𝐒ᴇɴᴅ 𝐌ᴇssᴀɢᴇs 🎀
`);

    } catch (error) {
      console.error(error);
      await extra.reply(
        '⎯͢✧❌ 𝐄ʀʀᴏʀ😩'
      );
    }
  }
};
