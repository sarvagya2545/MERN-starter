// store secret keys in .env file and access from here
module.exports = {
    mongoURI: process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : "mongodb://localhost:27017/<dbname>"
}