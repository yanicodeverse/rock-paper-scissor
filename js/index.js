// varible selection 

let user_score = 0;
let computer_score = 0;
const user_score_span = document.querySelector('.user_score');
const computer_score_span = document.querySelector('.computer_score');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let computerchoice = () => {
    choices = ['r', 'p', 's'];
    let random_number = Math.floor(Math.random() * 3);
    return choices[random_number];

}
// computerchoice();

let win = () => {
    user_score++;
    user_score_span.innerHTML = user_score;
    document.body.style.backgroundColor = 'rgba(9, 255, 0, 0.568)'

}

let loose = () => {
    computer_score++;
    computer_score_span.innerHTML = computer_score;
    document.body.style.backgroundColor = 'crimson'
}

let draw = () => {
    document.body.style.backgroundColor = 'orange'
}

let game = (userchoice) => {
    let getcomputerchoice = computerchoice();
    switch (userchoice + getcomputerchoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loose();
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw();
            break;

    }
}


let main = () => {

    rock.addEventListener('click', () => {
        game('r')

    })

    paper.addEventListener('click', () => {
        game('p')
    })

    scissor.addEventListener('click', () => {
        game('s')
    })
}
main();