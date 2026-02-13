import { useState, useEffect } from 'react';

export default function ExamList({ accessKey }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExams = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://your-backend.onrender.com/exams', {
        headers: { 'x-access-key': accessKey }
      });
      const data = await res.json();
      setExams(data); // backend should return array of exams
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to load exams');
      setLoading(false);
    }
  };

  // Fetch exams on mount and after every form submission
  useEffect(() => {
    fetchExams();
  }, []);

  if (loading) return <p>Loading scheduled exams...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Scheduled Exams</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Course</th>
            <th className="border px-4 py-2">Dept</th>
            <th className="border px-4 py-2">Level</th>
            <th className="border px-4 py-2">Venue</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Start</th>
            <th className="border px-4 py-2">End</th>
            <th className="border px-4 py-2">Students</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td className="border px-4 py-2">{exam.course_code}</td>
              <td className="border px-4 py-2">{exam.department}</td>
              <td className="border px-4 py-2">{exam.level}</td>
              <td className="border px-4 py-2">{exam.venue_name || exam.venue_id}</td>
              <td className="border px-4 py-2">{exam.exam_date}</td>
              <td className="border px-4 py-2">{exam.start_time}</td>
              <td className="border px-4 py-2">{exam.end_time}</td>
              <td className="border px-4 py-2">{exam.number_of_students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
