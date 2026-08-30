# DMS 知识库 skill 便携包

把 **DMS 知识库生成 skill** 与 **全局 UI 风格规范** 打包，方便迁移到其他会话 / 机器。

## 包含内容

| 文件 | 说明 |
|------|------|
| `skills/dms-knowledge-base/SKILL.md` | DMS 知识库生成 skill（自动套用 Kb* 紫色组件、面包屑、留白、Tab 结构） |
| `UI风格规范.md` | 全局 UI 风格规范（设计令牌 `--kb-*` + 18 个组件 API + 布局与禁止事项） |
| `install.sh` | 一键安装脚本 |

## 安装

```bash
unzip dms-kb-bundle.zip
cd dms-kb-bundle
bash install.sh
```

安装目标：
- skill → `~/.codebuddy/skills/dms-knowledge-base/`
- 规范 → `~/.codebuddy/UI风格规范.md`（全局单一来源，所有会话共享）

## 使用

重启 / 新建会话后，调用 `dms-knowledge-base`（或描述“生成家装XX界面知识库页面”），
skill 会自动读取全局 UI 规范并生成页面。

## 前提

目标机器需存在知识库项目 `/workspace/system-knowledge-base`（VitePress + Vue 3）。
skill 内已写死该项目路径，换项目时需同步调整。
