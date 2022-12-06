// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".

// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. En el caso que no la contenga, envíe un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable usuarioConEmail.

let nombreUsuario = prompt(" Ingresar Nombre ");
let usuarioConEmail = prompt(" Ingresar correo electrónico ");

let contrasenia = prompt("Ingresar Contraseña ");

let validar = (user, pw) => {
  if (usuarioConEmail == user && contrasenia == pw) {
    return alert(`Bienvenido ${nombreUsuario}`);
  } else if (usuarioConEmail != user && contrasenia != pw) {
    return alert("SU USUARIO Y CONTRASEÑA SON ERRÓNEOS");
  } else if (usuarioConEmail != user) {
    alert("Su usuarioConEmail es erróneo");
  } else if (contrasenia != pw) {
    alert("Su contraseña es errónea");
  }
};

console.log(validar("gimenezdelucaj@gmail.com", "ARG2022!"));

const conArroba = (usuario) => {
  let tieneArroba = false;
  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i] === "@") {
      return (tieneArroba = true);
    }  
  }return usuario = prompt("Ingrese nuevo email")
};

console.log(conArroba(usuarioConEmail));