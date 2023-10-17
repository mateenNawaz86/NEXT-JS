import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  value: string;
}

export default function CKeditor({ onChange, editorLoaded, value }: CKeditorProps) {
  const editorRef = useRef();

  useEffect(() => {
    if (editorLoaded) {
      ClassicEditor.create(editorRef.current, {
        // Your CKEditor configuration options here
      })
        .then((editor) => {
          editor.setData(value);

          editor.model.document.on("change:data", () => {
            const data = editor.getData();
            onChange(data);
          });
        })
        .catch((error) => {
          console.error("Error initializing CKEditor:", error);
        });
    }
  }, [editorLoaded, onChange, value]);

  return <div ref={editorRef}></div>;
}
