import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav>
<Link to="/">Dashboard</Link> |{' '}
<Link to="/add-project">Add Project</Link> |{' '}
<Link to="/add-task">Add Task</Link>
</nav>
);
}