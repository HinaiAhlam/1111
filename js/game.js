
let startBtn = document.querySelector("#start-btn");

if (startBtn) {
    const setupArea = document.querySelector("#setup-area");
    const quizBox = document.querySelector("#quiz-box");

    startBtn.addEventListener("click", () => {
        let numInput = document.querySelector("#num-questions");
        let totalQuestions = parseInt(numInput.value);

        if (!totalQuestions || totalQuestions <= 0) {
            alert("Please enter a valid number of questions!");
            return;
        }

        // 1. مسح أي محتوى سابق وتصفير النتائج
        quizBox.innerHTML = "";
        let correctAnswers = []; // مصفوفة لتخزين الإجابات الصحيحة

        // 2. إنشاء الأسئلة دفعة واحدة باستخدام Loop
        for (let i = 0; i < totalQuestions; i++) {
            let n1 = Math.floor(Math.random() * 10);
            let n2 = Math.floor(Math.random() * 10) + 1;
            let ops = ["+", "-", "*"];
            let op = ops[Math.floor(Math.random() * ops.length)];
            
            let result;
            if (op === "+") result = n1 + n2;
            else if (op === "-") result = n1 - n2;
            else result = n1 * n2;
            
            correctAnswers.push(result); // تخزين الإجابة الصحيحة للمقارنة لاحقاً

            // بناء واجهة السؤال (رقم السؤال + العملية + خانة الإدخال)
            quizBox.innerHTML += `
                <div class="question-container" style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 1.2rem; margin-bottom: 5px;">
                        ${i + 1}) ${n1} ${op} ${n2} = 
                    </label>
                    <input type="number" class="user-ans-input" data-index="${i}" 
                           style="padding: 8px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 4px;">
                </div>
            `;
        }

        // 3. إضافة زر "إظهار النتيجة" في نهاية الأسئلة
        quizBox.innerHTML += `
            <button id="check-results" style="margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Show Result
            </button>
        `;

        // 4. منطق التحقق من الإجابات عند الضغط على زر النتيجة
        document.querySelector("#check-results").addEventListener("click", () => {
            let userInputs = document.querySelectorAll(".user-ans-input");
            let score = 0;

            userInputs.forEach((input, index) => {
                let userValue = parseFloat(input.value);
                if (userValue === correctAnswers[index]) {
                    score++;
                    input.style.borderColor = "green"; // تلوين الإطار بالأخضر إذا صح
                    input.style.backgroundColor = "#eaffea";
                } else {
                    input.style.borderColor = "red"; // تلوين الإطار بالأحمر إذا خطأ
                    input.style.backgroundColor = "#ffeaea";
                }
            });

            // عرض النتيجة النهائية
            let resultDisplay = document.querySelector("#final-result-text");
            if (!resultDisplay) {
                resultDisplay = document.createElement("h3");
                resultDisplay.id = "final-result-text";
                quizBox.appendChild(resultDisplay);
            }
            resultDisplay.innerHTML = `Your Score: ${score} / ${totalQuestions}`;
            resultDisplay.style.marginTop = "20px";
            resultDisplay.style.color = "blue";
        });
    });
}