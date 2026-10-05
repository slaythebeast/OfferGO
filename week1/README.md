# Week 1 — Product foundation and maintainable UI

## Purpose
This week establishes the initial OfferGo prototype, clarifies its DIY support positioning, and moves the interface onto a structure that can support later feature work.

## Iterations

1. **01 — Initial static prototype** (`01-initial-static/`) — Added the first rendered website bundle and baseline navigation/content. This made the idea tangible for early review and gave the team a concrete starting point.
2. **02 — UI and information refinement** (`02-ui-refinement/02-ui-refinement.patch`) — Refined the homepage and sample programme presentation, clarified source/verification messaging, and improved how programme information is surfaced. This makes the product easier to understand and avoids presenting mock data as verified facts.
3. **03 — React/Vite foundation** (`03-react-foundation/03-react-foundation.patch`) — Introduced a React-based build and separated the interface into maintainable source files. This makes subsequent feature iterations easier to develop and review.

## 中文说明
第一周先把产品从概念变成可评审的页面，再整理信息呈现，最后建立 React/Vite 前端基础，方便后续按模块迭代。示例只用于演示，不代表真实申请人的背景。

## Source history
The patches are the original Site-source commits in chronological order. Apply the patch files with `git apply` in chronological order after the initial snapshot when reconstructing the early prototype.
