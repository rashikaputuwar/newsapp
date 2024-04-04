import React, { Component } from 'react'

export class NewsItem extends Component {
	
	render() {
		let {title,description,imageUrl, newsUrl} = this.props;
		return (
			<div className="my-3">
				<div  className="card" style={{width:"18rem"}}>
					<img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2024/04/GettyImages-1473057239-e1712083727562.jpg?resize=1200,674":imageUrl} 
					 className="card-img-top" alt="..."/>
					<div  className="card-body">
						<h5  className="card-title">{title}</h5>
						<p  className="card-text">{description}...</p>
						<a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
					</div>
				</div> 
			</div>
		)
	}
}

export default NewsItem
