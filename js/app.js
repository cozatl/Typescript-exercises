function formatToDDMMYYYY(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year); // Or `${day} ${month} ${year}` for space separation
}
var myDate = new Date(); // Get current date
var formattedDate = formatToDDMMYYYY(myDate);
//console.log(formattedDate);
// const getAge = (birthday: string): number => {
//     if (age) {
//         return `Hello ${name} ${age}`;
//     }else {
//         return `Hello ${name}`;
//     }
// }
// sayHi("John", 23);
