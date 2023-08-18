// libs
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

// styles
import "./style.css"

// components
import SearchComponent from '../../atoms/SearchComponent'
import { STRINGS } from '../../../shared/Constants';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../shared/Routes';

const Header = ({isDetail=false, search, onChange=()=>{}}) => {
	const navigate = useNavigate();
	return (
		<>
			<div className='header-class p-3'>
				<div className="d-flex justify-content-between align-items-center">
					{!isDetail?(
						<SearchComponent search={search} onChange={onChange} />
					):(
						STRINGS.MOVIE_DETAILS
					)}
					<em className='cursor-pointer' onClick={() => navigate({pathname: ROUTE_CONSTANTS.DASHBOARD})}><HomeIcon /></em>
				</div>
			</div>
		</>
	)
}

export default Header