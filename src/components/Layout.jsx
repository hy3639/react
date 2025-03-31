import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh", padding: "2rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
