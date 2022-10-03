document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.createElement("h2");

    h2.textContent = "Contact me at ztoplin@yahoo.com";
    
    document.querySelector("body").appendChild(h2);
    
    const input = document.getElementById('button');
    
    input.addEventListener('click', () => {
        alert('Hello to you too!');
    });

});
