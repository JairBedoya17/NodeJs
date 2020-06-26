const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// settings


app.set('port', process.env.PORT || 80);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(_dirname + '/static/, { dotfiles: 'allow'} ))
app.use(express.static(__dirname+'/static', {dotfiles:'allow'} ));

module.exports = app;
