import React, { Component } from 'react';
import './posts.css';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'antd';
import BloggyService from '../../actions/bloggyService';

class Posts extends Component {
  BloggyService = new BloggyService();

  state = {
    posts: [],
    error: false
  }
  
  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.BloggyService.getAllPosts()
      .then(this.onPostsLoaded) // обрабатываем промис, если работает
      .catch(this.onError);     // обрабатываем промис, если ошибка
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true
    });
  };

  onDeletePost = event => {
    const id = event.target.dataset.postId;
    console.log(id);
    
    this.BloggyService.deletePost(id);
  };
  


  renderItems(arr) {
    return arr.map((item) => {
      console.log(item);
      
      const { id, title, body } = item;

      return (
        <div key={id} className="post">
          <Card
            title={title} 
            extra={
              <Link to="/post">
                <p>More</p>
              </Link>
            }
            style={{ width: 600, marginBottom: 30 }}>
            <p>{body}</p>
            <Button data-post-id={id} type="primary" onClick={this.onDeletePost}>
              <Icon type="delete" />
            </Button>
          </Card>
        </div>
      )
    })
  }

  render() {
    const { error, posts } = this.state;

    if (error) {
      return (
        <div>Error</div>
      )
    }

    const items = this.renderItems(posts);

    return (
      <div className="Post">
        <div className="wrapper">
          {items}          
        </div>
      </div>
    )
  }
}

export default Posts;