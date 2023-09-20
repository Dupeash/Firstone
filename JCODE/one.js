
let whileVal =1;




console.log("----Choose a option----<br>")
console.log('1.Best<br>')
console.log('2.First<br>')
console.log('3.Worst<br>')
console.log('4.Exit')
console.log("-------------------------<br>")
while(whileVal>0){
let n =prompt("Choose a choice\n")
n= Number.parseInt(n)
switch(n){

    case 1:alert("Best case<br>")
            break;
    case 2: alert("First case<br>")
            break;
    case 3: alert("worst case<br>");
            break;
    case 4: alert("exit");
            break;       
    default:console.log('Try the best')
             break;             
}



}