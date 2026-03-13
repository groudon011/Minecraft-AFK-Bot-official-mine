const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req,res) => {
  res.send("Minecraft AFK Bot is running!")
})

app.listen(PORT, () => {
  console.log("Web server running on port " + PORT)
})

const bot = mineflayer.createBot({
  host: 'akaag97_01.aternos.me',
  port: 27042,
  username: 'AFK_Bot1'
})

bot.on('spawn', () => {
  console.log("Bot joined the server!")

  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

  }, 30000)
})

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting...")

  setTimeout(() => {
    startBot()
  }, 5000)
})