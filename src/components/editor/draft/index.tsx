import { Editor, EditorProps } from 'react-draft-wysiwyg';
import { BoxProps } from '@mui/material';
//
import { toolbarFull, toolbarSimple } from './DraftEditorToolbar';
import DraftEditorStyle from './DraftEditorStyle';
import { EditorState, convertToRaw } from 'draft-js';
import { TProductCreate } from 'types/product';
import { useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

export interface DEditorProps extends EditorProps {
  simple?: boolean;
  error?: boolean;
  sx?: BoxProps;
}

export default function DraftEditor({
  simple = false,
  error,
  sx,
  editorState,
  ...other
}: DEditorProps) {
  const { setValue } = useFormContext<TProductCreate>();
  const getEditorStateValue = (editorState: EditorState | undefined) => {
    if (!editorState) return '';
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map((block) => (!block.text.trim() && '\n') || block.text).join('\n');
    return value;
  };

  return (
    <DraftEditorStyle
      sx={{
        ...(error && {
          border: (theme) => `solid 1px ${theme.palette.error.main}`
        }),
        ...sx
      }}
    >
      <Editor
        toolbar={simple ? toolbarSimple : toolbarFull}
        placeholder="Write something awesome..."
        onChange={() => setValue('description', `${getEditorStateValue(editorState)}`)}
        {...other}
        editorState={editorState}
      />
    </DraftEditorStyle>
  );
}
