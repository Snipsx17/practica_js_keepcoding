//Tenemos  otro  error  que  nuestro  cliente  nos  pide  arreglar.  El  cliente  está  pidiendo  un  usuario y  nos  dice  que  está  usando  el  id  correcto  el  1.  Pero  que  siempre  le  da  undefined.  Nos  a pasado  el  código  que  tenemos  que  revisar  y  arreglar.  Para  este  problema  crear  un  archivo llamado  bugAsync.js  con  la  solución.

// Este programa simula una llamada asincrónica para obtener un usuario 
function userFetch(id) {
    let usuario; 
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' }; 
                resolve(usuario)
            } else {
                reject('Usuario no encontrado!')
            }
        }, 2000)
    });
}

async function obtenerUsuario(id) {
    return await userFetch(id);
}

const usuario = obtenerUsuario(1).then( (result) => console.log(result) );
console.log(usuario);