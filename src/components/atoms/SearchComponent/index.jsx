// libs
import React from 'react'
import { Search } from 'tabler-icons-react'
import SearchIcon from '@mui/icons-material/Search';

// style
import "./style.css"

const SearchComponent = ({
    search, onChange = () => { }
}) => {
    return (
        <>
            <div className="search-class d-flex justify-content-around align-items-center">
                <em><SearchIcon /></em>
                <input className="form-control search-bar" placeholder='Search...' type="text" value={search} onChange={onChange}></input>
            </div>
        </>
    )
}

export default SearchComponent