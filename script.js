let articles = [
  {
    id: 1,
    title: "Article 1",
  },
  {
    id: 2,
    title: "Article 2",
  },
  {
    id: 3,
    title: "Article 3",
  },
];

let comments = [
  {
    contect: "beautiful post!",
    article_id: 1,
  },
  {
    contect: "It's a good article!",
    article_id: 2,
  },
  { contect: "It's an exciting article!", article_id: 2 },
  {
    contect: "It's an uninteresting article!",
    article_id: 3,
  },
];

let newArticle = new Promise((resolve) => {
  resolve(articles);
});

function loaded(articles) {
  return new Promise((resolve) => {
    resolve([comments, articles]);
  });
}

window.onload = () => {
  function printToHTML(allMatch) {
    let HTML = ``;
    allMatch[1].forEach((post) => {
      HTML += `<h5>${post.title}</h5>`;
      allMatch[0].forEach((comment) => {
        if (comment.article_id == post.id) {
          HTML += `<p>${comment.contect}</p>`;
        }
      });
    });
    document.body.innerHTML = HTML;
  }
  newArticle.then(loaded).then(printToHTML);
};
