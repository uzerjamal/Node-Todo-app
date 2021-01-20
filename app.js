const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

todoController(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${port}`);
});