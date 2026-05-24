/**
 * 量化交易学习路线图 - 数据层
 * 内容与表现严格分离，便于后续 CMS 化
 * 修改此文件即可更新全部内容
 */

const ROADMAP_DATA = {
  meta: {
    title: '量化交易学习路线图',
    subtitle: '从小白到顶级刀俎',
    description: '综合 GitHub 开源社区大佬建议，从零到实盘的全路径规划。先看懂 → 再模仿 → 再改造 → 最后自研。',
    version: '1.2.0',
    lastUpdated: '2026-05-25'
  },

  stages: [
    {
      id: 'stage-1',
      number: '01',
      title: '工具地基',
      subtitle: '从零搭建 Python 环境 · 编程入门 · 数据处理全流程',
      duration: '3-4 周',
      difficulty: '入门',
      color: '#00d4ff',
      icon: 'fa-solid fa-code',
      quote: '万丈高楼平地起，工具手艺先磨利',
      overview: '面向零基础新手，从安装 Python 和 VS Code 开始，逐步掌握变量、循环、函数、类等核心语法，学会用 Pandas 读写和处理金融数据，最终能用 Matplotlib 画出专业 K 线图。这是整个量化交易大厦的地基，务必花时间打牢——地基不牢，后面的策略开发会处处碰壁。',
      modules: [
        {
          id: '1-0',
          title: '环境搭建与编程思维',
          duration: '2-3 天',
          points: [
            '安装 Python 3.10+（官网 python.org 下载，安装时务必勾选"Add to PATH"）',
            '安装 VS Code 编辑器 + Python 扩展插件',
            '学习使用终端/命令行：打开文件夹、运行 Python 脚本（python xxx.py）',
            '安装 Jupyter Notebook：pip install notebook，用于交互式学习',
            '理解"编程是什么"：你写指令 → 计算机按指令执行 → 得到结果',
            '学会看报错信息：Traceback 告诉你哪一行出错、什么错误类型，是修复 bug 的关键',
            'pip install 安装第三方库：量化交易中 90% 的功能由第三方库提供',
            '虚拟环境概念：venv/conda 隔离不同项目的依赖，避免版本冲突'
          ],
          knowledgeCards: [
            { title: '为什么选 Python', content: 'Python 是量化交易领域使用人数最多的语言。语法简洁（接近自然语言）、三方库极其丰富（Pandas、NumPy、Backtrader 等）、社区活跃。用 C++ 写 200 行的数据清洗代码，Python 用 Pandas 5 行搞定。' },
            { title: 'VS Code + Jupyter = 黄金组合', content: 'VS Code 是免费的轻量级编辑器，装上 Python 插件后支持代码补全、调试、Jupyter 内嵌运行。Jupyter Notebook 可以逐段运行代码并实时看结果，是学习阶段最友好的工具。' },
            { title: '终端是你最好的朋友', content: '量化交易程序最终要在命令行/服务器上 24 小时自动运行。从第一天起就习惯用终端操作：cd 切换目录、python 运行脚本、pip install 装库。你会越来越依赖它。' },
            { title: 'pip 是什么', content: 'pip 是 Python 的包管理器（类似手机上的应用商店）。别人写好的代码打包成"库"，你一行 pip install 就能用。量化交易常用的库超过 20 个，全由社区免费维护。' }
          ],
          practice: {
            title: '实战：搭建你的第一个 Python 工作台',
            desc: '（1）安装 Python 3.10+ 和 VS Code；（2）在 VS Code 中创建项目文件夹 quant_learning；（3）新建 hello.py，写入 print("Hello, 量化交易！")，在终端运行；（4）pip install jupyter pandas matplotlib，确认安装成功。截图保存，这是你量化之路的起点。'
          },
          resources: [
            { label: 'Python 官网下载', url: 'https://www.python.org/downloads/' },
            { label: 'VS Code 下载', url: 'https://code.visualstudio.com/' },
            { label: 'Python 安装教程（视频）', url: 'https://www.bilibili.com/video/BV1wD4y1o7AS' }
          ]
        },
        {
          id: '1-1',
          title: 'Python 核心语法',
          duration: '4-5 天',
          points: [
            '变量：给数据起名字。name = "茅台"、price = 1680.5、shares = 100',
            '基本类型：int（整数）、float（小数）、str（文本）、bool（True/False）',
            '类型转换：str(1680) → "1680"、int("100") → 100、float(1680) → 1680.0',
            '字符串操作：拼接 f"股票{name}价格{price}"、切片、大小写转换',
            '列表 list：有序集合。stocks = ["茅台","五粮液","宁德"]，访问 stocks[0]',
            '字典 dict：键值对映射。prices = {"茅台":1680, "五粮液":120}，访问 prices["茅台"]',
            '元组 tuple：不可修改的列表。适合存常量如交易时间 (9, 30, 0)',
            '函数 def：把一段逻辑封装起来反复使用。def calc_return(buy, sell): return (sell-buy)/buy'
          ],
          knowledgeCards: [
            { title: '变量 = 贴标签', content: '想象你有很多纸箱子（内存），每个箱子可以放不同类型的东西。变量名就是贴在箱子上的标签。price = 1680 的意思是：找一个箱子放数字 1680，贴上标签"price"。' },
            { title: '列表 vs 字典：何时用哪个', content: '列表用数字索引（位置），适合顺序遍历所有股票。字典用键查找（名称），适合快速查找某只股票的价格。量化交易中，股票列表用 list，股票→价格的映射用 dict，行情表格用 DataFrame。' },
            { title: 'f-string 格式化字符串', content: 'Python 3.6+ 的 f-string 是最优雅的字符串格式化方式。f"买入{name}{shares}股，价格{price}" 比用 + 拼接更清晰、更快。实战中打印交易日志全靠它。' },
            { title: '函数：量化策略的基本单元', content: '一个量化策略就是多个函数的组合：get_data() 拿数据 → calc_indicator() 算指标 → generate_signal() 生成信号 → execute_order() 执行下单。函数封装让每一步清晰可测。' }
          ],
          practice: {
            title: '实战：股票持仓计算器',
            desc: '编写脚本：定义字典 portfolio = {"茅台": {"买入价":1680, "数量":100}, "五粮液": {"买入价":120, "数量":500}}。写函数 calc_profit(stock)，输入股票名和当前价，返回浮动盈亏。遍历所有持仓，输出汇总。'
          },
          resources: [
            { label: 'Python 官方教程（中文）', url: 'https://docs.python.org/zh-cn/3/tutorial/' },
            { label: '菜鸟教程 Python3', url: 'https://www.runoob.com/python3/' },
            { label: '廖雪峰 Python 教程', url: 'https://www.liaoxuefeng.com/wiki/1016959663602400' }
          ]
        },
        {
          id: '1-2',
          title: '流程控制与面向对象',
          duration: '4-5 天',
          points: [
            'if/elif/else：条件判断。if price > ma20: print("买入信号")',
            '比较运算符：> < >= <= == !=，用于判断价格、指标、成交量的关系',
            '逻辑运算符：and or not。if rsi < 30 and price > ma60: 组合多个条件',
            'for 循环：遍历序列。for stock in stock_list: print(stock)',
            'while 循环：条件满足时一直执行。while position > 0: 持仓期间持续监控',
            'range() 函数：生成数字序列。for i in range(10): 执行 10 次',
            'break / continue：跳出循环 / 跳过本次迭代',
            'try/except：异常处理。网络请求失败时不崩溃，而是重试或记录日志',
            '类 class：封装数据+方法。class Strategy: 包含买入条件、卖出条件、仓位管理等',
            '__init__、self：构造函数和实例引用。初始化策略参数和状态'
          ],
          knowledgeCards: [
            { title: '条件判断 = 交易策略的核心', content: '任何策略本质上都是 if/else 的层层嵌套：if 金叉 then 买入；elif 死叉 then 卖出；elif 止损条件 then 强制平仓；else 持有不动。整个量化交易就是把这些条件精确化、自动化。' },
            { title: 'for 循环 vs 向量化', content: '新手倾向用 for 循环逐只股票计算，但 Pandas 的向量化操作可以一次性计算 5000 只股票。学到后面你会越来越少用 for 循环，但理解它是使用向量化的前提。' },
            { title: '异常处理：程序不死机的秘诀', content: 'try/except 是量化系统的安全带。API 偶尔抽风、网络偶尔断线、数据偶尔缺字段——没有 try/except 保护，你的自动交易程序会在半夜崩溃。' },
            { title: 'class 类：策略的容器', content: 'class Strategy 就像一个模板，定义好"策略有什么属性（参数）"和"策略能做什么（方法）"。然后用这个模板创建多个实例：茅台策略、五粮液策略、泸州老窖策略……每个实例独立运行。' }
          ],
          practice: {
            title: '实战：自动交易信号生成器',
            desc: '写一个 TradingStrategy 类：__init__ 设置均线参数（short=5, long=20）；方法 check_signal(price_list) 遍历价格列表，当短期均线上穿长期均线时输出"BUY"，下穿时输出"SELL"。用包含 try/except 保护。模拟 30 天数据测试。'
          },
          resources: [
            { label: 'Python 类教程（官方）', url: 'https://docs.python.org/zh-cn/3/tutorial/classes.html' },
            { label: 'Python 异常处理', url: 'https://docs.python.org/zh-cn/3/tutorial/errors.html' }
          ]
        },
        {
          id: '1-3',
          title: '文件与数据处理',
          duration: '3-4 天',
          points: [
            'open() + with：打开文件的标准写法。with open("data.csv") as f: data = f.read()',
            '读取模式：r（只读）、w（写入覆盖）、a（追加）、rb（二进制读）',
            'CSV 模块：csv.reader() 逐行解析、csv.DictReader() 按列名访问',
            'JSON 模块：json.loads() 解析 JSON 字符串、json.dumps() 转为 JSON',
            '文件路径：绝对路径（C:/data/stock.csv）vs 相对路径（../data/stock.csv）',
            '编码处理：encoding="utf-8" 避免中文乱码，encoding="gbk" 处理 Windows 导出的文件',
            'os 模块：os.listdir() 列出文件、os.path.join() 拼接路径、os.makedirs() 创建目录',
            '批量处理：glob 模块用通配符匹配文件，如 glob.glob("data/*.csv") 获取所有 CSV 文件'
          ],
          knowledgeCards: [
            { title: 'CSV 是量化世界的通用语言', content: '从证券公司的数据导出、Tushare 的数据下载、到你自己策略的输出日志——全部走 CSV。它是纯文本格式，Excel 能打开、Python 能读、任何语言都能处理。学会熟练读写 CSV，就打通了数据流通的任督二脉。' },
            { title: 'with 语句：永不忘记关文件', content: 'with open() as f 语句结束后，Python 自动关闭文件——即使中间出错了也会关。不用 with 的话，你必须手动 f.close()，忘了就会造成文件损坏或内存泄漏。这是必须养成的习惯。' },
            { title: 'JSON：API 的标配格式', content: 'AkShare、Tushare、东方财富……几乎所有数据接口都用 JSON 格式返回数据。JSON 本质是嵌套的字典+列表结构，和 Python 的 dict/list 无缝转换。' },
            { title: '路径处理避坑', content: 'Windows 用 \\ 分隔路径，Mac/Linux 用 /。永远用 os.path.join("folder","file.csv") 拼接路径，而不是手动写 "folder\\file.csv"——这样你的代码在哪个操作系统都能跑。' }
          ],
          practice: {
            title: '实战：行情数据批量合并工具',
            desc: '在一个文件夹中放入 10 只股票的 CSV 文件（每文件包含日期、开盘价、收盘价等字段）。写脚本：遍历所有 CSV → 用 csv.DictReader 读取 → 添加"股票代码"列 → 合并为一个大文件 → 输出 merged_stocks.csv。加入 try/except 保护每个文件的读取。'
          },
          resources: [
            { label: 'Python CSV 官方文档', url: 'https://docs.python.org/zh-cn/3/library/csv.html' },
            { label: 'Python JSON 官方文档', url: 'https://docs.python.org/zh-cn/3/library/json.html' },
            { label: 'os.path 文档', url: 'https://docs.python.org/zh-cn/3/library/os.path.html' }
          ]
        },
        {
          id: '1-4',
          title: 'Pandas 数据处理核心',
          duration: '5-6 天',
          points: [
            'pd.read_csv()：读取 CSV 为 DataFrame。df = pd.read_csv("stock.csv", parse_dates=["日期"])',
            'DataFrame 基础：df.head(10) 查看前 10 行、df.info() 查看结构、df.describe() 统计摘要',
            '列操作：df["收盘"] 取单列、df[["开盘","收盘"]] 取多列、df["涨跌幅"] = df["收盘"].pct_change()',
            'loc 条件筛选：df.loc[df["涨跌幅"] > 0.05] 选出涨幅超 5% 的行',
            'groupby 分组：df.groupby("股票代码")["涨跌幅"].mean() 每只股票的平均涨跌幅',
            'shift()：df["昨收"] = df["收盘"].shift(1) 取前一行，是一切指标计算的基础',
            'rolling()：df["MA20"] = df["收盘"].rolling(20).mean() 计算 20 日均线',
            'merge()：类似 SQL JOIN。pd.merge(df_price, df_volume, on=["日期","代码"]) 合并价格和成交量表',
            'resample()：日线转周线。df.resample("W").agg({"开盘":"first","收盘":"last"})',
            '缺失值处理：df.dropna() 删除空行、df.fillna(method="ffill") 前向填充（停牌日常用）'
          ],
          knowledgeCards: [
            { title: 'DataFrame：比 Excel 强大 1000 倍', content: 'Excel 最多 104 万行，A 股有 5000 只股票，5 年日线就是 600 万行数据。DataFrame 轻松处理千万行，配合向量化计算，毫秒级完成全市场指标。当你用 Pandas 替代 Excel 做数据分析的那一刻，才是真正迈入量化的大门。' },
            { title: 'shift() + rolling() = 万能指标工厂', content: '所有技术指标本质上都是 shift 和 rolling 的排列组合。shift(1) 给你昨天数据，rolling(20).std() 给你 20 日波动率，rolling(5).mean().shift(1) 给你昨天的 5 日均线。掌握了这两个方法，你能自己发明几百个指标。' },
            { title: 'groupby：一键全市场分析', content: 'df.groupby("股票代码") 意味着"按股票分组"，然后你可以对每组算平均涨幅、最大回撤、夏普比率。这是批量回测的核心操作——一秒钟跑完 5000 只股票的策略结果。' },
            { title: 'merge：数据整合利器', content: '真实量化场景中，价格数据在 A 表、财务数据在 B 表、行业分类在 C 表。merge 像胶水一样把它们按"日期+股票代码"粘在一起。你写策略时看到的是一个包含所有字段的完整 DataFrame。' }
          ],
          practice: {
            title: '实战：全市场技术指标扫描器',
            desc: '用 AkShare 拉取沪深 300 成分股的 3 年日线数据（或使用老师提供的 CSV 文件）。用 Pandas 批量计算每只股票的 5 日/20 日均线、MACD（DIF/DEA/柱）、RSI（14 日）、布林带（20 日/2 倍标准差）。筛选出同时满足"收盘价 < 布林下轨"和"RSI < 30"的股票，按市值排序输出 Top 10。'
          },
          resources: [
            { label: 'Pandas 官方文档', url: 'https://pandas.pydata.org/docs/' },
            { label: 'Pandas 10分钟入门', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' },
            { label: 'Pandas Cheat Sheet', url: 'https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf' },
            { label: 'AkShare 数据接口', url: 'https://akshare.akfamily.xyz/' }
          ]
        },
        {
          id: '1-5',
          title: '数据可视化',
          duration: '3-4 天',
          points: [
            'Matplotlib 基础：plt.plot() 折线图、plt.figure(figsize=(12,6)) 画布大小设置',
            '多子图布局：plt.subplots(2,1) 上下两个子图，上面放 K 线下面放成交量',
            'mplfinance：专为金融打造的画图库。mpf.plot(df, type="candle") 一行画出 K 线图',
            '均线叠加：mpf.make_addplot(ma5) 将均线叠加到 K 线图上',
            '标注买卖信号：plt.annotate() 在图表上标注金叉死叉点',
            '中文显示：plt.rcParams["font.sans-serif"] = ["SimHei"] 解决中文乱码',
            '保存图片：plt.savefig("chart.png", dpi=150, bbox_inches="tight") 保存高清图',
            'Plotly 交互式图表（选学）：鼠标悬停查看数值、缩放、拖拽，适合探索性分析'
          ],
          knowledgeCards: [
            { title: '可视化不是炫技，是调试利器', content: '策略赚不赚钱，看回测曲线；策略哪里有问题，看图表标注。一眼看出"为什么这里亏了"比看 100 页数据表格高效得多。量化老手开发策略时，80% 时间在看图。' },
            { title: 'mplfinance：量化专属画图神器', content: '一行 mpf.plot(df, type="candle", volume=True, mav=(5,20)) 就能画出带成交量、均线的专业 K 线图。matplotlib 的底层功能全保留，但省去了自己拼 K 线、算坐标的繁琐。' },
            { title: '一张好图胜过千行日志', content: '策略跑了半年，如何快速复盘？画出：净值曲线（看趋势）、回撤曲线（看风险）、月度收益热力图（看季节效应）、信号分布散点图（看信号质量）。四张图看完，策略好坏一目了然。' },
            { title: 'Plotly：当你需要交互', content: '用鼠标在 K 线图上拖动缩放、悬停查看细节数据——Plotly 生成的 HTML 图表天生交互。适合发给非技术的朋友/老板看图，也适合探索性发现数据中的异常点。' }
          ],
          practice: {
            title: '实战：茅台完整技术分析图',
            desc: '获取茅台（600519）近两年日线数据。用 mplfinance 画出：上半部分 K 线图 + 5/20 日均线叠加 + 布林带；下半部分成交量柱状图 + MACD 指标（DIF/DEA/柱）。在所有金叉位置用绿色向上箭头标注，所有死叉位置用红色向下箭头标注。导出 1920×1080 PNG。'
          },
          resources: [
            { label: 'mplfinance 官方文档', url: 'https://github.com/matplotlib/mplfinance' },
            { label: 'Matplotlib 教程', url: 'https://matplotlib.org/stable/tutorials/' },
            { label: 'Plotly 中文教程', url: 'https://plotly.com/python/' }
          ]
        }
      ],
      milestone: '完成环境搭建，用 Python 拉取茅台数据，计算 5/20 日均线 + MACD + RSI，标注金叉死叉信号，画出完整的技术分析图'
    },

    {
      id: 'stage-2',
      number: '02',
      title: '金融数据与基础策略',
      subtitle: '数据获取 · 指标计算 · 手动回测 · 实战检验',
      duration: '3-4 周',
      difficulty: '入门',
      color: '#8b5cf6',
      icon: 'fa-solid fa-chart-line',
      quote: '数据即燃料，指标即罗盘',
      overview: '学习获取真实行情数据，掌握经典技术指标的计算原理与代码实现，在 Excel 和 Python 上手动做策略回测，理解每一笔交易的产生过程。从"看懂图"到"让程序自己做决策"，完成你的第一个量化策略。',
      modules: [
        {
          id: '2-1',
          title: '数据源对接',
          duration: '3-4 天',
          points: [
            'AkShare：免费 A 股数据接口。pip install akshare，一行代码 stock_zh_a_hist() 拉取全市场历史日线',
            'yfinance：免费美股数据接口。yf.download("AAPL") 轻松获取苹果公司全部历史行情',
            'Tushare Pro：国内最专业数据源，需注册获取 token，覆盖 A 股/期货/基金/宏观经济',
            '了解 OHLCV 字段：Open（开盘）/ High（最高）/ Low（最低）/ Close（收盘）/ Volume（成交量）',
            '数据频率：日线（最常见）、周线、月线、分钟线（量化进阶需要）',
            '接口限制与容错：免费 API 有调用频率限制，学会用 time.sleep() 和 try/except 保护',
            '数据存储策略：拉取一次存 CSV，后续复用避免重复请求',
            '数据校验：检查日期连续性、成交量是否异常、价格是否出现负值'
          ],
          knowledgeCards: [
            { title: 'AkShare：零门槛入门首选', content: '无需注册、无需 API Key，pip install 后直接拉取 A 股全量数据。支持股票、期货、基金、外汇等 100+ 数据接口。缺点是免费接口有时限流，大批量下载需耐心。' },
            { title: '数据源对比选择', content: '初学者 → AkShare（免费无门槛）；美股研究 → yfinance（Yahoo 数据，稳定可靠）；专业回测 → Tushare Pro（需积分，但数据质量最高、字段最全）；实盘 → 券商 API（CTPr/XTP 等直接对接交易所）' },
            { title: 'OHLCV = 量化数据的基本单元', content: '每根 K 线就是一组 OHLCV 数据。所有技术指标（均线、MACD、RSI……）都从这 5 个数值衍生而来。理解 OHLCV 是理解一切量化计算的第一步。' },
            { title: '数据频率的选择', content: '日线做中长期策略（持仓数天到数周）；分钟线做日内策略（当日进出）；Tick 级数据做高频交易（毫秒级）。入门阶段专注于日线，数据量小、逻辑清楚。' }
          ],
          practice: {
            title: '实战：搭建个人行情数据库',
            desc: '（1）用 AkShare 拉取沪深 300 成分股的近 3 年全部日线数据；（2）每只股票存为独立 CSV，文件名用股票代码；（3）写脚本校验：检查每只股票的数据是否完整（日期连续、无异常值）；（4）将所有 CSV 合并为一个统一的行情数据库。'
          },
          resources: [
            { label: 'AkShare 官方文档', url: 'https://akshare.akfamily.xyz/' },
            { label: 'yfinance GitHub', url: 'https://github.com/ranaroussi/yfinance' },
            { label: 'Tushare Pro 官网', url: 'https://tushare.pro/' }
          ]
        },
        {
          id: '2-2',
          title: '股票数据基础与清洗',
          duration: '3-4 天',
          points: [
            '前复权 vs 后复权：前复权以当前价格为基准调整历史价格——回测必须用前复权',
            '停牌处理：A 股经常停牌（节假日、重大事项），缺失日期的填充策略',
            '时间序列索引：pd.to_datetime() 日期转换、df.set_index("日期") 设为索引、df.sort_index() 排序',
            '日收益率计算：df["return"] = df["close"].pct_change() 得到每日涨跌幅',
            'resample 重采样：df.resample("W").agg({"open":"first","close":"last","volume":"sum"}) 日线转周线',
            '异常值检测与处理：用 df.describe() 查看统计摘要，涨跌幅超过 ±11%（A 股涨停限制）的标记为异常',
            '数据对齐：多只股票日期不一致时，用 pd.merge 按日期对齐',
            '滚动窗口概念：rolling(N) 取最近 N 天数据，是技术指标计算的核心机制'
          ],
          knowledgeCards: [
            { title: '复权：回测的第一条铁律', content: '不复权的数据在除权除息日会出现"跳空缺口"——股价从 100 元突然变成 80 元，回测误判为暴跌。始终使用前复权数据！始终使用前复权数据！始终使用前复权数据！' },
            { title: '停牌是 A 股的特色挑战', content: 'A 股每年约 10% 的交易日有股票停牌。两种常用处理：1) 前向填充（用停牌前最后价格填充）适合回测；2) 删除停牌日（适合统计分析）。注意：用前向填充时，停牌期间别生成交易信号。' },
            { title: 'pct_change()：一行搞定全市场收益率', content: 'df["return"] = df.groupby("code")["close"].pct_change() 这行代码能同时计算 5000 只股票的日收益率——纯向量化运算，毫秒级完成。理解分组+变换的组合，是 Pandas 进阶的标志。' },
            { title: '异常值检查清单', content: '每次拿到新数据后必检：① 涨跌幅是否超出涨跌停限制？② 成交量是否为零（全天停牌）？③ 最高价是否低于最低价？④ 是否有重复日期？自动化这个检查流程，是职业量化习惯。' }
          ],
          practice: {
            title: '实战：全自动数据清洗管道',
            desc: '编写 data_pipeline() 函数：输入——原始 CSV 文件夹；处理——① 读取所有文件 ② 统一日期格式 ③ 前复权（如有复权因子）④ 缺失值前向填充 ⑤ 计算日收益率 ⑥ 异常值标记；输出——干净的统一 DataFrame + 异常报告（哪些股票、哪些日期有问题）。'
          },
          resources: [
            { label: 'Pandas 时间序列文档', url: 'https://pandas.pydata.org/docs/user_guide/timeseries.html' },
            { label: '量化数据清洗实践', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html' }
          ]
        },
        {
          id: '2-3',
          title: '经典技术指标实战',
          duration: '5-6 天',
          points: [
            'MA 移动平均线：SMA（简单平均）、EMA（指数加权，近期权重更大）。rolling(N).mean() 实现',
            'MACD：DIF=EMA12-EMA26、DEA=EMA(DIF,9)、柱=2×(DIF-DEA)。金叉=买入信号',
            'RSI：RS=平均涨幅/平均跌幅，RSI=100-100/(1+RS)。>70 超买，<30 超卖',
            '布林带：中轨=MA20、上轨=中轨+2σ、下轨=中轨-2σ。突破上/下轨可能超买/超卖',
            'KDJ：根据 N 日最高/最低价与收盘价的关系计算。K 线上穿 D 线为金叉',
            'ATR（平均真实波幅）：衡量价格波动幅度的指标，用于动态设置止损',
            '成交量指标：量比=当日成交量/5日均量、OBV（能量潮）',
            '指标组合使用：不要依赖单一指标，MACD+RSI+布林带的组合过滤能大幅减少假信号'
          ],
          knowledgeCards: [
            { title: '指标不是圣杯，是概率工具', content: '任何单个技术指标的预测准确率通常只有 45-55%。真正的价值在于：指标组合使用（多指标共振）+ 仓位管理 + 止损纪律。三重过滤后的信号可靠性远高于单一指标。' },
            { title: 'EMA vs SMA：何时用哪个', content: 'EMA 对最近的价格变化更敏感，适合短线策略（5-20 日）；SMA 更平滑稳定，适合中长线策略（20-200 日）。海龟交易法用 SMA，日内策略用 EMA，没有绝对好坏，取决于策略周期。' },
            { title: 'MACD 的三种用法', content: '1) 金叉死叉：最基础，DIF 上穿 DEA 买入；2) 零轴判断：DIF>0 多头市场，DIF<0 空头市场；3) 背离：价格创新高但 MACD 没跟上——趋势衰竭的信号，威力最大但判断最难。' },
            { title: '布林带的宽度 = 市场波动率指标', content: '布林带收窄意味着波动率降低——往往是爆发前兆（暴风雨前的宁静）。布林带扩张意味着波动加大。学会看布林带形态比单纯看上下轨更有价值。' }
          ],
          practice: {
            title: '实战：多指标共振扫描器',
            desc: '计算 50 只股票的 MACD、RSI(14)、布林带(20,2)、ATR(14)。编写筛选条件：同时满足 ① MACD 金叉（今日 DIF 上穿 DEA）② RSI<40（未过热）③ 收盘价触及布林下轨（超卖）④ 今日成交量 > 20 日均量 1.5 倍（放量）。输出满足条件的股票列表。'
          },
          resources: [
            { label: '股票技术指标详解', url: 'https://www.investopedia.com/terms/t/technicalindicator.asp' },
            { label: 'MACD 原理解析', url: 'https://www.investopedia.com/terms/m/macd.asp' },
            { label: 'TA-Lib Python 绑定', url: 'https://github.com/TA-Lib/ta-lib-python' }
          ]
        },
        {
          id: '2-4',
          title: '双均线策略：从手动到代码',
          duration: '4-5 天',
          points: [
            '策略逻辑：当短期均线（如 MA5）上穿长期均线（如 MA20）→ 买入；下穿 → 卖出',
            '手动回测：在 Excel 上逐行标注买卖信号，亲自点一遍交易过程',
            '用 Pandas 实现：df["MA5"] > df["MA20"] 且 shift(1) 比较上一行，找到交叉点',
            '回测模拟：维护 position 变量（0=空仓, 1=持仓），遍历每行数据模拟交易',
            '收益率计算：累计收益率、年化收益率 = (期末净值/期初净值)^(252/N) - 1',
            '风险指标：最大回撤（净值从峰到谷的最大跌幅）、夏普比率（单位风险的超额收益）',
            '策略对比：同一数据跑不同参数（MA5/20 vs MA10/60 vs MA20/120），对比表现差异',
            '局限性认知：双均线在震荡市频繁止损、在强趋势市表现好。理解策略的适用场景是成为量化交易者的关键转折'
          ],
          knowledgeCards: [
            { title: '先手动、再代码——这是捷径，不是弯路', content: '在 Excel 上手动标记 50 个交易日的买卖点，你会深刻理解：为什么这里买入？为什么那里卖出？滑点对盈亏有多大影响？双均线为什么会在震荡市反复亏损？这种体感用框架跑 100 次回测都得不到。' },
            { title: '回撤控制比收益率更重要', content: '收益 50% 但中途最大回撤 60%——你大概率在回撤 40% 的时候就崩溃离场了，根本等不到后面的反弹。策略的"可执行性"取决于你能承受的最大回撤，而不是预期收益。' },
            { title: '参数越多 ≠ 策略越好', content: '双均线用 2 个参数（短期、长期窗口）。如果你把参数调到 5 个（加平滑、加过滤、加延迟确认），回测结果可能会更漂亮——但那大概率是过拟合。简单策略 + 严格风控 > 复杂策略 + 无风控。' },
            { title: '样本外验证——从这一刻养成习惯', content: '用前 3 年数据调参数，用最后 1 年数据验证。如果在最后 1 年（策略从未见过的数据）上表现依然不错，那才值得继续研究。只在样本内漂亮的策略 = 废纸。' }
          ],
          practice: {
            title: '实战：双均线策略完整回测系统',
            desc: '选一只股票 5 年日线数据。(1) Excel 手动回测：标注前 50 根 K 线的买卖点，计算每笔盈亏；(2) Python 实现：用 Pandas 遍历所有交易日，模拟买卖信号，记录每笔交易的买卖价、盈亏、持仓天数；(3) 输出回测报告：总交易次数、胜率、盈亏比、累计收益率、年化收益率、最大回撤、夏普比率；(4) 对比 Excel 和 Python 结果是否一致。'
          },
          resources: [
            { label: '夏普比率详解', url: 'https://www.investopedia.com/terms/s/sharperatio.asp' },
            { label: '最大回撤概念', url: 'https://www.investopedia.com/terms/m/maximum-drawdown-mdd.asp' }
          ]
        }
      ],
      milestone: '独立完成双均线策略从 Excel 到 Python 的全流程回测，理解所有回测指标的计算方式和含义'
    },

    {
      id: 'stage-3',
      number: '03',
      title: '回测框架与策略开发',
      subtitle: 'Backtrader 实战 · 三类经典策略 · 参数优化',
      duration: '4-6 周',
      difficulty: '进阶',
      color: '#10b981',
      icon: 'fa-solid fa-flask',
      quote: '回测是量化交易的第一道防火墙',
      overview: '深入学习 Backtrader 回测框架，掌握趋势跟踪、均值回归两大经典策略类型，学会参数优化与过拟合识别，理解资金管理对策略生存的影响。从"写代码跑回测"到"看懂回测结果并做出理性判断"。',
      modules: [
        {
          id: '3-1',
          title: 'Backtrader 框架入门',
          duration: '5-6 天',
          points: [
            '安装与入门：pip install backtrader，跑官方 SMA CrossOver 示例验证环境',
            '数据喂入：Pandas DataFrame → bt.feeds.PandasData()，必须指定 datetime/open/high/low/close/volume 字段映射',
            '策略类编写：继承 bt.Strategy，必须实现 __init__()（计算指标）和 next()（每个 K 线周期的决策逻辑）',
            'Cerebro 引擎：bt.Cerebro() 是总控制器，负责 adddata/addstrategy/setcash/setsizer/run/plot',
            '分析器：cerebro.addanalyzer(bt.analyzers.SharpeRatio) 自动计算回测指标',
            '观察器：bt.observers.BuySell 自动在图表上标注买卖点',
            'broker 设置：setcash（初始资金）、setcommission（手续费率）、setslippage（滑点）模拟真实市场',
            '结果输出：result = cerebro.run()，strategy = result[0]，通过 strategy.analyzers 获取回测指标'
          ],
          knowledgeCards: [
            { title: 'Backtrader vs 手写回测', content: '手写回测 200 行代码只覆盖一种策略，Backtrader 50 行搞定且包含完整分析和图表。框架帮你处理了数据加载、资金管理、佣金计算、图表绘制等所有基础设施，你只需专注策略逻辑。' },
            { title: 'next() 是策略的心脏', content: '每个 K 线周期（日线=每天、分钟线=每分钟）Backtrader 自动调用一次 next() 方法。在这里用 self.data.close[0] 读当前价格、self.buy() 下单、self.sell() 平仓。策略所有逻辑都在 next() 中展开。' },
            { title: '__init__ vs next__', content: '__init__() 中声明指标（只需计算一次，Backtrader 自动每个 bar 更新值）；next() 中使用指标值做判断。不要在 next() 中重复计算指标——性能和代码可读性都会变差。' },
            { title: 'Cerebro = 大脑中枢', content: 'Cerebro 是西班牙语"大脑"的意思。它协调：加载什么数据、用哪个策略、初始资金多少、手续费率多少、要不要画图。adddata → addstrategy → addanalyzer → run → plot，五步搞定一切。' }
          ],
          practice: {
            title: '实战：三策略对比回测',
            desc: '用 Backtrader 实现三个策略同一只股票上对比：(1) SMA 金叉死叉（MA5/20）；(2) SMA 金叉死叉（MA10/60）；(3) MACD 金叉死叉。设置统一初始资金 100 万、手续费 0.03%、无滑点。对比三个策略的夏普比率和最大回撤，输出对比图表。'
          },
          resources: [
            { label: 'Backtrader 官方文档', url: 'https://www.backtrader.com/docu/' },
            { label: 'Backtrader GitHub', url: 'https://github.com/mementum/backtrader' },
            { label: 'Backtrader 快速入门', url: 'https://www.backtrader.com/docu/quickstart/quickstart/' }
          ]
        },
        {
          id: '3-2',
          title: '趋势跟踪策略——海龟交易法',
          duration: '5-6 天',
          points: [
            '海龟交易法的核心理念：截断亏损，让利润奔跑（Cut losses short, let profits run）',
            '唐奇安通道入场：价格突破过去 N 日（通常 20 日）最高价 → 做多；突破 N 日最低价 → 做空',
            'ATR（平均真实波幅）用于仓位计算：1 个 ATR 的风险 = 总资金的 1%，通过 ATR 计算应买多少手',
            '金字塔加仓：入场后每盈利 0.5 个 ATR 加一次仓，最多加 4 次',
            '移动止损：持仓期间动态更新止损位——多头止损 = 最近 10 日最低价，空头止损 = 最近 10 日最高价',
            '双均线过滤：只在 EMA25 > EMA300（长期趋势向上）时才做多，避免逆大势操作',
            '再次入场规则：止损离场后，如果价格再次突破唐奇安通道，可以重新入场',
            '策略的心理学：海龟交易法胜率不到 40%，需要严格纪律——连续止损 5 次还要坚持执行，90% 的人做不到'
          ],
          knowledgeCards: [
            { title: '海龟交易法：量化交易的奠基之作', content: '1983 年，传奇交易员 Richard Dennis 与合伙人打赌"交易员可否培养"，招募 23 名普通人，用海龟交易法培训两周后让他们实盘交易。四年后这批"海龟"累计盈利超过 1 亿美元，证明了纪律 > 天赋。' },
            { title: '趋势策略的胜率悖论', content: '趋势跟踪策略胜率通常只有 35-40%（10 笔交易可能只赚 4 笔），但赚钱的那几笔盈利通常是亏损笔的 5-10 倍。核心在于：在小亏损时果断止损，在大盈利时坚定持有。盈亏比战胜了胜率。' },
            { title: 'ATR 是动态止损的神器', content: '固定止损（亏 2 元就卖）在波动大时太窄（被频繁震出）、波动小时太宽（亏损过大）。ATR 自动适应市场波动——波动大时止损放宽，波动小时止损收紧。是专业策略的标准做法。' },
            { title: '为什么多数人无法坚持海龟', content: '连续止损 5-8 次才能等到一次大趋势。绝大多数人在第 5 次止损后就崩溃了——停止执行、修改参数、怀疑策略。海龟实验中最成功的交易者不是最聪明的，而是纪律最强的。' }
          ],
          practice: {
            title: '实战：完整海龟交易法 Backtrader 实现',
            desc: '用 Backtrader 实现经典海龟交易法：唐奇安通道(20日)入场 + ATR(20日)仓位计算 + 金字塔加仓(最多4次) + 移动止损(10日)。回测 A 股沪深 300 指数 5 年数据。输出：累计净值曲线、每年收益率、胜率、最大回撤、夏普比率、最长连续亏损次数。'
          },
          resources: [
            { label: '海龟交易法则 原书', url: 'https://book.douban.com/subject/3017623/' },
            { label: '海龟交易法完整规则', url: 'https://www.investopedia.com/articles/trading/08/turtle-trading.asp' }
          ]
        },
        {
          id: '3-3',
          title: '均值回归策略',
          duration: '3-4 天',
          points: [
            '均值回归原理：价格偏离均值后会倾向于回归。在低价买入、高价卖出',
            '布林带策略：收盘价 < 布林下轨 → 买入（超卖）；收盘价 > 布林上轨 → 卖出（超买）',
            'RSI 策略：RSI < 30 超卖买入、RSI > 70 超买卖出',
            '震荡市 vs 趋势市识别：用 ADX 指标判断——ADX < 20 震荡市（适合均值回归）、ADX > 40 趋势市（适合趋势跟踪）',
            '均值回归的风险：价格可能"一直不回归"——在强趋势市中做均值回归 = 接飞刀',
            '结合布林带 + RSI + ADX：三重过滤减少假信号',
            '止盈止损策略：盈利目标（如回归均线时止盈）、止损（如偏离超过 3σ 止损）',
            '多品种分散：同时做 10 个品种的均值回归，避免单品种风险'
          ],
          knowledgeCards: [
            { title: '市场 70% 时间在震荡', content: '大约 70% 时间价格在区间内来回波动，只有 30% 时间有清晰趋势。均值回归策略在震荡市中如鱼得水，但一旦遇到强趋势（如 2020 年疫情暴跌、2024 年 AI 暴涨），可能连续亏损。' },
            { title: 'ADX：市场状态识别器', content: 'Average Directional Index。ADX 不判断方向，只判断趋势强度。<20 是震荡市（用均值回归策略）、20-40 是无明显趋势（谨慎）、>40 是强趋势（用趋势跟踪策略）。学会用 ADX 在两种策略间切换，是成熟交易者的标志。' },
            { title: '策略轮动：全天候作战', content: '专业量化基金不会只跑一种策略。他们根据 ADX 和波动率动态分配资金：震荡市 70% 资金给均值回归策略 + 30% 给趋势策略；趋势市反过来。这个简单轮动能稳定提升夏普比率。' },
            { title: '均值回归的最大风险——黑天鹅', content: '2020 年 3 月美股熔断时，布林带下轨不断下移，RSI 在 10 以下持续数日。做均值回归的交易者一路补仓，最终爆仓。永远设置"绝对止损"——不管你用什么信号入场，单笔亏损必须有个硬上限。' }
          ],
          practice: {
            title: '实战：震荡/趋势双模式策略系统',
            desc: '实现一个双模式策略：(1) 用 ADX 判断当前市场状态；(2) ADX<25 时运行布林带均值回归策略；(3) ADX>40 时运行唐奇安通道趋势跟踪策略；(4) ADX 在 25-40 之间时空仓观望。对比这个双模式策略与纯趋势策略、纯均值策略在 5 年 A 股数据上的表现差异。'
          },
          resources: [
            { label: 'rqalpha 回测引擎', url: 'https://github.com/ricequant/rqalpha' },
            { label: 'ADX 详解', url: 'https://www.investopedia.com/terms/a/adx.asp' }
          ]
        },
        {
          id: '3-4',
          title: '参数优化与过拟合防范',
          duration: '4-5 天',
          points: [
            '网格搜索：为每个参数指定候选值，遍历所有组合。如 MA5/10/15/20/25/30 × MA20/40/60/80/100/120 = 36 组，跑 36 次回测找最优组合',
            '过拟合识别：在训练集上最优的参数组合，在测试集上表现好才算数。训练集收益 300%、测试集收益 5% = 严重过拟合',
            'Walk-Forward 分析：把数据分成多个时间段，每段"用前 N 月训练、后 1 月测试"，滚动前进。比简单分割更接近实盘',
            '参数热力图：用 matplotlib 画参数 × 夏普比率的热力图，一眼看出哪些参数区域表现稳定',
            '参数稳健性：好的参数不是一个"尖峰"（换个参数就崩），而是一个"高原"（附近参数表现都不错）',
            '防止过拟合的铁律：① 保留至少 30% 数据做样本外测试 ② 参数数量 ≤ 3 个 ③ 样本内外收益差距 < 30%',
            '奥卡姆剃刀原则：简单策略 > 复杂策略。能用 2 个参数解决的事，绝不用 5 个',
            'Bonferroni 校正：如果你测试了 100 组参数，纯靠运气也大概率能找到"看起来很好"的。统计检验要做多重比较校正'
          ],
          knowledgeCards: [
            { title: '过拟合是量化交易的终极陷阱', content: '回测收益 300%、夏普 5.0、最大回撤 5%——看到这种结果先别兴奋，大概率是过拟合。任何一个策略，只要参数调得够多，总能在回测上找到完美曲线。但拿到实盘第二天就亏钱。区别在于：你的策略学到了市场的真实规律，还是学会了回测数据的噪音。' },
            { title: 'Walk-Forward > 简单分割', content: '固定分割（训练 2019-2022，测试 2023-2024）只能告诉你策略在"后一段"表现如何。Walk-Forward 测试了策略在多个不同市场环境下的表现：2020 年疫情暴跌中用前几年数据训练、2021 年牛市中用包含 2020 的数据训练……接近真实演进过程。' },
            { title: '参数高原 vs 参数尖峰', content: '画出参数热力图后，如果夏普比率最高的区域是一个"尖峰"——仅 5-6 日/20-21 日组合好，其他都差——这是过拟合的信号。好的策略应该形成一个"高原"：短期均线在 5-15 日、长期在 20-60 日的范围内表现都不错。' },
            { title: '三个铁律救你命', content: '1. 保留 30% 数据不碰（样本外），只在最后验证一次；2. 参数不超过 3 个——少即是多；3. 样本内外收益差距超过 30%，无论样本内多漂亮，直接扔掉。这三条能过滤掉 90% 的虚假策略。' }
          ],
          practice: {
            title: '实战：参数稳健性完整检验',
            desc: '对双均线策略做完整检验：(1) 网格搜索：短均线候选 [5,10,15,20,25,30]，长均线候选 [20,40,60,80,100,120]，共 36 组回测；(2) 画出夏普比率热力图；(3) 识别"高原区" vs "尖峰区"；(4) 选高原区中心参数做 Walk-Forward 分析（滚动窗口，每 2 年训练+后 6 月测试）；(5) 对比简单分割 vs Walk-Forward 结果差异。'
          },
          resources: [
            { label: '过拟合详解', url: 'https://www.investopedia.com/terms/o/overfitting.asp' },
            { label: 'Walk-Forward 分析教程', url: 'https://www.backtrader.com/blog/posts/2016-07-30-timeframe-analyzer/timeframe-analyzer/' }
          ]
        },
        {
          id: '3-5',
          title: '资金管理与风控入门',
          duration: '3-4 天',
          points: [
            '固定仓位：每次交易固定金额/股数。简单直观，但不考虑市场波动率变化',
            '凯利公式：最优仓位 = (胜率×盈亏比 - 败率)/盈亏比。理论上最优，但实盘建议用半凯利(f/2)',
            '风险平价：每笔交易承受相同风险（如总资金 1%）。在不同品种间分配时自动调整仓位大小',
            '最大回撤熔断：当日亏损 > 5% 或周亏损 > 10% 时自动暂停交易。用代码锁定，不给自己动摇的机会',
            '单品种集中度限制：任一品种持仓不超过总资金 20%。避免踩雷（如 2020 年瑞幸造假事件）',
            'Black-Scholes 思维迁移：用波动率动态调整仓位——波动大时减仓、波动小时加仓',
            '组合层面风控：不是看单策略回撤，是看所有策略加起来的组合回撤。策略间可能存在相关性',
            '复盘机制：每周统计所有止损交易的原因，分类分析（市场突变？参数问题？信号噪音？）'
          ],
          knowledgeCards: [
            { title: '仓位管理 = 生存管理', content: '即使你有一个胜率 60% 的"好策略"，满仓 all-in 也随时可能因为连续 3 笔亏损就爆仓。仓位管理决定了你在市场中能活多久——活得够久，概率的天平才会向你倾斜。' },
            { title: '凯利公式的正确用法', content: '凯利公式告诉你"最优下注比例"，但股市不是赌场——胜率、盈亏比都在变化且无法精确估计。所以实战中永远用半凯利(f/2)甚至四分之一凯利(f/4)。保守的凯利胜过激进的爆仓。' },
            { title: '风控规则必须写死在代码里', content: '不要相信自己在连续亏损时会"理性判断"。当你的个人账户亏了 30%，你的大脑会自动合理化"再扛一扛就会反弹"。风控逻辑必须写进代码自动执行——if drawdown > 5%: stop_trading()。' },
            { title: '回撤的心理学', content: '10% 的回撤在数字上看起来不大，但如果是 100 万账户亏了 10 万，大多数人已经开始失眠。你的策略最大回撤应该是你能"睡得着觉"的水平，而不是数学上的最优值。' }
          ],
          practice: {
            title: '实战：仓位策略大比拼',
            desc: '同一策略（海龟交易法），对比 4 种仓位管理：(1) 固定仓位（每次 10% 资金）；(2) 凯利公式（全凯利）；(3) 半凯利；(4) 风险平价（每笔风险 = 总资金 1%）。回测 5 年数据，对比：年化收益、最大回撤、夏普比率、最长回撤恢复期。你会看到——半凯利和风险平价的回撤远小于全凯利，而收益并没有显著降低。'
          },
          resources: [
            { label: '凯利公式详解', url: 'https://www.investopedia.com/terms/k/kellycriterion.asp' },
            { label: '风险管理基础', url: 'https://www.investopedia.com/terms/r/riskmanagement.asp' }
          ]
        }
      ],
      milestone: '用 Backtrader 实现海龟交易法完整版，完成参数优化与 Walk-Forward 验证，加入风险平价仓位管理，输出专业的回测报告'
    },

    {
      id: 'stage-4',
      number: '04',
      title: '系统架构与模拟交易',
      subtitle: '完整闭环 · 数据→策略→下单',
      duration: '4-6 周',
      difficulty: '进阶',
      color: '#f59e0b',
      icon: 'fa-solid fa-server',
      quote: '从实验室走向生产环境',
      overview: '搭建量化交易的完整技术架构：数据采集→存储→策略引擎→模拟下单→监控日志。用 VnPy 对接 SimNow 模拟盘，体验真实交易环境。',
      modules: [
        {
          id: '4-1',
          title: '数据库与数据存储',
          duration: '4-5 天',
          points: [
            'MySQL/PostgreSQL 基础：建表、插入、查询',
            '行情数据表设计：日期、代码、OHLCV 字段',
            '批量数据写入优化：批量 INSERT、索引优化',
            'Python 操作数据库：sqlalchemy / pymysql'
          ],
          knowledgeCards: [
            { title: '为什么需要数据库', content: '量化交易数据量巨大，单靠 CSV 文件管理混乱且查询慢。数据库让数据管理井井有条' },
            { title: '选 MySQL 就够', content: '入门阶段 MySQL 完全够用，量大了再升级到 ClickHouse（列式存储、查询更快）' }
          ],
          practice: {
            title: '实战：行情数据库搭建',
            desc: '用 MySQL 建表存储 A 股日线数据，写 Python 脚本自动从 AkShare 拉数据入库，并建立索引优化查询'
          },
          resources: [
            { label: 'MySQL 教程', url: 'https://www.runoob.com/mysql/' },
            { label: 'SQLAlchemy ORM', url: 'https://www.sqlalchemy.org/' }
          ]
        },
        {
          id: '4-2',
          title: '实时行情与任务调度',
          duration: '3-4 天',
          points: [
            '定时任务：Linux crontab / Python schedule 库',
            'Redis 基础：缓存实时行情数据',
            'WebSocket 实时推送原理',
            '任务编排：数据下载 → 策略计算 → 信号生成'
          ],
          knowledgeCards: [
            { title: '定时 vs 实时', content: '入门阶段用定时任务就够了（每5分钟跑一次）。只有做高频才需要 WebSocket 实时推送' },
            { title: 'Redis 做行情缓存', content: 'Redis 读写速度是 MySQL 的 100 倍以上，适合做实时行情的内存缓存层' }
          ],
          practice: {
            title: '实战：盘后选股自动化',
            desc: '写一个脚本：每天收盘后自动拉数据 → 计算指标 → 筛选信号 → 发邮件通知'
          },
          resources: [
            { label: 'Python schedule', url: 'https://github.com/dbader/schedule' },
            { label: 'Redis 教程', url: 'https://www.runoob.com/redis/' }
          ]
        },
        {
          id: '4-3',
          title: 'VnPy 平台入门',
          duration: '5-6 天',
          points: [
            'VnPy 安装与环境配置（Python 3.10+）',
            '核心模块：CTA 策略引擎、数据管理',
            '策略模板：继承 CtaTemplate，写 on_bar() 方法',
            '回测功能：BacktestingEngine 回测历史数据'
          ],
          knowledgeCards: [
            { title: 'VnPy vs Backtrader', content: 'Backtrader 适合学习回测原理，VnPy 适合实盘。VnPy 有真实交易所接口，但代码量大、学习曲线更陡' },
            { title: 'C++ 底层', content: 'VnPy 核心交易接口用 C++ 实现，性能远超纯 Python。这也是它能做专业实盘的原因' }
          ],
          practice: {
            title: '实战：VnPy 策略部署',
            desc: '在 VnPy 上实现一个 CTA 策略，加载 3 年历史数据做回测，对比 Backtrader 结果'
          },
          resources: [
            { label: 'VnPy 官方文档', url: 'https://www.vnpy.com/docs/cn/' },
            { label: 'VnPy GitHub', url: 'https://github.com/vnpy/vnpy' }
          ]
        },
        {
          id: '4-4',
          title: '模拟盘交易',
          duration: '5-6 天',
          points: [
            'SimNow：免费的期货模拟交易平台',
            'CTP 接口对接：报单、撤单、成交回报',
            '模拟盘与回测的差距：滑点、延迟、流动性',
            '至少跑 1 个月模拟盘验证稳定性'
          ],
          knowledgeCards: [
            { title: '模拟盘是实盘的最后防线', content: '回测收益 100%，模拟盘可能只有 60%。滑点、流动性、网络延迟在回测里完全体现不出来' },
            { title: '先期货后股票', content: '期货有 SimNow 免费模拟盘，且可以做多做空，更适合练手。A股没有官方模拟盘' }
          ],
          practice: {
            title: '实战：模拟盘交易一个月',
            desc: '用 VnPy 对接 SimNow，跑一个简单策略至少 1 个月，记录每天的交易日志和盈亏'
          },
          resources: [
            { label: 'SimNow 官网', url: 'https://www.simnow.com.cn/' },
            { label: 'VnPy CTA 教程', url: 'https://www.vnpy.com/docs/cn/cta_strategy.html' }
          ]
        },
        {
          id: '4-5',
          title: '日志与监控系统',
          duration: '3-4 天',
          points: [
            'Python logging：不同级别日志（INFO/WARNING/ERROR）',
            '日志文件滚动：按日期或大小切分日志',
            '告警机制：异常时发送邮件/微信通知',
            '交易复盘：记录每笔交易的触发条件、滑点、盈亏'
          ],
          knowledgeCards: [
            { title: '日志是量化系统的眼睛', content: '策略跑着跑着为什么突然亏钱了？没有日志你就永远不知道原因。日志比策略本身更重要' },
            { title: '告警分级', content: 'ERROR 级必须立即通知（如程序崩溃），WARNING 级定时汇总（如连续亏损），INFO 级定期查看（如每日交易汇总）' }
          ],
          practice: {
            title: '实战：完整日志系统',
            desc: '给策略加完整日志：每天生成交易报告、异常自动发邮件、支持按日期查询历史记录'
          },
          resources: [
            { label: 'Python logging 官方', url: 'https://docs.python.org/zh-cn/3/howto/logging.html' }
          ]
        }
      ],
      milestone: '搭建完整系统，跑 SimNow 模拟盘，稳定运行 1 个月'
    },

    {
      id: 'stage-5',
      number: '05',
      title: '策略进阶',
      subtitle: '统计套利 · 多因子 · 机器学习',
      duration: '4-6 周',
      difficulty: '高级',
      color: '#ec4899',
      icon: 'fa-solid fa-brain',
      quote: '从"看图说话"到"数学驱动"',
      overview: '跳出技术指标框架，进入量化交易的核心领域：统计套利、多因子模型、机器学习预测。策略不再靠感觉，而是靠数据和数学。',
      modules: [
        {
          id: '5-1',
          title: '配对交易与协整',
          duration: '4-5 天',
          points: [
            '配对交易原理：找到两只走势高度相关的股票',
            '协整检验（ADF 检验）：判断价差是否均值回归',
            'Z-Score 信号：价差偏离均值超过 2 个标准差时交易',
            '半衰期分析：估算价差回归均值的速度'
          ],
          knowledgeCards: [
            { title: '配对交易的逻辑', content: '茅台和五粮液走势高度相关，它们之间的价差不会偏离太远。价差过大时做多弱者+做空强者' },
            { title: '市场中性', content: '配对交易多空对冲，不依赖大盘涨跌。即使熊市也可能赚钱，是专业量化基金最爱的策略类型' }
          ],
          practice: {
            title: '实战：A 股配对交易',
            desc: '找 3 对高度相关的 A 股股票，检验协整关系，模拟配对交易策略回测'
          },
          resources: [
            { label: '配对交易详解', url: 'https://www.investopedia.com/terms/p/pairstrade.asp' },
            { label: 'statsmodels 统计库', url: 'https://www.statsmodels.org/' }
          ]
        },
        {
          id: '5-2',
          title: '统计套利基础',
          duration: '4-5 天',
          points: [
            '平稳性检验：ADF 检验原理',
            '卡尔曼滤波：动态估计价差均值',
            '套利信号生成与执行时机',
            '风险控制：价差持续扩大的止损策略'
          ],
          knowledgeCards: [
            { title: '统计 ≠ 无风险', content: '统计套利基于历史规律，但规律可能突然改变。俄乌战争、政策变化都可能让价差不再回归' },
            { title: '卡尔曼滤波优势', content: '相比固定均线，卡尔曼滤波能自适应调整价差均值的估计，更准确地捕捉交易信号' }
          ],
          practice: {
            title: '实战：动态配对交易',
            desc: '用卡尔曼滤波替代滑动窗口计算价差均值，对比固定窗口和动态窗口的回测差异'
          },
          resources: [
            { label: 'pykalman 库', url: 'https://pykalman.github.io/' }
          ]
        },
        {
          id: '5-3',
          title: '多因子模型',
          duration: '4-5 天',
          points: [
            '因子分类：估值因子、动量因子、质量因子、波动率因子',
            '因子检验：IC（信息系数）、IR（信息比率）',
            '因子合成：多因子打分法、因子加权',
            '分层回测：按因子值分 5 组，看各组收益单调性'
          ],
          knowledgeCards: [
            { title: 'IC > 0.03 才算有效因子', content: 'IC 值是因子值与下期收益的相关系数。绝对值 > 0.03 才有实战价值，< 0.02 基本是噪音' },
            { title: '因子拥挤', content: '大家都用的因子会逐渐失效。市场总是在进化，量化策略需要持续迭代' }
          ],
          practice: {
            title: '实战：5 因子选股模型',
            desc: '选取 PE、PB、ROE、动量、波动率 5 个因子，对沪深 300 做分层回测，计算各层年化收益'
          },
          resources: [
            { label: 'Alphalens 因子分析', url: 'https://github.com/stefan-jansen/alphalens-reloaded' }
          ]
        },
        {
          id: '5-4',
          title: '机器学习预测',
          duration: '5-6 天',
          points: [
            'LightGBM / XGBoost：梯度提升树做涨跌预测',
            '训练集/验证集/测试集：时间序列交叉验证',
            '过拟合防范：早停、正则化、特征数量控制',
            '模型评估：准确率、AUC、混淆矩阵'
          ],
          knowledgeCards: [
            { title: 'ML 不是魔法', content: '机器学习的涨跌预测准确率通常只有 50-55%。不要期望太高，ML 更多是辅助决策，不是替代策略' },
            { title: '时间序列交叉验证', content: '不能直接用 K-Fold 交叉验证！时间序列有先后顺序，必须用 TimeSeriesSplit 保持时间先后关系' }
          ],
          practice: {
            title: '实战：ML 涨跌预测',
            desc: '用 LightGBM 预测次日涨跌，特征包括：过去 N 日收益率、成交量变化、技术指标值，对比均线策略的结果'
          },
          resources: [
            { label: 'LightGBM 官方', url: 'https://lightgbm.readthedocs.io/' },
            { label: 'ML for Trading 项目', url: 'https://github.com/stefan-jansen/machine-learning-for-trading' }
          ]
        },
        {
          id: '5-5',
          title: '特征工程',
          duration: '4-5 天',
          points: [
            '价格衍生特征：收益率、波动率、振幅',
            '量价关系：量比、换手率、成交量均线',
            '时间特征：星期效应、月初效应、节假日效应',
            '特征筛选：相关性分析、特征重要性排序',
            '因子挖掘：Alpha 因子探索与验证'
          ],
          knowledgeCards: [
            { title: '特征 > 模型', content: '垃圾特征 + 复杂模型 ≈ 垃圾结果。好的特征 + 简单模型也能出好结果。花 80% 时间在特征上' },
            { title: '数据泄露警惕', content: '千万别用"未来的数据"计算特征！比如用当日收盘价算一个因子去预测当日涨跌，这是典型的数据泄露' }
          ],
          practice: {
            title: '实战：因子挖掘竞赛',
            desc: '构造 20+ 个新因子，逐一检验 IC 值，筛选出 Top 5，组合成一个多因子策略'
          },
          resources: [
            { label: '特征工程指南', url: 'https://www.kaggle.com/learn/feature-engineering' }
          ]
        }
      ],
      milestone: 'ML 策略夏普比率 > 1.5，样本外表现稳定'
    },

    {
      id: 'stage-6',
      number: '06',
      title: '实盘与持续优化',
      subtitle: '真金白银 · 风控体系 · 持续迭代',
      duration: '长期',
      difficulty: '终极',
      color: '#ef4444',
      icon: 'fa-solid fa-rocket',
      quote: '纸上得来终觉浅，绝知此事要躬行',
      overview: '从模拟盘转向实盘，建立完善的风控体系，持续优化策略。这不是终点，而是真正的起点。市场永远在变，你也必须不断进化。',
      modules: [
        {
          id: '6-1',
          title: '实盘前检查清单',
          duration: '1-2 周',
          points: [
            '模拟盘连续稳定运行 1-3 个月，无重大异常',
            '回测收益与模拟盘收益差距 < 5%',
            '最大回撤在心理承受范围内',
            '有完整的日志和告警系统',
            '从小资金开始：够交手续费即可',
            '准备好完整的应急预案'
          ],
          knowledgeCards: [
            { title: '为什么必须小资金起步', content: '实盘的压力和模拟盘完全不同。资金量小时你还能理性操作，大量资金会让你患得患失、违反策略纪律' },
            { title: '亏损是常态', content: '连续亏损 5 笔、10 笔都是正常的。关键是亏损时还能严格执行策略。纪律 > 策略' }
          ],
          practice: {
            title: '实战：实盘上线 SOR',
            desc: '填写实盘上线标准操作流程（SOP），逐项检查：系统稳定性、资金准备、心理准备、应急预案'
          },
          resources: [
            { label: '量化交易心理准备', url: 'https://www.investopedia.com/articles/trading/09/psychology-of-trading.asp' }
          ]
        },
        {
          id: '6-2',
          title: '风控体系',
          duration: '1-2 周',
          points: [
            '单笔最大亏损：不超过总资金 2%',
            '日最大回撤熔断：回撤 > 5% 当日停止交易',
            '周熔断：回撤 > 10% 本周停止交易',
            '流动性检查：标的日均成交量足够大',
            '持仓集中度：单品种不超 20%',
            '黑名单机制：连续亏损的品种暂停交易'
          ],
          knowledgeCards: [
            { title: '2% 规则', content: '单笔亏损不超过总资金 2%，这样即使连续亏 20 笔，本金也只亏 40%。这是职业交易员的第一条铁律' },
            { title: '风控是自动的', content: '不要相信自己在亏损时会"理性判断"。风控规则必须写死在代码里，由程序自动执行熔断' }
          ],
          practice: {
            title: '实战：风控系统开发',
            desc: '写一个风控模块：监控实时盈亏、自动触发熔断、发送告警、记录熔断日志'
          },
          resources: [
            { label: '风险管理基础', url: 'https://www.investopedia.com/terms/r/riskmanagement.asp' }
          ]
        },
        {
          id: '6-3',
          title: '深度学习进阶',
          duration: '4-6 周',
          points: [
            'LSTM/GRU：长短期记忆网络做时间序列预测',
            'Transformer：注意力机制建模长距离依赖',
            '强化学习：DQN/PPO 做动态仓位决策',
            '回测验证：深度学习模型最容易过拟合，必须严格样本外测试'
          ],
          knowledgeCards: [
            { title: '深度学习 ≠ 高收益', content: '深度学习在量化交易中并非银弹。简单 LightGBM 效果经常优于复杂 LSTM。先用简单的，再尝试复杂的' },
            { title: '强化学习的陷阱', content: '强化学习需要大量交互数据，金融市场的样本量远远不够。用 RL 做的策略，样本外表现往往很糟糕' }
          ],
          practice: {
            title: '实战：LSTM 价格预测',
            desc: '用 PyTorch 搭建 LSTM，输入过去 60 天数据预测未来 5 天涨跌，严格做 TimeSeriesSplit 验证'
          },
          resources: [
            { label: 'PyTorch 官方教程', url: 'https://pytorch.org/tutorials/' },
            { label: 'ML for Trading 书', url: 'https://github.com/stefan-jansen/machine-learning-for-trading' }
          ]
        },
        {
          id: '6-4',
          title: '持续迭代方法论',
          duration: '长期',
          points: [
            '策略日志回顾：每周复盘交易记录',
            'A/B 测试：新旧策略并行运行对比',
            '定期参数校准：市场环境变化需调整参数',
            '知识更新：跟踪学术论文和开源社区',
            '系统升级路线：C++ 底层加速、分布式回测'
          ],
          knowledgeCards: [
            { title: '策略的保质期', content: '量化策略平均有效期 6-18 个月，之后会因为市场进化或因子拥挤而失效。持续迭代不是可选项，是必选项' },
            { title: '社区是最好的老师', content: 'GitHub、VnPy 论坛、知乎量化圈，保持与社区交流。闭门造车的策略很容易走偏' }
          ],
          practice: {
            title: '实战：策略迭代 SOP',
            desc: '建立策略迭代标准流程：每周复盘 → 数据更新 → 参数校准 → 样本外验证 → 灰度上线'
          },
          resources: [
            { label: 'nautilus_trader（参考架构）', url: 'https://github.com/nautechsystems/nautilus_trader' },
            { label: 'jesse AI 交易框架', url: 'https://github.com/jesse-ai/jesse' },
            { label: 'awesome-quant 资源大全', url: 'https://github.com/t0suj4/awesome-quant' }
          ]
        }
      ],
      milestone: '小资金实盘盈利，建立持续优化的工作流'
    }
  ],

  // ==================== 全局资源索引 ====================
  globalResources: {
    books: [
      { title: 'Python 金融大数据分析', desc: '入门首选，用 Python 做金融数据实战' },
      { title: '海龟交易法则', desc: '经典趋势跟踪策略完整解析' },
      { title: '量化交易——如何建立自己的算法交易事业', desc: '从零搭建量化交易系统' },
      { title: 'Machine Learning for Trading', desc: 'ML+量化，有免费电子版和配套代码' }
    ],
    platforms: [
      { name: '聚宽 JoinQuant', url: 'https://www.joinquant.com/', desc: '在线回测平台，零配置上手' },
      { name: '米筐 RiceQuant', url: 'https://www.ricequant.com/', desc: '专业在线量化研究' },
      { name: 'VnPy 社区', url: 'https://www.vnpy.com/', desc: '国内最大量化开源社区' }
    ],
    githubRepos: [
      { name: 'awesome-quant', url: 'https://github.com/wilsonfreitas/awesome-quant', stars: '26.4k', desc: '量化资源索引大全，覆盖 Python/R/C++/Julia，必看' },
      { name: 'backtrader', url: 'https://github.com/mementum/backtrader', stars: '21.7k', desc: 'Python 事件驱动回测框架首选，文档最全' },
      { name: 'vnpy', url: 'https://github.com/vnpy/vnpy', stars: '40.9k', desc: '国内第一大实盘量化平台，40+ 交易接口' },
      { name: 'Qlib', url: 'https://github.com/microsoft/qlib', stars: '43.4k', desc: '微软 AI 量化平台，内置 20+ SOTA 模型' },
      { name: 'freqtrade', url: 'https://github.com/freqtrade/freqtrade', stars: '50.7k', desc: '加密货币开源交易机器人，WebUI+Telegram' },
      { name: 'ccxt', url: 'https://github.com/ccxt/ccxt', stars: '42.6k', desc: '100+ 交易所统一 API（Python/JS/PHP/C#/Go）' },
      { name: 'machine-learning-for-trading', url: 'https://github.com/stefan-jansen/machine-learning-for-trading', stars: '17.4k', desc: 'ML+量化圣经级代码，150+ Notebook' },
      { name: 'yfinance', url: 'https://github.com/ranaroussi/yfinance', stars: '23.8k', desc: 'Yahoo Finance 数据接口，美股数据首选' },
      { name: 'FinRL', url: 'https://github.com/AI4Finance-Foundation/FinRL', stars: '15.2k', desc: '深度强化学习量化框架，NeurIPS 论文' },
      { name: 'zipline-reloaded', url: 'https://github.com/stefan-jansen/zipline-reloaded', stars: '1.8k', desc: 'Quantopian 遗產——事件驱动回测引擎' },
      { name: 'nautilus_trader', url: 'https://github.com/nautechsystems/nautilus_trader', stars: '23k', desc: 'Rust+Python 高性能交易引擎，工业级' },
      { name: 'jesse', url: 'https://github.com/jesse-ai/jesse', stars: '7.9k', desc: '加密货币全流程，内置 AI 策略助手' },
      { name: 'pyfolio-reloaded', url: 'https://github.com/stefan-jansen/pyfolio-reloaded', stars: '591', desc: '投资组合风险分析，tear sheet 报告' }
    ],
    pitfalls: [
      '别一上来就想赚钱——90% 新手死在"跳过回测直接实盘"',
      '样本外测试是底线——回测曲线再漂亮，一上实盘就崩',
      '过拟合是魔鬼——参数越多，过拟合越严重。简单策略 > 复杂策略',
      '手续费和滑点必须模拟——忽略这俩的回测结果就是骗自己',
      '小资金开始——能赚钱的策略，5000 块也能稳定增长',
      '日志和复盘比策略更重要——知道"为什么亏"才能进步',
      '先跑模拟盘 1-3 个月——很多系统 Bug 只有长期运行才会暴露'
    ]
  },

  // ==================== 术语详解词汇表 ====================
  // 知识卡片中的核心词汇自动识别并支持浮窗详解 + Wiki 链接
  glossary: {
    'MACD': {
      explanation: '指数平滑异同移动平均线（Moving Average Convergence Divergence），由 Gerald Appel 于 1979 年提出。由 DIF（快慢 EMA 差值）、DEA（DIF 的 EMA）和柱状线（DIF-DEA 的 2 倍）三部分组成。金叉（DIF 上穿 DEA）为买入信号，死叉（DIF 下穿 DEA）为卖出信号。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/MACD'
    },
    'RSI': {
      explanation: '相对强弱指标（Relative Strength Index），由 Welles Wilder 于 1978 年提出。计算公式：RSI = 100 - 100/(1+RS)，其中 RS = N 日平均上涨幅度 / N 日平均下跌幅度。值在 0-100 之间，通常 >70 视为超买，<30 视为超卖。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%B0%8D%E5%BC%B7%E5%BC%B1%E6%8C%87%E6%95%B8'
    },
    '布林带': {
      explanation: 'Bollinger Bands，由 John Bollinger 于 1980 年代提出。由中轨（N 日均线）、上轨（中轨 + K 倍标准差）、下轨（中轨 - K 倍标准差）三条线组成。价格触及上轨可能超买，触及下轨可能超卖，带宽反映了市场波动率。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%B8%83%E6%9E%97%E5%B8%A6'
    },
    'KDJ': {
      explanation: '随机指标（Stochastic Oscillator），由 George Lane 提出。由 K 值、D 值、J 值三条线组成，根据 N 日内最高价/最低价与收盘价的关系计算。常用于短线交易，K 线上穿 D 线为金叉买入信号。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E6%8C%87%E6%A0%87'
    },
    '金叉': {
      explanation: '黄金交叉（Golden Cross），短期均线从下方向上穿越长期均线，通常被视为买入/看涨信号。不仅限于均线，MACD 的 DIF 上穿 DEA、KDJ 的 K 线上穿 D 线都属于金叉。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%BB%84%E9%87%91%E4%BA%A4%E5%8F%89'
    },
    '死叉': {
      explanation: '死亡交叉（Death Cross），短期均线从上方向下穿越长期均线，通常被视为卖出/看跌信号。与金叉相对，是趋势由涨转跌的技术信号。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%AD%BB%E4%BA%A1%E4%BA%A4%E5%8F%89'
    },
    '前复权': {
      explanation: '向前复权，以当前价格为基准，向前调整历史价格。假设今天除权了，把之前所有的价格按比例下调，使历史价格与当前价格可比。回测时必须使用前复权数据，否则除权除息日会出现虚假的"跳空缺口"。'
    },
    '后复权': {
      explanation: '向后复权，以历史最早价格为基准，把之后的价格按复权因子上调。后复权可以看到股票从上市以来的"真实累计涨幅"，但由于价格被放大很多倍，不直观，回测中较少使用。'
    },
    '夏普比率': {
      explanation: 'Sharpe Ratio，由 William Sharpe 于 1966 年提出。衡量每单位风险（标准差）所带来的超额收益。计算公式：(策略年化收益 - 无风险利率) / 年化波动率。一般 >1 算合格，>2 算优秀，>3 可能过拟合了。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%A4%8F%E6%99%AE%E6%AF%94%E7%8E%87'
    },
    '最大回撤': {
      explanation: 'Maximum Drawdown（MDD），在选定周期内，净值从最高点到之后最低点的最大跌幅百分比。是衡量策略风险最重要的指标。收益 50% 但最大回撤 60%，意味着你可能在中途因亏损过大而被迫退出。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%9B%9E%E6%92%A4'
    },
    '凯利公式': {
      explanation: 'Kelly Criterion，由 John Kelly 于 1956 年提出。根据胜率和盈亏比计算最优下注比例。公式：f = (b×p - q) / b，b 为盈亏比，p 为胜率，q = 1-p。实际交易中建议使用 f/2（半凯利）更保守安全。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%87%AF%E5%88%A9%E5%85%AC%E5%BC%8F'
    },
    '过拟合': {
      explanation: 'Overfitting，模型/策略在历史数据上表现极好，但在新数据上表现糟糕。量化交易中参数越多、样本外测试不严格，越容易过拟合。典型特征：回测收益 300%，实盘亏 30%。解决方案：样本外测试、参数数量控制、Walk-Forward 验证。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E8%BF%87%E6%8B%9F%E5%90%88'
    },
    '海龟交易法': {
      explanation: 'Turtle Trading System，由 Richard Dennis 和 William Eckhardt 在 1983 年创立的经典趋势跟踪策略。核心规则：用唐奇安通道（N 日最高/最低价）判断入场，用 ATR（平均真实波幅）计算仓位和止损位，采用金字塔加仓和移动止损。该策略证明了"交易员可以培养"而非全靠天赋。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%B5%B7%E9%BE%9C%E4%BA%A4%E6%98%93%E6%B3%95%E5%88%99'
    },
    '唐奇安通道': {
      explanation: "Donchian Channel，由 Richard Donchian 提出。上轨 = N 日最高价，下轨 = N 日最低价，中轨 = (上轨+下轨)/2。海龟交易法的入场条件：价格突破 N 日唐奇安通道上轨/下轨。"
    },
    'ATR': {
      explanation: 'Average True Range（平均真实波幅），由 Welles Wilder 提出。计算 N 日内真实波幅（True Range）的移动平均。True Range = max(当日最高-当日最低, |当日最高-前日收盘|, |当日最低-前日收盘|)。常用于动态止损设置，如"2 倍 ATR 止损"。'
    },
    '协整检验': {
      explanation: 'Cointegration Test，检验两个或多个非平稳时间序列之间是否存在长期稳定的均衡关系。配对交易的基础：两只股票价格本身可能随机游走，但它们的价差必须平稳（均值回归）。常用方法：Engle-Granger 两步法、Johansen 检验。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%8D%8F%E6%95%B4'
    },
    'ADF检验': {
      explanation: 'Augmented Dickey-Fuller Test，最常用的时间序列平稳性检验方法。原假设 H0：序列存在单位根（非平稳）。如果 p-value < 0.05，拒绝原假设，认为序列平稳。配对交易中用于检验价差是否均值回归。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%A2%9E%E5%BB%A3%E8%BF%AA%E5%9F%BA-%E7%A6%8F%E5%8B%92%E6%AA%A2%E9%A9%97'
    },
    '卡尔曼滤波': {
      explanation: 'Kalman Filter，由 Rudolf Kalman 于 1960 年提出。一种递归算法，通过"预测-更新"循环，从含噪声的观测数据中估计动态系统的最优状态。在配对交易中用于动态估计价差均值，优于固定窗口的滑动平均。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2'
    },
    'IC': {
      explanation: 'Information Coefficient（信息系数），衡量因子值与下期收益率之间的相关程度。常用 Rank IC（Spearman 秩相关系数）。|IC| > 0.03 视为有效因子，> 0.05 为优秀因子，< 0.02 基本是噪音。IC 的稳定性（IR）比大小更重要。'
    },
    'IR': {
      explanation: 'Information Ratio（信息比率），IC 的均值 / IC 的标准差。衡量因子表现的稳定性。高 IR 意味着因子信号持续有效，而非偶尔碰运气。IR > 0.5 算合格，> 1.0 算优秀。'
    },
    '配对交易': {
      explanation: 'Pairs Trading，统计套利的经典策略。找到两只历史走势高度相关的股票（如茅台 vs 五粮液），当价差（spread）偏离均值超过阈值时，做多被低估的、做空被高估的，等待价差回归。优势：多空对冲、市场中性，不依赖大盘涨跌。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%85%8D%E5%AF%B9%E4%BA%A4%E6%98%93'
    },
    'LightGBM': {
      explanation: 'Light Gradient Boosting Machine，微软开源的梯度提升决策树框架。相比 XGBoost，训练速度更快、内存占用更低，使用直方图算法和 Leaf-wise 生长策略。在量化交易中常用于涨跌分类预测、因子合成。'
    },
    'XGBoost': {
      explanation: 'eXtreme Gradient Boosting，由陈天奇于 2014 年提出。梯度提升树的优化实现，引入正则化项防止过拟合。在 Kaggle 竞赛中统治多年，量化交易中用于预测涨跌和因子挖掘。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/XGBoost'
    },
    '滑点': {
      explanation: 'Slippage，下单价格与实际成交价格之间的差额。产生原因：市场流动性不足、价格波动快、网络延迟。假设你以 10.00 元发出买入指令，但实际成交价是 10.02 元，这 0.02 元就是滑点。回测中必须模拟滑点，否则结果严重失真。'
    },
    '流动性': {
      explanation: 'Liquidity，在不显著影响价格的情况下快速买卖资产的能力。日均成交量大的股票流动性好（如沪深 300 成分股），小盘股流动性差。量化策略优先选择高流动性标的，否则大资金进出困难、滑点巨大。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8B%95%E6%80%A7'
    },
    '风险平价': {
      explanation: 'Risk Parity，一种资金管理策略，让组合中每个资产贡献相同的风险（波动率），而非相同金额。例如：债券波动率低，需要更多仓位；股票波动率高，需要更少仓位。比简单的"等额分配"更能平滑组合波动。'
    },
    '特征工程': {
      explanation: 'Feature Engineering，从原始数据中构造可用于模型训练的特征变量。在量化交易中，特征 = 可能预测涨跌的因子。好的特征 > 好的模型，专家通常花 80% 时间在特征上。常见特征：价格衍生（收益率、波动率）、量价关系（量比、换手率）、时间特征（星期效应、月初效应）。'
    },
    '因子拥挤': {
      explanation: 'Factor Crowding，当太多资金使用同一因子（如低市盈率PE）时，该因子的超额收益会因拥挤交易而衰减甚至失效。历史数据显示，热门因子被广泛使用后，其收益会在 6-18 个月内显著下降。'
    },
    'LSTM': {
      explanation: 'Long Short-Term Memory，一种特殊的循环神经网络（RNN），由 Hochreiter 和 Schmidhuber 于 1997 年提出。通过"遗忘门、输入门、输出门"机制，解决普通 RNN 的长期依赖问题。在量化交易中用于时间序列预测，但需注意金融数据量小，LSTM 非常容易过拟合。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%95%B7%E7%9F%AD%E6%9C%9F%E8%A8%98%E6%86%B6'
    },
    '样本外测试': {
      explanation: 'Out-of-Sample Testing，用策略从未见过的数据来验证策略效果。标准做法：把数据分为训练集（如前 70% 时间）和测试集（后 30%），只在训练集上优化参数，在测试集上验证结果。样本外收益如果大幅低于样本内，说明过拟合了。'
    },
    'Walk-Forward': {
      explanation: 'Walk-Forward Analysis（前进式分析），一种更严格的回测验证方法。将数据分成多个窗口，每个窗口用前一段数据训练、后一段数据测试，逐步向前滚动。能更真实地模拟策略在持续演进的市场中的表现。'
    },
    '网格搜索': {
      explanation: 'Grid Search，参数优化的暴力方法。为每个参数指定候选值列表，遍历所有参数组合，找出回测表现最好的组合。缺点：参数越多、计算量指数增长；容易过拟合。建议配合样本外测试使用，防止选到"巧合最优"参数。'
    },
    'DataFrame': {
      explanation: 'Pandas 核心数据结构，可以理解为一个带标签的二维表格（类似 Excel 表）。每一列是一个 Series，有列名和行索引。量化交易中所有行情数据都以 DataFrame 形式存储和操作，支持向量化运算，比 for 循环快 100 倍以上。'
    },
    '向量化': {
      explanation: 'Vectorization，对数组/DataFrame 整体进行操作，而非逐行循环。Pandas 和 NumPy 底层用 C 实现向量化，性能远超 Python 循环。例如：df["return"] = df["close"].pct_change() 一行代码计算全市场涨跌幅。'
    },
    '胜率': {
      explanation: 'Win Rate，盈利交易次数 / 总交易次数。高胜率不等于高收益：趋势跟踪策略胜率常只有 35-40%，但单笔盈利是亏损的 5-10 倍（高盈亏比），总收益仍为正。不要迷信高胜率，盈亏比同样重要。'
    },
    '盈亏比': {
      explanation: 'Profit Factor / Risk-Reward Ratio，平均每笔盈利 / 平均每笔亏损。盈亏比 > 2 意味着即使胜率只有 40%，长期也是盈利的（0.4×2 - 0.6×1 = +0.2）。趋势策略的核心逻辑就是用高盈亏比弥补低胜率。'
    },
    'TWAP': {
      explanation: 'Time-Weighted Average Price（时间加权平均价格），一种订单执行算法。将大单拆分成多个小单，按固定时间间隔均匀下单，使平均成交价接近该时段的市场均价。目的是减少市场冲击，隐藏交易意图。'
    },
    'VWAP': {
      explanation: 'Volume-Weighted Average Price（成交量加权平均价格），比 TWAP 更进一步：成交量大的时段多下单，成交量小的时段少下单。是机构交易最常用的执行基准，很多算法交易的考核标准就是"跑赢 VWAP"。'
    },
    '强化学习': {
      explanation: 'Reinforcement Learning，Agent（智能体）通过与环境的交互（试错）学习最优策略。在量化交易中，Agent 根据当前市场状态做出买卖决策，收到盈亏作为奖励/惩罚。理论上可以学习动态仓位管理，但金融数据量通常不足以训练稳定的 RL 模型。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0'
    },
    'Transformer': {
      explanation: 'Google 于 2017 年提出的深度学习架构，核心是自注意力机制（Self-Attention）。可以捕捉序列中任意两个位置之间的长距离依赖关系。在 NLP 领域取得巨大成功（GPT 系列的基础），在金融时间序列预测中也有应用，但需要大量数据。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/Transformer%E6%A8%A1%E5%9E%8B'
    },
    'GRU': {
      explanation: 'Gated Recurrent Unit（门控循环单元），LSTM 的简化变体。将 LSTM 的三个门（遗忘门、输入门、输出门）简化为两个门（重置门、更新门），参数更少、训练更快。在很多时序任务中与 LSTM 效果相当。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%96%98%E6%8E%A7%E5%BE%AA%E7%92%B0%E5%96%AE%E5%85%83'
    },
    '统计套利': {
      explanation: 'Statistical Arbitrage，基于统计规律而非经济逻辑的套利策略。典型方法：配对交易（两只股票价差回归）、一篮子股票的多空组合。核心假设：历史统计规律会延续。风险在于规律可能突然改变（黑天鹅事件）。'
    },
    '均值回归': {
      explanation: 'Mean Reversion，价格/价差在偏离均值后会倾向于回归。与趋势跟踪相反，均值回归策略在价格低于均值时买入、高于均值时卖出。在震荡市中表现好，但在强趋势市中可能持续亏损（价格持续偏离不复归）。'
    },
    '趋势跟踪': {
      explanation: 'Trend Following，顺势而为的策略类型。认为"价格会沿着既有方向继续运动"，在趋势确认后入场（突破买入）、趋势反转时离场。代表策略：海龟交易法、均线交叉。典型特征是低胜率（35-40%）、高盈亏比（单笔盈利是亏损的 3-10 倍）。'

    },
    '复权': {
      explanation: '股票在发生分红送股、配股、拆股等事件后，股价会出现非交易性跳空。复权就是对历史价格进行调整，消除这些非交易因素造成的价格断层，使各期价格具有可比性。前复权和后复权是两种主要的复权方式。'
    },
    '基本面分析': {
      explanation: '通过分析公司的财务报表、行业地位、管理层能力等基本面因素来评估股票内在价值。常见指标包括 PE（市盈率）、PB（市净率）、ROE（净资产收益率）、营收增长率等。量化交易中基本面因子常与技术面因子结合使用。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%9C%AC%E9%9D%A2%E5%88%86%E6%9E%90'
    },
    '技术分析': {
      explanation: '通过研究历史价格和成交量数据来预测未来价格走势的方法论。三大假设：市场行为包容一切、价格以趋势方式演变、历史会重演。量化技术分析就是用程序自动识别图表形态和指标信号，取代人工看图。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%8A%80%E8%A1%93%E5%88%86%E6%9E%90'
    },
    '量化交易': {
      explanation: 'Quantitative Trading，用数学模型和计算机程序替代主观判断来做交易决策。核心流程：数据处理 → 策略研发 → 回测验证 → 模拟交易 → 实盘运行。优势：纪律性强（不受情绪影响）、可批量处理大量品种、可精确回测。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93'
    },
    '年化收益率': {
      explanation: 'Annualized Return，将策略的累计收益率转换为"每年平均赚多少"。计算公式：(期末净值/期初净值)^(252/交易日数) - 1。252 是 A 股每年交易天数。年化收益 20% 已经非常优秀（巴菲特长期年化约 20%）。'
    },
    '波动率': {
      explanation: 'Volatility，收益率的标准差（通常年化），衡量价格波动剧烈程度。高波动率意味着价格大幅震荡、风险高但潜在收益也高。年化波动率 = 日收益率标准差 × √252。是计算夏普比率、凯利公式仓位的基础参数。',
      wikiUrl: 'https://zh.wikipedia.org/wiki/%E6%B3%A2%E5%8B%95%E7%8E%87'
    }
  },

  // ==================== 成就徽章 ====================
  achievements: [
    { id: 'ach-1', threshold: 25, title: '初窥门径', icon: 'fa-solid fa-seedling', desc: '完成 25% 学习进度' },
    { id: 'ach-2', threshold: 50, title: '渐入佳境', icon: 'fa-solid fa-fire', desc: '完成一半学习内容' },
    { id: 'ach-3', threshold: 75, title: '炉火纯青', icon: 'fa-solid fa-gem', desc: '完成 75% 学习内容' },
    { id: 'ach-4', threshold: 100, title: '顶级刀俎', icon: 'fa-solid fa-crown', desc: '全部学习内容通关' }
  ]
};
