// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB55N59rE_kfmvkIWYREbHVIAehjX61hAY",
    authDomain: "quiz-app-dc093.firebaseapp.com",
    databaseURL: "https://quiz-app-dc093-default-rtdb.firebaseio.com",
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

function getDataFromDatabase() {
    const reference = ref(database, 'question/')
    onChildAdded(reference, function (dt) {
        console.log(dt.val())
        questions.push(dt.val())
        showQuestion()
    })
}
getDataFromDatabase();

var questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        correctAns: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ]
    }
];

var questionNum = document.getElementById("quesNum");
var question = document.getElementById("question");
var option = document.getElementById("option");
var indexNum = 0;
var marks = 0;

function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Q no " + (indexNum + 1) + "/" + questions.length;
    option.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        option.innerHTML += `<div class="col-md-6 py-2 ">
<button onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].correctAns}')"
class="btn btn-lg w-100 text-black bg-white">${questions[indexNum].options[i]}</button>
</div>`
    }
}
showQuestion();

function nextQuestion() {
    indexNum++;
    showQuestion();
}
window.checkAns = function (a, b) {
    if (a == b) {
        marks++;
        console.log(marks)
    }
    if (indexNum + 1 == questions.length) {
        alert("your marks:" + marks)
    } else {
        nextQuestion();
    }
}




