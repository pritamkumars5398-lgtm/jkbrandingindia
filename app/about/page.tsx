import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | Brandingo",
  description:
    "Learn more about Brandingo, a leading branding, printing, and digital marketing agency with over 10 years of experience.",
  alternates: {
    canonical: "https://jkbrandingindia.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <About />
      </div>
      <Footer />
    </main>
  );
}
