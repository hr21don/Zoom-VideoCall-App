# React VideoCall App

## Overview
Create Zoom Video Call Clone With WebRTC and Socket.IO.

## Technologies 

```
Server-Side Packageas:
 Express: Our NodeJS framework
 NodeJS: Used to create the server
 Socket.io: Used for real-time communication

Client-Side Packages:
 ReactJS: Our Js Library to create UI components.
 Socket.io-client: Used for real-time communication (client side)
 Web RTC: Used for videochat and audio call possibilities through simple-peer
 
 *********************
 Author: Helitha Rupasinghe
 Licence: MIT
 Credit: Nik Valdez (Full Stack JS) 
 *********************
```

## Usage

In the project directory, you can :

- Run npm install 
- Run npm start to run the app in development mode.
- Start your socket.io server (node src/server.js) and your React dev server (npm start) separately.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Demo 

We will run the app between two users Adam and Sam.

Adam: Open's the app within their local browser and enter's their name into the Name field below.[S]

<img width="855" height="427" alt="image" src="https://github.com/user-attachments/assets/647347c2-45e6-43a7-bd8b-2de147ea2804" />


Sam : Open's the app within a incognito tab or in a seperate browser. [S]

- Enter's their name into the Name field below. 
- Copy the ID from Adam and Paste  it's content into 'ID to call' field below.

```
6zqtECYoQ1ZgGG6RAAAM

```

<img width="889" height="426" alt="image" src="https://github.com/user-attachments/assets/2397894c-889b-4782-acb4-d65c7b1808df" />



Sam calls Adam from his browser to begin video call session. [S]


<img width="831" height="458" alt="image" src="https://github.com/user-attachments/assets/913d834f-9592-4aab-8e50-98d7b60b8af0" />


Both users connect and peer-to-peer connection is configured successfully between the two browsers.

<img width="826" height="421" alt="image" src="https://github.com/user-attachments/assets/7fb5f55a-9c74-4fb9-9e59-c404224ff925" />







