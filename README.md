# claude-themes

Claude Code 桌面端与手机端的配色主题合集。

## crimson-ember

暗红余烬：深色模式是近黑的血红底、玫红强调、琥珀色警告；浅色模式是带一点血色的旧纸。

| 用途 | 深色 | 浅色 |
| --- | --- | --- |
| 页面底色 | `#1c0306` | `#f1e2e1` |
| 卡片 / 面板 | `#26060a` / `#30090e` | `#f6ebea` / `#fbf5f4` |
| 正文 | `#f6e9e8` | `#2a0d10` |
| 强调色 | `#d4405f` | `#d4405f` |
| 警告 | `#e0913a` | `#e0913a` |

主题只在 Claude 桌面端和手机 app 中绘制；终端和 VS Code 不画主题。若当前界面画不出来，状态栏会显示原因。

## 安装

在终端里的 Claude Code 会话中：

```
/plugin install crimson-ember --marketplace LunarKernel/claude-themes
```

出现 `Add marketplace?` 时输入 `y`，再选择安装范围（选 user 即可在之后的所有会话里生效）。

从 shell 安装：

```bash
claude plugin install crimson-ember --marketplace LunarKernel/claude-themes
```

在桌面端（`/plugin` 不可用时）：点输入框旁的 +，选 Plugins，用 Add marketplace 添加 `LunarKernel/claude-themes`，再 Add plugin。

## 许可证

MIT，见 [LICENSE](LICENSE)。
