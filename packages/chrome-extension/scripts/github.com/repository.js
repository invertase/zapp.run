function main() {
  const pubspecs = document.querySelectorAll('[title="pubspec.yaml"]');

  if (!files) return;

  for (const child of pubspecs) {
    const zappButton = document.createElement("a");
    zappButton.href = `https://zapp.run/github/${location.pathname}`;
    zappButton.target = "_blank";
    zappButton.style.marginLeft = "16px";
    zappButton.innerHTML = `<img src="https://static.invertase.io/assets/zapp/logo.svg" alt="Logo" width="16" style="margin-right: .3rem;" /><span>Open in Zapp!</span>`;
    child.parentElement.appendChild(zappButton);
  }
}

main();
