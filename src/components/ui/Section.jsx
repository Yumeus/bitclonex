export function Section({ bg = "bg-background", border = false, id, children }) {
  return (
    <section
      id={id}
      className={`w-full ${bg} py-space-lg sm:py-space-xl ${border ? "border-y border-outline-variant/30" : ""}`}
    >
      {children}
    </section>
  );
}
