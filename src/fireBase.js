import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBkxCN4_F-K5vZh2LhdgLVB-ky98yM-z4c",
  authDomain: "vendorbillinginfo.firebaseapp.com",
  databaseURL: "https://vendorbillinginfo.firebaseio.com",
  projectId: "vendorbillinginfo",
  storageBucket: "vendorbillinginfo.appspot.com",
  messagingSenderId: "285124573376",
  appId: "1:285124573376:web:f5e2576468d59e1de11525",
  measurementId: "G-QQYY6WSMTY",
};

var firebaseAppConfig = firebase.initializeApp(firebaseConfig);

export default firebaseAppConfig;
