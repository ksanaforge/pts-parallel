var firebase=require("firebase");

var config = {
    apiKey: "AIzaSyAAMPNH28m62dpo9h70uDG6EiWQ5gcdI0U",
    authDomain: "pts-parallel.firebaseapp.com",
    databaseURL: "https://pts-parallel.firebaseio.com",
    storageBucket: "pts-parallel.appspot.com",
    messagingSenderId: "858326153924"
};

firebase.initializeApp(config);

const rootpath=function(path){
	return firebase.database().ref(path);
}
const link=function(){
	return firebase.database().ref().child("link");
}

module.exports={rootpath,firebase,link};