innit();

baseChange(true);

document.getElementById("colored").addEventListener('click',function(){

    /*  
        This EventListener add as a event handler to a DOM. 
        This will store user input as to which version user prefers to view the website
    */

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

    /*
        function colorver() is a toggle function for the text 'Colored Ver' / 'Uncolored Ver'
        When clicked, it will change all the <span> elements to the desired color / uncolored ver.
        Additionally, the background will be display or not depending on it as well.

        True    = Colored ver 
        False   = Uncolored ver

    */

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

    /*
    function innit() initialize the color of the element in the page.
    Colors and text change based on what user clicked on 'Colored Ver' / 'Uncolored Ver'.
    Using sessionStorage to store user input.

    True    = Colored ver 
    False   = Uncolored ver
*/

    let toggled = sessionStorage.getItem("colored");
    if (toggled === "false" || toggled === ""){
        colorver(toggled);
        document.getElementById("colored").innerHTML = "Colored Ver" 
    } else {
        colorver(toggled);
        document.getElementById("colored").innerHTML = "Uncolored Ver" 
    }
}

// function baseChange(bool){

//     /*
//         baseChange() is a function to set the base to which url was being directed. 
//         VALUES TO CHANGE WHEN PUSHING TO GITHUB

//         True  = Github Pages URL
//         False = localhost
//     */
   
//     if (bool == false){
//         // For Localhost
//         var base = document.createElement('base');
//         base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//         document.getElementsByTagName('head')[0].appendChild(base);
//         // alert("Current Page is on Localhost base!\nDo change to production base if necessary.");
//     } else{
//         // For Github Pages
//         var base = document.createElement('base');
//         base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/IDAssignment1";
//         document.getElementsByTagName('head')[0].appendChild(base);
//         // alert("Current Page is on Github base!\nDo change to development base if necessary.");
//     }
// }
