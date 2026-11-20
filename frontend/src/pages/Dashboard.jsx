
import { useState } from 'react';
import StatCard from '../components/StatCard';

function Dashboard() {

  const [applications, setApplications] = useState(0);

  function addApplication() {
    setApplications(previousCount => previousCount + 1);
  }

  function removeApplication() {
    setApplications(previousCount =>
      Math.max(0, previousCount - 1)
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-zinc-400 mt-2">
        Overview of your job search activity.
      </p>

      <div className="mt-6">
        <StatCard
          title="Applications"
          value={applications}
          description="Total applications submitted"
        />
      </div>

      <div className="flex gap-3">

        <button
          onClick={addApplication}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg"
        >
          Add Application
        </button>

        <button
          onClick={removeApplication}
          disabled={applications === 0}
          className="mt-6 bg-red-600 hover:bg-red-700 disabled:opacity-40 px-5 py-3 rounded-lg"
        >
          Delete Application
        </button>

      </div>

    </div>
  );
}

export default Dashboard;
