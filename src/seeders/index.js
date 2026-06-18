import { sequelize } from '../config/database.js'

import { seedUsuarios } from './usuarioSeeder.js'
import { seedProductos } from './productoSeeder.js'

await sequelize.sync()

await seedUsuarios()
await seedProductos()

console.log('✅ Datos cargados')

process.exit()