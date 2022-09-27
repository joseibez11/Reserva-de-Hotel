//tabla habitaciones---------------------------------------------------------------------------------------------
function traerInformacionRoom() {
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaRoom(respuesta.items);
        }
    })
}

function pintarRespuestaRoom(items) {

    let myTable = "<table>";

    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td class = encabezados>ID</td>";
        myTable += "<td class = encabezados>Habitación</td>";
        myTable += "<td class = encabezados>Estrellas</td>";
        myTable += "<td class = encabezados>Categoría de ID</td>";
        myTable += "<td class = encabezados>Descripción</td>";
        myTable += "<td></td>";
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].room + "</td>";
        myTable += "<td>" + items[i].stars + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='borrarInformacionRoom("+ items[i].id +")'>Borrar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoRoom").append(myTable)
}

function guardarInformacionRoom() {
    let myData = {
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "POST",
        data:myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoRoom").empty();
            $("#id").val();
            $("#room").val();
            $("#stars").val();
            $("#category_id").val();
            $("#description").val();
            traerInformacionRoom();
            alert("se ha guardado la habitación")
        }
    })
}

function editarInformacionRoom() {
    let myData = {
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoRoom").empty();
            $("#id").val();
            $("#room").val();
            $("#stars").val();
            $("#category_id").val();
            $("#description").val();
            traerInformacionRoom();
            alert("Se ha actualizado el dato")
        }
    });
}

function borrarInformacionRoom(idElemento){
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta) {
            $("#resultadoRoom").empty();
            traerInformacionRoom();
            alert("Se ha eliminado la habitación");
        }
    })
}

//tabla clientes-------------------------------------------------------------------------------------------------
function traerInformacionC() {
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaC(respuesta.items);
        }
    })
}

function pintarRespuestaC(items) {

    let myTable = "<table>";

    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td class = encabezados>ID</td>";
        myTable += "<td class = encabezados>Cliente</td>";
        myTable += "<td class = encabezados>Email</td>";
        myTable += "<td class = encabezados>Edad</td>";
        myTable += "<td></td>";
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarInformacionC("+ items[i].id +")'>Borrar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado").append(myTable)
}

function guardarInformacionC() {
    let myData = {
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val()
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val();
            $("#name").val();
            $("#email").val();
            $("#age").val();
            traerInformacionC();
            alert("se ha guardado el dato")
        }
    })
}

function editarInformacionC() {
    let myData = {
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val();
            $("#name").val();
            $("#email").val();
            $("#age").val();
            traerInformacionC();
            alert("Se ha actualizado el dato")
        }
    });
}

function borrarInformacionC(idElemento){
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta) {
            $("#resultado").empty();
            traerInformacionC();
            alert("Se ha eliminado el dato");
        }
    })
}

//tabla mensajes--------------------------------------------------------------------------------------------------
function traerInformacionM() {
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaM(respuesta.items);
        }
    })
}

function pintarRespuestaM(items) {

    let myTable = "<table>";

    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td class = encabezados>ID</td>";
        myTable += "<td class = encabezados>Mensaje</td>";
        myTable += "<td></td>";
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarInformacionM("+ items[i].id +")'>Borrar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoMSG").append(myTable)
}

function guardarInformacionM() {
    let myData = {
        id:$("#idMensaje").val(),
        messagetext:$("#messagetextMensaje").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data:myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoMSG").empty();
            $("#id").val();
            $("#messagetext").val();
            traerInformacionM();
            alert("se ha guardado el mensaje")
        }
    })
}

function editarInformacionM() {
    let myData = {
        id:$("#idMensaje").val(),
        messagetext:$("#messagetextMensaje").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMSG").empty();
            $("#id").val();
            $("#messagetext").val();
            traerInformacionM();
            alert("Se ha actualizado el mensaje")
        }
    });
}

function borrarInformacionM(idElemento){
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g18a0b360830134-bbddretouno.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta) {
            $("#resultadoMSG").empty();
            traerInformacionM();
            alert("Se ha eliminado el mensaje");
        }
    })
}
