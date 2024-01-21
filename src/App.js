import React, { Component } from 'react';
import './App.css';

const Copyright = (props) => {
  return <p>Application réalisée par &copy; {props.firstname} {props.lastname}</p>;
};

class Article extends React.Component {
  render() {
    return (
      <article>
        <h2>
          {this.props.firstname} {this.props.lastname}
        </h2>  
        <img src={`https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/30/posts/31334/image/${this.props.src}.jpg`}
          alt={`${this.props.firstname} ${this.props.lastname}`}
          title={`${this.props.firstname} ${this.props.lastname}`}
        />
        <p>{this.props.tags}</p>
      </article>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>5 Personnes qui ont façonné l'industrie du web</h1>
      </header>
      <main>
        <Article lastname="Berners-Lee" firstname="Tim" tags="HTML, World Wide Web" src="tim" />
        <Article lastname="Eich" firstname="Brendan" tags="JavaScript" src="brendan" />
        <Article lastname="Resig" firstname="John" tags="jQuery" src="john" />
        <Article lastname="Marcotte" firstname="Ethan" tags="Responsive Web Design" src="ethan" />
        <Article lastname="Verou" firstname="Lea" tags="Web design, CSS secrets" src="lea" />
      </main>
      <footer className="App-footer">
        <Copyright lastname="Doe" firstname="John" />
      </footer>
    </div>
  );
}

export default App;