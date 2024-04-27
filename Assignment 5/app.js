// Question 01\\:

document.write("<h1>Question 01</h1>");

var arr = [];

// Question 02\\:

document.write("<h1>Question 02</h1>")

arr = [
    [1,2,4],
    [3,5,7],
    [6,8,10],
    [7,9,11],
    [8,10,12]
]
console.log(arr);

document.write("<br>");
document.write("<br>");

// Question 03\\:


document.write("<h1>Question 03</h1>");

for(var i = 1; i <= 10; i++){
    document.write(i +"<br>")
};

// Question 04\\:

document.write("<h1>Question 04</h1>");
document.write("<br>");
document.write("<br>");

// Question 05\\:

document.write("<h1>Question 05</h1>");

var fruits = ["Banana", "Apple","Orange","PineApple","Mango","WaterMelon","Melon"];

for(var val = 0; val < 7; val++){
    document.write(`The Index number of ${val} is ${fruits[val]} <br>`)
}

document.write("<br>");
document.write("<br>");

// Question 06\\:

document.write("<h1>Question 06</h1>");

document.write("<h4>counting</h4>");

for(var count = 1; count <= 20; count++){
    document.write(count +"<br>");
};

document.write("<h4>reverse</h4>");

for(var count = 10; count >= 1; count--){
    document.write(count +"<br>");
};

document.write("<h4>even</h4>");

for(var even = 0 ; even <= 20; even++){
    if(even %2 === 0){
        document.write(even + "<br>")
    };
};

document.write("<h4>odd</h4>");

for(var odd = 0 ; odd <= 20; odd++){
    if(odd %2 !== 0){
        document.write(odd + "<br>")
    };
};

document.write("<h4>series</h4>");

for(var i = 2;i <= 20;i++){
    if(i%2==0){
        document.write(i,"k <br>")
    }
}

// Question 07\\:

document.write("<h1>Question 07</h1>");


// Question 08\\:

document.write("<h1>Question 08</h1>");

var num = [23,24,62,74,65,84,97,19,189];
var larger = num[0]

for(var i = 0;i <= num.length;i++){
    if(num[i] > larger){
        larger = num[i];
    };
};
document.write("The larger num of array is : ", larger);

// Question 09\\:

document.write("<h1>Question 09</h1>");

var num = [23,24,62,74,65,84,97,19,189];
var smaller = num[0]

for(var i = 0;i <= num.length;i++){
    if(num[i] < smaller){
        smaller = num[i];
    };
};
document.write("The smaller num of array is : ", smaller);


// Question 10\\:

document.write("<h1>Question 10</h1>");

for(var i = 1;i < 100;i++){
    if(i%5==0){
        document.write(i,"<br>")
    }
}