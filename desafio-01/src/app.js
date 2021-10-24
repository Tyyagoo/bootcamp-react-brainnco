import "./styles.css";
import Layout from "./layout";
import Header from "./components/header";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <Layout>
      <Header />
      <Menu />
      <Sidebar />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
