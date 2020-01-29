import React, { Component } from "react";
import './form.css';
import { Input, Button } from 'antd';

const { TextArea } = Input;

class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.method}>
        <Input type="text" name="title" placeholder="Тема" />
        <TextArea rows={4} type="text" name="body" placeholder="Тест статьи" />
        <Button>Опубликовать</Button>
      </form>
    )
  }
}

export default Form;