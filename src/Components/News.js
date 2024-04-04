import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
		super();
		console.log("Hello I am constructor from news component");
    this.state = {
       articles: [],
        loading: false,
        page:1
      
    }
	}

  async componentDidMount(){
    //console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d00868e2c02d4760959fd2b19f6227f1";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }

  handlePreviousClick = async() =>{
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d00868e2c02d4760959fd2b19f6227f1&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
     this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }

  handleNextClick = async() =>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }else{
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d00868e2c02d4760959fd2b19f6227f1&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page +1,
          articles: parsedData.articles
        })
     }
  }

  render() {
    return (
      <div className="container my-3">
       <h2>NewsKoala - Top Headlines</h2>
       
       <div className="row">
       {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          <NewsItem  title={!element.title?element.title:""} description={element?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}

export default News
