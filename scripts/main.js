// URL
/*
    Javascript to set the base to which url was being directed. 
    VALUES TO CHANGE WHEN PUSHING TO GITHUB

    True  = Github Pages URL
    False = localhost
*/

baseChange(true)

function baseChange(bool){
    if (bool == false){
        // For Localhost
        var base = document.createElement('base');
        base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        document.getElementsByTagName('head')[0].appendChild(base);
        alert("Current Page is on Localhost base!\nDo change to production base if necessary.");
    } else{
        // For Github Pages
        var base = document.createElement('base');
        base.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/My-Portfolio/";
        document.getElementsByTagName('head')[0].appendChild(base);
        alert("Current Page is on Github base!\nDo change to development base if necessary.");
    }
}



