
document.getElementById('btn').addEventListener('click',function(){
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    let bmi=weight/(height*height);
    document.getElementById('result').innerText=`Your BMI is ${bmi.toFixed(2)} `;
    document.getElementById('result').style.color = 'green'
    if(bmi<18.5){
        document.getElementById('comment').innerText= "Your are UNDERWEIGHT";
        document.getElementById('comment').style.color= "rgb(237, 63, 63)";
    }
    else if(bmi<24.9){
        document.getElementById('comment').innerText= "You have HEALTHY weight";
        document.getElementById('comment').style.color= "rgb(8, 237, 8)";

    }   
    else if(bmi<29.9){
        document.getElementById('comment').innerText= "You are OVERWEIGHT";
        document.getElementById('comment').style.color= " rgb(239, 119, 55)";

    }
    else{
        document.getElementById('comment').innerText= "You are OBESE";        
        document.getElementById('comment').style.color= " rgb(236, 8, 8)";
    }
})
