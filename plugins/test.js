let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    // إرسال إشارة بأن البوت يسجل رسالة صوتية
    await conn.sendPresenceUpdate('recording', m.chat);
    await new Promise(resolve => setTimeout(resolve, 5000)); // تأخير للتظاهر بتسجيل طويل

    // إرسال رسالة صوتية مسجلة مسبقًا (يمكنك استبدال الرابط برابط ملف الصوت الخاص بك)
    const audioUrl = 'https://example.com/audio.mp3'; // استبدل هذا بالرابط الحقيقي لملف الصوت
    await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });

  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'حدث خطأ أثناء محاولة إرسال الرسالة الصوتية.', m);
  }
}

handler.help = ['feature']
handler.tags = ['infobot']
handler.command = /^(feature|totalfitur)$/i
export default handler
