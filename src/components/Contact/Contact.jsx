import { Link, Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <nav>
        <Link to="">Email</Link>
        <Link to="linkedin">Linkedin</Link>
        <Link to="resume">Resume</Link>
      </nav>
      <Outlet />
    </div>
  );
}
