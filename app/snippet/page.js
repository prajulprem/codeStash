"use client"
import { db } from "@/lib/firebase"; 
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "@/context/authContext";

export default function SnippetForm() {
    const { user } = useAuth();
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !code.trim()){
            alert("dont try to play the fool with me nikesh!!");
            return;
        }

        if(!user){
            alert("User not logged in!");
            return;
        }

        try{
            await addDoc(collection(db, "snippets"),{ 
            title,
            code,
            language,
            userId: user.uid,
            createdAt: serverTimestamp(),
        });
        setTitle("");
        setCode("");
        alert("snippet saved successfully!")

        }
        catch (e) {
            console.error("error adding snippet:", e);
            alert("Failed to save the snippet!")
        }
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-sm">
            <input className="border p-2 rounded" type="text" placeholder="code title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

            <input className="border p-2 rounded" type="textarea" placeholder="type your code..." value={code} onChange={(e) => setCode(e.target.value)} required/>

            <select className="border p-2 rounded" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="Javascript">Javascript</option>
                <option value="Java">Java</option>
                <option value="Cpp">C++</option>
                <option value="Python">Python</option>
            </select>
            <button type="submit" className="text-white p-2 border bg-blue-500 rounded w-20">submit</button>
        </form>
    )
}