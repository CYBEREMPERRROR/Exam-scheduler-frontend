import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex items-center bg-blue-600 text-white p-4 shadow-md">
      <img src={logo} alt="School Logo" className="h-12 mr-4" />
      <h1 className="text-2xl font-bold">Exam Scheduling System</h1>
    </header>
  );
}
