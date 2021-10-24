function Sidebar({ articles }) {
  return (
    <section>
      {articles.map((article) => (
        <a key={article.id} href="/">
          {article.title}
        </a>
      ))}
    </section>
  );
}

export default Sidebar;
