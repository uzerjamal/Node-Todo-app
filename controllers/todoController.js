const { render } = require("ejs");

let data = ['Get milk', 'Walk dog', 'Do coding', 'Go Home'];

module.exports = (app) => {

app.get('/', (req, res) => {
    res.render('index', {todos: data});
});    

app.post('/', (req, res) =>{

});

};