# Zapp!

Welcome to the GitHub repository for Zapp! An online editor allowing you to build Flutter applications in the browser.

[https://zapp.run](https://zapp.run)

The source code for Zapp is currently closed-source, this repository is used for issue reporting, feature requests and a public project roadmap.

> **Note:** Zapp is currently in private EAP and only explicitly allowed users can access it.

## FAQs

### What is Zapp?

Zapp is an online developer environment for building, running and sharing Flutter projects in the browser.

### Where is the source code for Zapp?

Zapp is currently a closed source project, accessible via [https://zapp.run](https://zapp.run). We may decide to open source it in the future, and will update this repository if we decide to do so.

### What [pub.dev](https://pub.dev) packages are supported?

Zapp builds projects using Flutter Web, therefore only packages which support Flutter Web are supported in Zapp. If a package you are using supports web but isn't working correctly, please file an issue so we're able to investigate.

### What isn't supported?

We're currently working hard to get as many features supported as possible. The top features we do not yet support are:

- Assets
- Isolates
- Dart lints (via `analysis_options.yaml`) https://github.com/invertase/zapp.run/issues/18
- Semantic token highlighting https://github.com/invertase/zapp.run/issues/19
