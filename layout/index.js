import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">{children}</div>
      <Footer />
    </div>
  );
}
