
import { useState } from 'react';

function Applications() {

  // Store all applications
  const [applications, setApplications] = useState([]);

  // Store form input values
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [source, setSource] = useState('LinkedIn');
  const [status, setStatus] = useState('Applied');

  // Add new application
  function addApplication(event) {

    event.preventDefault();

    const newApplication = {
      id: Date.now(),
      company: company,
      position: position,
      source: source,
      status: status
    };

    setApplications(previousApplications => [
      ...previousApplications,
      newApplication
    ]);

    // Clear form
    setCompany('');
    setPosition('');
    setSource('LinkedIn');
    setStatus('Applied');
  }

  // Delete application
  function deleteApplication(id) {

    const updatedApplications = applications.filter(
      application => application.id !== id
    );

    setApplications(updatedApplications);
  }

  return (
    <div>

      <h1 className="text-3xl font-bold">
        Applications
      </h1>

      <p className="text-zinc-400 mt-2">
        Track your job applications.
      </p>

      {/* Application Form */}

      <form
        onSubmit={addApplication}
        className="mt-8 bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
      >

        <h2 className="text-xl font-semibold mb-5">
          Add New Application
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Company name"
            value={company}
            onChange={event => setCompany(event.target.value)}
            required
            className="bg-zinc-800 p-3 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Job position"
            value={position}
            onChange={event => setPosition(event.target.value)}
            required
            className="bg-zinc-800 p-3 rounded-lg outline-none"
          />

          <select
            value={source}
            onChange={event => setSource(event.target.value)}
            className="bg-zinc-800 p-3 rounded-lg"
          >
            <option value="LinkedIn">LinkedIn</option>
            <option value="Company Website">Company Website</option>
            <option value="Cold Email">Cold Email</option>
            <option value="Referral">Referral</option>
            <option value="Naukri">Naukri</option>
          </select>

          <select
            value={status}
            onChange={event => setStatus(event.target.value)}
            className="bg-zinc-800 p-3 rounded-lg"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

        <button
          type="submit"
          className="mt-5 bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg"
        >
          Add Application
        </button>

      </form>

      {/* Application List */}

      <div className="mt-8">

        <h2 className="text-xl font-semibold mb-4">
          Your Applications ({applications.length})
        </h2>

        <div className="space-y-3">

          {applications.map(application => (

            <div
              key={application.id}
              className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex justify-between items-center"
            >

              <div>
                <h3 className="font-semibold">
                  {application.company}
                </h3>

                <p className="text-sm text-zinc-400">
                  {application.position}
                </p>

                <p className="text-xs text-zinc-500 mt-2">
                  {application.source} · {application.status}
                </p>
              </div>

              <button
                onClick={() => deleteApplication(application.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Applications;
