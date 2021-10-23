import firebase from 'firebase';

const config ={  apiKey: "AIzaSyBkEdX0WAgw8Jo9LzBiAfthHXCIS-xmDEY",

    authDomain: "gb-react-fd87a.firebaseapp.com",

    projectId: "gb-react-fd87a",

    storageBucket: "gb-react-fd87a.appspot.com",

    messagingSenderId: "90890040127",

    appId: "1:90890040127:web:bcf428cb560bca599c198a",

    measurementId: "G-2HF3MGJZHD"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();