import React from 'react';
import './App.css';
import ApplicantForm from './components/ApplicantForm';
import ApplicantTable from './components/ApplicantTable';

import { Content } from './components/Layout';

function App() {
  return (
    <Content>
      <ApplicantForm />
      <ApplicantTable />
    </Content>
  );
}

export default App;
