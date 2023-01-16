const package = document.querySelector(".detail-body");

const currentPackage = location.pathname.split("/")[2];

if (package) {
  const badge = document.createElement("li");

  badge.classList.add("detail-tab", "tab-link");

  const link = document.createElement("a");
  link.href = `https://zapp.run/pub/${currentPackage}`;
  link.target = "_blank";
  link.text = "Open in Zapp";

  badge.appendChild(link);

  const heading = package.querySelector(".detail-tab-analysis-title");

  heading.insertAdjacentElement("afterend", badge);
}
