import { Link } from "react-router-dom";
import EmotionalButton from "./EmotionalButton";
import { ArrowRight, Eye } from "lucide-react";

// logo design portfolio

import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";

// for business card

import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";

// for letterhead

import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";

// for banner

import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// for background remove

import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      category: "Logo Design",
      tags: ["Logo", "Abastract Logo"],
      image: momentum,
    },
    {
      id: "modern-minimalist-camera-business-card",
      title: "Modern Minimalist Camera Science Business Card",
      category: "Business Card Design",
      tags: ["Business Card"],
      image: modernminimalistcamerabusinesscard,
    },
    {
      id: "elegant-gold-accented-corporate-letterhead",
      title: "Elegant Gold-Accented Corporate Letterhead",
      category: "Letterhead Design",
      tags: ["Letterhead"],
      image: elegantgoldaccentedcorporateletterhead,
    },
    {
      id: "professional-promotional-banner",
      title: "Promotional Banner",
      category: "Banner",
      tags: ["banner"],
      image: professionalpromotionalbanner,
    },
    {
      id: "creative-facebook-cover-design",
      title: "The Future of Luxury Living – Tailored for You",
      category: "Facebook Cover",
      tags: ["Social Media Cover"],
      image: socialmediacoverdesign,
    },
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      category: "Background Remove",
      tags: ["Background Remove", "Clipping Path"],
      image: imageclippingpath,
    },
    {
      id: "boldpath-brand-guidelines",
      title: "The Guidelines for Bold Path",
      category: "Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: boldpath,
    },
    {
      id: "blood-donation-logo-design",
      title: "Blood Donation Logo Design",
      category: "Logo Design",
      tags: ["Logo", "Blood Donation"],
      image: blooddonation,
    },
    {
      id: "modern-business-card-design",
      title: "Modern Business Card Design",
      category: "Business Card",
      tags: ["Business Card"],
      image: modernbusinesscard,
    },
    {
      id: "modern-minimalist-letterhead-design",
      title: "Modern Minimalist Letterhead Design",
      category: "Letterhead",
      tags: ["Letterhead"],
      image: modernminimalist,
    },
    {
      id: "uniflora-logo-design",
      title: "Uniflora Logo Design",
      category: "Logo Design",
      tags: ["Logo", "Uniflora"],
      image: uniflora,
    },
    {
      id: "ranova-brand-guidelines",
      title: "Ranova Brand Guidelines",
      category: "Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: ranova,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center flex-wrap mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-color-primary">
            My Latest Projects
          </h2>
          <EmotionalButton
            href="/projects"
            className="mt-4 md:mt-0 theme-bg-secondary hover:bg-[#f9be5a] text-white px-5 py-3 rounded-full font-semibold flex items-center shadow transition-all duration-300"
            emotionType="heart"
            numEmotions={3}
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </EmotionalButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Only .map, NO .slice! */}
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${item.id}`}>
                  <h3 className="text-xl font-bold text-black-soft group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <Link
                  to={`/projects/${item.id}`}
                  className="view-button theme-bg-secondary hover:theme-bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center justify-center w-full mx-auto mt-4"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Portfolio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
