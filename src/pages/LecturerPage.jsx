import Header from '../components/Header';
// Placeholder imports for future components
import ExamForm from '../components/ExamForm';
import ExamList from '../components/ExamList';

export default function LecturerPage({ accessKey }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        {/* ExamForm and ExamList will go here */}
        <ExamForm accessKey={accessKey} />
        <ExamList accessKey={accessKey} />
      </main>
    </div>
  );
}
