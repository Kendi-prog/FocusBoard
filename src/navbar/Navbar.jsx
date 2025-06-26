import { NavLink } from "react-router-dom";
import { ClipboardCheck } from "lucide-react";

const Navbar = ({ appTitle = "TaskAura" }) => {
  return (
    <nav className="bg-[#0f172a] text-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          {/*AppTitle and icon */}
          <span className="text-blue-400 text-2xl drop-shadow-glow">📋</span>
          <h1 className="text-xl font-bold text-blue-300 drop-shadow-md tracking-wide">
            {appTitle}
          </h1>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm uppercase font-semibold">
          {[
            { label: "Home", to: "/" },
            { label: "Todo", to: "/todo" },
            { label: "Users", to: "/users" },
            { label: "About", to: "/about" },
          ].map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `border-b-2 px-1 pb-1 transition-all duration-200 ${
                    isActive ? "text-blue-400 border-blue-400" : "border-transparent hover:text-blue-400"
                  }`
                }

              >
                {label}
              </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




