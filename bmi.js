/*bmi*/
function bmi(){
    m=document.getElementById("magassag").value;
    t=document.getElementById("tomeg").value;
    e=parseFloat(t)/(parseFloat(m)*parseFloat(m));
    document.getElementById("eredmeny").innerHTML=Math.round(100*e)/100;
  }