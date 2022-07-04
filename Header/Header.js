const Header = "Header imaginario 🤾‍♂️🤾‍♀️"

function HaceCosasMaravillosas(){
    let hola = "devuelve cosas increibles"
    for(let i=0;i<Math.ceil(Math.random()*20);i++){
        hola= hola + '!'
    }
    return hola
}

console.log(`${HaceCosasMaravillosas} pero uno nunca sabe cuantos ! pueden existir`)
console.log('pero la sorpresa es real')