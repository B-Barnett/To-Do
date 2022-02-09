import '../App.css';
import React from 'react';

const Todo = props => {
    const {content, isSelected, idx, handleDelete, change} = props;

    return (
        <div>
            <form>
                <label>
                    <h3 style={isSelected ? {textDecoration: "line-through"}: {}} >{content }</h3>
                    <input type="checkbox" onChange={() => change(idx)} />
                </label>
            </form>
        <button type="submit" onClick={()=>handleDelete(idx)} >DELETE</button>
        </div>
    );
}

export default Todo;