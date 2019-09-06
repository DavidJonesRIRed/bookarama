/**
 * @param {Event} e
 */
const list =document.querySelector("#book-list ul");

//delete book
list.addEventListener("click", function(e)
{
    if(e.target.className == "delete")
    {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add books-list
const addForm = document.forms("add-book");

addForm.addEventListener("submit",function(e)
{
    e.preventDefault();

    const value = addForm.querySelector("input[type="text"]").value;

    //create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;
    
    //append to DOC
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
/*     <li>
	    			<span class="name">Name of the Wind</span>
	    			<span class="delete">delete</span>
	    		</li> */
});