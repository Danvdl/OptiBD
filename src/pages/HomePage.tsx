
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServiceSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactForm from '../components/ContactForm';
import FadeInSection from '../components/FadeInSection';
const HomePage = () => {
  return (
    <>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
    <FadeInSection>
  <ServicesSection />
</FadeInSection>
<FadeInSection direction="up" delay={0.1}>
  <WhyChooseUsSection />
</FadeInSection>
<FadeInSection direction="up" delay={0.2}>
  <ContactForm />
</FadeInSection>

      
    </>
  );
};

export default HomePage;
