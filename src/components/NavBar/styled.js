import styled from 'styled-components' 

const Container = styled.nav`
   
    display: flex;
    slign-items: center;
    justify-content: space-between;
    padding: 40px 16%;
}
    a{
        font-size: 20px;
        text-decoration: none;
        color: #00bcd4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
   
    a:hover{
        color: lightblue;
    }
`

export {Container}