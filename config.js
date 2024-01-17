const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94757383584"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Asia/colombo'
global.gurl = 'https://wa.me/+94757383584?text=HI_Imalsha' // add your username
global.sudo = process.env.SUDO || '94757383584' 
global.devs = '94757383584';
global.website = 'https://wa.me/+94757383584?text=HI_Imalsha' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUl1YlU4NjZHdUN3RnUyeVlmOHlTK2Vad1VXVVZCT3ZWR0ZmTDhqUytGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWorNE1RZUFqbENiWjNkVGh3KzNTeit6N0JyMU9RcHZPYll6bEVqK3YzRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTk0zaDdzWjdhK1JZaTEzQkE5SGo2WXJJNUdFa3Uxb0VzSU1XUktOKzFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvd0xMc3ltZEx3K3VKRkZsNFdqNGV1dGt4QTdRQXpMZzNqRlN3OTFCNWk4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCc2dzaWdVTW90ZEdLZVczcFhNYXFMNWZ0K0k4NUM1QkJhMEU2UHRYRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhvaTUxYSs5bEREMkJxQzNUa0ozUURaTDhKN0dkV0RCSDFyc09nbTE1a009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NHhuSmx1anRXcjhJY3Q2bXhIMTgvYjEzTHBrd0oxYkJHY052Mk9PcXYvb2IyQmdHMFNjZ2NDbXQrMWI0VGlsdnM1MW1EZ2ZuMC9hcmE3RHQxOTNDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwNCwiYWR2U2VjcmV0S2V5IjoieGxCNFhDck54ZnpuSGZ6bTFIY1hJajVaZzJnVXk1UEtDMVB3ZEx4VHZyST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieU0zQ3J6QjlSTm1xallDLWpIYW11dyIsInBob25lSWQiOiI5MzM2YTU0Zi1lODJlLTQzYzktODI2ZS0xOTMwNWRhMGRhMmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUY1RFZpNXdXeklPUmx0aDZIL0lVZGl6UStVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBcTkvWVNSM0NuKzV4TGZIeVJ6Mmw0dW1uUFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaUk1c1lIRU4zUG5hMEdHQm9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIRmt3SDYvYmlMZ0kwbVRrb2dha2VpUDMxRlZyV2QzZUhzTTAzVVhaUVEwPSIsImFjY291bnRTaWduYXR1cmUiOiJpb3pVZUpQeUhkSk5panp2UGg1ai9jWVJCcXV2OStHN0s0UUl1cDJBY2xYNVVhMlBiR25VVXlOWDFpbzY2aldRMDNLNEliM3EvV1Q5VjFCT05IU2pEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZzlFNFBkL0E5RXI2TVJtRzVSa0szNDBKUzg2eGhGSmF4TUg0L1U4MSthdnZwb0xtRkQ4eHJZRVIxM2pLUkE4QzROeFNNb2M3VUx4L2VGVU13VG5MQXc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzU3MzgzNTg0OjM2QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3MzgzNTg0OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ4Wk1CK3YyNGk0Q05KazVLSUdwSG9qOTlSVmExbmQzaDdETk4xRjJVRU4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU0Njk5MjJ9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'IMALSHA',
  packname:  process.env.PACK_NAME || 'IMALSHA/OFC',
   
  botname:   process.env.BOT_NAME === undefined ? "ＸＬＩＣＯＮ 𝙵𝚁𝙾𝙼 _________Iᗰᗩᒪᔕᕼᗩ" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Iᗰᗩ Oᖴᑕ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '͓̽H͓͓̽̽E͓͓̽̽L͓͓̽̽L͓͓̽̽O͓̽ ͓̽I͓̽ ͓̽A͓͓̽̽M͓̽ ͓̽X͓͓̽̽L͓͓̽̽I͓͓̽̽C͓͓̽̽O͓͓̽̽N͓̽ ͓̽B͓͓̽̽O͓͓̽̽T͓̽ ͓̽M͓͓̽̽A͓͓̽̽K͓͓̽̽E͓͓̽̽D͓̽ ͓̽B͓͓̽̽Y͓̽ ͓̽ƗΜΔŁŞĦΔ ( ĐΔŘҜ Ň€ŘØ )' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
