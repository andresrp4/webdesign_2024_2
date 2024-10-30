function valemail(email) {
    let partmail = email.split("@");
    
    if (partmail.lenght === 2 && partmail[1].includes(".")){
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(valemail("exemp@dom.com"));// true
console.log(valemail("exemp@dom"));// false
