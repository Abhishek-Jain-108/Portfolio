
//-----------------------------------About effect -----------------------------------------//

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(x of tablinks)
    {
        x.classList.remove("active-link");
    }
    for(x of tabcontents)
    {
        x.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//--------------------------------------------Media width --------------------------------------------//

let sidemenu = document.getElementById("sidemenu");

function closemenu()
{
    sidemenu.style.right="-200px";
}

function openmenu()
{
    sidemenu.style.right="0";
}

//---------------------------------------------Form-----------------------------------------------------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycby9DQw-77X_LLSeC0nhkr4e1YcP65xS4hNYNgr5xfG8ieIGGmGr3cLgr2O7G13HbW0T/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML="";
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})