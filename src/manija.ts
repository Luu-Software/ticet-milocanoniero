export function generarLorem(n: number):string {
   if (n >= 1){
    return generarLorem (n-1) * n
  }
  else if (n <= 0){
    return ("")
  }
  else{
    return ""
  }
  }
console.log(generarLorem(5));
