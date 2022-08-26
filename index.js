const express = require('express')
const path  = require('path')
const exphbs = require('express-handlebars')


//////////////////////////////////EXPRESS
const app = express()

/////////////////////////////////PABLIC PAPKA
app.use(express.static('public'))


//////////////////////////////////HENDELBARS
const hbs = exphbs.create({
    defaultLayout:'main',
    extname: '.hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')


/////////////////////////////////////ROUTER
app.get('/',(req,res)=>{
    res.render('pages/index',{
        
    })
})
app.get("/index", (req, res) => {
    res.render("pages/index", {
        
    });
});
app.get("/chards", (req, res) => {
    res.render("pages/chards", { 

    });
});


/////////////////////////////////////SERVER RUNNING
app.listen(3000,()=>{
    console.log("server is running ==> http://localhost:3000/ ");
})




