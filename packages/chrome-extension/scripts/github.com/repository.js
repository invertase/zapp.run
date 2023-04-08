function main() {
  const exampleFolder = document.querySelector('[title="example"]');
  const pubspecYaml = document.querySelector('[title="pubspec.yaml"]');

  if (!pubspecYaml) return;

  const zappButton = document.createElement("a");
  let href = `https://zapp.run/github/${location.pathname}`;
  if (exampleFolder) {
    href += "/example";
  }
  zappButton.href = href;
  zappButton.target = "_blank";
  zappButton.style.marginLeft = "16px";
  zappButton.innerHTML = `<img src="https://static.invertase.io/assets/zapp/logo.svg" alt="Logo" width="16" style="margin-right: .3rem;" /><span>Open in Zapp!</span>`;
  pubspecYaml.parentElement.appendChild(zappButton);
}

main();
