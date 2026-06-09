import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Brandingo",
  description: "Get in touch with Brandingo. Reach us at our Banglore or Ahmedabad offices.",
};

export default function ContactPage() {
  return <ContactClient />;
}
