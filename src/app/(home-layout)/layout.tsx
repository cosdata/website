import GradientBackground from '../components/GradientBackground';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundOverlay />
      <GradientBackground />
      {children}
    </>
  );
} 