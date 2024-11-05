import { Afacad, Noto_Sans_Mono, Geologica } from 'next/font/google';

export const afacad = Afacad({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const noto_sans_mono = Noto_Sans_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const geologica = Geologica({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const commonStyles = {
  mainContainer: `max-w-[1440px] mx-auto px-4 py-12 ${geologica.className}`,
  sectionTitle: `text-3xl sm:text-[44px] font-bold text-center mb-16 text-[#0055c8] ${geologica.className}`,
  sectionSubtitle: `text-lg md:text-2xl text-center text-[#374151] mb-16 ${afacad.className}`,
  paragraph: `text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`,
  link: `text-lg sm:text-xl md:text-xl text-blue-600 font-semibold hover:underline inline-flex items-center ${afacad.className}`,
  heroTitle: ` text-[42px] sm:text-[56px] md:text-[72px] font-[500] leading-[1.2] md:leading-[64px] text-[#0055c8] mb-4 md:mb-6 ${noto_sans_mono.className}`,
  heroSubtitle: `text-xl md:text-2xl text-[#374151] mb-6 md:mb-8 leading-relaxed max-w-3xl ${afacad.className}`,
  button: `inline-block px-2 lg:px-4 py-3 rounded-lg shadow-md transition duration-300 flex items-center min-w-[125px] lg:min-w-[200px] justify-center ${afacad.className}`,
  featureCard: `flex flex-col justify-between bg-gradient-to-b from-white to-[#f5dede] p-6 sm:p-8 text-[#374151] transition-transform duration-300 hover:-translate-y-5 rounded-lg shadow-md`,
  featureTitle: `text-xl sm:text-2xl font-bold text-[#0055c8] mb-4 text-left ${geologica.className}`,
  featureDescription: `mb-8 text-lg sm:text-xl md:text-xl text-left ${afacad.className}`,
  featureLink: `px-4 py-2 bg-transparent text-[#3d8bff] hover:text-white hover:bg-[#3d8bff] border-2 border-[#3d8bff] rounded-md font-semibold text-base sm:text-lg ${afacad.className}`,
  skewedSection: `mt-[50px] sm:mt-[80px] md:mt-[90px] lg:mt-[100px] xl:mt-[140px] 2xl:mt-[180px] pb-[0px] lg:pb-[60px] relative transform -skew-y-6 origin-top-left ${noto_sans_mono.className}`,
  skewedContent: `relative bg-transparent transform skew-y-6 origin-top-left mb-0`,
};
