import React from 'react'

const Cat = (props) => {
  	const {x, y} = props.mouse;
		return (
			<img
				src='https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
				alt='img'
				style={{ position: 'absolute', left: x, top: y }}
			/>
		);
}

export default Cat;

