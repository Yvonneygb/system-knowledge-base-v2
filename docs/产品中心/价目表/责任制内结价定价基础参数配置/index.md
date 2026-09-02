<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>基础参数配置维护什么</h2>
    <p>设定责任制内结价定价的基础规则与系数，是算价前提</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">定价规则</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">规则与系数定义算价逻辑</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>定价规则</strong> — 内结价计算所依据的方法</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>定价系数</strong> — 影响最终价格的权重因子</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>生失效日期</strong> — 控制配置有效期区间</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="white" stroke-width="1.5"/><path d="M8 5.5v5M5.5 8h5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">适用范围</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">限定配置作用的组织与场景</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>适用范围</strong> — 配置命中的组织/业务场景</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>启用标志</strong> — Y/N 控制配置是否生效</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>唯一性</strong> — 同适用范围不允许重复配置</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>配置被谁引用</h2>
    <p>基础参数支撑内结价算价与跨事业部销售定价</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2v12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">内结价计算</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">作为算价基础参数直接被引用。</p></div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">瓷砖配置</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">同体系下供瓷砖参数配置继承使用。</p></div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">跨部定价</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">支撑跨事业部销售申请的定价依据。</p></div>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">责任制内结价定价基础参数配置 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★基础参数配置★ → 结束（CRUD配置，保存即生效无审批；下游供内结价定价计算/跨事业部销售申请使用）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="280" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="340" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">责任制内结价体系</text>
      <rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">产品主档</text>
      <rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">适用范围值集</text>
      <rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">组织主数据</text>
      <rect x="800" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="860" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">价格类型值集</text>
      <line x1="540" y1="115" x2="540" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="500" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="540" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="540" y1="194" x2="540" y2="228" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="400" y="228" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="540" y="252" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★基础参数配置★</text>
      <text x="540" y="270" text-anchor="middle" fill="#DCFCE7" font-size="10">新建/编辑·填定价规则系数·保存即生效</text>
      <line x1="540" y1="282" x2="540" y2="316" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="485" y="316" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="540" y="341" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="540" y1="356" x2="540" y2="400" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="400" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="422" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="270" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="345" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">内结价定价计算</text>
      <rect x="440" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="515" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">瓷砖参数配置</text>
      <rect x="610" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="685" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">跨事业部销售申请定价</text>
      <rect x="780" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="855" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">经营分析</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝/驳回</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：产品分类四级级联 `级联选择`">
<ul><li><strong>业务意义</strong>：产品分类按一级→二级→三级→四级逐级细化，选择上级后下级选项动态过滤</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：所有分类字段使用值集CRM.PRODUCT_CLASS，通过parentId实现级联</li></ul>
<ul><li>第2点：选中值=中文名（name），查询下级时parentId=上级ROW_ID</li></ul>
<ul><li>第3点：上级分类变更时，自动清空所有下级分类并刷新下级选项</li></ul>
<ul><li>第4点：编辑模式加载数据后，需逐级加载子级选项（cascadeLoadChildren）</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：分类唯一性校验 `重复校验`">
<ul><li><strong>业务意义</strong>：同一分类组合（一二级+三级+四级）不允许存在多条有效配置</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：保存时如果记录状态为valid，查询是否已存在相同topCategory+secCategory+thrCategory+fourCategory且status=valid的记录</li></ul>
<ul><li>第2点：如果存在，抛出异常"一二三级分类/一二三四级分类生效数据已存在，请核对数据！"</li></ul>
<ul><li>第3点：四级分类为空时，查询条件匹配FOUR_CATEGORY IS NULL</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：定价比例条件必填 `条件必填`">
<ul><li><strong>业务意义</strong>：部分定价类型需要定价比例参数，部分不需要</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：当定价类型为base_gross_margin（基础毛利率）或standard_price_ratio（标准价比率）时，定价比例必填</li></ul>
<ul><li>第2点：其他定价类型时，定价比例非必填</li></ul>
<ul><li>第3点：定价比例范围：min=0，max=999999，步长0.01</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：配置编码自动生成 `编码生成`">
<ul><li><strong>业务意义</strong>：配置编码由系统自动生成，避免人工编码冲突</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：新建保存时通过编码规则CRM.RSP_STM_CFG_CODE自动生成配置编码</li></ul>
<ul><li>第2点：配置编码生成后不可修改（前端disabled）</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：新建与编辑字段权限差异 `字段控制`">
<ul><li><strong>业务意义</strong>：新建时分类可选、状态锁定；编辑时分类不可改、状态可改</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：新建时分类字段（一至四级）可编辑，状态锁定为valid不可改</li></ul>
<ul><li>第2点：编辑时分类字段不可编辑（disabled），状态可改为invalid</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：基础参数配置列表页">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>序号</td><td>-</td><td>序号渲染</td><td>行序号</td><td>常显</td><td>自动计算=当前行索引+1</td></tr>
<tr><td>配置编码</td><td>LNK_PM_RSP_STM_CFG.RSP_STM_CODE</td><td>文本链接</td><td>配置唯一编码</td><td>常显</td><td>查询条件：like模糊匹配；点击跳转详情页；可排序</td></tr>
<tr><td>一级分类</td><td>LNK_PM_RSP_STM_CFG.TOP_CATEGORY</td><td>下拉选择框</td><td>产品一级分类</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.PRODUCT_CLASS；可排序</td></tr>
<tr><td>二级分类</td><td>LNK_PM_RSP_STM_CFG.SEC_CATEGORY</td><td>下拉选择框</td><td>产品二级分类</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.PRODUCT_CLASS；可排序</td></tr>
<tr><td>三级分类</td><td>LNK_PM_RSP_STM_CFG.THR_CATEGORY</td><td>下拉选择框</td><td>产品三级分类</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.PRODUCT_CLASS；可排序</td></tr>
<tr><td>四级分类</td><td>LNK_PM_RSP_STM_CFG.FOUR_CATEGORY</td><td>下拉选择框</td><td>产品四级分类</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.PRODUCT_CLASS；可排序</td></tr>
<tr><td>状态</td><td>LNK_PM_RSP_STM_CFG.STATUS</td><td>下拉选择框</td><td>配置有效/失效状态</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.LNK_RSP_STM_CFG_STATUS；可排序</td></tr>
<tr><td>定价类型</td><td>LNK_PM_RSP_STM_CFG.PRICE_TYPE</td><td>下拉选择框</td><td>内结价定价类型</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.LNK_RSP_STM_CGF_PRICE_TYPE；可排序</td></tr>
<tr><td>定价比例</td><td>LNK_PM_RSP_STM_CFG.PROPORTION</td><td>文本框</td><td>定价系数/比例</td><td>常显</td><td>查询条件：like模糊匹配；可排序</td></tr>
<tr><td>创建人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>创建人姓名</td><td>常显</td><td>查询条件：like模糊匹配；可排序</td></tr>
<tr><td>创建时间</td><td>LNK_PM_RSP_STM_CFG.CREATION_DATE</td><td>日期</td><td>记录创建时间</td><td>常显</td><td>查询条件：range范围查询；格式YYYY-MM-DD；可排序</td></tr>
<tr><td>最后更新人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>最后更新人姓名</td><td>常显</td><td>可排序</td></tr>
<tr><td>最后更新时间</td><td>LNK_PM_RSP_STM_CFG.LAST_UPDATE_DATE</td><td>日期</td><td>记录最后更新时间</td><td>常显</td><td>格式YYYY-MM-DD；可排序</td></tr>
<tr><td>备注</td><td>LNK_PM_RSP_STM_CFG.REMARKS</td><td>文本框</td><td>备注说明</td><td>常显</td><td>-</td></tr>
</tbody>
</table>
<blockquote>列表查询SQL（Mapper: RspStmCfgMapper.xml → queryByExamplePage）：</blockquote>

```sql
SELECT id, rsp_stm_code AS rspStmCode, status,
       top_category AS topCategory, sec_category AS secCategory,
       thr_category AS thrCategory, four_category AS fourCategory,
       prod_unit AS prodUnit, price_type AS priceType,
       proportion, remarks, object_version_number AS objectVersionNumber,
       created_by AS createdBy, creation_date AS creationDate,
       last_update_date AS lastUpdateDate, last_updated_by AS lastUpdatedBy,
       created_name AS createdName, last_updated_name AS lastUpdatedName
FROM (
    SELECT T1.ROW_ID AS id, T1.CREATION_DATE AS creation_date,
           T1.CREATED_BY AS created_by, T1.LAST_UPDATE_DATE AS last_update_date,
           T1.LAST_UPDATED_BY AS last_updated_by,
           T3.REAL_NAME AS created_name, T4.REAL_NAME AS last_updated_name,
           T1.RSP_STM_CODE AS rsp_stm_code, T1.STATUS AS status,
           T1.TOP_CATEGORY AS top_category, T1.SEC_CATEGORY AS sec_category,
           T1.THR_CATEGORY AS thr_category, T1.FOUR_CATEGORY AS four_category,
           T1.PROD_UNIT AS prod_unit, T1.PRICE_TYPE AS price_type,
           T1.PROPORTION AS proportion, T1.REMARKS AS remarks,
           T1.OBJECT_VERSION_NUMBER AS object_version_number
    FROM LNK_PM_RSP_STM_CFG T1
        LEFT JOIN HZERO.IAM_USER T3 ON T1.CREATED_BY = T3.id
        LEFT JOIN HZERO.IAM_USER T4 ON T1.LAST_UPDATED_BY = T4.id
    WHERE 1=1
        -- 动态条件：rspStmCode(like)、status(=)、topCategory(=)、secCategory(=)、thrCategory(=)、fourCategory(=)、priceType(=)、proportion(=)、createdName(like)、creationDateStart(>=)、creationDateEnd(<=)
)
```
</KbCard>

<KbCard title="界面模块2：新建/编辑详情页">
<blockquote>详情页8列表单布局，分为"基础参数配置"一个字段组。新建时分类可编辑、状态锁定；编辑时分类不可编辑、状态可改。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>配置编码</td><td>LNK_PM_RSP_STM_CFG.RSP_STM_CODE</td><td>文本框</td><td>配置唯一编码</td><td>常显</td><td>系统自动生成（编码规则CRM.RSP_STM_CFG_CODE）；不可编辑</td></tr>
<tr><td>创建时间</td><td>LNK_PM_RSP_STM_CFG.CREATION_DATE</td><td>日期</td><td>记录创建时间</td><td>常显</td><td>系统自动记录；不可编辑；格式YYYY-MM-DD</td></tr>
<tr><td>定价类型</td><td>LNK_PM_RSP_STM_CFG.PRICE_TYPE</td><td>下拉选择框</td><td>内结价定价类型</td><td>常显</td><td>必填；值集CRM.LNK_RSP_STM_CGF_PRICE_TYPE</td></tr>
<tr><td>创建人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>创建人姓名</td><td>常显</td><td>系统自动记录；不可编辑</td></tr>
<tr><td>一级分类</td><td>LNK_PM_RSP_STM_CFG.TOP_CATEGORY</td><td>下拉选择框</td><td>产品一级分类</td><td>常显</td><td>必填；值集CRM.PRODUCT_CLASS；新建时可编辑，编辑时不可编辑；变更时清空二三四级</td></tr>
<tr><td>二级分类</td><td>LNK_PM_RSP_STM_CFG.SEC_CATEGORY</td><td>下拉选择框</td><td>产品二级分类</td><td>常显</td><td>必填；值集CRM.PRODUCT_CLASS；新建时可编辑，编辑时不可编辑；级联父级topCategory；变更时清空三四级</td></tr>
<tr><td>三级分类</td><td>LNK_PM_RSP_STM_CFG.THR_CATEGORY</td><td>下拉选择框</td><td>产品三级分类</td><td>常显</td><td>必填；值集CRM.PRODUCT_CLASS；新建时可编辑，编辑时不可编辑；级联父级secCategory；变更时清空四级</td></tr>
<tr><td>四级分类</td><td>LNK_PM_RSP_STM_CFG.FOUR_CATEGORY</td><td>下拉选择框</td><td>产品四级分类</td><td>常显</td><td>非必填；值集CRM.PRODUCT_CLASS；新建时可编辑，编辑时不可编辑；级联父级thrCategory</td></tr>
<tr><td>状态</td><td>LNK_PM_RSP_STM_CFG.STATUS</td><td>下拉选择框</td><td>配置有效/失效状态</td><td>常显</td><td>必填；值集CRM.LNK_RSP_STM_CFG_STATUS；新建时默认valid且不可编辑；编辑时可改为invalid</td></tr>
<tr><td>定价比例</td><td>LNK_PM_RSP_STM_CFG.PROPORTION</td><td>数字输入框</td><td>定价系数/比例</td><td>常显</td><td>条件必填（priceType为base_gross_margin或standard_price_ratio时必填）；min=0，max=999999，步长0.01</td></tr>
<tr><td>备注</td><td>LNK_PM_RSP_STM_CFG.REMARKS</td><td>文本域</td><td>备注说明</td><td>常显</td><td>非必填；最大长度255</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<p>本菜单无选择弹窗。所有分类字段使用值集下拉选择框（Select组件）实现四级级联。</p>
</KbCard>

<KbCard title="导入">
<h4>前置约定</h4>
<ul><li>模板编码：CRM.RSP_STM_CFG</li><li>使用通用导入组件CommonImport，支持Excel导入</li></ul>
<h4>字段映射</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段含义</th><th>是否必输</th><th>字段格式</th><th>重复判定字段</th></tr>
</thead>
<tbody>
<tr><td>一级分类</td><td>是</td><td>值集CRM.PRODUCT_CLASS</td><td>TOP_CATEGORY+SEC_CATEGORY+THR_CATEGORY+FOUR_CATEGORY</td></tr>
<tr><td>二级分类</td><td>是</td><td>值集CRM.PRODUCT_CLASS</td><td>同上</td></tr>
<tr><td>三级分类</td><td>是</td><td>值集CRM.PRODUCT_CLASS</td><td>同上</td></tr>
<tr><td>四级分类</td><td>否</td><td>值集CRM.PRODUCT_CLASS</td><td>同上</td></tr>
<tr><td>定价类型</td><td>是</td><td>值集CRM.LNK_RSP_STM_CGF_PRICE_TYPE</td><td>-</td></tr>
<tr><td>定价比例</td><td>条件必填</td><td>数字</td><td>-</td></tr>
<tr><td>备注</td><td>否</td><td>文本</td><td>-</td></tr>
</tbody>
</table>
<h4>处理逻辑</h4>
<ul><li><strong>校验逻辑</strong>：后端validateRequiredFields校验必填字段，validateProportion校验条件必填，checkRepeatCategory校验分类唯一性</li><li><strong>导入逻辑</strong>：通过通用导入框架处理，支持重复分类的智能处理（查询已有记录的全部状态，按场景更新或新增）</li><li><strong>重复处理策略</strong>：同一分类组合已存在有效记录时，报错阻断</li><li><strong>性能方案</strong>：批量插入/更新</li></ul>
<h4>异常与结果约定</h4>
<ul><li>部分成功/失败时的处理：事务回滚</li><li>结果反馈机制：导入结果文件下载</li></ul>
<h4>运维保障</h4>
<ul><li>日志记录：HZERO平台标准日志</li><li>断点续传/重试机制：通用导入框架支持</li></ul>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>新建</td><td>跳转新建详情页</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.cfg.ps.add</td><td>打开新建详情页</td></tr>
<tr><td>导入</td><td>导入配置数据</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.cfg.ps.import</td><td>打开通用导入组件上传Excel</td></tr>
<tr><td>导出</td><td>导出列表数据</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.cfg.ps.export</td><td>异步导出Excel文件</td></tr>
</tbody>
</table>
<h4>按钮1：新建（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.cfg.ps.add</li><li><strong>执行逻辑</strong>：</li><li>第1点：跳转到新建详情页/rspStmCfg/detail</li><li>第2点：详情页表单含配置编码、创建时间、定价类型、创建人、一至四级分类、状态、定价比例、备注</li><li>第3点：新建时状态默认valid且不可改，分类字段可编辑</li><li>第4点：保存时后端自动生成主键ID和配置编码</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/rspStmCfg</li></ul>
<h4>按钮2：导入（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.cfg.ps.import</li><li><strong>执行逻辑</strong>：</li><li>第1点：打开通用导入组件，模板编码CRM.RSP_STM_CFG</li><li>第2点：上传Excel文件后由后端处理</li><li><strong>接口调用</strong>：通用导入框架接口</li></ul>
<h4>按钮3：导出（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.cfg.ps.export</li><li><strong>执行逻辑</strong>：</li><li>第1点：按当前查询条件导出全部数据</li><li>第2点：异步导出Excel文件</li><li><strong>接口调用</strong>：GET /v1/&#123;organizationId&#125;/rspStmCfg/export</li></ul>
</KbCard>

<KbCard title="保存校验">
<p><strong>校验1：</strong>一级分类非空 —— 确保配置绑定到具体一级分类</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：前端表单topCategory字段required=true</li><li>第2点：后端validateRequiredFields方法校验topCategory非空</li></ul>
<p><strong>系统体现：</strong>前端必填提示+后端阻断性报错"一级分类不能为空！"</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG WHERE TOP_CATEGORY IS NULL;
```
<p><strong>校验2：</strong>二级分类非空 —— 确保配置绑定到具体二级分类</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：前端表单secCategory字段required=true</li><li>第2点：后端validateRequiredFields方法校验secCategory非空</li></ul>
<p><strong>系统体现：</strong>前端必填提示+后端阻断性报错"二级分类不能为空！"</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG WHERE SEC_CATEGORY IS NULL;
```
<p><strong>校验3：</strong>三级分类非空 —— 确保配置绑定到具体三级分类</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：前端表单thrCategory字段required=true</li><li>第2点：后端validateRequiredFields方法校验thrCategory非空</li></ul>
<p><strong>系统体现：</strong>前端必填提示+后端阻断性报错"三级分类不能为空！"</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG WHERE THR_CATEGORY IS NULL;
```
<p><strong>校验4：</strong>定价类型非空 —— 确保指定定价类型</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：前端表单priceType字段required=true</li><li>第2点：后端validateRequiredFields方法校验priceType非空</li></ul>
<p><strong>系统体现：</strong>前端必填提示+后端阻断性报错"定价类型不能为空！"</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG WHERE PRICE_TYPE IS NULL;
```
<p><strong>校验5：</strong>定价比例条件必填 —— 确保比例型定价类型有比例值</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：前端proportion字段dynamicProps根据priceType动态设置required</li><li>第2点：后端validateProportion方法：当priceType为base_gross_margin或standard_price_ratio时，proportion不能为null</li></ul>
<p><strong>系统体现：</strong>前端条件必填提示+后端阻断性报错"当前定价类型下，定价比例不能为空！"</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG
    WHERE PRICE_TYPE IN ('base_gross_margin', 'standard_price_ratio')
      AND PROPORTION IS NULL;
```
<p><strong>校验6：</strong>分类唯一性校验 —— 避免重复配置</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：后端checkRepeatCategory方法，仅当status=valid时触发</li><li>第2点：查询相同topCategory+secCategory+thrCategory+fourCategory且status=valid的记录（排除自身ID）</li><li>第3点：如果存在，抛出"一二三级分类/一二三四级分类生效数据已存在，请核对数据！"</li></ul>
<p><strong>系统体现：</strong>后端阻断性报错</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT TOP_CATEGORY, SEC_CATEGORY, THR_CATEGORY, FOUR_CATEGORY, COUNT(*) AS cnt
    FROM LNK_PM_RSP_STM_CFG
    WHERE STATUS = 'valid'
    GROUP BY TOP_CATEGORY, SEC_CATEGORY, THR_CATEGORY, FOUR_CATEGORY
    HAVING COUNT(*) > 1;
```
</KbCard>

<KbCard title="提交校验">
<p>本菜单无提交/审批功能，数据保存后直接生效。</p>
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>

```text
[新建] → valid（生效） → 编辑时改为invalid → invalid（失效）
                                              ↓
                                      不可再改为valid（状态下拉可选但通常仅改为invalid）
```
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>valid</td><td>生效</td><td>编辑、改为失效</td></tr>
<tr><td>invalid</td><td>失效</td><td>编辑</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：LNK_PM_RSP_STM_CFG（基础参数配置表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ROW_ID</td><td>VARCHAR2</td><td>主键</td><td>-</td><td>序列服务生成，新增时自动赋值</td></tr>
<tr><td>RSP_STM_CODE</td><td>VARCHAR2</td><td>配置编码</td><td>配置编码</td><td>编码规则CRM.RSP_STM_CFG_CODE自动生成；不可编辑</td></tr>
<tr><td>STATUS</td><td>VARCHAR2</td><td>状态</td><td>状态</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS；新建默认valid；编辑时可改为invalid</td></tr>
<tr><td>TOP_CATEGORY</td><td>VARCHAR2</td><td>一级分类</td><td>一级分类</td><td>必填；值集CRM.PRODUCT_CLASS；新建后不可修改</td></tr>
<tr><td>SEC_CATEGORY</td><td>VARCHAR2</td><td>二级分类</td><td>二级分类</td><td>必填；值集CRM.PRODUCT_CLASS；级联父级TOP_CATEGORY；新建后不可修改</td></tr>
<tr><td>THR_CATEGORY</td><td>VARCHAR2</td><td>三级分类</td><td>三级分类</td><td>必填；值集CRM.PRODUCT_CLASS；级联父级SEC_CATEGORY；新建后不可修改</td></tr>
<tr><td>FOUR_CATEGORY</td><td>VARCHAR2</td><td>四级分类</td><td>四级分类</td><td>非必填；值集CRM.PRODUCT_CLASS；级联父级THR_CATEGORY；新建后不可修改</td></tr>
<tr><td>PROD_UNIT</td><td>VARCHAR2</td><td>产品单位</td><td>-</td><td>当前未在界面展示</td></tr>
<tr><td>PRICE_TYPE</td><td>VARCHAR2</td><td>定价类型</td><td>定价类型</td><td>必填；值集CRM.LNK_RSP_STM_CGF_PRICE_TYPE</td></tr>
<tr><td>PROPORTION</td><td>NUMBER</td><td>定价比例</td><td>定价比例</td><td>条件必填（priceType为base_gross_margin或standard_price_ratio时）；范围0~999999</td></tr>
<tr><td>REMARKS</td><td>VARCHAR2</td><td>备注</td><td>备注</td><td>非必填；最大长度255</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>乐观锁版本号</td><td>-</td><td>@VersionAudit自动维护</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>创建时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>CREATED_BY</td><td>NUMBER</td><td>创建人ID</td><td>创建人</td><td>@ModifyAudit自动填充，关联HZERO.IAM_USER</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>最后更新时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>NUMBER</td><td>最后更新人ID</td><td>最后更新人</td><td>@ModifyAudit自动填充，关联HZERO.IAM_USER</td></tr>
</tbody>
</table>
<blockquote>重复分类校验SQL（Mapper: queryRepeatCategory）：</blockquote>

```sql
SELECT T1.ROW_ID AS id, T1.STATUS AS status, ...
FROM LNK_PM_RSP_STM_CFG T1
WHERE T1.TOP_CATEGORY = #{topCategory}
    AND T1.SEC_CATEGORY = #{secCategory}
    AND T1.THR_CATEGORY = #{thrCategory}
    AND T1.STATUS = 'valid'
    AND T1.FOUR_CATEGORY = #{fourCategory}  -- fourCategory非空时
    -- OR T1.FOUR_CATEGORY IS NULL          -- fourCategory为空时
    AND T1.ROW_ID != #{id}                  -- 排除自身
```
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>一级分类不能为空！</td><td>保存按钮</td><td>未选择一级分类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>二级分类不能为空！</td><td>保存按钮</td><td>未选择二级分类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>三级分类不能为空！</td><td>保存按钮</td><td>未选择三级分类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>定价类型不能为空！</td><td>保存按钮</td><td>未选择定价类型</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>当前定价类型下，定价比例不能为空！</td><td>保存按钮</td><td>定价类型为base_gross_margin或standard_price_ratio但未填定价比例</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>一二三级分类/一二三四级分类生效数据已存在，请核对数据！</td><td>保存按钮</td><td>同一分类组合已存在有效配置</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>保存失败</td><td>保存按钮</td><td>后端返回failed或业务校验异常，经commonFn_showErrMsg展示</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>保存异常，请稍后重试</td><td>保存按钮</td><td>网络异常或后端服务不可用，前端catch块提示</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>查询失败</td><td>列表查询/详情加载</td><td>接口请求异常或后端抛出CommonException</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>权限不足</td><td>页面访问/按钮操作</td><td>当前用户未分配hzero.product_data.rsp_stm.cfg.ps.*权限编码</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>暂无数据</td><td>列表查询</td><td>查询结果为空集</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>会话过期</td><td>任意操作</td><td>登录态失效或Token过期</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>当前有未保存的更改，确定要离开吗？</td><td>返回按钮</td><td>编辑模式下点击返回，前端Modal.confirm确认</td><td>确认弹窗</td><td>[查看]</td></tr>
</tbody>
</table>
<blockquote><strong>分类非空校验详细逻辑</strong>：
后端validateRequiredFields方法逐一检查topCategory、secCategory、thrCategory、priceType是否为空，为空则抛出对应异常。</blockquote>
<h4>报错1：一级分类不能为空！</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，未选择一级分类（TOP_CATEGORY字段）</li><li><strong>逻辑分析</strong>：后端validateRequiredFields方法校验TOP_CATEGORY非空。一级分类是定价配置的基础维度，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT C.ID, C.TOP_CATEGORY AS 一级分类, C.SEC_CATEGORY AS 二级分类,
         C.THR_CATEGORY AS 三级分类, C.PRICE_TYPE AS 定价类型
  FROM LNK_PM_RSP_STM_CFG C
  WHERE C.ID = :configId AND C.TOP_CATEGORY IS NULL;
```
<h4>报错2：二级分类不能为空！</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，未选择二级分类（SEC_CATEGORY字段）</li><li><strong>逻辑分析</strong>：后端校验SEC_CATEGORY非空。二级分类级联一级分类，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT C.ID, C.TOP_CATEGORY AS 一级分类, C.SEC_CATEGORY AS 二级分类
  FROM LNK_PM_RSP_STM_CFG C
  WHERE C.ID = :configId AND C.SEC_CATEGORY IS NULL;
```
<h4>报错3：三级分类不能为空！</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，未选择三级分类（THR_CATEGORY字段）</li><li><strong>逻辑分析</strong>：后端校验THR_CATEGORY非空。三级分类级联二级分类，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT C.ID, C.SEC_CATEGORY AS 二级分类, C.THR_CATEGORY AS 三级分类
  FROM LNK_PM_RSP_STM_CFG C
  WHERE C.ID = :configId AND C.THR_CATEGORY IS NULL;
```
<h4>报错4：定价类型不能为空！</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，未选择定价类型（PRICE_TYPE字段）</li><li><strong>逻辑分析</strong>：后端校验PRICE_TYPE非空。定价类型决定定价计算方式，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT C.ID, C.TOP_CATEGORY AS 一级分类, C.PRICE_TYPE AS 定价类型
  FROM LNK_PM_RSP_STM_CFG C
  WHERE C.ID = :configId AND C.PRICE_TYPE IS NULL;
```
<blockquote><strong>"当前定价类型下，定价比例不能为空！"详细逻辑</strong>：
后端validateProportion方法，当priceType为base_gross_margin或standard_price_ratio且proportion为null时抛出异常。
排查SQL：</blockquote>

```sql
SELECT * FROM LNK_PM_RSP_STM_CFG
WHERE PRICE_TYPE IN ('base_gross_margin', 'standard_price_ratio')
    AND PROPORTION IS NULL;
```
<blockquote><strong>"一二三级分类/一二三四级分类生效数据已存在，请核对数据！"详细逻辑</strong>：
后端checkRepeatCategory方法，当status=valid时查询相同分类组合的有效记录，存在则抛出异常。
排查SQL：</blockquote>

```sql
SELECT TOP_CATEGORY, SEC_CATEGORY, THR_CATEGORY, FOUR_CATEGORY, COUNT(*) AS cnt
FROM LNK_PM_RSP_STM_CFG
WHERE STATUS = 'valid'
GROUP BY TOP_CATEGORY, SEC_CATEGORY, THR_CATEGORY, FOUR_CATEGORY
HAVING COUNT(*) > 1;
```
<h4>报错7：保存失败</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，后端接口返回res.failed=true或抛出CommonException</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleSave调用rspStmCfgApi.save后，若res.failed为true则通过commonFn_showErrMsg展示后端错误信息。常见于后端校验异常（分类唯一性、必填校验）被前端捕获并展示。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT C.ROW_ID AS 配置ID, C.RSP_STM_CODE AS 配置编码, C.STATUS AS 状态,
         C.TOP_CATEGORY AS 一级分类, C.SEC_CATEGORY AS 二级分类,
         C.THR_CATEGORY AS 三级分类, C.FOUR_CATEGORY AS 四级分类
  FROM LNK_PM_RSP_STM_CFG C
  WHERE C.STATUS = 'valid'
  ORDER BY C.LAST_UPDATE_DATE DESC;
```
<h4>报错8：保存异常，请稍后重试</h4>
<ul><li><strong>触发条件</strong>：保存按钮点击时，请求抛出异常进入catch块</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleSave的try-catch块，当网络异常、服务不可用、超时等非业务异常时，notification.error提示"保存异常，请稍后重试"。属于兜底异常处理。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '检查后端服务连通性与数据库连接状态' AS 排查方向 FROM DUAL;
```
<h4>报错9：查询失败</h4>
<ul><li><strong>触发条件</strong>：列表页查询或详情页加载时，接口请求异常</li><li><strong>逻辑分析</strong>：前端DataSet的transport.read请求后端/v1/&#123;organizationId&#125;/rspStmCfg接口，若后端抛出CommonException或网络异常，DataSet自动展示错误提示。常见于数据库连接异常、SQL执行错误。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT COUNT(1) AS 总记录数 FROM LNK_PM_RSP_STM_CFG;
```
<h4>报错10：权限不足</h4>
<ul><li><strong>触发条件</strong>：用户访问页面或点击按钮时，未拥有对应权限编码</li><li><strong>逻辑分析</strong>：前端Button组件通过permissionList配置权限编码（如hzero.product_data.rsp_stm.cfg.ps.add、hzero.product_data.rsp_stm.cfg.ps.import、hzero.product_data.rsp_stm.cfg.ps.export），HZERO平台校验当前用户角色是否包含该权限编码，未包含则按钮不可见或不可点击。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT U.REAL_NAME AS 用户名, R.NAME AS 角色名, P.CODE AS 权限编码
  FROM HZERO.IAM_USER U
    JOIN HZERO.IAM_MEMBER M ON U.ID = M.MEMBER_ID
    JOIN HZERO.IAM_ROLE R ON M.ROLE_ID = R.ID
    JOIN HZERO.IAM_ROLE_PERMISSION RP ON R.ID = RP.ROLE_ID
    JOIN HZERO.IAM_PERMISSION P ON RP.PERMISSION_ID = P.ID
  WHERE P.CODE LIKE 'hzero.product_data.rsp_stm.cfg.ps.%';
```
<h4>报错11：暂无数据</h4>
<ul><li><strong>触发条件</strong>：列表页查询结果为空集</li><li><strong>逻辑分析</strong>：前端Table组件查询后端返回content为空数组或totalElements=0时，自动展示"暂无数据"占位。属于正常业务场景，非异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT COUNT(1) AS 记录数 FROM LNK_PM_RSP_STM_CFG WHERE STATUS = 'valid';
```
<h4>报错12：会话过期</h4>
<ul><li><strong>触发条件</strong>：任意操作时，登录态失效或Token过期</li><li><strong>逻辑分析</strong>：HZERO平台网关层校验请求头中的Authorization Token，若Token过期或无效，返回401状态码，前端拦截器跳转登录页。常见于长时间未操作或单点登录会话超时。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '检查HZERO.IAM_USER_TOKEN表或SSO会话状态' AS 排查方向 FROM DUAL;
```
<h4>报错13：当前有未保存的更改，确定要离开吗？</h4>
<ul><li><strong>触发条件</strong>：编辑模式下点击返回按钮</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleBack方法，当editFlag为true时弹出Modal.confirm确认框，用户确认后关闭tab并跳转列表页，取消则留在当前页。防止用户误操作丢失未保存数据。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '前端确认弹窗，无需SQL排查' AS 提示 FROM DUAL;
```
</KbCard>

<KbCard title="常见问题">
<ul><li>问题1：编辑时为什么不能修改产品分类？</li><li>原因：编辑时分类字段disabled=!isNew=true，防止修改分类导致唯一性冲突</li><li>解决思路：如需修改分类，新建一条配置并将原配置失效</li></ul>
<ul><li>问题2：定价比例什么时候必填？</li><li>原因：当定价类型为base_gross_margin（基础毛利率）或standard_price_ratio（标准价比率）时，定价比例必填</li><li>解决思路：选择这两种定价类型时务必填写定价比例</li></ul>
<ul><li>问题3：配置编码如何生成？</li><li>原因：新建保存时通过编码规则CRM.RSP_STM_CFG_CODE自动生成</li><li>解决思路：配置编码由系统自动生成，无需手动输入</li></ul>
<ul><li>问题4：四级分类为空时如何做唯一性校验？</li><li>原因：SQL中当fourCategory为空时，匹配条件为FOUR_CATEGORY IS NULL</li><li>解决思路：四级分类非必填，为空时按一二三级分类做唯一性校验</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="changelog" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="更新记录">
<table class="kb-field-tbl">
<thead>
<tr><th>日期</th><th>提交ID</th><th>提交人</th><th>提交内容</th></tr>
</thead>
<tbody>
<tr><td>2026-06-02</td><td>-</td><td>-</td><td>初始创建：责任制内结价定价基础参数配置功能</td></tr>
</tbody>
</table>
</KbCard>
</div>
</div>
</div>

<div id="history" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="历史排查记录">

<!-- 空白:待补充 -->

</KbCard>
</div>
</div>
</div>