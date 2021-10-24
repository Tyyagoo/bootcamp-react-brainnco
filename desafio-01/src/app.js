import "./styles.css";
import Layout from "./layout";
import Header from "./components/header";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

import Title from "./components/title";
import Button from "./components/button";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Articles",
    url: "/articles",
  },
  {
    name: "About",
    url: "/about",
  },
];

function App() {
  return (
    <Layout>
      <Header>
        <Title>React</Title>
      </Header>
      <Menu>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.name}
          </a>
        ))}
      </Menu>
      <Sidebar>
        <Button kind="primary">Like</Button>
        <Button kind="secondary">Do something boring.</Button>
      </Sidebar>
      <Content>
        <Title>Lorem Ipsum</Title>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Content>
      <Footer>Made by someone with a lot of lazy</Footer>
    </Layout>
  );
}

export default App;
