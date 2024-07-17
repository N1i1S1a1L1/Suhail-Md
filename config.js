const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_11_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZ0QlpRLzZQWnBTeVBLWHhNSHRweFFYREp3aDEyRlJvWmQ2Wm9PMGxEalE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhmcjhISEhmUzV1SXhiMVRlSjU4NGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODNiOGQ4MjQtMTI4My00Y2Y5LTg2ZmYtMDJhMjk2YTM5YTI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTksXG4gICAgICA3LFxuICAgICAgNDMsXG4gICAgICA1NixcbiAgICAgIDIyLFxuICAgICAgMjU1LFxuICAgICAgMTIwLFxuICAgICAgMjAwLFxuICAgICAgMTI4LFxuICAgICAgNzEsXG4gICAgICAxMjIsXG4gICAgICAyMjAsXG4gICAgICA4NyxcbiAgICAgIDIwNyxcbiAgICAgIDE5OSxcbiAgICAgIDE5NixcbiAgICAgIDEyOSxcbiAgICAgIDMsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAzNCxcbiAgICAgIDIzOCxcbiAgICAgIDEzMyxcbiAgICAgIDExOCxcbiAgICAgIDE5OCxcbiAgICAgIDQ2LFxuICAgICAgMjE4LFxuICAgICAgMTYyLFxuICAgICAgNjcsXG4gICAgICAyNDYsXG4gICAgICA3NSxcbiAgICAgIDYzLFxuICAgICAgMTE5LFxuICAgICAgMjUsXG4gICAgICA0MyxcbiAgICAgIDEyNCxcbiAgICAgIDEwMixcbiAgICAgIDM0LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNVZLRDY1RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzkzMTI4MjE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhkY7JquqcseG0gMqfIOGXqeG0heG0h+G0h+qcscqc4bSAXCIsXG4gICAgXCJsaWRcIjogXCI2MzQ1ODE0MTg0MzQ2MDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJLzV6ZmdDRU9DTDI3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkluOVBpYWkybXR1MkUrWHlqUTI0Lzl5ektRMzZCN09SOXdJQm45cjJMRUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmM2OEROQUxLMDlOdlBGOUFGYjdSamNFSVdESlBMNVR1VVVJQVpYd0ZSM2oxMUVuZlVFMTNPeXFMcTNKM1FHWVlVU1hHbERaQkpkZTI5czk3MmFSQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEgzRG55T1pxczFBdFp1blRLQkd1aE5jc05DNkwvN1phTUJJbDRTZnljNFhDNVNkbGtYL0RCMzBLRUR0eklsVEZLSXUxYXhwOHlwblloMUMwVlZ2aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzkzMTI4MjE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTU3MDkyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
