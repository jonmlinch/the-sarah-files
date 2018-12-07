import React, { Component } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'

import createHighlightPlugin from './plugins/highlightPlugin'
import addLinkPlugin from './plugins/addLinkPlugin'


const highlightPlugin = createHighlightPlugin()

class PageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.plugins = [
            highlightPlugin,
            addLinkPlugin,
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
    
    onAddLink = () => {
        const editorState = this.state.editorState;
        const selection = editorState.getSelection();
        const link = window.prompt('Paste your link -')

        if (!link) {
            this.onChange(
                RichUtils.toggleLink(editorState, selection, null)
            );
            return 'handled';
        }

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", { url: link });
        const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        this.onChange(
            RichUtils.toggleLink(newEditorState, selection, entityKey)
        )
    }

	onHighlight = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT")
		);
	};

    

    render() {
        return (
            <div className="editorContainer">
                <button className="inline styleButton" id="underline" onClick={this.underlineOnClick}>
					U
				</button>
				<button className="inline styleButton" id="bold" onClick={this.boldOnClick}>
					<b>B</b>
				</button>
				<button className="inline styleButton" id="italic" onClick={this.italicOnClick}>
					<em>I</em>
				</button>
				<button className="inline styleButton strikethrough" onClick={this.strikeThroughOnClick}>
					abc
				</button>
				<button className="inline styleButton highlight" onClick={this.onHighlight}>
					<span style={{ background: "yellow", padding: "0.3em" }}>H</span>
				</button>
                <button id="link_url" onClick={this.onAddLink} className="add-link">
					<i className="material-icons">attach_file</i>
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