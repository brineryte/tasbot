const { randomInt } = require('crypto');
const fs = require('fs');

module.exports = {
    name: 'tas',
    description: 'main command for retrieving lyrics',
    execute(message, args) {

        const albumDict = [];

        files = fs.readdirSync('./lyrics');

        files.forEach( (file) => {
            var contents = fs.readFileSync('./lyrics/' + file, 'utf8');
            albumDict.push(JSON.parse(contents));
        });

        let album = albumDict[0]
        let song = album[Math.floor(Math.random() * album.length)]
        message.channel.send(">>> ```" + song.lyrics + "```");
    }
}
