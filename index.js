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
            canteenC204(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to C2.07") {
            canteenC207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S1.32") {
            sendMessage(event.sender.id, {text: "Take the stairs in front of you (Go up 3 flights). Turn right and walk along this corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Go down the stairs to the first floor. Walk along this corridor and take the second right. The door is just on your right."});
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S2.22") {
            sendMessage(event.sender.id, {text: "Take the stairs in front of you (Go up 3 flights). Turn right and walk along this corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Then go down the stairs until you reach the second floor. Walk along this corridor. It's the second door on your right."});            
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to N4.07") {
            canteenN407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the canteen and I want to go to S2.21") {
            sendMessage(event.sender.id, {text: "Take the stairs in front of you. Go up 3 flights. Turn right and walk along the corridor. At the end of the corridor take the stairs and go up 2 flights. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Go down the stairs until you reach the second floor. Walk along the corridor and take the 3rd right. Turn left. The door is the first door on your left."});
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
            sendMessage(event.sender.id, {text: "As you exit the library take the stairs to your left up 1 flight. Turn right and walk along the corridor. At the end of the corridor go up 2 flights. Turn right and right again. Walk along this corridor. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Go down the stairs until you reach the first floor. Walk along this corridor. Take the second right. The door is just on your right."});
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to N4.07") {
            libraryN407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to T2.09") { 
            libraryT209(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to S2.22") { 
            sendMessage(event.sender.id, {text: "As you exit the library take the stairs to your left and go up 1 flight. Turn right and walk along the corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Go down the stairs until you reach the second floor. Walk along this corridor. It's the second door on your right."});
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to C2.04") { 
           libraryC204(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to C2.07") { 
            libraryC207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at the library and I want to go to S2.21") { 
            sendMessage(event.sender.id, {text: "As you exit the library take the stairs to your left and go up 1 flight. Turn right and walk along the corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Go down the stairs until you reach the second floor. Walk along the corridor and take the third right. Turn left. S2.21 is the first door on your left."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to the toilet") { 
            S221Toilet(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to the canteen") { 
            sendMessage(event.sender.id, {text: "Turn right as you leave the room, then right again. Turn left and walk along the corridor. Take the stairs up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 3 flights of stairs. The canteen is to your right."}); 
        } 
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to the library") { 
            sendMessage(event.sender.id, {text: "Turn right as you leave the room, then right again. Turn left and walk along the corridor. Take the stairs up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 1 flights of stairs. The library is just in front of you."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to S2.22") { 
            S221S222(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to C2.07") { 
            S221C207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to T2.07") { 
            sendMessage(event.sender.id, {text: "Turn right as you leave the room and then right again. Turn left and walk along the corridor. Take the stairs up to level 2.5. Turn right and go down 1 fligt of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. Go through the door in front of you. Walk along the corridor. T2.07 is the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to S1.32") { 
            S221S132(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to T2.09") { 
            sendMessage(event.sender.id, {text: "Turn right and right again as you leave the room. Turn left and walk along the corridor. Take the stairs and go up to leavel 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. T2.09 is just to your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to N4.09") { 
            sendMessage(event.sender.id, {text: "Turn right and right again as you leave the room. Turn left and walk along the corridor. Take the stairs and go up to level 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go up 4 flights. Turn left at the top of the stairs. N4.07 is at the top of the stairs."}); 
        } 
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to C2.04") { 
            S221C204(event.sender.id, {text: "Here"}); 
        }
        
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to the toilet") { 
            S222Toilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to the canteen") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 3 flights of stairs. The canteen is to your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to the library") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 1 flight of stairs. The library is just in front of you."}); 
        } 
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to S2.21") { 
            S222S221(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to C2.07") { 
            S222C207(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to T2.07") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. Go through the door in front of you. Walk along the corridor. It's the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to S1.32") { 
            S222S132(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to T2.09") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. T2.09 is just to your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to N4.07") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go up 4 flights. Turn left at the top of the stairs. The door is at the top of thestairs. "}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to C2.04") { 
            S222C204(event.sender.id, {text: "Here"}); 
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


function libraryT209(recipientId, text) { 
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
                    "subtitle": "Go up 2 flights.",
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


function libraryC204(recipientId, text) { 
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
                    "subtitle": "At the end of the corridor go up 2 flights of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and right again.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "C2.04 is the fourth door on your left.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function libraryC207(recipientId, text) { 
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
                    "subtitle": "At the end of the corridor go up 2 flights of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and right again.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "C2.07 is the seventh door on your left.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and walk along the corridor.",
                    "subtitle": "At the end of the corridor go up 2 flights of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and right again.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "C2.07 is the seventh door on your left.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function canteenC204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Take the stairs in front of you.",
                    "subtitle": "Go up 3 flights.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and walk along the corridor.",
                    "subtitle": "At the end of the corridor go up 2 flights of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and right again.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "C2.04 is the fourth door on your left.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S221Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left and walk along the corridor.",
                    "subtitle": "Go through the doors and continue to walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and walk along the corridor.",
                    "subtitle": "Turn left at the end of the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilet is the second door on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S221S222(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right and right again as you leave the room.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right at the end of the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "S2.22 is the second door on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S221C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right and right again as you leave the room.",
                    "subtitle": "Then turn left and walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs and go up to floor 2.5.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right, then left, and walk along the corridor.", 
                    "subtitle": "C2.07 is the second door on your right.", 
                    "image_url": imageUrl 
                     }, 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S221S132(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right and right again as you leave the room.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs down until you reach the first floor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Walk along this corridor and take the second right.", 
                    "subtitle": "S1.32 is just on your right.", 
                    "image_url": imageUrl 
                     }, 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function S221C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right and right again as you leave the room.",
                    "subtitle": "Then turn left and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs and go up to floor 2.5.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right, then left, and walk along the corridor.", 
                    "subtitle": "C2.04 is the fifth door on your right.", 
                    "image_url": imageUrl 
                     }, 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S222Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave the room, turn right.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilet is the third door on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function S222S221(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left as you leave the room.",
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left.",
                    "subtitle": "S2.21 is the first door on your left.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function S222C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left and walk along the corridor.",
                    "subtitle": "Take the stairs to level 2.5.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and take the stairs.",
                    "subtitle": "Go down 1 flight.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right, then left.",
                    "subtitle": "It's the second door on your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function S222S132(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take stairs down to the first floor.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the second right.",
                    "subtitle": "S1.32 is just on your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S222C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take stairs up to floor 2.5.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right, go down 1 flight of stairs.",
                    "subtitle": "Turn right, then left.", 
                    "image_url": imageUrl
                    },
                                                            {
                    "title": "Walk along the corridor.",
                    "subtitle": "C2.04 is the fifth door on your right.", 
                    "image_url": imageUrl
                    } 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};
