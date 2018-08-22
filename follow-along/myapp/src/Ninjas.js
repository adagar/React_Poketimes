import React, { Component } from 'react';

//props automatically passes as a component
//const Ninjas = (props) => {
//instead of destructuring
const Ninjas = ({ ninjas }) => {
    //console.log(this.props)
    //as a UI component, this doesn't need a state/class
    //const { ninjas } = props; //because we have the { ninjas } up top, we're destructing the prop into ninjas there
    // const ninjaList = ninjas.map(ninja => {
        // if(ninja.age > 20){
        //     return (
        //         <div className="ninja" key = { ninja.id }>
        //             <div>Name: { ninja.name }</div>
        //             <div>Age: { ninja.age }</div>
        //             <div>Belt: { ninja.belt }</div>
        //     </div>
        //     )
        // }
        // else {
        //     return null;
        // }
        //)}
        //with a ternary
        const ninjaList = ninjas.map(ninja => {
            //condition ? (iftrue) : (iffalse)
            return ninja.age > 20 ? (
                <div className="ninja" key = { ninja.id }>
                     <div>Name: { ninja.name }</div>
                     <div>Age: { ninja.age }</div>
                     <div>Belt: { ninja.belt }</div>
                </div>
            ) : null
        });
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas