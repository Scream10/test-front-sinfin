import React, { Component } from "react";

class Home extends Component {
  state = {
    loading: true,
    post: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({post: result, loading: false})
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Nos dernières publications :</h1>
        <hr/>
        {this.state.loading ? <div>Chargement...</div> : 
          <ul>
            {this.state.post.slice(0, 6).map(post => (
              <li key={post.id}>
                <div className="card card-body mb-3">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              </li>
            ))}
          </ul>
        }
        <button className="btn btn-primary">Charger plus</button>
      </div>
    );
  }
}

export default Home;