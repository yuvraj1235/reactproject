document.addEventListener("DOMContentLoaded",()=>{
    const question=[
        {
            question:"Which of the following is a primitive data type in JavaScript?",
            answer:[
                {text:"object", correct:false},
                {text:"func", correct:false},
                {text:"array", correct:false},
                {text:"bool", correct:true}

            ]
        },
        {
            question:"What is the default value of an uninitialized variable in JavaScript?",
            answer:[{text:"null", correct:false},
                {text:"undefined" ,correct:true},
                {text:"0", correct:false},
                {text:"NaN" ,correct:false}]
  
        },
        {
            
            question:"What does typeof operator in JavaScript return?",
            answer:[
                {text:"The type of a variable", correct:true},
                {text:" The value of a variable", correct:false},
                {text:" The name of a variable", correct:false},
                {text:"The size of a variable", correct:false}]
  
        }
    ]
    const questionelement=document.getElementById("question");
    const option=document.getElementById("choice");
    const submit=document.getElementById("submit");
    let score=0;
    let currentqustionindex=0;
    function startquiz(){
        currentqustionindex=0;
        score=0;
        submit.innerHtml="Next";
        showquestion();
    }
    function showquestion(){
        resetstate();
        let currentqustion=question[currentqustionindex];
        let queestiono=currentqustionindex+1;
        questionelement.innerHTML=queestiono+". "+currentqustion.question;
        currentqustion.answer.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("option");
            option.appendChild(button); 
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectanswer);

        }); 
    }
    function resetstate(){
        submit.style.display="none";
        while(option.firstChild){
            option.removeChild(option.firstChild);
        }
    }
    function selectanswer(e){
        const selectedbtn=e.target;
        const iscorrect=selectedbtn.dataset.correct;
        if(iscorrect){
            selectedbtn.classList.add("correct");
            score++;
        }
        else{
            selectedbtn.classList.add("incorrect");
        }
        Array.from(option.children).forEach(button=>{
            if(button.dataset.correct=="true"){
                button.classList.add("correct");

            }
            button.disabled=true;

                });
                submit.style.display="block";
                submit.innerHTML="Next";
          
                
        }  

    function showscore(){
        resetstate();
        questionelement.innerHTML=`You scored ${score}`;
        questionelement.style.fontSize="20px";
                
    }
    function handlenextbutton(){
        currentqustionindex++;
        if(currentqustionindex<question.length){
            showquestion();
        }else{
            showscore();
        }
    }
        submit.addEventListener("click",()=>{
            if(currentqustionindex<question.length){
               handlenextbutton();
            }
            else{
                startquiz();
            }
        }); 
    startquiz();
    })
