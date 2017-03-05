var express = require('express');  
var bodyParser = require('body-parser');  
var request = require('request');  
var app = express();
var builder = require('botbuilder');

app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());  
app.listen((process.env.PORT || 3000));

// Server frontpage
app.get('/', function (req, res) {  
    res.send('This is TestBot Server');
});
 
// Facebook Webhook
app.get('/webhook', function (req, res) {  
    if (req.query['hub.verify_token'] === 'testbot_verify_token') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Invalid verify token');
    }
});

app.post('/webhook', function (req, res) {  
    var events = req.body.entry[0].messaging;
    for (i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.message && event.message.text === "I am at T2.09 and I want to go to C2.07"){
            sendMessage(event.sender.id, {text: "Directions"});
        }
        else if (event.message && event.message.text === "Hello") { 
            getCardsAttachments(event.sender.id, {text: "Here"});
        }
    }
    res.sendStatus(200);
});

function sendMessage(recipientId, message) {  
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipientId},
            message: message,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }
    });
};

function getCardsAttachments(session) { 
    return [
        new builder.FirstCard(session)
        .title('One')
        .subtitle('blah')
        .text('dfg')
        .images([
            builder.CardImage.create(session, 'http://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630/triceratops_profile_o9rbze.jpg')
            ]),
        new builder.SecondCard(session)
        .title('Two')
        .subtitle('blah')
        .text('fgg')
        .images([
            builder.CardImage.create(session, 'http://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630/triceratops_profile_o9rbze.jpg')
            ])
        ];
}
        

