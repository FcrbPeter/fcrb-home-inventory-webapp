import { auth } from '../services/firebase/firebase';
import { GoogleSignInButton } from "../components/firebase/GoogleSignInButton.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginPageLoader = async () => {
  return null;
}

export const LoginPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Home Inventory</h1>
      {!user && <GoogleSignInButton />}
    </div>
  );
}
