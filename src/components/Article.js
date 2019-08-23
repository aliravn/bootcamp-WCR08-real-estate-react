import React from "react";
import './Article.css';

const Article = (props)=> {
	return (
		<article>
			<img className="article-image" src={props.image} alt="" />
			<span className="price-tag">$5000</span>
			<p className="article-headline">Luxury flat in city center</p>
			<p className="article-text">2-bed, 2 bath, 1 kitchen (150sq.m.)</p>
		</article>
	);
} 

export default Article;