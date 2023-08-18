// libs
import React, { useRef } from 'react'

// styles
import  "./style.css"

const CommonMovieCard = ({
	data,
	onClick = () => {}
}) => {
	const characterCountRef = useRef(200);
	return (
		<>
			<div className="card h-100 my-card cursor-pointer" onClick={onClick}>
				<img src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}${data?.poster_path}`} className="card-img-top" alt={"movie-image-path"} />
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center flex-wrap">
						<h5 className="card-title">{data?.title}</h5>
						<div>Rating- {data?.vote_average}</div>
					</div>
					<p className="card-text">{data?.overview?.slice(0, characterCountRef.current)}</p>
				</div>
			</div>
		</>
	)
}

export default CommonMovieCard