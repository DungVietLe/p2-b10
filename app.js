let form = document.querySelector("#form");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let quaility = document.querySelector(".quaility");


let myList = [];

btn.addEventListener("click", function () {
    let valueUser = form.todo.value;
    let myObj = {

        title: valueUser,
        isActive: true
    }
    if (valueUser != "") {
        myList.push(myObj)

    }
    let newDiv = document.createElement("div");
    newDiv.innerText = valueUser;
    newDiv.setAttribute("class", "element");
    let subDiv = document.createElement("div");
    subDiv.setAttribute("class", "btn-element");
    subDiv.innerHTML = '<i class="far fa-check-circle"></i>';
    newDiv.appendChild(subDiv)
    list.appendChild(newDiv)



    quaility.innerText = `${myList.length}  items`;

    let elements = document.querySelectorAll(".element");
    let arrElement = Array.from(elements);
    for (let i = 0; i < arrElement.length; i++) {
        for (let j = 0; j < myList.length; j++) {
            let btn_elements = arrElement[i].querySelector(".btn-element");
            btn_elements.addEventListener("click", function () {
                if (myList[j].title === form.todo.value) {
                    myList[j].isActive = false;
                    subDiv.style.opacity = "0.5";
                    newDiv.style.opacity = "0.5";
                    console.log(myList[j]);
                }

            })

        }
    }

    let allList = document.querySelector(".allList");
    allList.addEventListener("click", function () {
        allList.setAttribute("class", "allList on")

    })
    let active = document.querySelector(".active");
    active.addEventListener("click", function () {
        for (let i = 0; i < myList.length; i++) {
            if (myList[i].isActive === false) {
                myList.splice(myList[i], myList[i].isActive === false);
                if(newDiv.getAttribute === "false") {
                    list.remove(newDiv)
                }
            }
        }
    })
})
