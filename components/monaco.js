import { Editor } from '@monaco-editor/react';
import React, { useState, useRef } from 'react';
import { db } from "../db/firebase";
import { addDoc, collection } from "firebase/firestore";
import { languages_entries, starter_code } from "@/constants";
import toast from 'react-hot-toast';



const Monaco = ( { code, setCode, language, setLanguage } ) => {
  const languageOptions = Object.entries(languages_entries);
  const editorRef = useRef();

  // states
  
  const [uploaderName, setuploaderName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState("");
  const [description, setDescription] = useState("");

  // mounnt and focus editor
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  // this handles the dropdown confirmation
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(starter_code[selectedLanguage]);
  };


  // snippet submission
  const submitSnippet = async () => {
    try {
      const docRef = await addDoc(collection(db, "snippet"), {
        name: uploaderName,
        language: language,
        code: code,
        description: description
      });
      console.log("Document written with ID: ", docRef.id);
      setModalIsOpen(false);
      toast.success("Thanks for the contribution! 🎉");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong 😢")
    }
  };

  return (
    <>

      { modalIsOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
              <div className="bg-neutral-800 p-6 rounded-lg w-96 text-white space-y-4">
                <h2 className="text-lg font-bold">Submit Code Snippet</h2>
                <input
                  type="text"
                  placeholder="Your name"
                  value={uploaderName}
                  onChange={(e) => setuploaderName(e.target.value)}
                  
                  className="w-full p-2 rounded bg-neutral-700 border border-white"
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 rounded bg-neutral-700 border border-white"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    onClick={submitSnippet}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
      )}
      <div className='flex justify-between p-2'>
        <div>
          <select
            className='text-white border border-white p-2 rounded-md hover:bg-neutral-600'
            value={language}
            onChange={handleLanguageChange}
          >
            {languageOptions.map(([key]) => (
              <option key={key}>{key}</option>
            ))}
          </select>
        </div>

        <div>
          <button
            className='text-white border border-white p-2 rounded-md hover:bg-neutral-600'
            onClick={() => setModalIsOpen(true)}
          >
            Submit
          </button>
        </div>
      </div>

      <Editor
        height="80vh"
        width="inherit"
        defaultLanguage="javascript"
        language={language}
        defaultValue="hi"
        value={code}
        onMount={onMount}
        theme='vs-dark'
        onChange={(value) => setCode(value)}
      />
    </>
  );
};

export default Monaco;
