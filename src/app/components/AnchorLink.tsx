'use client';

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function AnchorLink({ href, children }: AnchorLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Link clicked:', href);
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      console.log('Looking for element with ID:', targetId);
      
      const element = document.getElementById(targetId);
      console.log('Found element:', element);
      
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

        console.log('Scrolling to position:', offsetPosition);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        window.history.pushState({}, '', href);
      } else {
        console.log('Element not found');
      }
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="text-blue-600 hover:text-blue-800 hover:underline"
      {...(href.startsWith('#') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
} 