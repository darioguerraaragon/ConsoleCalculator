const suma = (n1 , n2) => {return n1 + n2}

const resta = (n1 , n2) => {return n1 - n2}

const multiplicacion = (n1 , n2) => {return n1 * n2}

const division = (n1 , n2) => {return n1 / n2}

const porcentaje = (n1 , n2) => {return (n1 * n2) / 100}

const potencia = (n1 , n2) => {return Math.pow(n1 , n2)}

const raiz = (n1 , n2) => {return Math.sqrt(n1)}


module.exports = {
    suma : suma,
    resta : resta,
    multiplicacion : multiplicacion,
    division : division,
    porcentaje : porcentaje,
    potencia,
    raiz
}