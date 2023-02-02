

//getting the data from sessionStorage
let database = JSON.parse(sessionStorage.getItem("database"))
//creating a namesRecipe array with all the names of recipes
let namesRecipes =[]
database.forEach((ob)=>{namesRecipes.push(ob.name)})


//creating the galleries
//looping through all the recipes
database.forEach((obj,index) => {
    //getting the userConnected
    let user = JSON.parse(sessionStorage.getItem("userConnected"))
    //creating a div and a button 
    let div = document.createElement("div")
    let button = document.createElement("button")
    //if there is a user loged in
    if(sessionStorage.getItem("userConnected") !== null)
    {
        //we mark the textContent of the button to saves with the help of the indices we stored
        if(user["indices"].includes(index)){
            button.innerHTML = `<i  class="fa fa-heart" style="color:red" ></i>`
        }
        else{
            button.innerHTML = `<i  class="fa fa-heart-o" ></i>` // class="fa fa-heart-o"
        }

    }
    //if there is no user connected/loged in
    else {
        button.innerHTML = `<i  class="fa fa-heart-o" ></i>`
    }

 
    //giving them a className (for styling)
    button.className = "favBtn"

    
    //events once we click on the button
    button.addEventListener("click",()=>{
        if(sessionStorage.getItem("userConnected") !== null){
            //asigns a recipeClicked to the index of the recipe name
            let recipeClicked= database[index].name
            console.log(recipeClicked)
            let userFavoriteRecipesArray=[]
            user.favoriteRecipes.forEach((obj)=>{userFavoriteRecipesArray.push(obj.name)})

            console.log(userFavoriteRecipesArray)
            //evetyTime we update the user value after each click
            user = JSON.parse(sessionStorage.getItem("userConnected"))
            //checking if this item is in our user favoriteRecipe name

            //if it does not exist
            if(userFavoriteRecipesArray.includes(recipeClicked) == false){
                //e.innerHTML =""
                button.innerHTML = `<i class="fa fa-heart"  style="color:red"></i>` //changing innerHTML to Saved
        
                //pushing the object (recipe) to the user array favoriteRecipe
                user.favoriteRecipes.push(obj)
                console.log(user.favoriteRecipes)
                //same for indices
                user.indices.push(index)
                alert(`you have ${user.indices.length} Recipes saved `)
                //console.log(user.indices)
                // stringifying the updated userConnected
                sessionStorage.setItem("userConnected",JSON.stringify(user))
                //modifying the users Array for the changes
                let users = JSON.parse(sessionStorage.getItem("users"))
                users.forEach((obj,index)=>{
                    //once we find the specific user
                    if(obj.email == user.email){
                        //assigning the user in users session storage item to the connected user
                        users[index]=user
                        //setting the new users
                        sessionStorage.setItem("users",JSON.stringify(users))
                    }
                })


            }
            //if the name already exist
            else{ 
                alert("This Item is already in your Save for Later folder")
                console.log(index)

            }
        }
        //if we dont have any user connected we alert this message after clicking to the buttons
        else{
            alert("You should log in with your account or Create an account to save this Recipe")
        }

    })


    //creating elements and assigning their textContent/img to the correspondent object (recipe)
    let h_3 = document.createElement("h3")
    h_3.innerHTML=obj.name.replaceAll(" ","&nbsp;") // (to avoid next line for styling)
    let galleryImg = document.createElement("img")

    //when we click to the img we call back the function displayRecipe() -- see below function line 120
    galleryImg.onclick = ()=>{displayRecipe(index)}
    div.appendChild(galleryImg)
    //some styling while we mouse over/leave
    div.onmouseover = function(){
        galleryImg.style.width="200%"
        galleryImg.style.marginLeft = "-75px";
    }
    div.onmouseleave = function(){
        galleryImg.style.width="80%"
        galleryImg.style.marginLeft = "unset";
    }

    div.appendChild(h_3)
    div.appendChild(button)
    galleryImg.src = obj.url

    console.log(obj)
    document.getElementById("galleries").appendChild(div)
});





function displayRecipe(i){
    //getting the recipe
    let myRecipe = database[i]
    //parent element 
    let article_ = document.getElementById("toDisplay")
    console.log(i)
    //every time we click to a different recipe we empty the parent element (we dont stack them)
    article_.innerHTML = ""
    //creating elements
    let title= document.createElement("h2")
    let img =  document.createElement("img")
    let parag= document.createElement("p")
    let ul = document.createElement("ul")
    //assigning them
    title.textContent = myRecipe.name;
    img.setAttribute("src",myRecipe.url)
    //parag.textContent = myRecipe.methode
    
    parag.innerHTML = paragEditer(myRecipe.methode).join("<br><br>")
    //creating lists for each ingidient a list
    for(let i=0;i<myRecipe.ingredients.length;i++){
        let li = document.createElement("li")
        li.textContent = myRecipe.ingredients[i]
        //appending them
        ul.appendChild(li)
    }
    //appending elements to their father element
    article_.appendChild(title)
    article_.appendChild(img)
    let header_5 = document.createElement("h5")
    header_5.textContent="ingridients"
    article_.appendChild(header_5)
    article_.appendChild(ul)
    let header_5_ = document.createElement("h5")
    header_5_.textContent="Methode"
    article_.appendChild(header_5_)
    article_.appendChild(parag)
    document.getElementById("galleries").style.display="none"
    // comments sections in html


    //creating h2
    let h2=document.createElement("h2")
    h2.textContent = "leave your comment below"
    //appending it to the article wlwmwnt
    article_.appendChild(h2)
    //we loop through the comments in the database[i].comments
    for(let commentsIndex=0;commentsIndex<database[i].comments.length;commentsIndex++){
        //a div container containing the name and the message
        let divMessageContainer = document.createElement("div")
        let labelName=document.createElement("p")
        labelName.className="labelName"
        let labelMessage=document.createElement("p")
        labelMessage.className="labelMessage"
        divMessageContainer.appendChild(labelName)
        divMessageContainer.appendChild(labelMessage)
        //name of user 
        labelName.textContent = `User:  ${database[i].comments[commentsIndex].name} :`;
        //his comment
        labelMessage.textContent = database[i].comments[commentsIndex].message
        //appending chils to their parents elements
        article_.appendChild(divMessageContainer)
        divMessageContainer.className = "commentDiv"
    }
    //once we launch the recipe and we display the comments 
    //we show the form to add a comment in case a user is connected
    if(sessionStorage.getItem("userConnected") !== null){
        //if a user is connected we display the form to add comments
        document.querySelector("form").style.display = "block"
        ;
        document.getElementById("submitComment").addEventListener("click",(e)=>{
            e.preventDefault()
            //getting the user object from userconnected item in sessionStorage
            let userConnected = JSON.parse(sessionStorage.getItem("userConnected"))
            //console.log(userConnected.favoriteRecipes)

            //assingning variables to the inputs values
            let name = document.getElementById("commentUserName").value
            let message = document.querySelector("textarea").value
            //to leave a comment the user should give a name and a message
            if(name!=="" && message!==""){

                //we push the values as an object in the comment array bellonging to database array
                database[i].comments.push({name:name,message:message})
                //stringifying to add modificatios to the database item in the sessionStorage 
                sessionStorage.setItem("database",JSON.stringify(database))
    
            }
            else{
                alert("You Should fill in the fields")
            }
  
        //emtying the inputs values again after submitting the message/comment
        document.getElementById("commentUserName").value = ""
        document.querySelector("textarea").value =""
            
        //here we call the function again to display the changes (the last comment the user add)
        displayRecipe(i)

        })
    }

    
}

//A function to split the paragraphs 

function paragEditer(paragraph){//argument test
    let arr = [] //assigning empty array
    let sliceStarter=0 // assigning slicestarter to zero

    //looping through the text char by char
    for(let i=1;i<paragraph.length;i++){ 
        //assingning j to the previous index of looping
        let j=i-1
        //once we finds " ."
        if(paragraph[j]=="." && paragraph[i]==" "){
            //we push the part of the text to the array
            arr.push(paragraph.slice(sliceStarter,i))
            //slicestarter becomes the next index
            sliceStarter=i
        }
        if(i==paragraph.length-1){// once we arrive to the last char of the text
            //we push the last part to the array
            arr.push(paragraph.slice(sliceStarter,i))
        }
    }
    return arr // returning an array of the part of the text
}








