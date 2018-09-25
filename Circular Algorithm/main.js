c_count.onkeyup=function(e){
    if(e.which==13){
        let n = c_count.value;
        let a = 0;
        let r=200;
        let rad=(2*Math.PI)/n;
        let i=1;
        let interval=setInterval(()=>{
            a+=rad;           
            let c=document.createElement("div");
            document.body.appendChild(c);
            c.className="circle";
            c.style.width="10px";
            c.style.height="10px";
            c.style.borderRadius="100%";
            c.style.border="1px solid black";
            c.style.backgroundColor="gold";
            c.style.position="absolute";
            c.style.left=600+r*Math.cos(a)+"px";
            c.style.top=300+r*Math.sin(a)+"px";
            if (i++ == n) {
                clearInterval(interval);
            } 
        })
        let circles=document.querySelectorAll(".circle");
        if(circles!=null){
            for(circle of circles){
                circle.remove();
            }
        }
        c_count.value="";
    }
}