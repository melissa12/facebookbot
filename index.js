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
        else if (event.message && event.message.text === "I am at the canteen and I want to go to the Toilet") { 
            canteenToilets(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "Hello") { 
            imageMessage(event.sender.id, {text: "Here"});
            imageMessage(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to T2.07") { 
            canteenT207(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to the Library") { 
            canteenLibrary(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to T2.09") { 
            canteenT209(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to C2.04") { 
            canteenC204_1(event.sender.id, {text: "Here"});
            canteenC204_2(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to C2.07") { 
            canteenC207_1(event.sender.id, {text: "Here"});
            canteenC207_2(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S1.32") { 
            canteenS132_1(event.sender.id, {text: "Here"});
            canteenS132_2(event.sender.id, {text: "Here"}); 
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

function imageMessage(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "One", 
                    "subtitle": "blah", 
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Two", 
                    "subtitle": "blah", 
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Three", 
                    "subtitle": "blah", 
                    "image_url": imageUrl
                     },
                    
                    {
                    "title": "Four", 
                        "subtitle": "blah", 
                        "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenToilets(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Walk towards the JCR and turn right. The toilets are just on your left.",
                    "subtitle": "."
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenT207(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are in front of you. Go up 4 flights." 
                     },
                    {
                        "subtitle": "Go through the door in front of you."
                    },
                    {
                        "subtitle": "Walk along the corridor."
                    },
                    {
                        "subtitle": "It's the second door on your right."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenLibrary(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are in front of you. Go up 2 flights." 
                     },
                    {
                        "subtitle": "Go through the door to the right of you. This is the library."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenT209(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are in front of you. Go up 4 flights." 
                     },
                    {
                        "subtitle": "T2.09 is just to your right."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC204_1(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are in front of you. Go up 3 flights." 
                     },
                    {
                        "subtitle": "Turn right and walk along the corridor."
                    },
                    {
                        "subtitle": "At the end of the corridor go up 2 flights of stairs."
                    },
                    {
                        "subtitle": "Turn right and right again."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC204_2(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Walk along this corridor." 
                     },
                    {
                        "subtitle": "It's the fourth door on your left."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenC207_1(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are just in front of you. Go up 3 flights." 
                     },
                    {
                        "subtitle": "Turn right and walk along the corridor."
                    },
                    {
                        "subtitle": "At the end of the corridor go up 2 flights of stairs."
                    },
                    {
                        "subtitle": "Turn right and right again."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenC207_2(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Walk along this corridor." 
                     },
                    {
                        "subtitle": "It's the seventh door on your left."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function canteenS132_1(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "Take the stairs that are just in front of you. Go up 3 flights." 
                     },
                    {
                        "subtitle": "Turn right and walk along the corridor."
                    },
                    {
                        "subtitle": "At the end of the corridor go up 2 flights of stairs."
                    },
                    {
                        "subtitle": "Turn right and right again."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS132_2(recipientId, text) { 
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "subtitle": "At the end of this corridor turn right." 
                     },
                    {
                        "subtitle": "Turn left and go up 1 flight of stairs."
                    },
                    {
                        "subtitle": "Go down the stairs until you reach the first floor."
                    },
                    {
                        "subtitle": "Walk along this corridor and take the second right. The door is just on your right."
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};
