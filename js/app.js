document.getElementById('btn').addEventListener('click',function(){
 let weight=document.getElementById('weight').value;
 let height=document.getElementById('height').value;
 let bmi=weight/(height*height);
 document.getElementById('result').innerHTML=`your current BMI is ${bmi}`;
})
