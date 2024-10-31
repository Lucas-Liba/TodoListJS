
addElement = (e)=>{
    let inputBox = document.querySelector("#newElement")
    console.log(inputBox.value)
    if(inputBox.value==""){
        console.error("Cannot append an empty string")
    }
    else{
        let newElement = document.createElement("li")
        let ul = document.querySelector("#list")
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click",()=>ul.removeChild(newElement))
        let completeButton = document.createElement("button")
        completeButton.classList.add("completeButton")
        completeButton.textContent = "Completed"
        completeButton.addEventListener("click",()=>{
            newElement.classList.contains("cross") ? newElement.classList.remove("cross") : newElement.classList.add("cross")
        })
        newElement.textContent = inputBox.value
        newElement.append(deleteButton)
        newElement.append(completeButton)
        ul.append(newElement)
        inputBox.value=""}
}

