/**
 * Group Info Command - Display group information
 */

module.exports = {
  name: 'groupinfo',
  aliases: ['info', 'ginfo'],
  category: 'general',
  description: 'Show group information',
  usage: '.groupinfo',
  groupOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const metadata = extra.groupMetadata;

      const admins = metadata.participants.filter(
        p => p.admin === 'admin' || p.admin === 'superadmin'
      );

      const members = metadata.participants.filter(
        p => !p.admin
      );

      let text = `╭─╮᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐– 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 </👥̴*️⃟ᬽ፝֟━*\n`;
      text += `├❥ᰰຼ ❏ *ɢʀᴏᴜᴘ:* ${metadata.subject}\n`;
      text += `├❥ᰰຼ ❏ *ɢʀᴏᴜᴘ ɪᴅ:* ${metadata.id}\n`;
      text += `├❥ᰰຼ ❏ *ᴛᴏᴛᴀʟ ᴍᴇᴍʙᴇʀ:* ${metadata.participants.length}\n`;
      text += `├❥ᰰຼ ❏ *ᴀᴅᴍɪɴꜱ:* ${admins.length}\n`;
      text += `├❥ᰰຼ ❏ *ɴᴏɴ-ᴀᴅᴍɪɴ:* ${members.length}\n`;
      text += `├❥ᰰຼ ❏ *ᴄʀᴇᴀᴛᴇᴅ:* ${new Date(metadata.creation * 1000).toLocaleDateString()}\n`;
      text += `├❥ᰰຼ ❏ *ʀᴇꜱᴛʀɪᴄᴛᴇᴅ:* ${metadata.restrict ? "✓ Enabled" : "✗ Disabled"}\n`;
      text += `├❥ᰰຼ ❏ *ᴀɴɴᴏᴜɴᴄᴇ:* ${metadata.announce ? "✓ Enabled" : "✗ Disabled"}\n`;
      text += `├❥ᰰຼ ❏ *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*\n`;
      text += `├❥ᰰຼ ${metadata.desc ? metadata.desc : "No Description"}\n`;
      text += `├━━━━━━━━━━━━━━━━━━━━\n`;
      text += `├❥ᰰຼ 👑 *ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ*\n`;

      admins.forEach((admin, index) => {
        text += `├❥ᰰຼ ${index + 1}. @${admin.id.split("@")[0]}\n`;
      });

      text += `╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫`;

      await sock.sendMessage(
        extra.from,
        {
          text,
          mentions: admins.map(a => a.id)
        },
        { quoted: msg }
      );

    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
