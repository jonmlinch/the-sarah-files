import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import BoldMark from './BoldMark'

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'My first paragraph!'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})
class TextEditor extends Component {
    state = {
        value: initialValue,
    }

    //On change, update the app's React state with new editor value
    handleEditing = ({ value }) => {
        this.setState({ value })
    }

    handleKeyPress = (e, change) => {
        console.log(e.key)
        //User needs to push control to 'begin' process, if no control the no action
        if(!e.ctrlKey) {return}
        e.preventDefault()

        //Decide what to do based on key code
        switch (e.key) {
            case 'b': {
                change.addMark('bold')
                return true
            }
        }
    }

    render() {
        return (
            <Editor 
            value={this.state.value} 
            onChange={this.handleEditing} 
            onKeyDown={this.handleKeyPress}
            />
        )
    }
}

export default TextEditor;