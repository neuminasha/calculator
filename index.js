let os=document.getElementById('os')

function Clear()
{
   os.value=" ";
}
function del()
{
   os.value=os.value.slice(0,-1);
}
function display(txt)
{
    os.value=os.value+txt;
    console.log(os.value);
}
function calculate()
{
    os.value=eval(os.value);
}
function triangle()
{
    let b=prompt('Enter the breath');
    let h=prompt('Enter the height')
    let res=0.5*b*h;
    alert('the area of triangle is',res);
}
function circle()
{
    let b=prompt('Enter the breath');
    let h=prompt('Enter the height')
    let res=0.5*b*h;
    alert('the area of circle is',res);
}
function square()
{
    let b=prompt('Enter the breath');
    let h=prompt('Enter the height')
    let res=0.5*b*h;
    alert('the area of square is',res);
}
function Rectangle()
{
    let b=prompt('Enter the breath');
    let h=prompt('Enter the height')
    let res=0.5*b*h;
    alert('the area of Rectangle is',res);
}
