// app/editor/page.tsx
"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CKEditor = dynamic(() => import("../components/Ckeditor"), { ssr: false });

export default function Index() {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <CKEditor
        editorLoaded={editorLoaded}
        value={data}
        onChange={(data: string) => {
          setData(data);
        }}
      />
      {JSON.stringify(data)}
    </div>
  );
}
