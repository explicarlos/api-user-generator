// variables

// funciones
const llamarAPI= ()=> {
    $.ajax({
        url: 'https://randomuser.me/api/?nat=es',
        dataType: 'json',
        success: function(data) {
            console.log(
                data.results[0].name.title,
                data.results[0].name.first,
                data.results[0].name.last
            );

            let micontenido=
            /* html */
            `<img src="${data.results[0].picture.large}" />
            <br/>
            <p>
                ${data.results[0].name.title}.
                ${data.results[0].name.first},
                ${data.results[0].name.last}
            </p>`;
        }
        error: function() {
            console.log("Error en llamada a la API.");
        }
      });
      return;
}
// eventos
/* $("#boton").click(e=> {
    e.prevetDefault();
    llamarAPI();
    return;
}); */
boton.on("click", e=> {
    return;
});
