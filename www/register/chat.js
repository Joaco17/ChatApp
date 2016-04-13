var conn = null;
var BOSH_SERVICE = 'http://localhost:5280/http-bind';

function onConnectionStatus(nStatus)
{
    if(nStatus == Strophe.Status.ERROR)
    {
        alert("Unknown error occured");
    }
    else if(nStatus == Strophe.Status.REGISTER)
    {
        conn.register.fields.username = document.getElementById("username").value;
        conn.register.fields.password = document.getElementById("password").value;
        conn.register.submit();
    }
    else if(nStatus == Strophe.Status.REGISTERED)
    {
        alert("Registration is successful");    
    }
    else if(nStatus == Strophe.Status.REGIFAIL)
    {
        alert("Registration failed. Please try again later");
    }
    else if(nStatus == Strophe.Status.CONFLICT)
    {
        alert("Try some other username and password");
    }
    else if(nStatus == Strophe.Status.NOTACCEPTABLE)
    {
        alert("Try some other username and password");
    }
    
}

function register()
{
    if(document.getElementById("username").value == "" || document.getElementById("password").value == "")
    {
        alert("Please enter both username and password");
        return;
    }
    
     alert("Registro pulsado");
    conn = new Strophe.Connection(BOSH_SERVICE);
    conn.register.connect("localhost", onConnectionStatus, 60, 1);
}