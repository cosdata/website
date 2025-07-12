import ScrollRestoration from '../../components/ScrollRestoration';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
}
