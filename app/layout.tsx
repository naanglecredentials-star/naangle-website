import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

export const metadata = {
  title: "NAANGLE — AI Agency",
  description: "Premium glassmorphism AI agency site with pink/blue gradients."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 py-6">
          <div className="relative max-w-6xl w-full rounded-3xl bg-white border border-white shadow-card overflow-hidden">
            <Navbar />
            <main className="pt-6 pb-10">{children}</main>
            <Footer />
          </div>
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
