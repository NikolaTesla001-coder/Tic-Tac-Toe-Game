const boxes = document.querySelectorAll('.box');
const Reset = document.querySelector('#reset');
let turno = true;

const wining_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerText = 'O';
            turno = false;
        } else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    let winnerFound = false;

    for (let pattern of wining_pattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                alert(`The winner is player ${pos1val}`);
                winnerFound = true;
                reset();
                return; // Stop checking further
            }
        }
    }

    // ✅ Check for Tie
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === '') {
            allFilled = false;
        }
    });

    if (!winnerFound && allFilled) {
        alert("The game is tied!");
        reset();
    }
};

const reset = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
    turno = true;
};

Reset.addEventListener('click', () => {
    reset();
});
