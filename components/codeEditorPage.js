import React, {useState} from 'react'
import Monaco from './monaco'
import Sidebar from './sidebar'
import { starter_code } from '@/constants'


const CodeEditorPage = () => {
    const [selectedSnippet, setSelectedSnippet] = useState(null);
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState(starter_code[language]);

    const handleSnippetClick = (snippet) => {
      setLanguage(snippet.language);
      setCode(snippet.code);
      setSelectedSnippet(snippet);
    }

    const handleNewSnippet = () => {
      setCode("");
      setLanguage("javascript");
      setSelectedSnippet(null);
    }
  return (
    <>
    <div className="flex font-sans">
      {/* Sidebar */}
       <Sidebar
        onSnippetClick={handleSnippetClick}
        onNewSnippet={handleNewSnippet}
       />  

      <div className="h-screen bg-neutral-800 flex-1 p-4">
         <Monaco code={code}
          setCode={setCode}
          language={language}
          setLanguage={setLanguage}
        />
         
      </div>
    </div>
    </>
  )
}

export default CodeEditorPage