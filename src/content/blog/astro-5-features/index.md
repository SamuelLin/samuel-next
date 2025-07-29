---
title: '探索 Astro 5 的新功能'
description: '深入了解 Astro 5 帶來的重大更新，包括 Content Layer API、環境變數管理等新特性。'
date: 2024-12-05
tags: ['astro', 'javascript', 'web development']
---

# Astro 5 的重大更新

Astro 5 於 2024 年底發布，帶來了許多令人興奮的新功能和改進。

## 主要新功能

### 1. Content Layer API

全新的內容層 API 提供了更強大和靈活的內容管理方式：

- 建置速度提升 5 倍（Markdown）
- 記憶體使用減少 25-50%
- 支援多種資料來源

### 2. 環境變數 (astro:env)

新的 `astro:env` 模組提供型別安全的環境變數管理：

```typescript
import { getSecret } from 'astro:env/server'
import { API_URL } from 'astro:env/client'
```

### 3. SVG 元件

可以直接匯入 SVG 檔案作為 Astro 元件使用：

```astro
---
import Logo from './logo.svg'
---

<Logo />
```

### 4. Server Islands

伺服器島嶼架構的進化，結合靜態 HTML 和動態伺服器元件。

## 效能改進

- 升級到 Vite 6.0
- 更好的開發體驗
- 更快的建置時間

Astro 5 真的是一個令人興奮的版本！
