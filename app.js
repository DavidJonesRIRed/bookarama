var btns = document.querySelectorAll("#book-list .delete");

console.log(btns);

Array.from(btns).forEach(function(btn)
{
    //console.log(btn);

    btn.addEventListener("click",function(e)
    {
        //console.log(e);
        
        const li = e.target.parentElement;
        
        li.parentNode.removeChild(li);
    });
});

const link = document.querySelector("#page-banner a");

link.addEventListener("click",function(e)
{
    e.preventDefault();
    console.log("navigation to",e.target.textContent,"was prevented");
});