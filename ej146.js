function autenticarUsuario(nombreDeUsuario, clave) {
    if (nombreDeUsuario === "batman" && clave === "Alfred1960KPO!") {
        return true;
    } else {
        return false;
    }
}

let autenticado = autenticarUsuario("batman", "Alfred1960KPO!");
if (autenticado) {
    console.log(`userName: batman, password: Alfred1960KPO!`)
} else {
    console.log("Usuario no autenticado")
}
