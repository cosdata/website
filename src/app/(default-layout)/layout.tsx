export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      {/* Simple white background with a subtle gradient to blue at the bottom */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f7fa]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#f5f7fa] to-[#e6f0ff]"></div>
      </div>
      {children}
    </div>
  );
} 