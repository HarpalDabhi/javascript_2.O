function StrPalidrome(str,case_sensitive){
    let count =0;
    if (!case_sensitive) {
        str = str.toUpperCase();
    }

    for (let i = 0; i < parseInt(str.length/2) ; i++) {
       if(str[i]!=str[str.length-1]){
        console.log(`${str} in not palindrome`);
       }
        else{
            count++;
        }
    }
    if(count ==parseInt(str.length/2)){
        console.log("String is palidrom");
    }
}

StrPalidrome("Hah",true);