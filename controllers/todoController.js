const bodyParser = require("body-parser");
let data = ['Get milk', 'Walk dog', 'Do coding', 'Go Home'];
let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {

app.get('/', (req, res) => {
    res.render('index', {todos: data});
});    

app.post('/', urlencodedParser, (req, res) =>{
    console.log('Post Request Recieved');
    data.push(req.body.item);
    res.render('index', {todos: data});
});

app.delete('/:item', (req, res) =>{
    data = data.filter((value) =>{
        return value !== req.params.item;
    });
});
};