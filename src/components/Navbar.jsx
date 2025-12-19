import { Link } from 'react-router-dom';


export default function Navbar({ darkMode, setDarkMode }) {
return (
<nav>
<Link to="/">Dashboard</Link> |{' '}
<Link to="/add-project">Add Project</Link> |{' '}
<Link to="/add-task">Add Task</Link>


<button
   className="dark-toggle"
   onClick={() => setDarkMode(!darkMode)}
>
   {darkMode ? "☀ Light" : "🌙 Dark"}
</button>
</nav>
);
}