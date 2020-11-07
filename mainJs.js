
document.querySelector('.info').addEventListener('click', ()=>{
    document.querySelector('.info').style.height = '35vh'; 
    document.querySelector('.info1').style.height = '7vh';
    document.querySelector('.info2').style.height = '7vh';
    document.querySelector('.info3').style.height = '7vh';
});
document.querySelector('.info1').addEventListener('click', ()=>{
    document.querySelector('.info1').style.height = '35vh';
    document.querySelector('.info').style.height = '7vh';
    document.querySelector('.info2').style.height = '7vh';
    document.querySelector('.info3').style.height = '7vh';
});
document.querySelector('.info2').addEventListener('click', ()=>{
    document.querySelector('.info2').style.height = '35vh';
    document.querySelector('.info').style.height = '7vh';
    document.querySelector('.info1').style.height = '7vh';
    document.querySelector('.info3').style.height = '7vh';
});
document.querySelector('.info3').addEventListener('click', ()=>{
    document.querySelector('.info3').style.height = '35vh';
    document.querySelector('.info1').style.height = '7vh';
    document.querySelector('.info2').style.height = '7vh';
    document.querySelector('.info').style.height = '7vh';
});



