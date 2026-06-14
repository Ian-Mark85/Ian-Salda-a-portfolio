
let minNum = 50;
let maxNum = 100;
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

        const submitBtn = document.getElementById('submitBtn');
        const inputNum = document.getElementById('inputNum');
        const guessAnswer = document.getElementById('guessAnswer');
        const guessHighOrLow = document.getElementById('guessHighOrLow');

        submitBtn.onclick = function() {
            let guess = parseInt(inputNum.value);
            if (!isNaN(guess)) {
                if (guess !== randomNum) {
                    guessAnswer.textContent = 'Your guess is wrong';
                    if (guess > randomNum) {
                        guessHighOrLow.textContent = 'Your guess is High';
                    } else {
                        guessHighOrLow.textContent = 'Your guess is Low';
                    }
                    inputNum.value = ''; // Clear the input field
                } else {
                    guessAnswer.textContent = 'Your guess is right 🎊🎉';
                    guessHighOrLow.textContent = '';
                    submitBtn.disabled = true;  // Disable the button after the correct guess
                    inputNum.disabled = true;   // Disable the input after the correct guess
                }
            } else {
                guessAnswer.textContent = 'Please enter a valid number';
                guessHighOrLow.textContent = '';
            }
        };
