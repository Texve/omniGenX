// Import Firebase messaging and initialize it
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

 const firebaseConfig = {
    apiKey: "AIzaSyDqaigSMPYeXYu1__T8Mj_y0h3bCQYb4I0",
    authDomain: "livechat-dc6d0.firebaseapp.com",
    projectId: "livechat-dc6d0",
    storageBucket: "livechat-dc6d0.firebasestorage.app",
    messagingSenderId: "302939024833",
    appId: "1:302939024833:web:a0e9e00a1c3d93b6509340",
    measurementId: "G-FX8JBRT2N5"
  };

// Initialize Firebase and messaging
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
