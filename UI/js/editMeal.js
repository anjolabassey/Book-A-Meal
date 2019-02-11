const addModal = document.getElementById("addmodal");
const addMealTrigger = document.getElementById("add-trigger");
const closeAddMeal = document.getElementById("close-add");

// displays the modal when the add button is clicked
addMealTrigger.addEventListener("click", () => {
    console.log("L")
    addModal.classList.toggle("show");
});

//close the add meal modal when user clicks close button 
closeAddMeal.addEventListener("click", event => {
    addModal.style.display = "none";
});

//close the modal when user clicks outside of it 
window.onclick = event => {
    if (event.target === addModal) {
        addModal.style.display = "none";
    }
}