import React from "react";
import "./SocialMedia.css";
import { Link } from "react-router-dom";
// Icon SVG Components
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
    <path d="M22.225 0h-20.45C.815 0 0 .815 0 1.825v20.351c0 1.011.815 1.825 1.825 1.825h20.451c1.01 0 1.825-.814 1.825-1.825V1.825c0-1.01-.814-1.825-1.825-1.825zM9.023 19.123H5.458V8.776h3.565v10.347zm-1.782-11.664c-1.111 0-2.011.902-2.011 2.014 0 1.113.9 2.013 2.011 2.013 1.11 0 2.01-.9 2.01-2.013-.001-1.112-.901-2.014-2.01-2.014zM20.542 19.123h-3.566v-5.551c0-1.323-.025-3.027-1.841-3.027-1.842 0-2.124 1.43-2.124 2.912v5.666h-3.566V8.776h3.416v1.449h.048c.477-.9 1.644-1.855 3.379-1.855 3.615 0 4.283 2.379 4.283 5.476v5.677z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
    <path d="M22.675 0h-21.35C.623 0 0 .623 0 1.375v21.25C0 23.377.623 24 1.375 24h11.51v-9.294H9.85v-3.623h2.036V8.92c0-2.013 1.222-3.12 3.003-3.12.855 0 1.591.063 1.805.092v2.095l-1.237.001c-1.001 0-1.195.477-1.195 1.173v1.539h2.396l-.312 3.623h-2.084V24h4.081c.752 0 1.375-.623 1.375-1.375V1.375C24 .623 23.377 0 22.675 0z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.84 8.16 6.78 9.49.5.09.68-.22.68-.49v-1.81c-2.78.6-3.37-1.35-3.37-1.35-.46-1.16-1.14-1.47-1.14-1.47-.93-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.35 1.1 2.93.85.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.1-4.56-4.91 0-1.08.39-1.97 1.03-2.66-.1-.25-.44-1.27.09-2.65 0 0 .83-.27 2.7 1.02A9.421 9.421 0 0 1 12 5.82a9.42 9.42 0 0 1 2.46.34c1.87-1.29 2.7-1.02 2.7-1.02.53 1.37.19 2.4.1 2.65.64.69 1.03 1.58 1.03 2.66 0 3.81-2.34 4.66-4.59 4.91.36.31.68.93.68 1.87v2.76c0 .27.18.58.68.49C21.16 20.16 24 16.41 24 12 24 6.48 19.52 2 12 2z" />
  </svg>
);

// SocialCard Component
const Card = () => {
  return (
    <div className="card">
      <div className="background"></div>
      <div className="logo">Socials</div>

      <Link
        to="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="box box1">
          <span className="icon">
            <LinkedInIcon />
          </span>
        </div>
      </Link>

      <Link
        to="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="box box2">
          <span className="icon">
            <FacebookIcon />
          </span>
        </div>
      </Link>

      <Link to="https://github.com" target="_blank" rel="noopener noreferrer">
        <div className="box box3">
          <span className="icon">
            <GitHubIcon />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
