import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { title: 'About Us - CorePlus' };

const VMV = [
  {
    icon: 'bi-eye',
    title: 'Our Vision',
    text: "To be the UAE's most trusted and innovative business setup partner, empowering entrepreneurs and enterprises to thrive through simplified processes, strategic guidance, and complete regulatory compliance.",
    image: '/images/vision.jpg',
  },
  {
    icon: 'bi-bullseye',
    title: 'Our Mission',
    text: 'Our mission is to simplify company formation and business operations across the UAE by delivering personalized, end-to-end solutions that ensure compliance, efficiency, and sustainable growth.',
    image: '/images/mission.png',
  },
  {
    icon: 'bi-file-lock2',
    title: 'Our Values',
    text: "At Core Plus, our values are rooted in integrity, transparency, and excellence. We believe in building long-term partnerships based on trust, providing customer-focused solutions, and continuously innovating to deliver the highest standards of service.",
    image: '/images/Values.jpg',
  },
];

export default function AboutPage() {
  return (
    <>
      <div style={{ marginTop: '80px' }} />

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Core Plus Business Set Up Services LLC</strong> has earned a reputation as a trusted partner for businesses of all sizes, from startups to established enterprises.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mt-4">
                Our experienced team is committed to simplifying the complexities of company formation and business operations in the UAE. We take pride in delivering personalized, end-to-end solutions that ensure full compliance with local regulations while optimizing business processes for greater efficiency and growth.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mt-4">
                By leveraging deep market insights and strategic expertise, <strong>Core Plus</strong> continues to empower clients to achieve their business goals in the competitive UAE landscape.
              </p>
            </div>
            <div>
              <Image
                src="/images/img 33.png"
                alt="CorePlus Team"
                width={600}
                height={450}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Vision, Mission &amp; Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VMV.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md overflow-hidden border border-black/5 flex flex-col h-full">
                <div className="p-6 flex-1">
                  <i className={`bi ${item.icon} text-5xl text-primary mb-4 block`} />
                  <h5 className="font-bold text-lg mb-3">{item.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
