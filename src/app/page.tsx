"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Star, Users, MessageSquare, Award, HelpCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Azure Luxury Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Azure Luxury Hotel, where every moment becomes an unforgettable memory"
          tag="Premium Hospitality"
          tagIcon={Crown}
          imageSrc="https://pixabay.com/get/g29c83a7e3d1552e893c0918173f887fb0566a826539faa20e211608915b6ec778f70093d51651348d453e12a7209a317856ca580a2c9ae017bf3105c8c62c657_1280.jpg"
          imageAlt="Azure Luxury Hotel exterior at sunset"
          frameStyle="card"
          buttons={[
            { text: "Reserve Now", href: "https://booking.example.com" },
            { text: "Explore Rooms", href: "amenities" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="At Azure Luxury Hotel, we don't just provide accommodation – we craft extraordinary experiences that surpass expectations. Our commitment to excellence, attention to detail, and personalized service ensures every guest feels truly special and valued."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSeven
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed for the discerning traveler"
          tag="Luxury Features"
          tagIcon={Star}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Executive Suites",
              description: "Spacious suites with panoramic city views, premium furnishings, and personalized butler service",
              imageSrc: "https://pixabay.com/get/g8eed91dd3ebad3cc324d98e5da378ff3701a261ddf2ed4c7e749029200326d7445a9c2c5517c9a0f6dfe4485bfd1c5b52a6771a0246d34b4709b4242fbf3ecd2_1280.jpg",
              imageAlt: "Luxury hotel suite interior"
            },
            {
              id: 2,
              title: "Wellness Spa",
              description: "Award-winning spa offering rejuvenating treatments, therapeutic massages, and wellness programs",
              imageSrc: "https://pixabay.com/get/g9e7c54433becdc0fdb477d3dfb5a47e5a7707b0ef374935faeeddaf317e0f3b32ace784e519a2f5348e7cabbd925695062ebcf3784705710559f4e807dcb3629_1280.jpg",
              imageAlt: "Hotel spa and wellness center"
            },
            {
              id: 3,
              title: "Fine Dining",
              description: "Michelin-starred restaurants serving exquisite cuisine crafted by world-renowned chefs",
              imageSrc: "https://pixabay.com/get/g3dd0bab70ed45c536a13d1f808f87eb97dd028e66e4def61802759943c24fc91cf99504c5fc75750ee0a37083215418e13cd755c57d3c1bb95ed24d944e940c1_1280.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: 4,
              title: "Infinity Pool",
              description: "Rooftop infinity pool with breathtaking views, private cabanas, and poolside service",
              imageSrc: "https://pixabay.com/get/g50ebc4ec459941472413ccf4f66b093b0435004fde922fbc6f6447c98da5911dd5f5957b7806f1de96777bc81afd798e06c4dfed8b5684eb29fbba557c72def8_1280.jpg",
              imageAlt: "Infinity pool with city view"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leadership"
          description="Dedicated professionals committed to delivering exceptional hospitality"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Alexander Sterling",
              role: "General Manager",
              description: "With over 20 years in luxury hospitality, Alexander ensures every guest receives world-class service and attention.",
              imageSrc: "https://pixabay.com/get/g70d8c781afcb2cc8611aa602b0341dcb2d884506451dddf22592debd6953189d1f3cc63219272588f38035d17c96ca11c6af8f3256f686bef289c167cf360ddf_1280.jpg",
              imageAlt: "Portrait of Alexander Sterling",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/alexander" },
                { icon: "Mail", url: "mailto:manager@azurehotel.com" }
              ]
            },
            {
              id: "2",
              name: "Isabella Chen",
              role: "Concierge Director",
              description: "Isabella and her team provide personalized recommendations and exclusive access to the city's finest experiences.",
              imageSrc: "https://pixabay.com/get/g8177ddb7e7a7f6d831d4ff88e3f0fa5724ae630b3a710af96671fa4c9047468e4b6cfad8f4f228bc2f773d528af8990e4e37b347cabd76167a250bbbec47c2af_1280.jpg",
              imageAlt: "Portrait of Isabella Chen",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/isabella" },
                { icon: "Phone", url: "tel:+1234567890" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Azure Luxury Hotel"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              role: "CEO",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf28df8de9ee175a3b3fe4f76be4db0915ba8c2b2a21f40762a34ab8995985303bfccfde70f824c406de5f00f86e87bf4a7a3c7919c38e7ad353c4b0b523a8bd0_1280.jpg",
              imageAlt: "Portrait of James Mitchell"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Travel Writer",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd1e8cb58e6f240c207422c85e498fb26c57fd9ac7190be5fbcd86b6756fc3fb5196cb6e88f2609f0c33af90b6e2982fe5240ef79546889a278e763e6184c0d62_1280.jpg",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "David & Emma Thompson",
              role: "Anniversary Guests",
              company: "Celebrating 25 Years",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g00a8ca748236a9a79969a6a27195d3543db65f94672abf32cb9334cbbc0db20aba1aee55ee86b0d0c165f0f1caa178380ff6d25f5acb349e59cd9c93962ef286_1280.jpg",
              imageAlt: "Portrait of David and Emma Thompson"
            },
            {
              id: "4",
              name: "Michael Chang",
              role: "Business Traveler",
              company: "Tech Entrepreneur",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb3a148e758dd0d1e1cde0503432a21bf14548a0859fe514de1f21649700210862b402489dba0c979fba16e6bb7e5acb609b4d84f8a1f38dae1add61c5516157a_1280.jpg",
              imageAlt: "Portrait of Michael Chang"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of premium hotels setting the standard for luxury"
          tag="Industry Recognition"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g59a73eb17d65a50304a54beabf503b03a7565246d5a6b4978cc3d0125a9984025a538e61bc2b6b80bce20c46003bc06fdd3c3734647daac39f8edae5c75b07ed_1280.jpg",
            "https://pixabay.com/get/g1b659ced9428a9f27bbe4f3cc839d4c27882c42973f921191943fe7cb836f5981aa19d446f476571e567726f7787c2649b3a51f8d2d462b7f8c1648a4914b3ab_1280.jpg",
            "https://pixabay.com/get/g9f6d7196aeaf2b144083d807b395b0e17906d8f78c0964246ceee8c6382587e1538d356ae54b832b2dfd6b807cb002a4a440c6ef488c6f722f86422f46b52bd5_1280.jpg",
            "https://pixabay.com/get/geb99aac7135fe4c3c50c22cd5dfaaa77cfc3557d8226544f59007289c9d05ad5f6e75f7dcfde084b809af2471ec399b55458c5565d9167cabc9623053648ca7e_1280.jpg",
            "https://pixabay.com/get/ge6f30cdb6137bfbb60bf773fba140c3bd50e3943fc3bb51696b640464db25ac31df98c43c794d64eee3f572fa7adef9557246a1bfbc00dd915a1216d75f6a450_1280.jpg",
            "https://pixabay.com/get/g84a64e072182f4b0513ea5377a74d499deb7b30480a7626703c5d0f09d60dd52a7b52d1a9ab962494b5ffa75b26691c0300345abd4f929ec81446d6846dbf535_1280.jpg",
            "https://pixabay.com/get/gf4ea46685073950ed3b74205dd7e897724307c637589df1e32b56205adffd388f7795ce81ee5d616ed7ce96fd5c70c0ddb28ae97c7575d8e9d759ccb7fc644a3_1280.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay with us"
          tag="Guest Information"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/g1107ad1689cbea16d1cd148e46bdf1f3b212f4535feeb9f3b382ff40fcf986d6e59fd1b49651af8ba1d17db1daed905a00d3b8d433a13d5c54ccc457337add09_1280.jpg"
          imageAlt="Elegant hotel lobby interior"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary luxury shuttle service to and from the airport. Please contact our concierge 24 hours in advance to arrange pickup."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: Azure Fine Dining (Michelin-starred), The Terrace Café (casual), and Sunset Lounge (cocktails). Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer complimentary valet parking for all guests. Self-parking is also available at a reduced rate."
            },
            {
              id: "5",
              title: "Can you accommodate special requests?",
              content: "Absolutely! Our concierge team specializes in creating personalized experiences. Contact us with your requirements and we'll make it happen."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Experience Luxury?"
          description="Contact our reservations team to plan your perfect stay, or subscribe for exclusive offers and updates"
          tagIcon={Phone}
          imageSrc="https://pixabay.com/get/gd4a1d55ec0a677f37c978ca363e9c8b77b9464f1a795800a7396414dfe1d6c6bac8bd18ed49cfc855f53f75f16d85a0983a98bf379a5a57eeb7e75263be893c0_1280.jpg"
          imageAlt="Luxury hotel reception desk"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates. You can unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Azure Luxury Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Concierge", href: "concierge" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}