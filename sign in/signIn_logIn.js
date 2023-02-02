
//By default displayed none
document.getElementById("logOutDiv").style.display="none"
//if user is connected we hide the button of create account
if(sessionStorage.getItem("userConnected")!==null){
    document.getElementById("createAccountBtn").style.display="none"
}

//function to log in 
function logInUser(){
    //user not yet connected
    let userExist = false
    //retrieving the inputs value (email and password)
    let userEmail = document.querySelectorAll("input")[0].value
    let userPassword = document.querySelectorAll("input")[1].value
    /*getting the users from the sessionStorage and parsing
     them to a javascript array*/
    let users = JSON.parse(sessionStorage.getItem("users"))

    //getting all the users emails
    let usersEmail= []
    let usersArray=JSON.parse(sessionStorage.getItem("users"))
    usersArray.forEach((ob)=>{usersEmail.push(ob.email)})
    //looping through them
    users.forEach(obj => {
        //once we found the correspondent user and its email
         if (obj.email === userEmail && obj.password === userPassword){
            userExist=true //turning userExist to true
            /*we set the userconnected to the correspondent 
            object and stringify it to the sessionStorage*/
            sessionStorage.setItem("userConnected",JSON.stringify(obj))
            // we hide the div containing the form
            document.getElementById("signIn").style.display = "none"
            //as well the createAccount form
            document.getElementById("createAccount").style.display = "none"
            // displaying a logoutdiv if the user wants to log out
            //display flex as it contains a label and a button
            document.getElementById("logOutDiv").style.display = "flex";
            document.getElementById("logOutDiv").style.flexDirection = "column";
            //hiding hyperlinks at the tops of the page as user is loged in.
            document.getElementById("createAccountBtn").style.display = "none";
            document.getElementById("backToLogIn").style.display = "none";
            //display message in the label
            document.querySelector("label").textContent = ` Welcome ${obj.email}: if you want to log out click below `
            alert("you are signed in " + userEmail)

         }//case password is wrong and user exist
         else if(obj.email === userEmail && obj.password != userPassword){
            document.querySelectorAll(".messageInfo")[0].textContent= "your Password Is Incorrect!! try Again";
        
         }   
    });
    //if the user email doesnt exist in the objects email
    if(userExist==false){

        document.querySelectorAll(".messageInfo")[0].textContent = "Your Email Address is not in our DataBase!!"
        //we display the create accout form
        document.getElementById("createAccount").style.display="block"
    }
    //here just the displayed message should dessapear after 2 secs
    setTimeout(()=>{
        document.querySelectorAll(".messageInfo")[0].textContent=""

    },2000)
    //emptying the inputs 
    document.querySelectorAll("input")[0].value=""
    document.querySelectorAll("input")[1].value = ""
}


document.querySelectorAll("button")[0].addEventListener("click",(e)=>{
    e.preventDefault()
    logInUser()
} )

function createAccount(){
    //getting users fron sessionStorage 
    let users = JSON.parse(sessionStorage.getItem("users"))
    //assigning the inputs value to variables
    let userEmail = document.querySelectorAll("input")[2].value
    let userPassword = document.querySelectorAll("input")[3].value
    let userPasswordRepeated = document.querySelectorAll("input")[4].value;

    //getting all the users emails
    let usersEmail= []
    let usersArray=JSON.parse(sessionStorage.getItem("users"))
    usersArray.forEach((ob)=>{usersEmail.push(ob.email)})
    //console.log(validateEmail(userEmail))
    if(validateEmail(userEmail)==true){ // if the format is correct see below line nr
        if(usersEmail.includes(userEmail)==false){ // if the email doesnt already exist
            //console.log("insideeeeeeeeeeeeeeee")

            //getting the users array from the sessionStorage (parsed)

            //case passwords dont match each other
            if(userPassword!==userPasswordRepeated){
                document.querySelectorAll(".messageInfo")[1].textContent = "Your Passwords dont match"
                setTimeout(()=>{//displaying for 2 secs 
                    document.querySelectorAll(".messageInfo")[1].textContent=""
            
                },2000)

            }
            //case the passwords less then 7 chars
            else if(userPassword===userPasswordRepeated && userPassword.length<6){
                document.querySelectorAll(".messageInfo")[1].textContent = "Your Password should contain 6 characters at least"
                setTimeout(()=>{//displaying for 2 secs 
                    document.querySelectorAll(".messageInfo")[1].textContent=""
            
                },2000)
            }
            else{ // case all the conditions are met
                //we append the new user (object)
                users.push(new user(userEmail,userPassword,[],[]))
                //we set the updated users array
                sessionStorage.setItem("users",JSON.stringify(users))
                //hidding the create accounf div
                document.getElementById("createAccount").style.display = "none"
                //displaying the signIn div
                document.getElementById("signIn").style.display = "block"
                alert("you create you Account succesfully")
                //console.log("added")

                document.querySelectorAll("input")[2].value=""
                document.querySelectorAll("input")[3].value=""
                document.querySelectorAll("input")[4].value=""

                
            }
        }
        else{//case email is already exist
            document.querySelectorAll(".messageInfo")[1].textContent = "This Email already Exist"
            setTimeout(()=>{//displaying for 2 secs 
                document.querySelectorAll(".messageInfo")[1].textContent=""
        
            },2000)
            console.log("exist")
        }
    }
    else {//case the email format is wrong
        document.querySelectorAll(".messageInfo")[1].textContent = "The format of your email is not valid"
        setTimeout(()=>{//displaying for 2 secs 
            document.querySelectorAll(".messageInfo")[1].textContent=""
    
        },2000)
        }

    }

document.querySelectorAll("button")[1].addEventListener("click",(e)=>{
    e.preventDefault()
    createAccount()
} )

//if we have a user connected (through the sign in form)
if(sessionStorage.getItem("userConnected")!=null )
{
    //we hide all the form
    document.getElementById("createAccount").style.display = "none"
    document.getElementById("signIn").style.display = "none"
    //we display the div for log out
    document.getElementById("logOutDiv").style.display = "flex";
    document.getElementById("logOutDiv").style.flexDirection = "column";


    //message to welcome and show that the user is connected
    document.querySelector("label").textContent = ` Welcome ${JSON.parse(sessionStorage.getItem("userConnected")).email}: if you want to log out click below `
}


//to sign out we just remove the userConnected from the session storage
document.getElementById("logout").addEventListener("click",()=>{
    sessionStorage.removeItem("userConnected")
    //displaying the div by default
    document.getElementById("logOutDiv").style.display="none"
    document.getElementById("signIn").style.display="Block"
    document.getElementById("createAccountBtn").style.display = "block";

})


//the create Account hyperlink on the top
document.querySelector("#createAccountBtn").addEventListener("click",()=>{
    //we hide sign in 
    document.getElementById("signIn").style.display="none"
    //displaying createaccount div with possibility to back to login 
    document.getElementById("backToLogIn").style.display = "block"
    document.getElementById("createAccount").style.display="block";
}
 )


/*clicking at back to login it hide itself and the 
createAccount div and display the sign in div*/
 document.querySelector("#backToLogIn").addEventListener("click",(e)=>{
    e.target.style.display="none"
    document.getElementById("signIn").style.display="block"
    document.getElementById("createAccount").style.display="none"

}
 )

//just a small try to validate email (i dont have much time to spend in this project as i am left behind in the bootcamp progress)
 function validateEmail(email){
    //should have one @
    if(email.split("@").length ==2 && 
    //doesnt start with an @
    email.indexOf("@")>0 && 
     //after the @ there should be at least one charachter before the dot (domain)
      email.indexOf("@")< (email.indexOf(".") - 1 )&&
      // the dot shouldnt be the last character
       email.indexOf(".")!==(email.length-1) && 
       email.includes(" ")==false){ //no blanks 
        return true}
    else return false
}


/*if (validateEmail("aa@dgfdg.com")==true){
    console.log("working finne")
}*/


//creating a class user
class user {
    constructor(email,password,favoriteRecipes,indices){
    this.email=email;
    this.password = password;
    //will be an array containing all the recipes objects
    this.favoriteRecipes = favoriteRecipes;
    //will be an array containing their indices
    this.indices = indices
};}

