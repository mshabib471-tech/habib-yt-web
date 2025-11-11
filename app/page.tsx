import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Header />
      <main className="flex-1 text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-primary">Habib YT - Auto Delivery</h1>
        <p className="text-gray-400 mt-2">বাংলাদেশের দ্রুত ও নিরাপদ গেম টপ-আপ সার্ভিস</p>
      </main>
      <Footer />
    </div>
  );
}
