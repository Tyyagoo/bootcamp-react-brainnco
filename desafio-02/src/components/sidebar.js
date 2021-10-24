function Sidebar({ articles, changeArticle }) {
  return (
    <section>
      {articles.map((article) => (
        <button
          key={article.id}
          href="/"
          onClick={() => changeArticle(article.id)}
        >
          {article.title}
        </button>
      ))}
    </section>
  );
}

export default Sidebar;
