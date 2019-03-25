import React from 'react';

//Functional UI component, it lacks state uses props that are passed from the root class component App
const Ian = ({ian})=> {
    /*   const ianList = ian.map(ian => {
           if (ian.age>20){
           return (
        //Outputing Dynamic content
       <div className="ian" key={ian.id}>
       <div>Name: { ian.name }</div>
       <div>Age: { ian.age }</div>
       <div>Nationality: { ian.nationality }</div>
      </div>
    )
           } else{
               return null
           }
})*/
const ianList = ian.map(ian =>{
    //Ternarry operator condition ? (true): (false);
    return ian.age > 20 ? (
    <div className="ian" key={ian.id}>
       <div>Name: { ian.name }</div>
       <div>Age: { ian.age }</div>
       <div>Nationality: { ian.nationality }</div>
    </div>): null;

})
//outputing a list of Ian items
        return(
            <div className="ian-list">
            {ianList}
            </div>
        );

    
}
export default Ian;