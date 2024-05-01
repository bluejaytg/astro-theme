import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/react/LoginForm';
import ProposalGenerator from './components/react/ProposalGenerator'; // Assuming you have this component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/proposal-generator" element={<ProposalGenerator />} /> {/* Ensuring this route exists */}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
