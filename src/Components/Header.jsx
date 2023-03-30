import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 oxanium font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost">
          <FaGraduationCap className="text-violet-700 text-5xl" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className=" flex items-center gap-3">
          {user?.uid ? (
            <>
              <li>{user?.displayName}</li>
              <li>
                {user?.photoURL ? (
                  <img
                    style={{ width: "60px", height: "60px" }}
                    className="rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </li>
              <li>
                <Link onClick={handleLogout} className="">
                  Log out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="px-6">
                <Link to="/login" className="">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
