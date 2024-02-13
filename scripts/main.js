const myImage = document.querySelector('img');
myImage.onclick=()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc=== "images/firefox-icon.png")
    {
        myImage.setAttribute("src","images/chrome-icon.png");

    }
    else{
        myImage.setAttribute("src","images/firefox-icon.png");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setName()
{
    const myName = prompt('Please enter uername');
    if(!myName)
    {
    setName();
    }
    else{
        
    localStorage.setItem('name',myName);
    myHeading.textContent=`Mozilla is, ${myName}`;
}
}
if(!localStorage.getItem("name"))
{
    setName();
}
else{
    
    const storedName = localStorage.getItem("name");
    myHeading.textContent=`Mozilla is, ${storedName}` ;
}
myButton.onclick = () => {
    setName();
  }