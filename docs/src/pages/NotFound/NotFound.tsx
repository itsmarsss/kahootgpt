import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-lg)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, var(--color-brand), var(--color-brand-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 'var(--spacing-md)',
        }}>
          404
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
          Page Not Found
        </h1>
        <p style={{
          color: 'var(--color-text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          marginBottom: 'var(--spacing-xl)',
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
