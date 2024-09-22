import express from "express";
import axios from "axios";


import countryList from "./codes.js";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');



app.use(express.static("public"));

//app.use(bodyParser.urlencoded({ extended: true }));
app.locals.fromCode;
app.locals.toCode;

app.get('/', (req, res) => {


    res.render('index', { 
        countryList: countryList});


});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});