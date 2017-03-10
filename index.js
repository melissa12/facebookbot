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
        else if (event.message && event.message.text === "I am at the canteen and I want to go to the library") {
            canteenLibrary(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to T2.09") {
            canteenT209(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to C2.04") {
            canteenC204A(event.sender.id, {text: "Here"}); 
            canteenC204B(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to C2.07") {
            canteenC207A(event.sender.id, {text: "Here"}); 
            setTimeout(canteenC207B(event.sender.id, {text: "Here"}), 3000);
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S1.32") {
            canteenS132A(event.sender.id, {text: "Here"}); 
            setTimeout(canteenS132B(event.sender.id, {text: "Here"}), 3000);
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S2.22") {
            canteenS222A(event.sender.id, {text: "Here"}); 
            setTimeout(canteenS222B(event.sender.id, {text: "Here"}), 3000);
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to N4.07") {
            canteenN407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S2.21") {
            canteenS221A(event.sender.id, {text: "Here"}); 
            canteenS221B(event.sender.id, {text: "Here"}); 
            canteenS221C(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to the canteen") {
            libraryCanteen(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to the toilet") {
            libraryToilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to T2.07") {
            libraryT207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to S1.32") {
            libraryS132A(event.sender.id, {text: "Here"}); 
            libraryS132B(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to N4.07") {
            libraryN407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to S2.22") {
            libraryS222A(event.sender.id, {text: "Here"}); 
            libraryS222B(event.sender.id, {text: "Here"}); 
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
                    "title": "Walk towards the JCR and turn right.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "The toilets are just on your left.",  
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
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 4 flights.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Go through the door in front of you.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Walk along the corridor.",  
                    "image_url": imageUrl
                     },
                    
                    {
                    "title": "It's the second door on your right.",  
                        "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenLibrary(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 2 flights.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Go through the door to the right of you.",  
                    "subtitle": "This is the library.",       
                    "image_url": imageUrl
                     }                 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenT209(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 4 flights.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "T2.09 is just to your right.",         
                    "image_url": imageUrl
                     }                 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC204A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.",  
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along the corridor.",         
                    "image_url": imageUrl
                                        },     
                    
                                        {
                    "title": "At the end of the corridor take the stairs.",  
                    "subtitle": "Go up 2 flights.",                       
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and right again.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function canteenC204B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "It's the fourth door on your left.",         
                    "image_url": imageUrl
                                        }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC207A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along the corridor.",         
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 2 flights.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Turn right and right again.", 
                    "image_url": imageUrl
                                        },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC207B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "It's the seventh door on your left.", 
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS132A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.", 
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along this corridor.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 2 flights.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Turn right and right again.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS132B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "At the end of this corridor turn right.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Go down the stairs to the first floor.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Walk along this corridor and take the second right.",
                    "subtitle": "The door is just on your right.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS222A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along the corridor.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 2 flights.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Turn right and right again.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function canteenS222B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "At the end of this corridor turn right.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Go down the stairs until you reach the second floor.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Walk along this corridor.",
                    "subtitle": "It's the second door on your right.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenN407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along the corridor.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 6 flights.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Turn left at the top of the stairs.",
                    "subtitle": "The door is at the top of the stairs.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS221A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs that are in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn right and walk along the corridor.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 2 flights.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Turn right and right again.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS221B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "At the end of this corridor turn right.",
                    "image_url": imageUrl
                     },
                    
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Go down the stairs until you reach the second floor.",
                    "image_url": imageUrl
                                        },
                    
                                        {
                    "title": "Walk along the corridor and take the third right.",
                    "image_url": imageUrl
                                        }

                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenS221C(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left.",
                    "image_url": imageUrl
                     },
                    
                    {
                    "title": "The door is the first door on your left.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryCanteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Exit the library, turn left and take the stairs.",
                    "subtitle": "Go down 2 flights.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The canteen is just on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryToilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Exit the library, turn left and take the stairs.",
                    "subtitle": "Go down 2 flights.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Walk towards the JCR and turn right.",
                    "subtitle": "The toilets are just on your left.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryT207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you exit the library take the stairs.",
                    "subtitle": "Go up 2 flights.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go through the door in front of you.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "It's the second door on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryS132A(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you exit the library take the stairs.",
                    "subtitle": "Go up 1 flight.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 2 flights.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "Turn right and right again.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryS132B(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "At the end of the corridor turn right.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and take the stairs",
                    "subtitle": "Go up 1 flight.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "Go down the stairs to the first floor.",
                    "subtitle": "Walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "Take the second right.",
                    "subtitle": "The door is just on your right.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};

function libraryN407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Exit the library, take the stairs to your left.",
                    "subtitle": "Go up 1 flight.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "At the end of the corridor take the stairs.",
                    "subtitle": "Go up 6 flights.", 
                    "image_url": imageUrl
                     },
                                                            {
                    "title": "Turn left at the top of the stairs.",
                    "subtitle": "The door is at the top of the stairs.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};
