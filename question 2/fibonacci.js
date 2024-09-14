
let first = 0;
let second = 1;
let fibo = [first, second];


function Fibonacci(number, fiboRange){

    if(number === first || number == second){
        if(number === first){
            return `O número ${number} esta presente na posição ${first}`
        }
        return `O número ${number} esta presente na posição ${second}`
    }
    for(let i = 3; i < fiboRange; i++){
        let third = first + second;
        if(number === third){
            fibo.push(number);
            console.log(fibo);
            return `O número ${number} esta presente na posição ${i}`
        };
        fibo.push(third);
        first = second;
        second = third;
    };
    console.log(fibo)
    return "Número não encontrado na sequência"
    
};

module.exports = Fibonacci;