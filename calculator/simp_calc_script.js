function getVal(x){
    // alert(x+" is the input");
    let str=document.getElementById("screen").value;
    switch(x){
        case "C":
            str="";
            break;
        
        case "=":
            if(str!="")
                str=eval(str);
            break;
        case "b":

            let n=str.length;
            str=str.slice(0,n-1);
            break;
        default:
            str+=x;
    }
    

    document.getElementById("screen").value=str;
}