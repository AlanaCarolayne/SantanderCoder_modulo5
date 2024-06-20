import React from "react";
import "./styles.css";
export class Article extends React.Component {
  render() {

    return (
      <article id="article">
        <img src={this.props.img} alt={this.props.title} />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repudiandae.
          </p>
        </div>
      </article>
    );
  }
}
