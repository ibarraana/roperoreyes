import { sequelize, testConnection } from '../config/database.js';
import rolUsuarioSeeder from './rolUsuarioSeeder.js';
import colorSeeder from './colorSeeders.js';
import categoriaSeeder from './categoriaSeeders.js';
import talleSeeder from './talleSeeders.js';
import productoSeeder from './productoSeeders.js';

const runSeeds = async () => {
  try {
    console.log('--- Iniciando Proceso de Seeding Global ---');
    
    await testConnection();
    
    await sequelize.sync({ force: false }); 
    
    await rolUsuarioSeeder.up();  
    await colorSeeder.up();
    await categoriaSeeder.up();
    await talleSeeder.up();
    await productoSeeder.up();

    console.log('✅ Todos los seeders se ejecutaron con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('💥 Error durante el proceso de seeding:', error);
    process.exit(1);
  }
};

runSeeds();
