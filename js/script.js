const button = document.querySelectorAll("button");
const container = document.querySelectorAll(".change-list-container");




button.forEach(button => button.addEventListener("click", function(){

    const line = document.querySelector(".plus-line-2");
    const list = document.querySelector(".list");

    for(let i = 0; i<container.length; i++){

        if(list.style.display === "none"){
            list.style.display = "block"
            line.style.display = "none";
        }
        else{
            list.style.display = "none"
            line.style.display = "block";
        }

    }
}));

