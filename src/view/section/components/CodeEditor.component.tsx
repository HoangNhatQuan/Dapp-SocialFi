import React, { useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import axios from 'axios'
import { Button } from 'antd'

type CodeEditorModels = {
  onChangeCode: (value: string) => void
}

// { onChange, language, code, theme }
function CodeEditorComponent(props: CodeEditorModels) {
  const { onChangeCode } = props

  function handleEditorChange(value: any, event: any) {
    onChangeCode(value)
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    console.log('onMount: the editor instance:', editor)
    console.log('onMount: the monaco instance:', monaco)
  }

  function handleEditorWillMount(monaco: any) {
    console.log('beforeMount: the monaco instance:', monaco)
  }

  function handleEditorValidation(markers: any) {
    console.log('markers', markers)
    markers.forEach((marker: any) => console.log('onValidate:', marker.message))
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height={`90%`}
        width={`100%`}
        theme="vs-dark"
        language={'javascript'}
        defaultLanguage="javascript"
        defaultValue="// Todo"
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </div>
  )
}

export default CodeEditorComponent
