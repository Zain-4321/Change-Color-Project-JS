const body=document.querySelector("body");
const Button=document.querySelectorAll(".button");

Button.forEach((button)=>{

    button.addEventListener("click",(ChangeColor)=>{
 if(ChangeColor.target.id==="yellow"){
    body.style.backgroundColor=ChangeColor.target.id

}                                                                                                    
 
if(ChangeColor.target.id==="green"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="aqua"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="chocolate"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="pink"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="blue"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="black"){
    body.style.backgroundColor=ChangeColor.target.id

}
if(ChangeColor.target.id==="red"){
    body.style.backgroundColor=ChangeColor.target.id

}

    })


})

