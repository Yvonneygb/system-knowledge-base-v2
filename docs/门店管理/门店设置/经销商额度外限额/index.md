<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>维护什么</h2>
    <p>为每个经销商门店组合配置额度外限额预算，控制额度外可报销上限</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M8 4.5V8L10.5 9.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">限额构成</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">额度外限额的设置维度</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>组合配置</strong> — 按经销商 + 门店组合设置额度外限额</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>含税/不含税</strong> — 同时维护含税与不含税两套额度，支持相互换算</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>上年结转</strong> — 支持额度调整与上年额度结转到本年度</div>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L12 5V11L8 14L4 11V5Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">额度跟踪</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">额度使用情况的跟踪口径</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>月度跟踪</strong> — 按当年 1~12 月逐月记录已用额度，并预占下年度额度</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>累计与剩余</strong> — 累计已用额度等于各月之和，剩余额度等于总额减累计已用</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>影响范围</h2>
    <p>额度外限额配置被哪些下游模块引用</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M5.5 8L7.5 10L11 5.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">门店验收报销</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门店验收报销据此判断是否超额，控制额度外支出。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">额度外预算调整</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">额度外预算调整基于该限额进行占用与释放。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>限额原则：</strong>额度外限额是控制经销商超额支出的关键依据，配置时需结合经销商年度规划，并随时关注月度使用与剩余情况。
  </div>
</div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
<h4 class="bf-main-title">【经销商额度外限额】 — 全链路流程图</h4>
<p class="bf-main-sub">开始 → ★维护额度外限额★ → 保存生效 → 结束（下游验收报销据此判断超额）</p>
<div class="bf-fc-svg-wrap">
<svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg">
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
<text x="340" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">事业部</text>
<rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">经销主档</text>
<rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">门店主档</text>
<rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">交易公司</text>
<rect x="800" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="860" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">开票单元</text>
<line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
<rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
<line x1="600" y1="194" x2="600" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="515" y="210" width="170" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
<text x="600" y="234" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★维护额度外限额★</text>
<text x="600" y="254" text-anchor="middle" fill="#DCFCE7" font-size="10">选经销商/门店·录入限额·保存</text>
<line x1="600" y1="264" x2="600" y2="292" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="520" y="292" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
<text x="600" y="319" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">保存生效</text>
<line x1="600" y1="336" x2="600" y2="364" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="545" y="364" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="391" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
<line x1="600" y1="408" x2="600" y2="428" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
<rect x="50" y="428" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="600" y="450" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
<rect x="440" y="462" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="515" y="485" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店验收报销</text>
<rect x="610" y="462" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="685" y="485" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">额度外预算调整</text>
</svg>
</div>
<div class="bf-fc-legend">
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑服务</span>
<span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝/驳回</span>
</div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：广告费余额查询">
<ul><li><strong>业务意义</strong>：查询经销商的广告费可用余额，用于兑现/关闭扣减校验</li><li><strong>具体逻辑描述</strong>：</li><li>按事业部ID+开票单位编码+交易公司编码查询</li><li>返回可用余额(canUseAmount)</li><li>余额≤0时取0</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：额度内可用余额查询">
<ul><li><strong>业务意义</strong>：查询经销商额度内可用余额，用于额度内兑现校验</li><li><strong>具体逻辑描述</strong>：</li><li>按经销商ID+事业部ID查询</li><li>返回额度内可用余额</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<p>本页面为hlod低代码页面，无独立前端源码，基于后端API梳理。</p>
<h4>头部信息区</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>经销商编码</td><td>CUST_CODE</td><td>TextField</td><td>经销商编码</td><td>始终</td><td>查询条件</td></tr>
<tr><td>经销商名称</td><td>CUST_NAME</td><td>TextField</td><td>经销商名称</td><td>始终</td><td>查询条件</td></tr>
<tr><td>事业部</td><td>DIVISION_ID</td><td>Select</td><td>事业部</td><td>始终</td><td>查询条件</td></tr>
<tr><td>交易公司</td><td>TRADING_COMPANY_CODE</td><td>TextField</td><td>交易公司</td><td>始终</td><td>查询条件</td></tr>
<tr><td>开票单位</td><td>BILLING_UNIT_CODE</td><td>TextField</td><td>开票单位</td><td>始终</td><td>查询条件</td></tr>
<tr><td>可用余额</td><td>CAN_USE_AMOUNT</td><td>NumberField</td><td>广告费可用余额</td><td>始终</td><td>系统计算</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口</th><th>方法</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>广告费余额查询</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/query-resource-amt`</td><td>查询广告费可用余额</td></tr>
<tr><td>余额数量查询</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/query-amt`</td><td>查询余额数量</td></tr>
<tr><td>导出</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/export`</td><td>导出经销商额度外限额</td></tr>
<tr><td>额度内可用余额</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/in-can-use-amt`</td><td>查询额度内可用余额</td></tr>
<tr><td>发票兑现额度内可用余额</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/invoice-in-can-use-amt`</td><td>查询发票兑现额度内可用余额</td></tr>
<tr><td>自营工程签收查询合同金额</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-inlimit-balance-headers/query-contract-amt`</td><td>自营工程签收查询合同金额</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<p>本页面无选择弹窗。</p>
</KbCard>

<KbCard title="导入">
<p>本页面无导入功能。</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>触发条件</th><th>执行逻辑</th><th>接口调用</th></tr>
</thead>
<tbody>
<tr><td>导出</td><td>任意</td><td>导出经销商额度外限额列表</td><td>GET /export</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="保存校验">
<p>本页面为查询页面，无保存校验。</p>
</KbCard>

<KbCard title="提交校验">
<p>本页面为查询页面，无提交校验。</p>
</KbCard>

<KbCard title="状态机">
<p>本页面为查询页面，无状态机。</p>
</KbCard>

<KbCard title="工作流">
<p>本页面无工作流。</p>
</KbCard>

<KbCard title="MKT_INLIMIT_BALANCE_HEADER（经销商额度外限额头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>DIVISION_ID</td><td>Long</td><td>事业部ID</td><td>事业部</td><td>查询条件</td></tr>
<tr><td>CUST_ID</td><td>Long</td><td>经销商ID</td><td>-</td><td>查询条件</td></tr>
<tr><td>CUST_CODE</td><td>String</td><td>经销商编码</td><td>经销商编码</td><td>查询条件</td></tr>
<tr><td>CUST_NAME</td><td>String</td><td>经销商名称</td><td>经销商名称</td><td>查询条件</td></tr>
<tr><td>TRADING_COMPANY_CODE</td><td>String</td><td>交易公司编码</td><td>交易公司</td><td>查询条件</td></tr>
<tr><td>BILLING_UNIT_CODE</td><td>String</td><td>开票单位编码</td><td>开票单位</td><td>查询条件</td></tr>
<tr><td>CAN_USE_AMOUNT</td><td>BigDecimal</td><td>可用余额</td><td>可用余额</td><td>系统计算</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="MKT_INLIMIT_BALANCE_DETAILS（经销商额度外限额明细表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>HEADER_ID</td><td>Long</td><td>头表ID</td><td>-</td><td>关联头表</td></tr>
<tr><td>AMT</td><td>BigDecimal</td><td>金额</td><td>-</td><td>系统维护</td></tr>
</tbody>
</table>
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>查询参数不完整</td><td>queryResourceAmt</td><td>缺少必要的查询参数</td><td>中</td><td style="text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>页面单次查询最大1000条</td><td>query/getHeaderBalanceByTime</td><td>分页查询size超过1000，减小查询分页大小</td><td>中</td><td style="text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>广告费余额查询事业部信息异常</td><td>processAdvert</td><td>事业部基础设置不存在，确认事业部已建档</td><td>高</td><td style="text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>开始-结束时间不能为空</td><td>getDetailDate</td><td>明细查询未传入开始或结束时间，补全时间参数</td><td>中</td><td style="text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
<tr><td>开始时间需小于结束时间</td><td>getDetailDate</td><td>开始时间晚于结束时间，修正时间区间</td><td>中</td><td style="text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
</tbody>
</table>
</KbCard>

<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>查询参数不完整</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用queryResourceAmt(广告费余额查询)接口时，传入的divisionId(事业部ID)、billingUnitCode(开票单位编码)、tradingCompanyCode(交易公司编码)等必要参数中存在null或空值<br><strong>逻辑分析：</strong>广告费可用余额查询依赖事业部+开票单位+交易公司三要素定位MKT_INLIMIT_BALANCE_HEADER记录，三者构成余额定位的唯一业务键。若前端未选择事业部、开票单位或交易公司即点击查询，或LOV选择后未正确回传编码，后端校验参数为空即抛出"查询参数不完整"异常，无法执行余额计算逻辑。该异常为非阻断性提示，用户补全参数后可重新查询。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.division_id            AS 事业部ID,
         h.cust_code              AS 经销商编码,
         h.cust_name              AS 经销商名称,
         h.trading_company_code   AS 交易公司编码,
         h.billing_unit_code      AS 开票单位编码,
         h.can_use_amount         AS 可用余额
  FROM   mkt_inlimit_balance_header h
  WHERE  h.division_id IS NULL
  OR     h.trading_company_code IS NULL
  OR     h.billing_unit_code IS NULL
  ORDER  BY h.cust_code;</code></pre>
  </div>
</div>

<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>页面单次查询最大1000条</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用query(广告费余额列表查询)接口且传入时间区间（startTime和endTime均不为空）时，进入getHeaderBalanceByTime方法，校验pageRequest.getSize()超过AeBaseConstants.MAX_SEARCH_MUM(1000)<br><strong>逻辑分析：</strong>广告费余额时间区间查询需联表计算期初/期末余额，单次查询数据量过大易导致数据库性能问题与内存溢出。后端在getHeaderBalanceByTime方法入口校验分页size，若前端传入的pageSize(如hlod低代码页面配置的pageSize)大于1000，即抛出"页面单次查询最大1000条"阻断性异常，阻止大范围余额查询。该异常为非阻断性提示，用户减小分页大小后可重新查询。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.division_id            AS 事业部ID,
         h.cust_code              AS 经销商编码,
         h.cust_name              AS 经销商名称,
         h.trading_company_code   AS 交易公司编码,
         h.billing_unit_code      AS 开票单位编码,
         COUNT(*)                 AS 余额记录数
  FROM   mkt_inlimit_balance_header h
  GROUP  BY h.division_id, h.cust_code, h.cust_name,
            h.trading_company_code, h.billing_unit_code
  HAVING COUNT(*) &gt; 1000
  ORDER  BY COUNT(*) DESC;</code></pre>
  </div>
</div>

<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>广告费余额查询事业部信息异常</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用processAdvert(处理执行日期法人广告费余额)接口时，按queryDTO.getDivisionId()调用divisionBaseSetService.selectByPrimaryKey查询DivisionBaseSet返回null<br><strong>逻辑分析：</strong>processAdvert方法用于处理执行日期的法人广告费余额，需按事业部ID查询事业部基础设置(DivisionBaseSet)获取事业部名称、组织ID等信息写入MKT_INLIMIT_BALANCE_HEADER。若广告费余额查询传入的divisionId对应的事业部基础设置记录不存在（如事业部未建档、事业部已停用、divisionId为错误值），selectByPrimaryKey返回null，后端抛出"广告费余额查询事业部信息异常"阻断性异常，后续设置divisionId/entid/entname等字段均无法进行。该异常为阻断性错误，需确认事业部基础设置已正确建档。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT d.division_id            AS 事业部ID,
         d.division_name          AS 事业部名称,
         d.organization_id        AS 组织ID,
         d.enabled                AS 是否启用
  FROM   division_base_set d
  WHERE  d.division_id = #{传入的divisionId};</code></pre>
  </div>
</div>

<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>开始-结束时间不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用getDetailDate(广告费余额明细查询)接口时，传入的startTime或endTime为null或空字符串<br><strong>逻辑分析：</strong>getDetailDate方法用于查询广告费余额往来明细，需按startTime至endTime时间区间过滤MKT_INLIMIT_BALANCE_DETAILS记录。若前端未选择时间区间即点击查询，或定时任务调用时未传入时间参数，StringUtil.isEmpty校验startTime或endTime为空即抛出"开始-结束时间不能为空"阻断性异常，后续DateUtil.startOfDay解析空字符串会抛空指针。该异常为非阻断性提示，用户补全时间区间后可重新查询。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT d.header_id              AS 头表ID,
         d.amt                    AS 金额,
         d.start_time             AS 开始时间,
         d.end_time               AS 结束时间
  FROM   mkt_inlimit_balance_details d
  WHERE  d.start_time IS NULL
  OR     d.end_time IS NULL;</code></pre>
  </div>
</div>

<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>开始时间需小于结束时间</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用getDetailDate(广告费余额明细查询)接口时，传入的startTime经DateUtil.startOfDay解析后的startDate不早于endTime经DateUtil.endOfDay解析后的endDate（即startDate.isAfter(endDate)为true）<br><strong>逻辑分析：</strong>getDetailDate方法按时间区间过滤MKT_INLIMIT_BALANCE_DETAILS记录，要求startTime &lt; endTime确保区间非空。若前端日期控件选择时误将开始时间晚于结束时间（如跨年查询时年份选错），或定时任务传入时间区间倒置，startDate.isAfter(endDate)为true即抛出"开始时间需小于结束时间"阻断性异常，查询结果为空集无业务意义。该异常为非阻断性提示，用户修正时间区间后可重新查询。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT d.header_id              AS 头表ID,
         d.amt                    AS 金额,
         d.start_time             AS 开始时间,
         d.end_time               AS 结束时间
  FROM   mkt_inlimit_balance_details d
  WHERE  d.start_time &gt; d.end_time;</code></pre>
  </div>
</div>

<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="Q1：查询无数据">
<p><strong>根因</strong>：经销商/事业部/交易公司组合无额度记录</p>
<p><strong>解决方案</strong>：确认MKT_INLIMIT_BALANCE_HEADER中存在对应记录</p>
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
<tr><td>2026-08-30</td><td>-</td><td>-</td><td>按skill规范重写业务逻辑梳理MD文件</td></tr>
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