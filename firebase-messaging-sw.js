importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAir1XBlFnUuQqtm7aMEYpASqzihT2TawU",
  authDomain: "whatsapp-sales-system.firebaseapp.com",
  projectId: "whatsapp-sales-system",
  storageBucket: "whatsapp-sales-system.firebasestorage.app",
  messagingSenderId: "868790588883",
  appId: "1:868790588883:web:da883853f98e92beb90b26"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification ?? {};
  if (title) {
    self.registration.showNotification(title, {
      body: body ?? '',
      icon: '/kwicker-web/icons/Icon-192.png',
    });
  }
});
