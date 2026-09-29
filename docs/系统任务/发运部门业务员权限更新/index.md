<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>发运部门业务员权限更新是什么</h2>
    <p>按CRM发运记录同步更新经销商业务员权限的调度任务</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"/><path d="M8 5V8L10.2 9.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">任务性质</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">后台调度任务（HZERO调度平台，无前端页面）</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>调度标识</strong> — @JobHandler("shippedSynRecordJob")，分布式锁 SHIPPED_SYNC_RECORD_JOB。</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>任务编码</strong> — com.arrow.dms.ae.biz.job.api.ShippedSynRecordJob#execute。</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>所在模块</strong> — ae-business / biz / basic（客户访问控制）。</div>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#22C55E);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 8L7.5 9.5L10 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">业务定位</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">经销商业务员权限的数据同步来源</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>数据来源</strong> — 定期拉取时间范围内的CRM发运数据，同步到DMS。</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>下游支撑</strong> — 同步的业务员权限（customer_access_ctrl）被经销商选择授权使用。</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 流程</span>
    <h2>发运部门业务员权限更新怎么流转</h2>
    <p>调度触发 → CRM外呼 → 权限更新，全链路闭环</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h3l2-4 2 8 2-4h3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>调度触发</h5>
      <small>HZERO调度平台<br />按配置定期触发</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#8B5CF6,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"/><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>读取字典</h5>
      <small>读取发运部门字典<br />AE.Shipped_Department</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#3B82F6,#60A5FA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11l4-4 3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4h4v4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>CRM外呼</h5>
      <small>anchor游标分页<br />拉取时间范围内发运数据</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#16A34A,#22C55E);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L6.5 12L13 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>权限更新</h5>
      <small>部门过滤+校验后<br />更新业务员权限</small>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">发运部门业务员权限更新 — 全链路流程图</h4>
  <p class="bf-main-sub">调度触发 → ★shippedSynRecordJob★ → 读取发运部门字典 → CRM外呼(anchor分页) → 部门过滤 → 权限更新</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="60" rx="8" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="55" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">HZERO调度平台（shippedSynRecordJob，分布式锁SHIPPED_SYNC_RECORD_JOB）</text>
      <line x1="600" y1="80" x2="600" y2="115" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="430" y="115" width="340" height="50" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="137" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★ShippedSynRecordJob★</text>
      <text x="600" y="155" text-anchor="middle" fill="#DCFCE7" font-size="10">CustomerAccessCtrlService.shippedSynRecordByCrm</text>
      <line x1="600" y1="165" x2="600" y2="200" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="430" y="200" width="340" height="50" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="222" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">读取发运部门字典</text>
      <text x="600" y="240" text-anchor="middle" fill="#166534" font-size="10">值集AE.Shipped_Department（未维护直接报错）</text>
      <line x1="600" y1="250" x2="600" y2="285" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="390" y="285" width="420" height="50" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
      <text x="600" y="307" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">CRM外呼（SHIPPED_SYNC_RECORD_BY_CRM）</text>
      <text x="600" y="325" text-anchor="middle" fill="#1D4ED8" font-size="10">anchor游标分页 · 时间范围startTime~endTime（调度配置）</text>
      <line x1="600" y1="335" x2="600" y2="370" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="390" y="370" width="420" height="50" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
      <text x="600" y="392" text-anchor="middle" fill="#9A3412" font-size="13" font-weight="600">部门过滤 + 逐条校验</text>
      <text x="600" y="410" text-anchor="middle" fill="#9A3412" font-size="10">department须在字典内 · 经销商编码/业务员工号非空 · 经销商须存在</text>
      <line x1="600" y1="420" x2="600" y2="455" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="430" y="455" width="340" height="50" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="477" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">更新业务员权限（customer_access_ctrl）</text>
      <text x="600" y="495" text-anchor="middle" fill="#166534" font-size="10">事务批量提交 · 成功计入rsCount / 失败计入errorCount</text>
      <line x1="600" y1="505" x2="600" y2="540" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="430" y="540" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="567" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">输出"同步失败N条"日志并结束</text>
      <rect x="50" y="600" width="1100" height="30" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="620" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">下游影响：经销商选择授权（区域经理按customer_access_ctrl授权过滤可见经销商）</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 调度平台</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> CRM外呼</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="调度查询的数据范围 {查询范围}">
<KbQuote>
<strong>数据范围</strong> —— 查的是 CRM 系统，不是 DMS 本地表
</KbQuote>
<ul>
<li>数据源：CRM外呼接口SHIPPED_SYNC_RECORD_BY_CRM（CrmSdkServiceImpl.getQuerySynchroDataByAnchor）</li>
<li>时间范围：startTime ~ endTime —— 调度参数非空时取调度配置的时间（且endTime收敛为startTime）；否则取调度任务默认时间范围</li>
<li>分页方式：anchor游标分页，循环拉取直到CRM返回空（do-while）</li>
<li>发运部门过滤：CRM返回的department字段必须在值集<strong>AE.Shipped_Department</strong>（发运部门字典）内，字典未维护直接报错"发运部门字典未维护"，不在字典内的记录跳过不处理</li>
</ul>
<p><strong>CRM外呼入参：</strong></p>
<pre class="detail-sql language-sql" v-pre><code>anchor     -- 游标（首次为null，之后取上一批最后一条的anchor）
startTime  -- 调度配置的开始时间
endTime    -- 调度配置的结束时间</code></pre>
</KbCard>

<KbCard num="2" title="业务员权限更新处理 {权限更新}">
<KbQuote>
<strong>核心方法</strong> —— CustomerAccessCtrlServiceImpl.shippedSynRecordByCrm → processSynDate（事务批量提交）
</KbQuote>
<ul>
<li>校验1：发运部门字典 —— 值集AE.Shipped_Department为空则抛出"发运部门字典未维护"</li>
<li>校验2：department为空或不在字典内的记录跳过（continue）</li>
<li>校验3：经销商编码（acctCode）非空 —— 为空报错"经销商编码不能为空"</li>
<li>校验4：业务员工号（masterEmpUserName）非空 —— 为空报错"业务员工号不能为空"</li>
<li>校验5：通过经销商编码查询customer表获取经销商ID —— 经销商不存在则报错</li>
<li>更新：customer_access_ctrl（业务员权限），成功的计入rsCount，失败计入errorCount</li>
<li>结束：全部批次处理完后输出"同步失败N条"日志</li>
</ul>
</KbCard>
</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="调度参数（HZERO调度平台配置）">
<blockquote>调度平台可配置参数时间范围；不传参数时使用任务默认时间范围</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>参数</th><th>说明</th><th>来源</th></tr>
</thead>
<tbody>
<tr><td>startTime</td><td>同步开始时间</td><td>调度参数 / 任务默认</td></tr>
<tr><td>endTime</td><td>同步结束时间（调度参数非空时收敛为startTime）</td><td>调度参数 / 任务默认</td></tr>
<tr><td>anchor</td><td>CRM分页游标（首次为null）</td><td>任务内部维护</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="关键源码">
<blockquote>涉及的核心类与位置</blockquote>
<ul>
<li>调度入口：ShippedSynRecordJob.java（@JobHandler("shippedSynRecordJob")，executeBusiness组装ShippedSynRecordDTO）</li>
<li>同步逻辑：CustomerAccessCtrlServiceImpl.java（L68-109 shippedSynRecordByCrm、L111+ processSynDate）</li>
<li>CRM外呼：CrmSdkServiceImpl.java（L499-521 getQuerySynchroDataByAnchor，入参anchor/startTime/endTime）</li>
<li>下游使用：CustomerOrgMapper.selectValid（区域经理按customer_access_ctrl授权过滤）</li>
</ul>
</KbCard>
</div>
</div>
</div>

<div id="permission" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="权限控制">
<blockquote>后台调度任务，无前端页面权限控制</blockquote>
<ul>
<li>任务由HZERO调度平台配置触发，需在调度平台配置任务（shippedSynRecordJob）与调度周期</li>
<li>CRM外呼使用系统级接口认证（Authorization token），不涉及用户级权限</li>
<li>同步的数据（customer_access_ctrl）为系统级数据，供经销商选择授权的授权过滤使用</li>
</ul>
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
<tr><td>发运部门字典未维护：字典值 AE.Shipped_Department</td><td>任务执行时</td><td>发运部门值集未配置。在值集管理中维护AE.Shipped_Department字典</td><td>高</td><td style="text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>经销商编码不能为空</td><td>同步处理时</td><td>CRM发运数据中acctCode为空。核查CRM侧发运记录的经销商编码</td><td>中</td><td style="text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>业务员工号不能为空</td><td>同步处理时</td><td>CRM发运数据中masterEmpUserName为空。核查CRM侧发运记录的业务员工号</td><td>中</td><td style="text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>经销商为空,编码:[xxx]</td><td>同步处理时</td><td>按经销商编码查customer表不存在。核查经销商主数据是否已创建该编码</td><td>中</td><td style="text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
</tbody>
</table>
<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>发运部门字典未维护：字典值 AE.Shipped_Department</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调度任务执行时，读取值集AE.Shipped_Department返回空<br /><strong>逻辑分析：</strong>shippedSynRecordByCrm方法首先读取发运部门字典（LovConstant.AE_SHIPPED_DEPARTMENT），字典为空时无法对CRM发运数据的department做合法性过滤，抛出CommonException阻断任务执行。需在值集管理中维护AE.Shipped_Department字典</div>
    <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT lv.value, lv.meaning
  FROM hzero.lov_value lv
  INNER JOIN hzero.lov lvhdr ON lv.lov_id = lvhdr.lov_id
  WHERE lvhdr.lov_code = 'AE.Shipped_Department'
  -- 查出发运部门字典的配置值，确认是否已维护</code></pre>
  </div>
</div>

<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>经销商编码不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>同步处理时，CRM发运数据中经销商编码（acctCode）字段为空<br /><strong>逻辑分析：</strong>processSynDate方法校验acctCode非空，经销商编码是关联customer表的关键字段，为空将无法定位经销商，同步跳过该条。需核查CRM侧发运记录的经销商编码</div>
    <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>-- CRM侧数据核查（外呼接口返回），DMS侧按编码校验：
SELECT c.CUSTOMER_ID, c.CUSTOMER_CODE, c.CUSTOMER_NAME
  FROM customer c
  WHERE c.CUSTOMER_CODE IS NULL
  -- 核查DMS经销商主数据编码完整性</code></pre>
  </div>
</div>

<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>业务员工号不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>同步处理时，CRM发运数据中业务员工号（masterEmpUserName）字段为空<br /><strong>逻辑分析：</strong>processSynDate方法校验业务员工号非空，业务员工号是建立经销商与业务员权限关联的关键字段，为空将无法写入权限数据，同步跳过该条。需核查CRM侧发运记录的业务员工号</div>
    <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT ac.CUSTOMER_ID, ac.USERID, ac.CREATION_DATE
  FROM customer_access_ctrl ac
  ORDER BY ac.CREATION_DATE DESC
  -- 查看最近的业务员权限同步记录，确认同步是否正常</code></pre>
  </div>
</div>

<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>经销商为空,编码:[xxx]</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>同步处理时，按CRM发运数据的经销商编码查询customer表返回空<br /><strong>逻辑分析：</strong>processSynDate按acctCode查询customer表，若经销商主数据中不存在该编码（编码不一致或经销商未创建），无法写入权限数据。需在经销商主数据中维护该编码的经销商</div>
    <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT c.CUSTOMER_ID, c.CUSTOMER_CODE, c.CUSTOMER_NAME
  FROM customer c
  WHERE c.CUSTOMER_CODE = 'xxx'
  -- 将xxx替换为报错日志中的经销商编码，确认主数据是否存在</code></pre>
  </div>
</div>
</KbCard>

<KbCard title="常见问题">

<div class="faq-qa-wrap">
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q1</span>
    <span style="font-size:15px;">调度任务执行但经销商权限没有更新</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>CRM发运数据的department不在发运部门字典内被跳过，或时间范围配置未覆盖发运时间<br /><strong style="color:#7C3AED;">处理：</strong>核查值集AE.Shipped_Department的配置值与CRM返回的department是否匹配，并确认调度参数的时间范围
  </div>
</div>
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q2</span>
    <span style="font-size:15px;">区域经理看不到某经销商</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>经销商不在customer_access_ctrl授权范围内（该经销商无发运记录或未同步）<br /><strong style="color:#7C3AED;">处理：</strong>确认CRM侧该经销商是否有发运记录，等待本调度任务同步
  </div>
</div>
</div>
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
<tr><td>2026-09-29</td><td>-</td><td>-</td><td>新建页面，基于后端代码梳理调度任务逻辑（ShippedSynRecordJob）</td></tr>
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

<div id="manual" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="操作手册">
<blockquote>本任务为后台调度任务，无前端页面操作</blockquote>
<ul>
<li>任务由HZERO调度平台配置触发，需在调度平台维护任务shippedSynRecordJob的调度周期</li>
<li>可在调度参数中配置同步时间范围（startTime/endTime）；不配置时使用任务默认时间范围</li>
<li>任务执行日志可在调度平台查看，输出同步成功条数与"同步失败N条"信息</li>
<li>同步异常时按"常见问题FAQ"中的报错信息排查</li>
</ul>
</KbCard>
</div>
</div>
</div>
