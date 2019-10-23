import styled from 'styled-components'
const Container = styled.div`
.contSlider{
    height: 600px;
    overflow: hidden;
    position: relative;
}
.imgSlider{
    width: 100%;
    object-fit: cover;

}
.titleSlider{
    position: absolute;
    bottom: -47px;
    /* left: 100px; */
    color: white;
    font-size: 3em;
    font-weight: 600;
    width: 100%;
    background-color: #add8e6a6;
    padding: 3%;
}

`
export {Container}




