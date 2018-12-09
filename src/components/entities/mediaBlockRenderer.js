import React from 'react'
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'

export const mediaBlockRenderer = (block) => {
    if (block.getType() === "atomic") {
        return {
            component: Media,
            editable: false,
            props: { foo: 'bar', },
        }
    }
}