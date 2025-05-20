import { useEffect, useRef } from "react";
import EmotionalButton from "./EmotionalButton";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Play, Heart } from "lucide-react";
import me from "../assets/profile/me.png";

// ==== Animation CSS for HeroSection ====
const heroAnimStyle = `
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceHeart {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-slide-left {
  animation: slideInFromLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-right {
  animation: slideInFromRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-up {
  animation: slideInFromBottom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-bounce-heart {
  animation: bounceHeart 1.5s ease-in-out infinite;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-800 { animation-delay: 800ms; }
.delay-900 { animation-delay: 900ms; }
.delay-1000 { animation-delay: 1000ms; }
`;

if (typeof window !== "undefined") {
  const styleId = "hero-section-anim";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = heroAnimStyle;
    document.head.appendChild(style);
  }
}

const HeroSection = () => {
  const animRef1 = useRef<HTMLDivElement>(null);
  const animRef2 = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate the heart
    if (heartRef.current) {
      heartRef.current.style.animation = "bounceHeart 1.5s ease-in-out infinite";
    }
  }, []);

  return (
    <section
      id="hero"
      className="py-12 md:pt-32 md:pb-20 bg-white border-b border-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div
        ref={animRef1}
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFE29F] to-[#FFA99F] opacity-40 blur-[20px]"
      ></div>
      <div
        ref={animRef2}
        className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-[#E5FFE0] to-[#87CEEB] opacity-40 blur-[20px]"
      ></div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-14">
        {/* Left: Main Content */}
        <div className="md:w-2/3 w-full flex flex-col gap-7 md:pr-14">
          {/* Add mt-6 on mobile, remove on md+ */}
          <div className="flex items-center space-x-2 mb-2 mt-10 md:mt-0 animate-slide-left delay-100">
            <span className="bg-[#FFF6E3] text-[var(--color-secondary)] font-bold py-1 px-4 rounded-full text-xs">
              Brand Identity Designer
            </span>
            <span className="bg-[#E5FFE0] text-[var(--color-primary)] font-bold py-1 px-4 rounded-full text-xs">
              UI/UX Designer
            </span>
          </div>
          <span className="text-xs font-medium bg-[#f9f9f9] px-4 py-1 w-fit rounded mb-1 text-gray-500 animate-fade-up delay-200">
            Hello there!
          </span>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-2 flex flex-col gap-3 animate-slide-left delay-300">
            <span>
              I&apos;m{" "}
              <span className="theme-color-secondary relative inline-block">
                Ariful Islam
                <span className="block w-full h-1 rounded-lg bg-yellow-300 absolute left-0 -bottom-2 md:-bottom-2 md:h-1 opacity-80"></span>
              </span>
            </span>
            <span className="text-[#222]">Graphic Designer</span>
            <span className="theme-color-primary">Based in BD.</span>
          </h1>
          <p className="text-md md:text-lg text-black/85 max-w-2xl mb-4 animate-fade-up delay-400">
            I&apos;m a graphic designer with a passion for creating visually
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-5 animate-slide-up delay-500">
            <EmotionalButton
              href="/projects"
              className="theme-bg-secondary hover:bg-[#f9be5a] text-white px-7 py-3 rounded-full font-semibold flex items-center shadow transition-all duration-300 text-base"
              emotionType="heart"
              numEmotions={5}
            >
              View my portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </EmotionalButton>
            <EmotionalButton
              href="/contact"
              className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3 rounded-full font-semibold flex items-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-base"
              emotionType="heart"
              numEmotions={3}
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </EmotionalButton>
          </div>
          <div className="flex gap-5 flex-wrap text-[#222] opacity-85 font-semibold animate-fade-up delay-600">
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Premium Quality
            </span>
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Client Focused
            </span>
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Modern Design
            </span>
          </div>
        </div>
        {/* Right: Profile Photo and animations; hidden on mobile */}
        <div className="hidden md:block md:w-1/2 relative animate-slide-right delay-400">
          <div className="relative">
            <div className="absolute -top-10 -left-10 bg-[#faad1b] rounded-full h-24 w-24 blob-shape animate-pulse-blur"></div>
            <div className="animate-slide-up delay-800">
              <img
                src={me}
                alt="Olivia Smith - Product Designer"
                className="w-3/4 object-cover rounded-3xl mx-auto"
              />
              {/* Animated Heart Badge */}
              <div
                ref={heartRef}
                className="absolute right-[-28px] top-[65%] -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 animate-bounce-heart delay-1000"
                style={{
                  width: 54,
                  height: 54,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Heart className="text-[#faad1b] fill-[#faad1b]" size={38} />
              </div>
            </div>
            {/* UI/UX Designer Badge */}
            <div
              className="absolute top-12 right-0 bg-[#faad1b] text-[#344c36] font-bold px-4 py-2 rounded-lg animate-slide-right delay-400"
            >
              UI/UX Designer
            </div>
            {/* Product Designer Badge */}
            <div
              className="absolute bottom-20 left-0 bg-[#344c36] text-white px-4 py-2 rounded-lg animate-slide-left delay-500"
            >
              Brand Identity Designer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
