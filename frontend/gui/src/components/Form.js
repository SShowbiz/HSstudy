import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';


const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (values, requestType, articleID) => {
        const title = values.title;
        const content = values.content;
        console.log(title, content);

        switch( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => {console.log(res); window.location.reload();})
                .catch(error => console.error(error));

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => {console.log(res); window.location.reload();})
                .catch(error => console.error(error));
        }
    }
    render() {
        return (
            <div>
                <Form onFinish={(values) => this.handleFormSubmit(values, this.props.requestType, this.props.articleID)}>
                    <br/>
                    <FormItem label = "Title" name="title">
                        <Input placeholder = "Put a title here"/> 
                    </FormItem> 
                    <FormItem label = "Content" name="content" >
                        <Input placeholder = "Put a content here"/> 
                    </FormItem>
                    <FormItem>
                        <Button type = "primary" htmlType="submit" >{this.props.butnText}</Button>
                    </FormItem>
                </Form>    
            </div>
        );
    }
}

export default CustomForm;