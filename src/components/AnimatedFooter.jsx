import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Send,
  Mail,
} from "lucide-react";
import footerLogoIcon from "../assets/images/footer-prooh.ai.png";
const footerLinks = {
  company: [
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Customers", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Papers", href: "#" },
    { name: "Press", href: "#" },
  ],
  solutions: [
    { name: "PCI Compliance", href: "#" },
    { name: "Encryption as a Service", href: "#" },
    { name: "Credentials Encryption", href: "#" },
    { name: "File Encryption", href: "#" },
    { name: "PII Encryption", href: "#" },
    { name: "HIPAA Compliance", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookies Policy", href: "#" },
    { name: "Data Processing", href: "#" },
  ],
  compliance: [
    { name: "PCI Level 1", href: "#" },
    { name: "SOC Level ||", href: "#" },
  ],
};

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Mail, href: "#" },
  { Icon: Youtube, href: "#" },
  { Icon: MessageCircle, href: "#" },
  { Icon: Send, href: "#" },
];

export function AnimatedFooter() {
  const footerRef = useRef(null);
  const emailRef = useRef(null);
  const socialsRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main title
      gsap.from(".brand", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Animate the email address
      gsap.from(emailRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: emailRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Animate social icons
      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialsRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Animate footer links
      gsap.from(".footer-column", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className='bg-black text-white px-6 py-16 min-h-screen flex flex-col relative z-20 justify-between'
    >
      <div className='responsiveWidth'>
        <div className='space-y-8 max-w-[935px]'>
          <div className='max-w-[747px]'>
            <img
              src={footerLogoIcon}
              className='brand mb-5 md:h-[43px] h-[33px]'
            />

            <div
              ref={emailRef}
              className='text-white text-wrap break-words sm:text-[75px] text-[54px] md:text-[90px] lg:text-[113.04px] leading-[70px] md:leading-[85px] font-normal font-bricolage capitalize'
            >
              sales@prooh.ai
            </div>

            <div ref={socialsRef} className='flex gap-6 py-8 flex-wrap'>
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className='social-icon hover:text-gray-400 transition-colors duration-200'
                >
                  <Icon className='w-6 h-6' />
                </a>
              ))}
            </div>
          </div>
          <div
            ref={linksRef}
            className='grid grid-cols-2 md:grid-cols-5 gap-5 pt-8'
          >
            <div className='footer-column space-y-6'>
              <h3 className='text-white text-sm font-medium font-inter leading-snug'>
                Company
              </h3>
              <ul className='space-y-4'>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#dadada] text-sm font-normal font-['Inter'] leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer-column space-y-6'>
              <h3 className='text-white text-sm font-medium font-inter leading-snug'>
                Resources
              </h3>
              <ul className='space-y-4'>
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#dadada] text-sm font-normal font-['Inter'] leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer-column space-y-6'>
              <h3 className='text-white text-sm font-medium font-inter leading-snug'>
                Solutions
              </h3>
              <ul className='space-y-4'>
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#dadada] text-sm font-normal font-['Inter'] leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer-column space-y-6'>
              <h3 className='text-white text-sm font-medium font-inter leading-snug'>
                Legal
              </h3>
              <ul className='space-y-4'>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#dadada] text-sm font-normal font-['Inter'] leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-column space-y-6'>
              <h3 className='text-white text-sm font-medium font-inter leading-snug'>
                Compliance
              </h3>
              <ul className='space-y-4'>
                {footerLinks.compliance.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className='text-[#dadada] text-sm font-normal font-inter leading-snug'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='pt-8 mt-8 text-center border-gray-800 text-sm text-gray-400'>
          © 2024 prooh.ai All rights reserved.
        </div>
      </div>
    </footer>
  );
}
