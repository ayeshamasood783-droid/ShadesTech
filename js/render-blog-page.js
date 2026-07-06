document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("allBlogs");

  if (!blogContainer || typeof blogs === "undefined") {
    console.error("Blog container or blog data not found");
    return;
  }

  blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(blog => {
      const card = document.createElement("div");
      card.className = "card blog-card";

      card.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.excerpt}</p>
        <a href="${blog.link}">Read Article →</a>
      `;

      blogContainer.appendChild(card);
    });
});
