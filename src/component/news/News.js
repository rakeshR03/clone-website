import React from 'react';
import Card from '../card/Card';
import './news.css';

export class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataset : ""
        };
        
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=1878e682f8784001bbed8b0f07a9e357`;
        let res = await fetch(url);
        let value = await res.json();
        console.log(value.articles);
        
        this.setState({
            dataset : value.articles
        });
        
    }
    
    
    render(){
        const data = [...this.state.dataset];
        
        return (
            <div className='news-section'>
                <h1>News</h1>
                <div className='news-container'>
                    {data.map((x) => {
                        return (<Card key={x.publishedAt} value={x}/> )   
                    })}
                </div>
            </div>
        );
    }
};
