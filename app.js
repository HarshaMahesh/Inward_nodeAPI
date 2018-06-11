const Express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
var Routes = require('./Routes');

const app = Express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(Cors());
app.use('/',Routes);


app.listen(8083,'localhost', (error) => {
    if (error){
        console.log(error);
        process.exit(-1);

    }

    console.log("Server running on 8083");
})