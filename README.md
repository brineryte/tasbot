# TAS⛧BOT
Discord bot for retrieving and displaying The Acacia Strain lyrics built using nodejs.

## Add To Server and Run Locally
I will assume you know how to create a discord application/bot here: https://discord.com/developers/applications
1. Create a new application AND bot under your discord developer account.
1. Under the General Information section, copy the Client Id.
1. Go here https://discordapi.com/permissions.html and select any permissions you'd like.
    - `Note: Send/Read messages is required for this bot.`
1. Paste the Client Id in the input toward the bottom and click the generated link
1. Select the server you'd like to add it to from the list.
1. Go back to your Discord Developer account and select the app you created.
1. Under the Bot section, use the Copy button to copy the bot token.
1. Download or clone this repo
1. Create a file called `.env` in the root folder of this project. 
1. Copy and paste this into it: `TAS_BOT_TOKEN=your_token` Where your_token is the token from your discord app.
1. In a terminal, from the root folder run `npm run start`

## Using The Bot
This is a WIP so this will be updated as new features are added.
- `input` => `output` : `Description`
- `!ping` => `pong` : `Simple ping message to check connectivity.`
- `!tas` => `{random lyric}` : `This is the base command, it will grab a random TAS lyric and output it.`
