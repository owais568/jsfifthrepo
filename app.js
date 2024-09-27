// // students names
// var names = [];
// names [0] = prompt("Enter your name.")
// names [1] = prompt("Enter your name.")
// names [2] = prompt("Enter your name.")
// console.log(names)

// // students names
// var names = [];
// names [0] = prompt("Enter your name.")
// names [1] = prompt("Enter your name.")
// names [2] = prompt("Enter your name.")

// // strings array
// var strings = ["ali",`akbar`,`hamza`,`sidra`];
// console.log(strings)
// // numbers array
// var numbers = [1,2,3,4,5,6];
// console.log(numbers)

// var boolean = [false,true]
// console.log(boolean)

// var mixed = [20,34,undefined,null,false]
// console.log(mixed)

// document.write("<h1>Qualification</h1>"+"<br>");
// var subjects = ["1)SSC"+"</br>"+"2)HSC"+"</br>"+"3)BCS"+"</br>"+"4)BS"+"</br>"+"5)BCOM"+"</br>"+"6)MS"+"</br>"+"7)M.Phil"+"</br>"+"8)PhD"+"</br>"+"</br>"+"</br>"];
// document.write(subjects)

// var names = ["Michael","John","Tony"];
// var score = [320,230,480]
// var total = 500
// document.write("Score of"+names[0]+"is"+score[0]+".Percentage:"+score[0]*100/total+"%"+"</br>");
// document.write("Score of"+names[1]+"is"+score[1]+".Percentage:"+score[1]*100/total+"%"+"</br>");
// document.write("Score of"+names[2]+"is"+score[2]+".Percentage:"+score[2]*100/total+"%"+"</br>"+"</br>"+"</br>");

// var cities = [`Karachi `,`Lahore `,`Islamabad `,`Quetta `,`Peshawar `]
// document.write("Cities list:"+"</br>");
// document.write(cities+"</br>")
// var newCities = [`Islamabad `+`Quetta`]
// document.write("Selected cities list: "+newCities+"</br>");


// var colors = [``,`red`,`blue`,`green`]
//  colors[0] = prompt(`enter any color`)
// document.write(colors)

// var colors = [`red`,`blue`,`green`]
// colors[3] = prompt(`enter any color`)
// document.write(colors)

// var colors = [`red`,`blue`,`green`]
// colors.unshift(`black`,`yellow`)
// colors.shift();colors.pop()
// console.log(colors)

// var scores = [320,230,480,120];
// document.write(`Scores of Students : `+scores+"</br>")
// scores[0] = 120 
// scores[1] = 230 
// scores[2] = 320 
// scores[3] = 480
// document.write(`Ordered Scores of Students : `+scores) 

document.write(`Array:`+`</br>`)
var arr =["This","is","my","cat"]
document.write(arr +'</br>')
document.write(`String:`+`</br>`)
document.write(arr[0]  + arr[1] + arr[2] + arr[3]+"</br>"+"</br>")

document.write("Devies:"+"</br>");
var computer = [`keryboard`,`mouse`,`printer`,`moniter`]
document.write(computer+"</br>"+"</br>")
document.write("Out:"+"</br>");
document.write(computer[0]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[1]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[2]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[3]+"</br>"+"</br>")

document.write("Devies:"+"</br>");
var computer = [`keryboard`,`mouse`,`printer`,`moniter`]
document.write(computer+"</br>"+"</br>")
document.write("Out:"+"</br>");
document.write(computer[3]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[2]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[1]+"</br>")
document.write("Out:"+"</br>");
document.write(computer[0]+"</br>"+"</br>")

document.write("<select><option>Apple</option><option>Samsung</option><option>Nokia</option><option>Motorola</option><option>Sony</option><option>Haier</option></select>")

// CHAPTER 17-20
var num = [1,2,3,4,5,6,7,8,9,10]
for(i=0; i<10; i++  ){
    console.log(num[i])    
}


var num = prompt("Enter any number");
var range = prompt("Enter your range.")
for(i=1; i<=range; i++ ){
    document.write(`${num}x${i}=${num*i}`+"</br>")
}
