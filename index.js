import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var isAuthorized = false;

function matched(req, res, next) {
    const pass = "IamMuntaha";
    const username = "admin";
    if (req.body["password"] === pass && req.body["username"] === username) {
        isAuthorized = true;

    }
    next();
}
app.use(matched);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");

});

app.post("/check", (req, res) => {
    if (isAuthorized) {
        res.render("category.ejs");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");

    }
});
app.post("/enter", (req, res) => {

    let categoryName = req.body.category;
    categoryName = categoryName.toLowerCase();

    res.render(categoryName,
        { "val": categoryName }
    );

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});