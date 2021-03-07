import React from 'react';


const CategoryDetails = (props) => {
    console.log(props.product);
    const { name } = props.product
    console.log(name);
    return (
        <div>
            <p>selected category {name}</p>
        </div>
    );
};

export default CategoryDetails;