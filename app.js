// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKP92lIAktLXHf5fayozHZQjJTOVYIFjw",
  authDomain: "food-b0df3.firebaseapp.com",
  projectId: "food-b0df3",
  storageBucket: "food-b0df3.appspot.com",
  messagingSenderId: "433660210269",
  appId: "1:433660210269:web:c85d7adf235e4c9ae531b4",
  measurementId: "G-460S024LHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const itemInput = document.getElementById('item');
const expirationInput = document.getElementById('expiration');
const addItemButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

  // Authentication
  auth.signInAnonymously().then(() => {
    // Authentication successful, now `auth` is defined in this scope
    addItemButton.addEventListener('click', () => {
      const item = itemInput.value;
      const expiration = expirationInput.value;

      if (item && expiration) {
        const newItemRef = database.ref('items').push();
        newItemRef.set({
          item: item,
          expiration: expiration,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      }
    });

    // Display items from the database with animation
    database.ref('items').orderByChild('timestamp').on('child_added', snapshot => {
      const itemData = snapshot.val();
      const itemListItem = document.createElement('li');
      itemListItem.textContent = `${itemData.item} (Expires: ${itemData.expiration})`;
      itemListItem.classList.add('animated-item');
      itemList.appendChild(itemListItem);
      animateNewItem(itemListItem);
    });

  }).catch(error => {
    console.error('Authentication error:', error);
  });

  // Slide-in animation for new items
  function animateNewItem(itemElement) {
    itemElement.style.animation = 'slideIn 0.5s ease';
    itemElement.addEventListener('animationend', () => {
      itemElement.style.animation = '';
    });
  }
