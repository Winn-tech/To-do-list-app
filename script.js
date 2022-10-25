window.addEventListener("load",  ()=>{

    let submit = document.getElementById("submit");
    var list = document.getElementById("text");
    let listValue= list.value;
    let div = document.getElementById("parent");
    let form = document.querySelector(".form")
    let spans;
    
form.addEventListener("submit",  (e)=> {
    e.preventDefault();
    var listItem =document.createElement("p");
    var span = document.createElement("span")
    var secondSpan = document.createElement("span")
    var thirdSpan = document.createElement("span")
    // var cancel = document.createTextNode("\u00d7")
    var cancel = document.createTextNode("remove \u00d7")
    const d = new Date();
    let text = d.toString();
    let play = text.slice(0,  24);
    secondSpan.append(play);
    span.appendChild(cancel);
    let listValue= list.value;
    thirdSpan.append(listValue)
    listItem.append(thirdSpan)
    listItem.appendChild(span)
    listItem.append(secondSpan)
    form.reset();
    div.append(listItem);
    spans = span;
    spans.setAttribute("id", "cancel")
    secondSpan.setAttribute("id", "date");
    thirdSpan.setAttribute("id", "event");
    spans.addEventListener("click", (e)=> {
        e.target.parentElement.style.display= "none";
    })
})

} )


    


