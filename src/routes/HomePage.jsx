import {auth} from "../services/firebase/firebase.js";
import {useAuthState, useSignOut} from "react-firebase-hooks/auth";
import {useRedirectLogin} from "../components/firebase/hooks.js";
import {AppBar} from "../components/layout/AppBar.jsx";
import {MainLayout} from "../components/layout/MainLayout.jsx";

export const HomePageLoader = async () => {
  return null;
}

export const HomePage = () => {
  const [user] = useAuthState(auth);
  useRedirectLogin();

  // return (
  //   <div>
  //     <img src={user?.photoURL} />
  //     <div>{user?.uid}</div>
  //     <div>{user?.displayName}</div>
  //     <div>{user?.email}</div>
  //     { user ? <button onClick={() => signOut()}>Logout</button> : <></> }
  //   </div>
  // )

  return (
    <MainLayout />
  )
}
