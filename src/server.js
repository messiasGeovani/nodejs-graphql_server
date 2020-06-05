// server main file
require('dotenv').config()

const mongoose = require('mongoose')

const { logger } = require('./App/config/logger')

const { App } = require('./App')

const port = process.env.PORT || 4000

// starting the server
mongoose.connect(
    process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => 
    App.start(port, () => logger.info(`[server] running at ${port}`))
).catch((error) => 
    logger.error(`[Database] ${error}`)
)