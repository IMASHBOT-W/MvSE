const fs = require('fs-extra');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
};


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '': process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Sa06': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN,
BOT_NUMBER: process.env.BOT_NUMBER === undefined ? '94771323434': process.env.BOT_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY="76cb7f39",
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://yasiyaytlk:yasi123@test1.i7ezb.mongodb.net/' : process.env.MONGODB_URI
};
