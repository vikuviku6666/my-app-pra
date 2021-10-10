import React from 'react'

const RenderProps = (props) => {
  const [state, setState] = React.useState({ x: 0, y: 0 })
  
 
  const handleMouseMove = (e) => {
		setState({
			x: e.clientX,
			y: e.clientY,
		})
	}
  return (
			<div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
				{/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
				{props.render(state)}
			</div>
		);
  
}

export default RenderProps;






