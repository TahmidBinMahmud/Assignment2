# Assignment2
Name: 15 MINUTE CHAT APP
Objective: A chat application that can be used by a group of Users to communicate between themselves. Each session lasts 15 minutes only and the chat closes after the session expires.

RUN "node index.js" to start the server or this link (https://chatapp15min.herokuapp.com/) to run the heroku app version.
LANDING PAGE & USER DATABASE: User inputs a User Name and a Session Name to begin chatting. These information gets saved into a database.
![Landing Page](https://user-images.githubusercontent.com/50309322/63196139-6003cd00-c096-11e9-9f95-6e978b8de288.PNG)
![User Collection](https://user-images.githubusercontent.com/50309322/63196182-7b6ed800-c096-11e9-80f0-f95fd8b9aa51.PNG)

SECOND PAGE: This is what appears after a user signs in.
![Second Page](https://user-images.githubusercontent.com/50309322/63196684-a73e8d80-c097-11e9-9409-622ee822d170.PNG)

CHAT WINDOW: After a user presses the start button, the chat session starts. It will last for 15 minutes. Here's a chat example between two people. Notice the names do not interchange as it is supposed to (this is a flaw).
![Chat window](https://user-images.githubusercontent.com/50309322/63197011-7d399b00-c098-11e9-9725-df76596e6176.PNG)

SESSION OVER: After 15 minutes expires or if the Stop button is clicked, the chat session expires.
![Session Over](https://user-images.githubusercontent.com/50309322/63197075-a78b5880-c098-11e9-9ec8-5a45c163480c.PNG)

FATAL FLAWS

USER LIST: Unable to show the user list from the database collection. Can only show it on console.
![User List (can't show)](https://user-images.githubusercontent.com/50309322/63197189-fa651000-c098-11e9-83d1-201ac79f8985.PNG)

CHAT SESSION RECORDS: Unable to record the chat session in collection properly. The session name gets saved but there are errors while saving the messages. Commented out that part of the code but this is what the chat database looked like.
![Chat Collection (Not really)](https://user-images.githubusercontent.com/50309322/63197310-3f894200-c099-11e9-941d-1326ae9c37b9.PNG)
Console log of the messages is not perfect either. Each Message with the Names get concatenate as a single line as shown in the image. This is only due to my lack of capability.
![Chat Log (Not really)](https://user-images.githubusercontent.com/50309322/63197458-ac9cd780-c099-11e9-844e-ae410a00ff30.PNG)
