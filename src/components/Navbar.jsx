import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          KRISSFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/mon-compte">
            <button className="text-white pr-4">Compte</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div>
          <Link to="/connexion">
            <button className="text-white pr-4">Se connecter</button>
          </Link>
          <Link to="/inscription">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              S'inscrire
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
