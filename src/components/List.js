import React from "react";

const List = ({ results }) => {
    const renderedList = results.map((item) => {
        return (
            <div>
                <h2>
                    <a href="#" >{item.title}</a>
                </h2>
                <p>{item.snippet}</p>
            </div>
        );
    });
    return renderedList;
}
export default List;