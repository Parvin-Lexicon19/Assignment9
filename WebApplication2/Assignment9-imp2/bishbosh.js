function BishBosh(){
    var form = document.getElementById ("myForm");
    var loop = form["loopNumber"].value;
    var f = form["firstNumber"].value;
    var s = form["secondNumber"].value; 
    
    var output = " ";
    //var output = document.getElementById("output");    
    for(i = 1; i <= loop; i++){
        if(i%3 === 0 && i%4 === 0)
              output += "Bish-Bosh";                
          else 
              if(i%3 === 0) 
                  output +="Bish";
          else 
              if(i%4 === 0)
                  output +="Bosh";
          else
              output += i.toString();
        
        if(i < loop)
            output += " ,"
    }
    form["output"].value = output;
}


/*function BishBosh2(){
    var form = document.getElementById ("myForm");
    var loop = form["loopNumber"].value;
    var f = form["firstNumber"].value;
    var s = form["secondNumber"].value; 
       
    var output = document.getElementById("output");
    for(i = 1; i <= loop; i++){
        if(i%3 === 0 && i%4 === 0)
              output.innerHTML += "Bish-Bosh";                
          else 
              if(i%3 === 0) 
                  output.innerHTML +="Bish";
          else 
              if(i%4 === 0)
                  output.innerHTML +="Bosh";
          else
              output.innerHTML += i.toString();
        
        if(i !== loop)
            output.innerHTML += " ,"
    }
}*/

