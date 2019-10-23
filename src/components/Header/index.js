import React from 'react'
import {Container} from './styled'
import {Link, withRouter} from 'react-router-dom'


const Header = (props) => {
    return(
        <Container>
            <h1>Noticias</h1>
            <input type="text" placeholder="Buscar" onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}/>
            
            
        </Container>
    )
}

export default withRouter(Header)