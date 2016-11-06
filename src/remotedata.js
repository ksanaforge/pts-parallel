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
const binding=function(from,article,to){
	return firebase.database().ref("bind").child(from+"/"+article+"/"+to);
}

module.exports={rootpath,firebase,binding};