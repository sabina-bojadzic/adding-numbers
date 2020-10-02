
function sabiranje(){
    var message ='';
    var broj1 = document.getElementById("broj1").value;
    var broj2 = document.getElementById("broj2").value;
    
    broj1 = parseInt (broj1);
    broj2 = parseInt (broj2);

    var result = broj1 + broj2;
    document.getElementById("message").innerHTML=result;
    
}