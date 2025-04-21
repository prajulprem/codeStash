import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../db/firebase';

const Sidebar = ( {onSnippetClick, onNewSnippet} ) => {
   
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
   const fetchSnippets = async () => {
      const querySnapshot = await getDocs(collection(db, "snippet"));
      const docs = [];
      querySnapshot.forEach((doc) => {
         docs.push({
            id:doc.id, 
            ...doc.data()
         });
      });
      setSnippets(docs);
   }
   console.log(snippets)

   fetchSnippets()
  },[]);


  return (
     <div className="invisible w-0 md:visible md:h-screen md:w-[250px] ">
        <div className="p-2 bg-zinc-900 h-full w-[250px] text-white">

          <div className="p-1.5 mb-2 border border-gray-600 rounded-md flex gap-3 items-center hover:bg-zinc-600" onClick={onNewSnippet}>
            <div className="text-2xl font-light mb-[5px] ml-2"> + </div>
            <div className="text-sm">New Snippet</div>
          </div>

          <div className="p-2 h-3/4 flex flex-col justify-bw overflow-y-hidden gap-2">
          {snippets.map((snippet) => (
               <div key={snippet.id} className="p-2 rounded-md flex items-center text-sm hover:bg-zinc-800 md:cursor-pointer" onClick={() => onSnippetClick(snippet)}>
                {snippet.name +" - " +snippet.description || "unnamed snippet"}
              </div>
          ))}
              
             
          </div>

          <div className="p-2 border-t-[1px] border-gray-500 text-sm flex flex-col justify-end h-30">

            <div className="p-2 rounded-md flex items-center hover:bg-zinc-800 md:cursor-pointer">
                 <a href='https://github.com/prajulprem/codeStash' target="_blank">FAQs and Updates</a>
              </div>
              <div className="p-2 rounded-md flex items-center hover:bg-zinc-800 md:cursor-pointer">
                 Logout
              </div>

          </div>


        </div>

      </div>
  )
}

export default Sidebar