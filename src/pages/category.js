import React from "react"
import Grilla from "../components/Grilla"

class Category extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchCategoryNews()
        }
    }

    async fetchCategoryNews(){
        const slug = this.props.match.params.slug
        const categoriesId = {
            politica: '1',
            internacionales: '2',
            tecnologia: '3',
            espectaculos: '4',
            deportes: '5',
        }
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            this.setState({ 
              news: json, 
              isLoading: false
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount(){
        this.fetchCategoryNews()
    }

    render() {
       
        return(
            <Grilla news={this.state.news} />
        )
    }
}

export default Category