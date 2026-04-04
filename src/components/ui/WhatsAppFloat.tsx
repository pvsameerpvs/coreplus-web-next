import Image from 'next/image';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971504145594"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-40 h-[60px] w-[60px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
      style={{
        backgroundColor: '#25d366',
        animation: 'float 3s ease-in-out infinite',
      }}
    >
      <Image src="/images/WhatsApp.svg.webp" alt="WhatsApp" width={35} height={35} />
    </a>
  );
}
