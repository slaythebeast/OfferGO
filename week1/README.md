# Week 1 — Profile building: from a cold form to a guided interview
# Week 1 — 建档：从冷冰冰的问卷到有温度的访谈

## Purpose / 本周目标

**EN.** The first week establishes a reviewable website and reshapes student intake from a one-shot score form into a staged profile-building flow. The reason is practical: programme matching, application planning and writing all need the same verified student facts and experience evidence.

**中文。** 第一周对应建档环节的 1.0 → 2.0，并记录最初三次源码更新。核心是先把学生的真实信息和经历整理成可复用的申请档案，再做选校、时间线和文书建议，减少反复填写和回忆。

## Iterations / 源码版本

1. **01 — Initial static prototype** (`01-initial-static/`) — 第一版静态页面，让网站从概念变成可演示、可讨论的原型。
2. **02 — UI and programme information refinement** (`02-ui-refinement/02-ui-refinement.patch`) — 调整初始页面及电子/电气项目示例，明确展示来源和演示数据状态。
3. **03 — React/Vite foundation** (`03-react-foundation/03-react-foundation.patch`) — 把页面拆分为可维护的 React 模块，为建档、项目库、申请工作台和文书页继续迭代打基础。

## Detailed review / 逐项复盘

### 建档环节 1.0 → 2.0

**改动前是什么样 / Before.** 单页问卷集中填写学校、均分/GPA、语言、年度预算、城市偏好等硬指标，提交后就直接给选校结果。

**痛点 / Pain points.**
1. 只看学校和分数就打分，像中介流水线；学生会觉得系统不了解自己的经历和目标。
2. 学生常常不知道什么经历值得写，面对空白 PS 很难开始。
3. 预算在早期往往没有可靠概念，过早要求填写会让人误以为不符合预算就不该继续探索。
4. 选校、时间线和文书若各自重新问一遍背景，重复劳动也容易出现前后不一致。

**改成什么样 / Change.** 先收集必要硬指标，再进入五个话题的访谈：申请动机、课程/项目、实习/科研、个人贡献与成长、未来规划。表单保留学校、专业、均分、语言、标化情况、目标入学季、方向、排名偏好、城市、是否跨专业及经历数量；移除年度预算。访谈后把原始回答沉淀为硬背景、STAR 经历素材、动机与规划、初步定位四类档案，并提供生成 PS 提纲、申请时间线和导入文书工作台的入口。

**为什么要这么改 / Why this change is necessary.** 顺序变成“先录事实 → 再追问证据 → 最后生成服务”。STAR（背景、任务、行动、结果）帮助学生回忆具体贡献；同一份档案可以支撑选校、网申和文书，避免把学生一次次当成新用户重新询问。

**当前原型做到哪里 / Prototype status.** 页面已有两步表单与五段预设访谈、STAR 整理卡片、档案到 PS 提纲/工作台的前端跳转。访谈问题和档案提取目前是预设逻辑，并非真实大模型；草稿只保存在当前浏览器 localStorage，不上传服务器。核心课程成绩暂未单列字段，当前通过课程/项目访谈追问；后续可增加明确的课程名称、成绩和相关性字段。预算已从建档必填项移除；城市仍作为可选偏好保留。

## 重建早期版本 / Reconstructing the early versions

The initial static files are in `01-initial-static/dist/`. Apply the numbered patches in order with `git apply` to reproduce the source progression. Generated bundles are kept only where needed; React source and build configuration are the maintainable record.

初始静态文件位于 `01-initial-static/dist/`。按编号顺序使用 `git apply` 应用补丁，可重建后续源码变化。React 源码和构建配置是主要维护对象，后续生成的打包文件不重复收录。

## Data and privacy / 数据与隐私

The example student and experiences are fictional. The current prototype does not send form or interview content to an AI service or backend. Examples are not the account owner's real academic profile.

页面中的学生和经历均为虚构示例，不包含网站发起人的真实学术档案。当前原型不调用真实 AI、不接后端，也不会把访谈内容上传。
