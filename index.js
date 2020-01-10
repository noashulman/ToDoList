class ToDo {
    constructor(description, isDone = false) {
        this.description = description;
        this.isDone = isDone;
    }
    completed() {
        this.isDone = true;
    }


}


writeDown = () => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.contentEditable="true";
    const userDescription = document.querySelector("#text").value;
    const li = new ToDo(userDescription)
    console.log(li.description);

    item.innerHTML = `${li.description}`;
    listOf.appendChild(item);

}
const doIt = document.querySelector(".btn");
doIt.addEventListener("click", writeDown);

const listOf = document.querySelector(".list")









