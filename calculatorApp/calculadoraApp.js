const {suma , resta , multiplicacion , division 
    , porcentaje , potencia , raiz } =  require('./modulos/operaciones')

console.log('Bienvenido a mi Calculadora con node.js')
console.log('sumar , restar , multiplicar , dividir , porcentaje , potencia , raiz')
// importo el modulo readline para poder interactuar con el usuario atravez de node
const readline = require('readline')

//creo la interfaz de lectura que viene con el modulo
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// pregunto algo al usuario
const AskFunction = () => {
    rl.question('Que operacion Matematica quieres hacer : ' , (respuesta)=>{

        if(respuesta === 'suma' || respuesta === 'sumar' || respuesta === '+'){
            rl.question('Ingresa el primer Numero a Sumar : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el segundo numero : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,suma(num1 , num2))
                    //rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
    
        if(respuesta === 'resta' || respuesta === 'substraccion' || respuesta === '-' || respuesta === 'restar' ){
            rl.question('Ingresa el primer Numero a restar : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el segundo numero : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,resta(num1 , num2))
                    // rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
        if(respuesta === 'multiplicacion' || respuesta === 'multiplicar' || respuesta === '*'){
            rl.question('Ingresa el primer Numero a multiplicar : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el segundo numero : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,multiplicacion(num1 , num2))
                    //rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
    
        if(respuesta === 'division' ||respuesta === 'dividir' || respuesta === '/'){
            rl.question('Ingresa el primer Numero a dividir : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el segundo numero : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,Math.floor(division(num1 , num2)))
                    // rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
        if(respuesta === 'porcentaje' || respuesta === '%' || respuesta === 'porciento'){
            rl.question('Ingresa el primer Numero  : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el porcentaje : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,porcentaje(num1 , num2))
                    // rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
        if(respuesta === 'potencia' || respuesta === '**'){
            rl.question('Ingresa el primer Numero  : ' , (num1)=>{
                num1 = parseInt(num1)
                rl.question('Ingresa el exponente : ' , (num2)=>{
                    num2 = parseInt(num2)
                    console.log( `El resultado es : ` ,potencia(num1 , num2))
                    // rl.close()

                    rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                        if(respuesta === 'si'){
                            AskFunction()
                        }else{
                            console.log('CALCULADORA CERRADA')
                            rl.close()
                        }
                    })
                })
            } )
        }
    
    
        if(respuesta === 'raiz' || respuesta === 'raiz cuadrada'){
            rl.question('Ingresa el numero a buscar la raiz : ' , (num1)=>{
                num1 = parseInt(num1)
                console.log( `El resultado es : ` ,Math.floor(raiz(num1)))
                // rl.close()
                rl.question('Otra operacion Matematica ? si/no : ' , (respuesta)=>{
                    if(respuesta === 'si'){
                        AskFunction()
                    }else{
                        console.log('CALCULADORA CERRADA')
                        rl.close()
                    }
                })
            } )
        }

    })
}
AskFunction()
