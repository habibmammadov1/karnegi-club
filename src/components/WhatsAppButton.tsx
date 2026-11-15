import { site } from "@/content/site";

// Aşağı sağ küncdəki WhatsApp düyməsi: hazır mesajla söhbəti açır
export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
  return (
    <a className="wa" href={href} target="_blank" rel="noopener" aria-label="WhatsApp ilə yazın">
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 00-8.600 15.100L2 22l5-1.300A10 10 0 1012 2zm0 1.800a8.200 8.200 0 11-4.200 15.300l-.300-.200-3 .800.800-2.900-.200-.300A8.200 8.200 0 0112 3.800zm-3.300 3.900c-.200 0-.500.100-.700.300-.300.300-1 .900-1 2.300s1 2.700 1.100 2.900c.200.200 2 3.200 5 4.400 2.500 1 3 .800 3.500.700.500 0 1.700-.700 2-1.400.200-.700.200-1.200.200-1.400-.100-.100-.300-.200-.600-.300l-2-1c-.300-.100-.500-.100-.700.200l-.900 1.100c-.200.200-.300.200-.600.100-.300-.200-1.200-.500-2.300-1.400-.900-.800-1.400-1.700-1.600-2-.200-.300 0-.500.100-.600l.500-.500c.100-.200.200-.300.300-.500v-.500l-.900-2.200c-.200-.500-.400-.500-.600-.500h-.800z"
        />
      </svg>
      <span className="wa__label">WhatsApp</span>
    </a>
  );
}
