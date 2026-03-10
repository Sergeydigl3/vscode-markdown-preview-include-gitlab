<div align="center">

<img src="logo128.png" alt="Markdown Transclusion" width="128" />

<br/>

# Markdown Preview Transclusion

#### Seamlessly include external files in your Markdown Preview

<br/>

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/sergeydigl3.vscode-markdown-preview-include-gitlab?label=Marketplace&logo=visual-studio-code&logoColor=white&color=007ACC)](https://marketplace.visualstudio.com/items?itemName=sergeydigl3.vscode-markdown-preview-include-gitlab)
&nbsp;
[![Installs](https://img.shields.io/visual-studio-marketplace/i/sergeydigl3.vscode-markdown-preview-include-gitlab?label=Installs&color=007ACC)](https://marketplace.visualstudio.com/items?itemName=sergeydigl3.vscode-markdown-preview-include-gitlab)
&nbsp;
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<br/>

A Visual Studio Code extension that extends the built-in Markdown Preview<br/>with the ability to **transclude content from other files** —<br/>keeping your documentation modular, maintainable, and DRY.

<br/>

[Get Started](#-quick-start) · [Syntax](#-syntax-in-action) · [Options](#-options) · [Use Cases](#-use-cases)

---

</div>

<br/>

## ⚡ Quick Start

Drop any of these syntaxes into your `.md` file and open **Markdown Preview**:

```text
:(chapter.md)                     ← CommonMark proposal
!!!include(chapter.md)!!!         ← Markdown-It-Include style
::include{file=chapter.md}        ← Directive-based
```

The referenced file's content appears inline in the preview. That's it.

<br/>

## 🔍 How It Works

| Scenario | Preview output |
|:--|:--|
| ✅ &ensp;File found | Content rendered inline |
| ❌ &ensp;File not found | `File 'path/file.md' not found` |
| 🔄 &ensp;Circular reference | `Circular reference between 'child.md' and 'parent.md'` |

> Both error messages are fully customizable — see **[Options](#-options)** below.

<br/>

## 📸 Syntax in Action

<table>
<tr>
<td width="50%">

**CommonMark-style**

![CommonMark-style syntax demo](examples/syntaxCommonMarkProposal.png)

</td>
<td width="50%">

**Markdown-It-Include-style**

![Markdown-It-Include-style syntax demo](examples/syntaxMarkdownItImplementation.png)

</td>
</tr>
</table>

<br/>

## 🛠 Options

<table><tr><td>
<br/>

**Custom "file not found" message**

```
:[Your custom message](missing-file.md)
```

Use `{{FILE}}` to insert the filename dynamically:

```
:[⚠ Could not locate {{FILE}}](missing-file.md)
```

<img src="examples/syntaxNotFound.png" alt="File not found demo" />

<br/>
</td></tr></table>

<table><tr><td>
<br/>

**Custom "circular reference" message**

```
:[|Your circular-ref message](file.md)
```

Placeholders: `{{PARENT}}` — parent file &ensp;·&ensp; `{{FILE}}` — child file

```
:[|🔄 Loop detected: {{FILE}} ↔ {{PARENT}}](file.md)
```

<img src="examples/syntaxCircularAlternative.png" alt="Circular reference demo" />

<br/>
</td></tr></table>

<table><tr><td>
<br/>

**Suppress all error output**

Pass an empty label to silently skip missing or circular files:

```
:[](file.md)
```

<img src="examples/syntaxOmitOutput.png" alt="Omit output demo" />

<br/>
</td></tr></table>

<br/>

## 💡 Use Cases

<details>
<summary>&ensp;📄&ensp;<strong>Reusable copyright footer</strong></summary>

<br/>

Create `includes/copyright.md`:

```markdown
Copyright &copy; 2019 Company Name - All rights reserved
```

Reference it in any document:

```markdown
Text with information

:[Copyright Notice](includes/copyright.md)
```

**Result →**

> Text with information
>
> Copyright © 2019 Company Name — All rights reserved

<br/>

</details>

<details>
<summary>&ensp;🔗&ensp;<strong>Shared link definitions</strong></summary>

<br/>

Create `includes/links.md`:

```markdown
[GITHUB]: https://github.com
[VSMARKETPLACE]: https://marketplace.visualstudio.com
```

Include at the top of your document, then use references anywhere:

```markdown
:(includes/links.md)

Check out the project on [Github][GITHUB].
```

**Result →**

> Check out the project on [Github](https://github.com)

<br/>

</details>

<details>
<summary>&ensp;👥&ensp;<strong>Multi-author large documents</strong></summary>

<br/>

Split a document into chapters so multiple editors can work in parallel, then assemble in one master file:

`chapter1.md`
```markdown
## Chapter 1
Text for Chapter 1
```

`chapter2.md`
```markdown
## Chapter 2
Text for Chapter 2 including a link to [Github][GITHUB]
```

`master.md`
```markdown
# Document Title
:(includes/links.md)

:(chapter1.md)

:(chapter2.md)

---

:[Copyright Notice](includes/copyright.md)
```

**Result →**

> # Document Title
>
> ## Chapter 1
> Text for Chapter 1
>
> ## Chapter 2
> Text for Chapter 2 including a link to [Github](https://github.com)
>
> ---
>
> Copyright © 2019 Company Name — All rights reserved

<br/>

</details>

<br/>

## 🙏 Credits & Inspiration

This extension stands on the shoulders of:

| | Project | Description |
|:--|:--|:--|
| 🔧 | [**VSCode-Markdown-Preview**](https://github.com/SIPS1980/vscode-markdown-preview-include) | The original VS Code implementation |
| 📦 | [**Markdown-It-Include**](https://github.com/camelaissani/markdown-it-include) | Plugin for [Markdown-It](https://github.com/markdown-it/markdown-it) |
| 💬 | [**Transclusion discussion**](https://talk.commonmark.org/t/transclusion-or-including-sub-documents-for-reuse/270) | Thread on the [CommonMark](https://commonmark.org/) forum |

<br/>

<div align="center">

---

Made with ❤️ for the Markdown community

</div>