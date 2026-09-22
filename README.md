# Proyecto de Ana Gabriela Ibarra

Pasos para ejecutar:

* Primero abrir el MySQL, y ejecutar los dos primeros comandos del script que se encuentra en la carpeta de recursos "script_db.sql"

```sql
DROP DATABASE IF EXISTS guia_backend;
CREATE DATABASE IF NOT EXISTS guia_backend;
```

Estos dos comandos borran la base de datos y la vuelven a crear de forma limpia

* Luego ejecutar el comando

```sql
USE guia_backend;
```

El comando, lo que hace es informarle al MySQL que vamos a trabajar sobre dicha base de datos

* El tercer paso es levantar setearle los datos a las tablas, mediante seeders, para ello, en la terminal del visual studio code, sobre la carpeta de Api (BackEnd con Express y Sequelize), ejecutamos el comando:

```cmd
npm run seed
```

Este comando cargara datos previamente en las tablas

* Cuarto paso es levantar todo el proyecto BackEnd, para ello, ejecutamos el comando:

```cmd
npm run dev
```

* Quinto paso es levantar el proyecto FrontEnd de React+Vite, para ello abrimos una terminal paralela, nos posicionamos en la carpeta "App" y ejecutamos el comando:

```cmd
npm run dev
```

y con esto tendriamos el proyecto funcionando

* Para poder interactuar con el mismo, debemos abrir el navegador, y colocar la url:

> http://localhost:5173/