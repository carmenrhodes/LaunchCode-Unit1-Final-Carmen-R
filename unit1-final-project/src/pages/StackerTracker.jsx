import './StackerTracker.css';

function StackerTracker({ stack, onDelete, onEdit, editingItem, setEditingItem, onUpdate }) {
  const recentItems = [...stack].slice(-3).reverse();

  return (
    <div className="stacker-tracker">
      <h2>StackerTracker</h2>

      {/* Top 3 Cards */}
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

      {/* Table Display */}
      <table className="stack-table">
        <thead>
          <tr>
            <th>Metal</th>
            <th>Weight (oz)</th>
            <th>Price ($)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {stack.map((item) => {
            const isEditing = editingItem && editingItem.id === item.id;

            return (
              <tr key={item.id}>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editingItem.metal}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, metal: e.target.value })
                      }
                    />
                  ) : (
                    item.metal
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editingItem.weight}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, weight: e.target.value })
                      }
                    />
                  ) : (
                    item.weight
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editingItem.price}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, price: e.target.value })
                      }
                    />
                  ) : (
                    `$${item.price}`
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editingItem.date}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, date: e.target.value })
                      }
                    />
                  ) : (
                    item.date
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <>
                      <button
                        className="update-button"
                        onClick={() => onUpdate(editingItem)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-button"
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-button"
                        onClick={() => onEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StackerTracker;