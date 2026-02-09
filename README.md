# 石火电竞新春福袋抽奖活动

这是一个基于 HTML/CSS/JavaScript 的新春福袋抽奖活动页面，支持自动代码混淆和 GitHub Pages 部署。

## 项目结构

```
shihuo-bingo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署配置
├── src/
│   ├── css/
│   │   └── style.css           # 样式文件
│   ├── js/
│   │   └── main.js             # JavaScript 逻辑（将被混淆）
│   ├── images/                 # 图片资源（如需本地图片）
│   └── index.html              # 主页面
├── package.json                # 项目配置
└── README.md                   # 说明文档
```

## 功能特性

- ✨ 新春主题福袋抽奖动画
- 🎁 概率抽奖系统（18.8-188.8 元店存奖励）
- 🎨 精美的红包拆开动画效果
- 📱 响应式设计，支持移动端
- 🔒 JavaScript 代码自动混淆保护
- 🚀 GitHub Actions 自动部署

## 本地开发

1. 克隆项目到本地
2. 安装依赖：
   ```bash
   npm install
   ```
3. 构建项目（混淆 JS 并生成 dist 目录）：
   ```bash
   npm run build
   ```
4. 在浏览器中打开 `dist/index.html` 预览

## GitHub Pages 部署

### 方法一：自动部署（推荐）

1. 将项目推送到 GitHub 仓库的 `main` 分支
2. GitHub Actions 会自动执行以下操作：
   - 安装依赖
   - 混淆 JavaScript 代码
   - 构建项目到 `dist` 目录
   - 部署到 `gh-pages` 分支
3. 在仓库设置中启用 GitHub Pages：
   - 进入 `Settings` → `Pages`
   - Source 选择 `gh-pages` 分支
   - 保存后等待几分钟即可访问

### 方法二：手动部署

1. 本地执行 `npm run build`
2. 将 `dist` 目录内容推送到 `gh-pages` 分支

## 代码混淆说明

项目使用 `javascript-obfuscator` 对 JavaScript 代码进行混淆，配置参数：
- `--compact true`：压缩代码
- `--self-defending true`：自我保护，防止格式化和调试

混淆后的代码将难以阅读和逆向，保护您的业务逻辑。

## 自定义配置

### 修改奖励概率

编辑 `src/js/main.js` 中的 `REWARDS` 数组：

```javascript
const REWARDS = [
    { amount: 18.8, probability: 0.45 },   // 45% 概率
    { amount: 28.8, probability: 0.25 },   // 25% 概率
    { amount: 58.8, probability: 0.15 },   // 15% 概率
    { amount: 68.8, probability: 0.10 },   // 10% 概率
    { amount: 128.8, probability: 0.03 },  // 3% 概率
    { amount: 188.8, probability: 0.02 }   // 2% 概率
];
```

### 修改活动时间

编辑 `src/index.html` 中的活动时间文本：

```html
<div class="activity-time">活动时间:2025年1月1日-2月28日</div>
```

### 修改充值规则

编辑 `src/index.html` 中的充值规则卡片部分。

## 注意事项

1. 图片资源使用了 CDN 链接，如需本地化，请下载图片到 `src/images` 目录并修改路径
2. 确保 GitHub 仓库已启用 Actions 功能
3. 首次部署后需要在仓库设置中手动启用 GitHub Pages
4. 代码混淆会增加构建时间，但能有效保护代码

## 技术栈

- HTML5
- CSS3（动画、渐变、响应式）
- JavaScript（ES6+）
- JavaScript Obfuscator（代码混淆）
- GitHub Actions（CI/CD）

## 许可证

MIT License
