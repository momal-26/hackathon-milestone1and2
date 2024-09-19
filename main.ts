function myButton() {  
    let x = document.getElementById("myDIV");  
    if (x) { // Check that x is not null  
        if (x.style.display === "none") {  
            x.style.display = "block";  
        } else {  
            x.style.display = "none";  
        }  
    } else {  
        console.error("Element with ID 'myDIV' not found.");  
    }  
  }  