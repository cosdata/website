import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function CallToActionSection() {
  return (
    <section className={`py-16 sm:py-20 bg-gradient-to-br from-[#0055c8] to-[#0044a3] text-white ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6`}>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${geologica.className}`}>
            Ready to start building with Cosdata?
          </h2>
          <p className={`text-white/90 text-base sm:text-lg mb-8 ${commonStyles.paragraph}`}>
            Join thousands of developers using Cosdata&apos;s open-source vector database for lightning-fast similarity search.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://github.com/cosdata/vecsim"
              className="inline-flex items-center justify-center px-5 py-3 bg-white text-[#0055c8] rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base font-medium shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </Link>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center px-5 py-3 bg-transparent text-white rounded-lg border border-white hover:bg-white/10 transition-colors duration-300 text-base font-medium shadow-lg"
            >
              <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Read the docs
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/20">
          <div className="text-center">
            <p className={`text-white/80 text-sm sm:text-base mb-2 ${commonStyles.paragraph}`}>
              Proudly open-source
            </p>
            <div className="flex items-center justify-center space-x-3 sm:space-x-5">
              <Link href="https://github.com/cosdata/vecsim" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
              <Link href="https://discord.gg/cosdata" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com/cosdataHQ" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className={`text-white/80 text-sm sm:text-base mb-2 ${commonStyles.paragraph}`}>
              Designed with ❤️ by
            </p>
            <Link href="/" className="inline-block">
              <div className="relative h-5 sm:h-6 w-20 sm:w-24">
                <Image
                  src="/images/logo-white.png"
                  alt="Cosdata Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 