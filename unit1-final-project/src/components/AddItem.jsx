import { useState } from "react";
import "./AddItem.css";

function AddItem({ onAdd }) {
  const [metal, setMetal] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!metal || !weight || !price || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newItem = {
      id: Date.now(),
      metal,
      weight,
      price,
      date,
    };

    onAdd(newItem);

    setMetal("");
    setWeight("");
    setPrice("");
    setDate("");
  };

  return (
    <div className="form-preview-wrapper">
      <form onSubmit={handleSubmit} className="add-form">
        <h2>Add Item</h2>

        <label>
          Metal Type:
          <input
            type="text"
            value={metal}
            onChange={(e) => setMetal(e.target.value)}
          />
        </label>

        <label>
          Weight (oz):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <label>
          Purchase Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button type="submit">Add to Stack</button>
      </form>

      <div className="preview-card">
        <h3>Live Preview</h3>
        <p><strong>Metal:</strong> {metal || "—"}</p>
        <p><strong>Weight (oz):</strong> {weight || "—"}</p>
        <p><strong>Purchase Price:</strong> {price || "—"}</p>
        <p><strong>Date:</strong> {date || "—"}</p>
      </div>
    </div>
  );
}

export default AddItem;