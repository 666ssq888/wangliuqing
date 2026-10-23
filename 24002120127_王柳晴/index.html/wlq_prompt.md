# 提示词记录（wlq_prompt.md）

> 规则：所有提示词在执行之前以附加方式写入本文件，不覆盖之前内容。记录内容包括：时间、使用的模型、提示词内容。

---

## 2026-10-23 13:57 | 模型：GLM-5.3-Flash

**提示词内容：**

设置规则：从现在开始，所有CSS类名，id名、js变量都以wlq_开始，所有的提示词都在执行之前写入文件wlq_prompt.md，以附加的方式写入，不覆盖之前的内容，写入的内容包括时间、使用的模型、提示词内容。
设置规则：所有新建的html文件加入超链接入口到首页index.html
使用当前目录下skills文件夹中的frontend-designskill做两个html网页iconfont-1.html,inconfont-2.html，使得页面具有艺术品牌的样式。分别显示font awesome图标和lucide图标，前者使用字体图标的方式，后者使用svg的方式，相关的cdn文件下载到本目录下的cdn目录。

**补充说明（用户澄清）：**
- 首页不是 xiaohshu。
- 根据flex布局复习相关内容的HTML和css新建一个index.html首页。
- 新建一个首页 index.html（作品集/导航首页），iconfont-1.html、iconfont-2.html、cdn 目录放在 24002120127_王柳晴\index.html\ 下。

---

## 2026-10-23 14:32 | 模型：GLM-5.3-Flash

**提示词内容：**

xiaohshu这个文件里面的内容不要加进来  这个不属于flex布局里面的内容

**执行说明：** 从首页 index.html 的导航和作品卡片网格中移除所有指向 xiaohshu 的入口，仅保留 flex 布局相关内容。

---

## 2026-10-23 14:34 | 模型：GLM-5.3-Flash

**提示词内容：**

好的，执行吧

**执行说明：** 用户确认执行上一条（移除首页 xiaohshu 内容）。该操作已于 14:32 完成：导航链接、「小红书页面复刻」卡片及未使用的 .wlq_cover_e 样式均已删除，grep 校验首页已无任何 xiaohshu/小红书 引用。

---

## 2026-10-23 14:45 | 模型：GLM-5.3-Flash

**提示词内容：**

创建skill:提交项目：使用git commit并push到gitee仓库，
gitee私人令牌 （已脱敏，现存放于 Windows 凭据管理器）
仓库地址:`https://gitee.com/wang-liu-qing/my-wangliuqing`

**执行说明：** 用 skill-creator 创建项目级 skill（d:\高级网页\.trae\skills\commit-project\SKILL.md），流程为 git add/commit 后以内联令牌 URL push 到用户个人 gitee 仓库，不改动 origin（老师仓库）。

---

## 2026-10-23 14:51 | 模型：GLM-5.3-Flash

**提示词内容：**

提交项目

**执行说明：** 按 commit-project skill 执行：审查变更→暂存（脱敏 wlq_prompt.md 中令牌后）→commit→push 到 gitee.com/wang-liu-qing/my-wangliuqing（凭据管理器自动认证）。

---
