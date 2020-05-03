const editar = document.querySelectorAll("#editar");
const eliminar = document.querySelectorAll("#eliminar");
console.log("ok");

eliminar.forEach((elimina) => {
  elimina.addEventListener("click", () => {
    let dato = {
      id: elimina.parentElement.parentElement.id,
    };
    console.log(dato);
    fetch("http://localhost:3000/delete", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok === true) {
          elimina.parentElement.parentElement.parentElement.removeChild(
            elimina.parentElement.parentElement
          );
        }
      });
  });
});

/* editar.forEach((edita) => {
    edita.addEventListener("click", () => {
      let dato = {
        id: elimina.parentElement.parentElement.id,
      };
      console.log(dato);
      fetch("http://localhost:3000/editar", {
        method: "POST",
        body: JSON.stringify(dato),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.ok === true) {
            edita.parentElement.parentElement.parentElement.removeChild(
              edita.parentElement.parentElement
            );
          }
        });
    });
  });  */

/*----------- POP UP ---------------- */
const actualizar = document.querySelector(".actualizar");
const popUP = document.querySelector(".pop_up");
const exit = document.querySelector("#exit");
const form = document.querySelector(".formulario1");
const edit = document.querySelector(".edit");
editar.forEach((result) => {
  result.addEventListener("click", () => {
    popUP.classList.add("activo");

    actualizar.addEventListener("click", (e) => {
      console.log();
      const formulario = new FormData(form);
      console.log(formulario.get("titulo"));
      
      e.preventDefault();
      const datos = {
        titulo: formulario.get("titulo"),
        imagen: formulario.get("imagen"),
        link: formulario.get("link"),
        descripcion: formulario.get("descripcion"),
        _id: result.parentElement.parentElement.id,
      };
      fetch("http://localhost:3000/editar", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json",
        },
      })
     
        .then((res) => res.json())
        .then((res) => {
          if (res.ok === true) {
           const nodos =  [...edit.parentElement.parentElement.childNodes]
           console.log(nodos)
           for(let i = 0; i<nodos.length;i++){
               if( nodos[i].id == datos._id){
               nodos[i].innerHTML = `<div class="imagen"><img src="${datos.imagen}"/></div><div class="titulo"><p>${datos.titulo}</p></div><div class="url"><a href="${datos.link}">URL</a></div><div class="descripcion"><p>${datos.descripcion} </p></div><div class="edit"><i id="eliminar" class="far fa-trash-alt"></i><i id="editar" class="fas fa-edit"></i></div>`;
               }
              
           }
            form.reset()
            exit.click() 
        }
          
        });
    });
  });
});
exit.addEventListener("click", () => {
  popUP.classList.remove("activo");
});
