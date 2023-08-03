const btn = document.getElementById('btn');
const sortbtn = document.getElementById('sortbtn');
const box = document.getElementById('box')
const container = document.getElementById('container')

var arr1=[];
var count=[];
btn.addEventListener('click',()=>{
    container.innerHTML = "";
    arr1 = [];
    for(let i=0;i<15;i++){
        count.push(i);
        var size = Math.floor(Math.random() * 550) + 50;
        arr1.push(size);
        const newDiv = document.createElement("div");
        newDiv.className = 'b';
        newDiv.id = i;
        newDiv.style.width = 90 + 'px';
        newDiv.style.height = size+'px';
        container.appendChild(newDiv);
    }
})

sortbtn.addEventListener('click',()=>{
    for(let i=0;i<15;i++){
        for(let j=i;j<15;j++){
            setTimeout(()=>{
                if(i>0){
                document.getElementById(count[i-1]).style.backgroundColor = 'green';
                    if(j==i){
                        document.getElementById(count[14]).style.backgroundColor = 'purple'; 
                    }
                }
                document.getElementById(count[j-1]).style.backgroundColor = 'purple';
                document.getElementById(count[i]).style.backgroundColor = 'red';
                document.getElementById(count[j]).style.backgroundColor = 'yellow';
                if(arr1[i]>arr1[j]){
                    var temp=arr1[i];
                    arr1[i]=arr1[j];
                    arr1[j]=temp;
                    console.log(arr1[i],arr1[j]);
                    
                    document.getElementById(count[i]).style.height = arr1[i]+"px";
                    document.getElementById(count[j]).style.height = arr1[j]+"px";
                }
                document.getElementById(count[i]).innerHTML = arr1[i];
                document.getElementById(count[j]).innerHTML = arr1[j];
                console.log(i,j);
                if(i==14){
                    document.getElementById(count[14]).style.backgroundColor = 'green';
                    document.getElementById(count[13]).style.backgroundColor = 'green';
                }
            },(1500*i)+(100*j))
        }
    }
    
})
