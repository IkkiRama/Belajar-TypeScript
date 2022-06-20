"use strict";
console.log("Belajar Enum");
// enum Month {
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// }
// enum Month2 {
//     January = 1,
//     February = 100,
//     March,
//     April,
//     May,
// }
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "February";
    Month["MAR"] = "March";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month);
// console.log(Month2);
