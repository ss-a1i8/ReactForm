import React from 'react';


const BusinessDashboard = () => {
  const businesses = [
    { id: '3478067', date: '03-11-2019', name: 'Cosonas', owner: 'Salif', about: 'Cosonas strives to innovate and transform businesses through advanced solutions. We believe in leveraging data and AI to enhance business ecosystems, driving innovation, efficiency, and customer value.', location: 'Hackney' },
    { id: '2445609', date: '06-11-2023', name: 'Amazon', owner: 'Jeff Bezos', about: 'Description B', location: 'Liverpool St' },
    { id: '5600789', date: '15-11-1999', name: 'Tastys', owner: 'Ali Sheer Khan', about: 'Description C', location: 'Clapton Pond' },
  ];

  return (
    <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
      <table className="business-table">
        <thead>
          <tr>
            <th>ID No.</th>
            <th>Date</th>
            <th>Business Name</th>
            <th>Owner</th>
            <th>About</th>
            <th>Location</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.id}</td>
              <td>{business.date}</td>
              <td>{business.name}</td>
              <td>{business.owner}</td>
              <td>{business.about}</td>
              <td>{business.location}</td>
              <td className="delete-cell">
                <button className="delete-button">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessDashboard;