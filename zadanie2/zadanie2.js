class Calculator{
    add({a,b}){
        return a+b;
    }
    substruct({a,b}){
        return a -b;
    }
    multipy({a,b}){
        return a*b;
    }
    divide({a,b}){
        if (b==0){
            return "nie dzieli sie przez 0"
        }
        else{
        return a/b
        }
    }
}

const Kalkulator = new Calculator();
const parametry = {a : 12, b :3}

console.log(`dodawanie : ${Kalkulator.add(parametry)} `)
console.log(`odejmowanie : ${Kalkulator.substruct(parametry)}`)
console.log(`mnozenie : ${Kalkulator.multipy(parametry)}`)
console.log(`dzielenie : ${Kalkulator.divide(parametry)}`)