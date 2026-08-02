// commands/fun/ship.js
module.exports = {
  name: 'ship',
  aliases: ['shipit', 'match'],
  category: 'fun',
  description: 'দুইজনের লাভ ম্যাচ দেখো 😆💖',
  usage: '.ship (random) OR .ship @user1 @user2 OR reply with .ship',
  groupOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const ctx = msg.message?.extendedTextMessage?.contextInfo || {};
      const mentioned = ctx.mentionedJid || [];

      let a = null;
      let b = null;

      // ২ জনকে মেনশন করলে
      if (mentioned.length >= 2) {
        a = mentioned[0];
        b = mentioned[1];
      }

      // ১ জনকে মেনশন করলে
      else if (mentioned.length === 1) {
        a = mentioned[0];
        b = extra.sender;
      }

      // Reply করলে
      else if (ctx.participant) {
        a = ctx.participant;
        b = extra.sender;
      }

      // কিছু না দিলে Random ২ জন
      else {
        if (extra.isGroup && extra.groupMetadata?.participants) {
          const participants = extra.groupMetadata.participants
            .map(p => p.id)
            .filter(id => id !== sock.user.id);

          if (participants.length < 2) {
            return extra.reply('❌ গ্রুপে শিপ করার মতো পর্যাপ্ত সদস্য নেই!');
          }

          const shuffled = [...participants].sort(() => Math.random() - 0.5);
          a = shuffled[0];
          b = shuffled[1];
        } else {
          return extra.reply('❌ এই কমান্ড শুধুমাত্র গ্রুপে ব্যবহার করা যাবে!');
        }
      }

      const nameOf = id => `@${id.split('@')[0]}`;

      // একই জুটির জন্য একই শতাংশ থাকবে
      const ids = [a, b].sort().join('');
      const seed = ids.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
      const love = (seed * 7) % 101;

      const hearts = ['💖', '💕', '💘', '💞', '💓', '❤️‍🔥', '😍', '💝'];
      const heart = hearts[Math.floor(Math.random() * hearts.length)];

      const messages = [

`💘 *『 LOVE CALCULATOR 』* 💘

${nameOf(a)} 💞 ${nameOf(b)}

${heart} *লাভ স্কোর:* *${love}%*

${
love >= 95
? '💍 আরে বাবা! এদের বিয়ের কার্ড ছাপাও! 😂'
: love >= 85
? '🥰 এই জুটি দেখে কিউপিডও খুশি!'
: love >= 70
? '😍 প্রেম হওয়ার সম্ভাবনা অনেক বেশি!'
: love >= 50
? '😉 ধীরে ধীরে কিছু একটা হতে পারে!'
: love >= 30
? '😂 বন্ধুত্ব পর্যন্ত ঠিক আছে!'
: '💀 এই জুটি দেখে কিউপিড চাকরি ছেড়ে দিয়েছে!'
}`,

`💕 *『 SHIP RESULT 』* 💕

👦 ${nameOf(a)}
      ❤️
👧 ${nameOf(b)}

💖 *ম্যাচ:* *${love}%*

${
love >= 90
? '🎉 গ্রুপের নতুন লাভ বার্ডস! 🕊️'
: love >= 75
? '🌹 ইনবক্সে কিছু একটা চলছে মনে হয়! 🤭'
: love >= 60
? '😏 একটু চেষ্টা করলে প্রেম জমে যাবে!'
: love >= 40
? '🙈 একজন Crush খায়, আরেকজন জানেই না!'
: love >= 20
? '🤣 Seen পর্যন্তই গল্প শেষ!'
: '☠️ এদের প্রেমের চেয়ে ঝগড়ার চান্স বেশি!'
}`,

`🤖 *SHIP MACHINE 3000*

📌 জুটি:
${nameOf(a)}
❤️
${nameOf(b)}

📊 *Love Meter:* *${love}%* ${heart}

${
love >= 95
? '👑 Perfect Couple!'
: love >= 80
? '😍 একদম সিনেমার হিরো-হিরোইন!'
: love >= 65
? '😋 সামনে কিছু একটা হবেই!'
: love >= 45
? '🤝 বন্ধুত্ব থেকে শুরু হোক!'
: love >= 25
? '😂 একজন রাজি, আরেকজন Offline!'
: '💀 ভাই, এই জুটি বানাতে গিয়ে Cupid Logout মেরে দিছে!'
}`,

`💝 *গোপন প্রেম পরীক্ষা* 💝

${nameOf(a)} 💖 ${nameOf(b)}

✨ *ফলাফল:* *${love}%*

${
love >= 90
? '💍 দাওয়াতের অপেক্ষায় থাকলাম!'
: love >= 75
? '🥳 এদের দেখে সিঙ্গেলরা কাঁদবে!'
: love >= 60
? '🌸 ভালোই মানিয়েছে!'
: love >= 40
? '😆 চেষ্টা করলে কিছু হতে পারে!'
: '🤣 প্রেম না, বন্ধু থাকলেই ভালো!'
}`

      ];

      const result = messages[Math.floor(Math.random() * messages.length)];

      await sock.sendMessage(
        extra.from,
        {
          text: result,
          mentions: [a, b]
        },
        {
          quoted: msg
        }
      );

    } catch (err) {
      console.error('[SHIP ERROR]', err);
      await extra.reply('❌ উফ! কিউপিডের তীর ভেঙে গেছে! আবার চেষ্টা করো। 😂');
    }
  }
};
