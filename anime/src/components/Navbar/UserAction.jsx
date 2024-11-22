import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-4 justify-between">
      {user ? (
        <Link
          href="/users/dashboard"
          className="bg-color-secondary text-color-primary rounded-md py-1 px-8"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-primary rounded-md py-1 px-8"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
