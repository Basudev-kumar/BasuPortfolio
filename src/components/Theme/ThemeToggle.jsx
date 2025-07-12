import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn btn position-fixed top-50 end-0 translate-middle-y rounded-pill px-3 py-2 d-flex align-items-center shadow"
      style={{ zIndex: 1050, transition: "background 0.3s ease, transform 0.3s ease" }}
      aria-label="Toggle Theme"
    >
      <i className={`bi ${theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"} fs-5 me-2`} 
        style={{ transition: "transform 0.3s ease", transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)" }}>
      </i>
      <span className="fw-bold text-capitalize">{theme}</span>
    </button>
  );
}
