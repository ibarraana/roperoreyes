DROP DATABASE IF EXISTS guia_backend;
CREATE DATABASE IF NOT EXISTS guia_backend;

USE guia_backend;


INSERT INTO usuarios ( nombre, email, passwordUsuario, telefono, calle, piso, departamento, ciudad, provincia, codigoPostal, createdAt, updatedAt) 
VALUES 
('Juan Pérez', 'juan.perez@email.com', 'clave123', '1122334455', 'Av. Siempreviva 742', '1', 'A', 'Córdoba', 'Córdoba', '5000', NOW(), NOW()),
('María García', 'maria.g@email.com', 'password456', '2233445566', 'Calle Falsa 123', '2', 'B', 'Rosario', 'Santa Fe', '2000', NOW(), NOW()),
('Carlos López', 'carlos.l@email.com', 'miSecrEt789', '3344556677', 'Belgrano 456', '3', 'B', 'Mendoza', 'Mendoza', '5500', NOW(), NOW());