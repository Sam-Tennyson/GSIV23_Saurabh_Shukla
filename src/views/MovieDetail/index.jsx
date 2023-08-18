// libs
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

// components
import Header from '../../components/core/Header';

// constants
import { ROUTE_CONSTANTS } from '../../shared/Routes';

import "./style.css"

const MovieDetail = () => {
	const navigate = useNavigate();

	const movieDataRed = useSelector((state) => state.movie_data.current_movie)

	useEffect(() => {
		console.log(movieDataRed);
		if (!movieDataRed) {
			navigate({ pathname: ROUTE_CONSTANTS.DASHBOARD })
		}
	}, [])

	return (
		<>
			<Header isDetail={true} />
			<div className="row landing-class my-card-detail container my-3">
				<div className="col-md-4 cursor-pointer" >
					<img src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}${movieDataRed?.poster_path}`} className="card-img-top" alt={"movie-image-path"} />
				</div>
				<div className="col-md-8">
					<div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
						<h5 className="card-title">{movieDataRed?.title}</h5>
						<div>Rating- {movieDataRed?.vote_average}</div>
					</div>
					<p className="card-text">{movieDataRed?.overview}</p>
				</div>
			</div>
		</>
	)
}

export default MovieDetail