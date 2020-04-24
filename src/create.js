import React from 'react'
import ReactDOM from 'react-dom';

import Card from './card'



function create(){
    // var p="<div id='cards'></div>"
    var temp1=[];
    var temp = document.createElement('div');
    temp.setAttribute('id','cards');
    let count=1;
    if(localStorage.getItem("count"))
        count = localStorage.getItem("count");
    else
        {
            localStorage.setItem("count",1);
            // localStorage.setItem("expenses",{});
        }
    let expenses=JSON.parse(localStorage.getItem("expenses") || "[]");
    
    for(let i=0;i<expenses.length;i++)
    {
       temp.innerHTML+="<div id='carde"+i+"'></div>"
       temp1.push(<Card name={expenses[i].name} amount={expenses[i].amount} type={expenses[i].type} />);
    //     ReactDOM.render(
    //     <Card name={expenses[i].name} amount={expenses[i].amount} type={expenses[i].type} />,
    //     document.getElementById('carde'+i)
    //   );
        console.log(expenses[i]);
    }
    console.log(temp);
        return(
   <div> {temp1}</div>
        )
    
}
export default create;