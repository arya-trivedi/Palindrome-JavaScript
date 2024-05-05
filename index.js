const userinput = document.getElementById("check-pal");

function check(value){
    str = []; //create an empty array and build a list
    for(let i = 0; i < value.length; i++){
        achar = value.charAt(i) //char at index
        if(achar >= 'a' && achar <= 'z'){
            str.push(achar); //append to the str array
        }
    }
    //above could also be achieved by str = value.split(""), but we want 
    //show array is built from a string

    start = 0;
    end = str.length - 1;
    while(start<end){
        if(str[start] != str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true; //default
}


function isPalindrome(){
    let value = userinput.value;
    value = value.toLowerCase();
    if(check(value)){ //if true
        alert(value + " is a Palindrome")
    }else{
        alert(value + " is NOT a Palindrome")
    }
    //reset
}

