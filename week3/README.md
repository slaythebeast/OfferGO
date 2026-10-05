# Week 3 — Writing coach, application knowledge and peer support
# Week 3 — 文书教练、申请知识库与同伴支持

## Purpose / 本周目标

**EN.** Week 3 turns writing feedback and application information into connected workspaces. The editor reuses profile material; the guide/community page combines official-source learning with peer support. The current release remains a front-end prototype.

**中文。** 第三周对应文书教练和申请资讯。文书页承接建档素材，资讯页把可查证的攻略与同伴互助放在一起。目标是减少空白页焦虑和信息差，同时守住“不代写、不虚构、重要信息回到官网核实”的边界。

## Iterations / 源码版本

6. **06 — Personal Statement Studio** (`06-personal-statement-studio/06-personal-statement-studio.patch`) — 三栏文书工作台、档案素材插入、选中段落反馈、PS/CV/推荐信模式。
7. **07 — Application news and community** (`07-application-news/07-application-news.patch`) — 官方攻略、学校原始链接、项目变更、帖子/问答、标签筛选和本地互动。
8. **Final source snapshot** (`final-source/`) — 当前完整 React/Vite 前端和构建配置，可供组员继续开发。

## Detailed review / 逐项复盘

### 文书教练 1.0 → 2.0

**改动前是什么样 / Before.** 一个项目下拉框、一个空白文本框，旁边列出学术动机、相关经历等静态问题。

**痛点 / Pain points.**
1. 文书是核心服务，但空白框无法帮助学生启动写作。
2. 学生已经花时间整理过经历，却还要在文书页重新找素材；建档和写作割裂。
3. 只有静态问题，没有指出长度、逻辑、项目匹配或模板化风险，学生不知道如何改。
4. 一个编辑器不能很好处理 PS、CV、推荐信三种不同任务。

**改成什么样 / Change.** 改成三栏工作台：左边是硬背景、STAR 经历、动机目标素材库；中间是编辑器、格式工具和字数统计；右边是“AI 招生官视角”反馈。素材可一键插入，选中段落时反馈随之切换；显示项目匹配分、字数风险、逻辑连贯性和模板化提醒。顶部选择目标项目与文书类型，CV/推荐信切换到对应结构化表单。

**为什么要这么改 / Why this change is necessary.** 把“我不知道写什么”变成“从真实素材中选证据，再由学生自己组织表达”；反馈要能落到当前项目和当前段落，才有明确修改动作。招生官的隐性偏好被拆成可检查项目，但最终内容由学生本人判断和撰写。

**当前原型做到哪里 / Prototype status.** 有素材卡片插入、项目/文书类型选择、字数检查、选中段落反馈、推荐信/CV 表单及本机草稿。示例人物和经历为虚构内容；匹配分和诊断是前端模拟，不调用真实招生官或大模型。建档可生成提纲传入工作台，但工作台示例素材仍是静态演示；完整的档案数据库联动和可靠实时诊断尚未接入。

### 申请资讯 1.0 → 2.0

**改动前是什么样 / Before.** 页面只有几个静态入门卡片和一个“暂无变更记录”的空区。

**痛点 / Pain points.**
1. 内容过少，用户看完不能直接推进申请步骤。
2. 没有官网原始链接，观点难以核实，政策变更更容易被误传。
3. 学生看完攻略仍找不到同方向的人，也没有地方求助、交流或获得陪伴。

**改成什么样 / Change.** 左侧建立官方攻略库：网申、PS、CV、推荐信、GPA、rolling、语言、CAS/ATAS、费用等主题，并提供学校官网原始链接；项目变更记录展示状态、更新时间和核实来源。右侧做社区瀑布流，支持找搭子、定位求助、文书焦虑、Offer 播报等标签；用户可发帖、点赞、评论、收藏，并从相关帖子跳转攻略。悬浮助手帮助定位内容。

**为什么要这么改 / Why this change is necessary.** 官方知识负责解释流程和信息来源，社区负责分享经验与情绪支持。两者并排，用户既能找到下一步操作，也能找到相似处境的人；信息来源可追溯，减少把过期帖子当政策的风险。

**当前原型做到哪里 / Prototype status.** 页面已有攻略分类、官方链接、模拟变更记录、发帖弹窗、标签、点赞/评论/收藏和小助手。帖子互动只保存于当前页面，不会公开发布；变更数据明确标记“模拟/未核实”，没有真实订阅通知、人工审核后台或实时 AI 回答。

## Principles carried across the product / 贯穿全站的具体原则

1. **能复用就不重复填。** 档案 → PS 提纲 → 文书工作台；原始经历由学生提供，系统不擅自补成绩或成果。
2. **把规则解释成人话，同时标清边界。** 英国 2:1 可配中国学生理解的参考口径，但参考均分不等于学校录取条件或录取概率。
3. **每条重要事实都能回到来源。** 项目和政策展示官网链接、查阅日期、人工复核状态；不确定就标记待核实。
4. **信任和陪伴要有依据。** Offer 案例、同辈比例、帖子和评论在取得真实授权数据前均为模拟，不能伪装成真实统计或真实用户反馈。
5. **隐私默认从严。** 当前原型没有后端上传；PS、成绩单和推荐信等敏感材料不应放进公开帖子。

## Public showcase / 公开展示

The prototype is viewable at <https://offergo-uk.xibian45.chatgpt.site>. The website was made public for group access; public viewing does not grant GitHub write permission. All original Site-source commits are dated 3 October 2026; week1–week3 are grouped by development stage rather than separate calendar weeks.

网站公开地址：<https://offergo-uk.xibian45.chatgpt.site>。公开浏览不等于 GitHub 可编辑；组员要修改代码仍需仓库写入权限。历史源码提交日期均为 2026-10-03，week1–week3 按开发阶段归档，不代表不同自然周。

## Data and authorship / 数据与文书边界

All academic profiles, programme outcomes and community activity in this front-end prototype are fictional demonstrations. The writing tool is a coach, not a ghostwriter; the user remains responsible for factual accuracy and final wording.

当前前端中的个人档案、录取案例与社区动态均为虚构演示。文书工具定位为教练和反馈，不代写、不虚构经历；事实准确性和最终文本由申请人确认。
