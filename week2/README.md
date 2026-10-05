# Week 2 — Programme intelligence and application control
# Week 2 — 项目情报与申请驾驶舱

## Purpose / 本周目标

**EN.** Week 2 replaces shallow, flat programme browsing with a university → programme → detail journey, then makes each application track its own requirements and deadlines. This prevents students from comparing incomplete information or mixing one programme’s checklist with another’s.

**中文。** 第二周对应项目库和“我的申请”：把项目资料从浅卡片做成可核对的详情页，再把材料进度拆到每个目标项目里。改动针对“看不懂要求、比较不了项目、容易漏交材料和 DDL”这些实际问题。

## Iterations / 源码版本

4. **04 — UK programme library** (`04-project-library/04-project-library.patch`) — 新增院校聚合、项目列表、独立项目详情、课程与申请信息、Offer Board 和项目讨论区。
5. **05 — Application dashboard** (`05-application-dashboard/05-application-dashboard.patch`) — 新增按项目维护的申请状态、阶段清单、DDL 提醒、看板/时间轴与互助提示。

## Detailed review / 逐项复盘

### 项目库 1.0 → 2.0

**改动前是什么样 / Before.** 所有项目平铺成卡片；点开小窗口只看到少量 AI 摘要，例如项目名和语言要求。

**痛点 / Pain points.**
1. 平铺信息无法说明课程结构、申请材料和个人背景之间的关系，学生看完仍不知道要进一步核对什么。
2. 官网常用英国 2:1 等表述，中国学生不容易直接理解；学校还可能有中国院校名单或不同学校档位要求。
3. 中介口头解释、社交平台旧帖都难以核验；缺少真实案例时，学生无法判断自己比较的依据是否可靠。
4. 同一项目的申请者彼此分散，DIY 申请的信息焦虑和孤独感没有产品承接。

**改成什么样 / Change.** 页面层级调整为“大学聚合页 → 大学项目列表 → 独立项目详情长页”，不再用弹窗承载核心信息。详情页集中展示学制、学费、学术/语言要求、轮次或 rolling 状态、PS/推荐信、课程主题、材料和官方链接；补充 AI 解读和时间线建议。对 2:1 等条件，设计上要翻译成学生能理解的参考范围（例如 985/211、双非均分区间），同时明确它是参考解释，不能冒充校方硬门槛；具体院校 list 和分数政策必须回到项目官网逐项核对。增加 Offer Board（背景饼图、均分区间柱状图、脱敏案例列表、结果上报入口）和项目讨论区（找搭子、求助、定位、@AI 高频问题）。

**为什么要这么改 / Why this change is necessary.** 选校需要的是可比、可溯源、能解释差异的信息，不是更多卡片。官方条件与面向中国学生的解释分层展示，能减少“把经验说成规则”；案例和讨论则为信息判断与同伴支持留出位置。

**当前原型做到哪里 / Prototype status.** 已有院校聚合、项目列表和独立详情；课程、要求、时间线及来源链接以静态演示记录呈现。Offer Board 使用 Recharts 展示图表，并有案例筛选/上报表单；项目讨论支持本地添加、评论和模拟 @AI。当前案例、图表和讨论内容全为虚构演示，互动仅在当前页面生效，没有真实录取数据库、自动爬取、人工审核后台或公开 UGC。项目摘要不是运行时 AI 抓取；页面标注查阅日期和“尚未人工复核”，最终以官网为准。

### 我的申请 1.0 → 2.0

**改动前是什么样 / Before.** 三个目标项目各显示一个进度百分比（例如 33%、17%、0%），下面是一串通用勾选项，如成绩单和推荐信。

**痛点 / Pain points.**
1. 看不出哪个项目最急，也没有截止日期倒计时；漏掉 deadline 可能直接影响申请。
2. 静态清单只说明“有任务”，不说明任务阶段、当前状态和下一步。
3. 推荐信、PS、语言成绩和网申要求因项目而异，统一清单容易误导。
4. 只有进度条，没有陪伴和求助入口，用户焦虑时仍要自己判断下一步。

**改成什么样 / Change.** 顶部增加目标项目/准备中/已完成汇总、最近 DDL 倒计时，以及列表/时间轴切换。主体转为“准备中、等待推荐人、网申已递交、收到 Offer”看板；临近 DDL 且进度不足时用高风险颜色提醒。项目卡片显示进度、下一步建议和微型节点；展开后按“基础材料 → 文书与推荐信 → 网申与递交”分阶段看任务，每个项目各有自己的材料清单和状态。加入推荐信/PS 的 AI 助手入口、申请者互助营地、同辈节奏提示及情绪支持文案。

**为什么要这么改 / Why this change is necessary.** 把申请从“勾选列表”变为能回答“我有几个项目、哪个最急、下一步做什么”的驾驶舱。截止提醒降低遗忘风险；按项目拆清单避免把 A 项目材料误用于 B 项目；互助与节奏提示让工具在压力节点提供陪伴。

**当前原型做到哪里 / Prototype status.** 看板、时间轴、项目级清单、倒计时、阶段展开、AI 提示、树洞和同辈模块均有前端演示。DDL 与 75% 同辈数据是固定模拟值，不是官网截止日期或真实用户统计；修改状态只在当前浏览期间生效，没有提醒推送或后台保存。

## Trust rules / 信任规则

- Separate official requirements from Chinese-student guidance; never present a heuristic conversion as an admissions guarantee.
- Show source links, lookup dates and review status beside programme data.
- Keep all offer cases and community posts clearly labelled as fictional until consented, verifiable data and moderation exist.

- 官网硬要求与中国学生参考解释分开，不承诺录取，也不把均分建议说成学校规则。
- 项目数据旁标来源、查阅日期和复核状态。
- 在取得可核实、经授权的数据并建立审核流程前，案例和社区内容必须标为虚构演示。
