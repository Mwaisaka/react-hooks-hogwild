import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [hogName, setHogName] = useState("");
  const [hogSpecialty, setHogSpecialty] = useState("");
  
  // Add more fields as needed

  function handleAddHog() {
    // Perform validation if needed
    const newHog = {
      name: hogName,
      specialty: hogSpecialty,
      // Add more fields as needed
    };

    // Pass the new hog to the parent component
    onAddHog(newHog);

    // Reset form fields
    setHogName("");
    setHogSpecialty("");
    // Reset more fields as needed
  }

  return (
    <div className="ui form">
      <div className="fields">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={hogName}
            onChange={(e) => setHogName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Specialty</label>
          <input
            type="text"
            value={hogSpecialty}
            onChange={(e) => setHogSpecialty(e.target.value)}
          />
        </div>
        {/* Add more fields as needed */}
        <button className="ui button" onClick={handleAddHog}>
          Add Hog
        </button>
      </div>
    </div>
  );
}

export default AddHogForm;
