import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        //props.history.push('/about') //programattic redirect
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusamus, a laboriosam deserunt optio aperiam laborum, unde illum suscipit corporis, quos dicta. Enim ea provident dolores! Consequatur tenetur ipsam perferendis?</p>
        </div>
    )
}

export default Contact