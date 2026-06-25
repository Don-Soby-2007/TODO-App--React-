import { Plus } from "lucide-react";

function Header() {
  return (
    <div>
      <header>
        <h2 className="app-title">ToDo App</h2>
        <button type="button" className="create-btn">
          <h6 className="btn-text">Create</h6>
          <Plus />
        </button>
        <nav className="navbar">
          <div className="navbar-links"></div>
        </nav>
      </header>
    </div>
  );
}

export default Header