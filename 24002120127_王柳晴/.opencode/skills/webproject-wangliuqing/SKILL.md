---
name: webproject-wangliuqing
description: Use when working on the webproject-wangliuqing (高级网页设计课堂实践) project. Covers its structure (index.html, flex/svg exercise pages, iconfont assets), CSS conventions, and how to develop, modify and verify these static HTML pages.
---

# webproject-wangliuqing 项目技能

王柳晴的《高级网页设计》课堂实践静态网页项目。纯 HTML + CSS 实现，无构建工具，直接在浏览器中打开即可预览。

## 项目结构

```
24002120127_王柳晴/
├── index.html/            # 主页面（下设各练习页面）
│   ├── index.html         # 主入口：课堂实践导航/展示页（约 500+ 行，内嵌 CSS 变量主题）
│   ├── svg005.html        # SVG 练习页
│   ├── svg.css            # SVG 页面样式
│   ├── flex复习.html      # Flex 布局复习页
│   ├── flex_css005.css    # Flex 页面样式
│   └── font/              # iconfont 字体图标资源（iconfont.css、demo、ttf/woff/woff2）
├── README.md              # 项目说明
├── README.en.md           # 英文说明
└── .gitignore
```

## 技术要点

- 纯静态：无框架、无打包工具，改完直接刷新浏览器查看。
- 主页面用 CSS 变量主题（`--primary`、`--muted` 等），渐变背景 + 毛玻璃卡片风格。
- 页面为 `zh-CN`，字体栈以 `"Microsoft YaHei"` 开头。
- 字体图标依赖 `font/` 目录，勿删除该目录（iconfont 的 woff/woff2/ttf 是关键资产）。

## 开发与修改约定

- 新增练习页面时，往 `index.html/` 目录下添加页面，并确保主入口 `index.html` 中能跳转/链接到它。
- 样式尽量复用主页面已有的 CSS 变量与命名规范（`flex-*`、`svg-*` 前缀区分）。
- 修改后验证方式：直接用浏览器打开 `index.html/` 下的对应 HTML 文件检查效果，核对控制台无报错、图标正常显示。

## 提交与推送

作业需提交到 gitee 仓库 `neusoft_wangyao_jsj/webproject-wangliuqing`，项目根目录即 `24002120127_王柳晴/` 文件夹，默认分支 `master`。