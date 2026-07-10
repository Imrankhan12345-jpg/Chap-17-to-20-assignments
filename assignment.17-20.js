var numbers = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,3,1]
]
 
document.write(`<div style="border:2px solid skyblue; padding:8px;
    border-radius:20px 20px; max-width:150px; height:80px;">`)
for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++) {
        // document.write(numbers[i][j] + " "); <-- can you put this code replace below code.
        document.write("&nbsp;"+numbers[i][j] + "&nbsp;");
    }
    document.write("<br>"); 
}
document.write(`</div><br>`)

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px;
    padding:8px; max-width:150px; height:200px;">`)
for(var i = 1 ; i <= 10 ; i++){
  
    document.write(`&nbsp;${i}<br>`)
}
document.write(`</div><br>`)

var tableName = +prompt("Enter Table Name:")
var tableLimit = +prompt("Enter Table Limit: ")

document.write(`<div style="border:2px solid skyblue; width:350px; 
    border-radius:20px 20px; padding:8px;">`)
document.write(`Multiplication table of ${tableName}
    length ${tableLimit}<br>`)
for(var j = 0 ; j < tableLimit ; j++){
    document.write(`&nbsp;${tableName}&nbsp;*&nbsp;${(j+1)}&nbsp;=&nbsp;${tableName*(j+1)}<br>`)
}
document.write(`</div><br>`)

var fruit = ["apple", "banana", "mango", "orange", "strawberry"]

document.write(`<div style="border:2px solid skyblue; height:210px;
    max-width:290px; border-radius:20px 20px; padding:8px;">`)
for(var i = 0 ; i < fruit.length ; i++){
document.write("&nbsp;"+fruit[i]+"<br/>")
}

for(var j = 0 ; j < fruit.length ; j++){
document.write("&nbsp;"+"Element at Index "+j + " is : "+fruit[j]+"<br/>")
}
document.write(`</div>`)

document.write(`<br><div style="border:2px solid skyblue; height:500px; 
    max-width:420px; border-radius:20px 20px; padding:8px;">`)
document.write(`<p style="font-style:italic; text-shadow:1px 2px 2px gray; font-size:1.6rem;">&nbsp;Counting: <br>`)
for(var i = 1 ; i <= 15 ; i++){
    document.write(`&nbsp;${i}`)
}
document.write(`<br>`)
document.write(`<br>`)
document.write(`&nbsp;Reverse Counting: <br>`)
for(var i = 10 ; i > 0 ; i--){
    document.write(`&nbsp;${i}`)
}
document.write(`<br>`)
document.write(`<br>`)
document.write(`&nbsp;Even: <br>`)
for(var i = 0 ; i <= 20 ; i=i+2){
    document.write(`&nbsp;${i}`)
}
document.write(`<br>`)
document.write(`<br>`)
document.write(`&nbsp;Odd: <br>`)
for(var i = 1 ; i < 20 ; i=i+2){
    document.write(`&nbsp;${i}`)
}
document.write(`<br>`)
document.write(`<br>`)
document.write(`&nbsp;Series: <br>`)
for(var i = 0 ; i < 20 ; i=i+2){
    document.write(`&nbsp;${(i+2)}k`)
}
document.write(`</div><br>`)

var user = prompt(`Enter value for search`).toLowerCase()
var snackShop = ["cake","cookie","snack","coffee"]
var itemFood = false
var itemIndex = -1

for(var i = 0 ; i < snackShop.length ; i++){
   if(user == snackShop[i]){
    itemFood = true
    itemIndex = i
    break
   }
}
if(itemFood == true){
    alert(`The item "${user}" is available at Index: ${itemIndex}<br>`)
}
else if(user == ""){
    alert(`Enter any search value.`)
}

else{
    alert(`The item "${user}" was not found. <br> We have available "Cake","Cookie","Snack","Coffee".<br>`)
}

var Arr = [24, 53, 78, 91, 12];
var largestNumber = Arr[0];
var smallestNumber = Arr[0]

for (var i = 0; i < Arr.length; i++) {
if (largestNumber < Arr[i]) {
 largestNumber = Arr[i]
}
}

document.write(`<div style="border:2px solid skyblue; width:230px; height:50px;
    border-radius:20px 20px; padding:8px;">`)
document.write(`Array items : [${Arr}] <br> The largest number is ${largestNumber}<br>`)
document.write(`</div><br>`)

for (var i = 0; i < Arr.length; i++) {
if (smallestNumber > Arr[i]) {
 smallestNumber = Arr[i]
}
}

document.write(`<div style="border:2px solid skyblue; width:230px; height:50px;
    border-radius:20px 20px; padding:8px;">`)
document.write(`Array items : [${Arr}] <br> The smallest number is ${smallestNumber}<br>`)
document.write(`</div><br>`)

document.write(`<div style="border:2px solid skyblue; width:430px; height:20px; 
    padding:10px; border-radius:20px 20px;">`)
for(var i = 5 ; i <= 100 ; i=i+5){
document.write(`${i},`)
}
document.write(`</div>`)