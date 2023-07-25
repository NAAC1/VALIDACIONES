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
function validarURL(url1){
    const url = url1.trim(); // con trim elimina los espacios sobrantes delante y detras
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
    // console.log("sin liampiar: ", nombre, " y limpio: ", name)
    if (typeof url !== 'string'|| url === "" || !pattern.test(url)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
    console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarURL("https://www.google.com"))
console.log(validarURL(" http:/barcelonageeks.com/como-validar-una-url-usando-una-expresion-regular-en-javascript "))
console.log(validarURL(" httresion-regular-en-javascript/ "))

//4-validar fecha de control
function verFormato(atributoFormato){
    console.log("funciona")
    console.log(document.querySelector(atributoFormato).value)
    document.querySelector(atributoFormato).value;
}

//5-validar hora
function validarhora(tiempo) {
    const hora = tiempo.trim();
    const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (typeof hora !== 'string' || hora === "" || !pattern.test(hora)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarhora(" 12:40 "))
console.log(validarhora("  "))
console.log(validarhora(" 09-04-2023 "))


//6-validar fecha y hora de nacimiento

function validarFecha(date) {
    const dateTime = date.trim();
    const pattern = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}\s*-\s*([01][0-9]|2[0-3]):[0-5][0-9]$/;
    return pattern.test(dateTime);
}

console.log(validarFecha("09/05/2023-10:30")); // Devuelve true, el formato es válido
console.log(validarFecha("10:03 agosto "));   // Devuelve false, formato incorrecto
console.log(validarFecha("2023/05/08 20:40 "));// Devuelve false, formato incorrecto


function validarFecha(fecha1){
    const fecha = fecha1.trim();
    const pattern =/mkm/ 
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
    console.log(document.querySelector("[type=date]").value);// busca en la pagina un elemento de html que cumpla el query selector y devuelve el valor del input
}



//7-validar mes
function validarMesMes(mes) {
    const vMes = mes.trim();
    //*^[A-Z] asegura que el mes comience con una letra mayúscula, [a-z]{2,8} verifica que el resto del mes tenga de 2 a 8 letras minúsculas, \sde\s asegura que haya un espacio y la palabra "de" entre el mes y el año.\d{4} verifica que el año tenga exactamente 4 dígitos
    const pattern = /^[A-Z][a-z]{2,8}\sde\s\d{4}$/;
    if (typeof vMes !== 'string' || vMes === "" || !pattern.test(vMes)) {
        return false;
    } else {
        return true;
    }
}

console.log(validarMesMes("Agosto de 2023")); // Devuelve true, el formato es válido
console.log(validarMesMes("Septiembre 2023")); // Devuelve false, formato incorrecto
console.log(validarMesMes(" de 2022")); // Devuelve true, el formato es válido
//8-validar semana


//9-validar numero maximo 10
//10-validar intervalo
//11-validar telefono
    //** verificar que ha introducido un numero, limitar la entrada de numeros a 9 */
//12-validar termino de busqueda
//13-validar color favorito
