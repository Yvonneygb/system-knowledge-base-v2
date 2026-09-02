<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">业务是什么</span>
    <h2>项目到款引入</h2>
    <p>将ERP回传的到款数据同步引入系统，作为后续认领、兑付与虚拟单的业务源头</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M2 12L6 8L10 10L14 4"/><path d="M11 4H14V7"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">为何要引入到款</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">解决两个业务诉求</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>统一口径</strong> — 将ERP到款集中引入，业务侧统一认领与核销</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>可追溯</strong> — 每笔引入记录来源与状态，便于核对账目</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">数据从哪来</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">两种引入方式</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>定时同步</strong> — 由接口按计划自动拉取ERP到款</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>手动同步</strong> — 按需触发，新增或更新到款记录</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>到款引入流程</h2>
    <p>从ERP接口获取数据到写入主表，形成可认领的到款记录</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
      <h5>ERP接口获取</h5>
      <small>定时或手动<br>拉取ERP到款</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 8H10"/></svg></div>
      <h5>新建到款引入单</h5>
      <small>新增或更新<br>到款记录</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M2 12L6 8L10 10L14 4"/><path d="M11 4H14V7"/></svg></div>
      <h5>写入主表</h5>
      <small>记录来源与状态<br>进入可认领池</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
      <h5>下游流转</h5>
      <small>供认领/兑付<br>虚拟单使用</small>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>下游衔接：</strong>引入的到款记录是认领、商票兑付与虚拟到款单的业务源头，未认领部分按剩余可认款持续可用。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键规则</span>
    <h2>到款引入的关键约束</h2>
    <p>认领状态受控，商票需兑付，剩余可认款动态计算</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"/><path d="M6 8L7 9L10 6"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">同步引入</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">按来源标识新增或更新到款记录，已认领数据不重复引入覆盖。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4Z"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">认领状态校验</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">已认领或已兑付的到款不可重复引入，避免账目冲突。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">商票与可认款</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">商票类到款需兑付后方可用；剩余可认款按认领占用动态计算。</p>
        </div>
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
  <h4 class="bf-main-title">项目到款引入 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ERP接口获取(定时/手动) → ★新建到款引入单★ → 写入主表EPM_PAYMENT_IMPORT → 结束（下游支撑认领/兑付/虚拟单）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="120" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="175" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">ERP系统</text>
      <rect x="250" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="305" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">客户主数据</text>
      <rect x="380" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">交易公司</text>
      <rect x="510" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="565" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">事业部</text>
      <rect x="640" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="695" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">分布式锁</text>
      <line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="145" y="210" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">ERP接口获取(定时/手动)</text>
      <line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★新建到款引入单★</text>
      <text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">已存在更新/不存在新增·保存</text>
      <line x1="235" y1="320" x2="235" y2="344" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="140" y="344" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="369" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">写入主表EPM_PAYMENT_IMPORT</text>
      <line x1="235" y1="384" x2="235" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="180" y="400" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="425" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="235" y1="440" x2="235" y2="560" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="560" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="582" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="300" y="596" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="375" y="619" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">项目到款认领</text>
      <rect x="525" y="596" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="600" y="619" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">兑付记录</text>
      <rect x="750" y="596" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="825" y="619" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">应收虚拟到款单</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#16A34A;"></span> 引入数据落地/下游前置</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：ERP到款数据同步">
<ul><li><strong>业务意义</strong>：将ERP回传的到款数据同步引入系统，作为后续认领、兑付的业务源头</li><li><strong>具体逻辑描述</strong>：</li><li>调度任务syncPaymentDataFromErpJob支持指定编码或时间区间同步</li><li>批量处理ERP返回数据(handleErpReceipt/handleErpReceiptBiz)</li><li>核心流程paymentImportErpProcess：已存在则更新，不存在则校验客户/交易公司/事业部并新增</li><li>商票类型默认isCashout=N(未兑付)，其他类型默认isCashout=Y(已兑付)</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：到款单状态校验">
<ul><li><strong>业务意义</strong>：确保只有有效状态的到款单才能被认领</li><li><strong>具体逻辑描述</strong>：</li><li>verifyImportStat方法校验到款单状态</li><li>信用卡拖欠、暂停付款、冲销付款、资金不足状态不允许认领</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：剩余可认款金额获取">
<ul><li><strong>业务意义</strong>：认领时获取到款单最新可认款金额，防止超额认领</li><li><strong>具体逻辑描述</strong>：</li><li>虚拟单(VIRTUAL_RECEIPT)查DB获取剩余可认款金额</li><li>实际单(RECEIPT)实时查ERP获取最新剩余可认款金额</li><li>getPaymentImportCanAllotAmt接口提供认领时实时查询</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：商票兑付">
<ul><li><strong>业务意义</strong>：商业承兑/银行承兑类型到款单需手动兑付后才可认领</li><li><strong>具体逻辑描述</strong>：</li><li>draftPayment方法处理兑付：校验类型(必须为商票)和状态(必须未兑付)</li><li>更新isCashout=Y(已兑付)</li><li>插入兑付记录(EPM_PAYMENT_IMPORT_RCD)</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：查询区">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>到款记录编号</td><td>EPM_PAYMENT_IMPORT.PAYMENT_IMPORT_CODE</td><td>文本输入框</td><td>模糊查询到款编号</td><td>常显</td><td>手动输入</td></tr>
<tr><td>银行流水号</td><td>EPM_PAYMENT_IMPORT.SERIAL_NUMBER</td><td>文本输入框</td><td>模糊查询银行流水号</td><td>常显</td><td>手动输入</td></tr>
<tr><td>客户编码</td><td>EPM_PAYMENT_IMPORT.CUSTOMER_CODE</td><td>文本输入框</td><td>模糊查询客户</td><td>常显</td><td>手动输入</td></tr>
<tr><td>客户名称</td><td>EPM_PAYMENT_IMPORT.CUSTOMER_NAME</td><td>文本输入框</td><td>模糊查询客户名称</td><td>常显</td><td>手动输入</td></tr>
<tr><td>收款日期起</td><td>EPM_PAYMENT_IMPORT.RECEIVE_DATE</td><td>日期选择框</td><td>收款日期范围查询起</td><td>常显</td><td>手动选择</td></tr>
<tr><td>收款日期止</td><td>EPM_PAYMENT_IMPORT.RECEIVE_DATE</td><td>日期选择框</td><td>收款日期范围查询止</td><td>常显</td><td>手动选择</td></tr>
<tr><td>到款引入状态</td><td>EPM_PAYMENT_IMPORT.IMPORT_STAT</td><td>下拉选择框</td><td>筛选引入状态</td><td>常显</td><td>已生效/已失效</td></tr>
<tr><td>兑付状态</td><td>EPM_PAYMENT_IMPORT.PAYMENT_STATUS</td><td>下拉选择框</td><td>筛选兑付状态</td><td>常显</td><td>值集payment_status</td></tr>
<tr><td>是否家装</td><td>EPM_PAYMENT_IMPORT.IS_HOME</td><td>下拉选择框</td><td>筛选家装/工程</td><td>常显</td><td>1-工程/2-家装</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：列表表格">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>到款记录编号</td><td>EPM_PAYMENT_IMPORT.PAYMENT_IMPORT_CODE</td><td>文本框</td><td>到款记录编号</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>银行流水号</td><td>EPM_PAYMENT_IMPORT.SERIAL_NUMBER</td><td>文本框</td><td>银行流水号</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>收款日期</td><td>EPM_PAYMENT_IMPORT.RECEIVE_DATE</td><td>日期</td><td>收款日期</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>收款金额</td><td>EPM_PAYMENT_IMPORT.RECEIVE_AMT</td><td>数值框</td><td>收款金额</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>剩余可认款金额</td><td>EPM_PAYMENT_IMPORT.UNALLOT_AMT</td><td>数值框</td><td>剩余可认款金额</td><td>常显</td><td>实际单实时查ERP，虚拟单查DB</td></tr>
<tr><td>已认款金额</td><td>EPM_PAYMENT_IMPORT.CONFIRMED_AMT</td><td>数值框</td><td>已认款金额</td><td>常显</td><td>系统自动维护</td></tr>
<tr><td>客户编码</td><td>EPM_PAYMENT_IMPORT.CUSTOMER_CODE</td><td>文本框</td><td>客户编码</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>客户名称</td><td>EPM_PAYMENT_IMPORT.CUSTOMER_NAME</td><td>文本框</td><td>客户名称</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>收款公司</td><td>EPM_PAYMENT_IMPORT.RECEIVE_UNIT_NAME</td><td>文本框</td><td>收款公司</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>汇款单位</td><td>EPM_PAYMENT_IMPORT.REMIT_UNIT_NAME</td><td>文本框</td><td>汇款单位</td><td>常显</td><td>来源于ERP，不可编辑</td></tr>
<tr><td>到款单据类型</td><td>EPM_PAYMENT_IMPORT.BILL_TYPE</td><td>文本框</td><td>到款单据类型</td><td>常显</td><td>RECEIPT实际到款单/VIRTUAL_RECEIPT虚拟到款单</td></tr>
<tr><td>票据类型</td><td>EPM_PAYMENT_IMPORT.ACCEPTANCE_TYPE</td><td>文本框</td><td>票据类型</td><td>常显</td><td>值集payment_acceptance_type</td></tr>
<tr><td>兑付状态</td><td>EPM_PAYMENT_IMPORT.PAYMENT_STATUS</td><td>文本框</td><td>�@兑付状态</td><td>常显</td><td>值集payment_status</td></tr>
<tr><td>是否已兑现</td><td>EPM_PAYMENT_IMPORT.IS_CASHOUT</td><td>标签</td><td>是否已兑现</td><td>常显</td><td>Y-已兑现/N-未兑现</td></tr>
<tr><td>到款引入状态</td><td>EPM_PAYMENT_IMPORT.IMPORT_STAT</td><td>标签</td><td>到款引入状态</td><td>常显</td><td>已生效/已失效</td></tr>
<tr><td>认领状态</td><td>EPM_PAYMENT_IMPORT.ALLOT_STATUS</td><td>标签</td><td>认领状态</td><td>常显</td><td>WAITING待认领/CLEAR认领完成</td></tr>
<tr><td>是否家装</td><td>EPM_PAYMENT_IMPORT.IS_HOME</td><td>文本框</td><td>是否家装</td><td>常显</td><td>1-工程/2-家装</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口名称</th><th>Controller</th><th>Service</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>获取ERP到款单</td><td>EpmPaymentImportController</td><td>getOnePaymentImportFromErp</td><td>POST /v1/&#123;orgId&#125;/epmPaymentImport/getErpPaymentData</td><td>从ERP获取单条到款单并处理</td></tr>
<tr><td>获取剩余可认款金额</td><td>EpmPaymentImport&amp;ImportController</td><td>getPaymentImportCanAllotAmt</td><td>POST /v1/&#123;orgId&#125;/epmPaymentImport/getPaymentImportCanAllotAmt</td><td>认领时实时获取到款单剩余认款金额</td></tr>
<tr><td>列表查询</td><td>EpmPaymentImportController</td><td>listSearch</td><td>POST /v1/&#123;orgId&#125;/epmPaymentImport/list/search</td><td>项目到款引入列表查询</td></tr>
<tr><td>获取剩余金额</td><td>EpmPaymentImportController</td><td>getSurAmtByImport</td><td>POST /v1/&#123;orgId&#125;/epmPaymentImport/sur-amt-by-import</td><td>调用到款引入接口判断剩余可认款金额</td></tr>
<tr><td>兑现</td><td>EpmPaymentImportController</td><td>draftPayment</td><td>POST /v1/&#123;orgId&#125;/epmPaymentImport/draftPayment</td><td>商票兑付按钮</td></tr>
<tr><td>定时同步</td><td>PaymentImportServiceImpl</td><td>syncPaymentDataFromErpJob</td><td>Job</td><td>调度任务同步ERP到款数据</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<p>本页面无选择弹窗。到款数据由ERP同步引入，非手工选择。</p>
</KbCard>

<KbCard title="导入">
<p>本页面无手工导入功能。到款数据由ERP系统通过调度任务自动同步引入。</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显&amp;显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>兑现</td><td>商票兑付</td><td>列表页</td><td>票据类型为商票且未兑付</td><td>调用draftPayment接口，更新isCashout=Y，插入兑付记录</td></tr>
<tr><td>获取ERP到款</td><td>手动触发从ERP获取到款单</td><td>列表页</td><td>常显</td><td>调用getErpPaymentData接口，从ERP获取并处理到款单</td></tr>
</tbody>
</table>
<h4>按钮1：兑现（列表页）</h4>
<ul><li><strong>触发条件</strong>：票据类型为商业承兑/银行承兑且兑付状态为未兑付(isCashout=N)</li><li><strong>处理逻辑</strong>：</li></ul>
<ol><li>校验票据类型必须为商票类型</li><li>校验兑付状态必须为未兑付</li><li>更新isCashout=Y(已兑付)</li><li>插入兑付记录到EPM_PAYMENT_IMPORT_RCD表</li></ol>
</KbCard>

<KbCard title="保存校验">
<p>本页面无手工保存操作。到款数据由ERP同步引入，引入时自动校验客户/交易公司/事业部有效性。</p>
</KbCard>

<KbCard title="提交校验">
<p>本页面无提交审批操作。到款引入模块为数据引入模块，不涉及工作流审批。</p>
</KbCard>

<KbCard title="状态机">

```text
[9: ERP到款 → 引入 → [已生效] → 认领 → [认领完成(CLEAR)]
                         → 商票未兑付 → 兑付 → [已兑现] → 认领
                         → 异常 → [已失效]
```
<table class="kb-field-tbl">
<thead>
<tr><th>状态值</th><th>状态名称</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>已生效</td><td>IMPORT_STAT=已生效</td><td>可认领</td></tr>
<tr><td>已失效</td><td>IMPORT_STAT=已失效</td><td>不可认领</td></tr>
<tr><td>WAITING</td><td>ALLOT_STATUS=待认领</td><td>待认领</td></tr>
<tr><td>CLEAR</td><td>ALLOT_STATUS=认领完成</td><td>已认领完成</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="上游依赖">
<table class="kb-field-tbl">
<thead>
<tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
</thead>
<tbody>
<tr><td>ERP系统</td><td>外部接口</td><td>到款数据来源，通过ERP接口获取到款单</td><td>ERP系统连通且返回有效数据</td></tr>
<tr><td>CUSTOMER(客户档案)</td><td>数据校验</td><td>校验到款单对应的客户是否存在</td><td>客户已存在</td></tr>
<tr><td>交易公司</td><td>数据校验</td><td>校验交易公司是否存在</td><td>交易公司已存在</td></tr>
<tr><td>DIVISION_BASE_SET(事业部配置)</td><td>数据校验</td><td>校验事业部是否存在</td><td>事业部已配置</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="下游影响">
<ul><li><strong>项目到款认领(EPM_PAYMENT_ALLOT)</strong>：到款引入数据作为认领的业务源头，认领时选取未认领的到款记录</li><li><strong>商票兑付记录(EPM_PAYMENT_IMPORT_RCD)</strong>：兑付操作插入兑付记录</li><li><strong>剩余可认款金额</strong>：认领时实时查询到款单剩余可认款金额，影响认领额度</li></ul>
</KbCard>

<KbCard title="EPM_PAYMENT_IMPORT（项目到款引入表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>PAYMENT_IMPORT_ID</td><td>Long</td><td>到款记录单ID</td><td>-</td><td>自增主键</td></tr>
<tr><td>PAYMENT_IMPORT_CODE</td><td>String</td><td>到款记录编号</td><td>到款记录编号</td><td>来源于ERP(receiptNumber)</td></tr>
<tr><td>ORGANIZATION_ID</td><td>Long</td><td>组织ID</td><td>-</td><td>当前用户事业部</td></tr>
<tr><td>SERIAL_NUMBER</td><td>String</td><td>银行流水号</td><td>银行流水号</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_DATE</td><td>LocalDateTime</td><td>收款日期</td><td>收款日期</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_AMT</td><td>BigDecimal</td><td>收款金额</td><td>收款金额</td><td>来源于ERP</td></tr>
<tr><td>BASE_CURRENCY_ID</td><td>Long</td><td>币别</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>EXCHANGE_RATE</td><td>BigDecimal</td><td>汇率</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>DIVISION_ID</td><td>Long</td><td>事业部ID</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>DIVISION_NAME</td><td>String</td><td>事业部名称</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_UNIT_ID</td><td>Long</td><td>收款公司ID</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_UNIT_NAME</td><td>String</td><td>收款公司名称</td><td>收款公司</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_BANK</td><td>String</td><td>收款银行</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>RECEIVE_ACCOUNT</td><td>String</td><td>收款账号</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>REMIT_UNIT_ID</td><td>Long</td><td>汇款单位ID</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>REMIT_UNIT_CODE</td><td>String</td><td>汇款单位编码</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>REMIT_UNIT_NAME</td><td>String</td><td>汇款单位名称</td><td>汇款单位</td><td>来源于ERP</td></tr>
<tr><td>REMIT_ACCOUNT</td><td>String</td><td>汇款账号</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>PAYMENT_REMARK</td><td>String</td><td>打款说明</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>STAT</td><td>Integer</td><td>状态</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>CONFIRMED_AMT</td><td>BigDecimal</td><td>已认款金额</td><td>已认款金额</td><td>系统自动维护</td></tr>
<tr><td>UNALLOT_AMT</td><td>BigDecimal</td><td>剩余可认款金额</td><td>剩余可认款金额</td><td>实际单实时查ERP，虚拟单查DB</td></tr>
<tr><td>CUSTOMER_ID</td><td>Long</td><td>客户ID</td><td>-</td><td>来源于ERP，NotNull</td></tr>
<tr><td>CUSTOMER_CODE</td><td>String</td><td>客户编码</td><td>客户编码</td><td>来源于ERP</td></tr>
<tr><td>CUSTOMER_NAME</td><td>String</td><td>客户名称</td><td>客户名称</td><td>来源于ERP</td></tr>
<tr><td>ORIGINAL_AMT</td><td>BigDecimal</td><td>到款单实际收款总金额</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>BILL_TYPE</td><td>String</td><td>到款单据类型</td><td>到款单据类型</td><td>RECEIPT实际到款单/VIRTUAL_RECEIPT虚拟到款单</td></tr>
<tr><td>IS_CASHOUT</td><td>String</td><td>是否已兑现</td><td>是否已兑现</td><td>Y-已兑现/N-未兑现，商票默认N</td></tr>
<tr><td>ACCEPTANCE_TYPE</td><td>String</td><td>票据类型</td><td>票据类型</td><td>值集payment_acceptance_type</td></tr>
<tr><td>PAYMENT_STATUS</td><td>String</td><td>兑付状态</td><td>兑付状态</td><td>值集payment_status</td></tr>
<tr><td>ALLOT_STATUS</td><td>String</td><td>认领状态</td><td>认领状态</td><td>WAITING待认领/CLEAR认领完成</td></tr>
<tr><td>IMPORT_STAT</td><td>String</td><td>到款引入状态</td><td>到款引入状态</td><td>已生效/已失效</td></tr>
<tr><td>IMPORT_DATE</td><td>LocalDateTime</td><td>到款引入时间</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>IS_HOME</td><td>Long</td><td>是否家装</td><td>是否家装</td><td>1-工程/2-家装，NotNull</td></tr>
<tr><td>EXT_PAYMENT_IMPORT_ID</td><td>String</td><td>外部系统对应的到款单ID</td><td>-</td><td>用于判断是否已存在</td></tr>
<tr><td>SOURCE_SYSTEM</td><td>String</td><td>来源系统</td><td>-</td><td>ERP</td></tr>
<tr><td>CUSTOMER_TRX_ID</td><td>Long</td><td>应收事务处理ID</td><td>-</td><td>来源于ERP</td></tr>
<tr><td>AUTO_ALLOT_FLAG</td><td>String</td><td>自动认领标识</td><td>-</td><td>Y/N</td></tr>
<tr><td>VIRTUAL_CLAIM_STAT</td><td>String</td><td>虚拟单认领状态</td><td>-</td><td>BEGINNING/FINISH</td></tr>
<tr><td>CREATOR_NAME</td><td>String</td><td>创建人名称</td><td>-</td><td>系统自动记录</td></tr>
</tbody>
</table>
<p><strong>查询SQL</strong>：</p>

```sql
SELECT * FROM EPM_PAYMENT_IMPORT
WHERE ORGANIZATION_ID = #{organizationId}
  AND NVL(PAYMENT_IMPORT_CODE, '') LIKE '%' || #{paymentImportCode} || '%'
  AND NVL(SERIAL_NUMBER, '') LIKE '%' || #{serialNumber} || '%'
  AND NVL(CUSTOMER_CODE, '') LIKE '%' || #{customerCode} || '%'
  AND RECEIVE_DATE BETWEEN #{startDate} AND #{endDate}
ORDER BY RECEIVE_DATE DESC;
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
<tr><td>客户不存在</td><td>引入时</td><td>ERP到款单对应的客户在系统中不存在。先同步客户数据</td><td>高</td><td>[查看]</td></tr>
<tr><td>交易公司不存在</td><td>引入时</td><td>交易公司在系统中不存在。先同步交易公司数据</td><td>高</td><td>[查看]</td></tr>
<tr><td>事业部不存在</td><td>引入时</td><td>事业部在系统中未配置。先配置事业部</td><td>高</td><td>[查看]</td></tr>
<tr><td>到款单状态不允许认领</td><td>认领时</td><td>信用卡拖欠/暂停付款/冲销付款/资金不足状态。确认到款单状态</td><td>高</td><td>[查看]</td></tr>
<tr><td>票据类型不支持兑付</td><td>兑现时</td><td>非商票类型不支持兑付。确认票据类型</td><td>高</td><td>[查看]</td></tr>
<tr><td>已兑付不可重复兑付</td><td>兑现时</td><td>到款单已兑付。无需重复操作</td><td>高</td><td>[查看]</td></tr>
<tr><td>对账单对应经销商信息查询异常</td><td>引入时</td><td>ERP到款单客户编码在系统客户档案中不存在。先同步客户数据</td><td>高</td><td>[查看]</td></tr>
<tr><td>对账单对应法人信息查询异常</td><td>引入时</td><td>ERP到款单汇款法人编码在系统客户档案中不存在。先同步法人数据</td><td>高</td><td>[查看]</td></tr>
<tr><td>未找到该erp的到款单</td><td>获取ERP到款</td><td>ERP接口未返回到款数据。确认ERP到款单存在</td><td>高</td><td>[查看]</td></tr>
<tr><td>erp的到款单业务处理异常</td><td>获取ERP到款</td><td>ERP到款单处理返回null。检查ERP数据完整性</td><td>高</td><td>[查看]</td></tr>
<tr><td>请传入到款单id</td><td>认领校验</td><td>到款单ID为空。传入有效到款单ID</td><td>高</td><td>[查看]</td></tr>
<tr><td>该到款单已撤销，不允许认领</td><td>认领校验</td><td>到款单已撤销。检查到款单状态</td><td>高</td><td>[查看]</td></tr>
<tr><td>未指定到款单id</td><td>获取剩余金额</td><td>到款单ID未指定。传入有效到款单ID</td><td>高</td><td>[查看]</td></tr>
<tr><td>已核销、未核销的到款单才能发起兑付</td><td>兑现时</td><td>到款单状态非已核销/未核销。确认到款单状态</td><td>高</td><td>[查看]</td></tr>
<tr><td>编码最大支持100个</td><td>定时同步</td><td>批量同步编码超过100个限制。减少批量编码数量</td><td>高</td><td>[查看]</td></tr>
<tr><td>开始时间-结束时间必须同时有值</td><td>定时同步</td><td>时间区间同步时起止时间未同时传入。补全时间区间</td><td>高</td><td>[查看]</td></tr>
</tbody>
</table>
<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>客户不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>引入ERP到款数据时，到款单对应的CUSTOMER_ID/CUSTOMER_CODE在系统客户档案中不存在<br><strong>逻辑分析：</strong>在paymentImportErpProcess方法中校验，从ERP获取到款数据后，按CUSTOMER_CODE查询系统客户档案(CUSTOMER表)，若不存在则报错。需先通过客户同步接口将ERP客户数据同步到系统</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.CUSTOMER_CODE, epi.CUSTOMER_NAME,
         epi.RECEIVE_AMT, epi.RECEIVE_DATE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE NOT EXISTS (SELECT 1 FROM CUSTOMER c WHERE c.CUSTOMER_CODE = epi.CUSTOMER_CODE)
```
<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>交易公司不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>引入ERP到款数据时，到款单对应的交易公司(TRADING_COMPANY)在系统中不存在<br><strong>逻辑分析：</strong>在paymentImportErpProcess方法中校验，从ERP获取到款数据后，按交易公司编码查询系统交易公司主数据，若不存在则报错。需先同步交易公司数据</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_UNIT_NAME, epi.REMIT_UNIT_NAME,
         epi.RECEIVE_AMT, epi.RECEIVE_DATE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE NOT EXISTS (SELECT 1 FROM TRADING_COMPANY tc WHERE tc.COMPANY_NAME = epi.RECEIVE_UNIT_NAME)
```
<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>事业部不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>引入ERP到款数据时，到款单对应的事业部(DEPT_CODE)在系统中未配置<br><strong>逻辑分析：</strong>在paymentImportErpProcess方法中校验，从ERP获取到款数据后，按事业部编码查询系统事业部配置，若不存在则报错。需先在系统中配置对应事业部</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.DEPT_CODE, epi.RECEIVE_AMT
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.DEPT_CODE IS NOT NULL
    AND NOT EXISTS (SELECT 1 FROM DEPT d WHERE d.DEPT_CODE = epi.DEPT_CODE)
```
<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>到款单状态不允许认领</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>认领到款单时，到款单状态(PAYMENT_STATUS)为信用卡拖欠/暂停付款/冲销付款/资金不足等异常状态<br><strong>逻辑分析：</strong>在verifyImportStat方法中校验，认领前检查到款单状态，仅正常状态(如已生效且未兑付异常)的到款单允许认领。状态为信用卡拖欠/暂停付款/冲销付款/资金不足等异常状态时阻断认领</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS,
         epi.IS_CASHOUT, epi.UNALLOT_AMT, epi.ALLOT_STATUS
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.PAYMENT_STATUS IN ('OVERDUE', 'SUSPENDED', 'WRITE_OFF', 'INSUFFICIENT_FUNDS')
```
<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>票据类型不支持兑付</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>兑付到款单时，票据类型(ACCEPTANCE_TYPE)非商票类型(非商业承兑/银行承兑)<br><strong>逻辑分析：</strong>在draftPayment方法中校验，仅商业承兑汇票/银行承兑汇票类型(ACCEPTANCE_TYPE)的到款单支持兑付操作。其他票据类型(如电汇、现金)不支持兑付，默认已兑付(IS_CASHOUT=Y)</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.ACCEPTANCE_TYPE,
         epi.IS_CASHOUT, epi.PAYMENT_STATUS, epi.BILL_TYPE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.ACCEPTANCE_TYPE NOT IN ('COMMERCIAL_ACCEPTANCE', 'BANK_ACCEPTANCE')
    AND epi.IS_CASHOUT = 'N'
```
<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>已兑付不可重复兑付</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>兑付到款单时，到款单已兑付(IS_CASHOUT=Y)<br><strong>逻辑分析：</strong>在draftPayment方法中校验，兑付前检查到款单的IS_CASHOUT字段，若已为Y(已兑付)则阻断重复兑付操作。无需重复操作</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.IS_CASHOUT,
         epi.PAYMENT_STATUS, epi.ACCEPTANCE_TYPE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.IS_CASHOUT = 'Y'
```
<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>对账单对应经销商信息查询异常</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>引入ERP到款数据时，到款单对应的客户编码(CRM_NUM)在系统客户档案(CUSTOMER)中不存在<br><strong>逻辑分析：</strong>在paymentImportErpProcess方法中，按vo.getCrmNum()查询CUSTOMER表，若返回null则抛出阻断性报错，提示到款单号+客户编码。需先通过客户同步接口将ERP客户数据同步到系统</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.CUSTOMER_CODE, epi.CUSTOMER_NAME,
         epi.RECEIVE_AMT, epi.RECEIVE_DATE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE NOT EXISTS (SELECT 1 FROM CUSTOMER c WHERE c.CUSTOMER_CODE = epi.CUSTOMER_CODE)
```
<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>对账单对应法人信息查询异常</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>引入ERP到款数据时，到款单对应的汇款法人编码(PAY_FROM_CUST)在系统客户档案(CUSTOMER)中不存在<br><strong>逻辑分析：</strong>在paymentImportErpProcess方法中，按vo.getPayFromCust()查询CUSTOMER表作为汇款单位，若返回null则抛出阻断性报错，提示到款单号+法人编码。需先同步法人数据到系统客户档案</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.REMIT_UNIT_CODE, epi.REMIT_UNIT_NAME,
         epi.RECEIVE_AMT, epi.RECEIVE_DATE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE NOT EXISTS (SELECT 1 FROM CUSTOMER c WHERE c.CUSTOMER_CODE = epi.REMIT_UNIT_CODE)
```
<div id="err-detail-9" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>未找到该erp的到款单</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用getOnePaymentImportFromErp接口从ERP获取到款单时，ERP接口返回空列表<br><strong>逻辑分析：</strong>getOnePaymentImportFromErp方法中调用erpSdk.getErpReceipt获取ERP到款数据，若返回null或空列表则抛出阻断性报错。可能原因：ERP到款单不存在、ERP接口异常。需确认ERP到款单存在</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.EXT_PAYMENT_IMPORT_ID,
         epi.SOURCE_SYSTEM, epi.IMPORT_STAT
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.EXT_PAYMENT_IMPORT_ID = :extPaymentImportId
  -- 若返回空，说明ERP到款单未同步到系统
```
<div id="err-detail-10" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>erp的到款单业务处理异常</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用getOnePaymentImportFromErp接口处理ERP到款单时，handleErpReceiptBiz返回null<br><strong>逻辑分析：</strong>getOnePaymentImportFromErp方法中调用handleErpReceiptBiz处理ERP到款数据，若返回ID为null则抛出阻断性报错。可能原因：ERP数据字段缺失、客户/交易公司/事业部校验失败。需检查ERP数据完整性</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.IMPORT_STAT, epi.VALID
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.EXT_PAYMENT_IMPORT_ID = :extPaymentImportId
    AND epi.IMPORT_STAT IS NULL
  -- 查出业务处理异常的到款单
```
<div id="err-detail-11" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>请传入到款单id</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用verifyImportStat校验到款单状态时，到款单ID(paymentImportId)为空或&lt;=0<br><strong>逻辑分析：</strong>verifyImportStat方法中校验paymentImportId非空且&gt;0，因需按ID查询到款单状态。需传入有效到款单ID</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.IMPORT_STAT
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.PAYMENT_IMPORT_ID = :paymentImportId
  -- 校验到款单ID是否有效
```
<div id="err-detail-12" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>该到款单已撤销，不允许认领</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>校验到款单状态时，到款单已撤销(IMPORT_STAT=已失效或ALLOT_STATUS=CANCEL)<br><strong>逻辑分析：</strong>verifyImportStat方法中查询到款单状态，若到款单已撤销则抛出阻断性报错。需检查到款单状态，确认到款单未撤销</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.IMPORT_STAT, epi.ALLOT_STATUS,
         epi.PAYMENT_STATUS, epi.IS_CASHOUT
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.IMPORT_STAT = '已失效'
     OR epi.ALLOT_STATUS = 'CANCEL'
  -- 查出已撤销的到款单
```
<div id="err-detail-13" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>未指定到款单id</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用getSurAmtByImport获取剩余可认款金额时，到款单ID未指定<br><strong>逻辑分析：</strong>getSurAmtByImport方法中校验到款单ID非空，因需按ID查询到款单剩余可认领金额。需传入有效到款单ID</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.UNALLOT_AMT, epi.BILL_TYPE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.PAYMENT_IMPORT_ID = :paymentImportId
  -- 校验到款单ID是否有效
```
<div id="err-detail-14" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>已核销、未核销的到款单才能发起兑付</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>兑付到款单时，到款单状态(PAYMENT_STATUS)非已核销(SUCCESS)或未核销(PENDING)<br><strong>逻辑分析：</strong>draftPayment方法中校验到款单状态，仅PAYMENT_STATUS为SUCCESS(已核销)或PENDING(未核销)的到款单允许发起兑付。其他状态(如处理中、失败)不允许兑付。需确认到款单状态</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS,
         epi.IS_CASHOUT, epi.ACCEPTANCE_TYPE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.ACCEPTANCE_TYPE IN ('COMMERCIAL_ACCEPTANCE', 'BANK_ACCEPTANCE')
    AND epi.PAYMENT_STATUS NOT IN ('SUCCESS', 'PENDING')
  -- 查出状态不允许兑付的商票到款单
```
<div id="err-detail-15" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>编码最大支持100个</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>定时同步任务syncPaymentDataFromErpJob按指定编码同步时，传入的编码列表超过100个<br><strong>逻辑分析：</strong>syncPaymentDataFromErpJob方法中校验编码列表大小，超过100个则抛出阻断性报错。因ERP接口对批量查询有数量限制。需减少批量编码数量，分批同步</div>
  </div>
</div>

```sql
SELECT COUNT(*) AS 编码数量
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.PAYMENT_IMPORT_CODE IN (:codeList)
  -- 校验传入的编码数量是否超过100
```
<div id="err-detail-16" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>开始时间-结束时间必须同时有值</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>定时同步任务syncPaymentDataFromErpJob按时间区间同步时，开始时间或结束时间只传了一个<br><strong>逻辑分析：</strong>syncPaymentDataFromErpJob方法中校验时间区间，开始时间和结束时间必须同时有值或同时为空。需补全时间区间</div>
  </div>
</div>

```sql
SELECT epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_DATE, epi.IMPORT_DATE
  FROM EPM_PAYMENT_IMPORT epi
  WHERE epi.RECEIVE_DATE BETWEEN :startDate AND :endDate
  -- 校验时间区间是否完整
```
</KbCard>

<KbCard title="常见问题">
<p><strong>Q1: 到款数据从哪里来？</strong></p>
<p>A: 来源于ERP系统，通过调度任务syncPaymentDataFromErpJob自动同步，或通过getErpPaymentData接口手动触发引入。编号(paymentImportCode)来自ERP的receiptNumber。</p>
<p><strong>Q2: 商票兑付的作用？</strong></p>
<p>A: 商业承兑/银行承兑类型到款单默认未兑付(isCashout=N)，需手动点击兑付按钮更新为已兑付(isCashout=Y)后才可认领。其他类型默认已兑付。</p>
<p><strong>Q3: 剩余可认款金额如何获取？</strong></p>
<p>A: 虚拟单(VIRTUAL_RECEIPT)查DB获取，实际单(RECEIPT)!实时查ERP获取最新金额，确保认领时不#时不超额。</p>
<p><strong>Q4: 定时同步任务支持哪些模式？</strong></p>
<p>A: syncPaymentDataFromErpJob支持指定编码或时间区间同步，批量处理ERP返回数据。</p>
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
<tr><td>2025-12-06</td><td>-</td><td>tzx</td><td>初始版本，项目到款引入功能</td></tr>
<tr><td>2026-07-31</td><td>-</td><td>-</td><td>初始生成知识库文档</td></tr>
<tr><td>2026-08-30</td><td>-</td><td>CodeArts</td><td>按skill规范重写：移除定义章节、章节去编号、界面模块表格改为6列、数据库表改为5列、报错表改为5列、新增上游依赖/下游影响/选择弹窗/导入/保存校验/提交校验/状态机章节、补充4个重点逻辑和6个后端接口</td></tr>
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