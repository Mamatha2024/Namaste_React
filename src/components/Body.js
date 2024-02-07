
import {mockData} from '../utils/mockData';
import RestuarantCard from './RestuarantCard';

const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {mockData.map((res) =>
                 <RestuarantCard key={res.info.id} resData={res}/>
                 )}
                
            </div>
        </div>
    )
}

export default Body;