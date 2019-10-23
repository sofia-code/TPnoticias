import React from "react";
import Slider from "react-slick";
import {Container} from './styled'
class SimpleSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      news: props.news
    }
    
  }
  render() {
    const items = this.state.news.slice(0, 4);
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
    
        {items.map(newItem =>
        <Container>
            <div className='contSlider'>
                <img className='imgSlider' src={newItem.img_url} alt={newItem.title}/>
                <a href= {newItem.url} target="_blank">
               <p className='titleSlider'>{newItem.title}</p></a>
            </div>
            </Container>
            )}
          
      </Slider>
    );
  }
}
export default SimpleSlider