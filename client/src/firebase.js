import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcKgbIm5sIuUzEGhAHWlHiY2MiWdHq5DQ",
  authDomain: "reactjs-8c204.firebaseapp.com",
  databaseURL: "https://reactjs-8c204-default-rtdb.firebaseio.com",
  projectId: "reactjs-8c204",
  storageBucket: "reactjs-8c204.appspot.com",
  messagingSenderId: "322643032954",
  appId: "1:322643032954:web:7e87b9e5389d214a2974c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;