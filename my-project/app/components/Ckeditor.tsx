import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import "ckbox/dist/styles/themes/lark.css";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  value: string;
}

export default function CKeditor({
  onChange,
  editorLoaded,
  value,
}: CKeditorProps) {
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
            ],
            // Configure the language here
            language: "en",
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
