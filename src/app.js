import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'

import {createRoles} from './libs/initialSetUp'


//routes
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import categoryRoutes from './routes/categoryProducts.routes'
import ventaRoutes from './routes/ventas.routes'
import gastosRoutes from './routes/gastos.routes'
import cors from 'cors';



const app = express();
createRoles();



app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

//statics files
app.use('/public', express.static(`${__dirname}/storage/imgs`))
console.log(`${__dirname}/storage/imgs`)


app.get('/', (req,res)=> {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description:app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/categoryProduct', categoryRoutes)
app.use('/api/ventas', ventaRoutes)
app.use('/api/gastos', gastosRoutes)

export default app;
