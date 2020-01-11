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
    item.className = "item"
    item.classList.add("list-group-item")
    listOf.appendChild(item);

    const itemText = document.createElement("div");
    itemText.classList.add("item-text");
    itemText.contentEditable = "true";
    let userDescription = document.querySelector("#text").value;
    const li = new ToDo(userDescription)
    console.log(li.description);
    document.querySelector("#text").value = ""

    itemText.innerHTML = `${li.description}`;
    const can = document.createElement("div");
    can.className = "smallbtn can far fa-trash-alt"

    const vee = document.createElement("div");
    vee.className = "smallbtn vee far fa-circle"

    item.appendChild(can);
    item.appendChild(vee);
    item.appendChild(itemText);



    const cans = document.querySelectorAll(".can");
    cans.forEach(can => {
        can.addEventListener("click", deleteItem)
        

        
    });

    const vees = document.querySelectorAll(".vee");
    vees.forEach(vee => {
        vee.addEventListener("click", completed)
        
        
    });

    Sortable.create(simpleList,{
        animation:150,
        delayOnTouchOnly:true,
        ghostClass: "ghost"
    })

}

deleteItem = (event) => {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);


}

completed =(event) =>{
    console.log(event.target);
    if (flagComplete===true){
    event.target.className = " smallbtn vee far fa-check-circle"
    event.target.nextElementSibling.style.textDecorationLine="line-through"
    flagComplete = false
    }else {
        event.target.className = " smallbtn vee far fa-circle"
    event.target.nextElementSibling.style.textDecorationLine="none"
    flagComplete = true
    }
    
    
}

const doIt = document.querySelector(".btn");
doIt.addEventListener("click", writeDown);

const listOf = document.querySelector(".list")


let flagComplete = true;







