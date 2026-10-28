export function generarLorem(n: number):string {
  let loremcito = "lorem ipsum"
   if (n > 1){
    return "lorem ipsum" + " "+ generarLorem(n-1)
  }
  else if (n < 1){
    return ""
  }
  else{
    return "lorem ipsum"
  }
  }
let lorem = ("lorem ipsum")
console.log(generarLorem(5)+".");
