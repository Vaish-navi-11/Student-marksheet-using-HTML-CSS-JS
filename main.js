function numberToWords(number) {
    const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    let wordsArray = [];
    while (number > 0) {
        wordsArray.unshift(words[number % 10]);
        number = Math.floor(number / 10);
    }

    return wordsArray.join(' ');
}

function calculateTotalMarks() {
    const theoryInputs = document.querySelectorAll('[id^="theory-marks-"]');
    const practicalInputs = document.querySelectorAll('[id^="practical-marks-"]');

    let grandTotal = 0;

    theoryInputs.forEach((theoryInput, index) => {
        let theoryMarks = parseInt(theoryInput.value) || 0;
        let practicalMarks = parseInt(practicalInputs[index].value) || 0;

        // Input validation for theory and practical marks
        if (theoryMarks > 75) {
            alert("Theory marks should not exceed 75");
            theoryInput.value = '';
            theoryMarks = '0';
        }
        if (practicalMarks > 25) {
            alert("Practical marks should not exceed 25");
            practicalInputs[index].value = '';
            practicalMarks = '0';
        }

        const totalMarks = theoryMarks + practicalMarks;

        const totalCell = document.getElementById(`total-marks-${index + 1}`);
        const totalWordsCell = document.getElementById(`total-words-${index + 1}`);

        totalCell.textContent = totalMarks;
        totalWordsCell.textContent = numberToWords(totalMarks);

        grandTotal += totalMarks;
    });

    const grandTotalCell = document.querySelector('.grandtot .alltot');
    grandTotalCell.textContent = grandTotal;

    const percentageCell = document.querySelector('.percentage-tot');

    if (percentageCell) {
        const percentage = (grandTotal / 800) * 100;
        percentageCell.textContent = percentage.toFixed(2) + '%';

        // Grade calculation
        
        var grade = document.getElementById("grade");
        grade.textContent = "Grade";
        if (percentage >= 90) {
            grade.textContent = "O";
        }
        else if (percentage >= 80) {
            grade.textContent = "A+";
        }
        else if (percentage >= 70) {
            grade.textContent = "A";
        }
        else if (percentage >= 60) {
            grade.textContent = "B+";
        }
        else if (percentage >= 50) {
            grade.textContent = "B";
        }
        else {
            grade.textContent = "RA";
        }
    }

    const totalWordsCells = document.querySelectorAll('.numinwords');

    totalWordsCells.forEach(function(cell) {
        if (cell.textContent.trim() === '') {
            cell.textContent = 'Zero Zero';
        }
    });
}

document.addEventListener('input', (event) => {
    if (event.target.id.startsWith('theory-marks-') || event.target.id.startsWith('practical-marks-')) {
        calculateTotalMarks();
    }
});
// var date = document.querySelector(".date p");
// var now = new Date();

// const day = String(now.getDate()).padStart(2, '0');
// const month = String(now.getMonth() + 1).padStart(2, '0');
// const year = now.getFullYear();

// date.innerHTML = `${day}/${month}/${year}`;
