let x = Math.floor((Math.random()*3)+1);
let y;


document.getElementById('stone').addEventListener('click',()=>{
y=1;
document.querySelectorAll('.p2c3').forEach((item)=>{
    item.style.display='none';
})
check(y);
})


document.getElementById('paper').addEventListener('click',()=>{
y=2;
document.querySelectorAll('.p2c3').forEach((item)=>{
    item.style.display='none';
})
check(y);
})

document.getElementById('scissor').addEventListener('click',()=>{
y=3;
document.querySelectorAll('.p2c3').forEach((item)=>{
    item.style.display='none';
})
check(y);
})

function check(y){

    //      Draw Logic
    if(x===y){
        if(x==1){
            document.querySelectorAll('.Draw1').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.Draw').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.p2c4').forEach((item)=>{
                item.style.display='none'
            })
        }
        else if(x==2){
            document.querySelectorAll('.Draw2').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.Draw').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.p2c4').forEach((item)=>{
                item.style.display='none'
            })
        }
        else if(x==3){
            document.querySelectorAll('.Draw3').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.Draw').forEach((item)=>{
                item.style.display='inline'
            })
            document.querySelectorAll('.p2c4').forEach((item)=>{
                item.style.display='none'
            })
        }
    }

    //Win & Loose Logic
    else{
        if(x===1){
            if(y===2){
                document.getElementById('pw1').style.display='inline';
                document.getElementById('stl2').style.display='inline';
                document.querySelectorAll('.p2c3win').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })
            }
            else{
                document.getElementById('scl1').style.display='inline';
                document.getElementById('stw2').style.display='inline';
                document.querySelectorAll('.p2c3loose').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })
            }
        }

        else if(x===2){
            if(y===1){
                document.getElementById('pw2').style.display='inline';
                document.getElementById('stl1').style.display='inline';
                document.querySelectorAll('.p2c3loose').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })
            }
            else{
                document.getElementById('scw1').style.display='inline';
                document.getElementById('pl2').style.display='inline';
                document.querySelectorAll('.p2c3win').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })
            }
        }

        else{
            if(y===1){
                document.getElementById('stw1').style.display='inline';
                document.getElementById('scl2').style.display='inline';
                document.querySelectorAll('.p2c3win').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })
            }
            else if(y===2){
                document.getElementById('pl1').style.display='inline';
                document.getElementById('scw2').style.display='inline';
                document.querySelectorAll('.p2c3loose').forEach((item)=>{
                    item.style.display='inline'
                })
                document.querySelectorAll('.p2c4').forEach((item)=>{
                    item.style.display='none'
                })

        }

    }
}
}
