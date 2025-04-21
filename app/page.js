"use client"
import CodeEditorPage from "../components/codeEditorPage";
import { Toaster } from 'react-hot-toast';


export default function Home() {
  return (
    <>
    <Toaster position="top-right" />
    <CodeEditorPage />
    </>
  

  );
}
