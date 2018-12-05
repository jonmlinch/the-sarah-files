import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import BoldMark from './BoldMark'
import Italics from './Italics'

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
                change.toggleMark('bold');
                return true;
            }
            case 'i': {
                change.toggleMark('italic');
            }

            default: {
                return;
            }
        }
    }

    handleRenderMark = props => {
        switch (props.mark.type) {
            case 'bold':
            return <BoldMark {...props} />

            case 'italic':
            return <Italics {...props} />

            default: {
                return;
            }
        }
    }

    render() {
        return (
            <Editor 
            value={this.state.value} 
            onChange={this.handleEditing} 
            onKeyDown={this.handleKeyPress}
            renderMark={this.handleRenderMark}
            />
        )
    }
}

export default TextEditor;