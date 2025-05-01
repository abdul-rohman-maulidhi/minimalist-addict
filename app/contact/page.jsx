import { TbBrandWhatsapp } from "react-icons/tb";

export default function Contact() {
    const whatsappNumber = "6282257661470"; // Ganti dengan nomor WhatsApp kamu tanpa tanda +
    const message = "Hello, I'm interested in your interior design service.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-gray-50 py-20">
            <div className="container text-center">
                <h2 className="text-4xl font-semibold tracking-wide mb-6">Let&#39;s Talk Design</h2>
                <p className="text-gray-600 text-lg mb-10">
                    Have a project in mind? Reach out and let&#39;s make something beautiful together.
                </p>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white text-base font-medium rounded-full bg-green-600 hover:bg-green-700 shadow-md transition"
                >
                    <TbBrandWhatsapp className="text-2xl" />
                    Chat via WhatsApp
                </a>
            </div>
        </div>
    );
}
