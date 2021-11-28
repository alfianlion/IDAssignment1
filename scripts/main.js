// URL
/*
    Javascript to set the base to which url was being directed. 
    VALUES TO CHANGE WHEN PUSHING TO GITHUB

    True  = Github Pages URL
    False = localhost
*/


// let toggled = true;

innit();

document.getElementById("colored").addEventListener('click',function(){
    let toggled = sessionStorage.getItem("colored");
    if (toggled === "false" || toggled === ""){
        sessionStorage.setItem('colored',"true");
        toggled = sessionStorage.getItem("colored");
        colorver(toggled);
    } else {
        sessionStorage.setItem('colored',"false");
        toggled = sessionStorage.getItem("colored");
        colorver(toggled);
    }
})

function colorver(toggle) {

    // All span element
    let span = document.querySelectorAll("span.darkyellow");

        if (toggle === "false"){
            for (let i = 0; i < span.length; i++) {
                document.getElementById("colored").innerHTML = "Colored Ver";        
                document.getElementById("colored").style.color = 'white';        
                span[i].style.color = 'white';
            }        
        } else {
            for (let i = 0; i < span.length; i++) {
                document.getElementById("colored").innerHTML = "Uncolored Ver";
                document.getElementById("colored").style.color = '#c28e2c';        
                span[i].style.color = '#c28e2c';
            }    
        }
    
    // background image
    let bg = document.querySelector("main");

        if (toggle === "false"){
            bg.style.backgroundImage = '';
        } else {
            bg.style.backgroundImage = "url('https://picsum.photos/seed/picsum/2000/2000')";
        }

 } 

 function innit(){
     let toggled = sessionStorage.getItem("colored");
     if (toggled === "false" || toggled === ""){
         colorver(toggled);
         document.getElementById("colored").innerHTML = "Colored Ver" 
         //  localStorage.setItem('colored',"true");
        } else {
            colorver(toggled);
            document.getElementById("colored").innerHTML = "Uncolored Ver" 
        //  localStorage.setItem('colored',"false");
     }
 }

baseChange(true);
function baseChange(bool){
    if (bool == false){
        // For Localhost
        var base = document.createElement('base');
        base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        document.getElementsByTagName('head')[0].appendChild(base);
        // alert("Current Page is on Localhost base!\nDo change to production base if necessary.");
    } else{
        // For Github Pages
        var base = document.createElement('base');
        base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/My-Portfolio";
        document.getElementsByTagName('head')[0].appendChild(base);
        // alert("Current Page is on Github base!\nDo change to development base if necessary.");
    }
}