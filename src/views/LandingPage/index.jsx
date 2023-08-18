// libs
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setCurrentMovieData, setMovieData } from '../../redux/Actions/Movie';

// components
import CommonMovieCard from '../../components/atoms/CommonMovieCard';
import Header from "../../components/core/Header"

// config
const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    }
};

// style
import "./style.css"
import { useNavigate } from 'react-router-dom';
import { NUMBER } from '../../shared/Constants';
import { ROUTE_CONSTANTS } from '../../shared/Routes';
import CommonPagination from '../../components/atoms/CommonPagination';

const LandingPage = () => {

    const dispatch = useDispatch();
    const pageRef = useRef(NUMBER.ONE);
    const navigate = useNavigate();

    const movieDataRed = useSelector((state) => state.movie_data.movies?.results) || []
    const totalPageRed = useSelector((state) => state.movie_data.movies?.total_pages) || 0

    const [search, setSearch] = useState("");

    // Fetch Movie data
    const fetchMovie = async () => {

        let query = encodeURI(search)
        let endpoint = search?.length ? "search/movie" : "movie/upcoming"

        // API Endpoint
        let API_ENDPOINTS = `${import.meta.env.VITE_API_BASE_URL}/${endpoint}?api_key=${import.meta.env.VITE_API_API_KEY}&query=${query}&page=${pageRef.current}`

        const response = await axios.get(API_ENDPOINTS, config);
        const data = await response.data;
        dispatch(setMovieData(data))
    }

    // Handle Card Click
    const handleClick = (data) => {
        console.log(data);
        dispatch(setCurrentMovieData(data))
        navigate({
            pathname: ROUTE_CONSTANTS.MOVIE_DETAIL,
        })
    }

    useEffect(() => {
        let debounceTimer = setTimeout(() => {
            fetchMovie()
        }, 500)
        return () => {
            clearTimeout(debounceTimer)
        }

    }, [search])

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <>
            <Header search={search} onChange={(e) => setSearch(e.target.value)} />
            <div className='landing-class '>
                <div className="row p-3 " key={"landing"}>
                    {movieDataRed.map((item, ind) => (
                        <div className='my-2 col-sm-6 col-md-6 col-lg-3 ' key={ind}>
                            <CommonMovieCard
                                data={item}
                                onClick={() => handleClick(item)}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {!search?.length  && totalPageRed ? (
                    <>
                        <CommonPagination
                            pagecount={totalPageRed}
                            onPageClick={(e, page) => {
                                pageRef.current = page
                                fetchMovie()
                            }}
                        />
                    </>
                ) : null}

            </div>
        </>
    )
}

export default LandingPage