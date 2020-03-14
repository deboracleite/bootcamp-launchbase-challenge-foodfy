const modalOverlay = document.querySelector('.modal_overlay');
const cardsReceitas = document.querySelectorAll('.card');

for(let card of cardsReceitas){
        card.addEventListener("click", function(){
        const img = card.getAttribute("id");
        const prato = card.querySelector("h2");
        const autor = card.querySelector("h5");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src=`${img}.png`;
        modalOverlay.querySelector("p").textContent = `${prato.textContent}`;
        modalOverlay.querySelector("h5").textContent = `${autor.textContent}`;
    })  
}

const closeModal = document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector(".modal_content").removeChild(prato);
    modalOverlay.querySelector(".modal_content").removeChild(autor);
})

