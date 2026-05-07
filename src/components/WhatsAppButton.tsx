import { BRAND } from "@/data/siteData";

const WhatsAppButton = () => {
  const number = BRAND.phone.replace(/[^\d]/g, "");
  const message = encodeURIComponent("Hi, I want to book a free LASIK consultation.");
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg flex items-center justify-center transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white" aria-hidden="true">
        <path d="M16.003 3C9.382 3 4 8.383 4 15.003c0 2.65.86 5.108 2.318 7.106L4 29l7.087-2.27a11.94 11.94 0 0 0 4.916 1.06h.001C22.622 27.79 28 22.41 28 15.79 28 12.583 26.755 9.575 24.49 7.31A11.926 11.926 0 0 0 16.003 3Zm0 21.86h-.003a9.93 9.93 0 0 1-5.06-1.385l-.363-.215-4.205 1.347 1.37-4.1-.236-.377a9.92 9.92 0 0 1-1.523-5.275c.002-5.49 4.47-9.957 9.964-9.957a9.9 9.9 0 0 1 7.044 2.92 9.9 9.9 0 0 1 2.916 7.046c-.002 5.49-4.47 9.957-9.904 9.997Zm5.46-7.46c-.299-.15-1.77-.873-2.045-.972-.274-.1-.474-.15-.673.15-.2.298-.772.97-.947 1.17-.174.2-.349.224-.648.075-.299-.15-1.262-.465-2.404-1.483-.888-.792-1.488-1.77-1.662-2.07-.174-.298-.018-.46.131-.609.135-.135.299-.349.448-.523.149-.174.199-.299.299-.498.1-.2.05-.374-.025-.523-.075-.15-.673-1.62-.922-2.22-.243-.583-.49-.504-.673-.513l-.573-.01a1.1 1.1 0 0 0-.797.374c-.274.299-1.046 1.022-1.046 2.493s1.071 2.892 1.22 3.092c.149.2 2.108 3.22 5.108 4.515.713.308 1.27.49 1.704.628.715.227 1.366.195 1.882.118.574-.086 1.77-.723 2.02-1.421.249-.698.249-1.295.174-1.421-.075-.124-.274-.199-.573-.349Z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
