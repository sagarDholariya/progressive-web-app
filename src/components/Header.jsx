import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,NavLink } from "react-router-dom";
import { logOutHandler } from "../Store/actions";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.user?.id);
  
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" style={{padding: '20px'}}>
         <div>
         <Link class="navbar-brand" to="/todo-list"> Home</Link>
         <Link class="navbar-brand" to="/favourites"> Favourite</Link>
         </div>
         {isAuthenticated && <Link to="/sign-up">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => dispatch(logOutHandler())}
            >
              Log Out
            </button>
          </Link>}
      </nav>
    </div>
  );
}

export default Header;
