window.addEventListener("load",  ()=>{

    let submit = document.getElementById("submit");
    var list = document.getElementById("text");
    let ul = document.querySelector("ul");
    let form = document.querySelector(".form")
    let spans;

form.addEventListener("submit",  (e)=> {
    e.preventDefault();
    var listItem =document.createElement("li");
    var span = document.createElement("span")
    var cancel = document.createTextNode("\u00d7")
    span.appendChild(cancel);
    console.log(span);
    console.log(cancel)
    listItem.append(list.value)
    listItem.appendChild(span)
    form.reset();
    ul.append(listItem);
    spans = span;
    spans.addEventListener("click", (e)=> {
        e.target.parentElement.style.display= "none";
        
    })
})

} )


    






