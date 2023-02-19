
//creating a class recipes
class recipie {
    constructor(name,ingredients,methode,url,comments){
    this.name=name;//name of the recipe
    this.ingredients = ingredients;//an array of ingridients
    this.methode = methode; //recipe methode
    this.url = url; // for the image source
    this.comments = comments //an array of objects(users names & comments)
};}

//our recipes
let database = [new recipie("LAMB, POTATOES AND OLIVES TAGINE",["2 tablespoons olive oil ","1 large onion, sliced","3 garlic cloves, peeled and crushed","1,2 kg lamb neck fillets (or any type of stewing meat) trimmed and cut in 5 cm pieces","300 ml vegetable stock or water","3 tomatoes, grated","1 teaspoon turmeric","1 teaspoon ginger","1 teaspoon paprika","Half teaspoon cumin","Half teaspoon salt, or more to taste","1 kg potatoes, peeled in cut into wedges","200 gr green olives drained","Chopped coriander for garnish"],"In a large saucepan, heat the olive oil and add the onions over medium heat.Cover with a lid and leave the onions until they are soft and translucent, about 10 min.This will allow sweating the onions.Once you’ve sweated the onions, add the garlic and the meat.Cook for 7 min turning the meat occasionally to lightly brown it. Add in the vegetable stock or water, tomatoes, spices and salt and bring to the boil.Cover with a lid and reduce the heat to medium-low.Leave to simmer gently for 1h30 to 2 hours or until the meat is almost cooked and separates easily.Stir occasionally.If at any point throughout cooking it looks like there are not enough liquids in the saucepan, add in a few tablespoons of water. Add the potato wedges in the saucepan pushing them into the liquid and cover with a lid.Leave to simmer until the potatoes are soft and cooked, about 20 minutes.Uncover and transfer in the olives.Give a gentle stir to the content of the saucepan and simmer for 5 minutes.Taste and adjust the seasoning with salt if necessary.Serve immediately with bread.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1490097663006-CYYU1AWQUV1UPKKMSY5C/image-asset.jpeg?format=1000w",[{name:"user10",message:"I tried to make it but it was hard"}]),
new recipie("KEFTA MEATBALLS AND TOMATO SAUCE TAGINE WITH JALAPEÑO & HERB YOGHURT SAUCE",["2 tablespoons olive oil","2 garlic cloves, crushed or finely chopped","1 can peeled tomatoes (400gr/14 oz.)","10g flat leaf parsley, finely chopped","10g coriander, finely chopped","1 teaspoon ground cumin","1 teaspoon paprika","1/2 teaspoon salt or more to taste","1/2 teaspoon sugar","2 spring onions (stalks removed) or shallots, finely sliced","1 tablespoon white wine vinegar","1/2 teaspoon sugar","1/2 teaspoon salt","1/2 teaspoon ground black pepper","400g minced beef (lamb or a mix of lamb and beef also works), 10  15% fat","1 medium onion (100g), grated","10g flat leaf parsley, finely chopped ","10g coriander, finely chopped ","A handful of fresh mint leaves, finely chopped","2 teaspoons paprika","1 teaspoon ground cumin","1 teaspoon salt ","1/2 teaspoon ground black pepper","Pinch cayenne pepper " ],"Place all the lightly pickled spring onions in a small mixing bowl and use a spoon to mix all the ingredients together. Cover with cling film and place in the fridge. Place all the kefta ingredients in a large bowl, then use your hands or a large spoon to mix them together. Shape the kefta mixture into meatballs 2.5cm in diameter (about a large tablespoon of kefta), then cover with clingfilm and keep in the fridge until ready to use. Place the jalapeño & herb yoghurt sauce in a blender or food processor and process for a few seconds until the ingredients are smooth. Transfer the sauce in a container and place in the fridge. Once the sauce is ready, add in the meatballs, re-cover the pan again and cook for about 10 to 12 minutes or until they’ve turned brown and are cooked through. To serve drizzle the yoghurt sauce all over the tagine and garnish with pickled onions all over. Serve immediately and lots of bread on the side.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1631711049864-QW4RSYM9D9OSPLJ3Q3L3/KEFTA+AND+TOMATO+TAGINE.jpg?format=1000w",[{name:"Ax_jay",message:"Awesome"}]),

new recipie("RFISSA EXPRESS – FRAGRANT CHICKEN AND LENTILS WITH PAPARDELLE",
["4 tablespoons olive oil","4 large chicken legs","3 large onions, sliced","20g fresh coriander, finely chopped and more for garnish, if desired ","3 garlic cloves, peeled and crushed","1 teaspoon ground turmeric","1 teaspoon ground ginger","1 teaspoon ras el hanout","3/4 teaspoon salt, or more to taste","1/4 teaspoon ground black pepper","1 pinch saffron threads","200ml vegetable or chicken stock","1 x 400g can green lentils, drained ","500g papardelle, cooked according the packaging" ]
,"Heat 2 tablespoons of the olive oil in a large saucepan over a medium-high heat.Add the chicken legs (in batches if necessary), skin-side down, and sear for about 5 minutes until golden brown. Make sure that the oil is very hot before adding the chicken - you should hear a sizzle when the skin touches the pan, otherwise it isn t hot enough.The skin will be released naturally from the chicken flesh once seared, so don’t be tempted to remove it beforehand.Transfer the seared chicken to a dish and set aside until you are ready to use it. Reduce the heat under the saucepan to medium and heat the remaining 2 tablespoons of  olive oil Add the onions, cover the pan and leave to cook for about 10 to 15 minutes or until they are soft and translucent, stirring occasionally.Add the coriander, garlic, turmeric, ginger, ras el hanout, salt, pepper and saffron and cook for 5 minutes, stirring occasionally.Return all the chicken legs to the pan and pour in the stock. Bring to the boil over a high heat, then reduce the heat to medium-low, cover the pan and leave to simmer gently for 45 minutes or until the chicken is almost cooked, stirring occasionally.If it looks like there isn t enough liquid in the pan at any point during the cooking process, add a couple of tablespoons of water. Once the chicken is cooked, remove it from the pan and if necessary and adjust the consistency of the onion sauce.The sauce needs to be pourable but not soup-like, if the sauce is too dry add a few tablespoon to the pan and if it's too liquid, reduce the sauce for a few minutes.Taste the sauce and adjust the seasoning with salt if necessary. In a separate small saucepan, add in the lentils along with a ladle of the onion sauce and warm up over medium-low heat.Taste the sauce and adjust the seasoning with salt if necessary. While the lentils are warming up, return the chicken to the pan over low heat and cook your pasta according the packaging.I recommend eating the paste al dente.Drain the pasta and serve immediately with the chicken and lentils on top.Garnish with ground coriander, if desired.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1551962083552-MS4MD9H9TX0VQQAGS215/Rfissa+Express+-6.jpg?format=1000w",[{name:"Andre",message:"have been in Morocco years ago. The food is very delicious"}]),
new recipie("ARTICHOKE TAGINE WITH PEAS, BABY POTATOES AND PRESERVED LEMON (VEGAN)",["2 tablespoons olive oil","2 large onions chopped or sliced (400 gr)","2 teaspoons finely chopped garlic (about 2 to 3 cloves)","1/2 teaspoon ground turmeric"," 1/2 teaspoon ground dried ginger","3/4 teaspoon salt or more to taste","1/4 teaspoon ground black pepper","1 1/2 to 2 cups vegetable stock (300 ml to 450 ml)","400 gr baby potatoes","1 medium size preserved lemon","10 medium size artichoke bottoms (600 gr)","200 gr green peas","150 gr red-brown olives, like kalamatas","Chopped coriander for garnish"],"In a large casserole, heat the olive oil and add the onions over medium heat.Cover with a lid and leave the onions until they are soft and translucent, about 10 min.This will allow to sweat the onions. Add the garlic, the spices, salt and pepper and 1 ½ cup (300ml) vegetable stock.Cover with a lid and leave to simmer gently for 30 minutes to obtain a nice broth. Meanwhile, remove the flesh from the preserved lemon and finely chop the skin (discard the flesh). Add the potatoes, the artichoke bottoms and the preserved lemon in the casserole and cover with a lid for 20 to 25 minutes until both the artichoke and the baby potatoes are nicely cooked and soft.At this stage, there should be enough liquid in the casserole to partially cover the potatoes and the artichokes, if it looks like the tagine is too dry, add more vegetable stock. Add the green peas and cover for 3 to 4 minutes or until the green peas are cooked. Serve warm with a side of couscous or crusty bread. Top with olives and fresh chopped coriander.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1454852012206-8M19XH3T1RI21DMIPU1I/image-asset.jpeg?format=1000w",[{name:"Unknown",message:"This recipe was complicated, but well worth the hassle"},{name:"passager",message:"............. best one for vegans"}]),
new recipie("AUBERGINE AND PUMPKIN TAGINE WITH CARAMELISED ONIONS (VEGAN)",["3 tablespoons olive oil","800 gr onions, chopped","200 gr shallots, chopped","4 garlic cloves, finely chopped, about 1 tablespoon chopped garlic","600 gr aubergine (2 large aubergine), quartered and chopped into 4 cm (1.5 inch) chunks","600 gr pumpkin or squash, peeled, deseeded and cut into large chunks","1 teaspoon ground turmeric","1/2 teaspoon ground ginger","1 teaspoon salt or more to taste","1/4 teaspoon ground black pepper","2 cups water (500 ml)","100 gr raisins","Chopped coriander for garnish"],"In a large casserole warm the olive oil over medium-high heat.Once the oil is warm, transfer the onions and the shallots.Lower the heat to medium and cover with a lid.Leave until the onions are soft and translucent, about 25 minutes. Stir occasionally. Once the onions are soft and translucent, uncover and reduce the heat to medium low.Stir occasionally for 20 minutes until the onions are golden brown. Add the rest of the ingredients (garlic, aubergine, pumpkin, turmeric, ginger, salt, black pepper, water and raisins) and cover the casserole with a lid. Let simmer gently and leave until the vegetables are cooked, about 35 minutes. Serve warm with couscous, brown rice or bread and garnish with coriander.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1446033996894-3APZP3MN6NE4LHJSSCLG/image-asset.jpeg?format=1000w",[{name:"Julia",message:"I had my doubts with this beeing Vegan but it was delicious"}]),
new recipie("TURKEY, CRANBERRY AND CHESTNUT TAGINE",["4 tablespoons olive oil", "4 large onions (about 800 gr), chopped","2,5 kg turkey pieces ","1 1/2 tablespoon finely chopped garlic (about 6 cloves)","2 teaspoons ground turmeric","2 teaspoons ground ginger","1 teaspoon ground cumin","1 1/2 teaspoon salt or more to taste","¼ ground black peppe1/4","1 large coriander bouquet, tied","150 gr dried cranberries and more for garnish","400 gr cooked chestnut","2 tablespoons chopped chives for garnish"],"In a large casserole, heat the olive oil and add the onions over medium heat.Cover with a lid and leave the onions until they are soft and translucent, about 15 min.This will allow sweating the onions. Once you ve sweated the onions, place the turkey pieces, garlic, spices, salt and pepper and coriander bouquet in the casserole along with 360 ml or just enough water to cover the turkey pieces. Bring to the boil and cover with a lid over medium-low heat. Leave to simmer gently until the turkey is fully cooked, about 1h30.The timing here will depend on the size of your turkey pieces, the larger they will be, the longer it will take for them to cook.Make sure you keep an eye on them and adjust the cooking time. Once the turkey pieces are cooked remove them along with the coriander bouquet from the casserole.Set aside to cool and discard the coriander bouquet. Transfer the dried cranberries in the casserole and reduce the sauce for 20 minutes over medium low heat.Stir occasionally to make sure the onions dont stick to the bottom of the casserole. Add the chestnut and cook for another 10 min. When ready to serve, place the turkey pieces back in the casserole to warm them up over medium-low heat .Serve hot, garnish with dried cranberries, chopped chives and enjoy with a side of rice, couscous or bread.","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1481813380844-2BTKIFRWEAHHZW27912T/image-asset.jpeg?format=1000w",[{name:"simo atlanta",message:"liked it"}]),
new recipie("CHICKEN TAGINE WITH CHICKPEAS AND FRESH FIGS",["3 tablespoons olive oil, divided ","3 large onions, sliced","1 kg chicken thighs or legs","4 garlic cloves, peeled and pressed","1 teaspoon turmeric","1 teaspoon ground ginger","3/4 teaspoon salt or to taste","1/4 ground black pepper","150 ml vegetable stock","1 x 400 gr can of chickpeas, rinsed and drained","500 gr ripe figs (about 8), torn into 6 pieces and more for garnish if desired","Roughly chopped fresh coriander, for serving"],"In a large saucepan add the olive oil over medium heat and add in the onions.Cover with a lid and leave until the onions are soft and translucent, 15 to 20 minutes.Stir occasionally. Add in the garlic, turmeric, ginger, salt and black pepper into the saucepan and cook for 5 minutes stirring occasionally.Place the chicken inside the saucepan and pour in the chicken stock.Reduce the heat to medium-low, cover with a lid and leave to simmer gently until the chicken is almost cooked, about 45 minutes. Stir in the chickpeas and the fig pieces and give a good stir to the content of the saucepan.Leave to simmer until the chicken is fully cooked, about 15 to 20 minutes.If at any point throughout cooking it seems like there are not enough liquids in the saucepan and the tagine is drying out, add in a couple of tablespoons of water. Garnish with chopped coriander and serve immediately with crusty bread, rice or warm couscous","https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1506606282127-69QSJHFBN4WFN66JB79I/Chickpea+and+figs+chicken+tagine+-7.jpg?format=750w",[{name:"hasna",message:"je vais l essayer demain yummy"}])
]

//we import the database from the file database.js and we stringify it into the sessionStorage so we can modify later on the comments of the objects later and get object to work with them as well

let users = []
// this will be the array containing objects from the contacts form
let commentsArray =[]


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

//by default i add one to debug my code while i was building it instead of creating each time a new one */
users=[
    {email:"user@gmail.com",password:"123456",favoriteRecipes:[database[1]],indices:[1]}
]


//funcion to create a items in the sessionStorage in case if they dont exist
function sessionStorgeInit(){
    if(sessionStorage.getItem("hasRun")==null ){//if there is no item hasRun
        //we assign it to true and setting all the items 
        sessionStorage.setItem("hasRun", true);

         //users array (containing users objects) 
        sessionStorage.setItem("users", JSON.stringify(users));
        //obtaining users names and their comments format objects
        sessionStorage.setItem("contactFormMessages",JSON.stringify(commentsArray))
        //setting the database in the session storage to be able to manipulating it
        sessionStorage.setItem("database",JSON.stringify(database))
    }
}

//once we load the html we call the function above
document.querySelector("body").addEventListener("load",sessionStorgeInit())




// I commented the same function in recipes.js
function paragEditer(paragraph){
    let arr = []
    let sliceStarter=0
    for(let i=1;i<paragraph.length;i++){
        let j=i-1
        if(paragraph[j]=="." && paragraph[i]==" "){
            arr.push(paragraph.slice(sliceStarter,i))
            sliceStarter=i
        }
        if(i==paragraph.length-1){
            arr.push(paragraph.slice(sliceStarter,i))
        }
    }
    return arr
}
//console.log(paragEditer(database[0].methode))




function loadRecipeOfTheDay(){
    //its just a random recipe it displays
    let index=Math.floor(Math.random()*database.length)
    //myRecipe is a random object/recipe from database
    let myRecipe = database[index]
    let article = document.querySelectorAll("article")[1]

    //emptying each time the article so we dont stack all the recipes
    article.innerHTML = ""
    //creating elements
    let title= document.createElement("h2")
    let img =  document.createElement("img")
    let parag= document.createElement("p")
    let ul = document.createElement("ul")
    //assigning their textContent to correspandent object parameter/argument
    title.textContent = myRecipe.name;
    img.setAttribute("src",myRecipe.url)
    //parag.textContent = myRecipe.methode

    //joining the part of the paragraph with two empty lines
    parag.innerHTML = paragEditer(myRecipe.methode).join("<br><br>")

    //looping through the ingridients
    for(let i=0;i<myRecipe.ingredients.length;i++){
        //creating lists 
        let li = document.createElement("li")
        li.textContent = myRecipe.ingredients[i]
        //appending them to the  parent element
        ul.appendChild(li)
    }
    //appending the elements to the article
    article.appendChild(title)
    article.appendChild(img)
    let header_5 = document.createElement("h5")
    header_5.textContent="ingridients"
    article.appendChild(header_5)
    article.appendChild(ul)
    let header_5_ = document.createElement("h5")
    header_5_.textContent="Methode"
    article.appendChild(header_5_)
    article.appendChild(parag)

}

document.querySelector("body").addEventListener("load",loadRecipeOfTheDay())

