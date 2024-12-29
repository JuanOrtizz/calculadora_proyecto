// botones
const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
const boton5 = document.getElementById('boton5')
const boton6 = document.getElementById('boton6')
const boton7 = document.getElementById('boton7')
const boton8 = document.getElementById('boton8')
const boton9 = document.getElementById('boton9')
const boton0 = document.getElementById('boton0')

// botones especiales
const botonAC = document.getElementById('botonAC')
const botonBorrar = document.getElementById('botonBorrar')
const botonResultado = document.getElementById('botonResultado')
const botonPunto = document.getElementById('botonPunto')

// botones operaciones
const botonSumar = document.getElementById('botonSumar')
const botonRestar = document.getElementById('botonRestar')
const botonMultiplicar = document.getElementById('botonMultiplicar')
const botonDividir = document.getElementById('botonDividir')
const botonModulo = document.getElementById('botonModulo')
const botonParentesis = document.getElementById('botonParentesis')


// declaro valores numericos
const arrayBotonesNumericos = []
arrayBotonesNumericos.push(boton0)
arrayBotonesNumericos.push(boton1)
arrayBotonesNumericos.push(boton2)
arrayBotonesNumericos.push(boton3)
arrayBotonesNumericos.push(boton4)
arrayBotonesNumericos.push(boton5)
arrayBotonesNumericos.push(boton6)
arrayBotonesNumericos.push(boton7)
arrayBotonesNumericos.push(boton8)
arrayBotonesNumericos.push(boton9)
let contadorBotones = 0

arrayBotonesNumericos.forEach(boton => {
    boton.value = contadorBotones
    console.log(boton.value)
    contadorBotones++
})

console.log(arrayBotonesNumericos)

arrayBotonesNumericos.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        const contenedorResultado = document.querySelector('.resultado')
        const resultado = document.getElementById('resultadoParrafo')

        resultado.textContent += boton.value

        contenedorResultado.appendChild(resultado)
    })
})

// declaro botones especiales

botonAC.addEventListener('click', ()=>{
    const contenedorResultado = document.querySelector('.resultado')
    const resultado = document.getElementById('resultadoParrafo')

    resultado.textContent = ""

    contenedorResultado.appendChild(resultado)
})

botonBorrar.addEventListener('click', ()=>{
    const resultado = document.getElementById('resultadoParrafo')
    
    const resultadoTexto = resultado.textContent 

    if (resultadoTexto.length > 0) {
        const resultadoNuevo = resultadoTexto.slice(0, -1)
        resultado.textContent = resultadoNuevo
    }
})

botonPunto.addEventListener('click', ()=>{
    botonPunto.value = "."
    const contenedorResultado = document.querySelector('.resultado')
    const resultado = document.getElementById('resultadoParrafo')

    resultado.textContent += botonPunto.value

    contenedorResultado.appendChild(resultado)
})

botonSumar.addEventListener('click', ()=>{
    botonSumar.value = "+"
    const contenedorResultado = document.querySelector('.resultado')
    const resultado = document.getElementById('resultadoParrafo')

    resultado.textContent += botonSumar.value

    contenedorResultado.appendChild(resultado)
})