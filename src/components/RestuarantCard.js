
import { CDN_URL } from '../utils/constants';

const RestuarantCard=(props)=>{
    console.log(props.resData.info);
    const {name, cuisines, avgRating,cloudinaryImageId,Id}=props?.resData.info;
    return(
        <div className='res-card'>
            <img alt="logo" className='res-logo'
             src={CDN_URL+ cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
           
        </div>
    )
}

export default RestuarantCard;