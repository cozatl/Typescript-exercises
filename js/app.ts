function formatToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`; // Or `${day} ${month} ${year}` for space separation
}

const myDate = new Date(); // Get current date
const formattedDate = formatToDDMMYYYY(myDate);
//console.log(formattedDate);
// const getAge = (birthday: string): number => {
//     if (age) {
//         return `Hello ${name} ${age}`;
//     }else {

//         return `Hello ${name}`;
//     }
    
// }
// sayHi("John", 23);