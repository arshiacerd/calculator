function getnumber(n){
   var x =n;
   if(x==='=')
   {
            document.getElementById("input").value=eval(document.getElementById("input").value);
   }
   else if(x=='AC')
   {
           document.getElementById("input").value=" ";
   }

   else
   {
           document.getElementById("input").value+=n;
   }
   
}