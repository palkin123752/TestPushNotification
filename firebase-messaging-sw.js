importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAozEohladu0QCS0zgqYBvdQGQBGj-_KNI",
            authDomain: "mywebapp-89c34.firebaseapp.com",
            projectId: "mywebapp-89c34",
            storageBucket: "mywebapp-89c34.appspot.com",
            messagingSenderId: "406227830633",
            appId: "1:406227830633:web:3adb4adf63eba35e39dff8",
            measurementId: "G-HF62RRC88Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
