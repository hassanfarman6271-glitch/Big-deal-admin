require("dotenv").config();

const express = require("express");
const app = express();

const {
  Client,
  GatewayIntentBits,
  Partials
} = require("discord.js");

// =========================
// EXPRESS SERVER
// =========================

app.get("/", (req, res) => {
  res.send("BIG DEAL ADMIN ONLINE");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});

// =========================
// DISCORD CLIENT
// =========================

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.DirectMessages
  ],
  partials: [Partials.Channel]
});

// =========================
// READY EVENT
// =========================

client.once("ready", () => {
  console.log(`${client.user.tag} is Online`);
  client.user.setActivity("BIG DEAL SECURITY");
});

// =========================
// TEST COMMAND
// =========================

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

// =========================
// LOGIN
// =========================

client.login(process.env.TOKEN);
