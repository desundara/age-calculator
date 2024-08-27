
function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (dob) {
        var dobDate = new Date(dob);
        var today = new Date();

        var years = today.getFullYear() - dobDate.getFullYear();
        var months = today.getMonth() - dobDate.getMonth();
        var days = today.getDate() - dobDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }
        document.getElementById('age').innerHTML = 
            `Your age is <span class="years">${years}</span> years, 
            <span class="months">${months}</span> months, and 
            <span class="days">${days}</span> days.`;
    } else {
        document.getElementById('age').textContent = "Please enter your date of birth.";
    }
}