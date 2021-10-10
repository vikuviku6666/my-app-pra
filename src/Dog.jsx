import React from 'react'

const Dog = (props) => {
 const { x, y } = props.mouse;
 return (
		<img
			src='https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80'
			alt='img'
			style={{ position: 'absolute', left: x, top: y }}
		/>
 );
}

export default Dog
