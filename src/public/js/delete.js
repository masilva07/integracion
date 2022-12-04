window.addEventListener("load", async () => {
    const feedback = document.getElementById("feedback");
    const formulario = document.getElementById("formulario");
    const deleteUser = async (id) => {
        return fetch(`http://localhost:5000/api/usuarios/${id}`, {
            method: "DELETE",
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
        let userId;
        for (const el of formulario.elements) {
            if (el.name.length > 0) {
                if (el.name == "id") {
                    userId = el.value;
                }
            }
        }
        let response = await deleteUser(userId);
        console.log(response);
        if (response.error || response.errors) {
            feedback.innerHTML =
                "Hubo un error, verifica la informacion enviada";
        } else {
            feedback.innerHTML = "Usuario Borrado de forma existosa";
            formulario.reset();
        }
    });
});
