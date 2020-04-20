import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';


const FormItem = Form.Item;

const CustomFormUpdate = () => {
    const onFinish = (values) => {
      const title = values.title;
      const content = values.content;
      console.log("Received values of form: ", title, content);
      return axios.put(`http://127.0.0.1:8000/api/${articleID}`, {
            title: values.title,
            content: values.content
        })
        .then(res => console.log(res))
        .catch(error => console.error(error));
    };

    return (
      <div>
        <Form onFinish={onFinish}>
          <FormItem name="title" label="Title">
            <Input type="text" placeholder="Enter a title here" />
          </FormItem>
          <FormItem name="content" label="Content">
            <Input type="text" placeholder="Enter some content ..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  };

export default CustomFormUpdate;