import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

import Icon from 'react-icons-kit'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { underline } from 'react-icons-kit/feather/underline'



class PageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command) //Passing my command to the RichUtils module and it's handleKeyCommand method
        //If the state is updated by the RichUtils then we change the state
        if (newState) {
            this.onChange(newState)
            return 'handled'
        }

        return 'not-handled'
    }

    boldOnClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }

    italicOnCLick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }

    underlineOnClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
    }

    render() {
        return (
            <div className="editorContainer">
                <button onClick={ this.boldOnClick }>
                    <Icon icon={ bold } />
                </button>
                <button onClick={ this.italicOnClick }>
                    <Icon icon={ italic } />
                </button>
                <button onClick={ this.underlineOnClick }>
                    <Icon icon={ underline } />
                </button>
                <div className="editors">
                    <Editor 
                        editorState={ this.state.editorState } 
                        onChange={ this.onChange }
                        handleKeyCommand={ this.handleKeyCommand }
                        />
                </div>
            </div>
        )
    }
}

export default PageContainer