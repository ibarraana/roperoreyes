import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

// Aqui traigo el ruteo
import ruteo from './router/index.js'

const app = express()

app.use(cors())         
app.use(morgan('dev'))   
app.use(express.json())   

app.use('/api', ruteo)

export default app