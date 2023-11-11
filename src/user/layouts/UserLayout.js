import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <div>
      <h1>User </h1>
      <p>This is the user layout</p>
      <Outlet />
    </div>
  );
}
