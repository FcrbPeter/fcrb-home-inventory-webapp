import {useNavigate} from "react-router-dom";
import {auth} from "../services/firebase/firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect} from "react";

export const IndexPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('IndexPage', user);

    if(user) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [user]);

  return (<>Index</>)
}
