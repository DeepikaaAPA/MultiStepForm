

export function UserForm({ firstName, lastName, age, updateFields }) {
  return (
    <div>
      <h2>User Form</h2>
      <div className="page">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          required
          min={18}
          max={150}
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
    </div>
  );
}
