
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import Companies from './pages/Companies';
import Contacts from './pages/Contacts';
import FollowUps from './pages/FollowUps';

function App() {

  return (
    <BrowserRouter>

      <div className="flex min-h-screen bg-zinc-950 text-white">

        <Sidebar />

        <main className="flex-1 p-8">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/applications" element={<Applications />} />

            <Route path="/companies" element={<Companies />} />

            <Route path="/contacts" element={<Contacts />} />

            <Route path="/follow-ups" element={<FollowUps />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;
