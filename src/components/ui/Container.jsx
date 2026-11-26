export function Container({ className = "", children }) {
  return (
    <div
      className={`w-full max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-margin-mobile sm:px-6 lg:px-margin ${className}`}
    >
      {children}
    </div>
  );
}
