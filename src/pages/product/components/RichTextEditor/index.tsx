import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

interface RichTextEditorProps {
  detail?:string,
  ref?: () => void,
}

const RichTextEditor: React.FC<RichTextEditorProps> = (props) => {
  let editorState:any = null;
  const [state, setState] = useState<any>({
    editorState: ''
  });
  const { detail } = props;
  if(detail){
    const contentBlock = htmlToDraft(detail);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    editorState = EditorState.createWithContent(contentState);
  }else{
    editorState = EditorState.createEmpty(); // 创建一个没有内容的编辑对象
  }
  setState({
    editorState
  });
  const handleEditorChange:any = (editorState:string) => {
    setState({
      editorState
    });
  };
  const getDetail = () => {
    const { editorState } = state;
    // 返回输入的html格式的文本
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }
  return (
    <Editor
      editorState={editorState}
      editorStyle={{
        border: '1px solid black',
        minHeight: 200,
        paddingLeft: 10
      }}
      onEditorStateChange={handleEditorChange}
    />
  );
}

export default RichTextEditor;
