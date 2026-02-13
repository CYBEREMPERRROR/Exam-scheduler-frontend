import { useState } from 'react';
import AccessKeyPage from './pages/AccessKeyPage';
import LecturerPage from './pages/LecturerPage'; // your main page

export default function App() {
  const [accessKey, setAccessKey] = useState(null);

  // If no key, show input page
  if (!accessKey) {
    return <AccessKeyPage onSubmit={setAccessKey} />;
  }

  // If key is entered, show main lecturer page
  return <LecturerPage accessKey={accessKey} />;
}
