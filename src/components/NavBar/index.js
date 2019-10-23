import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from './styled'

const NavBar = () =>{
    return(
        <Container>
            <Link to={'/'}>Home</Link>
            <Link to={'/category/politica'}>Politica</Link>
            <Link to={'/category/internacionales'}>Internacionales</Link>
            <Link to={'/category/tecnologia'}>Tecnologia</Link>
        </Container>
    )
}

export default NavBar