
//assigning userConnected to object in sessionstorage our userConnected

let userConnected = JSON.parse(sessionStorage.getItem("userConnected")) 

//an empty table in the html-page
let table = document.querySelector("table")

//function to create elements
function createElement(){
    //if the userconnected exist in the sessionStorage (a user is signed in)
    if(sessionStorage.getItem("userConnected") !== null){

        //we loop through it favoritesRecipes array
        for(let i=0;i<userConnected.favoriteRecipes.length;i++){
            //basically we create 3 cells for each row
            let row = document.createElement("tr")
            let nameData = document.createElement("td")
            let buttonData = document.createElement("td")
            let imgData = document.createElement("td")
            //giving them a class for styling
            nameData.className = "titleFavClass"
            buttonData.className = "favBtnClass"
            imgData.className = "favImgClass"
            //we create a button to remove the save for later item
            let button = document.createElement("button")
            button.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
            button.onclick = function(){
                //we reassign it again f
                userConnected = JSON.parse(sessionStorage.getItem("userConnected"))
                /*we delete the object (favoriteRecipe) PS: we stored all the indices when we clicked to save for later buttons before in recipes.js*/
                //delete the recipe object from the user object array
                userConnected.favoriteRecipes.splice(i,1)

                //console.log(i)
                //same for indices
                userConnected.indices.splice(i,1)
                //remove it
                row.remove() // we remove the row from the html
                //stringifying the object of userConnected to make the new modifications
                sessionStorage.setItem("userConnected",JSON.stringify(userConnected))
                /*basically here we change the same object of our userconnected but from the 
                users array in the sessionStorage*/
                let usersArray = JSON.parse(sessionStorage.getItem("users"))
                for(let i=0;i<usersArray.length;i++){
                    if(userConnected.email === usersArray[i].email){
                        usersArray[i] = userConnected
                        sessionStorage.setItem("users",JSON.stringify(usersArray))
                    }

                }
                //emtying the table 
                table.innerHTML=""
                /*calling back this function again (it helped me to debug a huge errors. i was getting problems with indexes --before i called back again this function, it didnt update the new arrays when we splice them and it keep looping through the old indices. so i got errors )*/
                createElement()
            }
            //creating an image element
            let img = document.createElement("img")
            //appending the image to the first cell
            imgData.appendChild(img)
            //appending the button to the 3d cell)
            buttonData.appendChild(button)
            //the textContent of the second cell
            nameData.textContent = userConnected.favoriteRecipes[i].name
            //assigning the source of the image to the userConnected =>favoriteRecipe=>url
            img.src = userConnected.favoriteRecipes[i].url
            console.log(userConnected.favoriteRecipes[i].url)
            //appending the elements to their father element 
            row.appendChild(imgData)
            row.appendChild(nameData)
            row.appendChild(button)
            table.appendChild(row)
        
        }

    }


}


//calling the fuction for first use
createElement()




