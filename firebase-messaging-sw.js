



// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
 const firebaseConfig = {
    apiKey: "AIzaSyDqaigSMPYeXYu1__T8Mj_y0h3bCQYb4I0",
    authDomain: "livechat-dc6d0.firebaseapp.com",
    projectId: "livechat-dc6d0",
    storageBucket: "livechat-dc6d0.firebasestorage.app",
    messagingSenderId: "302939024833",
    appId: "1:302939024833:web:a0e9e00a1c3d93b6509340",
    measurementId: "G-FX8JBRT2N5"
  };

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
