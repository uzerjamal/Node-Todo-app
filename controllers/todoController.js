const { render } = require("ejs");

module.exports = (app) => {

app.get('/', (req, res) => {
    res.render('index');
});    

app.post('/', (req, res) =>{

});

};