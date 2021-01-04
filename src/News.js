import React from 'react'

function News(props) {
    return (
        <center>
        <div style={{
            width:"47rem",
            height:"5rem",
            // border:"1px solid",
            borderRadius:"2rem",
            boxShadow :'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            margin:'2rem',
            padding:'2rem'   
        }}>
           <h4>{props.title}</h4> 
        </div>
        </center>

    )
}

export default News;
