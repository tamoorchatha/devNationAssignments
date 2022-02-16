// coorect answers of the quiz
const correctAnswers = ['A','B','B','A'];

// grap the result section from the html
const result = document.querySelector('.result');

// grap the form 
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnsers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    // to represent the result section
    result.classList.remove('d-none');
    // to update the result
    // result.querySelector('span').textContent = `${score}%`;
    // when submit then scroll to bottom
    scrollTo(0,0);

    // to animate the result
    let output = 0;
    const animation = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`
        if(output===score){
            clearInterval(animation);
        }else{
            output++;
        }
    },10)
    
})