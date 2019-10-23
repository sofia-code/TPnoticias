import styled from 'styled-components'

const Container = styled.div`
   background-color:#e9e9e9;
   margin-bottom: 10%;
   border-radius: 21px 21px 21px 21px;
   -moz-border-radius: 21px 21px 21px 21px;
   -webkit-border-radius: 21px 21px 21px 21px;
   border: 0px solid #000000;
   @import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap');
   color:#fff;
   img{
       width:100%;
       height: 200px;
       object-fit: cover;
   }
   .info{
       padding-left: 20px;
       padding-right: 20px;
       padding-bottom: 10px;
       color:#333333;
   }
   span{
       font-family: 'Merriweather', serif;
       font-weight: 900;
   }

   a{
       text-decoration: none;
   }
`
export {Container}
