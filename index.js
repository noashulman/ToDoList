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
    item.className="item"
    listOf.appendChild(item);

    const itemText = document.createElement("div");
    itemText.classList.add("item-text");
    itemText.contentEditable="true";
    const userDescription = document.querySelector("#text").value;
    const li = new ToDo(userDescription)
    console.log(li.description);

    itemText.innerHTML = `${li.description}`;
    const can = document.createElement("div");
    can.className="smallbtn"
    can.innerHTML=`<i class="far fa-trash-alt"></i>`
    const vee = document.createElement("div");
    vee.className="smallbtn"
    vee.innerHTML=`<i class="far fa-circle"></i>`
    item.appendChild(can);
    item.appendChild(vee);
    item.appendChild(itemText);


}
const doIt = document.querySelector(".btn");
doIt.addEventListener("click", writeDown);

const listOf = document.querySelector(".list")









