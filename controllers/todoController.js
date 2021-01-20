const bodyParser = require("body-parser");
const mongoose = require('mongoose');
let data = [];
const urlencodedParser = bodyParser.urlencoded({extended: false});

//DATABASE
const dbURL = 'mongodb+srv://admin:todoadmin@cluster0.ox0mo.mongodb.net/todo?retryWrites=true&w=majority' //removed for security purposes
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true });
const todoModel = mongoose.model('Todo', {item: String});

let render = (res) => {
    todoModel.find((err, todo) => {
        if (err) throw err;
        res.render('index', {todos: todo});
    });
}


module.exports = (app) => {

app.get('/', (req, res) => {
    render(res);
});    

app.post('/', urlencodedParser, (req, res) =>{
    const task = new todoModel(req.body);
    task.save().then(() =>{
        render(res);
    });
});

app.delete('/:item', (req, res) =>{
    todoModel.find({item: req.params.item}).deleteOne((err, data) =>{
        if (err) throw err;
        render(res);
    })
});
};