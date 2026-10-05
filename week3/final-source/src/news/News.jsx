import React,{useMemo,useState,useEffect} from 'react';
import './news.css';

const guideGroups=[
 {name:'入门与全流程',eyebrow:'START HERE',articles:[
  {title:'英国硕士 DIY，从哪里开始？',tag:'申请流程',summary:'把选方向、查项目、准备材料和提交申请拆成可以执行的小步。',body:'先明确学习方向和入学季，再用项目官网核对课程、入学要求、材料与申请时间。建立每个项目自己的清单；不要把不同学校的要求合并成一份。提交后继续检查推荐信、补件和结果通知。',visual:'flow'},
  {title:'网申系统怎么填？手把手避坑指南',tag:'网申',summary:'从账号资料到材料上传，按页面顺序检查容易遗漏的信息。',body:'开始前准备好护照姓名拼写、教育经历日期、成绩单、推荐人信息和所需文件。填写时保持日期与材料一致；上传后逐份预览文件是否完整、清晰、方向正确。具体栏目含义和必交材料以当前申请系统说明为准。',visual:'form'},
  {title:'留位费是什么？什么时候交？可以退吗？',tag:'录取后',summary:'先读录取信中的金额、回复期限和退款条件，再决定是否接受。',body:'留位费通常用于确认接受录取，可能计入学费；是否可退、延期或转项目取决于学校与具体录取条款。收到 offer 后保存原始信件，逐项核对支付截止日期、退款例外和付款渠道。不要依据社交平台经验代替 offer 条款。',visual:'deposit'}
 ]},
 {name:'文书与申请材料',eyebrow:'WRITE WITH EVIDENCE',articles:[
  {title:'PS 是什么？一篇优秀的 PS 要回答什么？',tag:'PS',summary:'把学术动机、相关准备、项目选择和未来规划连成一条真实主线。',body:'先确认目标项目是否要求 PS、题目和字数，再选与课程相关的真实经历。说明问题是什么、你承担什么、做了哪些行动、学到了什么。项目匹配部分要查过课程或培养内容之后再写，避免套用一段通用赞美。'},
  {title:'CV 怎么写？英国招生官想看什么？',tag:'CV',summary:'让教育、项目、实习与技能清楚可读，并区分个人贡献和团队成果。',body:'按项目要求决定是否提交 CV。条目可采用“行动 + 方法 + 结果”的结构；结果必须真实、可解释。日期、职位、工具和成果与其他申请材料保持一致。优先呈现与项目相关的信息，不需要把所有经历平均展开。'},
  {title:'推荐信怎么找老师？网推链接收不到怎么办？',tag:'推荐信',summary:'尽早征询推荐人，并为每个项目单独记录提交状态。',body:'联系熟悉你课程或研究表现的老师，说明申请方向、项目和预计时间，并提供便于参考的材料。网推链接未收到时，先核对邮箱拼写、垃圾邮件与系统状态；不要代替老师提交或伪造推荐信。具体重发方式联系学校招生团队。'},
  {title:'GPA 怎么换算？算术均分与加权均分怎么看？',tag:'成绩',summary:'不要只套用统一换算公式，先看成绩单口径和院校官方说明。',body:'算术平均与按学分加权平均可能不同，学位等级也不等于一个通用 GPA 数值。准备申请时保留学校正式成绩单和评分解释；项目要求补充加权均分证明时，联系教务部门开具。目标院校如何评估中国学历，请以该校国家/地区说明为准。'}
 ]},
 {name:'定校、语言与标化',eyebrow:'MAKE AN INFORMED CHOICE',articles:[
  {title:'QS 综合排名重要，还是专业排名重要？',tag:'选校',summary:'排名只是一种参考，课程内容、行业方向和个人目标同样值得比较。',body:'综合排名反映学校整体指标，专业排名采用的学科指标也有局限。可以同时查看课程结构、实验或行业资源、地理位置、学费和毕业去向，并结合自己的目标形成选择理由。回国就业时，不同雇主和岗位的判断标准也不相同。'},
  {title:'英国大学的 List 是什么？怎么查院校门槛？',tag:'选校',summary:'不同项目可能采用不同院校名单，需逐项目确认是否适用。',body:'部分项目会参考本科院校分组或具体名单，但名称、适用范围和最低成绩可能因学院与课程而异。先找目标项目的官方入学要求，确认自己的院校是否在适用范围内；不确定时向招生团队书面询问。不要使用来源不明的中介名单作为结论。'},
  {title:'什么是 Rolling 录取？为什么要尽早准备？',tag:'申请节奏',summary:'开放式或分轮申请的规则不同，准备节奏应看项目页面。',body:'有些项目滚动审理，有些按固定轮次截止，也可能在名额满后停止收件。查项目当季官方页面的开放时间、截止轮次及名额说明，提前备齐材料能减少临近截止时的疏漏；不应把“早申”误解成录取保证。'},
  {title:'雅思还没出分，可以先递交申请吗？',tag:'语言',summary:'是否可先递交取决于项目规则及网申要求。',body:'部分项目可能允许语言成绩后补，也有项目在申请阶段就要求提供。检查课程页面和申请系统，确认语言材料的提交时间、认可考试、单项要求以及 offer 条件。未确认前不要假设所有项目都接受无语言递交。'},
  {title:'什么是语言班？差 0.5 分一定能配读吗？',tag:'语言',summary:'课程、入学要求和适用条件因学校与项目而异。',body:'语言班通常有独立的申请周期、入学条件与费用。需核对目标项目是否接受对应课程、语言差距是否符合资格、最晚申请时间及签证安排。不要只按“差 0.5 分”判断适用性。'},
  {title:'GRE / GMAT：哪些英国项目要求提交？',tag:'标化',summary:'要求可能按课程变化，不要把同一学院规则套用到所有项目。',body:'查看项目当季招生页面的必交、可选或豁免说明。商科项目之间差异明显，工程与理科项目也应逐项核对。若网页未说明，向招生团队询问适用入学季和成绩有效期。'}
 ]},
 {name:'递交、签证与行前',eyebrow:'FROM OFFER TO ARRIVAL',articles:[
  {title:'提交网申前，十项检查别漏掉',tag:'网申',summary:'核对申请项目、姓名、日期、推荐人邮箱、文件版本与费用状态。',body:'重点检查：项目和入学季选对；姓名与证件一致；教育经历日期准确；文件上传完整可读；文书版本对应项目；推荐人邮箱拼写无误；成绩单页数齐全；翻译件与原件配对；申请费支付成功；提交后保存确认邮件和申请编号。网申因校而异，最终以系统提示为准。'},
  {title:'Conditional Offer 怎么换 Unconditional 和 CAS？',tag:'录取后',summary:'按 offer 条件逐项完成，再遵循学校指引办理后续材料。',body:'先读清楚 offer 中的学术、语言或文件条件与完成期限。条件满足后按学校要求上传正式材料并等待核验；CAS 通常由学校在满足相关条件、完成必要确认后办理。办理顺序、押金与 CAS 规则以学校当季指引和个人 portal 为准。'},
  {title:'存款证明要准备多少？“28 天规则”适用吗？',tag:'签证',summary:'资金与持有时间要求会受签证规则和个人情况影响，务必查官方最新说明。',body:'签证资金要求可能随时间更新，并与课程所在地、学费已缴金额及申请人情况有关。准备前查英国政府签证页面和学校签证团队指引，按规定计算金额和资金持有时间。本文不提供金额结论，也不替代最新移民规则。'},
  {title:'ATAS 是什么？哪些申请人需要申请？',tag:'签证',summary:'是否需要 ATAS 与课程代码、研究领域和国籍等因素有关。',body:'ATAS 适用范围以英国政府和学校向个人提供的信息为准。收到学校课程代码或相关提醒后，检查官方资格说明、申请处理时间和课程开始日期。需要 ATAS 时留出审核时间；未收到要求也不应仅凭专业名称猜测。'},
  {title:'英国留学一年要花多少钱？学费与生活费拆解',tag:'预算',summary:'按目标城市和个人预算分别估算，不用一个平均数套所有人。',body:'预算可分为学费、住宿、日常生活、交通、签证医疗附加费、往返交通和一次性安置支出。先查看目标课程公布的国际学生学费，再结合学校城市的住宿选择和官方生活成本建议估算。汇率、房型和个人消费会带来明显差异。'},
  {title:'DIY 申请很孤独？怎么找靠谱的申请搭子？',tag:'心理支持',summary:'约定信息边界、互相监督进度，但最终判断仍回到官方来源。',body:'可以与目标方向或申请季相近的同学建立小组，约定每周分享进度、互相检查清单。不要公开护照、成绩单或推荐人联系方式；遇到政策信息时共同找到学校原始页面。搭子是陪伴，不是代替本人负责申请。'}
 ]}
];

const officialLinks=[
 {school:'UCL · Graduate Study',title:'Writing your personal statement',detail:'UCL 研究生个人陈述官方说明：申请人可查看通用建议，并应核对目标课程的具体要求。',url:'https://www.ucl.ac.uk/study/prospective-students/graduate/how-apply/writing-your-personal-statement',date:'核对于 2026-10-03'},
 {school:'University of Edinburgh',title:'Postgraduate references',detail:'爱丁堡大学研究生推荐信说明：查看推荐人流程、提交时点与申请系统指引。',url:'https://study.ed.ac.uk/postgraduate/applying/what/references',date:'核对于 2026-10-03'}
];
const changes=[
 {title:'曼大商学院某项目：2027 申请开放时间调整',status:'模拟条目 · 未核实',body:'此条仅用于展示变更记录样式，不代表曼彻斯特大学真实政策。发布前应核对该项目官网的开放日期与适用入学季。',date:'更新时间：2026-10-03（演示）'},
 {title:'UCL 某项目：语言条件可能更新',status:'模拟条目 · 未核实',body:'此条为虚构示例，不代表 UCL 已调整语言要求。实际要求需逐项目查看官网课程页与语言等级说明。',date:'更新时间：2026-10-03（演示）'}
];
const tabs=[['guides','官方攻略库'],['experience','经验分享'],['questions','互助问答'],['changes','项目变更']];
const quickTags=['找搭子','定位求助','文书焦虑','Offer播报','选校纠结'];
const postTags=['经验分享',...quickTags];
const initialPosts=[
 {id:1,kind:'question',tag:'定位求助',name:'海盐拿铁',avatar:'盐',time:'今天 10:24',title:'双非 88 分，想申曼大 EEE，有戏吗？好焦虑 😭',text:'均分和课程都不太确定够不够门槛，项目库里看到电力和通信方向，想问问大家怎么拆解要求。以下为虚构社区演示，不代表真实申请结果。',likes:24,comments:15,preview:['同双非，我 87 分被拒了……样本少不能直接类比，先核对课程要求。','建议按官网学科要求对照课程，再决定是否加申其他项目。'],commentsOpen:false,liked:false,saved:false},
 {id:2,kind:'experience',tag:'找搭子',name:'Cloud_27',avatar:'C',time:'昨天 21:08',title:'2027 Fall UCL 通信工程，想找一起准备材料的搭子',text:'准备这周梳理课程和 PS 素材，想互相提醒节点、交流官方信息。帖子和账号均为虚构演示。',likes:18,comments:6,preview:['我也在看通信方向，可以一起对照官网课程！'],commentsOpen:false,liked:false,saved:false},
 {id:3,kind:'rant',tag:'文书焦虑',name:'晚风有信',avatar:'晚',time:'昨天 16:40',title:'PS 开头改了八遍，越写越像模板……',text:'试着从一段真实项目经历开始，反而比“从小热爱”更容易落到具体问题。今天先停一下，明天再读一遍。虚构动态。',likes:31,comments:9,preview:['给自己一点时间，先把发生了什么写出来。'],commentsOpen:false,liked:false,saved:false},
 {id:4,kind:'experience',tag:'Offer播报',name:'橘子汽水',avatar:'橘',time:'周一 09:15',title:'拿到第一封 offer 了！谢谢一起打卡的伙伴',text:'申请季的好消息当然值得记录。此贴为虚构社区样例，不代表真实录取案例。',likes:42,comments:12,preview:['恭喜！也提醒大家不同项目的背景不能横向推断。'],commentsOpen:false,liked:false,saved:false}
];
const morePosts=[
 {id:5,kind:'question',tag:'选校纠结',name:'一只小信号',avatar:'信',time:'周日 18:32',title:'综合排名和课程方向要怎么平衡？',text:'最近在把课程模块、地理位置和就业方向放进同一张对比表，发现排名之外也有很多取舍。虚构演示。',likes:11,comments:3,preview:['可以先列对自己最重要的 3 项，再逐个核对。'],commentsOpen:false,liked:false,saved:false},
 {id:6,kind:'question',tag:'定位求助',name:'纸飞机27',avatar:'纸',time:'周日 13:11',title:'语言成绩没出来，可以先把网申准备好吗？',text:'先分开准备不依赖语言成绩的材料，同时确认目标项目的语言补交规则。本文是虚构问答演示。',likes:7,comments:4,preview:['准备可以先开始，是否能无语言递交要核对项目页。'],commentsOpen:false,liked:false,saved:false}
];

export default function News(){
 const [tab,setTab]=useState('guides'),[query,setQuery]=useState(''),[tagFilter,setTagFilter]=useState(''),[posts,setPosts]=useState(initialPosts),[loadedMore,setLoadedMore]=useState(false),[expandedArticle,setExpandedArticle]=useState(null),[modal,setModal]=useState(false),[title,setTitle]=useState(''),[body,setBody]=useState(''),[selectedTags,setSelectedTags]=useState([]),[toast,setToast]=useState(''),[assistant,setAssistant]=useState(false),[commentText,setCommentText]=useState({});
 const q=query.trim().toLowerCase();
 useEffect(()=>{const handler=e=>{if(e.key==='Escape')setModal(false)};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[]);
 useEffect(()=>{if(toast){const t=setTimeout(()=>setToast(''),3200);return()=>clearTimeout(t)}},[toast]);
 const allArticles=guideGroups.flatMap(g=>g.articles.map(a=>({...a,group:g.name})));
 const matchingArticles=allArticles.filter(a=>!q||[a.title,a.summary,a.tag,a.group].join(' ').toLowerCase().includes(q));
 const shownPosts=posts.filter(p=>{const text=[p.title,p.text,p.tag,p.name].join(' ').toLowerCase();const tabMatch=tab==='experience'?p.kind==='experience':tab==='questions'?p.kind==='question'||p.kind==='rant':true;return tabMatch&&(!tagFilter||p.tag===tagFilter)&&(!q||text.includes(q))});
 const filteredChanges=changes.filter(x=>!q||`${x.title} ${x.body}`.toLowerCase().includes(q));
 function notify(message){setToast(message)}
 function switchTab(value){setTab(value);setExpandedArticle(null);setTagFilter('')}
 function toggleLike(id){setPosts(list=>list.map(p=>p.id===id?{...p,liked:!p.liked,likes:p.likes+(p.liked?-1:1)}:p))}
 function toggleSave(id){setPosts(list=>list.map(p=>p.id===id?{...p,saved:!p.saved}:p));notify('收藏状态已在当前页面切换。')}
 function toggleComments(id){setPosts(list=>list.map(p=>p.id===id?{...p,commentsOpen:!p.commentsOpen}:p))}
 function submitComment(id,e){e.preventDefault();if(!commentText[id]?.trim())return;setPosts(list=>list.map(p=>p.id===id?{...p,preview:[...p.preview,commentText[id].trim()],comments:p.comments+1}:p));setCommentText(v=>({...v,[id]:''}));notify('评论已添加到本地演示动态。')}
 function publishPost(e){e.preventDefault();if(!title.trim()||!body.trim()||selectedTags.length===0)return;const next={id:Date.now(),kind:selectedTags.some(t=>['经验分享','找搭子','Offer播报'].includes(t))?'experience':'question',tag:selectedTags[0],name:'访客（本地演示）',avatar:'我',time:'刚刚',title:title.trim(),text:body.trim(),likes:0,comments:0,preview:[],commentsOpen:false,liked:false,saved:false};setPosts(list=>[next,...list]);setTitle('');setBody('');setSelectedTags([]);setModal(false);switchTab('experience');notify('帖子已加入当前页面演示，没有公开发布。')}
 function loadMore(){if(loadedMore)return;setPosts(list=>[...list,...morePosts]);setLoadedMore(true)}
 const assistantText=q?`我可以帮你查“${query}”相关的攻略。优先看学校官网要求，再对照文章中的核对清单。`:'不知道该看哪篇？直接问我，我帮你找攻略。';
 const relatedArticle=(post)=>allArticles.find(a=>post.tag==='文书焦虑'?a.tag==='PS':post.tag==='定位求助'?a.tag==='选校':a.tag==='申请流程');
 const iconFor=a=>a.visual==='flow'?'01 → 02 → 03 → 04':a.visual==='form'?'FORM CHECK':a.visual==='deposit'?'OFFER · FEE':'GUIDE';

 return <div className="news-page">
  <div className="news-hero"><div><span className="news-kicker">GUIDES · COMMUNITY · UPDATES</span><h1>申请资讯</h1><p>先读懂申请，再做决定。在这里查攻略、找搭子、看更新。</p></div><button className="news-post-button" onClick={()=>setModal(true)}>＋ 发布帖子</button></div>
  <div className="news-tools"><label className="news-search"><span>⌕</span><input aria-label="搜索攻略、求助或标签" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索攻略、求助或标签..."/>{query&&<button onClick={()=>setQuery('')} aria-label="清空搜索">×</button>}</label><nav className="news-tabs" aria-label="资讯分类">{tabs.map(([id,label])=><button key={id} className={tab===id?'active':''} aria-pressed={tab===id} onClick={()=>switchTab(id)}>{label}</button>)}</nav></div>
  <div className="news-layout"><main className="news-main">
   {tab==='guides'&&<>
    <div className="news-feature"><div className="news-feature-copy"><span className="news-feature-tag">申请路线图 · 置顶精选</span><h2>先理清申请顺序，再开始准备材料。</h2><p>从查看项目要求、整理档案，到文书、推荐信和网申，每一步都有对应清单。</p><button onClick={()=>{setExpandedArticle('英国硕士 DIY，从哪里开始？');document.querySelector('#guide-start')?.scrollIntoView({behavior:'smooth',block:'center'})}}>打开入门攻略</button></div><div className="news-flow-visual"><div><i>01</i><b>了解项目</b></div><span/><div><i>02</i><b>整理材料</b></div><span/><div><i>03</i><b>完成申请</b></div></div></div>
    {guideGroups.map((group,gi)=>{const items=group.articles.filter(a=>!q||[a.title,a.summary,a.tag,group.name].join(' ').toLowerCase().includes(q));if(!items.length)return null;return <section className="news-guide-group" key={group.name}><div className="news-group-title"><div><span>{group.eyebrow}</span><h2>{group.name}</h2></div><small>{items.length} 篇</small></div><div className="news-guide-grid">{items.map((a,i)=><article className="news-guide-card" id={gi===0&&i===0?'guide-start':undefined} key={a.title}><button className="news-guide-open" aria-expanded={expandedArticle===a.title} onClick={()=>setExpandedArticle(expandedArticle===a.title?null:a.title)}><div className={`news-guide-visual tone-${(i+gi)%4}`}><span>{iconFor(a)}</span><small>{a.tag}</small></div><div className="news-guide-copy"><span className="news-guide-label">{a.group}</span><h3>{a.title}</h3><p>{a.summary}</p><span className="news-read-link">{expandedArticle===a.title?'收起内容':'阅读攻略'} <b>↗</b></span></div></button>{expandedArticle===a.title&&<div className="news-article-detail"><p>{a.body}</p><small>通用准备建议 · 实际要求请核对项目官方页面</small></div>}</article>)}</div></section>})}
    {!q&&<section className="news-official"><div className="news-group-title"><div><span>PRIMARY SOURCES</span><h2>学校官方指南</h2></div><small>官方外链</small></div><div className="news-official-grid">{officialLinks.map(x=><a className="news-official-card" href={x.url} target="_blank" rel="noopener noreferrer" key={x.title}><span className="news-official-emblem">{x.school.startsWith('UCL')?'U':'E'}</span><div><small>{x.school}</small><h3>{x.title}</h3><p>{x.detail}</p><time>{x.date}</time></div><b>↗</b></a>)}</div></section>}
    {!q&&<section className="news-changes"><div className="news-group-title"><div><span>CHANGE LOG</span><h2>项目变更追踪</h2></div><small>演示状态清晰标注</small></div><div className="news-change-list">{changes.map(c=><article key={c.title}><div><span className="news-change-badge">{c.status}</span><h3>{c.title}</h3><p>{c.body}</p><small>{c.date}</small></div><span className="news-change-icon">↻</span></article>)}</div></section>}
   </>}
   {tab==='experience'&&<section className="news-community-main"><div className="news-group-title"><div><span>STUDENT NOTES</span><h2>经验分享</h2></div><small>均为模拟帖子</small></div><div className="news-story-grid">{shownPosts.map(p=><article key={p.id}><span className="news-kind green">#{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><small>{p.name} · {p.time} · 虚构演示</small></article>)}</div>{!shownPosts.length&&<div className="news-empty">没有匹配的经验分享，试试其他关键词或标签。</div>}</section>}
   {tab==='questions'&&<section className="news-community-main"><div className="news-group-title"><div><span>ASK & SUPPORT</span><h2>互助问答</h2></div><small>先给信息，再给建议</small></div><div className="news-question-list">{shownPosts.map(p=><article key={p.id}><span className="news-kind orange">#{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><div><span>{p.comments} 条评论</span><button onClick={()=>{setTab('guides');setQuery(p.tag==='文书焦虑'?'PS':'选校')}}>查看相关攻略</button></div></article>)}</div>{!shownPosts.length&&<div className="news-empty">暂时没有相关问题。</div>}</section>}
   {tab==='changes'&&<section className="news-community-main"><div className="news-group-title"><div><span>PROGRAM UPDATES</span><h2>项目变更追踪</h2></div><small>仅显示已标注状态的信息</small></div><div className="news-change-list">{filteredChanges.map(c=><article key={c.title}><div><span className="news-change-badge">{c.status}</span><h3>{c.title}</h3><p>{c.body}</p><small>{c.date}</small></div><span className="news-change-icon">↻</span></article>)}</div><div className="news-change-note">正式更新将附官方来源、核实人和核实日期；当前条目仅演示信息展示，不是政策通知。</div></section>}
   {tab==='guides'&&q&&!matchingArticles.length&&<div className="news-empty">没有匹配的攻略。试试“PS”“推荐信”或“语言”。</div>}
  </main>
  <aside className="news-side"><div className="news-side-head"><div><span>COMMUNITY</span><h2>申请者互助营地</h2></div><span className="news-demo-mark">本地模拟</span></div><div className="news-quick-tags">{quickTags.map(tag=><button className={tagFilter===tag?'selected':''} onClick={()=>setTagFilter(tagFilter===tag?'':tag)} key={tag}>#{tag}</button>)}</div><div className="news-feed-heading"><strong>{tagFilter?`#${tagFilter}`:'大家在聊'}</strong><span>虚构动态</span></div><div className="news-post-list">{shownPosts.map(p=><article className="news-post-card" key={p.id}><div className="news-post-author"><span className={`news-avatar avatar-${p.kind}`}>{p.avatar}</span><div><strong>{p.name}</strong><small>{p.time} · 虚构示例</small></div><button className={`news-save ${p.saved?'active':''}`} onClick={()=>toggleSave(p.id)} aria-label={p.saved?'取消收藏':'收藏帖子'} title="收藏">{p.saved?'▣':'▢'}</button></div><span className={`news-kind ${p.kind==='question'?'orange':p.kind==='experience'?'green':'gray'}`}>#{p.tag}</span><h3>{p.title}</h3><p className="news-post-text">{p.text}</p><div className="news-comment-preview">{p.preview.slice(0,2).map((c,i)=><p key={i}><b>{i===0?'评论':'回复'}：</b>{c}</p>)}</div><div className="news-post-actions"><button className={p.liked?'active':''} onClick={()=>toggleLike(p.id)} aria-label={p.liked?'取消点赞':'点赞'}>♡ <span>{p.likes}</span></button><button onClick={()=>toggleComments(p.id)} aria-expanded={p.commentsOpen}>▢ <span>{p.comments}</span></button><button className={p.saved?'active':''} onClick={()=>toggleSave(p.id)} aria-label={p.saved?'取消收藏':'收藏'}>☆</button></div>{p.commentsOpen&&<form className="news-comment-form" onSubmit={e=>submitComment(p.id,e)}><input aria-label="发表评论" value={commentText[p.id]||''} onChange={e=>setCommentText(v=>({...v,[p.id]:e.target.value}))} placeholder="友善交流，分享你的经验…"/><button disabled={!commentText[p.id]?.trim()}>发送</button></form>}</article>)}</div>{shownPosts.length===0&&<div className="news-empty side-empty">没有匹配动态，清除标签或关键词试试。</div>}<button className="news-load-more" onClick={loadMore} disabled={loadedMore}>{loadedMore?'已加载演示动态':'加载更多动态'}</button></aside>
  </div>
  <button className="news-assistant-launch" onClick={()=>setAssistant(v=>!v)} aria-expanded={assistant}>✦ 申请小助手</button>{assistant&&<div className="news-assistant-box"><button className="news-assistant-close" onClick={()=>setAssistant(false)} aria-label="关闭">×</button><span>QUICK GUIDE FINDER</span><h3>申请小助手</h3><p>{assistantText}</p><div>{[['PS','PS 是什么？一篇优秀的 PS 要回答什么？'],['选校','英国大学的 List 是什么？怎么查院校门槛？'],['语言','雅思还没出分，可以先递交申请吗？']].map(([q,label])=><button key={q} onClick={()=>{setQuery(q);setTab('guides');setAssistant(false);window.scrollTo({top:0,behavior:'smooth'})}}>{label}</button>)}</div></div>}
  {toast&&<div className="news-toast" role="status">{toast}</div>}
  {modal&&<div className="news-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false)}}><section className="news-modal" role="dialog" aria-modal="true" aria-labelledby="news-modal-title"><div className="news-modal-head"><div><span>COMMUNITY POST</span><h2 id="news-modal-title">发布帖子</h2></div><button onClick={()=>setModal(false)} aria-label="关闭发布窗口">×</button></div><form onSubmit={publishPost}><label>标题<input autoFocus maxLength={80} value={title} onChange={e=>setTitle(e.target.value)} placeholder="用一句话说清你想分享或求助的事"/></label><label>正文<textarea maxLength={900} value={body} onChange={e=>setBody(e.target.value)} placeholder="可以补充背景、目标和你希望得到的帮助。请勿填写证件号、成绩单等敏感信息。"/></label><fieldset><legend>选择标签（可多选）</legend><div>{postTags.map(t=><button type="button" className={selectedTags.includes(t)?'selected':''} onClick={()=>setSelectedTags(tags=>tags.includes(t)?tags.filter(x=>x!==t):[...tags,t])} key={t}>#{t}</button>)}</div></fieldset><p className="news-modal-note">前端演示：帖子只显示在当前页面，不会公开发布。</p><div className="news-modal-actions"><button type="button" onClick={()=>setModal(false)}>取消</button><button type="submit" disabled={!title.trim()||!body.trim()||!selectedTags.length}>发布到本地演示</button></div></form></section></div>}
 </div>
}
