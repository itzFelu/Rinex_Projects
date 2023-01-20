
setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    let hhand=30*h+m/3+s/180;
    let mhand=6*m+s/10;
    let shand=6*s;
    hour.style.transform=`rotate(${hhand}deg)`;
    min.style.transform=`rotate(${mhand}deg)`;
    sec.style.transform=`rotate(${shand}deg)`;
    
    let t=d.toString();
    document.getElementById("time").innerHTML=t.slice(16,25);


    
},1000);

function cli(){
    let a=document.getElementById("ip");
    let bx=document.getElementById("box");
    let lst=document.createElement("li");
    let node=document.createTextNode(a.value);
    if(a.value!=""){
        lst.appendChild(node);
        bx.appendChild(lst);
        a.value="";
    }
    lst.addEventListener('click',function(){
        lst.style.textDecoration="line-through";
    })
    lst.addEventListener('dblclick',function(){
        bx.removeChild(lst);
    })
    
}

