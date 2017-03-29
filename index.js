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
            T209C207(event.sender.id, {text: "Here"}); 
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
            sendMessage(event.sender.id, {text: "Turn right as you leave the room and then right again. Turn left and walk along the corridor. Take the stairs up to level 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. Go through the door in front of you. Walk along the corridor. T2.07 is the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to S1.32") { 
            S221S132(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to T2.09") { 
            sendMessage(event.sender.id, {text: "Turn right and right again as you leave the room. Turn left and walk along the corridor. Take the stairs and go up to leavel 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. T2.09 is just to your right."}); 
        }
        else if (event.message && event.message.text === "I am at S2.21 and I want to go to N4.07") { 
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
            sendMessage(event.sender.id, {text: "Turn left as you leave the room and walk along the corridor. Take the stairs and go up to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go up 4 flights. Turn left at the top of the stairs. The door is at the top of the stairs. "}); 
        }
        else if (event.message && event.message.text === "I am at S2.22 and I want to go to C2.04") { 
            S222C204(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to the toilet") { 
            C204Toilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to the canteen") { 
            C204Canteen(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to the library") { 
            C204Library(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to T2.07") { 
            C204T207(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to T2.09") { 
            C204T209(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to C2.07") { 
            C204C207(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to S2.22") { 
            C204S222(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to S2.21") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave the room. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the second floor. Walk along the corridor and take the third right. Turn left. S2.21 is the first door on your left."}); 
        }
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to N4.07") { 
            C204N407(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.04 and I want to go to S1.32") { 
            C204S132(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to the toilet") { 
            C207Toilet(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to the canteen") { 
            C207Canteen(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to the library") { 
            C207Library(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to T2.07") { 
            C207T207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to T2.09") { 
            C207T209(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to C2.04") { 
            C207C204(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to S2.22") { 
            C207S222(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to S2.21") { 
            C207S221(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to S1.32") { 
            C207S132(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at C2.07 and I want to go to N4.07") { 
            C207N407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to the canteen") { 
            N407Canteen(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to the library") { 
            N407Library(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to T2.07") { 
            N407T207(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to T2.09") { 
            N407T209(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to C2.04") { 
            N407C204(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to C2.07") { 
            N407C207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to S2.22") { 
            sendMessage(event.sender.id, {text: "Go down 1 flight of stairs and turn right. Go down 4 flights of stairs. Turn right and right again. Walk along this corridor. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and take the stairs down to the second floor. Walk along this corridor. S2.22 is the second door on your right."}); 
        } 
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to S2.21") { 
            sendMessage(event.sender.id, {text: "Go down 1 flight of stairs and turn right. Go down 4 flights of stairs. Turn right and right again. Walk along this corridor. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and take the stairs down to the second floor. Walk along the corridor and take the third right. Turn left. S2.21 is the first door on your left."}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to S1.32") { 
            sendMessage(event.sender.id, {text: "Go down 1 flight of stairs and turn right. Go down 4 flights of stairs. Turn right and right again. Walk along this corridor. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and take the stairs down to the first floor. Walk along the corridor and take the second right. S1.32 is just on your right."}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to the toilet") { 
            T209Toilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to the canteen") { 
            T209Canteen(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to the library") { 
            T209Library(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to T2.07") { 
            T209T207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to C2.04") { 
            T209C204(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to S2.22") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.09 and take the stairs. Go down 1 flight of stairs. Walk along this corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the second floor. Walk along this corridor. S2.22 is the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to S2.21") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.09 and take the stairs. Go down 1 flight of stairs. Walk along this corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the second floor. Walk along the corridor and take the third right. Turn left. S2.21 is the first door on your left."}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to S1.32") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.09 and take the stairs. Go down 1 flight of stairs. Walk along this corridor. At the end of the corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the first floor. Walk along this corridor and take the second right. S1.32 is just on your right."}); 
        }
        else if (event.message && event.message.text === "I am at T2.09 and I want to go to N4.07") { 
            T209N407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to the toilet") { 
            T207Toilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to the canteen") { 
            T207Canteen(event.sender.id, {text: "Here"});
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to the library") { 
            T207Library(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to T2.09") { 
            T207T209(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to C2.04") { 
            T207C204(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to C2.07") { 
            T207C207(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to S2.22") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.07. Walk along this corridor, through the double doors. Take the stairs in front of you down 1 flight. Walk along this corridor. At the end of this corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the second floor. Walk along this corridor. S2.22 is the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to S2.21") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.07. Walk along this corridor, through the double doors. Take the stairs in front of you down 1 flight. Walk along this corridor. At the end of this corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the second floor. Walk along the corridor and take the third right. Turn left. S2.21 is the first door on your left."}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to S1.32") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave T2.07. Walk along this corridor, through the double doors. Take the stairs in front of you down 1 flight. Walk along this corridor. At the end of this corridor go up 2 flights of stairs. Turn right and right again. At the end of the corridor turn right. Turn left and go up 1 flight of stairs. Turn left and go down the stairs until you reach the first floor. Walk along this corridor and take the second right. S1.32 is just on your right"}); 
        }
        else if (event.message && event.message.text === "I am at T2.07 and I want to go to N4.07") { 
            T207N407(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at N4.07 and I want to go to the toilet") { 
            N407Toilet(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to the toilet") { 
            S132Toilet(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to the canteen") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave S1.32, and turn left again. Walk along the corridor. At the end of the corridor take the stairs. Go up the stairs to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left, and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 3 flights of stairs. The canteen is to your right."}); 
        }
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to the library") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave S1.32, and turn left again. Walk along the corridor. At the end of the corridor take the stairs. Go up the stairs to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go down 1 flight of stairs. The library is just in front of you."}); 
        }
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to T2.07") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave S1.32, and turn left again. Walk along the corridor. At the end of the corridor take the stairs. Go up the stairs to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. Go through the door in front of you. Walk along the corridor. It's the second door on your right."}); 
        }
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to T2.09") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave S1.32, and turn left again. Walk along the corridor. At the end of the corridor take the stairs. Go up the stairs to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go down 2 flights. Walk along the corridor. At the end of the corridor go up 1 flight of stairs. T2.09 is just to your right."}); 
        } 
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to C2.04") { 
            S132C204(event.sender.id, {text:"Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to C2.07") { 
            S132C207(event.sender.id, {text: "Here"}); 
        } 
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to N4.07") { 
            sendMessage(event.sender.id, {text: "Turn left as you leave S1.32, and turn left again. Walk along the corridor. At the end of the corridor take the stairs. Go up the stairs to floor 2.5. Turn right and go down 1 flight of stairs. Turn right, then left and walk along the corridor. At the end of the corridor turn left. Take the stairs on your left and go up 4 flights. Turn left at the top of the stairs. The door is at the top of the stairs. "}); 
        } 
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to S2.21") { 
            S132S221(event.sender.id, {text: "Here"}); 
        }
        else if (event.message && event.message.text === "I am at S1.32 and I want to go to S2.22") { 
            S132S222(event.sender.id, {text: "Here"}); 
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
                    "image_url": "https://project.cs.cf.ac.uk/WhitingM/right_Wht.png"
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
                    "subtitle": "Go through the doors and walk along the corridor.",
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
                    "title": "Turn right and right again.",
                    "subtitle": "Then turn left and walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs and go up to floor 2.5.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs.",
                    "subtitle": "Turn right, then left.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Walk along the corridor.", 
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
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the second right.", 
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
                    "title": "Turn right and right again.",
                    "subtitle": "Then turn left and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs and go up to floor 2.5.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs.",
                    "subtitle": "Turn right, then left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Walk along the corridor.", 
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


function C204Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilets are right in front of you.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204Canteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go down 3 flights of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The canteen is to your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204Library(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go down 1 flight of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The library is just in front of you.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204T207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 1 flight of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go through the doors in front of you.", 
                    "subtitle": "T2.07 is the second door on your right.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204T209(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 1 flight of stairs.", 
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


function C204C207(recipientId, text) { 
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
                    "subtitle": "Walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "It's the third door on your left.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function C204S222(recipientId, text) { 
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
                    "subtitle": "Walk to the end of the corridor and turn right.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and take the stairs.", 
                    "subtitle": "Go down the stairs until you reach the second floor.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Walk along the corridor.", 
                    "subtitle": "It's the second door on your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204N407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and take the stairs.", 
                    "subtitle": "Go up to the top.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left at the top of the stairs.", 
                    "subtitle": "N4.07 is at the top of the stairs.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C204S132(recipientId, text) { 
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
                    "subtitle": "Walk to the end of the corridor and turn right.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "subtitle": "Turn left and go down the stairs to the first floor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Walk along this corridor.", 
                    "subtitle": "Take the second right.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "S1.32 is just on your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilets are right in front of you.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207Canteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go down 3 flights of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The canteen is to your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207Library(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go down 1 flight of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The library is just in front of you.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207T207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 1 flight of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go through the doors in front of you.", 
                    "subtitle": "T2.07 is the second door on your right.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207T209(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk to the end of the corridor and turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs on your left.", 
                    "subtitle": "Go down 2 flights and walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 1 flight of stairs.", 
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


function C207C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "Walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "C2.04 is the third door on your right.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207S222(recipientId, text) { 
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
                    "subtitle": "At the end of the corridor turn right.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn let and go up 1 flight of stairs.", 
                    "subtitle": "Turn left and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go down to the second floor.", 
                    "subtitle": "Walk along this corridor.",
                    "image_url": imageUrl
                    },
                                        {
                    "title": "S2.22 is the second door on your right.",
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207S221(recipientId, text) { 
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
                    "subtitle": "At the end of the corridor turn right.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "subtitle": "Turn left and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go down to the second floor.", 
                    "subtitle": "Walk along this corridor and take the third right.",
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Turn left.",
                    "subtitle": "S2.21 is the first door on your left.", 
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207S132(recipientId, text) { 
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
                    "subtitle": "At the end of the corridor turn right.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and go up 1 flight of stairs.", 
                    "subtitle": "Turn left and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go down to the first floor.", 
                    "subtitle": "Walk along this corridor and take the second right.",
                    "image_url": imageUrl
                    },
                                        {
                    "title": "S1.32 is just on your right.", 
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function C207N407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn right as you leave the room.",
                    "subtitle": "At the end of the corridor turn left.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn left and take the stairs.", 
                    "subtitle": "Take the stairs to the top floor.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Turn left at the top of the stairs.", 
                    "subtitle": "N4.07 is at the top of the stairs.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407Canteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 6 flights of stairs.", 
                    "subtitle": "At the end of the corridor take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go down 3 flights of stairs.", 
                    "subtitle": "The canteen is just to your right.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407Library(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 6 flights of stairs.", 
                    "subtitle": "At the end of the corridor take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go down 1 flight of stairs.", 
                    "subtitle": "The library is just in front of you.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407T207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 6 flights of stairs.", 
                    "subtitle": "At the end of the corridor take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go up 1 flight of stairs.", 
                    "subtitle": "Go through the doors in front of you.",
                    "image_url": imageUrl
                    },
                                        {
                    "title": "T2.07 is the second door on your right.",
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407T209(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 6 flights of stairs.", 
                    "subtitle": "At the end of the corridor take the stairs.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Go up 1 flight of stairs.", 
                    "subtitle": "T2.09 is just to your right.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 4 flights of stairs.", 
                    "subtitle": "Turn right and right again.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Walk along this corridor.", 
                    "subtitle": "C2.04 is the fourth door on your left.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Turn right and take the stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 4 flights of stairs.", 
                    "subtitle": "Turn right and right again.", 
                    "image_url": imageUrl
                     },
                                        { 
                    "title": "Walk along this corridor.", 
                    "subtitle": "C2.07 is the seventh door on your left.",
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, walk through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilet is the first door on your left.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function T209Canteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, turn left.",
                    "subtitle": "Take the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 4 flights of stairs.", 
                    "subtitle": "The canteen is just to your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209Library(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, turn left.",
                    "subtitle": "Take the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 2 flights of stairs.", 
                    "subtitle": "The library is just in front of you.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209T207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, walk through the doors.",
                    "subtitle": "Walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "T2.07 is the second door on your right.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, turn left.",
                    "subtitle": "Take the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 2 flights of stairs.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Turn right and right again.", 
                    "subtitle": "Walk down the corridor. It's the fourth door on your left.", 
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, turn left.",
                    "subtitle": "Take the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up 2 flights of stairs.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Turn right and right again.", 
                    "subtitle": "Walk down the corridor. It's the seventh door on your left.", 
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T209N407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.09, turn left.",
                    "subtitle": "Take the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Go down 1 flight of stairs.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up to the top floor.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Turn left at the top of the stairs.", 
                    "subtitle": "N4.07 is at the top of the stairs.", 
                    "image_url": imageUrl
                    },
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The toilet is the last door on your right.",
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207Canteen(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs in front of you.",
                    "subtitle": "Go down 4 flights of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The canteen is just to your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207Library(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs in front of you.",
                    "subtitle": "Go down 2 flights of stairs.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "The library is just in front of you.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207T209(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "T2.09 is just in front of you.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};



function T207C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs in front of you.", 
                    "subtitle": "Go down 1 flight of stairs and walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor go up 2 flights of stairs.", 
                    "subtitle": "Turn right and right again.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Walk along the corridor.", 
                    "subtitle": "C2.04 is the fourth door on your left.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs in front of you.", 
                    "subtitle": "Go down 1 flight of stairs and walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor go up 2 flights of stairs.", 
                    "subtitle": "Turn right and right again.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "Walk along the corridor.", 
                    "subtitle": "C2.07 is the seventh door on your left.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function T207N407(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave T2.07, turn left.",
                    "subtitle": "Walk along the corridor, through the doors.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs in front of you.", 
                    "subtitle": "Go down 1 flight of stairs and walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs to the top floor.", 
                    "subtitle": "Turn left at the top of the stairs.", 
                    "image_url": imageUrl
                    },
                                        {
                    "title": "N4.07 is at the top of the stairs.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function N407Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave N4.07, go down the stairs.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "It's the first door on your left.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S132Toilet(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave S1.32, turn left.",
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and walk along the corridor.", 
                    "subtitle": "It's the sixth door on your left.", 
                    "image_url": imageUrl
                     }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S132C204(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave S1.32 turn left and left again.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up the stairs to floor 2.5.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs",
                    "subtitle": "Turn right, then left.", 
                    "image_url": imageUrl 
                    }, 
                                        {
                    "title": "Walk along this corridor.", 
                    "subtitle": "It's the fifth door on your right.", 
                    "image_url": imageUrl
                    }
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};


function S132C207(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "As you leave S1.32 turn left and left again.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "At the end of the corridor take the stairs.", 
                    "subtitle": "Go up the stairs to floor 2.5.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Turn right and go down 1 flight of stairs",
                    "subtitle": "Turn right, then left.", 
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


function S132S221(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left as you leave S1.32 and left again.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs up to the second floor.", 
                    "subtitle": "Walk along the corridor and take the third right.", 
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


function S132S222(recipientId, text) { 
    var imageUrl = "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c135.0.810.810/16465567_737180996447784_7352930134682238976_n.jpg";
    message = { 
        "attachment": {
            "type": "template",
            "payload": { 
                "template_type": "list", 
                "top_element_style": "compact",
                "elements": [
                    {
                    "title": "Turn left as you leave S1.32 and left again.",
                    "subtitle": "Walk along this corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "Take the stairs up to the second floor.", 
                    "subtitle": "Walk along the corridor.", 
                    "image_url": imageUrl
                     },
                                        {
                    "title": "S2.22 is the second door on your right.", 
                    "image_url": imageUrl
                     }, 
                ]
            }
        }
    };
    sendMessage(recipientId, message);
};
