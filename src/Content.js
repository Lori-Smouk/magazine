import React from 'react';
import Card from "./Card";



function Content(props) {
    const newDatebase = props.datebase.map((item) => {
            return <Card product={item} setBought={props.setBought}/>;
    });

    return (
        <div className="content">
            {newDatebase}
        </div>
    );
}

export default Content;