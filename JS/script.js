

var eventType = prompt("What type of event are you attending?");
var tempFahr =  prompt("What's the wether outside?");
var result = ("You're going to a " + eventType + " event and it's " + tempFahr + " degress outside, We suggest you wear");

 if(eventType === "Casual" && tempFahr < 54){
   console.log(result + " something comfy and a coat");
 }else if(eventType === "Casual" && tempFahr > 54 && tempFahr < 70){
   console.log(result + " something comfy and a jacket");
 }else if(eventType === "Casual" && tempFahr >70){
   console.log(result + " something comfy and no jacket");
 }else if(eventType === "Semi-formal" && tempFahr < 54){
   console.log(result + " a polo and a coat");
 }else if(eventType === "Semi-formal" && tempFahr > 54 && tempFahr < 70){
   console.log(result + " a polo and a jacket");
 }else if(eventType === "Semi-formal" && tempFahr > 70){
   console.log(result + " a polo and no jacket");
 }else if(eventType === "Formal" && tempFahr < 54){
   console.log(result + " a suit and a coat");
 }else if(eventType === "Formal" && tempFahr > 54 && tempFahr < 70){
   console.log(result + " a suit and a jacket");
 }else if(eventType === "Formal" && tempFahr > 70){
   console.log(result + " a suit and no jacket");
 }else{
   console.log("Try a different type of event");
 }
