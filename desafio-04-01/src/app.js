import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

const themes = {
  primary: {
    backgroundColor: "#40dd40",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#c5336b",
    color: "#fff",
  },
};

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

const articles = [
  {
    id: "d65s4vS6H4D",
    title: "Lorem Ipsum",
    content: () => (
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    ),
  },
  {
    id: "ndv9lV4EWOP416",
    title: "Lorem Ipsum",
    content: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis
          commodo odio aenean sed adipiscing diam. Vitae congue eu consequat ac.
          Quam lacus suspendisse faucibus interdum posuere lorem. Volutpat diam
          ut venenatis tellus in metus. Magna fringilla urna porttitor rhoncus.
          Ac felis donec et odio pellentesque diam volutpat. Commodo sed egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec. Sit
          amet volutpat consequat mauris nunc. Condimentum lacinia quis vel eros
          donec. Pharetra pharetra massa massa ultricies mi. Massa eget egestas
          purus viverra accumsan in. Imperdiet sed euismod nisi porta lorem
          mollis aliquam. Laoreet suspendisse interdum consectetur libero id
          faucibus nisl tincidunt eget.
        </p>
        <p>
          In pellentesque massa placerat duis ultricies lacus sed turpis
          tincidunt. Amet nisl suscipit adipiscing bibendum. Morbi blandit
          cursus risus at. Sapien faucibus et molestie ac. Non diam phasellus
          vestibulum lorem sed risus. Tincidunt eget nullam non nisi. Tortor
          pretium viverra suspendisse potenti nullam ac tortor vitae purus.
          Neque egestas congue quisque egestas diam in. Ac tincidunt vitae
          semper quis. Turpis egestas maecenas pharetra convallis posuere.
          Senectus et netus et malesuada fames ac turpis. Dignissim sodales ut
          eu sem integer. Interdum varius sit amet mattis vulputate enim nulla
          aliquet. Quis ipsum suspendisse ultrices gravida. Egestas fringilla
          phasellus faucibus scelerisque eleifend donec. Velit aliquet sagittis
          id consectetur purus ut faucibus. Ornare arcu dui vivamus arcu felis
          bibendum. Eu ultrices vitae auctor eu augue ut. Nunc congue nisi vitae
          suscipit tellus. Scelerisque fermentum dui faucibus in ornare quam
          viverra. Suscipit tellus mauris a diam maecenas sed. Non tellus orci
          ac auctor augue mauris augue neque gravida. Amet luctus venenatis
          lectus magna fringilla. Vestibulum lectus mauris ultrices eros in.
          Ultrices sagittis orci a scelerisque purus.
        </p>
        <p>
          Ultrices eros in cursus turpis massa. Urna cursus eget nunc
          scelerisque viverra mauris. Nunc aliquet bibendum enim facilisis
          gravida neque convallis a. Ipsum dolor sit amet consectetur.
          Consectetur a erat nam at lectus urna duis convallis convallis. At
          quis risus sed vulputate odio ut enim blandit volutpat. Vitae semper
          quis lectus nulla at volutpat diam ut. Vulputate odio ut enim blandit
          volutpat maecenas volutpat blandit aliquam. Netus et malesuada fames
          ac turpis egestas maecenas pharetra convallis. Facilisis volutpat est
          velit egestas dui. Leo a diam sollicitudin tempor id eu nisl. Praesent
          semper feugiat nibh sed pulvinar proin gravida.
        </p>
      </>
    ),
  },
  {
    id: "64eh8OWCEM15",
    title: "Finibus Bonorum et Malorum",
    content: () => (
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
    ),
  },
];

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }
`;

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 70px 50px 1fr 40px;
  grid-template-columns: 0.3fr 0.7fr;
`;

const Header = styled.header`
  background-color: rgb(29, 6, 36);
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: white;
  text-align: center;
`;

const Menu = styled.nav`
  background-color: rgb(50, 104, 223);
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const Sidebar = styled.section`
  background-color: rgb(241, 231, 245);
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  background-color: rgb(50, 223, 102);
  grid-column: 2 / 3;
  overflow-y: scroll;
`;

const Footer = styled.footer`
  background-color: rgb(168, 50, 223);
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;

const Title = styled.h1``;

const Button = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

function App() {
  const [article, setArticle] = useState(articles[0]);

  function changeArticle(id) {
    const desiredArticle = articles.filter((a) => a.id === id);
    if (desiredArticle.length) {
      setArticle(desiredArticle[0]);
    }
  }

  return (
    <>
      <GlobalStyle />
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
          {articles.map((article) => (
            <button
              key={article.id}
              href="/"
              onClick={() => changeArticle(article.id)}
            >
              {article.title}
            </button>
          ))}
        </Sidebar>
        <Content>
          <Title>{article.title}</Title>
          {article.content()}
          <Button theme={themes.primary}>Like</Button>
          <Button theme={themes.secondary}>Do something boring.</Button>
        </Content>
        <Footer>Made by someone with a lot of lazy</Footer>
      </Layout>
    </>
  );
}

export default App;
