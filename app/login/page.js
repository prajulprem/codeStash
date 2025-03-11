  "use client"
  import { auth, provider } from '@/lib/firebase'
  import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
  import { useRouter } from 'next/navigation'
  import React, { useEffect, useState } from 'react'

  const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPassowrd] = useState("");
    const [user, setUser] = useState(null);
    const router = useRouter("/dashboard");

    const handleSignin = async (method)=> {
    try{
        if (method === "google") {
      await signInWithPopup(auth, provider)
      }else if (method === "email") {
        await signInWithEmailAndPassword(auth, email, pass)
      }
    }catch(e){
      console.log(e)
    }

    useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
      })     
      return unsubcribe();
    }, []
  );

    }
    return (
      <div className='w-screen h-screen flex flex-col gap-4 p-4 items-center'>

        <h1 className='text-3xl font-bold'>Sign In to codeStash</h1>
        <div className='flex flex-col gap-4  items-center bg-white border-2 rounded-lg h-72 w-72 p-8 '>

        <strong className='text-xl'>CodeStash</strong>

        <form onSubmit={(e) =>{e.preventDefault(); handleSignin("email");}} className='flex flex-col gap-4 justify-center items-center w-full h-full'>
          <input type='email' placeholder='email' className='w-full h-9 p-2 border-2 rounded' onChange={(e) => setEmail(e.target.value)}></input>

          <input type='password' placeholder='password' className='w-full h-9 p-2 border-2 rounded' onChange={(e) => setPassowrd(e.target.value)}></input>

          <button type='submit' className=' font-medium border rounded-full w-full py-1 bg-blue-600 text-white'>SignIn</button>

          <button onClick={() => handleSignin("google")} className='w-full h-8 rounded-full font-bold bg-slate-200'>Google</button>
        </form>

      </div>

      </div>
    )
  }

  export default Login 