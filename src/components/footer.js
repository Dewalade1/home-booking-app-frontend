import React from 'react';

export default function Footer () {
    return (
      <footer data-testid="footer" className="text-center ptb-2 footer">
        <b>{new Date().getFullYear()} helloDewa</b>
      </footer>
    );
};