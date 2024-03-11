function Palidrome(no){
    // initialize sum
    let sum=0;

    // loop initial values
    let i=1;

    // store into duplicate values
    let duplicate_no = no;
    let len = no.toString().length;
    while (no>0) {

        console.log("Count : ",i);
        i++;
        
        // find the reminder
        let reminder = no%10;
        console.log("Reminder : ",reminder);

        // calculate the   result.
        sum=(10*sum)+reminder;
        console.log("Sum: ", sum);

        // update value
        no = parseInt(no/10);
        console.log("Updated : ",no);
    }

    console.log("Original Value : ",duplicate_no);

    if(sum == duplicate_no){
        return console.log("Number is Palidrome :",sum);
    }else{
        return console.log("Number is not Palidrome :",sum);
    }
}

(Palidrome(101));