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
global.Princesc = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9GWWVIdk9BbkRXZ01KL1A1U2U5UEhlUzZ1cVhjZ0VydEFGRER3TjJubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2plZHQ1Y1NQcDdrOG9ISjcyM3g0WWhRbXd3MndHczJyUzBPYi85Y3dBWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT25oNkRKM3pzSUFzUkZBZzVFMGdnSjFMSnBQNDczb3U1LzQ3amViNkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Mm9mNlR6RXBMMWRqQk1PK3Y0eDVFbVErenBkbGV4c3JyZzJqelhKNDJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DSzlDWWcrM3lac2hEWno4eThxSnhaQ0lCdTZncEZEMmt1bjZ4MlEvMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlXaE95RSs0MXRMajFJQjc3TU45MVY0aVB2aWJTdis0K2ZCTXVkWjFpQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JYaktNSVBEcklJMXpsVFF0VSt2QjlhZElYQnlFbmlMY21tc2wwMFVITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm1mZjhBOXRvMWFEQ3F3TXlqQm9hbGw5cGpMQkQ2L013aHd5aW1nR1h5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZoK0o1K2g0RjhaRzRObFlnOEYwSldMenNFWkMxQmtBbGl0R2lrU3N1U1hUeVZhMlE0Y2lWZndBd0wrWjhScHJrNG1LM0p3d2ZKT3V1dG5Ma3ViU2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IlVlQ0JSSER0UzVyZ1cvMGtaUG1mSVFOaCtkN3dWTHhpVkcwZUhudFVuRXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MDY0NTYwODQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIwQTY2N0ZCRDIzNjUyOTBFNzhEOUZGQTkwMEQwNkUxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIzMjkyNzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZUYkc0WXlpVEplMmlQX0d4S05vNVEiLCJwaG9uZUlkIjoiYjMxOWE3OWYtMGM0MC00OGNkLTljNjktN2I3MzU0YTgyNDkyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ5Uzhacy84c01oQzRoNGlPcGlRckRqR055az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZW1tQmNRVlI1a2liTk5UbG04MjVOMlUvclE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjkyN1oxS1QiLCJtZSI6eyJpZCI6IjkxOTA2NDU2MDg0MDo2M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwkIyA04TqjY/guKPKnOKGpuKGpuKGpuKGpuKGpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS9scDdrSEVLWFJvclVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3JYckt5Mk50YVA2cjRPMUhNeis2ajhmRjNnV2I1ZTY2NUYzMk5lMHlGTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieVhCUzFnalRCYzRFSlFDcXFhWVUyQU9LOUYrZ25EYXJiYldWR01KN1Q1Y1BXcHRrQnJhZ1VVWU5aK0xwMWlaR09JUytnQ3ZncEZ1dEJwcmdPWXA3Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5DU252WnlkcVNBeEw2dEpZWC9wWGFDZjdYVWpDSTR2L3B0TE9sS0ovcFpwcVdGRHhSbWZBc2cvTXcyMWpzTklhV215RFNCTmxvY2FRdFdLb2lwM2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDY0NTYwODQwOjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ2MTZ5c3RqYldqK3ErRHRSek0vdW8vSHhkNEZtK1h1dXVSZDlqWHRNaFQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMjkyNjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFlZIn0=' 
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
