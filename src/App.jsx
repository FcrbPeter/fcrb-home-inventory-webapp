import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./services/firebase/firebase.js";

function App() {
  const [_, loading] = useAuthState(auth);

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
