import { sequelize, testConnection } from '../config/database.js';
import productosSeeder from './productosSeeder.js'; 

const runSeeds = async () => {
  try {
    console.log('--- Iniciando Proceso de Seeding Global ---');
    
    await testConnection();
    
    await sequelize.sync({ force: false }); 
    
    await productosSeeder.up();  

    console.log('✅ Todos los seeders se ejecutaron con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('💥 Error durante el proceso de seeding:', error);
    process.exit(1);
  }
};

runSeeds();
