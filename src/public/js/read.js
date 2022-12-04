window.addEventListener("load", async () => {
    const totalUsuarios = document.getElementById("total_usuarios");
    const listadoUsuarios = document.getElementById("listado_usuarios");
    let data = await fetch("http://localhost:5000/api/usuarios");
    let users = await data.json();

    const { usuarios, total_usuarios_activos } = users;

    totalUsuarios.innerHTML = total_usuarios_activos;
    if (usuarios.lenght === 0) {
        listadoUsuarios.innerHTML = `<li>Aun no tienes usuarios creados</li>`;
    } else {
        let htmlContent = ``;
        usuarios.forEach((usuario) => {
            htmlContent += `<li>
                            <span> <strong>ID:</strong> ${usuario.uid} </span>
                            <span> <strong>Nombre:</strong> ${usuario.nombre} </span>
                            <span> <strong>Correo:</strong> ${usuario.correo} </span>
                            </li>`;
        });
        listadoUsuarios.innerHTML = htmlContent;
    }
});
