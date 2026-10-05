import basePrograms from './programs.json' with {type:'json'};
export const snapshotDate='2026-10-03';
export const universities=[
{id:'manchester',name:'曼彻斯特大学',english:'The University of Manchester',mark:'M',city:'曼彻斯特',directions:['电气工程','电子工程'],description:'位于曼彻斯特。本模块聚合该校电气与电子工程系的授课型硕士资料，便于分别比较电力系统与通信方向。',url:'https://www.manchester.ac.uk/',rank:null},
{id:'ucl',name:'伦敦大学学院',english:'University College London',mark:'UCL',city:'伦敦',directions:['电子工程'],description:'位于伦敦。本模块收录电子与电气工程系的通信硕士，课程关注通信系统、网络与相关工程实践。',url:'https://www.ucl.ac.uk/',rank:null}
];
const extra=[
{slug:'manchester-power',universityId:'manchester',department:'电气与电子工程系',code:'EEE · POWER SYSTEMS',core:['电力系统运行与经济','智能配电网络','电机与电力电子建模','电力系统动态与稳定性'],electives:[],electiveNote:'已查阅课程表列为必修，未确认独立选修列表；完整课程及年度变动请查官网。',career:'课程偏电力系统建模、分析与控制，可用于探索电网、电力设备及相关工程岗位；不代表任何雇主的录用承诺。',timeline:[['现在','准备完整成绩与课程材料，联系学术推荐人。'],['材料齐备后','官网采用非分轮审理，建议尽早递交；不推测固定开放日期。'],['录取后','按录取通知处理条件与回复期限。']],writing:'本项目不要求 PS。准备重点应放在成绩、相关课程、学术推荐信与材料完整性，不必额外编写一份通用 PS。'},
{slug:'ucl-telecommunications',universityId:'ucl',department:'电子与电气工程系',code:'EEE · TELECOMMUNICATIONS',core:['通信系统与通信技术','网络设计与规划','数据网络与体系结构'],electives:[],electiveNote:'以上为官网介绍的课程主题，非已确认必修模块名称；当前未录入必修/选修明细，请核对最新课程表。',career:'课程围绕通信技术和网络系统，可用于探索网络工程、通信系统及相关技术岗位；岗位适配还取决于个人经验。',timeline:[['现在','整理相关背景，准备 PS 素材并联系两位推荐人。'],['官方日期公布后','检查开放和截止日期，按项目要求完成网申。'],['提交后','跟踪推荐信及学校补件通知。']],writing:'PS应说明学习通信的动机、选择UCL与该项目的原因、相关背景和职业目标。准备建议：使用真实项目中的行动与收获支持动机，避免只列学校声誉。'},
{slug:'manchester-communications',universityId:'manchester',department:'电气与电子工程系',code:'EEE · SIGNAL PROCESSING',core:['天线与射频系统','无线通信与移动网络','数字通信工程','应用数字信号处理'],electives:['机器学习与优化技术','数字图像处理','微波电路原理与设计'],electiveNote:'展示部分官方课程的中文概括；具体可选课程每年可能调整。',career:'课程集中于通信、信号处理与相关网络技术，可用于探索无线通信、信号分析及研发方向。',timeline:[['2026-10-03 起','核对成绩单、加权均分与末年课程清单。'],['2026-10-23','官网第一轮截止；材料不齐时应确认后续轮次，不仓促提交。'],['后续轮次','2026-12-11、2027-02-26、2027-04-30；剩余名额以官网为准。']],writing:'本项目不要求 PS 或推荐信。建议优先展示成绩单中通信与信号处理相关课程，核对条件材料及对应申请轮次。'}
];
export const programs=basePrograms.map((p,i)=>({...p,...extra[i],lastRead:snapshotDate,reviewStatus:'尚未人工复核',sourceType:'official-summary'}));
export const programPath=id=>'#program/'+programs.find(p=>p.id===id).slug;
export function matchPrograms(query,field,city){const q=query.trim().toLowerCase();return programs.filter(p=>(!field||p.field===field)&&(!city||p.city===city)&&[p.school,p.en,p.name,p.english,p.field,p.summary].join(' ').toLowerCase().includes(q))}
// Completely fictional examples. These are not scraped or user-reported admissions records.
const rows=[
[['双非',88,'6.5','录取'],['211（非985）',85,'未提交','拒信'],['985',84,'7.0','录取'],['海外本科',87,'7.0','录取'],['211（非985）',86,'6.5','录取'],['双非',79,'6.0','拒信']],
[['211（非985）',87,'7.0','录取'],['双非',90,'7.0','录取'],['985',83,'6.5','录取'],['海外本科',78,'7.5','录取'],['双非',85,'未提交','拒信'],['211（非985）',81,'6.0','拒信']],
[['985',86,'6.5','录取'],['211（非985）',88,'7.0','录取'],['双非',91,'7.0','录取'],['海外本科',82,'6.5','录取'],['双非',82,'未提交','拒信'],['211（非985）',79,'6.0','拒信']]
];
export const initialCases=Object.fromEntries(programs.map(p=>[p.id,rows[p.id].map((r,i)=>({id:`case-${p.id}-${i}`,intake:'2025 Fall',background:r[0],grade:r[1],language:r[2],result:r[3],source:'虚构演示',scale:'百分制'}))]));
export function offerStats(cases){const accepted=cases.filter(c=>c.result==='录取');return {count:accepted.length,backgrounds:['985','211（非985）','双非','海外本科'].map(name=>({name,value:accepted.filter(c=>c.background===name).length})),grades:[['80以下',n=>n<80],['80–<85',n=>n>=80&&n<85],['85–<90',n=>n>=85&&n<90],['90及以上',n=>n>=90]].map(([name,predicate])=>({name,value:accepted.filter(c=>predicate(c.grade)).length}))}}
export const initialPosts=Object.fromEntries(programs.map(p=>[p.id,[
{id:`post-${p.id}-0`,author:'同学 A',tag:'找搭子',text:`有没有准备 2027 Fall ${p.name}的同学？想一起核对申请要求，互相提醒进度。`,likes:8,liked:false,replies:[{author:'同学 D',text:'我也在看这个方向，可以先在这里交流材料准备。'}],source:'虚构讨论'},
{id:`post-${p.id}-1`,author:'同学 B',tag:'求助',text:p.id===2?'成绩单没有列出加权均分，需要另外开证明吗？':'推荐邮件一直没收到，应该先检查哪些地方？',likes:5,liked:false,replies:[],source:'虚构讨论'},
{id:`post-${p.id}-2`,author:'同学 C',tag:'定位',text:'学校背景和课程匹配，应该先看哪一个？想听听大家怎么整理申请信息。',likes:3,liked:false,replies:[],source:'虚构讨论'}
]]));
export function assistantAnswer(text,p){if(/网推|推荐|邮箱/.test(text))return p.id===2?'官网摘要显示本项目不要求推荐信。请先核对是否进入了正确的项目申请页。':'先检查推荐人邮箱拼写、垃圾邮件和网申状态。是否能重发及具体处理方式，请查看学校申请指引或联系招生团队。';if(/PS|ps|文书/.test(text))return p.writing;if(/均分|加权|成绩单/.test(text))return p.id===1?'不要自行将英国2:1换成统一中国均分线。需结合学校的国家/地区资格说明和具体本科院校核实。':'官网要求成绩单未列加权均分时，另提供学校出具的加权均分证明。具体格式请联系招生团队确认。';if(/语言|雅思/.test(text))return p.language+'。语言班适用性未核实，请查看官网，不默认可以配读。';if(/截止|时间|开放/.test(text))return p.deadline;if(/材料|文件|准备/.test(text))return p.materials+' '+p.note;if(/概率|有戏|保底|录取|机会/.test(text))return '无法根据均分或虚构案例推算录取机会。请先核对专业、课程、学位和语言要求，再评估仍缺少的信息。';return '这是基于当前项目摘要的模拟回复。我可以展示材料、语言、推荐信或申请时间的信息；未覆盖的问题需要到官网核实。';}
