
import { NavLink } from 'react-router-dom';

function Sidebar() {

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Applications', path: '/applications' },
    { name: 'Companies', path: '/companies' },
    { name: 'Contacts', path: '/contacts' },
    { name: 'Follow-ups', path: '/follow-ups' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-6">

      <h1 className="text-2xl font-bold text-indigo-400 mb-10">
        CareerFlow
      </h1>

      <nav className="space-y-2">

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`
            }
          >
            {link.name}
          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;
