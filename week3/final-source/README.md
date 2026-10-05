# Week 3 final front-end source

## Run locally
1. Install Node.js (use an LTS release).
2. Run `npm ci` to install the pinned dependencies.
3. Run `npm run dev` to start the Vite development server.
4. Run `npm run build` to generate the static site in `dist/`.

The repository contains the complete front-end source, including the legacy home-page module copied by `build.mjs`. Generated `dist/` output and Sites-specific hosting metadata are not included. There is no backend; profile persistence and community actions are front-end demonstrations.

## 中文说明
这里保存 week3 的完整前端源码。先安装 Node.js，再运行 `npm ci`、`npm run dev` 启动本地页面；运行 `npm run build` 可生成 `dist/` 静态文件。已包含构建脚本需要的 `public/legacy.js` 和锁定依赖版本的 `package-lock.json`。不包含构建产物和 Sites 专用托管元数据；本项目没有后端，档案保存和社区互动均为前端演示。

## Team collaboration / 小组协作

- Make ongoing code changes in this `final-source/` folder. `week1/` and `week2/` are historical records; keep them unchanged so earlier iterations remain reviewable.
- Before sharing a change, run `npm run build`. Commit changes on a feature branch and open a pull request, or commit to `main` if the team has agreed on direct collaboration.
- Teammates need GitHub write access to push branches. Without it, they can fork the public repository and submit a pull request.

后续开发统一在本目录进行；week1/week2 用于保留历史版本。提交修改前运行 `npm run build` 检查。组员有仓库写权限时可开分支并提 PR；没有写权限时可 fork 后提 PR。
