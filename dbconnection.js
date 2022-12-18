const { MongoClient } = require("mongodb")

async function dbConnect() {
    try {
        const client = new MongoClient(`mongodb://localhost:27017/WIN_DB`)
        await client.connect()
        return client.db("test")
    } catch (error) {
        throw error;
    }
}

module.exports = { dbConnect }
