import React from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';



const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Articles = (props) => {
    return (

    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 8,
        }}
        dataSource={props.data}
        renderItem={item => (
            <List.Item
                key={item.title}
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`/${item.id}`}>{item.title}</a>}
                description={item.description}
                />
                {item.content.slice(0,item.content.indexOf(".")+1)}
                {"..."}
            </List.Item>
        )}
    />
    )
}

export default Articles;