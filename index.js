// Importamos los paquetes que requerimos
const express = require (`express`);
const hbs = require (`hbs`);
// Creamos la aplicacion
const app = express ();

// Definimos el motor de plantillas
//No de vamos a emplear MVC (Utilizar HBS)
app.set (`view engine`, `hbs`);
app.use(express.static(__dirname + `/public`));
app.set(`view engine`, `hbs`);

// configurar mis rutas 
app.get(`picasso`, (req, res) => { 
    res.render(`da vinci`);

    app.get(`da vinci`, (req, res) => { 
        res.render(`van Gogh`);
        
        app.get(`Van Gogh`, (req, res) => { 
            res.render(`diego velazquez`);

            app.get(`diego velazquez`, (req, res) => { 
                res.render(`index`);

// Vamos a generar los partials
hbs.registerPartials(__dirname + `/views/partials`);
// Generamos el sitio estatico

// Arrancamos el servidor web
app.listen(3000, ()=>{ 
    console.log(`Escuchando el puerto 300`);
 });
