import Link from "next/link";
import {authUserSession} from "@/libs/auth-libs";
import {FaHome, FaSignOutAlt} from "react-icons/fa";
import {MdDashboard} from "react-icons/md";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-4 items-center">
      {user ? (
        <Link
          href="/users/dashboard"
          className="flex items-center bg-white text-gray-900 rounded-md py-2 px-6 hover:bg-opacity-80 transition-all gap-2"
        >
          <FaHome size={20} /> {/* Ikon Dashboard */}
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="flex items-center bg-pink-800 text-gray-200 rounded-md py-2 px-6 hover:bg-opacity-80 transition-all gap-2"
      >
        <FaSignOutAlt size={20} /> {/* Ikon Logout */}
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
