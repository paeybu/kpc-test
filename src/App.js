import React, { useState } from 'react';
import './App.css';
import ApplicantForm from './components/ApplicantForm';
import ApplicantTable from './components/ApplicantTable';

import { Content } from './components/Layout';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState(null);
  const [currentApplicantIndex, setCurrentApplicantIndex] = useState(null);

  const reset = () => {
    setIsEditing(false);
    setCurrentApplicant(null);
    setCurrentApplicantIndex(null);
  };

  return (
    <Content>
      <ApplicantForm
        isEditing={isEditing}
        currentApplicant={currentApplicant}
        currentApplicantIndex={currentApplicantIndex}
        reset={reset}
      />
      <ApplicantTable
        setIsEditing={setIsEditing}
        setCurrentApplicant={setCurrentApplicant}
        setCurrentApplicantIndex={setCurrentApplicantIndex}
      />
    </Content>
  );
}

export default App;
