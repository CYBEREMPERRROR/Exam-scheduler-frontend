import { useState, useEffect } from 'react';

export default function ExamForm({ accessKey }) {
  const [form, setForm] = useState({
    course_code: '',
    department: '',
    level: '',
    venue_id: '',
    exam_date: '',
    start_time: '',
    end_time: '',
    number_of_students: ''
  });

  const [venues, setVenues] = useState([]);
  const [message, setMessage] = useState(null);

  // Fetch venues from backend
  useEffect(() => {
    fetch('${process.env.REACT_APP_BACKEND_URL}/venues', {
      headers: { 'x-access-key': accessKey }
    })
      .then(res => res.json())
      .then(data => setVenues(data))
      .catch(err => console.error(err));
  }, [accessKey]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await fetch('${process.env.REACT_APP_BACKEND_URL}/exams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-key': accessKey
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setMessage(data.message || data.errorType);
    } catch (err) {
      console.error(err);
      setMessage('Error connecting to backend');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Schedule an Exam</h2>
      {message && <div className="mb-4 text-red-600">{message}</div>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          name="course_code"
          placeholder="Course Code"
          value={form.course_code}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="level"
          placeholder="Level"
          value={form.level}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="venue_id"
          value={form.venue_id}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Venue</option>
          {venues.map(v => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>
        <input
          name="exam_date"
          type="date"
          value={form.exam_date}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="start_time"
          type="time"
          value={form.start_time}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="end_time"
          type="time"
          value={form.end_time}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="number_of_students"
          type="number"
          placeholder="Number of Students"
          value={form.number_of_students}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Schedule Exam
        </button>
      </form>
    </div>
  );
}

