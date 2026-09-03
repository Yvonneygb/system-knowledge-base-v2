---
---

<KbSectionTabs />
<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">工程折扣政策 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★新建工程折扣政策★ → ⚖审批通过？ → 政策生效(valid=2: 通用直接生效/专项CRM同步) / 拒绝 → 失效申请 → 结束</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="105" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="154" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM系统</text>
      <rect x="213" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="262" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">EBS系统</text>
      <rect x="321" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="370" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">客户组织</text>
      <rect x="429" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="478" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">销售区域</text>
      <rect x="537" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="586" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">省份</text>
      <rect x="645" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="694" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">价目表</text>
      <line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="135" y="210" width="200" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="235" y="234" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★新建工程折扣政策★</text>
      <text x="235" y="252" text-anchor="middle" fill="#DCFCE7" font-size="10">填维度/产品行/坎级·保存提交</text>
      <line x1="235" y1="264" x2="235" y2="280" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="235,280 305,320 235,360 165,320" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="324" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 审批通过？</text>
      <line x1="235" y1="360" x2="235" y2="376" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="140" y="376" width="190" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="400" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">政策生效(valid=2)</text>
      <text x="235" y="418" text-anchor="middle" fill="#166534" font-size="10">通用直接生效/专项CRM同步</text>
      <line x1="235" y1="420" x2="235" y2="436" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="150" y="436" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="461" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">失效申请(Disabled)</text>
      <line x1="235" y1="476" x2="235" y2="492" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="180" y="492" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="517" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="235" y1="532" x2="235" y2="560" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <line x1="305" y1="320" x2="430" y2="320" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
      <rect x="380" y="305" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
      <text x="430" y="324" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">拒绝✗</text>
      <line x1="430" y1="320" x2="430" y2="237" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="430" y1="237" x2="335" y2="237" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
      <rect x="50" y="560" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="582" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="120" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="195" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">要货订单</text>
      <rect x="295" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="370" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">折扣申请单</text>
      <rect x="470" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="545" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">折扣变更</text>
      <rect x="645" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="720" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">OA审批系统</text>
      <rect x="820" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="895" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">CRM系统</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝</span>
  </div>
</div>
</div>
</div>

<div id="logic">

<div class="kb-module">

### 数据模型

工程折扣政策（EpmDiscountPolicy）是定义客户/区域/省份/客户分类维度下产品折扣规则的核心模块。支持通用(normal)和专项(special)两种适用类型，折扣和特价两种优惠方式，坎级（阶梯）定价。

```text
EPM_DISCOUNT_POLICY (政策头)
  │
  ├── EPM_DISCOUNT_POLICY_ITEM (产品行)
  │       ├── preferentialType: 1=折扣, 2=特价
  │       ├── applicationType: 1=产品, 2=型号, 3=全产品
  │       │
  │       ├── EPM_DISCOUNT_POLICY_ITEM_LINE (坎级行-阶梯定价)
  │       │       ├── minimumQty: 起订量
  │       │       ├── cappingQty: 封顶量
  │       │       ├── discountRate / specialOffer: 折扣率或特价
  │       │       └── EPM_DPIL_EXT (坎级扩展-特价反算折扣/警戒线)
  │       │
  │       ├── 1:1 ── EPM_DISCOUNT_POLICY_ITEM_EXT (产品扩展-库龄/生命周期)
  │       └── EPM_DISCOUNT_POLICY_ITEM_CUSTOMER (产品客户封顶量)
  │
  ├── EPM_DISCOUNT_POLICY_CUSTOMER (政策客户列表)
  ├── 1:1 ── EPM_DISCOUNT_POLICY_GENERATE (CRM推送记录)
  │             └── EPM_DISCOUNT_GENERATE_ITEM (CRM推送明细)
  └── EPM_DISCOUNT_POLICY_DISABLED (失效记录)
```

#### 头表关键字段（EPM_DISCOUNT_POLICY）

| 字段名 | 类型 | 说明 | 取值逻辑 |
|--------|------|------|---------|
| discountPolicyId | Long | 政策ID（主键） | 自增 |
| discountPolicyCode | String | 政策单号 | 编码规则生成（通用/专项不同规则） |
| policyType | Long | 政策类型 | 1=客户, 2=区域, 3=客户分类, 4=省份 |
| suitableType | String | 适用类型 | normal=通用, special=专项 |
| valid | Long | 有效状态 | 1=未审核, 2=有效, 3=失效 |
| isMakt | Long | 是否营销中台 | 2=样品及长库龄 |
| sourceType | String | 来源系统 | YXCRM=样品及长库龄, EPMS=工程/家装 |
| headPreferentialType | Long | 产品优惠方式 | 1=折扣, 2=特价 |
| headDiscountRate | BigDecimal | 默认折扣率 | 产品行未指定时使用 |

</div>

<div class="kb-module-alt">

### 坎级定价与优惠方式

**折扣方式(preferentialType=1)**：
- 坎级行定义不同数量段的折扣率
- 折后单价 = 标准单价(不含安装) × 折扣率

**特价方式(preferentialType=2)**：
- 坎级行定义不同数量段的特价金额
- 特价反算折扣率 = 特价 / (标准单价(不含安装) × 出厂折扣率)

**坎级行匹配规则**：根据下单数量匹配 minimumQty ≤ 数量 ≤ cappingQty 的坎级段

**核心计算公式**：

| 计算项 | 公式 |
|--------|------|
| 应用折扣率(计开单折扣) | 出厂折扣率 × 审批折扣率 |
| 应用折扣率(不计开单折扣) | 出厂折扣率 × 经销商全年折扣率 |
| 价值链 | (折后单价 - 成本单价) / 折后单价 |
| 整单价值链 | (折后总价 - 成本总价) / 折后总价 |

</div>

<div class="kb-module">

### 校验规则

#### 保存时校验（preCheckData）

| 校验点 | 规则 |
|--------|------|
| 必填字段 | 专项时订单类型+业务类型必填；通用必填：政策类型/名称/有效日期/币种 |
| 产品行 | 不能为空 |
| 申请类型互斥 | 全产品(3)与型号(2)/产品(1)不能同时存在 |
| 优惠方式 | 通用类型时必须为折扣(1) |
| 样品校验 | isMakt=2时计划/出口计划订单业务类型不能为长库龄 |
| 时间重叠 | 通用类型同一产品/型号在重叠时间段不能存在于其他已审批/有效政策 |
| 新品校验 | 家装专项时型号涉及新品(EBS标记newProdFlag=Y)不允许型号定义 |
| 重复行 | 产品编码不能重复，型号不能重复 |

#### 提交时额外校验（submitCheck）

| 校验点 | 规则 |
|--------|------|
| 产品型号冲突 | 产品编码对应型号与型号行不能冲突 |
| 坎级数量 | max(坎级封顶量) ≤ 单个经销商封顶数量 ≤ 政策行总数量 |
| 一口价折扣率 | 产品定位为"一口价"时折扣率必须 ≥ 1 |
| 折扣管控CRM校验 | 非样品/长库龄业务类型时推送CRM校验 |

</div>

<div class="kb-module-alt">

### 审批流程

**提交流程**：saveAndSubmit → 保存 → submitCheck → wfProcSubmit → 开启工作流

**审批回调**：

| 回调 | 逻辑 |
|------|------|
| wfComplete | 拒绝/中断→更新审批状态；通过→doComplete |
| doComplete | 通用类型：直接设valid=2; 专项类型：crmPolicySyncService同步CRM |
| wfProcSubmit | 重新获取产品扩展→一口价校验→CRM折扣信息同步→折扣管控CRM校验 |

**OA审批**：
- 样品折扣政策 → `doOaAudit`
- 工程折扣政策 → `doSendToOABill`
- OA回调 → `doProcessOA` / `doDiscountPolicy`

**CRM同步（专项审批通过时）**：
1. 查询EpmDiscountPolicyGenerate是否已有CRM ID
2. 不存在 → `crmPolicySyncService.doCreatePolicy` 创建CRM折扣政策
3. 已存在 → `crmPolicySyncService.doComplete` 完成CRM折扣政策
4. 通用类型不推送CRM，直接设valid=2

</div>

<div class="kb-module">

### 失效管理

**失效记录**（EpmDiscountPolicyDisabled）：
- 创建失效记录 → 生成编码 → 更新产品行disabledId
- 保存并提交 → 开启工作流
- 审批通过 → 产品行validStat=3 → 所有行失效则政策头valid=3 → 专项类型推送CRM失效

**删除限制**：仅NEW状态可删除，级联删除所有子表

</div>

<div class="kb-module-alt">

### 状态流转

```text
新建(valid=1, hzApproveStatus=NEW) → OA审批/工作流 → 
  ├── 审批通过(APPROVED) → 
  │     ├── 通用类型 → valid=2(直接生效)
  │     └── 专项类型 → CRM同步 → valid=2
  ├── 拒绝(REJECTED) → valid仍为1
  │
  └── 失效申请(Disabled) → 审批通过 → 产品行validStat=3 → 政策头valid=3(失效)
```

**政策匹配规则（4种方式）**：
- policyType=1(客户) → 直接匹配customerId
- policyType=2(区域) → 匹配saleAreaId
- policyType=3(客户分类) → 匹配customerClass
- policyType=4(省份) → 匹配provinceId

</div>

</div>

<div id="faq" style="display:none;">
<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>折扣政策名称最大输入30个字符</td><td>保存时</td><td>政策名称超过30字符，缩短至30字符以内</td><td>高</td><td style="text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>产品行不能为空</td><td>保存时</td><td>未添加产品明细行，至少添加一条</td><td>高</td><td style="text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>物料明细不能为空</td><td>保存时</td><td>产品行下未配置物料明细，添加物料明细</td><td>高</td><td style="text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>申请类型冲突</td><td>保存时</td><td>全产品与型号/产品不能同时存在，调整申请类型</td><td>高</td><td style="text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
<tr><td>时间重叠冲突</td><td>保存时</td><td>通用类型同一产品在重叠时间段已有其他政策，调整有效日期</td><td>高</td><td style="text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
<tr><td>新品型号不允许</td><td>保存时</td><td>家装专项时型号涉及新品不允许，新品必须通过产品定义</td><td>中</td><td style="text-align:center;"><a href="#err-detail-6" class="view-btn">查看</a></td></tr>
<tr><td>一口价折扣率&lt;1</td><td>提交时</td><td>产品定位为"一口价"时折扣率必须≥1，修正折扣率</td><td>高</td><td style="text-align:center;"><a href="#err-detail-7" class="view-btn">查看</a></td></tr>
<tr><td>折扣政策id不能为空</td><td>导入产品时</td><td>discountPolicyId为空，先保存政策后再导入</td><td>高</td><td style="text-align:center;"><a href="#err-detail-8" class="view-btn">查看</a></td></tr>
<tr><td>适用类型为"通用"时，产品优惠方式只能为 "折扣"</td><td>保存时</td><td>通用类型政策产品行优惠方式选了特价，改为折扣</td><td>高</td><td style="text-align:center;"><a href="#err-detail-9" class="view-btn">查看</a></td></tr>
<tr><td>产品编码:xxx 单个经销商封顶数量为正整数</td><td>保存时</td><td>capping=2但customerCapsNumber非正整数，修正封顶数量</td><td>高</td><td style="text-align:center;"><a href="#err-detail-10" class="view-btn">查看</a></td></tr>
<tr><td>产品【xxx】本次下单数量【xxx】，超过政策该经销商剩余可下单数量【xxx】，请检查！</td><td>要货订单下单时</td><td>下单数量超过经销商剩余可下单数量，调整下单数量</td><td>高</td><td style="text-align:center;"><a href="#err-detail-11" class="view-btn">查看</a></td></tr>
<tr><td>仅新建状态单据允许删除.</td><td>删除时</td><td>非NEW状态单据删除，仅新建状态可删除</td><td>高</td><td style="text-align:center;"><a href="#err-detail-12" class="view-btn">查看</a></td></tr>
<tr><td>未找到该单据</td><td>删除/详情时</td><td>按ID查询不到折扣政策，确认数据未被删除</td><td>高</td><td style="text-align:center;"><a href="#err-detail-13" class="view-btn">查看</a></td></tr>
<tr><td>流程编码不能为空。</td><td>提交时</td><td>工作流编码未配置，联系管理员配置工作流</td><td>高</td><td style="text-align:center;"><a href="#err-detail-14" class="view-btn">查看</a></td></tr>
<tr><td>请先维护OA系统信息</td><td>提交时</td><td>OA系统信息未维护，先维护OA配置</td><td>高</td><td style="text-align:center;"><a href="#err-detail-15" class="view-btn">查看</a></td></tr>
<tr><td>未找到客户id，请检查!</td><td>保存时</td><td>policyType=1但客户ID为空，选择客户后保存</td><td>高</td><td style="text-align:center;"><a href="#err-detail-16" class="view-btn">查看</a></td></tr>
<tr><td>导入的产品编码查询不到对应的产品信息：xxx</td><td>导入产品时</td><td>Excel中产品编码在CRM中不存在，修正产品编码</td><td>高</td><td style="text-align:center;"><a href="#err-detail-17" class="view-btn">查看</a></td></tr>
<tr><td>订单类型为【计划订单】,业务类型不能为【长库龄】</td><td>保存时</td><td>计划订单业务类型选了长库龄，调整业务类型</td><td>高</td><td style="text-align:center;"><a href="#err-detail-18" class="view-btn">查看</a></td></tr>
</tbody>
</table>
</KbCard>

<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>折扣政策名称最大输入30个字符</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，DISCOUNT_POLICY_NAME长度超过30字符<br><strong>逻辑分析：</strong>preCheckData方法中校验政策名称长度，EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME字段定义为VARCHAR(30)。超长则抛出阻断性报错，需缩短至30字符以内</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,
         LENGTH(edp.DISCOUNT_POLICY_NAME) AS 名称长度
  FROM EPM_DISCOUNT_POLICY edp
  WHERE LENGTH(edp.DISCOUNT_POLICY_NAME) &gt; 30
  -- 查出名称超长的异常数据</code></pre>
  </div>
</div>

<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品行不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，未添加产品明细行(EPM_DISCOUNT_POLICY_ITEM为空)<br><strong>逻辑分析：</strong>preCheckData方法中校验产品行列表非空，因折扣政策必须包含至少一条产品明细。该报错为阻断性报错</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,
         (SELECT COUNT(*) FROM EPM_DISCOUNT_POLICY_ITEM edpi
          WHERE edpi.DISCOUNT_POLICY_ID = edp.DISCOUNT_POLICY_ID) AS 产品行数
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 若产品行数为0，则触发该报错</code></pre>
  </div>
</div>

<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>物料明细不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，产品行下未配置物料明细(EPM_DISCOUNT_POLICY_ITEM_LINE为空)<br><strong>逻辑分析：</strong>preCheckData方法中遍历产品行，校验每个产品行下至少有一条物料明细。该报错为阻断性报错</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME,
         (SELECT COUNT(*) FROM EPM_DISCOUNT_POLICY_ITEM_LINE edpil
          WHERE edpil.DISCOUNT_POLICY_ITEM_ID = edpi.DISCOUNT_POLICY_ITEM_ID) AS 物料行数
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 查出物料行数为0的产品行</code></pre>
  </div>
</div>

<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>申请类型冲突</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，全产品与型号/产品同时存在<br><strong>逻辑分析：</strong>preCheckData方法中校验申请类型互斥，全产品类型(包含所有产品)与按型号/产品指定类型不能同时存在。需调整申请类型</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME, edpi.APPLY_TYPE,
         edpi.IS_ALL_PRODUCT
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 检查是否存在IS_ALL_PRODUCT=1与具体ITEM_CODE同时存在的情况</code></pre>
  </div>
</div>

<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>时间重叠冲突</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，通用类型(suitableType=normal)同一产品在重叠时间段已有其他政策<br><strong>逻辑分析：</strong>preCheckData方法中按ITEM_CODE和有效日期区间查询EPM_DISCOUNT_POLICY，若通用类型政策在重叠时间段已存在则抛出阻断性报错。需调整有效日期避免重叠</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,
         edp.SUITABLE_TYPE, edp.VALID, edp.EFFECTIVE_DATE_START, edp.EFFECTIVE_DATE_END,
         edpi.ITEM_CODE
  FROM EPM_DISCOUNT_POLICY edp
  JOIN EPM_DISCOUNT_POLICY_ITEM edpi ON edp.DISCOUNT_POLICY_ID = edpi.DISCOUNT_POLICY_ID
  WHERE edpi.ITEM_CODE = :itemCode
    AND edp.SUITABLE_TYPE = 'normal'
    AND edp.VALID IN (1, 2)
    AND edp.EFFECTIVE_DATE_END &gt;= :newStartDate
    AND edp.EFFECTIVE_DATE_START &lt;= :newEndDate
  -- 查出时间重叠的通用政策</code></pre>
  </div>
</div>

<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>新品型号不允许</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，家装专项(suitableType=special)且型号涉及新品<br><strong>逻辑分析：</strong>preCheckData方法中校验家装专项折扣政策的型号不能涉及新品，新品必须通过产品定义。该报错为中等优先级</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME, edpi.MODEL,
         edpi.IS_NEW_PRODUCT
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  JOIN EPM_DISCOUNT_POLICY edp ON edpi.DISCOUNT_POLICY_ID = edp.DISCOUNT_POLICY_ID
  WHERE edp.SUITABLE_TYPE = 'special'
    AND edpi.IS_NEW_PRODUCT = 1
  -- 查出家装专项中涉及新品的型号</code></pre>
  </div>
</div>

<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>一口价折扣率&lt;1</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>提交折扣政策时，产品定位为"一口价"但折扣率(DISCOUNT_RATE)&lt;1<br><strong>逻辑分析：</strong>submitCheck方法中校验一口价产品的折扣率必须&gt;=1(一口价即折扣率&gt;=1的特殊定价)。若&lt;1则抛出阻断性报错，需修正折扣率</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME,
         edpi.PRICE_POSITIONING, edpi.DISCOUNT_RATE
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.DISCOUNT_POLICY_ID = :discountPolicyId
    AND edpi.PRICE_POSITIONING = '一口价'
    AND edpi.DISCOUNT_RATE &lt; 1
  -- 查出一口价但折扣率&lt;1的异常数据</code></pre>
  </div>
</div>

<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>折扣政策id不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>导入产品时，discountPolicyId参数为空<br><strong>逻辑分析：</strong>importProduct方法中校验discountPolicyId非空，因导入产品需关联到已保存的折扣政策。需先保存政策后再导入产品</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME, edp.VALID
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 校验折扣政策ID是否存在</code></pre>
  </div>
</div>

<div id="err-detail-9" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>适用类型为"通用"时，产品优惠方式只能为 "折扣"</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，适用类型为通用(normal)但产品行优惠方式选择了特价(2)<br><strong>逻辑分析：</strong>preCheckData方法中校验通用类型政策的优惠方式必须为折扣(1)，不支持特价。因通用政策面向所有客户，特价会导致不同客户价格不一致。需将产品行优惠方式改为折扣</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME,
         edpi.PREFERENTIAL_TYPE, edp.SUITABLE_TYPE
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  JOIN EPM_DISCOUNT_POLICY edp ON edpi.DISCOUNT_POLICY_ID = edp.DISCOUNT_POLICY_ID
  WHERE edp.SUITABLE_TYPE = 'normal'
    AND edpi.PREFERENTIAL_TYPE = 2
  -- 查出通用类型但优惠方式为特价的异常数据</code></pre>
  </div>
</div>

<div id="err-detail-10" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品编码:xxx 单个经销商封顶数量为正整数</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，capping=2(需校验封顶量)但customerCapsNumber非正整数<br><strong>逻辑分析：</strong>preCheckData方法中校验当产品行启用封顶量校验(capping=2)时，单个经销商封顶数量必须为正整数。需修正封顶数量</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.CAPPING,
         edpi.CUSTOMER_CAPS_NUMBER
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.CAPPING = 2
    AND (edpi.CUSTOMER_CAPS_NUMBER IS NULL
         OR edpi.CUSTOMER_CAPS_NUMBER &lt;= 0
         OR edpi.CUSTOMER_CAPS_NUMBER != FLOOR(edpi.CUSTOMER_CAPS_NUMBER))
  -- 查出封顶量异常的产品行</code></pre>
  </div>
</div>

<div id="err-detail-11" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品【xxx】本次下单数量【xxx】，超过政策该经销商剩余可下单数量【xxx】，请检查！</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>要货订单下单时，下单数量+已下单数量超过折扣政策该经销商的封顶量<br><strong>逻辑分析：</strong>checkPolicyItem方法中当capping=2时，统计当前经销商已下单数量(currentApplyNum)，若currentApplyNum+本次下单数量&gt;经销商封顶量(customerCapsNumber)则抛出阻断性报错。需调整下单数量或联系管理员调整封顶量</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.CUSTOMER_CAPS_NUMBER,
         edpi.TOTAL_CAP_NUMBER
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.CAPPING = 2
    AND edpi.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 对比经销商已下单数量与封顶量</code></pre>
  </div>
</div>

<div id="err-detail-12" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>仅新建状态单据允许删除.</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>删除折扣政策时，单据状态非NEW(新建)<br><strong>逻辑分析：</strong>delete方法中校验单据HZ_APPROVE_STATUS为NEW，非新建状态不允许删除以避免已提交/已审批数据被误删。需先驳回至新建状态后再删除</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS, edp.VALID
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.DISCOUNT_POLICY_ID = :discountPolicyId
    AND edp.HZ_APPROVE_STATUS &lt;&gt; 'NEW'
  -- 查出非新建状态的折扣政策</code></pre>
  </div>
</div>

<div id="err-detail-13" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>未找到该单据</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>删除/查询折扣政策详情时，按ID查询不到折扣政策<br><strong>逻辑分析：</strong>selectByPrimaryKey查询EPM_DISCOUNT_POLICY返回null时抛出阻断性报错。需确认数据未被删除或ID正确</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.VALID
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 若返回空，说明折扣政策不存在</code></pre>
  </div>
</div>

<div id="err-detail-14" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>流程编码不能为空。</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>提交折扣政策审批时，工作流编码未配置<br><strong>逻辑分析：</strong>submitCheck方法中校验工作流编码非空，若为空则抛出阻断性报错。需联系管理员配置工作流编码</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.DISCOUNT_POLICY_ID = :discountPolicyId
  -- 检查折扣政策提交状态</code></pre>
  </div>
</div>

<div id="err-detail-15" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>请先维护OA系统信息</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>提交折扣政策审批时，OA系统信息未维护<br><strong>逻辑分析：</strong>wfProcSubmit方法中校验OA系统配置，若未维护则抛出阻断性报错。需先在系统配置中维护OA信息</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT * FROM SCPSYSCONF WHERE CONFNAME LIKE '%OA%'
  -- 检查OA系统配置是否存在</code></pre>
  </div>
</div>

<div id="err-detail-16" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>未找到客户id，请检查!</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，policyType=1(客户)但客户ID为空<br><strong>逻辑分析：</strong>preCheckData方法中校验当政策类型为客户(1)时，客户ID必须非空。需选择客户后保存</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.POLICY_TYPE,
         edp.CUSTOMER_ID, edp.CUSTOMER_CODE
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.POLICY_TYPE = 1
    AND edp.CUSTOMER_ID IS NULL
  -- 查出客户类型但客户ID为空的异常数据</code></pre>
  </div>
</div>

<div id="err-detail-17" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>导入的产品编码查询不到对应的产品信息：xxx</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>导入产品时，Excel中产品编码在CRM中查询不到对应产品<br><strong>逻辑分析：</strong>importProduct方法中按产品编码查询CRM产品信息，若查询不到则抛出阻断性报错。需修正Excel中产品编码</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME
  FROM EPM_DISCOUNT_POLICY_ITEM edpi
  WHERE edpi.DISCOUNT_POLICY_ID = :discountPolicyId
    AND edpi.ITEM_CODE NOT IN (:importedItemCodes)
  -- 查出导入但CRM不存在的产品编码</code></pre>
  </div>
</div>

<div id="err-detail-18" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>订单类型为【计划订单】,业务类型不能为【长库龄】</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存折扣政策时，订单类型为计划订单但业务类型选了长库龄<br><strong>逻辑分析：</strong>preCheckData方法中校验订单类型与业务类型组合，计划订单不允许长库龄业务类型。需调整业务类型</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.ORDER_TYPE, edp.BUSINESS_TYPE
  FROM EPM_DISCOUNT_POLICY edp
  WHERE edp.ORDER_TYPE = '计划订单'
    AND edp.BUSINESS_TYPE = '长库龄'
  -- 查出订单类型与业务类型冲突的异常数据</code></pre>
  </div>
</div>


<div class="kb-module">

### Q1: 要货订单封顶量校验失败 🔴高频

**现象**：要货订单提交时报错封顶量超限

**根因**：下单数量超过折扣政策坎级行封顶量或经销商封顶量

**排查SQL**：
```sql
SELECT EPIL.CAPPING_QTY, EPIC.CAPPING_QTY AS CUSTOMER_CAP,
       EPIL.MINIMUM_QTY
FROM EPM_DISCOUNT_POLICY_ITEM_LINE EPIL
LEFT JOIN EPM_DISCOUNT_POLICY_ITEM_CUSTOMER EPIC 
  ON EPIL.DISCOUNT_POLICY_ITEM_ID = EPIC.DISCOUNT_POLICY_ITEM_ID
  AND EPIC.CUSTOMER_ID = :customerId
WHERE EPIL.DISCOUNT_POLICY_ITEM_ID = :policyItemId;
```

</div>

<div class="kb-module-alt">

### Q2: 通用政策时间重叠校验失败 🟡偶发

**现象**：保存时报错同一产品/型号在重叠时间段已有其他政策

**根因**：通用类型折扣政策不允许同一产品在重叠时间段存在多个已审批/有效政策

**排查SQL**：
```sql
SELECT DP.DISCOUNT_POLICY_ID, DP.DISCOUNT_POLICY_CODE, DP.VALID,
       DP.EFFECTIVE_DATE_START, DP.EFFECTIVE_DATE_END
FROM EPM_DISCOUNT_POLICY DP
JOIN EPM_DISCOUNT_POLICY_ITEM DPI ON DP.DISCOUNT_POLICY_ID = DPI.DISCOUNT_POLICY_ID
WHERE DPI.ITEM_CODE = :itemCode
  AND DP.SUITABLE_TYPE = 'normal'
  AND DP.VALID IN (1, 2)
  AND DP.EFFECTIVE_DATE_END >= :startDate
  AND DP.EFFECTIVE_DATE_START <= :endDate;
```

</div>

<div class="kb-module">

### Q3: 专项政策审批通过后CRM同步失败

**现象**：专项折扣政策审批通过但CRM未同步

**根因**：crmPolicySyncService.doCreatePolicy 或 doComplete 调用失败

**排查**：检查 EPM_DISCOUNT_POLICY_GENERATE 是否有记录，CRMIC是否为空

</div>

<div class="kb-module-alt">

### Q4: 一口价折扣率校验失败

**现象**：提交时报错一口价折扣率<1

**根因**：产品定位为"一口价"时坎级行的折扣率必须≥1

**排查SQL**：
```sql
SELECT DPI.ITEM_CODE, DPIE.PROD_POSITIONING, EPIL.DISCOUNT_RATE
FROM EPM_DISCOUNT_POLICY_ITEM DPI
JOIN EPM_DISCOUNT_POLICY_ITEM_EXT DPIE ON DPI.DISCOUNT_POLICY_ITEM_ID = DPIE.DISCOUNT_POLICY_ITEM_ID
JOIN EPM_DISCOUNT_POLICY_ITEM_LINE EPIL ON DPI.DISCOUNT_POLICY_ITEM_ID = EPIL.DISCOUNT_POLICY_ITEM_ID
WHERE DPI.DISCOUNT_POLICY_ID = :policyId
  AND DPIE.PROD_POSITIONING = '一口价';
```

</div>

<div class="kb-module">

### Q5: 折扣政策失效后要货订单仍可下单

**现象**：折扣政策valid=3(失效)后，要货订单仍能使用该政策下单

**根因**：政策行validStat未全部更新为3，或政策LOV查询条件未过滤valid状态

**排查**：检查 EPM_DISCOUNT_POLICY_ITEM 的 VALID_STAT 字段是否全部为3

</div>

<div class="kb-module-alt">

### Q6: 家装专项新品型号不允许 🔴设计规则

**现象**：家装专项折扣政策保存时报错新品型号不允许

**根因**：家装专项时型号涉及新品(EBS标记newProdFlag=Y)不允许通过型号定义

**说明**：这是设计规则，新品必须通过产品(applicationType=1)而非型号(applicationType=2)定义

</div>

</div>

<div id="troubleshoot" style="display:none;">

<div class="kb-module">

**步骤1：确认折扣政策基本信息**

```sql
SELECT DISCOUNT_POLICY_ID, DISCOUNT_POLICY_CODE, POLICY_TYPE, SUITABLE_TYPE,
       VALID, IS_MAKT, CHANNEL, BUSINESS_TYPE, BILL_TYPE, BILL_TYPES,
       EFFECTIVE_DATE_START, EFFECTIVE_DATE_END, HZ_APPROVE_STATUS
FROM EPM_DISCOUNT_POLICY 
WHERE DISCOUNT_POLICY_ID = :policyId;
```

> VALID=1未审核, 2有效, 3失效；SUITABLE_TYPE=normal通用, special专项

</div>

<div class="kb-module-alt">

**步骤2：检查产品行与优惠方式**

```sql
SELECT DISCOUNT_POLICY_ITEM_ID, ITEM_CODE, ITEM_NAME, APPLICATION_TYPE,
       PREFERENTIAL_TYPE, CAPPING, CUSTOMER_CAPS_NUMBER, VALID_STAT,
       DISCOUNT_POLICY_DISABLED_ID
FROM EPM_DISCOUNT_POLICY_ITEM 
WHERE DISCOUNT_POLICY_ID = :policyId;
```

> VALID_STAT=0有效, 3失效；CAPPING=2时需校验封顶量

</div>

<div class="kb-module">

**步骤3：检查坎级行折扣率/特价**

```sql
SELECT DISCOUNT_POLICY_ITEM_LINE_ID, MINIMUM_QTY, CAPPING_QTY,
       DISCOUNT_RATE, SPECIAL_OFFER, SPECIAL_DISCOUNT_RATE, VALUE_CHAIN
FROM EPM_DISCOUNT_POLICY_ITEM_LINE 
WHERE DISCOUNT_POLICY_ID = :policyId;
```

> 起订量/封顶量需覆盖合理数量段；折扣率≥1（一口价）

</div>

<div class="kb-module-alt">

**步骤4：检查CRM推送记录**

```sql
SELECT DISCOUNT_POLICY_ID, CRMID 
FROM EPM_DISCOUNT_POLICY_GENERATE 
WHERE DISCOUNT_POLICY_ID = :policyId;
```

> CRMIC不为空→CRM已创建；为空→CRM未同步

</div>

<div class="kb-module">

**步骤5：检查政策使用数量统计**

```sql
SELECT DPI.ITEM_CODE, DPI.CAPPING, 
       EPPS.CALCULATE_POLICY_APPLY_NUM AS USED_QTY
FROM EPM_DISCOUNT_POLICY_ITEM DPI
WHERE DPI.DISCOUNT_POLICY_ID = :policyId;
```

> 已使用数量需与封顶量对比，判断是否超限

</div>

</div>

<div id="history" style="display:none;">

<div class="kb-module">

> 本页面记录真实排查案例，用于频次分析和趋势监控。

| 日期 | 问题简述 | 根因 | 耗时 | 频次标记 |
|------|---------|------|------|---------|
| — | — | — | — | — |

</div>

<div class="kb-module-alt">

### 按根因分类统计

| 根因分类 | 次数 | 占比 |
|---------|------|------|
| 数据异常 | 0 | 0% |
| 逻辑缺陷 | 0 | 0% |
| 并发冲突 | 0 | 0% |
| 配置错误 | 0 | 0% |
| 其他 | 0 | 0% |

> 暂无数据，积累排查记录后自动更新。

</div>

</div>

<div id="related" style="display:none;">

<div class="kb-module">

### 上游依赖

| 模块 | 关联方式 | 说明 |
|------|---------|------|
| CRM系统 | 数据依赖 | 产品查询、折扣政策创建/完成/校验 |
| EBS系统 | 数据依赖 | 产品成本(PAC)、新品标记、产品政策参考 |
| 客户组织(CUSTOMER_ORG) | 数据依赖 | 客户匹配(policyType=1)、客户折扣率 |
| 销售区域 | 数据依赖 | 区域匹配(policyType=2) |
| 省份 | 数据依赖 | 省份匹配(policyType=4) |
| 价目表 | 数据依赖 | 产品价格获取(getPrice/getPolicyDatas) |

</div>

<div class="kb-module-alt">

### 下游影响

| 模块 | 关联方式 | 说明 |
|------|---------|------|
| 要货订单(SA_OUT_BILL_HEAD) | 数据依赖 | 折扣政策类型关联政策头ID，获取产品价格和折扣率 |
| 折扣申请单(EPM_DISCOUNT_APPLY) | 数据依赖 | 折扣行policyFlag='Y'时引用政策坎级行(sourcePolicyId) |
| 折扣变更(EPM_DISCOUNT_ECN) | 业务触发 | 延期时政策失效处理，查找新有效折扣政策 |
| OA审批系统 | 流程依赖 | 推送OA审批 |
| CRM系统 | 业务触发 | 专项类型审批通过后同步CRM创建/完成折扣政策 |

</div>

</div>
