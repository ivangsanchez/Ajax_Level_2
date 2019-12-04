let xhr =new XMLHttpRequest(),
method="GET",
url="json/file3.json";

window.onload=function()
{
    //this.alert("testo");
    //this.document.getElementById("btnClick").addEventListener("click",MostrarMensaje);
    this.document.querySelector("#btnClick").addEventListener("click",MostrarMensaje);
}

function MostrarMensaje()
{
    //alert("lorem");
    xhr.open(method,url,true);
    xhr.onload=funcionCallBack;
    xhr.send(null);
    console.log("estamos en la funcion mostar Mensaje");
}

function funcionCallBack()
{
    console.log("estamos en la funcion call back");
    //document.querySelector("#resultado").innerHTML=xhr.responseText;
    let miJson = xhr.responseText;
    //document.querySelector("#resultado").innerHTML=miJson;
    let miObjJson = JSON.parse(miJson);
    document.querySelector("#resultado").innerHTML=miObjJson.nombre;
    console.log(miObjJson);
}
