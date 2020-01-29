import React, { Component } from 'react';
import './mainView.css';
import Posts from '../posts/posts';
import {Link} from 'react-router-dom';
import { Typography , Button }  from 'antd';

const { Title } = Typography;
export default class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <div className="Posts">
          <Title>Главная страница</Title>
          <div className="nav">
            <Link to="/create">
              <Button type="primary">Создать новый пост</Button>
            </Link>
          </div>
          
          <Posts />
        </div>
      </div>
    )
  }
}