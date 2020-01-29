import React from 'react';
import './activePost.css';
import { Typography, Card, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';


const { Title } = Typography;
const RetrivePost = (id) => {
  fetch(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`)
    .then(response => response.json())
    .then(result => console.log(result));
}

const ActivePost = props => {
  RetrivePost(props);
  
  return (
    <div className="ActivePost">
      <Title>Выбранный пост</Title>

      <div className="nav">
        <Link to="/">
          <Button type="primary">
            <Icon type="left" />
            Назад
        </Button>
        </Link>
      </div>
      
      <Card title={props.title}
        extra={<Link to="/create">More</Link>}
        style={{ width: 300, marginBottom: 30 }}>
        <p>Card content</p>
        <p>Card content</p>
        <Button type="primary">
          <Icon type="delete" />
        </Button>
      </Card>
      
    </div>
    
  )
}

export default ActivePost;