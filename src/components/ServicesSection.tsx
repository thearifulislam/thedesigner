import { useState } from "react";
import { ArrowRight } from "lucide-react";
import EmotionalButton from "./EmotionalButton";
import { Link } from "react-router-dom";

// ==== Animation CSS for Services Section ====
const servicesAnimStyle = `
@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card-animate {
  animation: slideUpFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
`;

if (typeof window !== "undefined") {
  const styleId = "services-section-anim";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = servicesAnimStyle;
    document.head.appendChild(style);
  }
}

const services = [
  {
    id: "brand-identity-design",
    iconBg: "bg-blue-100 text-blue-700",
    icon: "🖥️️",
    title: "Brand Identity Design",
    description:
      "Creating unique and memorable brand identities that resonate with your target audience.",
    features: ["Responsive Design", "SEO Optimization", "UX", "Performance"],
    subServices: ["Landing Pages", "E-commerce", "Portfolios"],
  },
  {
    id: "marketing-advertising-design",
    iconBg: "bg-yellow-100 text-yellow-700",
    icon: "💻",
    title: "Marketing & Advertising Design",
    description:
      "Creating visually appealing and user-friendly websites that drive traffic and conversions.",
    features: ["Responsive"],
    subServices: ["Landing Pages", "E-commerce", "Portfolios"],
  },
  {
    id: "packging-design",
    iconBg: "bg-green-100 text-green-700",
    icon: "📊",
    title: "Packaging Design",
    description:
      "Crafting visually appealing packaging that enhances product visibility and brand recognition.",
    features: ["Packaging Design", "Packaging Materials", "Packaging Printing"],
    subServices: [
      "Packaging Design",
      "Packaging Materials",
      "Packaging Printing",
    ],
  },
  {
    id: "logo-design",
    iconBg: "bg-pink-100 text-pink-700",
    icon: "🎨",
    title: "Logo Design",
    description:
      "Designing logos that capture the essence of your brand and stand out in a crowded market.",
    features: ["Logo Design", "Color Palettes", "Brand Guides", "Typography"],
    subServices: [
      "Logo Design",
      "Color Palettes",
      "Brand Guides",
      "Typography",
    ],
  },
  {
    id: "brand-guidelines-design",
    iconBg: "bg-orange-100 text-orange-700",
    icon: "💼",
    title: "Brand Guidelines Design",
    description:
      "Creating a cohesive brand identity through guidelines that define visual elements, messaging, and tone of voice.",
    features: [
      "Brand Guidelines",
      "Color Palettes",
      "Typography",
      "Iconography",
    ],
    subServices: [
      "Brand Guidelines",
      "Color Palettes",
      "Typography",
      "Iconography",
    ],
  },
  {
    id: "image-editing",
    iconBg: "bg-purple-100 text-purple-700",
    icon: "📄",
    title: "Image Editing",
    description:
      "Editing and enhancing images to create visually appealing and professional-looking content.",
    features: ["Image Editing", "Retouching", "Color Correction", "Retouching"],
    subServices: [
      "Image Editing",
      "Retouching",
      "Color Correction",
      "Retouching",
    ],
  },
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6]"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-16 gap-6 md:gap-8">
          <div className="service-card-animate delay-100">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Services{" "}
              <span className="text-[var(--color-secondary)]">I Provide</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Tailored solutions for your digital business. Every project
              receives dedicated creative, strategic, and technical focus from
              our team.
            </p>
          </div>
          <div className="hidden md:block service-card-animate delay-200">
            <Link to="/services">
              <EmotionalButton
                className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-7 py-2 rounded-full font-semibold shadow-md transition-colors flex items-center gap-2"
                emotionType="heart"
                numEmotions={2}
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </EmotionalButton>
            </Link>
          </div>
        </div>
        {/* Card Grid with extra top margin for separation from header */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`mt-10 group bg-white rounded-2xl border border-gray-100 shadow-md relative flex flex-col px-5 sm:px-8 pt-10 pb-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 service-card-animate ${
                hoveredCard === service.id
                  ? "ring-2 ring-[var(--color-secondary)]/40"
                  : ""
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Icon */}
              <div
                className={`absolute -top-7 left-5 sm:left-8 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg border border-gray-200 ${service.iconBg}`}
              >
                <span className="text-2xl sm:text-3xl">{service.icon}</span>
              </div>
              {/* Heading */}
              <div className="mt-8 sm:mt-10 mb-2 sm:mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-gray-500 mb-4 min-h-[40px] sm:min-h-[48px] text-sm sm:text-base">
                {service.description}
              </p>
              {/* Features as a dot list */}
              <div className="mb-2 sm:mb-3">
                <h4 className="text-xs sm:text-xs font-semibold text-gray-400 mb-1 tracking-wider">
                  KEY FEATURES
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-[13px] sm:text-xs font-medium">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* SubServices */}
              <div className="flex flex-wrap gap-2 mb-2">
                {service.subServices.map((subService, idx) => (
                  <span
                    key={idx}
                    className="bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-2 py-1 rounded-full text-[11px] sm:text-xs font-medium"
                  >
                    {subService}
                  </span>
                ))}
              </div>
              {/* Call to Action */}
              <div className="mt-2 pt-1 flex justify-start">
                <Link
                  to={`/services/${service.id}`}
                  className="group/learnmore flex items-center"
                >
                  <span className="text-[var(--color-primary)] group-hover/learnmore:text-[var(--color-secondary)] text-sm font-semibold transition-colors">
                    Learn More
                  </span>
                  <ArrowRight
                    className="
                      h-4 w-4 ml-1 
                      text-[var(--color-primary)] 
                      transition-transform 
                      duration-300 
                      group-hover/learnmore:translate-x-2
                      group-hover/learnmore:text-[var(--color-secondary)]
                    "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Only: View All */}
        <div className="mt-10 sm:mt-12 flex justify-center md:hidden service-card-animate delay-600">
          <Link to="/services">
            <EmotionalButton
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-white px-7 py-2 rounded-full font-semibold shadow transition-colors flex items-center gap-2"
              emotionType="heart"
              numEmotions={2}
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </EmotionalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
