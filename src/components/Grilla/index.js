import React from 'react' 
import { Container } from './styled'
import Card from '../Card'


const Grilla = ({news}) => {
    
    console.log("en grilla: ",news)
    return(
        <Container>
        {news.map(newitem => <Card newData={newitem} />)}
        </Container>
    )
}

export default Grilla