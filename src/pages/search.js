import React from "react"
import Grilla from "../components/Grilla"

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchSearchNews()
        }
    }

    async fetchSearchNews(){
        const search = this.props.match.params.slug
        this.setState({
            isLoading:true
        })

        try {
            const response = await fetch(`https://api.canillitapp.com/search/${search}`);
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
        this.fetchSearchNews()
    }

    render() {
       
        return(
            <Grilla news={this.state.news} />
        )
    }
}

export default Search