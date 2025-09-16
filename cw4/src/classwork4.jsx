import React, { useState, useRef, useCallback } from "react";

function Classwork4() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const lastNameRef = useRef(null);

  const focusLastName = () => {
    lastNameRef.current?.focus();
  };

  const showData = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          ref={lastNameRef}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={focusLastName}>Focus Last Name</button>
        <button onClick={showData} style={{ marginLeft: "10px" }}>
          Show Data
        </button>
      </div>
    </div>
  );
}

export default Classwork4;
