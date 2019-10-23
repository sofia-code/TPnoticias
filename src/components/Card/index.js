import React from 'react' 
import { Container } from './styled'
import {Link} from 'react-router-dom'

const Card = (props) => {
    console.log("card: " + props)
    const {url, img_url, title, source_name} = props.newData
    
       
        return(
        <Container>
            <a className="hola" href={url}  target ="_blank">
            <img src={img_url} />
            <div className="info">
                <h2>{title}</h2>
                <p>{source_name}</p>
            </div>
            </a>
            
            
        </Container>
    )
}

export default Card