const num1=Math.ceil( Math.random()*10);
const num2=Math.ceil( Math.random()*10);

const questionE1=document.getElementById("question");
const inputEl=document.getElementById("input");

const formEl=document.getElementById("form");
const scoreEl=document.getElementById("score")
let score=JSON.parse( localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`

questionE1.innerText=`what is ${num1} multiply by ${num2}?`


const correctAns=num1 * num2;
formEl.addEventListener("submit",()=>{
   const userAns= +inputEl.value
   if(userAns==correctAns){
    score++;
    updatelocalstorage()
   }else{
    score--;
    updatelocalstorage()
   }
})

function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
