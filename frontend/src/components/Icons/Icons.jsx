export function MailIcon({ size = 20, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1.8" />
        <path d="M2 7l10 7 10-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function PhoneIcon({ size = 20, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
          stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  export function MapPinIcon({ size = 20, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8" />
      </svg>
    );
  }
  
  export function UserIcon({ size = 16, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  
  export function PenLineIcon({ size = 16, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M15.07 3.07a2 2 0 012.83 0l3.03 3.03a2 2 0 010 2.83L8 21H3v-5L15.07 3.07z"
          stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <path d="M3 21h18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  
  export function MessageCircleIcon({ size = 16, color = "currentColor", ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    );
  }