import { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Explore the world of heritage and culture through our blogs",
};

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
