import React from 'react';
import Card from "./Card";



function Content(props) {
    const newDatabase = props.database.map((item, index) => {
            return <Card key={index} product={item} setBought={props.setBought}/>;
    });

    return (
        <div className="content">
            {newDatabase}
        </div>
    );
}

export default Content;