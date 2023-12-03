

    const handleSubmit = function(event){
    event.preventDefault(); 

    let name = document.getElementById("fname").value;
    let salary = document.getElementById("fsalary").value;
    let birthday = document.getElementById("fbirthday").value;
    let phone = document.getElementById("fphone").value;

    if (name === "") {
        showMessage("Name must be filled out");
    }

    if (salary === "") {
        showMessage("Desired Salary must be filled out");
    }

    if (birthday === "") {
        showMessage("Birthday must be filled out");
    }

    if (phone === "") {
        showMessage("Phone must be filled out");
    }

    else 
    showMessage("Thank you, the form has been successfully submitted!");

}

const showMessage = function(message){

    let paragraph = document.createElement("p");
    paragraph.textContent = message;
    document.getElementById("form").appendChild(paragraph);
}


document.getElementById("form").addEventListener("submit", handleSubmit);


