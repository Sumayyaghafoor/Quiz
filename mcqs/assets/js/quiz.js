function check() {
    var C=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if (q1=="Javascript") {C++}
    if (q2=="Islamabad") {C++}
    if (q3=="Russia") {C++}
    if (q4=="Climate") {C++}
    if (q5=="4") {C++}
    quiz.style.display="none";
       if (C<=3) {
        result.textContent=`Your result is ${C}. It is not so good please try to work on yourself.`
       } else{
        result.textContent=`Your result is ${C}. It is awesome. Keepit up!.`
       }

}

