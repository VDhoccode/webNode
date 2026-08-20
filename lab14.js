function isprime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }else{
            return true;
        }
    }
}
console.log(isprime(7));
console.log(isprime(10));