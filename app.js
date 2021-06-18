
let form = document.querySelector("#form");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let quaility = document.querySelector(".quaility");


let myList = [];

form.addEventListener("submit", function(e) {

    e.preventDefault();
    let valueInput = form.todo.value;
    console.log(valueInput);
    element(valueInput)
    quaility.innerText = `${myList.length} items`
})

function element(value) {
    let myObj = {
        title: value,
        isActive: true
    }
    myList.push(myObj)
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "element");
    let btn_elements = document.createElement("div");
    btn_elements.innerHTML = '<i class="far fa-check-circle"></i>';
    btn_elements.setAttribute("class", "btn-element");

    newDiv.innerText = value;
    newDiv.appendChild(btn_elements);
    list.appendChild(newDiv);
    btn_elements.addEventListener("click", function() {
        let valueElement = [];
        valueElement.push(myObj);
        valueElement[0].isActive = false;

        for (let i = 0; i < valueElement.length; i++) {
            if (valueElement[0].isActive === false) {
                newDiv.style.opacity = "0.5";
                btn_elements.style.opacity = "0.5";

                // console.log(valueElement[0]);
            }
        }



    })
    complete(newDiv)
}

function complete(value) {
    let complete = document.querySelector(".complete");
    complete.addEventListener("click", function() {
        for (let i = 0; i < myList.length; i++) {
            myList.splice(myList[i], myList[i].isActive = true)
            console.log(myList);
        }
    })
}
