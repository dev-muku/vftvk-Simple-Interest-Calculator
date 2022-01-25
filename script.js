function compute() //Compute Interest function
{
    //Accessing input values
    var principal = Number(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Simple Interest Computation
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    
    //Printing result only when principal amount is greater than zero.
    if(principal > 0) {
        var result = document.getElementById("result");
        result.innerHTML = "\<br \/\>If you deposit \<mark\>"+
        principal+"\<\/mark\>,\<br \/\>at an interest rate of \<mark\>"+
        rate+"\%\<\/mark\>.\<br\/\>You will receive an amount of \<mark\>"+
        interest+"\<\/mark\>,\<br\/\>in the year \<mark\>"+year+"\<\/mark\>\<br \/\>";
    }
}

function updateRate() //Showing dynamically changed value for Rate of Interest. 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "\%";
}

function validate_principal() // Validating principal amout field.
{
    let principal = document.getElementById("principal");
    //Alert if user enters zero or negative values in principal input field.
    if (principal.value <= 0) {
        alert("Enter a positive number");
        principal.value = '';
        principal.focus;
    }

}
