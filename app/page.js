"use client";
import Dummy from "@/components/dummy";
import { AuthProvider } from "@/context/authContext"; // ✅ Ensure this is correct

export default function Home() {
  return (
    <AuthProvider>  {/* ✅ Wrap the app in AuthProvider */}
      <Dummy /> {/* ✅ Show login form on homepage */}
    </AuthProvider>
  );
}
