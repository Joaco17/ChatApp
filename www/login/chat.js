var conn = null;

function onConnectionStatus(nStatus)
{
    if(nStatus == Strophe.Status.ERROR)
    {
        alert("An error occured");
    }
    else if(nStatus == Strophe.Status.CONNECTED)
    {
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
        
        window.location = "../index.html";
    }
    else if(nStatus == Strophe.Status.AUTHFAIL)
    {
        alert("Username and password is wrong");
    }
}

function login()
{
    if(document.getElementById("username").value == "" || document.getElementById("password").value == "")
    {
        alert("Please enter both username and password");
        
        return;
    }
    
    conn = new Strophe.Connection("http://localhost:5280/http-bind");
    conn.connect(document.getElementById("username").value + "@localhost", document.getElementById("password").value, onConnectionStatus);
    
}