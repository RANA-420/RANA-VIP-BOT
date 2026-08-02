/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['8801742564047'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: [' 𝐒ʜᴀʜɪɴ 𝐑ᴀɴꫝᥫ᭡ '], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '𝐗-𝐒ʜꫝʜɪɴ-𝐁ᴏᴛ',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363429830985012@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: '𝐗-𝐒ʜꫝʜɪɴ🌷',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    /// Message Configuration
messages: {
  wait: '⏳ *ρℓєαѕє ωαιт...*',

  success: '✅ *¢σммαη∂ єχє¢υтє∂ ѕυ¢¢єѕѕƒυℓℓу!*',

  error: '❌ *єяяσя σ¢¢υяяє∂!*',

  ownerOnly: '👑 *σɴℓу вσт σωɴєʀ ᴄαɴ υѕє тнιѕ ᴄσммαɴ∂!*',

  adminOnly: '🛡️ *σɴℓу ɢʀσυρ α∂мιηѕ ᴄαɴ υѕє тнιѕ ᴄσммαɴ∂!*',

  groupOnly: '👥 *тнιѕ ᴄσммαɴ∂ ᴄαɴ σηℓу вє υѕє∂ ιη ɢʀσυρѕ!*',

  privateOnly: '💬 *тнιѕ ᴄσммαɴ∂ ᴄαɴ σηℓу вє υѕє∂ ιη ρʀιναтє ᴄнαт!*',

  botAdminNeeded: '🤖 *вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ᴄσммαɴ∂!*',

  invalidCommand: '❓ *ιηναℓι∂ ᴄσммαɴ∂! турє .мєηυ ƒσʀ нєℓρ.*'
},
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
