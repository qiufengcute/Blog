---
title: Packnload - Minecraft模组批量下载工具
author: Qiufeng
date: 2026-03-02 20:00:00
category: 游戏工具
tags:
  - Minecraft
  - 模组管理
  - 批量下载
  - 工具软件
excerpt: 这是一款轻量级、高效的Minecraft Mod批量下载工具，可以根据配置文件自动下载指定的模组。
---

Github:

[GitHub - qiufengcute/Packnload: 一款轻量级、高效的 Minecraft Mod 批量下载工具](https://github.com/qiufengcute/Packnload/)

```json
{
    "name":"模组包名",
    "author":"作者名",
    "version":"版本号",
    "mod_list":[
        "mod列表"
    ]
}
```

# `mod_list` 填写说明

`mod_list` 中的每一项可以是 **普通字符串**（单个模组），也可以是 **字符串数组**（多个备选模组）。

## 1. 普通格式（单个模组）

直接填写 Modrinth 上的模组 slug，即 Modrinth 页面 URL 中 `/mod/` 后面的部分。

**示例：**  
- Sodium 的 Modrinth 页面为：`https://modrinth.com/mod/sodium` → slug 为 `sodium`  
- 如果 URL 末尾带有斜杠，如 `https://modrinth.com/mod/sodium/`，请去掉末尾的 `/`，结果仍为 `sodium`

```json
"mod_list": [
    "sodium",
    "iris"
]
```

---

## 2. 备选格式（多个候选模组）

如果某个模组有多个候选 slug（例如不同作者发布的版本、不同分支或镜像源），可以用 **数组** 将多个 slug 写在同一项中。

**格式：**  
`["候选1", "候选2", "候选3", ...]`

**下载逻辑：**  
程序会按数组顺序依次尝试下载：  
- 候选1 成功 → 使用该模组，跳过后续候选；  
- 候选1 失败 → 自动尝试候选2；  
- 候选2 失败 → 继续尝试候选3，依此类推；  
- 全部失败 → 该模组最终标记为下载失败。

**示例：**

```json
"mod_list": [
    "sodium",
    ["fabric-api", "fabric-api-fallback"],
    "iris",
    ["optifine", "optifine-alt", "optifine-mirror"]
]
```

上述示例中：
- `sodium` 和 `iris` 为普通单项，直接下载；
- `fabric-api` 优先尝试 `fabric-api`，失败则尝试 `fabric-api-fallback`；
- `optifine` 依次尝试三个候选，直到成功或全部失败。
