import React from 'react';

/**
 * Autoloops logo — dark-mode-native SVG mark + monospace wordmark.
 * Two interlocking loops (∞-style) suggesting the use → learn → improve cycle.
 * Pure stroke, scales to any size, uses currentColor.
 */
const LogoMark = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Left loop */}
    <path d="M16 16c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8" transform="translate(2 0)" />
    {/* Right loop */}
    <path d="M16 16c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8" transform="translate(-2 0)" />
    {/* Signal dot — center of the loop */}
    <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const Logo = ({ className = '', wordmark = true, size = 22 }) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} className="text-white shrink-0" />
      {wordmark && (
        <span className="font-mono text-[15px] font-medium tracking-tight text-white lowercase">
          autoloops
        </span>
      )}
    </span>
  );
};

export { LogoMark };
export default Logo;
