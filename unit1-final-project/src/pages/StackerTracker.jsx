import './StackerTracker.css'; 

function StackerTracker({ stack }) {
  const recentItems = [...stack].slice(-3).reverse();

  return (
    <div className="stacker-tracker">
      <h2>My Stack</h2>

      <div className="recent-cards">
        {recentItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.metal}</h3>
            <p><strong>Weight:</strong> {item.weight} oz</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </div>
        ))}
      </div>

      <table className="stack-table">
        <thead>
          <tr>
            <th>Metal</th>
            <th>Weight (oz)</th>
            <th>Price ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {stack.map((item) => (
            <tr key={item.id}>
              <td>{item.metal}</td>
              <td>{item.weight}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StackerTracker;