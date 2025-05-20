import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import EmotionalButton from "./EmotionalButton";

// ==== Animation CSS ====
// More pronounced left-to-right slide-in (mobile nav)
const mobileNavAnimStyle = `
@keyframes slideInLeftMobile {
  0% {
    opacity: 0;
    transform: translateX(-120px) scale(0.95);
  }
  70% {
    opacity: 0.9;
    transform: translateX(8px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes scaleInLogo {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  70% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInHireMe {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  70% {
    opacity: 0.9;
    transform: translateY(5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.mobile-nav-slidein {
  animation: slideInLeftMobile 0.55s cubic-bezier(.6,1.3,.4,1.05) both;
}

.logo-animation {
  animation: scaleInLogo 0.8s cubic-bezier(.4,1.4,.4,1) both;
}

.hire-me-animation {
  animation: slideInHireMe 0.8s cubic-bezier(.4,1.4,.4,1) both;
  animation-delay: 0.2s;
}
`;

if (typeof window !== "undefined") {
  const styleId = "mobile-nav-slidein";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = mobileNavAnimStyle;
    document.head.appendChild(style);
  }
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blogs" },
  { name: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconKey, setIconKey] = useState(0);
  const [activeLink, setActiveLink] = useState("/");

  // Update active link on path change (browser)
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Add body scroll lock when mobile menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle menu open/close
  const handleMenuToggle = () => {
    setIsOpen((v) => !v);
    setIconKey((prev) => prev + 1);
  };

  // Staggered animation delay for each nav item
  const getAnimDelay = (idx: number) => ({
    animationDelay: `${idx * 0.1 + 0.08}s`,
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex items-center min-h-[64px]">
        {/* Logo */}
        <a
          href="/"
          className="text-xl md:text-2xl font-bold theme-color-primary flex items-center group shrink-0 logo-animation"
        >
          <Heart
            className="mr-2 text-[var(--color-secondary)] fill-[var(--color-secondary)] heart-bounce"
            size={20}
          />
          <span className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
            Ariful
          </span>
          <span className="group-hover:text-[var(--color-secondary)] transition-colors">
          GFX
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium nav-item transition-colors duration-300 nav-item-animation ${
                  activeLink === link.href ? "theme-color-secondary" : ""
                }`}
                style={{
                  animationName: "slideInFromRight",
                  animationDuration: "0.5s",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Hire Me Button - Right aligned */}
        <div className="hidden md:block shrink-0 hire-me-animation">
          <EmotionalButton
            href="/contact"
            className="theme-bg-secondary text-white py-2 px-6 rounded-full font-medium hover:scale-110 hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 flex items-center hire-me-btn"
            style={{ transition: "transform 0.25s cubic-bezier(.4,2,.5,1)" }}
            emotionType="heart"
            numEmotions={3}
          >
            Hire Me <Heart className="ml-2 h-4 w-4" />
          </EmotionalButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-black-soft focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                key={"x-" + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-close"
              />
            ) : (
              <Menu
                key={"menu-" + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-open"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-in Left (More visible & smooth) */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-200">
          <div className="px-4 py-6 space-y-5 flex flex-col">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  block font-medium rounded-xl shadow nav-mobile-card mobile-nav-slidein hover:scale-105 transition
                  ${
                    activeLink === link.href
                      ? "bg-yellow-50 theme-color-secondary border border-yellow-300"
                      : "bg-white/95"
                  }
                `}
                style={getAnimDelay(idx)}
                onClick={() => setIsOpen(false)}
              >
                <div className="px-4 py-3 flex items-center space-x-3 text-base">
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
            <div style={getAnimDelay(navLinks.length)}>
              <EmotionalButton
                href="/contact"
                className="block w-full theme-bg-secondary text-white py-2 px-6 rounded-xl font-medium text-center hover:theme-bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center hire-me-btn shadow mobile-nav-slidein"
                emotionType="heart"
                numEmotions={2}
                onClick={() => setIsOpen(false)}
              >
                Hire Me <Heart className="ml-2 h-4 w-4" />
              </EmotionalButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
