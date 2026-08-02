/**
 * Uptime Command - Display bot uptime
 */

const config = require('../../config');

module.exports = {
  name: 'uptime',
  aliases: ['runtime', 'botuptime', 'alive', 'up'],
  category: 'general',
  description: 'Show bot uptime',
  usage: '.uptime',

  async execute(sock, msg, args, extra) {
    try {
      // Process uptime
      const uptimeMs = process.uptime() * 1000;

      const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((uptimeMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((uptimeMs / (1000 * 60)) % 60);
      const seconds = Math.floor((uptimeMs / 1000) % 60);

      const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Random Emoji
      const emojis = [
        "🌷", "🌹", "🪻", "🌺", "🌼",
        "🦚", "🦋", "🐼", "🦄", "🐬",
        "🌙", "☄️", "🌟", "⭐", "🌈",
        "🍁", "🍂", "🍀", "🎐", "🎀",
        "🎭", "🎨", "🎪", "🎡", "🎠",
        "🧸", "🪁", "🪄", "💠", "🔮",
        "💜", "💙", "🩵", "🤎", "🩶"
      ];

      const randomEmoji =
        emojis[Math.floor(Math.random() * emojis.length)];

      // Reply
      const message = `*⎯͢✧𝐔ᴘᴛɪᴍᴇ ${randomEmoji} ᥫ᭡:* ${uptime}`;

      await extra.reply(message);

      // Optional Reaction
      try {
        if (sock.sendMessage) {
          await sock.sendMessage(msg.key.remoteJid, {
            react: {
              text: randomEmoji,
              key: msg.key
            }
          });
        }
      } catch (e) {
        // Ignore reaction errors
      }

    } catch (error) {
      console.error('Error in uptime command:', error);
      await extra.reply('❌ Failed to fetch uptime.');
    }
  }
};
