// let numbers = (num1, num2, num3) => 
//      averge = (num1 + num2 + num3) / 3;



// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let num3 = Number(prompt("Enter third number:"));

// let finalAverage = numbers(num1, num2, num3);
// console.log("The average is:", finalAverage);
// ---------------------------------------------------------

// let fname = prompt("Enter first name");
// let lname = prompt("Enter last name");
// let age = +prompt("Enter your age");

// document.getElementById("personal-info").innerText =
//   `MY FIRST NAME IS ${fname} AND MY LAST NAME IS ${lname} AND MY AGE IS ${age}`;

// let box = document.getElementById("box");
// box.style.display = "block";

// age >= 18 ? box.classList.add("red"): box.classList.add("green");

// ________________________________________________________________________


// let btn = document.querySelector("#btn")


// btn.addEventListener("mouseenter",function(){
//   console.log("Hello");
  
// })

// btn.addEventListener("mouseleave",function(){
//   console.log("by");
  
// })
// btn.addEventListener("click", function() {
//   if (btn.style.backgroundColor === "red") {
//     btn.style.backgroundColor = "blue";
//   } else {
//     btn.style.backgroundColor = "red";
//   }
// });
// ________________________________________________________________


// document.addEventListener("click",function(e){
//   console.log(e.target);
  
// })


// let email=document.querySelector("#email")
// let password=document.querySelector("#password")
// let logbtn=document.querySelector("#logbtn")



// logbtn.addEventListener("click",(e)=>{
// console.log(email.value);
//     console.log(password.value);
// })


// __________________________________________________

// --- الجزء الأول: تسجيل الدخول (يبقى كما هو) ---
let loginbtn = document.querySelector("#loginbtn");
if (loginbtn) {
    loginbtn.addEventListener("click", (e) => {
        e.preventDefault();
        let email = document.querySelector("#email").value;
        let pass = document.querySelector("#password").value;
        if (email === "ahlam" && pass === "12345") {
            window.location.href = "first_page.html";
        } else {
            alert("Wrong data!");
        }
    });
}


// let errorMsg = document.querySelector("#error-msg");

// let loginContainer = document.querySelector("#login-container");
// let gameContainer = document.querySelector("#game-container");

// let tries = 0;

// logbtn.addEventListener("click", () => {
//     let email = emailInput.value;
//     let password = passwordInput.value;

//     if (email === "ahlam" && password === "12345") {
//         console.log("Status: Successfully logged in!");
//         loginContainer.style.display = "none"; 
//         gameContainer.style.display = "block"; 
//     } else {
//         tries++;
//         if (tries < 3) {
//             let left = 3 - tries;
//             errorMsg.innerText = `Invalid credentials. Tries left: ${left}`;
//             console.warn(`Login failed. Attempts left: ${left}`);
//         } else {
//             errorMsg.innerText = "You tried too many times. Access Blocked.";
//             logbtn.disabled = true; 
//             console.error("Login Blocked: Too many failed attempts.");
//         }
//     }
// });

// let startBtn = document.querySelector("#start-btn");

// startBtn.addEventListener("click", () => {
//     let numQuestions = document.querySelector("#num-questions").value;
//     let score = 0;
//     let operations = ["+", "-", "*", "/"];

//     console.log(`--- Game Started: ${numQuestions} Questions ---`);

//     for (let i = 0; i < numQuestions; i++) {
//         let n1 = Math.floor(Math.random() * 10);
//         let n2 = Math.floor(Math.random() * 10) + 1;
//         let op = operations[Math.floor(Math.random() * operations.length)];
        
//         let correctAnswer;
//         if (op === "+") correctAnswer = n1 + n2;
//         else if (op === "-") correctAnswer = n1 - n2;
//         else if (op === "*") correctAnswer = n1 * n2;
//         else correctAnswer = (n1 / n2).toFixed(2); 

//         // We still need prompt to GET the answer from the user, 
//         // but the result will go to the console.
//         let userAns = prompt(`Question ${i+1}: ${n1} ${op} ${n2} = ?`);

//         if (parseFloat(userAns) == correctAnswer) {
//             console.log(`Question ${i+1}: Correct! (${n1} ${op} ${n2} = ${userAns})`);
//             score++;
//         } else {
//             console.log(`Question ${i+1}: Wrong! You said ${userAns}, but it was ${correctAnswer}`);
//         }
//     }
    
//     console.log("--- Final Result ---");
//     console.log(`Final Score: ${score} / ${numQuestions}`);
// });