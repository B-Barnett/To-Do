import '../App.css';
import React from 'react';

const TodoForm = props => {
    const {inputs, handleList, handleForm} = props;

    return (
        <form onSubmit={handleList}>
            <div>
                <label>Add Something To Do: </label>
                <input 
                type="text" 
                name="content" 
                value={inputs.content}
                onChange={handleForm}
                />
                <button type="submit">ADD</button>
            </div>
        </form>
    );
}

export default TodoForm;