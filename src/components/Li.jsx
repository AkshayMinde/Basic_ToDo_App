import React from 'react';

const Li = (props) => {
	console.log(props);
    const strikeThrough = (event) => {
        event.target.classList.toggle('strikethrough')
    }

const doubleClickHandler = () => {
    let idx = props.key;
    props.deleteFunction(idx);
}

	return (
		<React.Fragment>
			<li 
            onDoubleClick={doubleClickHandler}  
            onClick={strikeThrough} >
                {props.message}
            </li>
		</React.Fragment>
	);
};

export default Li;