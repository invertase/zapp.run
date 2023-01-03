<p align="center">
  <a href="https://zapp.run">
    <img width="100px" src="https://static.invertase.io/assets/zapp/logo.svg"><br/>
  </a>
  <h2 align="center">Zapp!</h2>
  <a href="https://invertase.link/discord">
   <img src="https://img.shields.io/discord/295953187817521152.svg?style=flat-square&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord">
  </a>
</p>

Welcome to the GitHub repository for Zapp! An online editor allowing you to build Flutter applications in the browser.

[https://zapp.run](https://zapp.run)

The source code for Zapp is currently closed-source, this repository is used for issue reporting, feature requests and a public project roadmap.

> **Note:** Zapp is currently in open beta so please report any issues.

## FAQs

### What is Zapp?

Zapp is an online developer environment for building, running and sharing Flutter projects in the browser.

### Where is the source code for Zapp?

Zapp is currently a closed source project, accessible via [https://zapp.run](https://zapp.run). We may decide to open source it in the future, and will update this repository if we decide to do so.

### What [pub.dev](https://pub.dev) packages are supported?

Zapp builds projects using Flutter Web, therefore only packages which support Flutter Web are supported in Zapp. If a package you are using supports web but isn't working correctly, please file an issue so we're able to investigate.

### What isn't supported?

We're currently working hard to get as many features supported as possible. The top features we do not yet support are:

- Dart lints (via `analysis_options.yaml`) https://github.com/invertase/zapp.run/issues/18
- Semantic token highlighting https://github.com/invertase/zapp.run/issues/19
