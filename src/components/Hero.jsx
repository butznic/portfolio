import React, { useState } from 'react';

function Hero() {
  const [likes, setLikes] = useState(0);

  return (
    <header style={styles.hero}>
      <h1 style={styles.title}>Welcome to My First React Website</h1>
      <p style={styles.subtitle}>Fast, component-driven, and easy to scale.</p>
      <button style={styles.button} onClick={() => setLikes(likes + 1)}>
        👍 Like this site ({likes})
      </button>
    </header>
  );
}

export default Hero;

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #0070f3 0%, #00a4ff 100%)',
    color: '#fff'
  },
  title: { fontSize: '2.5rem', marginBottom: '15px' },
  subtitle: { fontSize: '1.2rem', marginBottom: '25px', opacity: 0.9 },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#0070f3',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }
};