import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/feedback', {
        userId,
        message,
      });
      alert('Feedback submitted successfully!');
      setMessage('');
      setUserId('');
    } catch (error) {
      alert('Error submitting feedback');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br /><br />
        <textarea
          placeholder="Your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
