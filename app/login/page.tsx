"use client";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Login successful!");
    } catch (e: any) {
      setMsg("❌ " + e.message);
    }
  };

  const google = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setMsg("✅ Google login successful!");
    } catch (e: any) {
      setMsg("❌ " + e.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark text-white">
      <h1 className="text-2xl font-bold mb-4">Habib YT Login</h1>
      <form onSubmit={login} className="bg-white/10 p-6 rounded-xl w-80 space-y-3">
        <input className="w-full bg-black/30 p-2 rounded" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full bg-black/30 p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="w-full bg-primary py-2 rounded font-semibold">Login</button>
        <button type="button" onClick={google} className="w-full bg-blue-600 py-2 rounded font-semibold">Login with Google</button>
      </form>
      <p className="text-sm text-gray-400 mt-3">{msg}</p>
    </div>
  );
}
