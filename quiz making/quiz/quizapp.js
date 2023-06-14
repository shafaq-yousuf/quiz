// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB55N59rE_kfmvkIWYREbHVIAehjX61hAY",
    authDomain: "quiz-app-dc093.firebaseapp.com",
    projectId: "quiz-app-dc093",
    storageBucket: "quiz-app-dc093.appspot.com",
    messagingSenderId: "584806989759",
    appId: "1:584806989759:web:999d705a82098c875c6b0a",
    measurementId: "G-G04SNMSBKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var question = document.getElementById("addQuestion");
var options = document.getElementById("addOptions");
var optParent = document.getElementById("optParent");
var correctAnswer = document.getElementById("correctAnswer");
var correctAns;
var optionArray = [];

function renderOptions() {
    optParent.innerHTML = "";
    for (let i = 0; i < optionArray.length; i++) {
        optParent.innerHTML += `<li onclick= "correctAnswer('${optionArray[i]}')" class = "bg-light p-2">${optionArray[i]}</li>`
    }
}

window.addOption = function () {
    optionArray.push(options.value);
    // console.log(optionArray);
    renderOptions();
};

window.correctAnswer = function (a) {
    correctAns = a;
    correctAnswer.innerHTML = correctAns
};

window.submitQuestion = function () {
    var obj = {
        question: question.value,
        options: optionArray,
        correctAns: correctAns
    };
    obj.id= push(ref(database,'question/')).key
    const reference = ref(database,`question/${obj.id}`)
    set(reference, obj)
    console.log(obj);
};

