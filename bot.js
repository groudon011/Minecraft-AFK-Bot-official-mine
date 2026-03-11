const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 10000

app.get('/', (req,res)=>{
  res.send("AFK Bot Running")
})

app.listen(PORT, ()=>{
  console.log("Web server running on port " + PORT)
})

console.log("Starting Minecraft bot...")

const bot = mineflayer.createBot({
  host: "akaag97_01.aternos.me",
  port: 27042,
  username: "AFK_Bot",
  version: false
})

bot.on("login", ()=>{
  console.log("Bot logged in!")
})

bot.on("spawn", ()=>{
  console.log("Bot joined the server!")
})

bot.on("error", (err)=>{
  console.log("Bot error:", err)
})

bot.on("end", ()=>{
  console.log("Bot disconnected!")
})

