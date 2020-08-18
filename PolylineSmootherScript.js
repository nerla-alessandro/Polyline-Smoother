var tempX=0, tempY=0, i=0;

function clicked(evt){
  var e = evt.target;
  var dim = e.getBoundingClientRect();
  var x = evt.clientX - dim.left;
  var y = evt.clientY - dim.top;
  if(x>tempX || true){
    if(tempX==0 && tempY==0){
      tempX=x;
      tempY=y;
    } else{
      window.document.getElementById("container").innerHTML+='<line id="id'+i+'" x1="'+tempX+'" y1="'+tempY+'" x2="'+x+'" y2="'+y+'" style="stroke:rgb(132, 0, 255);stroke-width:2" />';
      tempX=x;
      tempY=y;
      i++;
    }
  }
}

function getCoords(evt){
  var e = evt.target;
  var dim = e.getBoundingClientRect();
  var x = evt.clientX - dim.left;
  var y = evt.clientY - dim.top;
  var coords= "X:  "+x+"//  Y:  "+y;
  window.document.getElementById("container").setAttribute("title", coords);
}

function reset(){
  window.document.getElementById("container").innerHTML="";
  tempX=0, tempY=0, i=0;
} 

function smoothen(){
  for(j=0; j<(i-1); j++){
    let tempVX=0, tempVY=0;
    if(j==0){
      tempVX = parseInt(window.document.getElementById("id"+0).getAttribute("x1"));
      tempVX += parseInt(window.document.getElementById("id"+0).getAttribute("x2"));
      tempVX += parseInt(window.document.getElementById("id"+1).getAttribute("x2"));
      tempVY = parseInt(window.document.getElementById("id"+0).getAttribute("y1"));
      tempVY += parseInt(window.document.getElementById("id"+0).getAttribute("y2"));
      tempVY += parseInt(window.document.getElementById("id"+1).getAttribute("y2"));
    } else{
      for(k=0; k<3; k++){
        tempVX += parseInt(window.document.getElementById("id"+(j-1+k)).getAttribute("x2"));
        tempVY += parseInt(window.document.getElementById("id"+(j-1+k)).getAttribute("y2"));
      }
    }
      tempVX/=3;
      tempVY/=3;
      window.document.getElementById("id"+(j)).setAttribute("x2", tempVX);  
      window.document.getElementById("id"+(j+1)).setAttribute("x1", tempVX);
      window.document.getElementById("id"+(j)).setAttribute("y2", tempVY);  
      window.document.getElementById("id"+(j+1)).setAttribute("y1", tempVY);                
    }
}
