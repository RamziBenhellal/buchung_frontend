import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div>
      <h1>Admin</h1>
      <div>
        <nav>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/admin/zweck/index">Zweck</a>{" "}
            </li>
            <li className="nav-item">
              <a href="/admin/termin/index">Termin</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
