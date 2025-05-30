var a=document.getElementById("circle-btn")
var b=document.getElementById("blscreen")
var c=document.getElementById("popbox")
function def(){
    b.style.display="block"
    c.style.display="block"

}
var d=document.getElementById("cancel")
function ghi(){
    b.style.display="none"
    c.style.display="none"
}
var e=document.getElementById("add")
var f=document.getElementById("book-title")
var g=document.getElementById("book-author")
var h=document.getElementById("short-description")
var i=document.getElementById("container")


    e.addEventListener("click",function(event)
    {
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","nextcontainer")
        div.innerHTML=`<h2>${f.value}</h2>
        <h4>${g.value}</h4>
        <p>${h.value}</p>
        <button onclick="closebook(event)">${"close"}</button>`
        i.append(div)
        b.style.display="none"
        c.style.display="none"


    })
    function closebook(event){
        event.target.parentElement.remove()
    }
