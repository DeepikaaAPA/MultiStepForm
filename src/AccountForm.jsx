export function AccountForm({ email, password, updateFields }) {
  return (
    <div>
      <h2>Account Form</h2>
      <div className="page">
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </div>
    </div>
  );
}
