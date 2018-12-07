import React, { Component } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'

import createHighlightPlugin from './plugins/highlightPlugin'

// import Icon from 'react-icons-kit'
// import { bold } from 'react-icons-kit/feather/bold'
// import { italic } from 'react-icons-kit/feather/italic'
// import { underline } from 'react-icons-kit/feather/underline'

const highlightPlugin = createHighlightPlugin()

class PageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.plugins = [
            highlightPlugin,
        ]
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
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
        );
    }

    italicOnClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
    };
    
    underlineOnClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
        );
    }

	strikeThroughOnClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
		);
	};

	onHighlight = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT")
		);
	};

    

    render() {
        return (
            <div className="editorContainer">
                <button className="underline" onClick={this.underlineOnClick}>
					U
				</button>
				<button className="bold" onClick={this.boldOnClick}>
					<b>B</b>
				</button>
				<button className="italic" onClick={this.italicOnClick}>
					<em>I</em>
				</button>
				<button className="strikethrough" onClick={this.strikeThroughOnClick}>
					abc
				</button>
				<button className="highlight" onClick={this.onHighlight}>
					<span style={{ background: "yellow", padding: "0.3em" }}>H</span>
				</button>
                <div className="editors">
                    <Editor 
                        editorState={ this.state.editorState } 
                        onChange={ this.onChange }
                        plugins={ this.plugins }
                        handleKeyCommand={ this.handleKeyCommand }
                        />
                </div>
            </div>
        )
    }
}

export default PageContainer