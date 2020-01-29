import React, { Component } from 'react';
import Form from '../../components/form/form';
import './createPost.css';
import { Typography, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

class CreatePost extends Component {

  state = {
    id: undefined,
    title: undefined,
    body: undefined
  }

  addPost = async (event) => {
    event.preventDefault();

    const title = event.target.elements.title;
    const body = event.target.elements.body;

    const request = {
      method: 'POST',
      'Content-Type': 'application/json',
      data: {
        'title': title.value,
        'body': body.value
      }
    }

    const api_url = await fetch('https://bloggy-api.herokuapp.com/posts', request);
    const result = await api_url.json();
    console.log('result: ', result);


    // Не присваиваются title и body
    this.setState({
      id: result.id,
      title: result.title,
      body: result.body
    });

  }


  render() {
    return (
      <div className="createPost">
        <Title>Новый пост</Title>

        <Form method={this.addPost} />

        <Link to="/">
          <Button type="primary">
            <Icon type="left" />
            Назад
        </Button>
        </Link>
      </div>
    )
  }
}

export default CreatePost;