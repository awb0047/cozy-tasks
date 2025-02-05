export function getTasks()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://httpbin.org/get", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}