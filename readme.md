<div align="center">
  <h1>gradient-figlet</h1>
  <p>A CLI that creates gradient ASCII art from text with FIGlet and style.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/gradient-figlet">
    <img src="https://img.shields.io/npm/v/gradient-figlet?style=flat-square" alt="npm version" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/npm/dt/gradient-figlet?style=flat-square" alt="npm downloads" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/peterfritz/gradient-figlet?style=flat-square" alt="license" />
  </a>
</div>

<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151580761-95edc909-7915-43af-bfe9-6dfc9a04c2fd.png" alt="gradient-figlet logo">
</a>

<hr />

## Basic usage

You can use npx to install and run the package

<h4 id="basic-usage"><code>npx gradient-figlet "your text here" -l</code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151617788-22abe574-927d-4b9f-b986-51a278342073.png" alt='npx gradient-figlet "your text here" -l'>
</a>

## Options

| option         | description                                       | default value | required | [examples](#examples)    |
| -------------- | ------------------------------------------------- | ------------- | -------- | ------------------------ |
| -l             | adds a trailing newline to fix vertical alignment | false         | false    | [-l](#l)                 |
| -m             | makes the gradient horizontal                     | false         | false    | [-lm](#lm)               |
| -t `theme`     | changes the theme ([themes list](#themes))        | 'rainbow'     | false    | [-lt](#lt)               |
| --from `color` | gradient's start color                            | null          | false    | [--from, --to](#from-to) |
| --to `color`   | gradient's end color                              | null          | false    | [--from, --to](#from-to) |

### Themes

One of [gradient-string's built-in gradients](https://github.com/bokub/gradient-string#available-built-in-gradients) listed below.

<h4 id="list-themes"><code>npx gradient-figlet --list-themes</code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151613280-8b0b8876-b04c-421f-ad6b-8097f163f864.png" alt='npx gradient-figlet --list-themes'>
</a>

### Examples

<h4 id="l"><code>npx gradient-figlet "your text here" -l</code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151594015-5e61b5b3-e19c-4841-972e-1dba269de089.png" alt='npx gradient-figlet "your text here" -l'>
</a>

<h4 id="lm"><code>npx gradient-figlet "your text here" -lm</code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151595739-6a193e69-0d07-4ff1-bf88-60c00046e968.png" alt='npx gradient-figlet "your text here" -lm'>
</a>

<h4 id="lt"><code>npx gradient-figlet "your text here" -lt <a href="#themes">retro</a></code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151597620-9f7a2968-c58b-47ce-9f12-22bba25c16e7.png" alt='npx gradient-figlet "your text here" -lt retro'>
</a>

<h4 id="from-to"><code>npx gradient-figlet --from "#42047e" --to "#07f49e" -l</code></h4>
<a href="#">
  <img src="https://user-images.githubusercontent.com/61599784/151616113-754a46d2-9515-4565-92d8-dc76abd710c9.png" alt='npx gradient-figlet --from "#42047e" --to "#07f49e" -l'>
</a>


