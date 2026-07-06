const container = document.getElementById("latestBlogs");

if (container && typeof blogs !== "undefined") {
  const latest = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  latest.forEach(blog => {
    const card = document.createElement("div");
    card.className = "card blog-card";

    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.excerpt}</p>
      <a href="${blog.link}">Read Article →</a>
    `;

    container.appendChild(card);
  });
}
