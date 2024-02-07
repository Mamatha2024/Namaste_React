
import React from 'react';
import {mockData} from '../utils/mockData';
import RestuarantCard from './RestuarantCard';
import { useState } from 'react';

const Body=()=>{
    const [listOfRestuarants,setListOfRestuarants]= useState(mockData);
    return(
        <div className='body'>
            <div className='filter'>
            <button className='filter-btn' onClick={()=>{
               const filteredRestuarants= listOfRestuarants.filter(
                    (res)=> res.info.avgRating > 4
                    
                );
                setListOfRestuarants(filteredRestuarants);
                console.log(filteredRestuarants);
                }}
                >
                    Top Rated Restuarants</button>
            </div>
            <div className='res-container'>
                {listOfRestuarants.map((res) =>
                 <RestuarantCard key={res.info.id} resData={res}/>
                 )}
                
            </div>
        </div>
    )
}

export default Body;