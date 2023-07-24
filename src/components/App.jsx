import React, {useState} from "react";
import Li from "./Li";


const App = () => {
    const [todoValue, setTodoValue] = useState('');
    const [list, setList] = useState([]);
    
    // for fetching the value provided in input
    const inputValue = (event) => {
        setTodoValue(event.target.value);
    }

    const deleteTodo = (idx) => {
        // event.target.innerHTML = '';
        // const li = event.target;
        // li.parentNode.removeChild(li);
        let newArr = []; /* making a copy of array then deleting the value */
		for (let item of list) {
			if(idx !== item){ 
                newArr.push(item);
            }
		}
        newArr.splice(idx, 1);
        setList(newArr);
    }

    const buttonClick = (event) => {
        // setTodos((prevState)=> {
        //     // if we want previous value mostly used callback function only
        //     // prevState provides us value of state before the refresh or previous value present in state
        //     event.preventDefault();
        //     return [...prevState, todoValue];

        // });
        let newArr = []; /* making a copy of array then pushing the value */
		for (let item of list) {
			newArr.push(item);
		}
		newArr.push(todoValue);
		setList(newArr);
		setTodoValue('');
    };



    return(
        <>
        <div className="container">
            <div className="heading">
                <h1>TO-DO List</h1>
            </div>
            <div className="form">
                <input value={todoValue} onChange={inputValue} />
                <button onClick={buttonClick}><span>Add</span></button>
            </div>
            <div>
                <ul>
                    {list.map((item, idx) => {
                        return <Li 
                        key={idx} 
                        message = {item}
                        deleteFunction = {deleteTodo}
                        />/* passing the value to Li component */
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}
// line 57 we can't pass the value in on doubleClick = deleteTodo(idx) like this so we need to create a function there
// we can't use normal for loop for adding the values to the li section because for loop is a statement 
// and react files requires an expression means for loop doesn't return anything we need a loop 
// which returns something which is array.map() loop  
export default App;