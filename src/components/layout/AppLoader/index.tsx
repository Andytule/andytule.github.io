import React, { useEffect, useState } from 'react';

interface AppLoaderProps {
  onComplete: () => void;
}

const AppLoader: React.FC<AppLoaderProps> = ({ onComplete }) => {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const finish = () => {
      setHiding(true);
      setTimeout(onComplete, 600);
    };

    const timeout = setTimeout(finish, 7000);

    const handleLoad = () => {
      clearTimeout(timeout);
      setTimeout(finish, 2500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', handleLoad);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg)',
        opacity: hiding ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: hiding ? 'none' : 'all',
      }}
    >
      <div
        style={{
          marginBottom: '28px',
          animation: 'loader-fade-in 0.4s cubic-bezier(0.4,0,0.2,1) 0.5s both',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '2.5px solid rgba(255,255,255,0.08)',
            borderTopColor: 'var(--color-accent)',
            animation: 'loader-spin 0.9s linear infinite',
          }}
        />
      </div>

      <img
        src="/loading-cats.png"
        alt="Loading"
        style={{
          width: 'min(460px, 86vw)',
          opacity: 0,
          animation: 'loader-fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
          userSelect: 'none',
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      <style>{`
        @keyframes loader-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes loader-fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AppLoader;
