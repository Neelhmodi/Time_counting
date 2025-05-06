// const endDate = "17 February 2024 10:00 PM" ;

// document.getElementById("endDate").innerText = endDate;
// const input = document.querySelectorAll("input");

// const clock = ()=>{
//     const end = new Date(endDate);
//     const currantDate = new Date();
//     const diff = (end - currantDate)/1000;

//     if(diff < 0){
//         return;
//     }

// // convert into day
// input[0].value = Math.floor(diff / 3600 / 24);

// // convert into Hours
// input[1].value = Math.floor(diff / 3600) % 24;

// // convert into Minutes
// input[2].value = Math.floor(diff / 60) % 60;

// // convert into Second
// input[3].value = Math.floor(diff) % 60;

// }
// // initial call
// clock()

// setInterval(()=>{
//     clock()
// },1000)