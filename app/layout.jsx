import "@/styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Next App",
  description: "Next App description",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
