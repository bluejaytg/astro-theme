import React, { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear errors on submit
    setIsLoading(true);

    try {
      // Authentication Logic - Replace with your backend interaction
      const loginSuccessful = await authenticateUser(email, password); 

      if (loginSuccessful) {
        onLoginSuccess(); // Trigger navigation
      } else {
        setError('Invalid email or password'); 
      }
    } catch (error) {
      setError('An error occurred during login'); 
      console.error(error); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold">Login</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Error display */} 
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Your form fields ... */}
        <button type="submit" className="bg-primary ..." disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'} 
        </button>
      </form>
    </div>
  );
}

// Placeholder authentication function - Replace this!
async function authenticateUser(email, password) {
  // Implement communication with your Python backend
  // Example using a simulated delay:
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return true; // Simulating successful login
}

export default LoginForm;