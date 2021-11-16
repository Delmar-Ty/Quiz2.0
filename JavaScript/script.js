var score = 0;

function checkAnswers() {
    if (document.question1.q1o2.checked && document.question1.q1o3.checked && document.question1.q1o5.checked) {
        score += 1;
    }
    if (document.question2.q2o1.checked && document.question2.q2o4.checked) {
        score += 1;
    }
    if (document.question3.q3.value === "environments") {
        score += 1;
    }
    if (document.question4.q4o1.checked && document.question4.q4o4.checked && document.question4.q4o5.checked) {
        score +=1;
    }
    if (document.question5.q5o2.checked && document.question5.q5o3.checked) {
        score +=1;
    }
    if (document.question6.q6.value === "2") {
        score += 1;
    }
    if (document.question7.q7o2.checked && document.question7.q7o3.checked && document.question7.q7o5.checked) {
        score += 1;
    }
    if (document.question8.q8.value === "true") {
        score += 1;
    }
    if (document.question9.q9.value === "gestureend") {
        score += 1;
    }
    if (document.question10.q10.value === "package") {
        score += 1;
    }
    alert(score + "/10");
    score = 0;
}