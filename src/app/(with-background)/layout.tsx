import GradientBackground from '../components/GradientBackground';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function WithBackgroundLayout({
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