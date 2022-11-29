function enviar(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "bryan" && password == "123"){
       
        window.location="pages/inicio.html";
    }
    else{
        
        window.location="pages/nosesion.html";
    }
}

var options = {
    valueNames: [ 'name', 'born', 'bio', 'genre' ]
};

var getCookie = function(name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] == name)
            return pair[1];
    }
    return null;
};