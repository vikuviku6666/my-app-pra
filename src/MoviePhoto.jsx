import React from 'react'
import Cat from './Cat';
import Dog from './Dog';
import RenderProps from './RenderProps';

const MoviePhoto = () => {
  return (
		<>
			<h1>Move the mouse around!</h1>
			<RenderProps render={(mouse) => <Cat mouse={mouse} />} />
			<RenderProps render={(mouse) => <Dog mouse={mouse} />} />
		</>
	);
}

export default MoviePhoto
