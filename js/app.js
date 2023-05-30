const btnAbrir = document.querySelector("#btn-abrir");
const btnCerrar = document.querySelector("#btn-cerrar");
const modal = document.querySelector("#modal");

btnAbrir.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrar.addEventListener("click",()=>{
    modal.close();
})

