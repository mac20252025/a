function mifuncion()
                   {var x,y,suma,txt;
                        
                        x=parseFloat(document.getElementById("num1").value);
                        y=parseFloat(document.getElementById("num2").value);

                        suma=x+y;
                        
                      
                        document.getElementById("sumando").textContent=suma;
                    }

function miMultiplicacion()
                    {var x,y,mul,txt;
                        
                        x=parseFloat(document.getElementById("num3").value);
                        y=parseFloat(document.getElementById("num4").value);

                        mul=x*y;
                        
                      
                        document.getElementById("multiplicado").textContent=mul;
                    }