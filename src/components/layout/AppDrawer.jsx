import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../services/firebase/firebase.js";

export const AppDrawer = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100">
        <li>
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL}/>
              </div>
            </div>
            <div>
              <div>{user.displayName}</div>
              <div>{user.email}</div>
            </div>
          </div>
        </li>
        <div className="divider"/>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  )
}