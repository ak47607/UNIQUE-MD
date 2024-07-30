import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['919064560840'],
  ['919064560840'], 
  ['919064560840'],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['919064560840'] 
global.prems = ['919064560840', '919064560840', '919064560840']
global.allowed = ['919064560840']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '⏤͟͟͞͞★͙≛͙⃝͙♥️𐌀ӄꍏรʜ↦↦↦↦↦'
global.princebot = '⏤͟͟͞͞★͙≛͙⃝͙♥️𐌀ӄꍏรʜ↦↦↦↦↦'
global.packname = '𝗪𝗔𝗦𝗜♥️' 
global.author = '𝗧𝗘𝗖𝗛♥️' 
global.princeig = 'https://www.instagram.com/akash__biswas__01?igsh=MWVyMmJpazA2anVlbQ==' 
global.princegp = ''
global.menuvid = 'https://i.imgur.com/0UK6D3b.mp4'
global.Princesc = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkt1TWNtUC93N3lDM2lEUEo2NFBXVE9JYTFZa05tc0NwZWFmb1YrNDkzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFGOEMyZ2FhdWJSSU5VZzlJcUwzNzVqMGhDSnFiZFlHcEdvTjFIdUhVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRndFRDA0UlZzcm1kQ2ZkU2czTmFHZy80NzNhOUdnTVcrUXRvMkNDc1dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyRVRWNlVDaFVvSzFrdGxpSUxUZUJ6c0FIeHhGaklKNXBadG00cmFOa3l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CbTNXK3AwUFFVaDFTc2F6ODl3dEhiZGUvMHdGVkpWQktIVStBWlp1MW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFUXhsZjBRdXl5dS96NkdnUkROSEswdzdoRmV6eVkyS3E1b2k2WVpkem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJYVjRvcUdJQXNQRlNPSy9KaGw5VVBOYnd3ZjI1cWpnc0FxM0xzcHVrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmpSdkgyQ21iWTgwaDNkNytSQXB1VEJjcmpLb1VKakQ4WjhkbWJpbVVpQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhOTjdOUnlheVlFMVVSRXZzeXY4aXRrNFNrZDlSZmZERDZpd3FrMWJMRExFL1lZejRUei95UDVSRWN5dVBwczdsQzRhelgvb09US2daRWtmRXFjS0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5Ijoid1VYZmdsVzEvVkhFMDdKaHRuRXJpTUZMeHBjZ3UzZkIvaGFONHArQmt2Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRVo2YXFuQmlSdVNYeWx3eHVfOG9vdyIsInBob25lSWQiOiIzZjdkODM1Yi02Zjg1LTQ5OTktOWFiZi1mZWU1OGQ1ZDg0OTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTZZL09RVVRMSThZeVNiczhWdUdzWExHdjN3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGUTIwVWgxUGF5TStQZTN3KzUyWE5nditpQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMTVc3QURaUSIsIm1lIjp7ImlkIjoiOTE5MDY0NTYwODQwOjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCQjIDThOqNj+C4o8qc4oam4oam4oam4oam4oamIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL2xwN2tIRUxIV29yVUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzclhyS3kyTnRhUDZyNE8xSE16KzZqOGZGM2dXYjVlNjY1RjMyTmUweUZNPSIsImFjY291bnRTaWduYXR1cmUiOiJmT0ZHQzlmUURrU0IxbHhiZ0JaS2NVT0FPUUlkNWlnaW4vY2V3SmdTRmZURXpjK25DZEJFdDFVNmJ6MTNnci81OExLbXVrcEpGYTJ4UXBVWEE3L1BEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR3U4dE5IcmJlU2VZZEhKbUhyOFB0aGlPdUgwbGJXbDlQeUZDdXpld3RkY2pTVmNLdGtlY0pzYmlmWmlWT1BKdEQrSnVEY1NLUWNwUXpoVFM4TnBqQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkwNjQ1NjA4NDA6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDYxNnlzdGpiV2orcStEdFJ6TS91by9IeGQ0Rm0rWHV1dVJkOWpYdE1oVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjMyOTkxNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMWVkifQ==' 
global.princeyt = 'https://youtube.com/@wasitech1'
global.Princelog = 'https://telegra.ph/file/edbbcd210a6279a856ffa.jpg'
global.thumb = fs.readFileSync('./Assets/wasi.png')

global.wait = '*♻️ _ʟᴏᴅɪɴɢ ᴘʟᴢ ᴡᴀɪᴛ ᴅᴇᴀʀ _*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
