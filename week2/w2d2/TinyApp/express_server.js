
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080 // default port 8080

app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

function generateRandomString() {
 var result = '';
    for (var i = 6; i > 0; --i) result += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.length)];
    return result;
}



var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK" : "http://www.google.com"
};

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.post("/urls", (req, res) => {
  console.log(req.body.longURL);
  let myShortURL = generateRandomString()
  urlDatabase[myShortURL] = req.body.longURL  // debug statement to see POST parameters
  res.redirect("/urls");           // Respond with 'Ok' (we will replace this)
});

app.get("/u/:shortURL", (req, res) => {

  let longURL = urlDatabase[req.params.shortURL];
console.log(longURL)
  res.redirect(longURL);

});

app.post("/urls/:id/delete", (req, res) => {
  let deleteURL = req.params.id
  delete urlDatabase[deleteURL]
res.redirect("/urls");

});

app.post("/urls", (req, res) => {
let updateURL = req.params.id

res.render("urls_show")
});

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls", (req, res) => {
  let templateVars = { urlDatabase: urlDatabase };
  res.render("urls_index", templateVars);
});


app.get("/urls/:id", (req, res) => {
  let templateVars = {
   shortURL: req.params.id,
   urlDatabase: urlDatabase
    };
  res.render("urls_show", templateVars);
});





