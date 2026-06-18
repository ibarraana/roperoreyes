import app from './app.js'

import {
  sequelize,
  testConnection
} from './src/config/database.js'

import './src/models/index.js'

const startServer = async () => {

  try {

    await testConnection()

    await sequelize.sync({
      force: false
    })

    console.log('✅ Tablas sincronizadas')

    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`)
    })

  } catch (error) {

    console.error(error)

  }

}

startServer()