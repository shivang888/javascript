console.log(" my name is shivang ");

let scores = prompt("Enter your Scores :");

 if(scores>=90 && scores<=100){
   document.write("your grade is A");
   console.log("your grade is A");
 }
 else if(scores>=70 && scores<=89){
    document.write("your grade is B");
    console.log("your grade is B");
 }
 else if(scores>=60 && scores<=69){
    document.write("your grade is C");
    console.log("your grade is C");
 }
 else if(scores>=50 && scores<=59){
    document.write("your grade is D");
    console.log("your grade is D");
 }
 else if(scores<=49){
    document.write("your grade is F (you are fail plese focus on study)");
    console.log("your grade is F (you are fail)");
 }
 else{
    console.log("Not valid");
 }