// import { useThemeContext } from "../../contexts/ThemeContext";
// import "./Theme.css"; // Import external CSS for styling

// const Theme = () => {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button className="themeChangeBtn" onClick={toggleTheme}>
//       {theme === "light" ? (
//         <>
//           <i className="bi bi-brightness-high-fill"></i>
//           <span>{theme}</span>
//         </>
//       ) : (
//         <>
//           <i className="bi bi-moon-stars-fill"></i>
//           <span>{theme}</span>
//         </>
//       )}
//     </button>
//   );
// };

// export default Theme;





// components/Theme/Theme.js
import { useThemeContext } from "../../contexts/ThemeContext";
import "./theme.css";

const Theme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn position-fixed top-50 end-0 translate-middle-y"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"}`} />
      <span className="ms-2">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
};

export default Theme;