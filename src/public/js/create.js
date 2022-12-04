window.addEventListener("load", async () => {
    const feedback = document.getElementById("feedback");
    const formulario = document.getElementById("formulario");
    const createUser = async (data) => {
        return fetch("http://localhost:5000/api/usuarios", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                return resp.json();
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    };

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = {};
        for (const el of formulario.elements) {
            if (el.name.length > 0) {
                formData[el.name] = el.value;
            }
        }
        let response = await createUser(formData);
        if (response.error || response.errors) {
            feedback.innerHTML =
                "Hubo un error, verifica la informacion enviada";
        } else {
            feedback.innerHTML = "Usuario Creado de forma existosa";
            formulario.reset();
        }
    });
});
