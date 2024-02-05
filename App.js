import React from 'react';
import  ReactDOM  from 'react-dom';


//JSX is HTML like syntax(it is transpiled before it reaches to JS engine)-PARCEL-Babel00o

const heading = <h1> Javascript using JSX</h1>

const HeadingComponent=()=>{
    return <h1>Hai Javascript</h1>
}

const Title=()=> (
    <h1 className='title'>Title Component</h1>
)

const Heading=()=>(
    
    <div className='heading'>
        {100+300}
        <Title/>
        <h1>Hello JSX</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);