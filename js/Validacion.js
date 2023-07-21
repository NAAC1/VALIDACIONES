//1- validar nombre
//**verificar que es un string * verificar que no hayan números solo letras */
/**
 * Funcion para validar un texto
 * @param {string} nombre 
 * @return {boolean} boolean true or false
 */
function validarNombre(nombre) {
    const name = nombre.trim();
    // console.log("sin liampiar: ", nombre, " y limpio: ", name)
    //cualquier palabra que empiece con estos caracteres el mas todo lo que quiera si tiene un espacio lo acepto y puedo poner caracteres
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    //if(!pattern.test(input.value)){ 
    //si nombre no es igual a string si no nombre no esta vacio ,solo texto nada de numeros //en pattern hay que poner en los parentesis la variable que queremos comprobar

    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("entro en el if")

        return false
    } else {
        return true
    }
}

console.log(validarNombre(" Maria Jose "))
console.log(validarNombre("   "))
console.log(validarNombre(" 13Mario "))

//2-validar email
function validarEmail(correo) {
    const email = correo.trim(); //limpiar el dato de espacio
    const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   //guardo el patron que necesito para comprobar el email 
    if (typeof email !== 'string' || email === "" || !pattern.test(email)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarEmail(" nat1@gmail.es "))
console.log(validarEmail(" nat-35@gmail.com "))
console.log(validarEmail(" nat@.es "))
    //**Que el @ este en medio de un nombre de usuario y el email que termine en punto extension del servidor, restringir los listados de servidores y enviar mensaje */

    //3-validar url
    function validarurl(miurl) {
        const url = miurl.trim();//con trim elimina los espacios sobrantes delante y detras del texto
        const pattern =  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        //if(!pattern.test(input.value)){
        if (typeof url !== 'string' || url === "" || !pattern.test(url)) {/*El pattern.test(name)se utiliza para que el usuario no meta caracteres eje:+?``[] */
                console.log("entro en el if")
                return false
        } else {
                return true
        }
}
console.log(validarurl(" https://www.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es-correcta.html"))
console.log(validarurl("    "))
console.log(validarurl(" ww.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es "))

console.log(validarUrl("http://www-google.com"))
console.log(validarUrl("http://www.google.com"))
console.log(validarUrl(" "))
//4-validar fecha de control

//5-validar hora
//6-validar fecha y hora de nacimiento
function validarFecha(fecha1){
    const fecha = fecha1.trim();
    const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
    if (typeof fecha !== 'string'|| fecha === "" || !pattern.test(fecha)){
console.log("entro en el if")
    return false
    } else {
    return true
    }
    }
    console.log(validarFecha(" 2023/04/23 "))
    console.log(validarFecha("  "))
    console.log(validarFecha(" 09-04-2023 "))
    document.querySelector("[type='date']");
function mirarFecha(){
    console.log(document.querySelector("[type=date]").value);
}
//7-validar mes
//8-validar semana
//9-validar numero maximo 10
//10-validar intervalo
//11-validar telefono
    //** verificar que ha introducido un numero, limitar la entrada de numeros a 9 */
//12-validar termino de busqueda
//13-validar color favorito
