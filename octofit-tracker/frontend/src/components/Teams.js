import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/teams/') // Updated to use relative path for Django REST API endpoint
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
