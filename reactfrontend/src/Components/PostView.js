import React, { Component } from 'react'

const dummy_prop = {
    title: 'test title',
    content: 'text for test'
}

export default class PostView extends Component {
    render() {
        const {id,title,content} = this.props
        return (
            <div>
                {id}
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}
