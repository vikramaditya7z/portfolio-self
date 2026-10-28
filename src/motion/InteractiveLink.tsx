import React from 'react';

interface InteractiveLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  arrow?: boolean;
}

export const InteractiveLink: React.FC<InteractiveLinkProps> = ({
  href,
  children,
  external = false,
  className = '',
  arrow = true,
  ...props
}) => {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      {...props}
      className={`group relative inline-flex items-center gap-1.5 font-mono text-xs tracking-mono-spaced text-inherit transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] focus-visible:outline-offset-2 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="relative z-10 text-[#FF4D24] text-[11px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}
      {/* Editorial underline expanding in Signal Orange */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#FF4D24] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
    </a>
  );
};
