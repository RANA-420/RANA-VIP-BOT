/**
 * Welcome - Enable/disable welcome messages
 */

const db = require('../../database');

module.exports = {
  name: 'welcome',
  aliases: ['welcomeon', 'welcomeoff'],
  category: 'admin',
  desc: 'Enable/disable welcome messages',
  usage: 'welcome on/off',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  execute: async (sock, msg, args) => {
    try {
      const groupId = msg.key.remoteJid;
      const action = args[0]?.toLowerCase();

      if (!action || !['on', 'off'].includes(action)) {
        const groupSettings = db.getGroupSettings(groupId);
        const status = groupSettings.welcome
          ? '✅ 𝐄ɴꫝʙʟᴇᴅ'
          : '❌ 𝐃ɪsꫝʙʟᴇᴅ';

        return await sock.sendMessage(groupId, {
          text: `👋 𝐖ᴇʟᴄᴏᴍᴇ

𝐒ᴛꫝᴛᴜs : ${status}
𝐌ᴇssꫝɢᴇ : ${groupSettings.welcomeMessage}

━━━━━━━━━━━━━━
𝐔sꫝɢᴇ : .welcome on/off
𝐒ᴇᴛ : .setwelcome <message>`
        }, { quoted: msg });
      }

      const enable = action === 'on';
      db.updateGroupSettings(groupId, { welcome: enable });

      await sock.sendMessage(groupId, {
        text: enable
          ? `✅ 𝐖ᴇʟᴄᴏᴍᴇ 𝐌ᴇssꫝɢᴇs 𝐄ɴꫝʙʟᴇᴅ!

👋 𝐍ᴇᴡ ᴍᴇᴍʙᴇʀs ᴡɪʟʟ ɴᴏᴡ ʀᴇᴄᴇɪᴠᴇ ᴡᴇʟᴄᴏᴍᴇ 𝐌ᴇssꫝɢᴇs.`
          : `❌ 𝐖ᴇʟᴄᴏᴍᴇ 𝐌ᴇssꫝɢᴇs 𝐃ɪsꫝʙʟᴇᴅ!`
      }, { quoted: msg });

    } catch (error) {
      console.error('Welcome Error:', error);

      await sock.sendMessage(msg.key.remoteJid, {
        text: `❌ 𝐄ʀʀᴏʀ

${error.message}`
      }, { quoted: msg });
    }
  }
};
