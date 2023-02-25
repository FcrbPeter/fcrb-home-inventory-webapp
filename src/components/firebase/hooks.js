import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../services/firebase/firebase.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const useRedirectLogin = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useRedirectLogin', user);

    if(!user) {
      navigate('/');
    }
  }, [user]);
}