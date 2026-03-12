const container = document.getElementById("changelog");

changes.forEach(update => {
  const div = document.createElement("div");
  div.className = "update";

  const title = document.createElement("h2");
  title.textContent = `VER ${update.version}: ${update.title}`;
  div.appendChild(title);

  const details = document.createElement("div");
  details.className = "details";

  const ul = document.createElement("ul");
  update.items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  details.appendChild(ul);
  div.appendChild(details);

  // Toggle al clicar
  div.addEventListener("click", () => {
    details.style.display = details.style.display === "block" ? "none" : "block";
  });

  container.appendChild(div);
});
