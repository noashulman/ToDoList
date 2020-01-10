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
    let userDescription = document.querySelector("#text").value;
    const li = new ToDo(userDescription)
    console.log(li.description);
    document.querySelector("#text").value=""
   
    itemText.innerHTML = `${li.description}`;
    const can = document.createElement("div");
    can.className="smallbtn can far fa-trash-alt"
    
    const vee = document.createElement("div");
    vee.className="smallbtn vee far fa-circle"
    
    item.appendChild(can);
    item.appendChild(vee);
    item.appendChild(itemText);

    

    const cans = document.querySelectorAll(".can");
    cans.forEach(can => {
    can.addEventListener("click", deleteItem)
    can.style.backgroundColor = "green"
    
    console.log(cans);
    
   
});

}

deleteItem = (event) =>{
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);


}
const doIt = document.querySelector(".btn");
doIt.addEventListener("click", writeDown);

const listOf = document.querySelector(".list")


let flag = true;







