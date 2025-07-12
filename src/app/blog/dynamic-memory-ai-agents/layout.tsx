import ScrollRestoration from '../../components/ScrollRestoration';

export default function MavannLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
}
