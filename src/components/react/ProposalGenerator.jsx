import React, { useState } from 'react';
import axios from 'axios';

function ProposalGenerator() {
  const [proposalDetails, setProposalDetails] = useState({
    problemStatement: '', // Example field
    targetAudience: '',   // Example field
    // Add more fields as needed based on your AI agent structure
  });

  const [proposal, setProposal] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target; 

    setProposalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate', proposalDetails); 
      setProposal(response.data.proposal);
    } catch (error) {
      console.error('Error fetching proposal:', error);
    }
  };

  return (
    <div>
      <div> {/* Container for input fields */}
        <label htmlFor="problemStatement">Problem Statement:</label>
        <textarea
          name="problemStatement"
          value={proposalDetails.problemStatement}
          onChange={handleInputChange}
        />

        <label htmlFor="targetAudience">Target Audience:</label>
        <textarea
          name="targetAudience"
          value={proposalDetails.targetAudience}
          onChange={handleInputChange}
        />
        {/* Add more input fields as needed */}
      </div>

      <button onClick={handleSubmit}>Generate Proposal</button>

      {/* ... rest of your component to display the proposal ... */}
    </div>
  );
}

export default ProposalGenerator;
