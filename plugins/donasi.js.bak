import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/58ccab17455e3a57f69d3.jpg`
    return conn.sendButton(m.chat, '┌─「 Donasi • Pulsa 」\n│ • *Indosat:* +62 858-7650-1859\n│ • *XL Axiata:* +62 877-8867-0868\n❏────', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/rizkyeditz556",
                mediaType: "VIDEO",
                title: 'Donasi To RizkyEditz ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler