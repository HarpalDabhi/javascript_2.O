function ArmStrong(number){
// sum initial lization.
 let sum = 0;

 // just for count loop.
 let i=1;

 // store duplicate value.
 let duplicate = number;

 // Convert into string for take length.
 number = number.toString();

 // store length.
 numlen = number.length;
 console.log("Length: " + numlen);

 // loop until reach answer and complete all calculation.

while (parseInt(number)>0) {

    // count the loop number.
    console.log("Count : "+i);
    i++;

    // store reminder into var reminder.
    reminder = number%10;
    console.log("reminder :",reminder);

    // add vallues into sum.
    sum += (reminder)**(numlen);
    console.log("Sum : "+sum);

    // update nummber
    number  = parseInt(number/10);
    console.log("Updated Number : "+number);
}
let is_same =((duplicate == sum));
if (is_same) {
    return console.log(sum + " is Armstrong");
}else{
    return console.log(duplicate+ " is not Armstrong becuase sum is ",sum);
}
}

ArmStrong(1634);
