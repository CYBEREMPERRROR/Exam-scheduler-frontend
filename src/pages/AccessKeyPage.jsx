import { useState } from 'react';

export default function AccessKeyPage({ onSubmit }) {
  const [key, setKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!key) return alert('Enter access key');
    onSubmit(key); // send key to App.jsx
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Enter Access Key</h1>
        <input
          type="password"
          placeholder="Access Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
