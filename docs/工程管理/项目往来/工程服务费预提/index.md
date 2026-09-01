<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">业务是什么</span>
    <h2>工程服务费预提</h2>
    <p>按月将已签收出库对应的服务费提前入账，占用共享预算，避免人工遗漏与跨期差异</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M2 12L6 8L10 10L14 4"/><path d="M11 4H14V7"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">为何要做预提</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">解决两个业务痛点</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>跨期差异</strong> — 出库签收在前、费用入账在后，按月预提使费用与收入同期匹配</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>人工遗漏</strong> — 定时任务自动汇总，避免财务逐单手工计提</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">预提数据从哪来</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">三个关键来源</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>出库签收</strong> — 以交易公司+法人客户+年月+成本中心+费用科目汇总服务费</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>事业部设置</strong> — 提供组织与费用口径的基础配置</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>共享接口</strong> — 预提数据最终推送至财务共享系统</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>预提单据全流程</h2>
    <p>从生成预提数据到推送共享占用预算，再到审批中的状态流转</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 7L8 9L10 6"/></svg></div>
      <h5>生成预提数据</h5>
      <small>定时或手工按年月<br>汇总出库签收数据</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 8H10"/></svg></div>
      <h5>新建服务费预提单</h5>
      <small>新建单据并保存<br>生成共享单号与预提单号</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
      <h5>执行推共享</h5>
      <small>推送预提数据至<br>共享系统占用预算</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
      <h5>共享处理成功</h5>
      <small>共享返回成功<br>单据状态转为审批中</small>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>失败处理：</strong>若共享返回失败，预提单可作废并重新生成，重新生成时按原年月重新汇总，避免重复入账。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键规则</span>
    <h2>预提与作废的核心规则</h2>
    <p>同一口径下避免重复生成，作废冲销走负数回冲，重新生成受状态约束</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"/><path d="M6 8L7 9L10 6"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">按月汇总生成</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">按交易公司+法人客户+年月+成本中心+费用科目维度汇总出库签收服务费，自动生成预提单。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"/><path d="M8 4V12"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">防重复生成</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">同口径下已存在非作废预提单则跳过；存在保存态预提单则更新金额，不重复建单。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">作废冲销重生成</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">作废时推送负数金额冲销预算，作废单可按原年月重新生成新预提单。</p>
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
  <h4 class="bf-main-title">工程服务费预提 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → 生成预提数据(定时/手工) → ★新建服务费预提单★ → 执行推共享 → ⚖共享处理成功？ → 状态审批中 / 失败则作废重生成 → 结束</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
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
      <text x="175" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">出库签收数据</text>
      <rect x="250" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="305" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">事业部设置</text>
      <rect x="380" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">编码规则</text>
      <rect x="510" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="565" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">共享接口</text>
      <rect x="640" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="695" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">LOV配置</text>
      <line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="155" y="210" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">生成预提数据(定时/手工)</text>
      <line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★新建服务费预提单★</text>
      <text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">生成共享/预提单号·保存</text>
      <line x1="235" y1="320" x2="235" y2="336" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="150" y="336" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="361" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">执行推共享(推送接口)</text>
      <line x1="235" y1="376" x2="235" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="235,392 305,432 235,472 165,432" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="436" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 共享处理成功？</text>
      <line x1="235" y1="472" x2="235" y2="488" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="150" y="488" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="513" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">状态→审批中(AUDITING)</text>
      <line x1="235" y1="528" x2="235" y2="544" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="180" y="544" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="569" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="235" y1="584" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <line x1="305" y1="432" x2="430" y2="432" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
      <rect x="380" y="417" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
      <text x="430" y="436" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">失败/重生成✗</text>
      <line x1="430" y1="432" x2="430" y2="293" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="430" y1="293" x2="315" y2="293" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
      <rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="275" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="350" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">财务共享FSCC</text>
      <rect x="500" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="575" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">预提单状态流转</text>
      <rect x="725" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="800" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">重算预提数据</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 共享处理失败/重生成</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：定时任务自动生成预提数据">
<ul><li><strong>业务意义</strong>：按月自动汇总出库签收的服务费生成预提单，避免人工遗漏与跨期差异</li><li><strong>具体逻辑描述</strong>：</li><li>定时任务WithholdingInProjectJob支持两种模式：指定单月(syncFlag=1,仅传startDate)、指定时间段(syncFlag=2,传startDate+endDate)</li><li>从expense_withholding_view视图查询预提数据，按交易公司+法人客户+年月+成本中心+费用科目维度汇总</li><li>查询事业部配置(DIVISION_BASE_SET)，无配置则跳过</li><li>同一交易公司+法人+年月+成本中心维度下，若已存在非作废状态的预提单则跳过；若存在保存状态的预提单则更新金额</li><li>新生成的预提单初始状态为保存(SAVE=0)，自动生成共享单号和预提单号</li><li>时间参数格式校验：必须为yyyy-MM格式，否则报错</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：执行推送共享">
<ul><li><strong>业务意义</strong>：将预提数据推送至财务共享系统(FSSC)入账，占用共享预算</li><li><strong>具体逻辑描述</strong>：</li><li>推送前校验：DTO非空、共享单号非空、年月非空、交易公司非空</li><li>按共享单号查询所有预提头表记录，汇总不含税金额作为推送总金额</li><li>构建表头DTO：attribute1=1(正向执行)、审批年月=年-月、单据号=共享单号、金额=汇总不含税金额、审批日期=年月最后一天</li><li>构建明细行：跳过金额为0的记录，每行含金额、成本中心、费用科目、法人客户、借贷类型(DR借方)</li><li>获取申请人职位：从LOV值集AE.SIE.POSITION_LDAP_CODE查询expense_withholding_head对应的职位编码</li><li>共享接口返回状态为S则成功，更新状态为审批中(AUDITING=3)；否则报错展示共享返回的错误信息</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：作废冲销推送">
<ul><li><strong>业务意义</strong>：作废预提单时向共享系统推送负数金额冲销已入账预算</li><li><strong>具体逻辑描述</strong>：</li><li>作废与执行共用同一推送逻辑(operateExpenseWithholding)，通过flag参数区分(flag=1作废,flag=0执行)</li><li>作废时attribute1=2(冲销)，共享单号追加_F后缀以区分正向单据</li><li>作废时金额取负数(金额前加负号)</li><li>推送成功后同样更新状态为审批中(AUDITING=3)</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：重新生成">
<ul><li><strong>业务意义</strong>：对作废的预提单按原年月重新生成新预提单</li><li><strong>具体逻辑描述</strong>：</li><li>重新生成前校验该年月+交易公司下是否已存在非作废状态的预提单，若存在则报错提示无需重复生成</li><li>重新生成时syncFlag=1，按指定年月重新从视图查询数据并生成新预提单</li><li>生成次数GENERATED_TIMES记录重新生成次数</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：工程/家装双编码规则">
<ul><li><strong>业务意义</strong>：工程和家装合同使用不同的编码规则，便于区分管理</li><li><strong>具体逻辑描述</strong>：</li><li>isHome=2(家装)时，共享单号使用AE.SHARE_NO_HOME编码规则，预提单号使用AE.WITHHOLDING_NO_HOME编码规则</li><li>isHome=1(工程)时，共享单号使用AE.SHARE_NO编码规则，预提单号使用AE.WITHHOLDING_NO编码规则</li><li>编码变量：divisionCode=交易公司编码(共享单号)或事业部编码(预提单号)</li></ul>
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
<tr><td>预提编号</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_NO</td><td>文本输入框</td><td>预提单编号模糊查询</td><td>常显</td><td>手动输入</td></tr>
<tr><td>预提年度</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_YEAR</td><td>下拉选择框</td><td>预提年度查询</td><td>常显</td><td>手动选择</td></tr>
<tr><td>预提月份</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_MONTH</td><td>下拉选择框</td><td>预提月份查询</td><td>常显</td><td>手动选择</td></tr>
<tr><td>交易公司</td><td>EXPENSE_WITHHOLDING_HEAD.TRADING_COMPANY_NAME</td><td>文本输入框</td><td>交易公司模糊查询</td><td>常显</td><td>手动输入</td></tr>
<tr><td>法人客户</td><td>EXPENSE_WITHHOLDING_HEAD.BILLING_UNIT_NAME</td><td>文本输入框</td><td>法人客户模糊查询</td><td>常显</td><td>手动输入</td></tr>
<tr><td>单据状态</td><td>EXPENSE_WITHHOLDING_HEAD.BILL_STATUS</td><td>下拉选择框</td><td>单据状态查询</td><td>常显</td><td>手动选择，0-保存/3-审批中/7-作废</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：预提列表表格">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>共享单号</td><td>EXPENSE_WITHHOLDING_HEAD.SHARE_NO</td><td>文本框</td><td>推送共享系统的单据编号</td><td>常显</td><td>新增时按编码规则AE.SHARE_NO/AE.SHARE_NO_HOME自动生成，不可编辑</td></tr>
<tr><td>预提单号</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_NO</td><td>文本框</td><td>系统内部预提单编号</td><td>常显</td><td>新增时按编码规则AE.WITHHOLDING_NO/AE.WITHHOLDING_NO_HOME自动生成，不可编辑</td></tr>
<tr><td>交易公司编码</td><td>EXPENSE_WITHHOLDING_HEAD.TRADING_COMPANY_CODE</td><td>文本框</td><td>交易公司编码</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>交易公司名称</td><td>EXPENSE_WITHHOLDING_HEAD.TRADING_COMPANY_NAME</td><td>文本框</td><td>交易公司名称</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>法人客户编码</td><td>EXPENSE_WITHHOLDING_HEAD.BILLING_UNIT_CODE</td><td>文本框</td><td>法人客户编码</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>法人客户名称</td><td>EXPENSE_WITHHOLDING_HEAD.BILLING_UNIT_NAME</td><td>文本框</td><td>法人客户名称</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>预提年度</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_YEAR</td><td>文本框</td><td>预提所属年度</td><td>常显</td><td>来源于出库签收数据的年月，不可编辑</td></tr>
<tr><td>预提月份</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_MONTH</td><td>文本框</td><td>预提所属月份</td><td>常显</td><td>来源于出库签收数据的年月，不可编辑</td></tr>
<tr><td>预提总额(含税)</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_RAX_AMOUNT</td><td>数值框</td><td>预提含税总额</td><td>常显</td><td>来源于出库签收汇总，不可编辑</td></tr>
<tr><td>预提总额(不含税)</td><td>EXPENSE_WITHHOLDING_HEAD.WITHHOLDING_NORAX_AMOUNT</td><td>数值框</td><td>预提不含税总额</td><td>常显</td><td>来源于出库签收汇总，不可编辑，推送共享时按此金额汇总</td></tr>
<tr><td>成本中心编码</td><td>EXPENSE_WITHHOLDING_HEAD.COST_CODE</td><td>文本框</td><td>成本中心编码</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>成本中心名称</td><td>EXPENSE_WITHHOLDING_HEAD.COST_NAME</td><td>文本框</td><td>成本中心名称</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>费用科目编码</td><td>EXPENSE_WITHHOLDING_HEAD.FEECODE</td><td>文本框</td><td>费用科目编码</td><td>常显</td><td>来源于出库签收数据，不可编辑</td></tr>
<tr><td>单据状态</td><td>EXPENSE_WITHHOLDING_HEAD.BILL_STATUS</td><td>下拉选择框</td><td>预提单状态</td><td>常显</td><td>系统自动维护，0-保存/3-审批中/7-作废</td></tr>
<tr><td>是否家装</td><td>EXPENSE_WITHHOLDING_HEAD.IS_HOME</td><td>文本框</td><td>是否家装合同</td><td>常显</td><td>来源于出库签收数据，1-工程/2-家装</td></tr>
<tr><td>生成次数</td><td>EXPENSE_WITHHOLDING_HEAD.GENERATED_TIMES</td><td>数值框</td><td>重新生成次数</td><td>常显</td><td>默认0，每次重新生成+1</td></tr>
<tr><td>备注</td><td>EXPENSE_WITHHOLDING_HEAD.REMARK</td><td>文本框</td><td>备注</td><td>常显</td><td>默认空，不可编辑</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口名称</th><th>Controller</th><th>Service</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>重新生成</td><td>ExpenseWithholdingHeadController</td><td>ExpenseWithholdingHeadServiceImpl.doRegenerate</td><td>POST /v1/&#123;orgId&#125;/expense-withholding-heads/regenerate</td><td>对作废的预提单按原年月重新生成</td></tr>
<tr><td>作废</td><td>ExpenseWithholdingHeadController</td><td>ExpenseWithholdingHeadServiceImpl.doInvalid</td><td>POST /v1/&#123;orgId&#125;/expense-withholding-heads/invalid</td><td>推送负数金额冲销共享预算</td></tr>
<tr><td>执行</td><td>ExpenseWithholdingHeadController</td><td>ExpenseWithholdingHeadServiceImpl.doExecute</td><td>POST /v1/&#123;orgId&#125;/expense-withholding-heads/execute</td><td>推送预提数据到共享系统</td></tr>
<tr><td>定时任务生成</td><td>WithholdingInProjectJob</td><td>ExpenseWithholdingHeadServiceImpl.generateBill</td><td>Job: withholdingInProjectJob</td><td>定时自动生成预提数据</td></tr>
<tr><td>共享回调更新状态</td><td>FsscApiController</td><td>FsscApiServiceImpl</td><td>-</td><td>共享系统回调更新预提单状态，单据类型GCYT</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<p>本页面无选择弹窗。</p>
</KbCard>

<KbCard title="导入">
<p>本页面无导入功能。预提数据由定时任务从expense_withholding_view视图自动汇总生成，非手工导入。</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>执行</td><td>推送预提数据到共享系统</td><td>详情页</td><td>单据状态=保存(0)</td><td>调用POST /execute，推送成功后状态→审批中(3)</td></tr>
<tr><td>作废</td><td>推送作废数据(负数金额)到共享系统</td><td>详情页</td><td>单据状态=保存(0)或审批中(3)</td><td>调用POST /invalid，共享单号追加_F后缀，推送成功后状态→审批中(3)</td></tr>
<tr><td>重新生成</td><td>对作废的预提单按原年月重新生成</td><td>详情页</td><td>单据状态=作废(7)</td><td>调用POST /regenerate，校验无非作废单后生成新预提单</td></tr>
<tr><td>详情</td><td>查看预提完整信息</td><td>列表页</td><td>选中某行</td><td>跳转详情页查看预提完整信息</td></tr>
</tbody>
</table>
<h4>按钮1：执行（详情页）</h4>
<ul><li><strong>触发条件</strong>：单据状态=保存(0)</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 校验DTO非空、共享单号非空、年月非空、交易公司非空</p>
<p>2. 按共享单号查询所有预提头表记录</p>
<p>3. 汇总不含税金额作为推送总金额</p>
<p>4. 构建表头DTO(attribute1=1正向)和明细行列表(跳过金额为0的记录)</p>
<p>5. 调用arrowFsscSdk.inLimitBudPush推送共享</p>
<p>6. 共享返回S则更新状态为审批中(3)，否则报错</p>
<h4>按钮2：作废（详情页）</h4>
<ul><li><strong>触发条件</strong>：单据状态=保存(0)或审批中(3)</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 校验DTO非空、共享单号非空、年月非空、交易公司非空</p>
<p>2. 按共享单号查询所有预提头表记录</p>
<p>3. 汇总不含税金额，金额取负数</p>
<p>4. 构建表头DTO(attribute1=2冲销，共享单号追加_F后缀)和明细行列表(金额取负)</p>
<p>5. 调用arrowFsscSdk.inLimitBudPush推送共享</p>
<p>6. 共享返回S则更新状态为审批中(3)，否则报错</p>
<h4>按钮3：重新生成（详情页）</h4>
<ul><li><strong>触发条件</strong>：单据状态=作废(7)</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 按年月+交易公司编码查询EXPENSE_WITHHOLDING_HEAD表中bill_status!=7的记录</p>
<p>2. 若存在则报错提示"已存在重新生成【xxx】单据，无需重复生成"</p>
<p>3. 构造ViewDTO(tradingCompanyCode, startDate=年月, syncFlag=1)</p>
<p>4. 调用generateBill从视图重新查询并生成新预提单</p>
</KbCard>

<KbCard title="保存校验">
<p>本页面无手工保存校验。预提单由定时任务自动生成，生成时校验防重复(同口径已存在非作废单则跳过)。</p>
</KbCard>

<KbCard title="提交校验">
<h4>校验1：重新生成时校验是否已存在非作废状态的预提单 —— 防止重复生成</h4>
<ul><li><strong>详细逻辑</strong>：按年月+交易公司编码查询EXPENSE_WITHHOLDING_HEAD表中bill_status!=7(非作废)的记录，若存在则报错</li><li><strong>系统体现</strong>：doRegenerate方法中调用selectRegenerate查询，非空则抛CommonException</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT SHARE_NO, WITHHOLDING_NO, BILL_STATUS, WITHHOLDING_YEAR, WITHHOLDING_MONTH, TRADING_COMPANY_CODE
FROM EXPENSE_WITHHOLDING_HEAD
WHERE TO_CHAR(CHECK_TIME, 'yyyy-MM') = '{年月}'
  AND TRADING_COMPANY_CODE = '{交易公司编码}'
  AND NVL(BILL_STATUS, 0) != 7</code></pre>
<h4>校验2：执行/作废时校验必填参数 —— 确保推送数据完整</h4>
<ul><li><strong>详细逻辑</strong>：校验DTO非空、共享单号(SHARE_NO)非空、年月(CHECK_TIME_STR)非空、交易公司编码(TRADING_COMPANY_CODE)非空</li><li><strong>系统体现</strong>：operateExpenseWithholding方法中依次校验，为空则抛CommonException</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT SHARE_NO, WITHHOLDING_YEAR, WITHHOLDING_MONTH, TRADING_COMPANY_CODE, CHECK_TIME
FROM EXPENSE_WITHHOLDING_HEAD
WHERE SHARE_NO = '{共享单号}'</code></pre>
<h4>校验3：推送前校验预提单数据存在 —— 确保共享单号对应数据未丢失</h4>
<ul><li><strong>详细逻辑</strong>：按共享单号+isHome查询EXPENSE_WITHHOLDING_HEAD表，若为空则报错"未查询到预提单数据"</li><li><strong>系统体现</strong>：doserviceWithHolding方法中查询headList，空则抛CommonException</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT * FROM EXPENSE_WITHHOLDING_HEAD
WHERE SHARE_NO = '{共享单号}'
  AND IS_HOME = {isHome}</code></pre>
</KbCard>

<KbCard title="状态机">
<pre class="lang-text" v-pre><code>[保存SAVE(0)] ──执行──&gt; [审批中AUDITING(3)]
[保存SAVE(0)] ──作废──&gt; [审批中AUDITING(3)] (作废冲销，推送负数)
[审批中AUDITING(3)] ──作废──&gt; [审批中AUDITING(3)] (作废冲销，推送负数)
[作废INVALID(7)] ──重新生成──&gt; [保存SAVE(0)] (新单据)</code></pre>
<table class="kb-field-tbl">
<thead>
<tr><th>状态值</th><th>状态名称</th><th>可执行操作</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>保存</td><td>执行、作废</td></tr>
<tr><td>3</td><td>审批中</td><td>作废</td></tr>
<tr><td>7</td><td>作废</td><td>重新生成</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="上游依赖">
<table class="kb-field-tbl">
<thead>
<tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
</thead>
<tbody>
<tr><td>expense_withholding_view视图</td><td>数据视图</td><td>预提数据来源，汇总出库签收服务费</td><td>视图中存在对应年月的出库签收数据</td></tr>
<tr><td>DIVISION_BASE_SET(事业部配置)</td><td>数据表</td><td>提供事业部编码用于生成预提单号</td><td>存在对应organizationId的事业部配置</td></tr>
<tr><td>出库签收单</td><td>上游业务</td><td>签收审批通过后服务费数据进入视图</td><td>出库签收单已审批通过</td></tr>
<tr><td>AE.SIE.POSITION_LDAP_CODE值集</td><td>LOV值集</td><td>获取申请人职位编码</td><td>值集中存在expense_withholding_head对应配置</td></tr>
<tr><td>FSSC共享系统</td><td>外部接口</td><td>推送预提数据入账</td><td>共享系统连通且返回状态S</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="下游影响">
<ul><li><strong>FSSC共享系统</strong>：预提数据推送至共享系统入账，占用共享预算，单据类型GCYT</li><li><strong>共享预算</strong>：预提金额占用对应成本中心+费用科目的共享预算</li><li><strong>财务核算</strong>：共享系统根据预提数据生成财务凭证，费用与收入同期匹配</li></ul>
</KbCard>

<KbCard title="EXPENSE_WITHHOLDING_HEAD（服务费预提头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>WITHHOLDING_HEAD_ID</td><td>Long</td><td>预提主键ID</td><td>-</td><td>自增主键，@Id @GeneratedValue</td></tr>
<tr><td>DIVISION_ID</td><td>Long</td><td>事业部ID</td><td>-</td><td>来源于出库签收数据，NotNull</td></tr>
<tr><td>ORGANIZATION_ID</td><td>Long</td><td>组织ID</td><td>-</td><td>来源于出库签收数据</td></tr>
<tr><td>WITHHOLDING_NO</td><td>String</td><td>预提单号</td><td>预提单号</td><td>按编码规则AE.WITHHOLDING_NO(工程)/AE.WITHHOLDING_NO_HOME(家装)生成</td></tr>
<tr><td>SHARE_NO</td><td>String</td><td>共享单号</td><td>共享单号</td><td>按编码规则AE.SHARE_NO(工程)/AE.SHARE_NO_HOME(家装)生成，作废时追加_F后缀</td></tr>
<tr><td>TRADING_COMPANY_ID</td><td>Long</td><td>交易公司ID</td><td>-</td><td>来源于出库签收数据</td></tr>
<tr><td>TRADING_COMPANY_CODE</td><td>String</td><td>交易公司编码</td><td>交易公司编码</td><td>来源于出库签收数据</td></tr>
<tr><td>TRADING_COMPANY_NAME</td><td>String</td><td>交易公司名称</td><td>交易公司名称</td><td>来源于出库签收数据</td></tr>
<tr><td>BILLING_UNIT_CODE</td><td>String</td><td>法人客户编码</td><td>法人客户编码</td><td>来源于出库签收数据</td></tr>
<tr><td>BILLING_UNIT_NAME</td><td>String</td><td>法人客户名称</td><td>法人客户名称</td><td>来源于出库签收数据</td></tr>
<tr><td>WITHHOLDING_YEAR</td><td>String</td><td>预提年度</td><td>预提年度</td><td>来源于签收数据的年月</td></tr>
<tr><td>WITHHOLDING_MONTH</td><td>String</td><td>预提月份</td><td>预提月份</td><td>来源于签收数据的年月</td></tr>
<tr><td>CHECK_TIME</td><td>LocalDate</td><td>审批通过时间</td><td>-</td><td>签收审批通过时间，取年月用于推送共享</td></tr>
<tr><td>WITHHOLDING_RAX_AMOUNT</td><td>BigDecimal</td><td>预提含税总额</td><td>预提总额(含税)</td><td>服务费×预提比例(含税)</td></tr>
<tr><td>WITHHOLDING_NORAX_AMOUNT</td><td>BigDecimal</td><td>预提不含税总额</td><td>预提总额(不含税)</td><td>服务费×预提比例(不含税)，推送共享时按此金额汇总</td></tr>
<tr><td>COST_CODE</td><td>String</td><td>成本中心编码</td><td>成本中心编码</td><td>来源于出库签收数据</td></tr>
<tr><td>COST_NAME</td><td>String</td><td>成本中心名称</td><td>成本中心名称</td><td>来源于出库签收数据</td></tr>
<tr><td>FEECODE</td><td>String</td><td>费用科目编码</td><td>费用科目编码</td><td>来源于出库签收数据</td></tr>
<tr><td>BILL_STATUS</td><td>Long</td><td>单据状态</td><td>单据状态</td><td>0-保存/3-审批中/7-作废</td></tr>
<tr><td>GENERATED_TIMES</td><td>Long</td><td>重新生成次数</td><td>生成次数</td><td>默认0，每次重新生成+1</td></tr>
<tr><td>IS_HOME</td><td>Long</td><td>是否家装合同</td><td>是否家装</td><td>1-工程/2-家装，影响编码规则选择</td></tr>
<tr><td>REMARK</td><td>String</td><td>备注</td><td>备注</td><td>默认空</td></tr>
<tr><td>ATTRIBUTE1</td><td>String</td><td>弹性字段</td><td>-</td><td>备用扩展字段</td></tr>
<tr><td>ATTRIBUTE2</td><td>String</td><td>弹性字段</td><td>-</td><td>备用扩展字段</td></tr>
<tr><td>ATTRIBUTE3</td><td>String</td><td>弹性字段</td><td>-</td><td>备用扩展字段</td></tr>
<tr><td>ATTRIBUTE4</td><td>String</td><td>弹性字段</td><td>-</td><td>备用扩展字段</td></tr>
<tr><td>ATTRIBUTE5</td><td>String</td><td>弹性字段</td><td>-</td><td>备用扩展字段</td></tr>
</tbody>
</table>
<p><strong>查询SQL</strong>：</p>
<pre class="detail-sql" v-pre><code>SELECT * FROM EXPENSE_WITHHOLDING_HEAD
WHERE ORGANIZATION_ID = #{organizationId}
  AND NVL(WITHHOLDING_NO, '') LIKE '%' || #{withholdingNo} || '%'
  AND NVL(WITHHOLDING_YEAR, '') = #{withholdingYear}
  AND NVL(WITHHOLDING_MONTH, '') = #{withholdingMonth}
ORDER BY WITHHOLDING_HEAD_ID DESC;</code></pre>
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
<tr><td>已存在重新生成【xxx】单据，无需重复生成！</td><td>重新生成按钮</td><td>该年月+交易公司下已存在非作废状态的预提单。先作废现有预提单后再重新生成</td><td>高</td><td>doRegenerate中selectRegenerate查询非空时抛出</td></tr>
<tr><td>参数错误！</td><td>执行/作废按钮</td><td>传入的DTO对象为null。检查前端参数传递</td><td>高</td><td>operateExpenseWithholding中DTO为null时抛出</td></tr>
<tr><td>单据编码不能为空</td><td>执行/作废按钮</td><td>共享单号(SHARE_NO)为空。检查预提单数据完整性</td><td>高</td><td>operateExpenseWithholding中shareNo为空时抛出</td></tr>
<tr><td>年月不能为空</td><td>执行/作废按钮</td><td>审批通过时间(checkTimeStr)为空。检查年月数据</td><td>中</td><td>operateExpenseWithholding中checkTimeStr为null时抛出</td></tr>
<tr><td>交易公司不能为空</td><td>执行/作废按钮</td><td>交易公司编码(TRADING_COMPANY_CODE)为空。检查交易公司数据</td><td>中</td><td>operateExpenseWithholding中tradingCompanyCode为空时抛出</td></tr>
<tr><td>未查询到预提单数据，单据号：xxx</td><td>执行/作废按钮</td><td>按共享单号+isHome查询不到预提单数据。确认数据未被删除</td><td>高</td><td>doserviceWithHolding中headList为空时抛出</td></tr>
<tr><td>共享接口返回null,执行共享接口失败！</td><td>执行/作废按钮</td><td>共享接口调用失败返回null。检查共享系统连通性</td><td>高</td><td>arrowFsscSdk.inLimitBudPush返回null时抛出</td></tr>
<tr><td>共享返回的错误信息</td><td>执行/作废按钮</td><td>共享系统处理失败。根据具体错误信息排查共享系统</td><td>高</td><td>共享返回processStatus非S时抛出processMsgData</td></tr>
<tr><td>请传入正确的同步时间段</td><td>定时任务</td><td>startDate/endDate均未传或格式错误。传入正确的yyyy-MM格式时间参数</td><td>中</td><td>WithholdingInProjectJob中startDate和endDate均空时抛出</td></tr>
<tr><td>【xxx】该时间格式错误，请输入正确的时间格式：yyyy-MM</td><td>定时任务</td><td>时间参数格式不符合yyyy-MM。修正时间格式</td><td>中</td><td>checkDateFormat中SimpleDateFormat.parse失败时抛出</td></tr>
<tr><td>找不到符合的预提/冲销单号【xxx】的信息</td><td>共享回调</td><td>共享回调时按共享单号查询不到预提单。确认数据未被删除</td><td>高</td><td>FsscApiServiceImpl中WITHHOLDING_PROJECT分支查询为空时抛出</td></tr>
<tr><td>找不到符合的更新状态码【xxx】</td><td>共享回调</td><td>共享回调传入的状态码不在系统定义范围内。检查共享系统状态码配置</td><td>高</td><td>FsscApiServiceImpl中status解析失败时抛出</td></tr>
<tr><td>请确认该单据号【xxx】是预提/冲销头单号！</td><td>共享回调</td><td>共享回调按单据号查询不到头表记录。确认单据号类型正确</td><td>高</td><td>FsscApiServiceImpl中headerCode查询为空时抛出</td></tr>
<tr><td>未知的单据类型</td><td>共享回调</td><td>共享回调传入的单据类型不在枚举范围内。检查共享系统单据类型配置</td><td>高</td><td>FsscApiServiceImpl中billType未匹配枚举时抛出</td></tr>
</tbody>
</table>
<h4>报错1：已存在重新生成【xxx】单据，无需重复生成！</h4>
<ul><li><strong>触发条件</strong>：点击重新生成按钮时，该年月+交易公司下已存在非作废状态的预提单</li><li><strong>逻辑分析</strong>：doRegenerate方法中调用selectRegenerate按年月和交易公司编码查询EXPENSE_WITHHOLDING_HEAD，若存在非作废(STATUS&lt;&gt;'VOID')的预提单则抛出阻断性报错。需先作废现有预提单后再重新生成</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.CHECK_TIME_STR,
         ewh.TRADING_COMPANY_CODE, ewh.STATUS, ewh.HZ_APPROVE_STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.CHECK_TIME_STR = :checkTimeStr
    AND ewh.TRADING_COMPANY_CODE = :tradingCompanyCode
    AND ewh.STATUS &lt;&gt; 'VOID'
  -- 查出已存在的非作废预提单</code></pre>
<h4>报错2：参数错误！</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，传入的DTO对象为null</li><li><strong>逻辑分析</strong>：operateExpenseWithholding方法中校验DTO非null，若为null则抛出阻断性报错。需检查前端参数传递</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
  -- 校验预提单数据是否存在</code></pre>
<h4>报错3：单据编码不能为空</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，共享单号(SHARE_NO)为空</li><li><strong>逻辑分析</strong>：operateExpenseWithholding方法中校验shareNo非空，因共享单号为推送共享系统的关键标识。需检查预提单数据完整性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO IS NULL OR TRIM(ewh.SHARE_NO) = ''
  -- 查出共享单号为空的预提单</code></pre>
<h4>报错4：年月不能为空</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，审批通过时间(checkTimeStr)为空</li><li><strong>逻辑分析</strong>：operateExpenseWithholding方法中校验checkTimeStr非空，因年月用于定位预提数据。需检查年月数据</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.CHECK_TIME_STR, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.CHECK_TIME_STR IS NULL OR TRIM(ewh.CHECK_TIME_STR) = ''
  -- 查出年月为空的预提单</code></pre>
<h4>报错5：交易公司不能为空</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，交易公司编码(TRADING_COMPANY_CODE)为空</li><li><strong>逻辑分析</strong>：operateExpenseWithholding方法中校验tradingCompanyCode非空，因交易公司为预提单的关键维度。需检查交易公司数据</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.TRADING_COMPANY_CODE, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.TRADING_COMPANY_CODE IS NULL OR TRIM(ewh.TRADING_COMPANY_CODE) = ''
  -- 查出交易公司为空的预提单</code></pre>
<h4>报错6：未查询到预提单数据，单据号：xxx</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，按共享单号+isHome查询不到预提单数据</li><li><strong>逻辑分析</strong>：doserviceWithHolding方法中按SHARE_NO和IS_HOME查询EXPENSE_WITHHOLDING_HEAD，若headList为空则抛出阻断性报错。需确认数据未被删除</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.IS_HOME, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
    AND ewh.IS_HOME = :isHome
  -- 若返回空，说明预提单数据不存在</code></pre>
<h4>报错7：共享接口返回null,执行共享接口失败！</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，共享接口(arrowFsscSdk.inLimitBudPush)返回null</li><li><strong>逻辑分析</strong>：调用共享接口推送预提数据，若返回null则抛出阻断性报错。可能原因：共享系统不可用、网络异常。需检查共享系统连通性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.STATUS, ewh.HZ_APPROVE_STATUS,
         ewh.TOTAL_AMOUNT, ewh.CHECK_TIME_STR
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
  -- 检查预提单数据完整性，作为共享推送参数</code></pre>
<h4>报错8：共享返回的错误信息</h4>
<ul><li><strong>触发条件</strong>：执行/作废按钮时，共享系统返回processStatus非S(失败)</li><li><strong>逻辑分析</strong>：共享接口返回processStatus非S时抛出processMsgData错误信息。需根据具体错误信息排查共享系统</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.STATUS, ewh.PROCESS_STATUS, ewh.PROCESS_MSG
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
    AND ewh.PROCESS_STATUS &lt;&gt; 'S'
  -- 查出共享处理失败的预提单及错误信息</code></pre>
<h4>报错9：请传入正确的同步时间段</h4>
<ul><li><strong>触发条件</strong>：定时任务执行时，startDate/endDate均未传或格式错误</li><li><strong>逻辑分析</strong>：WithholdingInProjectJob中校验startDate和endDate不同时为空，若均为空则抛出中等优先级报错。需传入正确的yyyy-MM格式时间参数</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT COUNT(*) AS 视图数据量
  FROM EXPENSE_WITHHOLDING_VIEW ewv
  WHERE ewv.CHECK_TIME BETWEEN :startDate AND :endDate
  -- 校验时间范围内是否有视图数据</code></pre>
<h4>报错10：【xxx】该时间格式错误，请输入正确的时间格式：yyyy-MM</h4>
<ul><li><strong>触发条件</strong>：定时任务执行时，时间参数格式不符合yyyy-MM</li><li><strong>逻辑分析</strong>：checkDateFormat方法中用SimpleDateFormat("yyyy-MM").parse()解析时间参数，若解析失败则抛出中等优先级报错。需修正时间格式</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewv.CHECK_TIME, ewv.TRADING_COMPANY_CODE, COUNT(*) AS 数据量
  FROM EXPENSE_WITHHOLDING_VIEW ewv
  WHERE ewv.CHECK_TIME = :checkTime
  GROUP BY ewv.CHECK_TIME, ewv.TRADING_COMPANY_CODE
  -- 校验时间格式对应的视图数据</code></pre>
<h4>报错11：找不到符合的预提/冲销单号【xxx】的信息</h4>
<ul><li><strong>触发条件</strong>：共享回调时，按共享单号查询不到预提单</li><li><strong>逻辑分析</strong>：FsscApiServiceImpl中WITHHOLDING_PROJECT分支按共享单号查询EXPENSE_WITHHOLDING_HEAD，若为空则抛出阻断性报错。需确认数据未被删除</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.STATUS, ewh.VALID
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
  -- 若返回空，说明共享单号对应的预提单不存在</code></pre>
<h4>报错12：找不到符合的更新状态码【xxx】</h4>
<ul><li><strong>触发条件</strong>：共享系统回调更新预提单状态时，传入的状态码不在系统定义范围内</li><li><strong>逻辑分析</strong>：FsscApiServiceImpl中按共享回调传入的status匹配系统状态枚举，若未匹配到则抛出阻断性报错。需检查共享系统状态码配置与系统枚举一致</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.STATUS, ewh.PROCESS_STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
  -- 检查预提单当前状态与共享回调状态码</code></pre>
<h4>报错13：请确认该单据号【xxx】是预提/冲销头单号！</h4>
<ul><li><strong>触发条件</strong>：共享系统回调时，按单据号查询不到预提/冲销头表记录</li><li><strong>逻辑分析</strong>：FsscApiServiceImpl中按headerCode查询头表，若为空则抛出阻断性报错。需确认单据号类型正确且数据未被删除</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.WITHHOLDING_NO, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :headerCode
     OR ewh.WITHHOLDING_NO = :headerCode
  -- 校验单据号是否为预提/冲销头单号</code></pre>
<h4>报错14：未知的单据类型</h4>
<ul><li><strong>触发条件</strong>：共享系统回调时，传入的单据类型不在系统枚举(SharedBillTypeEnum)范围内</li><li><strong>逻辑分析</strong>：FsscApiServiceImpl中按billType匹配WITHHOLDING_IN/WITHHOLDING_OUT/WITHHOLDING_PROJECT等枚举，若未匹配则抛出阻断性报错。需检查共享系统单据类型配置</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ewh.WITHHOLDING_HEAD_ID, ewh.SHARE_NO, ewh.IS_HOME, ewh.STATUS
  FROM EXPENSE_WITHHOLDING_HEAD ewh
  WHERE ewh.SHARE_NO = :shareNo
  -- 检查预提单类型与共享单据类型枚举</code></pre>
</KbCard>

<KbCard title="常见问题">
<p><strong>Q1: 服务费预提按什么周期生成？</strong></p>
<p>A: 按年度和月份生成。定时任务WithholdingInProjectJob支持两种模式：指定单月(syncFlag=1,仅传startDate)和指定时间段(syncFlag=2,传startDate+endDate)。系统从expense_withholding_view视图按交易公司+法人客户+年月+成本中心+费用科目维度汇总出库签收服务费自动生成。</p>
<p><strong>Q2: 预提数据推送至哪里？</strong></p>
<p>A: 推送至FSSC共享中心，单据类型为GCYT（工程服务费预提），共享单据类型枚举SharedBillTypeEnum.WITHHOLDING_PROJECT。推送数据包含表头(总金额、申请人、审批日期取年月最后一天)和明细行(每条预提记录的金额、成本中心、费用科目、法人客户、借贷类型DR)。</p>
<p><strong>Q3: 如何防止重复生成预提？</strong></p>
<p>A: 同一交易公司+法人+年月+成本中心维度下，若已存在非作废状态的预提单则跳过不生成；若存在保存状态的预提单则更新金额不重复建单。重新生成时会校验该年月+交易公司下是否存在非作废单，存在则报错。</p>
<p><strong>Q4: 定时任务执行后未生成预提数据</strong></p>
<ul><li><strong>原因</strong>：expense_withholding_view视图中无对应年月的出库签收数据，或DIVISION_BASE_SET中无对应事业部配置</li><li><strong>处理</strong>：</li></ul>
<p>1. 检查视图数据：<code>SELECT * FROM expense_withholding_view WHERE check_time = '&#123;年月&#125;'</code></p>
<p>2. 检查事业部配置：<code>SELECT * FROM division_base_set WHERE organization_id IN (...)</code></p>
<p><strong>Q5: 执行推送共享后状态未更新</strong></p>
<ul><li><strong>原因</strong>：共享接口返回成功但updateBillStatus执行异常，或共享单号对应多条记录</li><li><strong>处理</strong>：<code>SELECT * FROM EXPENSE_WITHHOLDING_HEAD WHERE SHARE_NO = '&#123;共享单号&#125;'</code>检查记录状态</li></ul>
<p><strong>Q6: 工程和家装预提单有什么区别？</strong></p>
<p>A: 编码规则不同。工程(isHome=1)使用AE.SHARE_NO/AE.WITHHOLDING_NO，家装(isHome=2)使用AE.SHARE_NO_HOME/AE.WITHHOLDING_NO_HOME。推送共享时共享单号变量为交易公司编码，预提单号变量为事业部编码。</p>
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
<tr><td>2025-10-29</td><td>-</td><td>hfy</td><td>初始版本，工程服务费预提功能开发</td></tr>
<tr><td>2026-07-31</td><td>-</td><td>-</td><td>初始生成知识库文档</td></tr>
<tr><td>2026-08-30</td><td>-</td><td>CodeArts</td><td>按skill规范重写：移除定义章节、界面模块表格改为6列、数据库表改为5列、报错表改为5列、新增上游依赖/下游影响/选择弹窗/导入/提交校验章节、补充工程家装双编码规则</td></tr>
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