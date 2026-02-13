// App.jsx
import { useState } from 'react';
import AccessKeyPage from './pages/AccessKeyPage';
import LecturerPage from './pages/LecturerPage';

export default function App() {
  const [accessKey, setAccessKey] = useState(null);

  // If no key entered, show AccessKeyPage
  if (!accessKey) {
    return <AccessKeyPage onSubmit={setAccessKey} />;
  }

  // Once key entered, show main lecturer page
  return <LecturerPage accessKey={accessKey} />;
}
