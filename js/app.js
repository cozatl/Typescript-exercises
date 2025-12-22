"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Or `${day} ${month} ${year}` for space separation
}
function getAge(dob) {
    const getFormat = /^\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;
    const today = new Date();
    const match = getFormat.exec(dob);
    if (match) {
        const givenYear = parseInt(dob.substring(0, 4));
        const givenMonth = parseInt(dob.substring(5, 7));
        const givenDay = parseInt(dob.substring(8, 10));
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        let age = today.getFullYear() - givenYear;
        if (age < 0) {
            let errorFound = 'Given year can not be greater than current year';
            return errorFound;
        }
        // If the current month is earlier than the month of birth, or if it's the same month but the current day is earlier, subtract one year.
        if (currentMonth < givenMonth || (currentMonth === givenMonth && currentDay < givenDay)) {
            age--;
        }
        return age.toString();
    }
    else {
        return 'Incorrect format, please validate given date: YYYY-MM-DD';
    }
}
const myDate = new Date(); // Get current date
const formattedDate = formatToDDMMYYYY(myDate);
console.log(myDate);
const result = getAge('2020-11-12');
console.log(`The person is ${result} years old`);
