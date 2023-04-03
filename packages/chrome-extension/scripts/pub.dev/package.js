const LOGO = `<img src="https://static.invertase.io/assets/zapp/logo.svg" alt="Logo" width="16" title="Open in Zapp!" style="margin-right: .3rem;" />`;

function main() {
  const badges = document.querySelectorAll(".tag-badge-sub");

  let supportsWeb = false;

  for (const badge of badges) {
    if (badge.innerHTML.toLowerCase() === "web") {
      supportsWeb = true;
      break;
    }
  }

  if (!supportsWeb) return;

  // The header element of tabs.
  const header = document.querySelector(".detail-tabs-header");
  const [, pkg, type, value] = location.pathname.split("/").filter(Boolean);

  if (!header || !pkg) return;

  const li = document.createElement("li");
  li.classList.add("detail-tab", "tab-link");

  let href = `https://zapp.run/pub/${pkg}`;

  if (type === "versions" && value) {
    href += `/${value}`;
  }

  const a = document.createElement("a");
  a.href = href;
  a.style.display = "inline-flex";
  a.style.alignItems = "center";
  a.target = "_blank";
  a.innerHTML = LOGO + `<span>Open in Zapp!</span>`;

  li.appendChild(a);
  header.appendChild(li);

  // Version tabs
  if (type === "versions" && !value) {
    const versions = document.querySelector("tbody").querySelectorAll("tr");
    for (const version of versions) {
      const td = document.createElement("td");
      const aVersion = a.cloneNode(true);
      td.className = "archive";
      aVersion.href = `https://zapp.run/pub/${pkg}/${version.getAttribute(
        "data-version"
      )}`;
      aVersion.innerHTML = LOGO;
      td.innerHTML = aVersion.outerHTML;
      version.appendChild(td);
    }

    const thead = document.querySelector("thead").querySelector("tr");
    const th = document.createElement("th");
    th.className = "archive";
    thead.appendChild(th);
  }
}

main();
