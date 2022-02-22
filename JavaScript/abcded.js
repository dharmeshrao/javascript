function fun(a,b)
{
      if(b==0)
           return a
     else
           return fun(b,a%b)
} 
console.log(fun(36,60));