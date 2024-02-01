const express = require('express');
const app = express();
const path = require('path');
const session = require('cookie-session');
const methodOverride = require ('method-override')


app.use(
    session({
      secret: 'grupo6',
     
    })
  );


/* Importamos rutas */

const mainRoutes = require('./src/routes/main_routes')
const adminRoutes = require('./src/routes/admin_routes')
const shopRoutes = require('./src/routes/shop_routes')
const authRoutes = require('./src/routes/auth_routes')

//middlewares
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));



//carpeta de archivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

//parsea los datos recibidos por POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));




app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})

