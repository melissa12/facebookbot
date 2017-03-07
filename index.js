var express = require('express');  
var bodyParser = require('body-parser');  
var request = require('request');  
var app = express();

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
        else if (event.message && event.message.text === "I am at the canteen and I want to go to the toilet") {
            canteenToilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to T2.07") {
            canteenT207(event.sender.id, {text: "Here"}); 
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


function canteenToilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Walk towards the JCR and turn right",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "The toilets are just on your left",  
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenT207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are just in front of you. Go up 4 flights.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Go through the door in front of you",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Walk along the corridor",  
                    "image_url": imageUrl
                     },
                    
                    {
                    "title": "It's the second door on your right",  
                        "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};
