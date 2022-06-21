// const { response } = require("express");

let ingredients_array = [];
let instructions_array = [];

if(document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready after waiting!");
        initializeCode();
    })
}



function initializeCode(){
    const container = document.getElementById("container");
    let recipeDiv = document.createElement("div");
    let recipeName = document.createElement("p");
    let instructions = document.createElement("p");
    let ingredients = document.createElement("p");

    fetch("http://localhost:1234/recipe/pizza")
       .then(response => response.json())
       .then(data => {
            recipeName.innerHTML = data["name"];
            instructions.innerHTML = data["instructions"];
            ingredients.innerHTML = data["ingredients"];
        //    console.log(data.name);
       });
    recipeDiv.appendChild(recipeName);
    recipeDiv.appendChild(instructions);
    recipeDiv.appendChild(ingredients);
    container.appendChild(recipeDiv);

    const addIngredientButton = document.getElementById("add-ingredient");
    const addInstructionButton = document.getElementById("add-instruction");
    const submitButton = document.getElementById("submit");

    addIngredientButton.addEventListener("click", function(){
        let ingredientText = document.getElementById("ingredients-text");
        ingredients_array.push(ingredientText.value);
        console.log(ingredients_array);
    });

    addInstructionButton.addEventListener("click", function(){
        let instructionText = document.getElementById("instructions-text");
        instructions_array.push(instructionText.value);
        console.log(instructions_array);
    });

    submitButton.addEventListener("click", function(){
        let recipeName = document.getElementById("name-text").value;
        // console.log('{ "name": "' + recipeName + '", "ingredients": "'+ JSON.stringify(JSON.stringify(ingredients_array))  + '", "instructions": "' + JSON.stringify(JSON.stringify(instructions_array)) + '" }');
        // console.log(recipeName);
        let json_recipe = {
            name: recipeName,
            ingredients: ingredients_array,
            instructions: instructions_array
        }
        // console.log(JSON.stringify(json_recipe));
        // console.log(JSON.stringify(JSON.stringify(json_recipe)));
        // console.log(json_recipe);
        let recipeDiv_ = document.createElement("div");
        let recipeName_ = document.createElement("p");
        let instructions_ = document.createElement("p");
        let ingredients_ = document.createElement("p");

        fetch("http://localhost:1234/recipe", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(json_recipe)
           })
        //    .then(response=>{
        //         console.log('anything?');
        //    });
           .then(response => response.json())
           .then(data => {
                recipeName_.innerHTML = data["name"];
                instructions_.innerHTML = data["instructions"];
                ingredients_.innerHTML = data["ingredients"];
           });
           recipeDiv_.appendChild(recipeName_);
           recipeDiv_.appendChild(instructions_);
           recipeDiv_.appendChild(ingredients_);
           container.appendChild(recipeDiv_);        

    });
}
/*
function initializeCode() {
    const options = {
        edge: 'right',
        draggable: false,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    };

    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, options);

    const addPoemButton = document.getElementById("add-poem");

    addPoemButton.addEventListener("click", function() {
        const poemInput = document.getElementById("poem-input");
        
        const vip = document.getElementById("vip");

        fetch("http://localhost:8000/api/poems", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "poem": "' + poemInput.value + '" }'
           })
           .then(response => response.json())
           .then(data => {
               console.log(data);
           })


        addNewPoem(poemInput.value, vip.checked);

    });

    const addPoemButtonFromApi = document.getElementById("add-poem-from-api");

    addPoemButtonFromApi.addEventListener("click", function() {

        fetch("http://localhost:8000/api/poems")
            .then(response => response.json())
            .then(data => {
                data.forEach(poem => {
                    addNewPoem(poem.poem, false);  

                });
            });


        //loadJson();

    });

}

async function loadJson() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url);

    let poems = await response.json();
    console.log(poems);

    poems.forEach(poem => {
        addNewPoem(poem.title, false);    
    });

    


}


function addNewPoem(poem, vip) {
    const theWall = document.getElementById("the-wall");
    let newListItem = document.createElement("li");

    if (vip == true) {
        newListItem.classList.add("vip");
    }

    newListItem.classList.add("col", "s6", "m4", "l3");

    newListItem.appendChild(document.createTextNode(poem));

    theWall.appendChild(newListItem);
    console.log("Working... adding new stuff...")
}*/