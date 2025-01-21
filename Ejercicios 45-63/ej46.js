let usuarioYPassword = 'pepito2017,12345';
let nombreDeUsurario = usuarioYPassword.substr(0,10);
let password = usuarioYPassword.substr(11,5);

console.log(`${nombreDeUsurario} tiene ${password} como password`)