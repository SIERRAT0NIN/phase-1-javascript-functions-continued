// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
// function wrapAdjective("*"){
//   return function(){
//     const adjective = "highlight"
//    console.log(adjective);
//   }
// }
// wrapAdjective("*")

const wrapAdjective = (style = "*") => {
  return function (adj = "special") {
    return `You are ${style}${adj}${style}!`;
  };
};
