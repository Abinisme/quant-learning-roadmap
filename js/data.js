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
    version: '1.3.0',
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
            { title: '数据频率的选择', content: '日线做中长期策略（持仓数天到数周）；分钟线做日内策略（当日进出）；Tick 级数据做高频交易（毫秒级）。入门阶段专注于日线，数据量小、逻辑清楚。' },
            { title: '免费 API 的避坑指南', content: 'AkShare 免费但底层数据源可能随时调整（东方财富/新浪接口变动），你写的代码 3 个月后可能报错。解决方案：① 用 try/except 包裹所有数据拉取 ② 数据落库（存本地 CSV/SQLite）后优先读本地 ③ 每周跑一次数据校验脚本确认接口还正常。宁可用"旧数据"也不要在回测中途拉数据失败。' },
            { title: '复权数据的获取策略', content: 'AkShare stock_zh_a_hist() 默认返回不复权数据。获取前复权：① 参数 adjust="qfq" 直接获取前复权数据（最简单）② 或者获取不复权数据 + 复权因子表，自己算——更灵活但更复杂。Tushare Pro 提供完整的前复权因子历史表，适合专业应用。' }
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
          title: '股票数据基础与清除——前复权深度实战',
          duration: '4-5 天',
          points: [
            '核心概念：除权除息日股价会因分红/送股而产生非交易性跳空，需要用复权消除这个缺口',
            '前复权：以当前（最新）价格为基准，将之前所有历史价格按复权因子向下调整，使价格序列前后可比',
            '后复权：以历史最早价格为基准，将之后所有价格向上调整——主要用于看股票从上市至今的累计涨幅',
            '复权因子计算：每股分红/登记日收盘价。如分红 5 元、收盘 215 元 → 因子 = 5/215 ≈ 0.0233',
            '前复权公式：调整后价格 = 原始价格 × (1 - 每股分红/登记日收盘价)',
            '停牌处理：前向填充（ffill）填充停牌日价格，但注意停牌期间不生成交易信号',
            '时间序列索引：pd.to_datetime() 日期转换 → set_index("日期") → sort_index() 排序',
            '日收益率计算：df["return"] = df["close"].pct_change()，注意要先按股票代码分组',
            'resample 重采样：日线转周线/月线，用 agg 指定每列的聚合方式',
            '异常值检测：涨跌幅超涨跌停限制(±10-20%)的数据标记，成交量异常放大/缩小检测'
          ],
          knowledgeCards: [
            { title: '复权：回测的第一条铁律', content: '不复权的数据在除权除息日会出现"跳空缺口"——股价从 215 元突然变成 210 元，程序误判为暴跌 2.3%。这个 5 元的差价不是真实亏损，是分红造成的除权效应。回测必须用前复权数据，否则所有技术指标（均线、MACD、RSI）在除权日附近全部失真。' },
            { title: '实战图解：宁德时代 4-5 月除权事件', content: '2026 年 4 月 25 日，宁德时代(300750)进行年度分红：每 10 股派 ¥50.00（每股 ¥5.00）。除权除息日为 4 月 28 日。以下用真实级别数据展示前复权如何消除价格跳空。\n\n┌─────────────────────────────────────────────────┐\n│  宁德时代(300750) 前复权操作示例                │\n│  除权除息日: 2026-04-28  每股分红: ¥5.00      │\n├─────────────────────────────────────────────────┤\n│  不复权价格序列（存在跳空缺口）:                 │\n│                                                  │\n│  04/24  ¥217.30  ████████████████▓  ← 正常交易  │\n│  04/25  ¥215.40  ███████████████▓   ← 股权登记日 │\n│  ───── 周末休市 ─────────────────────           │\n│  04/28  ¥210.45  ██████████████     ← 除权!跳空  │\n│                ↑  ↓ -4.95元                      │\n│            (非真实亏损, 是除权效应)               │\n│  04/29  ¥211.80  ██████████████▓    ← 正常交易  │\n│  04/30  ¥213.20  ███████████████▓   ← 正常交易  │\n│  05/05  ¥214.15  ███████████████▓   ← 正常交易  │\n│                                                  │\n├─────────────────────────────────────────────────┤\n│  前复权处理后（消除除权缺口）:                    │\n│                                                  │\n│  复权因子 = 1 - 5.00/215.40 = 0.9768            │\n│                                                  │\n│  04/24  ¥212.26  ████████████████   ← 217.30×f  │\n│  04/25  ¥210.40  ████████████████   ← 215.40×f  │\n│  ───── 周末休市 ─────────────────────           │\n│  04/28  ¥210.45  ████████████████   ← 不变!     │\n│                ↑ 仅差+0.05元!                     │\n│            (自然波动, 不是除权跳空)               │\n│  04/29  ¥211.80  ████████████████▓  ← 不变      │\n│  04/30  ¥213.20  █████████████████▓ ← 不变      │\n│  05/05  ¥214.15  █████████████████▓ ← 不变      │\n│                                                  │\n│  ▓ 关键：前复权后 4/25 收盘价 ¥210.40 与        │\n│    4/28 收盘价 ¥210.45 基本连续，消除了虚假跳空!  │\n└─────────────────────────────────────────────────┘'},
            { title: '前复权计算三步法', content: '第①步：找到除权除息日的登记日收盘价 P（例如 ¥215.40）和每股分红 D（例如 ¥5.00）；第②步：计算复权因子 f = 1 - D/P = 1 - 5.00/215.40 ≈ 0.9768；第③步：将除权日之前的所有价格 × f。前复权后的 4/24 价格 = 217.30 × 0.9768 ≈ 212.26 元。验证：前复权后的登记日收盘价 215.40×0.9768≈210.40 与除权日开盘价 210.45 仅差 0.05 元（正常日内波动），说明复权正确！' },
            { title: '停牌处理——A 股的特色挑战', content: '以宁德时代历史为例，2018 年 6 月曾因重大资产重组停牌 2 个月。这期间没有交易数据，需要处理：1) 前向填充（ffill）用停牌前最后价格填充，适合回测——因为停牌期间你确实持有仓位；2) 删除停牌日，适合统计分析——避免停牌期间的虚假 0 收益影响指标。宁王复牌后连续涨停打开，这种"复牌效应"用量比和换手率可以捕捉。' },
            { title: '数据质量检查清单', content: '每次拿到新数据后的标准操作：① 涨跌幅检查——A股日涨跌幅是否在 ±20%（科创/创业板）或 ±10%（主板）之内？② 成交量检查——是否有天量/地量异常？③ 时间连续性——节假日是否被错误包含？④ 价格合理性——最高价 ≥ 收盘价 ≥ 最低价？⑤ 复权因子——如果数据源声称已复权，用除权日验证。自动化这 5 项检查是职业量化的基本习惯。' }
          ],
          practice: {
            title: '实战：宁德时代前复权数据处理管道',
            desc: '（1）获取宁德时代 4-5 月共 30 个交易日的完整 OHLCV 数据；（2）模拟 4/28 除权事件：将 4/24-25 两天的收盘价按 0.9768 复权因子调整；（3）对比调整前后的价格曲线——画图展示跳空缺口的消除效果；（4）用调整前后的数据分别计算 5 日均线，观察除权日附近均线的断裂/连续差异；（5）写 report() 函数自动检测数据中的除权信号（单日价格变化超过 2% 但不是涨跌停）。'
          },
          resources: [
            { label: 'Pandas 时间序列文档', url: 'https://pandas.pydata.org/docs/user_guide/timeseries.html' },
            { label: '量化数据清洗实践', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html' },
            { label: '宁德时代(300750)行情', url: 'https://finance.sina.com.cn/realstock/company/sz300750/nc.shtml' }
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
      subtitle: '统计套利 · 多因子 · 机器学习 · 特征工程',
      duration: '5-7 周',
      difficulty: '高级',
      color: '#ec4899',
      icon: 'fa-solid fa-brain',
      quote: '从"看图说话"到"数学驱动"——这里开始与上一阶段真正拉开差距',
      overview: '跳出技术指标桎梏，进入量化交易的核心领地。这一阶段的每一门手艺——配对交易、统计套利、多因子建模、机器学习预测——都将在下一阶段（实盘与持续优化）中被反复调用。你在这里建立的数学直觉和模型验证方法论，将直接决定你的实盘策略能否在 6 个月后依然存活。\n\n【与 Stage 6 的内在联系】Stage 5 与 Stage 6 构成了量化交易的"研发→生产"闭环。Stage 5 回答"什么策略可能赚钱"（通过历史数据的统计检验），Stage 6 回答"这个策略现在还能赚钱吗"（通过实盘监控和持续验证）。两者的共用核心逻辑是：信号→阈值→执行→反馈→修正。你在配对交易中学到的"价差偏离阈值设定"与实盘风控的"回撤熔断阈值"本质是同一套统计推断框架；机器学习中的 TimeSeriesSplit 验证与实盘中的 Walk-Forward 滚动更新是同一思想的两种实现。掌握这套"研发到生产"的无缝迁移方法论，是从"会写策略的学习者"跨越到"能上实盘的交易者"的关键一步。',
      modules: [
        {
          id: '5-1',
          title: '配对交易与协整——茅台 vs 五粮液实战',
          duration: '5-6 天',
          points: [
            '配对交易原理：找两只基本面/产业链高度相关的股票，当价差偏离历史均值时做多弱者+做空强者，等待价差回归',
            '协整检验（Engle-Granger 两步法）：先做 OLS 回归得到残差（价差序列），再用 ADF 检验残差是否平稳',
            'Z-Score 信号：Z = (当前价差 - 历史均值) / 历史标准差。|Z| > 2 入场，|Z| < 0.5 离场',
            '半衰期分析：估算价差回归均值的速度（期望值减半的时间），用于确定持仓预期和止损参数',
            '滚动窗口校准：协整关系随时间漂移，需定期重新估计——用最近 252 个交易日滚动',
            '对冲比率计算：OLS 回归 β 系数 = 买 1 股茅台需要卖 β 股五粮液来构建市场中性组合',
            '止损策略：价差持续扩大（超出 3σ）或半衰期内未回归，强制平仓',
            '成本考量：双边手续费 + 融券成本（做空五粮液需支付融券利息），策略收益需覆盖这些成本'
          ],
          knowledgeCards: [
            { title: '为什么选茅台 vs 五粮液', content: '两只股票同属白酒行业，受相同的消费周期、政策环境、经济周期驱动，走势高度相关（相关系数通常 > 0.85）。但它们有独立的基本面因素（管理层决策、区域市场、产品线差异），导致价差短期偏离——这正是配对交易捕捉的机会。' },
            { title: '协整 vs 相关：不一样的概念', content: '相关（correlation）衡量的是"同涨同跌"，协整（cointegration）衡量的是"价差平稳"。两只股票可以高度相关但不协整（价差趋势性扩大），也可以协整但低相关。配对交易依赖的是协整——价差必须均值回归，而非简单的高度相关。' },
            { title: 'Z-Score 门限的统计含义', content: 'Z > 2（价差偏离均值超 2 个标准差）≈ 95% 置信区间的异常值。假设价差服从正态分布，只有约 5% 的机会偏离这么远——所以这大概率是"暂时异常"而非"永久趋势转变"。但正态假设本身就是策略的最大弱点（尾部风险）。' },
            { title: '市场中性 = 免疫大盘', content: '配对交易做多一只+做空一只，净敞口接近零。大盘涨 10%，茅台涨 12%，五粮液涨 11%——多空相抵后你的盈亏取决于价差变化（茅台多涨的那 1%），而不是大盘方向的判断。这是专业对冲基金最爱的策略特性。' }
          ],
          practice: {
            title: '实战案例一：茅台 vs 五粮液完整配对交易系统（含代码框架）',
            desc: '完整实现步骤：\n\n(1) 数据准备：拉取茅台(600519)和五粮液(000858)过去 3 年日线前复权数据，对齐日期；\n\n(2) 协整检验：\n```python\nimport statsmodels.api as sm\n# OLS回归: 茅台 = α + β×五粮液 + ε\nY = df_mt["close"]; X = sm.add_constant(df_wly["close"])\nmodel = sm.OLS(Y, X).fit()\nspread = model.resid  # 残差 = 价差序列\n# ADF检验残差平稳性\nfrom statsmodels.tsa.stattools import adfuller\nadf_result = adfuller(spread)\nprint(f"ADF p-value: {adf_result[1]:.4f}")  # p<0.05 → 协整成立\nhedge_ratio = model.params["close"]  # 对冲比率\n```\n\n(3) 信号生成：计算滚动 60 日价差均值 μ 和标准差 σ，Z = (spread - μ) / σ；\n\n(4) 交易规则：Z > 2 做空价差（卖茅台买五粮液），Z < -2 做多价差（买茅台卖五粮液），|Z| < 0.5 平仓；\n\n(5) 回测评估：对比纯买入持有 vs 配对交易的夏普比率和最大回撤，验证市场中性效果。'
          },
          resources: [
            { label: '配对交易详解', url: 'https://www.investopedia.com/terms/p/pairstrade.asp' },
            { label: 'statsmodels ADF 检验', url: 'https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.adfuller.html' }
          ]
        },
        {
          id: '5-2',
          title: '统计套利——从固定窗口到卡尔曼滤波',
          duration: '5-6 天',
          points: [
            '固定窗口的缺陷：滑动平均对市场突变反应迟钝，且窗口长度选择主观',
            '卡尔曼滤波原理：状态空间模型——观测方程（我们看到的价格）+ 状态方程（真实的均值如何变化）',
            '卡尔曼滤波四步：预测→观测→更新→循环。每来一个新数据点，动态更新对价差均值的估计',
            'pykalman 库实操：初始化状态均值/协方差 → filter() 逐期更新 → 获取动态估计的价差均值和方差',
            '信号对比：固定窗口的信号延迟 vs 卡尔曼滤波的及时响应，尤其关注市场转折点附近',
            '多品种扩展：从 1 对 → N 对配对的组合，用 PCA 降维或散度打分筛选最优交易对',
            '统计套利的风险：协整关系可能断崖式消失（公司基本面巨变、行业政策冲击），需设硬止损',
            '绩效归因：区分收益来自价差回归（alpha）还是市场波动（beta），确保策略在各类市场环境中持续有效'
          ],
          knowledgeCards: [
            { title: '卡尔曼滤波的直觉理解', content: '想象你在测量一条河流的水位。每次测量有误差（观测噪声），水位本身也在缓缓变化（状态变化）。卡尔曼滤波做的事：根据"上次的水位 + 变化趋势"预测这次水位，再根据"实际测量值"修正预测，最后输出一个比任何单次测量都更准确的水位估计。用在配对交易中：水位 = 价差均值。' },
            { title: '固定窗口 vs 卡尔曼：实战差异', content: '假设茅台•五粮液价差在 2020 年 3 月因疫情暴跌急剧扩大。固定窗口（60 日均值）需要约 30 天才能将这一跳变"消化"为新常态，期间 Z-Score 始终不触发信号。卡尔曼滤波在 3-5 天内就快速更新均值估计，能更早在合理位置生成交易信号。' },
            { title: 'N 对配对策略的规模优势', content: '只做 1 对配对，可能等 2 个月才有一次交易信号。做 20 对配对（全白酒行业、全银行股、全光伏板块），每天可能都有 2-3 个信号。规模分散不仅提升资金利用率，也通过品种分散降低单对协整破裂的风险。' },
            { title: '协整破裂——配对交易的头号杀手', content: '2012 年白酒塑化剂事件中茅台暴跌，五粮液也跌但跌幅不同——价差迅速偏离且未回归。做配对交易的人大亏。这不是策略问题，是基本面发生了结构性改变。识别"暂时偏离"vs"永久偏离"是统计套利最难的部分。' }
          ],
          practice: {
            title: '实战案例二：卡尔曼滤波动态配对 vs 固定窗口（含完整对比代码）',
            desc: '实现双系统对比：\n\n(1) 固定窗口系统：60 日滚动均值和标准差 → 计算 Z-Score → 信号生成 → 回测；\n\n(2) 卡尔曼滤波系统：\n```python\nfrom pykalman import KalmanFilter\nkf = KalmanFilter(\n    transition_matrices=[1],      # 状态方程: mean_t = mean_{t-1}\n    observation_matrices=[1],     # 观测方程: spread_t = mean_t + noise\n    initial_state_mean=0,\n    initial_state_covariance=1,\n    observation_covariance=1,     # 观测噪声方差\n    transition_covariance=0.01    # 状态变化方差\n)\n# 逐期滤波\nstate_means, state_covs = kf.filter(spread.values)\ndynamic_mean = state_means.flatten()  # 卡尔曼动态均值\ndynamic_std = np.sqrt(state_covs.flatten())  # 卡尔曼动态标准差\nz_kalman = (spread - dynamic_mean) / dynamic_std  # 卡尔曼 Z-Score\n```\n\n(3) 回测对比：同一时间段，同一入场阈值（|Z|>2），对比两种方法的① 交易次数 ② 胜率 ③ 夏普比率 ④ 最大回撤 ⑤ 平均持仓天数；\n\n(4) 关键发现：卡尔曼滤波在 2020 年 3 月、2024 年 9 月等市场急变期中，信号响应速度比固定窗口快 3-5 倍。'
          },
          resources: [
            { label: 'pykalman 文档', url: 'https://pykalman.github.io/' },
            { label: '卡尔曼滤波原理', url: 'https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2' }
          ]
        },
        {
          id: '5-3',
          title: '多因子模型——从单因子到组合',
          duration: '5-6 天',
          points: [
            '因子分类：估值因子（PE/PB）、动量因子（过去 N 月收益）、质量因子（ROE/毛利率）、波动率因子（过去 N 日波动率）',
            '因子标准化：不同因子量纲不同（PE 在 0-100，ROE 在 -20%-50%），需做截面标准化（Z-Score 或 Rank 分位数）',
            'IC 计算：每月月末计算因子值 → 与下月收益率的 Spearman 秩相关系数 → |IC|>0.03 有效，IC 方向要稳定',
            'IR 分析：IR = mean(IC)/std(IC)，衡量因子表现的稳定性。IR>0.5 合格，IR>1.0 优秀',
            '因子合成：等权法（最简单）、IC 加权（按过去 IC 方向/大小加权）、最大化 IC_IR（凸优化）',
            '分层回测：按因子值将股票等分 5 组（Q1-Q5），观察各组年化收益是否单调——最底层收益最高、最顶层最低',
            '因子相关性矩阵：因子间高相关意味着冗余→降维或剔除。用热力图可视化',
            '行业中性化：对因子值做行业哑变量回归取残差，消除行业差异对因子排序的影响'
          ],
          knowledgeCards: [
            { title: 'IC > 0.03 是硬门槛', content: 'IC 的绝对值 < 0.02 的因子，即使回测曲线好看，大概率是噪音拟合而非真实预测能力。IC 必须稳定为正或稳定为负——如果 IC 正负交替，因子方向不明确，不可用。' },
            { title: '分层回测 = 因子体检报告', content: '只给一个 IC 数值不够直观。分层回测告诉你：Q1（因子值最高组）年化收益 25%，Q5（最低组）年化 5%——收益单调递减说明因子有效。如果 Q3 收益反而最高，因子是非线性的，需要特殊处理。' },
            { title: '因子拥挤——当所有人都用 PE', content: '低估值因子在 2019-2021 年大放异彩，大量量化基金涌入导致低 PE 股票溢价买入，因子收益在 2022 年开始衰减。因子会因"拥挤"而失效，生命周期通常 1-3 年。这直接链接到 Stage 6 的"策略保质期"概念。' },
            { title: '从因子到策略的三步', content: '(Step 1) 单因子测试：每个因子独立验证 IC/IR；(Step 2) 因子合成：将验证通过的因子加权合并为综合打分；(Step 3) 策略构建：每月末买入综合得分 Top 20% 的股票，卖空或剔除 Bottom 20%。这套三步法在 Stage 6 实盘中需要每月自动执行。' }
          ],
          practice: {
            title: '实战案例三：5 因子选股模型 + 分层回测完整报告',
            desc: '实现端到端因子模型：\n\n(1) 因子计算（沪深 300 成分股，2019-2026）：PE（市盈率倒数）、Momentum（过去 12 月收益）、Volatility（过去 60 日波动率取负）、ROE（净资产收益率）、Turnover（换手率变化取负）；\n\n(2) 因子预处理：截面去极值（MAD 法）、标准化（Z-Score）、行业中性化；\n\n(3) 等权合成 → 按得分排序 → Top 20% 买入、Bottom 20% 卖空；\n\n(4) 月度调仓，扣双边 0.15% 手续费；\n\n(5) 输出：各因子 IC 时序图、分层回测平均收益柱状图、策略净值曲线 vs 沪深 300 基准。'
          },
          resources: [
            { label: 'Alphalens 因子分析', url: 'https://github.com/stefan-jansen/alphalens-reloaded' },
            { label: '多因子模型入门', url: 'https://www.investopedia.com/terms/m/multifactor-model.asp' }
          ]
        },
        {
          id: '5-4',
          title: '机器学习预测——LightGBM 日频涨跌模型',
          duration: '6-7 天',
          points: [
            'ML 在量化中的定位：不是替代策略，而是辅助信号生成——将 ML 预测结果作为一个"增强型指标"融入现有策略框架',
            'LightGBM 优势：直方图算法（比 XGBoost 快 3-10 倍）、原生支持类别特征、内置早停和交叉验证',
            '特征构建：过去 5/10/20/60 日收益率、波动率、换手率变化、MACD/RSI 指标值、相对大盘超额收益',
            '标签定义：不是"明日涨还是跌"（太噪声），而是"未来 5 日是否涨幅超 2%"（更有预测价值）',
            'TimeSeriesSplit：按时间顺序划分训练/验证集，严禁 shuffle。如 2019-2022 训练 → 2023 验证 → 2024 测试',
            '类别不平衡处理：正样本（涨>2%）通常少于负样本 → 用 SMOTE 过采样或 class_weight="balanced"',
            '过拟合防范三件套：① early_stopping_rounds=50 ② max_depth≤5 ③ min_child_samples≥100',
            '模型可解释性：SHAP 值分析——哪些特征对预测贡献最大？是否符合金融直觉？'
          ],
          knowledgeCards: [
            { title: 'ML 的预期收益不是魔法', content: '用 LightGBM 预测 A 股次日涨跌，最佳准确率通常在 52-55%。不要期望太高——ML 的价值在于持续捕捉微弱的统计优势，而非完美预测。55% 的准确率配合盈亏比 > 1.5，长期正期望值。' },
            { title: 'TimeSeriesSplit：金融 ML 的第一行规', content: '随机 K-Fold 交叉验证在金融数据上会产生"未来信息泄露"——训练集包含 2023 年数据、验证集用 2022 年数据，等于让模型"回溯"到过去做预测。这是最常见的 ML 量化入门错误。TimeSeriesSplit 强制训练集始终在验证集之前。' },
            { title: '特征 vs 标签的时间对齐', content: '如果在 t 日计算了一个包含"今日成交量/5 日均量"的特征，用它预测 t 日的涨跌 —— 这是数据泄露！因为 t 日还未结束。正确做法：所有特征用 t-1 日及之前的数据，标签用 t 到 t+N 日的收益。' },
            { title: 'SHAP = 模型不是黑盒子', content: 'SHAP (SHapley Additive exPlanations) 告诉你每个特征对单个预测的贡献。例如："预测茅台明日涨 2.5%，其中过去 5 日动量贡献了 +1.2%，低 RSI 贡献了 +0.8%"。这对策略逻辑验证和复盘非常有价值。' }
          ],
          practice: {
            title: '实战案例四：LightGBM 完整预测+回测管道（含核心代码）',
            desc: '端到端 ML 策略开发：\n\n(1) 特征工程——构建 50+ 特征：\n```python\n# 价格特征\nfor period in [5,10,20,60]:\n    df[f"return_{period}d"] = df.groupby("code")["close"].pct_change(period)\n    df[f"volatility_{period}d"] = df.groupby("code")["return_1d"].rolling(period).std()\n# 技术指标特征\n    df[f"rsi_{period}d"] = ta.RSI(df["close"], period)\n# 量价特征\n    df[f"volume_ratio_{period}d"] = df["volume"] / df.groupby("code")["volume"].rolling(period).mean()\n```\n\n(2) 标签构建：未来 5 日涨幅是否超 2%（二分类）；\n\n(3) TimeSeriesSplit 训练验证、LightGBM 调参（bayesian search 或网格搜索）；\n\n(4) 回测：按模型预测概率 Top 30% 买入、Bottom 30% 卖空，月度调仓；\n\n(5) 对比基准：双均线策略、纯动量策略、沪深 300 指数——ML 策略应至少跑赢其中两个。'
          },
          resources: [
            { label: 'LightGBM 官方文档', url: 'https://lightgbm.readthedocs.io/' },
            { label: 'ML for Trading 项目', url: 'https://github.com/stefan-jansen/machine-learning-for-trading' }
          ]
        },
        {
          id: '5-5',
          title: '特征工程与因子挖掘',
          duration: '5-6 天',
          points: [
            '价格衍生：不同周期的收益率（1d/5d/20d）、波动率（日频滚动标准差）、振幅（日内高低价差/开盘价）',
            '量价关系：量比（当日成交量/5 日均量）、换手率变化、价量相关性（过去 20 日收益与成交量的相关系数）',
            '时间特征：星期效应（周一 vs 周五的收益差异）、月初效应（每月前 5 日的异常收益）、节假日前后效应',
            '截面特征：相对行业均值/中位数的偏离程度、市值分位数、成交额排名',
            '特征筛选三刀流：① 相关性矩阵去冗余（相关系数 > 0.8 的保留 IC 高的那个）② IC 显著性检验（|IC|<0.02 丢弃）③ 特征重要性 + SHAP 双重验证',
            '因子挖掘的科研流程：提出假设 → 回测验证 → 样本外测试 → 解释原因 → 纳入组合（与实盘跟踪闭环）'
          ],
          knowledgeCards: [
            { title: '特征 > 模型——80/20 法则', content: '量化交易中，花在特征工程上的时间应占 80%，模型训练只占 20%。10 个高质量特征 + 简单逻辑回归，往往优于 100 个噪音特征 + 深度学习。好的特征本身就封装了对市场规律的深刻理解。' },
            { title: '数据泄露——最隐蔽的 bug', content: '用"当天最高价/最低价"计算的一阶特征去预测当天涨跌 = 数据泄露（因为收盘后才能有准确的最高/最低）。用"仅含 t-1 日之前数据计算的特征"去预测"t 日到 t+N 日的收益"才是正确的。每写一个特征，都问自己：这个特征在交易的时刻（买入决策时）能获取到吗？' },
            { title: '从 Stage 5 到 Stage 6——特征的时效性', content: 'Stage 5 开发的特征因子，到了 Stage 6 实盘阶段需要持续跟踪——IC 衰减了吗？因子拥挤了吗？市场结构改变了吗？Stage 5 建立的特征验证框架，将被 Stage 6 的"特征监控仪表盘"直接继承。研发与生产用的是同一套评估标准。' },
            { title: '因子组合 > 单因子', content: '单因子 IC 0.03，IR 0.5，勉强可用。但 5 个 IC 都在 0.03 的分量级且彼此相关系数 < 0.3 的因子，等权组合后 IC 可达到 0.05-0.08。不是因子质量的简单叠加，是信息源的多样化——不同因子捕捉不同维度的市场信息。' }
          ],
          practice: {
            title: '实战案例五：自动化因子挖掘管道 + 特征选择',
            desc: '构建因子挖掘系统：\n\n(1) 特征生成器：定义 20+ 个特征函数（returns_Nd, volatility_Nd, volume_ratio, price_position, gap……），自动对不同参数组合生成 200+ 候选因子；\n\n(2) 因子评估器：计算每个因子的 IC 均值（绝对值）、IC_IR、分层回测年化收益差（Q5-Q1）；\n\n(3) 因子筛选器：IC 绝对值 > 0.03 且 IC_IR > 0.3 且分层单调性通过 → 进入候选池；\n\n(4) 因子合成器：候选池因子做相关性分析，剔除冗余（|corr|>0.7 的保留评估分数高的），等权或 IC 加权合成最终因子；\n\n(5) 输出报告：最终因子的 IC 时序图、分层回测柱状图、因子相关性矩阵热力图。'
          },
          resources: [
            { label: '特征工程指南', url: 'https://www.kaggle.com/learn/feature-engineering' },
            { label: 'WorldQuant 101 Alphas', url: 'https://arxiv.org/abs/1601.00991' }
          ]
        }
      ],
      milestone: '完成配对交易和 ML 预测两个完整策略的研发+回测，因子 IC_IR > 0.5，策略夏普 > 1.2'
    },

    {
      id: 'stage-6',
      number: '06',
      title: '实盘与持续优化',
      subtitle: '真金白银 · 风控体系 · 策略迭代 · 长治久安',
      duration: '长期',
      difficulty: '终极',
      color: '#ef4444',
      icon: 'fa-solid fa-rocket',
      quote: 'Stage 5 让你造出了利剑，Stage 6 教你如何佩剑行走江湖而不伤到自己',
      overview: 'Stage 5 回答了"策略在历史上能否赚钱"——但历史不是未来。Stage 6 的精髓在于：建立一套实时监控、风控拦截、策略迭代的生存系统，确保你在市场中活足够久，久到概率的天平向你倾斜。\n\n【Stage 5→6 方法论迁移桥梁】两者的核心设计思想高度统一：\n① "阈值触发"思想——Stage 5 中 Z-Score>2 触发配对交易入场，Stage 6 中回撤>5% 触发熔断停牌，底层都是"统计异常 → 行动"的模式。你将 Stage 5 学到的阈值校准方法（基于历史模拟、考虑误报率/漏报率的权衡）直接迁移到风控参数设定上。\n② "滚动验证"思想——Stage 5 中 TimeSeriesSplit 验证 ML 模型，Stage 6 中 Walk-Forward 滚动更新实盘参数。同一逻辑的两种实现：前者在离线数据上，后者在实时数据流上。\n③ "反馈闭环"思想——Stage 5 中特征因子的 IC 跟踪，到了 Stage 6 演变为策略盈亏的归因分析。因子衰减 → 策略退化 → 触发重新研发——这是量化交易的生命周期管理。\n④ "系统化思维"——Stage 5 中你将策略封装为 class，Stage 6 中你将整个交易系统模块化（数据模块、策略模块、风控模块、执行模块、日志模块），面向对象的设计思想从策略级扩展到系统级。',
      modules: [
        {
          id: '6-1',
          title: '实盘上线——从模拟到真钱的最后一公里',
          duration: '2-3 周',
          points: [
            '模拟盘验证清单：连续运行 ≥ 1 个月、日均交易次数符合预期、无程序异常退出',
            '回测-模拟盘差距分析：模拟盘收益/回撤与回测的偏差 < 20%。偏差大→检查滑点模型、手续费、延迟',
            '资金准备：最低实盘资金 = 单笔最大亏损 × 20。如单笔亏 500 元，至少准备 1 万元（保证 20 次连续亏损%不爆仓）',
            '心理准备：连续亏损是常态——趋势策略的连续亏损可达 8-12 笔。准备好了吗？',
            '应急预案：API 断连时的默认行为（保持持仓 vs 一键平仓）、网络中断的备用连接方案',
            '上线策略：先用 10% 计划资金运行 1 周 → 确认无异常 → 逐步加仓到位',
            '代码部署：从 Jupyter Notebook 迁移到独立 Python 脚本 → 部署到云服务器（阿里云/腾讯云轻量服务器）→ crontab 定时运行',
            '双重确认：实盘下单前加一层"人工确认"（微信推送交易信号，手动点击确认）——新手强烈建议'
          ],
          knowledgeCards: [
            { title: '回测 vs 模拟盘 vs 实盘：三重折扣', content: '回测收益 100% → 模拟盘 70%（滑点+延迟）→ 实盘 50%（心理干扰+流动性冲击）。这 50% 的折扣不是策略不行，是现实世界的摩擦。提前做好心理预期，实盘不会让你失望。' },
            { title: '小资金：这不是建议，是铁律', content: '即使你觉得自己策略回测完美，第一笔实盘资金也应该小到"全亏完也不会影响生活"。量化交易有一个残酷的规律：前 3 个实盘策略 90% 会失败。用小资金把坑踩完，比一把梭哈后爬不起来明智得多。' },
            { title: '连续亏损的止损线在哪', content: '策略开发时你关注的是夏普比率和年化收益。上实盘后你会更关注"连续亏损次数"和"最大回撤恢复天数"。如果策略让你连续失眠 3 天，即使它历史上夏普 2.0，也不适合你。适合的策略 = 能睡好觉的策略。' },
            { title: '从 Stage 5 迁移——你的 ML 模型怎么上实盘', content: 'Stage 5 训练的 LightGBM 模型保存为 .pkl 文件 → Stage 6 的实盘脚本每天 15:30 加载模型 → 计算今日特征 → 预测明日信号 → 15:55 前下单。模型的"有效期"大约 3 个月——超过后需要重新训练，这又回到了 Stage 5 的研发流程。研发与生产是一个循环。' }
          ],
          practice: {
            title: '实战案例一：实盘上线 SOP 自动化检查脚本',
            desc: '自动化上线检查——写一个 pre_flight_check.py 脚本：\n\n(1) 系统检查：磁盘空间 > 10GB、内存使用 < 80%、网络连通（ping 券商 API 服务器）；\n(2) 数据检查：今日行情数据已拉取、数据完整性校验（无缺失日、无异常值）、复权正确性验证；\n(3) 策略检查：策略参数加载正确、信号生成逻辑无异常（测试最近 10 天数据回放）；\n(4) 风控检查：风控参数加载正确、熔断状态未触发、持仓限制不超标；\n(5) 资金检查：账户余额充足、单笔保证金/手续费计算正确；\n(6) 全部通过 → 打印"READY TO LAUNCH"并记录日志；任一失败 → 打印错误详情并发送告警。'
          },
          resources: [
            { label: '量化交易心理准备', url: 'https://www.investopedia.com/articles/trading/09/psychology-of-trading.asp' },
            { label: 'VnPy 实盘部署指南', url: 'https://www.vnpy.com/docs/cn/live_trading.html' }
          ]
        },
        {
          id: '6-2',
          title: '风控体系——量化交易的免疫系统',
          duration: '2-3 周',
          points: [
            '单笔仓位控制：每笔交易亏损上限 = 总资金 × 1-2%。如 10 万总资金，单笔最多亏 1000-2000',
            '日内熔断：当日累计亏损 > 总资金 5% → 强制停止所有交易并平仓，当日不再开新仓',
            '周熔断 + 月熔断：周累计亏损 > 10% 或月累计 > 20%，暂停全周/全月交易——给自己冷静期',
            '流动性风控：标的日均成交额 > 1000 万（确保大单不滑点严重），涨停跌停附近不下单（流动性枯竭）',
            '集中度控制：单品种持仓 ≤ 20%、单行业持仓 ≤ 40%，避免"黑天鹅"单点爆破',
            '黑名单机制：某品种/某策略连续亏损 > 3 次 → 自动加入黑名单，停止该品种/策略 5 个交易日'
          ],
          knowledgeCards: [
            { title: '风控编码的"不可绕过"原则', content: '风控规则不能只是"建议"或"提醒"——必须是 if risk_check_failed: return REJECT 这样写死在代码里的硬逻辑。任何策略信号要执行下单，必须先通过风控网关的检查。绕不过去，这是设计哲学。' },
            { title: '2% 规则的强大数学', content: '单笔亏损 2%，连续亏 20 笔（极端情况），本金还剩 (0.98)^20 ≈ 66%。亏了三分之一但还活着，还有机会翻盘。单笔亏损 10%，连续亏 10 笔就只剩 35%——大多数人在这之前就崩溃退出了。风控规则的存在意义不是"防止亏钱"，是"确保你撑到策略概率兑现的那一天"。' },
            { title: 'Stage 5→6 迁移：阈值设定的统计方法', content: 'Stage 5 中你为配对交易设定 Z-Score 阈值时，学会了用历史数据模拟不同阈值下的"信号频率 vs 胜率"曲线。同样的方法用于设定风控阈值：对历史回测中的亏损序列做 Bootstrap 重采样，找出"正常亏损"和"异常亏损"的分界点，作为熔断阈值。' },
            { title: '真实悲剧案例', content: '2020 年 4 月 WTI 原油期货暴跌至负值（-$37/桶）。大量做多原油的量化策略因为没有"负价格"风控规则，在价格归零后仍持续"逢低买入"，最终爆仓。风控不能只基于历史经验——要对极端情况做压力测试。"市场可以比你保持不理性的时间更长"——凯恩斯。' }
          ],
          practice: {
            title: '实战案例二：完整风控引擎——RiskManager 类（含完整架构代码）',
            desc: '构建生产级风控模块：\n\n```python\nclass RiskManager:\n    def __init__(self, total_capital):\n        self.capital = total_capital\n        self.daily_pnl = 0.0\n        self.weekly_pnl = 0.0\n        self.consecutive_losses = {}  # 品种→连续亏损次数\n        self.blacklist = set()        # 黑名单品种\n        self.is_paused = False        # 熔断状态\n\n    def check_order(self, symbol, price, volume, direction):\n        """下单前风控检查——任何策略下单必须调用此方法"""\n        # 1. 熔断检查\n        if self.is_paused:\n            return (False, "系统已熔断，暂停交易")\n        # 2. 单笔亏损上限检查\n        max_loss = self.capital * 0.02  # 2% 规则\n        stop_price = price * 0.95 if direction == "BUY" else price * 1.05\n        potential_loss = abs(price - stop_price) * volume\n        if potential_loss > max_loss:\n            return (False, f"单笔潜在亏损{potential_loss:.0f}超过上限{max_loss:.0f}")\n        # 3. 流动性检查\n        if "avg_volume" in self.market_data:\n            if volume > self.market_data["avg_volume"] * 0.01:\n                return (False, "成交量超过日均1%, 流动性不足")\n        # 4. 黑名单检查\n        if symbol in self.blacklist:\n            return (False, f"{symbol}在黑名单中")\n        # 5. 集中度检查\n        position_value = self.get_position(symbol)\n        if position_value / self.capital > 0.2:\n            return (False, f"{symbol}持仓集中度超20%")\n        return (True, "风控通过")\n\n    def update_pnl(self, pnl):\n        """交易结束后更新盈亏, 触发熔断检查"""\n        self.daily_pnl += pnl\n        if self.daily_pnl < -self.capital * 0.05:  # 日内-5%熔断\n            self.is_paused = True\n            self.send_alert("日内亏损超5%，触发熔断！")\n```\n\n实现要点：风控方法必须 return (bool, str) 元组——True=通过+理由, False=拒绝+原因。所有策略信号统一经过 RiskManager.check_order() 网关。'
          },
          resources: [
            { label: '风险管理基础', url: 'https://www.investopedia.com/terms/r/riskmanagement.asp' },
            { label: 'VaR 风险价值模型', url: 'https://www.investopedia.com/terms/v/var.asp' }
          ]
        },
        {
          id: '6-3',
          title: '策略监控与衰退检测',
          duration: '3-4 周',
          points: [
            '实时监控仪表盘：当前持仓/盈亏/风险敞口/今日交易次数/累计 PnL——一目了然',
            '策略衰退检测：滚动 60 日夏普比率 < 0 → 策略可能失效；滚动 20 日胜率 < 历史胜率 - 15% → 进入观察期',
            '因子/特征监控：每一个 Stage 5 开发的因子，实盘中持续跟踪 IC 变化。IC 连续 3 个月降至 0.01 以下 → 因子失效，重新研发',
            '异常检测：交易频率突变（突然不开单或频繁开单）、单笔盈亏分布改变（用 Kolmogorov-Smirnov 检验对比分布）',
            'Walk-Forward 在线更新：每 3 个月用最新数据重新训练 ML 模型、重新校准策略参数——这是 Stage 5 TimeSeriesSplit 思想的生产化实现',
            '日志与复盘：每笔交易的触发条件、执行价格、滑点、持仓时长全部记录——每周做一次归因分析'
          ],
          knowledgeCards: [
            { title: '策略的保质期——真实现象', content: '量化策略平均有效期 6-18 个月。因子拥挤、市场结构改变、监管政策变化都可能导致策略失效。关键不是"找到一个永不过期的策略"，而是"建立一套及时发现策略失效并快速迭代的系统"。这正是 Stage 5→6 的完整闭环。' },
            { title: '从 Stage 5 到 Stage 6 的 Walk-Forward 迁移', content: 'Stage 5 中你在离线数据上做 Walk-Forward（用前 2 年训练、后 6 月验证、滚动推进）。Stage 6 中你把这个流程搬到线上：每过 3 个月，自动用最新 2 年数据重新训练 ML 模型、更新因子权重、校准策略参数。同一套代码，不同的执行环境——离线 vs 在线。' },
            { title: '衰退检测的统计方法', content: 'Kolgorogorov-Smirnov 检验：比较"过去 20 个交易日的盈亏分布"与"策略历史盈亏分布"是否来自同一分布。p-value < 0.01 → 策略行为发生了显著变化 → 触发调查。这是 Stage 5 中学到的统计检验方法在 Stage 6 中的直接应用。' },
            { title: '死策略 vs 活策略', content: '"死策略"在净值回撤 20% 时才发现问题，为时已晚。"活策略"在夏普比率开始趋势性下行、单笔胜率偏离历史均值时就发出预警。活策略的秘诀在于——它知道自己"可能正在变老"。' }
          ],
          practice: {
            title: '实战案例三：策略健康度监控仪表盘（含衰退检测算法）',
            desc: '构建策略监控系统：\n\n(1) 核心指标实时计算：滚动 60 日夏普比率、滚动 20 日胜率、滚动 20 日盈亏比、滚动 20 日最大回撤；\n\n(2) 衰退检测规则：\n```python\ndef detect_decay(recent_sharpe: float, historical_sharpe: float,\n                 recent_winrate: float, historical_winrate: float) -> str:\n    """策略衰退检测"""\n    warnings = []\n    # 夏普比率持续下降\n    if recent_sharpe < 0:\n        warnings.append("CRITICAL: 近期夏普为负")\n    elif recent_sharpe < historical_sharpe * 0.5:\n        warnings.append("WARNING: 夏普比率下降超 50%")\n    # 胜率偏离\n    if recent_winrate < historical_winrate - 0.10:\n        warnings.append("WARNING: 胜率较历史下降超 10%")\n    # 连续亏损次数\n    if consecutive_losses > historical_consecutive_losses_max * 1.5:\n        warnings.append("WARNING: 连续亏损次数创历史新高")\n\n    if "CRITICAL" in str(warnings):\n        return "STOP_TRADING"\n    elif warnings:\n        return "OBSERVE"\n    return "NORMAL"\n```\n\n(3) 告警推送：微信/钉钉/邮件推送异常；\n\n(4) 每日自动生成策略健康度报告 (HTML/PDF)，包含所有监控指标图表。'
          },
          resources: [
            { label: '策略绩效评估框架', url: 'https://www.investopedia.com/articles/trading/09/performance-metrics.asp' },
            { label: 'pyfolio 风险分析', url: 'https://github.com/stefan-jansen/pyfolio-reloaded' }
          ]
        },
        {
          id: '6-4',
          title: '持续迭代——量化交易的生命周期管理',
          duration: '长期',
          points: [
            '策略日志回顾：每周 30 分钟复盘——本周哪些交易按计划执行？哪些是意外？意外原因是市场？参数？bug？',
            'A/B 测试框架：新旧策略并行运行（不使用真钱，用模拟账户），对比 1 个月后的表现决定是否替换',
            '参数滚动校准：每季度用最新 2 年数据重新做参数优化，保留 Walk-Forward 验证结果',
            '因子库维护：Stage 5 开发的因子池每月更新 IC 数据，IC 持续低迷的因子标记为"退役"',
            '知识更新：跟踪 arXiv q-fin 板块、SSRN、Quantopian 社区（已关闭但有大量存档资源）的论文',
            '系统升级路线：从单机 → Docker 容器化 → 分布式多品种并行 → GPU 加速深度学习推理',
            '年度策略回顾：每个策略的年报——年度损益、最佳/最差交易、交易成本分析、策略改进计划'
          ],
          knowledgeCards: [
            { title: '持续迭代不是可选项——是必选项', content: '不迭代的策略平均 12 个月后收益降至 0 以下。市场的进化速度在加快——高频交易公司用 FPGA 硬件加速、大模型正在改变基本面分析的范式。你停止学习的那一天，就是策略开始死亡的那一天。' },
            { title: 'A/B 测试——量化界的金标准', content: '互联网公司的 AB 测试方法论完美适用于量化策略迭代：50% 资金跑旧策略、50% 资金跑新策略（或先模拟并行 1 个月）→ 统计检验确认新策略显著优于旧策略 → 全量切换。避免"拍脑袋"式的策略替换——每次替换都必须有数据支撑。' },
            { title: 'Stage 5→6 的完整闭环总结', content: 'Stage 5（研发）：特征发现 → 因子验证 → 模型训练 → 样本外测试。Stage 6（生产）：策略部署 → 实盘运行 → 绩效监控 → 衰退检测 → 触发重新研发（回到 Stage 5）。这不是一条直线，是一个循环。策略的生命周期 = 研发→部署→监控→衰退→再研发的无限循环。你建立的不是"一个策略"，是"一个策略工厂"。' },
            { title: '社区是你最强的外脑', content: 'VnPy 论坛每天有人分享实盘踩坑经验、GitHub Discussions 上有全球量化研究者的讨论、知乎量化话题有基金经理的行业洞察。闭门造车的策略容易走偏，保持与社区交流是策略长寿的秘诀之一。' }
          ],
          practice: {
            title: '实战案例四：策略迭代 Pipeline——A/B 测试 + 自动部署框架',
            desc: '构建完整的策略迭代系统：\n\n(1) 版本管理：每个策略用 Semantic Versioning (v1.0, v1.1, v2.0)，Git tag + 配置文件记录参数变更历史；\n\n(2) A/B 测试引擎：\n```python\nclass ABTestEngine:\n    def __init__(self, strategy_a, strategy_b):\n        self.a = strategy_a  # 当前线上策略\n        self.b = strategy_b  # 候选新策略\n        self.results = {\'a\': [], \'b\': []}\n\n    def run_parallel(self, market_data, days=20):\n        """两个策略在同一天的数据上并行运行"""\n        for day in range(days):\n            signal_a = self.a.generate_signal(market_data[:day])\n            signal_b = self.b.generate_signal(market_data[:day])\n            pnl_a = self.simulate_execution(signal_a)\n            pnl_b = self.simulate_execution(signal_b)\n            self.results[\'a\'].append(pnl_a)\n            self.results[\'b\'].append(pnl_b)\n        return self.compare()\n\n    def compare(self):\n        """统计检验：B 是否显著优于 A"""\n        from scipy import stats\n        t_stat, p_value = stats.ttest_rel(self.results[\'b\'], self.results[\'a\'])\n        avg_a, avg_b = np.mean(self.results[\'a\']), np.mean(self.results[\'b\'])\n        return {\n            \"strategy_a_avg_pnl\": avg_a,\n            \"strategy_b_avg_pnl\": avg_b,\n            \"improvement\": (avg_b - avg_a) / abs(avg_a),\n            \"p_value\": p_value,\n            \"decision\": \"DEPLOY_B\" if p_value < 0.05 and avg_b > avg_a else \"KEEP_A\"\n        }\n```\n\n(3) 灰度发布：p<0.05 且 B 优于 A → 先用 20% 资金测试 1 周 → 确认无误后全量切换；\n\n(4) 策略退役：策略连续 2 个月夏普<0 或 A/B 测试中被连续 3 个候选策略击败 → 归档退役。'
          },
          resources: [
            { label: 'nautilus_trader 架构参考', url: 'https://github.com/nautechsystems/nautilus_trader' },
            { label: 'jesse AI 交易框架', url: 'https://github.com/jesse-ai/jesse' },
            { label: 'awesome-quant 资源大全', url: 'https://github.com/wilsonfreitas/awesome-quant' }
          ]
        }
      ],
      milestone: '实盘上线稳定运行 3 个月，建立衰退检测+自动迭代的完整生命周期管理体系'
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
