// Push reminders (owner, 2026-11-13): the background script the phone keeps for this address. Firebase shows the
// reminder; tapping it opens its link (the quick-input form with city and date filled in).
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('firebase-config.js');
firebase.initializeApp(self.FIREBASE_CONFIG);
firebase.messaging();
