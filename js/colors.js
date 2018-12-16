//SECTION 1 - THE SECTION THAT RANDOMLY GENERATES A COLOR TO BE USED AS A BASE FOR THE SITE'S COLOR SCHEME

//RED COLOR SECTION
var red = Math.random() * 175; //Randomly generate a number and make it between 0 and 175
var realred = Math.round(red); //Remove the numbers after the decimal point

//If the randomly generated number is less than 50 then add 100 to it
if (realred < 100) {//If the randomly generated number is less than 50...
    realred = realred + 100; //...Then add 100 to it
}

console.log("The red number is " + realred);//Tell me in the console what number you got

//FOR COMMENTS ABOUT THE GENERATED GREEN AND BLUE NUMBERS, SEE THE RED SECTION, THEY HAVE THE SAME MATH APPLIED TO THEM

//GREEN COLOR SECTION
var green = Math.random() * 175; //Randomly generate a number and make it between 0 and 175
var realgreen = Math.round(green); //Remove to numbers after the decimal point

if (realgreen < 100) {
    realgreen = realgreen + 100;
}
console.log("The green number is " + realgreen);

//BLUE COLOR SECTION
var blue = Math.random() * 175;
var realblue = Math.round(blue);

if (realblue < 100) {
    realblue = realblue + 100;
}

console.log("The blue number is" + " "  + realblue);
console.log("");//I need a line break in the console to help view the data


//If the sum of the three is greater than 680 then subtract 50 from each of them to make sure the final color isn't too light
if ((realred + realgreen + realblue) > 680) {
    realred = realred - 100;
    realgreen = realgreen - 100;//...
    realblue = realblue - 100;
}



var color = realred + "," + realgreen + "," + realblue; //Make the r,g,b number format for the main color that will be used later
var lightercolor = (realred + 100) + "," + (realgreen + 100) + "," + (realblue + 100);
var lightcolor = (realred + 50) + "," + (realgreen + 50) + "," + (realblue + 50);
var lightishcolor = (realred + 25) + "," + (realgreen + 25) + "," + (realblue + 25);
var darkercolor = (realred - 75) + "," + (realgreen - 75) + "," + (realblue - 75);
var darkcolor = (realred - 100) + "," + (realgreen - 100) + "," + (realblue - 100);
console.log("The RGB code is " + color); //Let me know that I did the previous line right in the console



//SECTION 2 - THIS IS THE SECTION THAT WILL CONTAIN ALL THE CSS THAT WILL BE INJECTED INTO THE HTML FILE

var css = "<style>"
css += "body{background-color: rgba(" + color + ",1);}";


css += "h1{color:rgba(" + lightercolor + ",1);text-shadow: 2px 2px 1px rgba(" + darkcolor + ",1);}";
css += "p{color:rgba(" + darkercolor + ",1);}";
css += "h2{color:rgba(" + darkcolor + ",1);}";
css += "img{background-color: rgba(" + lightercolor + ",1);border:10px solid rgba(" + lightcolor + ",1);}";
css += "a{color:rgba(" + darkcolor + ",1);}";
css += ".here{color:rgba(" + lightcolor + ",1);}";
css += "#note h2{color:rgba(" + lightercolor + ",1);}";
css += "#note a{color:rgba(" + lightishcolor + ",1);}";
css += "h3{color:rgba(" + lightcolor + ",1);}";
css += ".gameList li{color:rgba(" + darkercolor + ",1);}";
css += "a:hover{color:rgba(" + lightercolor + ",1);background-color:rgba(" + darkcolor + ",1);}";
css += ".projtit{color:rgba(" + lightercolor + ",1);}</style>";

css += "</style>";
//SECTION 3 - THIS IS THE SECTION THAT WILL WRITE IT OUT TO THE HTML FILE

document.write(css);
console.log(css);

//Cool colors that I really like that are generated by the random color generator

// 106, 172, 170