<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">业务是什么</span>
    <h2>工程真实性核销</h2>
    <p>将供应商发票与出库行逐笔对应核销，确认业务真实发生，并触发返利计算</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4Z"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">为何要做真实性核销</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">解决两个业务诉求</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>防虚假核销</strong> — 发票与出库行必须真实对应，杜绝空核销套利</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>触发返利</strong> — 核销确认后自动核算供应商应得返利</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 7L8 9L10 6"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">核销单包含什么</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">两类核心内容</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>核销行</strong> — 选择出库行，填写本次核销数量</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>发票明细</strong> — 关联已上传的有效发票明细</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>真实性核销流程</h2>
    <p>从关联发票上传单到提交审批，通过后更新出库行与发票并触发返利</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 7L8 9L10 6"/></svg></div>
      <h5>关联发票上传单</h5>
      <small>选择已生效的<br>发票上传单</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 8H10"/></svg></div>
      <h5>新建核销单</h5>
      <small>录入核销行与<br>发票明细并保存</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
      <h5>提交审批</h5>
      <small>走真实性核销<br>工作流审批</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 7L8 9L10 6"/></svg></div>
      <h5>审批通过生效</h5>
      <small>更新出库行/发票<br>触发返利</small>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>取消与终止：</strong>核销支持多种类型的取消操作；已提交但需中止时支持终止，并可在满足条件时撤回终止恢复。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键规则</span>
    <h2>核销的关键约束</h2>
    <p>核销数量不可超额，必须以真实有效发票为依据</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"/><path d="M6 8L7 9L10 6"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">核销行+发票明细</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">每行核销需明确出库行与对应发票明细，保证账实相符。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"/><path d="M8 4V12"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">核销数量不超额</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">本次核销数量受出库行可核销余额约束，超额将被拦截。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8H11"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">审批后联动</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">审批通过更新出库行与发票状态，并触发供应商返利计算。</p>
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
  <h4 class="bf-main-title">工程真实性核销 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → 核销发票上传单(关联) → ★新建真实性核销单★ → 提交审批(工作流TRUTH_VERIFY) → ⚖审批通过？ → 更新出库行/发票状态/触发返利 / 驳回中断 → 结束</p>
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
      <text x="175" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">核销发票上传</text>
      <rect x="250" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="305" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">出库单行</text>
      <rect x="380" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">折扣政策</text>
      <rect x="510" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="565" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">编码规则</text>
      <rect x="640" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="695" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">工作流</text>
      <line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="145" y="210" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">核销发票上传单(关联)</text>
      <line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★新建真实性核销单★</text>
      <text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">选出库行/发票/填数量·保存</text>
      <line x1="235" y1="320" x2="235" y2="336" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="150" y="336" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="361" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">提交审批(工作流TRUTH_VERIFY)</text>
      <line x1="235" y1="376" x2="235" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="235,392 305,432 235,472 165,432" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="436" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 审批通过？</text>
      <line x1="235" y1="472" x2="235" y2="488" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="140" y="488" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="235" y="513" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">更新出库行/发票状态/触发返利</text>
      <line x1="235" y1="528" x2="235" y2="544" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="180" y="544" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="235" y="569" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="235" y1="584" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <line x1="305" y1="432" x2="430" y2="432" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
      <rect x="380" y="417" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
      <text x="430" y="436" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">驳回中断✗</text>
      <line x1="430" y1="432" x2="430" y2="293" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="430" y1="293" x2="315" y2="293" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
      <rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="200" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="275" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">出库确认·核销数量</text>
      <rect x="375" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="450" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">发票管理·状态</text>
      <rect x="550" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="625" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">返利计算·触发重算</text>
      <rect x="725" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="800" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">核销单据·取消处理</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批驳回/中断</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：真实性核销保存逻辑">
<ul><li><strong>业务意义</strong>：保存真实性核销单，包含出库单行和发票核销明细，确认业务真实发生</li><li><strong>具体逻辑描述</strong>：</li><li>新增时自动生成核销单号(编码规则AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)，初始状态为新建</li><li>保存数据包含两部分：核销行(EPM_INVOICE_TRUTH_LINE)和核销发票明细(EPM_VERIFER_INVOICE_DETAILS)</li><li>每行核销数据包含：出库单号、发货日期、产品编码、可核销数量、剩余可核销数量、本次核销数量</li><li>本次核销数量的小数位不可超过3位</li><li>修改时采用先删后插策略处理子表数据</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：核销数量校验">
<ul><li><strong>业务意义</strong>：确保本次核销数量不超过剩余可核销数量，防止超额核销</li><li><strong>具体逻辑描述</strong>：</li><li>保存时校验每行的本次核销数量是否大于剩余可核销数量</li><li>剩余可核销数量来源于出库单行的可核销数量(CAN_VERIFY_NUM)</li><li>校验发货日期和产品编码是否匹配</li><li>单位转换通过UOM_RATE处理，转化后剩余可核销数量=剩余可核销数量×UOM_RATE</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：审批通过后处理">
<ul><li><strong>业务意义</strong>：审批通过后更新出库单行核销数量，触发返利计算</li><li><strong>具体逻辑描述</strong>：</li><li>更新出库单行的已核销数量增加本次核销数量，可核销数量减少本次核销数量</li><li>更新核销发票明细有效状态为valid</li><li>若出库单行渠道上调价&gt;0，触发返利计算(operationRebateBiz)</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：取消核销/作废发票">
<ul><li><strong>业务意义</strong>：支持多种维度取消核销或作废发票，灵活处理核销异常</li><li><strong>具体逻辑描述</strong>：</li><li>支持5种操作类型：invoice(按发票)/invoiceDetail(按发票明细)/invLine(按出库单行)/veriferDetail(按核销明细)/obsInvoice(作废发票)</li><li>取消核销时，查询受影响的核销明细，更新有效状态为canceled，记录取消操作人和时间</li><li>若受影响的核销单处于审批中(stat=3)，则中断审批，将核销单状态重置为新建</li><li>更新出库单行：可核销数量回加取消数量，已核销数量减少取消数量</li><li>作废发票时，更新发票主要信息有效状态为obsolete，同时更新关联核销明细状态</li><li>取消操作使用分布式锁控制并发，避免同时取消导致数据不一致</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：终止与撤回终止">
<ul><li><strong>业务意义</strong>：对真实性核销单进行终止操作，支持撤回终止恢复</li><li><strong>具体逻辑描述</strong>：</li><li>终止(terminate)：标记核销单为终止状态，记录终止历史</li><li>撤回终止(undoTerminate)：恢复为正常状态</li><li>bizType区分：isHome=2为211115(家装)，否则210916(工程)</li></ul>
</KbCard>

<KbCard num="6" title="重点逻辑6：数量转化">
<ul><li><strong>业务意义</strong>：处理发票明细单位与核销单位不一致时的数量转换</li><li><strong>具体逻辑描述</strong>：</li><li>convertNum接口处理单位转换</li><li>通过UOM_RATE计算转化后剩余可核销数量(CONVERT_SUR_VERIFER_NUMBER)</li><li>保证核销数量在不同计量单位下准确</li></ul>
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
<tr><td>核销单号</td><td>EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO</td><td>文本输入框</td><td>模糊查询核销单号</td><td>常显</td><td>手动输入</td></tr>
<tr><td>项目编码</td><td>EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE</td><td>文本输入框</td><td>模糊查询项目</td><td>常显</td><td>手动输入</td></tr>
<tr><td>合同编码</td><td>EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE</td><td>文本输入框</td><td>模糊查询合同</td><td>常显</td><td>手动输入</td></tr>
<tr><td>经销商名称</td><td>EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME</td><td>文本输入框</td><td>模糊查询经销商</td><td>常显</td><td>手动输入</td></tr>
<tr><td>审批状态</td><td>EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS</td><td>下拉选择框</td><td>筛选审批状态</td><td>常显</td><td>值集HWKF.APPROVE_STATUS</td></tr>
<tr><td>生效状态</td><td>EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS</td><td>下拉选择框</td><td>筛选生效状态</td><td>常显</td><td>值集VERIFER_EFFECT_STATUS</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：列表表格">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>核销单号</td><td>EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO</td><td>文本框</td><td>真实性核销单号</td><td>常显</td><td>新增时按编码规则自动生成，不可编辑</td></tr>
<tr><td>项目编码</td><td>EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE</td><td>文本框</td><td>关联项目编码</td><td>常显</td><td>来源于项目选择，不可编辑</td></tr>
<tr><td>项目名称</td><td>EPM_INVOICE_TRUTH_HEADER.PROJECT_NAME</td><td>文本框</td><td>关联项目名称</td><td>常显</td><td>来源于项目选择，不可编辑</td></tr>
<tr><td>合同编码</td><td>EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE</td><td>文本框</td><td>关联合同编码</td><td>常显</td><td>来源于合同选择，不可编辑</td></tr>
<tr><td>经销商名称</td><td>EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME</td><td>文本框</td><td>经销商名称</td><td>常显</td><td>来源于项目/合同，不可编辑</td></tr>
<tr><td>核销发票上传单号</td><td>EPM_INVOICE_TRUTH_HEADER.INVOICE_VERIFER_NO</td><td>文本框</td><td>关联的核销发票上传单号</td><td>常显</td><td>选择核销发票上传单后带入</td></tr>
<tr><td>核销类型</td><td>EPM_INVOICE_TRUTH_HEADER.VERIFER_TYPE</td><td>文本框</td><td>核销类型</td><td>常显</td><td>来源于核销发票上传单</td></tr>
<tr><td>审批状态</td><td>EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS</td><td>标签</td><td>H0流程审批状态</td><td>常显</td><td>值集HWKF.APPROVE_STATUS翻译</td></tr>
<tr><td>是否家装</td><td>EPM_INVOICE_TRUTH_HEADER.IS_HOME</td><td>文本框</td><td>是否家装</td><td>常显</td><td>1-工程/2-家装</td></tr>
<tr><td>折扣政策</td><td>EPM_INVOICE_TRUTH_HEADER.DISCOUNT_POLICY_NAME</td><td>文本框</td><td>关联折扣政策名称</td><td>常显</td><td>选择折扣政策后带入</td></tr>
<tr><td>创建人</td><td>EPM_INVOICE_TRUTH_HEADER.CREATOR_NAME</td><td>文本框</td><td>创建人</td><td>常显</td><td>系统自动记录</td></tr>
<tr><td>创建时间</td><td>EPM_INVOICE_TRUTH_HEADER.CREATE_TIME</td><td>日期</td><td>创建时间</td><td>常显</td><td>系统自动记录</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块3：详情页-核销行（明细字段列表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>出库单号</td><td>EPM_INVOICE_TRUTH_LINE.INVBILLNO</td><td>文本框</td><td>ERP出库单号</td><td>常显</td><td>来源于出库单行，不可编辑</td></tr>
<tr><td>发货日期</td><td>EPM_INVOICE_TRUTH_LINE.DATE_INVBILL</td><td>日期选择框</td><td>发货日期</td><td>常显</td><td>来源于出库单行，不可编辑</td></tr>
<tr><td>产品编码</td><td>EPM_INVOICE_TRUTH_LINE.ITEM_CODE</td><td>文本框</td><td>产品编码</td><td>常显</td><td>来源于出库单行，不可编辑</td></tr>
<tr><td>产品名称</td><td>EPM_INVOICE_TRUTH_LINE.ITEM_NAME</td><td>文本框</td><td>产品名称</td><td>常显</td><td>来源于出库单行，不可编辑</td></tr>
<tr><td>实发数量</td><td>EPM_INVOICE_TRUTH_LINE.QTY_BILL</td><td>数值框</td><td>实发数量</td><td>常显</td><td>来源于出库单行，不可编辑</td></tr>
<tr><td>可核销数量</td><td>EPM_INVOICE_TRUTH_LINE.CAN_VERIFER_NUMBER</td><td>数值框</td><td>出库单行可核销数量</td><td>常显</td><td>来源于出库单行CAN_VERIFY_NUM，不可编辑</td></tr>
<tr><td>剩余可核销数量</td><td>EPM_INVOICE_TRUTH_LINE.SURPLUS_CAN_VERIFER_NUMBER</td><td>数值框</td><td>剩余可核销数量</td><td>常显</td><td>可核销数量-已核销数量，不可编辑</td></tr>
<tr><td>本次核销数量</td><td>EPM_INVOICE_TRUTH_LINE.THIS_VERIFER_NUMBER</td><td>数值框</td><td>本次核销数量</td><td>常显</td><td>手工录入，可编辑，小数位≤3，&gt;0且≤剩余可核销数量</td></tr>
<tr><td>核销截止日</td><td>EPM_INVOICE_TRUTH_LINE.VERIFER_END_DATE</td><td>日期选择框</td><td>核销截止日期</td><td>常显</td><td>手工录入，可编辑</td></tr>
<tr><td>补核销截止日</td><td>EPM_INVOICE_TRUTH_LINE.REPAIR_VERIFER_END_DATE</td><td>日期选择框</td><td>补核销截止日期</td><td>常显</td><td>手工录入，可编辑</td></tr>
<tr><td>发票号码</td><td>EPM_INVOICE_TRUTH_LINE.INVOICE_NUMBER</td><td>文本框</td><td>关联发票号码</td><td>常显</td><td>来源于发票信息，不可编辑</td></tr>
<tr><td>发票代码</td><td>EPM_INVOICE_TRUTH_LINE.INVOICE_CODE</td><td>文本框</td><td>关联发票代码</td><td>常显</td><td>来源于发票信息，不可编辑</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块4：详情页-核销发票明细">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>发票号码</td><td>EPM_VERIFER_INVOICE_DETAILS.INVOICE_NUMBER</td><td>文本框</td><td>发票号码</td><td>常显</td><td>来源于核销发票上传，不可编辑</td></tr>
<tr><td>发票代码</td><td>EPM_VERIFER_INVOICE_DETAILS.INVOICE_CODE</td><td>文本框</td><td>发票代码</td><td>常显</td><td>来源于核销发票上传，不可编辑</td></tr>
<tr><td>货物或服务名称</td><td>EPM_VERIFER_INVOICE_DETAILS.SERVICES_NAME</td><td>文本框</td><td>货物或服务名称</td><td>常显</td><td>来源于核销发票上传，不可编辑</td></tr>
<tr><td>产品编码</td><td>EPM_VERIFER_INVOICE_DETAILS.SERVICES_CODE</td><td>文本框</td><td>产品编码</td><td>常显</td><td>来源于核销发票上传，不可编辑</td></tr>
<tr><td>可核销数量</td><td>EPM_VERIFER_INVOICE_DETAILS.CAN_VERIFER_NUMBER</td><td>数值框</td><td>可核销数量</td><td>常显</td><td>来源于发票明细，不可编辑</td></tr>
<tr><td>剩余可核销数量</td><td>EPM_VERIFER_INVOICE_DETAILS.SURPLUS_CAN_VERIFER_NUMBER</td><td>数值框</td><td>剩余可核销数量</td><td>常显</td><td>来源于发票明细，不可编辑</td></tr>
<tr><td>本次核销数量</td><td>EPM_VERIFER_INVOICE_DETAILS.THIS_VERIFER_NUMBER</td><td>数值框</td><td>本次核销数量</td><td>常显</td><td>来源于核销行，不可编辑</td></tr>
<tr><td>单位转换率</td><td>EPM_VERIFER_INVOICE_DETAILS.UOM_RATE</td><td>数值框</td><td>单位转换率</td><td>常显</td><td>计量单位转换</td></tr>
<tr><td>转化后剩余可核销数量</td><td>EPM_VERIFER_INVOICE_DETAILS.CONVERT_SUR_VERIFER_NUMBER</td><td>数值框</td><td>转化后剩余可核销数量</td><td>常显</td><td>剩余可核销数量×UOM_RATE</td></tr>
<tr><td>购买方一致</td><td>EPM_VERIFER_INVOICE_DETAILS.UNIT_NAME_IS_AGREEMENT</td><td>标签</td><td>发票购买方与工程采购单位一致</td><td>常显</td><td>1=一致</td></tr>
<tr><td>销售方一致</td><td>EPM_VERIFER_INVOICE_DETAILS.BILLING_NAME_IS_AGREEMENT</td><td>标签</td><td>发票销售方与经销商法人一致</td><td>常显</td><td>1=一致</td></tr>
<tr><td>日期一致</td><td>EPM_VERIFER_INVOICE_DETAILS.DATE_IS_AGREEMENT</td><td>标签</td><td>发票日期在发货日期之前</td><td>常显</td><td>1=一致</td></tr>
<tr><td>有效状态</td><td>EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS</td><td>标签</td><td>有效状态</td><td>常显</td><td>invalid/valid/canceled</td></tr>
<tr><td>取消类型</td><td>EPM_VERIFER_INVOICE_DETAILS.CANCEL_TYPE</td><td>文本框</td><td>取消核销类型</td><td>已取消时显示</td><td>invoice/invoiceDetail/invLine/veriferDetail/obsInvoice</td></tr>
<tr><td>取消操作人</td><td>EPM_VERIFER_INVOICE_DETAILS.CANCEL_OPERATOR</td><td>文本框</td><td>核销取消操作人</td><td>已取消时显示</td><td>系统自动记录</td></tr>
<tr><td>取消时间</td><td>EPM_VERIFER_INVOICE_DETAILS.CANCEL_TIME</td><td>日期</td><td>核销取消操作时间</td><td>已取消时显示</td><td>系统自动记录</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口名称</th><th>Controller</th><th>Service</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>查询项目</td><td>EpmInvoiceTruthHeaderController</td><td>queryProjectList</td><td>GET /search-project</td><td>查询可核销项目</td></tr>
<tr><td>保存</td><td>EpmInvoiceTruthHeaderController</td><td>save</td><td>POST /save</td><td>保存真实性核销单</td></tr>
<tr><td>修改</td><td>EpmInvoiceTruthHeaderController</td><td>update</td><td>POST /update</td><td>修改真实性核销单</td></tr>
<tr><td>列表查询</td><td>EpmInvoiceTruthHeaderController</td><td>searchList</td><td>GET /invoice-truth/list</td><td>分页查询核销列表</td></tr>
<tr><td>明细查询</td><td>EpmInvoiceTruthHeaderController</td><td>searchDetail</td><td>GET /invoice-truth/detail/&#123;id&#125;</td><td>查询核销明细</td></tr>
<tr><td>删除</td><td>EpmInvoiceTruthHeaderController</td><td>invoiceTruthDelete</td><td>POST /invoice-truth/delete/&#123;id&#125;</td><td>删除核销单</td></tr>
<tr><td>查询交易公司</td><td>EpmInvoiceTruthHeaderController</td><td>doSearchTradingCompany</td><td>GET /do-search-trading-company</td><td>查询交易公司</td></tr>
<tr><td>数量转化</td><td>EpmInvoiceTruthHeaderController</td><td>convertNum</td><td>POST /convert-num</td><td>单位转换数量计算</td></tr>
<tr><td>终止</td><td>EpmInvoiceTruthHeaderController</td><td>terminate</td><td>POST /terminate</td><td>终止核销单</td></tr>
<tr><td>撤回终止</td><td>EpmInvoiceTruthHeaderController</td><td>undoTerminate</td><td>POST /undo-terminate</td><td>撤回终止</td></tr>
<tr><td>查询</td><td>EpmInvoiceTruthHeaderController</td><td>doSelect</td><td>POST /select</td><td>查询核销详情</td></tr>
<tr><td>查询出库单报表</td><td>EpmInvoiceTruthHeaderController</td><td>doSearchOutbillReport</td><td>POST /search-outbill-report</td><td>查询工程出库单</td></tr>
<tr><td>查询发票信息</td><td>EpmInvoiceTruthHeaderController</td><td>doGetInvoiceInfo</td><td>POST /search-invoice-info</td><td>查询核销发票信息</td></tr>
<tr><td>明细</td><td>EpmInvoiceTruthHeaderController</td><td>selectDetailByInvoiceTruthId</td><td>GET /truth-detail</td><td>查询核销明细</td></tr>
<tr><td>发票明细</td><td>EpmInvoiceTruthHeaderController</td><td>queryInvoiceDetailListByTruthId</td><td>GET /invoice-detail-list</td><td>查询发票明细列表</td></tr>
<tr><td>项目查询</td><td>EpmInvoiceTruthHeaderController</td><td>searchProject</td><td>GET /invoice-truth/search-project</td><td>真实性核销项目查询</td></tr>
<tr><td>出库单列表</td><td>EpmInvoiceTruthHeaderController</td><td>searchOutBill</td><td>GET /invoice-truth/search-out-bill</td><td>出库单列表查询</td></tr>
<tr><td>发票列表</td><td>EpmInvoiceTruthHeaderController</td><td>invoiceInfo</td><td>GET /invoice-truth/invoice-info</td><td>发票列表查询</td></tr>
<tr><td>核对</td><td>EpmInvoiceTruthHeaderController</td><td>queryInvoiceDetail</td><td>GET /invoice-truth/query-invoice-detail/&#123;id&#125;</td><td>核销核对查询</td></tr>
<tr><td>取消/作废</td><td>EpmInvoiceTruthHeaderController</td><td>cancel</td><td>POST /invoice-truth/cancel</td><td>取消核销或作废发票</td></tr>
<tr><td>获取出库单</td><td>EpmInvoiceTruthHeaderController</td><td>queryInvOutBillHeadList</td><td>POST /invoutlist</td><td>获取出库单列表</td></tr>
<tr><td>获取发票信息</td><td>EpmInvoiceTruthHeaderController</td><td>queryInvoiceInfoList</td><td>POST /invoice-info</td><td>获取发票信息列表</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<table class="kb-field-tbl">
<thead>
<tr><th>弹窗名称</th><th>触发位置</th><th>作用</th><th>入参</th><th>出参</th></tr>
</thead>
<tbody>
<tr><td>项目选择弹窗</td><td>详情页选择项目</td><td>选择可核销项目</td><td>组织ID</td><td>projectId/projectCode/projectName</td></tr>
<tr><td>合同选择弹窗</td><td>详情页选择合同</td><td>选择关联合同</td><td>projectId</td><td>contractId/contractCode/contractName</td></tr>
<tr><td>出库单选择弹窗</td><td>详情页选择出库单行</td><td>选择需核销的出库单行</td><td>projectId/contractId</td><td>invbillno/dateInvbill/itemCode/qtyBill/canVerifyNum</td></tr>
<tr><td>发票上传单选择弹窗</td><td>详情页选择发票</td><td>选择已生效的核销发票上传单</td><td>projectId/contractId</td><td>invoiceVeriferId/invoiceVeriferNo</td></tr>
<tr><td>折扣政策选择弹窗</td><td>详情页选择折扣政策</td><td>选择关联折扣政策</td><td>projectId/contractId</td><td>discountPolicyId/discountPolicyCode/discountPolicyName</td></tr>
<tr><td>交易公司选择弹窗</td><td>详情页选择交易公司</td><td>选择交易公司</td><td>组织ID</td><td>tradingCompanyId/tradingCompanyName</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="导入">
<p>本页面无导入功能。核销数据通过选择出库单行和发票上传单自动带入，手工填写本次核销数量。</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>保存</td><td>保存真实性核销单</td><td>详情页</td><td>新建/编辑状态</td><td>调用save/update接口，保存核销行和核销明细</td></tr>
<tr><td>提交</td><td>提交审批</td><td>详情页</td><td>核销单已保存</td><td>启动工作流PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW</td></tr>
<tr><td>删除</td><td>删除核销单</td><td>详情页</td><td>新建状态</td><td>调用invoiceTruthDelete接口</td></tr>
<tr><td>终止</td><td>终止核销单</td><td>详情页</td><td>非终止状态</td><td>调用terminate接口</td></tr>
<tr><td>撤回终止</td><td>撤回终止</td><td>详情页</td><td>已终止状态</td><td>调用undoTerminate接口</td></tr>
<tr><td>取消核销</td><td>取消已核销的明细</td><td>详情页</td><td>存在有效核销明细</td><td>调用cancel接口，支持5种操作类型</td></tr>
<tr><td>作废发票</td><td>作废指定发票</td><td>详情页</td><td>存在有效发票</td><td>调用cancel接口(actionType=obsInvoice)</td></tr>
<tr><td>数量转化</td><td>单位转换数量计算</td><td>详情页</td><td>需单位转换时</td><td>调用convertNum接口</td></tr>
<tr><td>查询出库单</td><td>查询可核销出库单</td><td>详情页</td><td>已选项目</td><td>调用searchOutBill接口</td></tr>
<tr><td>查询发票信息</td><td>查询可核销发票</td><td>详情页</td><td>已选项目</td><td>调用invoiceInfo接口</td></tr>
</tbody>
</table>
<h4>按钮1：保存（详情页）</h4>
<ul><li><strong>触发条件</strong>：新建或编辑状态</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 校验本次核销数量&gt;0且≤剩余可核销数量，小数位≤3</p>
<p>2. 校验发货日期和产品编码匹配</p>
<p>3. 新增时生成核销单号(编码规则AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)</p>
<p>4. 保存核销行(EPM_INVOICE_TRUTH_LINE)和核销发票明细(EPM_VERIFER_INVOICE_DETAILS)</p>
<h4>按钮2：提交审批（详情页）</h4>
<ul><li><strong>触发条件</strong>：核销单已保存且存在本次核销数量&gt;0的行</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 校验核销单下存在核销行数据且存在本次核销数量&gt;0的记录</p>
<p>2. 按isHome选择工作流编码(工程PROJECT_XMZSXHX_AW/家装PROJECT_JZXMZSXHX_AW)</p>
<p>3. 启动工作流实例，更新hzInstanceId和hzApproveStatus=RUN</p>
<h4>按钮3：取消核销（详情页）</h4>
<ul><li><strong>触发条件</strong>：存在有效核销明细</li><li><strong>处理逻辑</strong>：</li></ul>
<p>1. 校验actionType非空且在5种合法值范围内(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)</p>
<p>2. 校验idList非空</p>
<p>3. 查询受影响的核销明细，更新有效状态为canceled，记录取消操作人和时间</p>
<p>4. 若受影响核销单处于审批中，中断审批重置为新建</p>
<p>5. 更新出库单行：可核销数量回加，已核销数量减少</p>
<p>6. 作废发票时更新发票主要信息状态为obsolete</p>
</KbCard>

<KbCard title="保存校验">
<h4>校验1：本次核销数量不可超过剩余可核销数量 —— 防止超额核销</h4>
<ul><li><strong>详细逻辑</strong>：每行的本次核销数量(THIS_VERIFER_NUMBER)不可大于剩余可核销数量(SURPLUS_CAN_VERIFER_NUMBER)，小数位≤3</li><li><strong>系统体现</strong>：保存时逐行校验</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT INVBILLNO, ITEM_CODE, SURPLUS_CAN_VERIFER_NUMBER, THIS_VERIFER_NUMBER
FROM EPM_INVOICE_TRUTH_LINE
WHERE INVOICE_TRUTH_ID = #&#123;invoiceTruthId&#125;
  AND THIS_VERIFER_NUMBER &gt; SURPLUS_CAN_VERIFER_NUMBER;</code></pre>
<h4>校验2：发货日期和产品编码校验 —— 确保核销行与出库单行匹配</h4>
<ul><li><strong>详细逻辑</strong>：校验核销行的发货日期和产品编码与出库单行一致</li><li><strong>系统体现</strong>：checkDateAndItemCode方法校验</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT l.INVBILLNO, l.DATE_INVBILL, l.ITEM_CODE, iobl.INV_OUT_BILL_LINE_ID
FROM EPM_INVOICE_TRUTH_LINE l
JOIN INV_OUT_BILL_LINE iobl ON l.INV_OUT_BILL_LINE_ID = iobl.INV_OUT_BILL_LINE_ID
WHERE l.INVOICE_TRUTH_ID = #&#123;invoiceTruthId&#125;;</code></pre>
</KbCard>

<KbCard title="提交校验">
<h4>校验1：核销单必须存在有效明细行 —— 确保有核销数据可提交</h4>
<ul><li><strong>详细逻辑</strong>：检查核销单下是否存在核销行数据且存在本次核销数量&gt;0的记录</li><li><strong>系统体现</strong>：提交前查询EPM_INVOICE_TRUTH_LINE，无数据或无本次核销数量&gt;0的行则报错</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT COUNT(*) FROM EPM_INVOICE_TRUTH_LINE
WHERE INVOICE_TRUTH_ID = #&#123;invoiceTruthId&#125;
  AND THIS_VERIFER_NUMBER &gt; 0;</code></pre>
</KbCard>

<KbCard title="状态机">
<pre class="lang-text" v-pre><code>[新建stat=1] ──提交──&gt; [审批中stat=3] ──审批通过──&gt; [已审批stat=5]
                         │
                         └──审批驳回──&gt; [已中断]
[任意状态] ──终止──&gt; [已终止]
[已终止] ──撤回终止──&gt; [原状态]
[审批中] ──取消核销──&gt; [新建stat=1] (中断审批)</code></pre>
<table class="kb-field-tbl">
<thead>
<tr><th>状态值</th><th>状态名称</th><th>可执行操作</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>新建</td><td>保存、提交、删除、终止、取消核销</td></tr>
<tr><td>3</td><td>审批中</td><td>终止、取消核销(中断审批)</td></tr>
<tr><td>5</td><td>审批通过</td><td>终止、取消核销</td></tr>
<tr><td>INTERRUPT</td><td>审批驳回</td><td>终止、取消核销</td></tr>
<tr><td>TERMINATED</td><td>已终止</td><td>撤回终止</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="上游依赖">
<table class="kb-field-tbl">
<thead>
<tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
</thead>
<tbody>
<tr><td>EPM_UPLOAD_INVOICE_VERIFER(核销发票上传)</td><td>数据关联</td><td>读取已上传的核销发票信息，关联发票号码、代码、金额</td><td>发票上传单已审批通过(effectStatus=valid)</td></tr>
<tr><td>EPM_INVOICE_TRUTH_LINE(真实性核销行)</td><td>数据关联</td><td>读取核销明细行，关联产品和服务</td><td>核销行已保存</td></tr>
<tr><td>INV_OUT_BILL_LINE(出库单行)</td><td>数据关联</td><td>读取出库单行可核销数量、发货日期、产品信息</td><td>出库单行存在且有可核销数量</td></tr>
<tr><td>EPM_DISCOUNT_POLICY(折扣政策)</td><td>数据关联</td><td>读取折扣政策信息</td><td>折扣政策已存在</td></tr>
<tr><td>HPFM_CODE_RULE(编码规则)</td><td>编码规则</td><td>生成核销单号AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER</td><td>编码规则已配置</td></tr>
<tr><td>H0 Workflow(工作流)</td><td>工作流</td><td>触发工作流PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW</td><td>工作流已部署</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="下游影响">
<ul><li><strong>EPM_VERIFER_INVOICE_DETAILS(核销发票明细)</strong>：新增核销记录，更新生效状态、剩余可核销数量</li><li><strong>EPM_INVOICE_TRUTH_LINE(真实性核销行)</strong>：更新核销行状态和已核销数量</li><li><strong>INV_OUT_BILL_LINE(出库单行)</strong>：核销生效后更新已核销数量和可核销数量</li><li><strong>INVOICE_TRUTH_CANCEL_RECORD(核销终止记录)</strong>：取消核销时记录终止历史</li><li><strong>返利计算</strong>：审批通过后若出库单行渠道上调价&gt;0，触发供应商返利计算</li><li><strong>发票管理</strong>：作废发票时更新发票主要信息有效状态为obsolete</li></ul>
</KbCard>

<KbCard title="EPM_INVOICE_TRUTH_HEADER（真实性核销头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>INVOICE_TRUTH_ID</td><td>Long</td><td>真实性核销ID</td><td>-</td><td>自增主键，@Id @GeneratedValue</td></tr>
<tr><td>INVOICE_TRUTH_NO</td><td>String</td><td>真实性核销单号</td><td>核销单号</td><td>按编码规则AE.INVOICE_AUTHENTICITY_VERIFI(工程)/AE.JZ_INVOICE_AUTHENTICITY_VER(家装)生成</td></tr>
<tr><td>PROJECT_ID</td><td>BigDecimal</td><td>项目ID</td><td>-</td><td>关联EPM_PROJECT</td></tr>
<tr><td>PROJECT_CODE</td><td>String</td><td>项目编码</td><td>项目编码</td><td>冗余自EPM_PROJECT</td></tr>
<tr><td>PROJECT_NAME</td><td>String</td><td>项目名称</td><td>项目名称</td><td>冗余自EPM_PROJECT</td></tr>
<tr><td>CONTRACT_ID</td><td>BigDecimal</td><td>合同ID</td><td>-</td><td>关联EPM_PROJECT_CONTRACT</td></tr>
<tr><td>CONTRACT_CODE</td><td>String</td><td>合同编码</td><td>合同编码</td><td>冗余自EPM_PROJECT_CONTRACT</td></tr>
<tr><td>CONTRACT_NAME</td><td>String</td><td>合同名称</td><td>合同名称</td><td>冗余自EPM_PROJECT_CONTRACT</td></tr>
<tr><td>CUSTOMER_ID</td><td>BigDecimal</td><td>经销商ID</td><td>-</td><td>关联CUSTOMER</td></tr>
<tr><td>CUSTOMER_CODE</td><td>String</td><td>经销商编码</td><td>经销商编码</td><td>冗余自CUSTOMER</td></tr>
<tr><td>CUSTOMER_NAME</td><td>String</td><td>经销商名称</td><td>经销商名称</td><td>冗余自CUSTOMER</td></tr>
<tr><td>TRADING_COMPANY_ID</td><td>BigDecimal</td><td>交易公司ID</td><td>-</td><td>关联交易公司</td></tr>
<tr><td>TRADING_COMPANY_CODE</td><td>String</td><td>交易公司编码</td><td>-</td><td>冗余自交易公司</td></tr>
<tr><td>TRADING_COMPANY_NAME</td><td>String</td><td>交易公司名称</td><td>交易公司</td><td>冗余自交易公司</td></tr>
<tr><td>BILLING_UNIT_ID</td><td>BigDecimal</td><td>开票单位ID</td><td>-</td><td>关联CUSTOMER</td></tr>
<tr><td>BILLING_UNIT_CODE</td><td>String</td><td>开票单位编码</td><td>-</td><td>冗余自CUSTOMER</td></tr>
<tr><td>BILLING_UNIT_NAME</td><td>String</td><td>开票单位名称</td><td>-</td><td>冗余自CUSTOMER</td></tr>
<tr><td>CONTRACT_UNIT</td><td>String</td><td>工程签约单位</td><td>-</td><td>-</td></tr>
<tr><td>IS_HOME</td><td>Integer</td><td>是否家装</td><td>是否家装</td><td>1-工程/2-家装，NotNull</td></tr>
<tr><td>VERIFER_TYPE</td><td>BigDecimal</td><td>核销类型</td><td>核销类型</td><td>来源于核销发票上传单</td></tr>
<tr><td>INVOICE_VERIFER_ID</td><td>BigDecimal</td><td>核销发票上传ID</td><td>-</td><td>关联EPM_UPLOAD_INVOICE_VERIFER</td></tr>
<tr><td>INVOICE_VERIFER_NO</td><td>String</td><td>核销发票上传单号</td><td>核销发票上传单号</td><td>来源于核销发票上传单</td></tr>
<tr><td>DISCOUNT_POLICY_ID</td><td>BigDecimal</td><td>折扣政策ID</td><td>-</td><td>关联EPM_DISCOUNT_POLICY</td></tr>
<tr><td>DISCOUNT_POLICY_CODE</td><td>String</td><td>折扣政策编码</td><td>-</td><td>冗余自折扣政策</td></tr>
<tr><td>DISCOUNT_POLICY_NAME</td><td>String</td><td>折扣政策名称</td><td>折扣政策</td><td>冗余自折扣政策</td></tr>
<tr><td>STAT</td><td>Long</td><td>单据状态(已弃用)</td><td>-</td><td>使用HZ_APPROVE_STATUS替代，NotNull</td></tr>
<tr><td>WFID</td><td>Long</td><td>流程ID</td><td>-</td><td>旧字段，NotNull</td></tr>
<tr><td>WFFLAG</td><td>Long</td><td>流程标识</td><td>-</td><td>旧字段，NotNull</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>String</td><td>H0流程审批状态</td><td>审批状态</td><td>NEW/RUN/APPROVED/INTERRUPT，NotBlank</td></tr>
<tr><td>HZ_INSTANCE_ID</td><td>Long</td><td>H0流程实例ID</td><td>-</td><td>工作流返回</td></tr>
<tr><td>AUDIT_STAT</td><td>String</td><td>审核状态</td><td>-</td><td>审核状态</td></tr>
<tr><td>VERIFY_STAT</td><td>String</td><td>核销类型</td><td>-</td><td>对应字典truth_header.verify_stat</td></tr>
<tr><td>NOTE</td><td>String</td><td>备注</td><td>-</td><td>用户输入</td></tr>
<tr><td>ORGANIZATION_ID</td><td>BigDecimal</td><td>组织ID</td><td>-</td><td>当前用户事业部</td></tr>
<tr><td>CREATE_TIME</td><td>Date</td><td>核销发起日期</td><td>创建时间</td><td>系统自动记录</td></tr>
<tr><td>CREATOR</td><td>String</td><td>创建人</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>CREATOR_NAME</td><td>String</td><td>创建人姓名</td><td>创建人</td><td>系统自动记录</td></tr>
</tbody>
</table>
<p><strong>查询SQL</strong>：</p>
<pre class="detail-sql" v-pre><code>SELECT * FROM EPM_INVOICE_TRUTH_HEADER
WHERE ORGANIZATION_ID = #&#123;organizationId&#125;
  AND NVL(INVOICE_TRUTH_NO, '') LIKE '%' || #&#123;invoiceTruthNo&#125; || '%'
  AND NVL(PROJECT_CODE, '') LIKE '%' || #&#123;projectCode&#125; || '%'
ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
</KbCard>

<KbCard title="EPM_INVOICE_TRUTH_LINE（真实性核销行表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>INVOICE_TRUTH_LINE_ID</td><td>Long</td><td>核销行ID</td><td>-</td><td>自增主键，@Id @GeneratedValue</td></tr>
<tr><td>INVOICE_TRUTH_ID</td><td>Long</td><td>核销单ID</td><td>-</td><td>关联EPM_INVOICE_TRUTH_HEADER</td></tr>
<tr><td>INVBILLNO</td><td>String</td><td>ERP出库单号</td><td>出库单号</td><td>来源于出库单行</td></tr>
<tr><td>DATE_INVBILL</td><td>Date</td><td>发货日期</td><td>发货日期</td><td>来源于出库单行</td></tr>
<tr><td>VERIFER_END_DATE</td><td>Date</td><td>核销截止日</td><td>核销截止日</td><td>手工录入</td></tr>
<tr><td>REPAIR_VERIFER_END_DATE</td><td>Date</td><td>补核销截止日</td><td>补核销截止日</td><td>手工录入</td></tr>
<tr><td>ITEM_CODE</td><td>String</td><td>产品编码</td><td>产品编码</td><td>来源于出库单行</td></tr>
<tr><td>ITEM_NAME</td><td>String</td><td>产品名称</td><td>产品名称</td><td>来源于出库单行</td></tr>
<tr><td>ITEM_ID</td><td>Long</td><td>产品ID</td><td>-</td><td>来源于出库单行</td></tr>
<tr><td>QTY_BILL</td><td>Long</td><td>实发数量</td><td>实发数量</td><td>来源于出库单行</td></tr>
<tr><td>INVOICE_NUMBER</td><td>String</td><td>发票号码</td><td>发票号码</td><td>来源于发票信息</td></tr>
<tr><td>INVOICE_CODE</td><td>String</td><td>发票代码</td><td>发票代码</td><td>来源于发票信息</td></tr>
<tr><td>SERVICES_NAME</td><td>String</td><td>货物或服务名称</td><td>-</td><td>来源于发票明细</td></tr>
<tr><td>CAN_VERIFER_NUMBER</td><td>Long</td><td>可核销数量</td><td>可核销数量</td><td>来源于出库单行CAN_VERIFY_NUM</td></tr>
<tr><td>SURPLUS_CAN_VERIFER_NUMBER</td><td>Long</td><td>剩余可核销数量</td><td>剩余可核销数量</td><td>可核销数量-已核销数量</td></tr>
<tr><td>THIS_VERIFER_NUMBER</td><td>BigDecimal</td><td>本次核销数量</td><td>本次核销数量</td><td>手工录入，小数位≤3</td></tr>
<tr><td>SEQ</td><td>Long</td><td>行ID</td><td>-</td><td>行序号</td></tr>
<tr><td>INVOICE_DETAILS_ID</td><td>Long</td><td>发票详细信息ID</td><td>-</td><td>关联EPM_UPLOAD_INVOICE_DETAILS</td></tr>
<tr><td>INV_OUT_BILL_LINE_ID</td><td>Long</td><td>出库单行ID</td><td>-</td><td>关联INV_OUT_BILL_LINE</td></tr>
<tr><td>SUR_VERIFY_NUM</td><td>Long</td><td>出库单可核销数量</td><td>-</td><td>来源于出库单行</td></tr>
<tr><td>CAN_VERIFY_NUM</td><td>Long</td><td>出库单可核销数量</td><td>-</td><td>来源于出库单行</td></tr>
<tr><td>UNIT_NAME_IS_AGREEMENT</td><td>Long</td><td>购买方与采购单位一致</td><td>-</td><td>1=一致</td></tr>
<tr><td>BILLING_NAME_IS_AGREEMENT</td><td>Long</td><td>销售方与经销商法人一致</td><td>-</td><td>1=一致</td></tr>
<tr><td>DATE_IS_AGREEMENT</td><td>Long</td><td>发票日期在发货日期前</td><td>-</td><td>1=一致</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="EPM_VERIFER_INVOICE_DETAILS（核销发票明细表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>PK_ID</td><td>Long</td><td>主键ID</td><td>-</td><td>自增主键，@Id @GeneratedValue</td></tr>
<tr><td>INVOICE_NUMBER</td><td>String</td><td>发票号码</td><td>发票号码</td><td>来源于核销发票上传</td></tr>
<tr><td>INVOICE_CODE</td><td>String</td><td>发票代码</td><td>发票代码</td><td>来源于核销发票上传</td></tr>
<tr><td>SERVICES_NAME</td><td>String</td><td>货物或服务名称</td><td>货物或服务名称</td><td>来源于核销发票上传</td></tr>
<tr><td>SERVICES_CODE</td><td>String</td><td>产品编码</td><td>产品编码</td><td>来源于核销发票上传</td></tr>
<tr><td>INVOICE_DETAILS_ID</td><td>Long</td><td>发票详细信息ID</td><td>-</td><td>关联EPM_UPLOAD_INVOICE_DETAILS</td></tr>
<tr><td>VERIFER_INVOICE_DETAILS_ID</td><td>Long</td><td>核销发票信息ID</td><td>-</td><td>关联核销发票</td></tr>
<tr><td>INVOICE_TRUTH_LINE_ID</td><td>Long</td><td>真实性核销行ID</td><td>-</td><td>关联EPM_INVOICE_TRUTH_LINE</td></tr>
<tr><td>CAN_VERIFER_NUMBER</td><td>String</td><td>可核销数量</td><td>可核销数量</td><td>来源于发票明细</td></tr>
<tr><td>SURPLUS_CAN_VERIFER_NUMBER</td><td>String</td><td>剩余可核销数量</td><td>剩余可核销数量</td><td>可核销数量-已核销数量</td></tr>
<tr><td>THIS_VERIFER_NUMBER</td><td>Long</td><td>本次核销数量</td><td>本次核销数量</td><td>来源于核销行</td></tr>
<tr><td>UOM_RATE</td><td>String</td><td>单位转换率</td><td>单位转换率</td><td>计量单位转换</td></tr>
<tr><td>CONVERT_SUR_VERIFER_NUMBER</td><td>String</td><td>转化后剩余可核销数量</td><td>转化后剩余可核销数量</td><td>剩余可核销数量×UOM_RATE</td></tr>
<tr><td>SEQ</td><td>Long</td><td>行ID</td><td>-</td><td>行序号</td></tr>
<tr><td>EFFECT_STATUS</td><td>String</td><td>有效状态</td><td>有效状态</td><td>invalid/valid/canceled，字典VERIFER_EFFECT_STATUS</td></tr>
<tr><td>CANCEL_OPERATOR</td><td>String</td><td>核销取消操作人</td><td>取消操作人</td><td>取消时记录当前用户</td></tr>
<tr><td>CANCEL_TIME</td><td>Date</td><td>核销取消操作时间</td><td>取消时间</td><td>取消时记录系统时间</td></tr>
<tr><td>CANCEL_TYPE</td><td>String</td><td>取消核销类型</td><td>取消类型</td><td>invoice/invoiceDetail/invLine/veriferDetail/obsInvoice，字典CANCEL_TYPE</td></tr>
<tr><td>UNIT_NAME_IS_AGREEMENT</td><td>Long</td><td>购买方与采购单位一致</td><td>购买方一致</td><td>1=一致</td></tr>
<tr><td>BILLING_NAME_IS_AGREEMENT</td><td>Long</td><td>销售方与经销商法人一致</td><td>销售方一致</td><td>1=一致</td></tr>
<tr><td>DATE_IS_AGREEMENT</td><td>Long</td><td>发票日期在发货日期前</td><td>日期一致</td><td>1=一致</td></tr>
</tbody>
</table>
<p><strong>取消核销更新SQL</strong>：</p>
<pre class="detail-sql" v-pre><code>UPDATE EPM_VERIFER_INVOICE_DETAILS
SET EFFECT_STATUS = 'canceled',
    CANCEL_OPERATOR = #&#123;cancelOperator&#125;,
    CANCEL_TIME = SYSDATE,
    CANCEL_TYPE = #&#123;cancelType&#125;
WHERE VERIFER_INVOICE_DETAILS_ID IN (#&#123;detailIdList&#125;);</code></pre>
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
<tr><td>本次核销数量的小数位不能超过3位</td><td>保存</td><td>核销数量精度超限。调整小数位至≤3位</td><td>高</td><td>保存时校验THIS_VERIFER_NUMBER小数位</td></tr>
<tr><td>参数不能为空</td><td>保存</td><td>核销参数未填写。补全核销参数后保存</td><td>高</td><td>保存时参数非空校验</td></tr>
<tr><td>核销数量必须大于0</td><td>保存</td><td>核销数量≤0。调整核销数量大于0</td><td>高</td><td>保存时校验THIS_VERIFER_NUMBER&gt;0</td></tr>
<tr><td>核销数量超过剩余可核销数量</td><td>保存</td><td>本次核销数量超过剩余可核销数量。调整至剩余可核销范围内</td><td>高</td><td>保存时校验THIS_VERIFER_NUMBER≤SURPLUS_CAN_VERIFER_NUMBER</td></tr>
<tr><td>发票必须上传</td><td>保存</td><td>未上传核销发票。先上传核销发票再保存</td><td>高</td><td>保存时校验发票关联</td></tr>
<tr><td>核销行不存在</td><td>保存</td><td>INVOICE_TRUTH_LINE_ID对应核销行不存在。确认核销行有效性</td><td>高</td><td>保存时校验核销行存在</td></tr>
<tr><td>操作类型不能为空</td><td>取消核销</td><td>actionType参数为空。传入合法actionType</td><td>高</td><td>cancel方法中actionType非空校验</td></tr>
<tr><td>对应列表id数组不能为空</td><td>取消核销</td><td>idList参数为空。传入需取消的ID列表</td><td>高</td><td>cancel方法中idList非空校验</td></tr>
<tr><td>不支持xxx操作</td><td>取消核销</td><td>actionType不在5种合法值范围内。传入合法actionType</td><td>高</td><td>cancel方法中actionType合法性校验</td></tr>
<tr><td>核销取消数据为空</td><td>取消核销</td><td>按条件查询不到可取消的核销明细。确认数据状态</td><td>高</td><td>查询受影响核销明细为空时抛出</td></tr>
<tr><td>核销明细状态异常,请刷新数据后重试</td><td>取消核销</td><td>更新canceled状态时影响行数与预期不一致。刷新数据后重试</td><td>高</td><td>更新影响行数校验</td></tr>
<tr><td>更新失败,取消后出库单行已核销数量小于0</td><td>取消核销</td><td>取消数量大于出库单行已核销数量。检查数据一致性</td><td>高</td><td>出库单行已核销数量校验</td></tr>
<tr><td>请选择核销类型</td><td>查询出库单/发票</td><td>未选择核销类型(veriferType)。先选择核销类型再查询</td><td>高</td><td>doSearchOutbillReport/doGetInvoiceInfo中veriferType非空校验</td></tr>
<tr><td>核销出库单明细不可为空</td><td>提交审批</td><td>核销单下无核销行数据。先添加核销行再提交</td><td>高</td><td>checkWorkFlowData中核销行列表为空校验</td></tr>
<tr><td>本次核销数量不能大于可核销数量</td><td>保存</td><td>核销行本次核销数量合计超过出库单行可核销数量。调整核销数量</td><td>高</td><td>checkVeriferInvoice中sumThisVeriferNumber&gt;canVerifyNum校验</td></tr>
<tr><td>对应的出库单明细不存在</td><td>提交审批</td><td>核销行关联的出库单行(INV_OUT_BILL_LINE_ID)不存在。确认出库单行有效性</td><td>高</td><td>checkWorkFlowData中invOutBillLineId为空校验</td></tr>
<tr><td>对应的出库单明细可核销数量不足</td><td>提交审批</td><td>出库单行可核销数量&lt;0。检查出库单行可核销数量</td><td>高</td><td>checkWorkFlowData中selectCanVerifyNumOfLine&lt;0校验</td></tr>
<tr><td>发票核销数量超过剩余可核销数量</td><td>提交审批</td><td>发票明细本次核销数量超过剩余可核销数量。调整核销数量</td><td>高</td><td>checkWorkFlowData中surplusCanVeriferNumber&lt;0校验</td></tr>
</tbody>
</table>
<h4>报错1：本次核销数量的小数位不能超过3位</h4>
<ul><li><strong>触发条件</strong>：保存核销时，本次核销数量(THIS_VERIFER_NUMBER)小数位超过3位</li><li><strong>逻辑分析</strong>：保存校验中检查THIS_VERIFER_NUMBER的小数位数，超过3位则抛出阻断性报错。需调整小数位至≤3位</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.SA_OUT_BILL_HEAD_ID = :saOutBillHeadId
    AND LENGTH(TO_CHAR(vid.THIS_VERIFER_NUMBER - TRUNC(vid.THIS_VERIFER_NUMBER))) - 1 &gt; 3
  -- 查出小数位超过3位的核销明细</code></pre>
<h4>报错2：参数不能为空</h4>
<ul><li><strong>触发条件</strong>：保存核销时，核销参数(如核销单ID、明细ID等)未填写</li><li><strong>逻辑分析</strong>：保存方法中校验关键参数非空，缺失则抛出阻断性报错。需补全核销参数后保存</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,
         vid.THIS_VERIFER_NUMBER, vid.SA_OUT_BILL_HEAD_ID
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.VERIFER_INVOICE_ID IS NULL
     OR vid.INVOICE_TRUTH_LINE_ID IS NULL
     OR vid.THIS_VERIFER_NUMBER IS NULL
  -- 查出关键参数为空的核销明细</code></pre>
<h4>报错3：核销数量必须大于0</h4>
<ul><li><strong>触发条件</strong>：保存核销时，本次核销数量(THIS_VERIFER_NUMBER)≤0</li><li><strong>逻辑分析</strong>：保存校验中检查THIS_VERIFER_NUMBER&gt;0，因核销数量必须为正数。需调整核销数量大于0</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.THIS_VERIFER_NUMBER &lt;= 0
  -- 查出核销数量≤0的异常数据</code></pre>
<h4>报错4：核销数量超过剩余可核销数量</h4>
<ul><li><strong>触发条件</strong>：保存核销时，本次核销数量(THIS_VERIFER_NUMBER)超过剩余可核销数量(SURPLUS_CAN_VERIFER_NUMBER)</li><li><strong>逻辑分析</strong>：保存校验中按INVOICE_TRUTH_LINE_ID查询剩余可核销数量，若THIS_VERIFER_NUMBER&gt;SURPLUS_CAN_VERIFER_NUMBER则抛出阻断性报错。需调整至剩余可核销范围内</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER,
         itl.SURPLUS_CAN_VERIFER_NUMBER, itl.CAN_VERIFER_NUMBER, itl.VERIFERED_NUMBER
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  JOIN EPM_INVOICE_TRUTH_LINE itl ON vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID
  WHERE vid.THIS_VERIFER_NUMBER &gt; itl.SURPLUS_CAN_VERIFER_NUMBER
  -- 查出核销数量超限的明细</code></pre>
<h4>报错5：发票必须上传</h4>
<ul><li><strong>触发条件</strong>：保存核销时，未上传核销发票(发票关联为空)</li><li><strong>逻辑分析</strong>：保存校验中检查发票关联非空，因核销必须关联已上传的发票。需先上传核销发票再保存</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,
         ith.INVOICE_TRUTH_ID, ith.INVOICE_NO
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  LEFT JOIN EPM_INVOICE_TRUTH_HEADER ith ON vid.INVOICE_TRUTH_ID = ith.INVOICE_TRUTH_ID
  WHERE vid.VERIFER_INVOICE_ID IS NULL OR ith.INVOICE_TRUTH_ID IS NULL
  -- 查出未关联发票的核销明细</code></pre>
<h4>报错6：核销行不存在</h4>
<ul><li><strong>触发条件</strong>：保存核销时，INVOICE_TRUTH_LINE_ID对应的核销行不存在</li><li><strong>逻辑分析</strong>：保存校验中按INVOICE_TRUTH_LINE_ID查询EPM_INVOICE_TRUTH_LINE，若返回null则抛出阻断性报错。需确认核销行有效性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.INVOICE_TRUTH_LINE_ID,
         itl.INVOICE_TRUTH_LINE_ID AS 核销行存在性, itl.CAN_VERIFER_NUMBER
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  LEFT JOIN EPM_INVOICE_TRUTH_LINE itl ON vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID
  WHERE itl.INVOICE_TRUTH_LINE_ID IS NULL
  -- 查出核销行不存在的明细</code></pre>
<h4>报错7：操作类型不能为空</h4>
<ul><li><strong>触发条件</strong>：取消核销时，actionType参数为空</li><li><strong>逻辑分析</strong>：cancel方法中校验actionType非空，因需根据操作类型确定取消范围。需传入合法actionType(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.ACTION_TYPE
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.ACTION_TYPE IS NULL
  -- 查出操作类型为空的核销明细</code></pre>
<h4>报错8：对应列表id数组不能为空</h4>
<ul><li><strong>触发条件</strong>：取消核销时，idList参数为空</li><li><strong>逻辑分析</strong>：cancel方法中校验idList非空，因需指定要取消的核销明细ID列表。需传入需取消的ID列表</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.VERIFER_INVOICE_DETAILS_ID IN (:idList)
  -- 校验传入的ID列表对应数据是否存在</code></pre>
<h4>报错9：不支持xxx操作</h4>
<ul><li><strong>触发条件</strong>：取消核销时，actionType不在5种合法值(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)范围内</li><li><strong>逻辑分析</strong>：cancel方法中校验actionType合法性，不在5种合法值内则抛出阻断性报错。需传入合法actionType</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.ACTION_TYPE, vid.EFFECT_STATUS
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.ACTION_TYPE NOT IN ('invoice', 'invoiceDetail', 'invLine', 'veriferDetail', 'obsInvoice')
  -- 查出操作类型不合法的核销明细</code></pre>
<h4>报错10：核销取消数据为空</h4>
<ul><li><strong>触发条件</strong>：取消核销时，按条件查询不到可取消的核销明细</li><li><strong>逻辑分析</strong>：cancel方法中按actionType和idList查询受影响的核销明细，若为空则抛出阻断性报错。需确认数据状态</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID,
         vid.INVOICE_TRUTH_LINE_ID, vid.SA_OUT_BILL_HEAD_ID
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.VERIFER_INVOICE_DETAILS_ID IN (:idList)
    AND vid.EFFECT_STATUS IN ('valid', 'invalid')
  -- 若返回空，说明无可取消的核销明细</code></pre>
<h4>报错11：核销明细状态异常,请刷新数据后重试</h4>
<ul><li><strong>触发条件</strong>：取消核销时，更新canceled状态时影响行数与预期不一致</li><li><strong>逻辑分析</strong>：cancel方法中更新EFFECT_STATUS为canceled，若更新影响行数与预期不一致(并发修改或数据已被其他操作变更)则抛出阻断性报错。需刷新数据后重试</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.LAST_UPDATE_DATE, vid.OBJECT_VERSION_NUMBER
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  WHERE vid.VERIFER_INVOICE_DETAILS_ID IN (:idList)
  -- 检查核销明细当前状态和版本号，判断是否被并发修改</code></pre>
<h4>报错12：更新失败,取消后出库单行已核销数量小于0</h4>
<ul><li><strong>触发条件</strong>：取消核销时，取消数量大于出库单行已核销数量</li><li><strong>逻辑分析</strong>：cancel方法中更新INV_OUT_BILL_LINE的已核销数量(原已核销数量-取消数量)，若结果&lt;0则抛出阻断性报错。需检查数据一致性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT iobl.INV_OUT_BILL_LINE_ID, iobl.VERIFERED_NUMBER, iobl.CAN_VERIFER_NUMBER,
         vid.THIS_VERIFER_NUMBER, vid.VERIFER_INVOICE_DETAILS_ID,
         iobl.VERIFERED_NUMBER - vid.THIS_VERIFER_NUMBER AS 取消后已核销数量
  FROM EPM_VERIFER_INVOICE_DETAILS vid
  JOIN INV_OUT_BILL_LINE iobl ON vid.INV_OUT_BILL_LINE_ID = iobl.INV_OUT_BILL_LINE_ID
  WHERE vid.VERIFER_INVOICE_DETAILS_ID IN (:idList)
    AND iobl.VERIFERED_NUMBER - vid.THIS_VERIFER_NUMBER &lt; 0
  -- 查出取消后已核销数量&lt;0的异常数据</code></pre>
<h4>报错13：请选择核销类型</h4>
<ul><li><strong>触发条件</strong>：查询出库单(doSearchOutbillReport)或查询发票信息(doGetInvoiceInfo)时，未选择核销类型(VERIFER_TYPE为空)</li><li><strong>逻辑分析</strong>：doSearchOutbillReport和doGetInvoiceInfo方法中校验veriferType非空，因核销类型决定查询出库单的SQL逻辑(工程方queryProjectOutbillReportForInvoiceTruth/经销商方queryDealerOutbillReportForInvoiceTruth)。需先选择核销类型再查询</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.VERIFER_TYPE
  FROM EPM_INVOICE_TRUTH_HEADER ith
  WHERE ith.VERIFER_TYPE IS NULL
  -- 查出核销类型为空的核销单</code></pre>
<h4>报错14：核销出库单明细不可为空</h4>
<ul><li><strong>触发条件</strong>：提交审批时，核销单下无核销行数据(EPM_INVOICE_TRUTH_LINE为空)</li><li><strong>逻辑分析</strong>：checkWorkFlowData方法中按INVOICE_TRUTH_ID查询核销行列表，若为空则抛出阻断性报错。需先添加核销行再提交</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.HZ_APPROVE_STATUS,
         (SELECT COUNT(*) FROM EPM_INVOICE_TRUTH_LINE itl
          WHERE itl.INVOICE_TRUTH_ID = ith.INVOICE_TRUTH_ID) AS 核销行数
  FROM EPM_INVOICE_TRUTH_HEADER ith
  WHERE ith.INVOICE_TRUTH_ID = :invoiceTruthId
  -- 若核销行数为0，则触发该报错</code></pre>
<h4>报错15：本次核销数量不能大于可核销数量</h4>
<ul><li><strong>触发条件</strong>：保存核销时，核销行下所有发票明细的本次核销数量合计超过出库单行可核销数量(CAN_VERIFY_NUM)</li><li><strong>逻辑分析</strong>：checkVeriferInvoice方法中累计核销行下所有发票明细的本次核销数量(sumThisVeriferNumber)，若超过出库单行可核销数量(canVerifyNum)则抛出阻断性报错。与"核销数量超过剩余可核销数量"不同，该校验针对单行发票明细，本校验针对核销行合计</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE,
         itl.CAN_VERIFER_NUMBER, itl.SUR_VERIFY_NUM,
         (SELECT SUM(vid.THIS_VERIFER_NUMBER) FROM EPM_VERIFER_INVOICE_DETAILS vid
          WHERE vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID) AS 合计核销数量
  FROM EPM_INVOICE_TRUTH_LINE itl
  WHERE (SELECT SUM(vid.THIS_VERIFER_NUMBER) FROM EPM_VERIFER_INVOICE_DETAILS vid
         WHERE vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID) &gt; itl.SUR_VERIFY_NUM
  -- 查出合计核销数量超过可核销数量的核销行</code></pre>
<h4>报错16：对应的出库单明细不存在</h4>
<ul><li><strong>触发条件</strong>：提交审批时，核销行关联的出库单行(INV_OUT_BILL_LINE_ID)不存在或为空</li><li><strong>逻辑分析</strong>：checkWorkFlowData方法中遍历核销行，若invOutBillLineId为空则收集错误信息并抛出阻断性报错。需确认出库单行有效性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE, itl.INV_OUT_BILL_LINE_ID
  FROM EPM_INVOICE_TRUTH_LINE itl
  WHERE itl.INVOICE_TRUTH_ID = :invoiceTruthId
    AND (itl.INV_OUT_BILL_LINE_ID IS NULL
         OR NOT EXISTS (SELECT 1 FROM INV_OUT_BILL_LINE iobl
                        WHERE iobl.INV_OUT_BILL_LINE_ID = itl.INV_OUT_BILL_LINE_ID))
  -- 查出出库单行不存在的核销行</code></pre>
<h4>报错17：对应的出库单明细可核销数量不足</h4>
<ul><li><strong>触发条件</strong>：提交审批时，出库单行可核销数量(selectCanVerifyNumOfLine)&lt;0</li><li><strong>逻辑分析</strong>：checkWorkFlowData方法中按invOutBillLineId查询出库单行可核销数量，若&lt;0则收集错误信息并抛出阻断性报错。可能原因：并发核销导致可核销数量被占用。需检查出库单行可核销数量</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT iobl.INV_OUT_BILL_LINE_ID, iobl.INV_BILL_NO, iobl.ITEM_CODE,
         iobl.CAN_VERIFY_NUM, iobl.USED_VERIFY_NUM,
         iobl.CAN_VERIFY_NUM - NVL(iobl.USED_VERIFY_NUM, 0) AS 剩余可核销数量
  FROM INV_OUT_BILL_LINE iobl
  WHERE iobl.INV_OUT_BILL_LINE_ID IN (
    SELECT itl.INV_OUT_BILL_LINE_ID FROM EPM_INVOICE_TRUTH_LINE itl
    WHERE itl.INVOICE_TRUTH_ID = :invoiceTruthId
  )
    AND iobl.CAN_VERIFY_NUM - NVL(iobl.USED_VERIFY_NUM, 0) &lt; 0
  -- 查出可核销数量不足的出库单行</code></pre>
<h4>报错18：发票核销数量超过剩余可核销数量</h4>
<ul><li><strong>触发条件</strong>：提交审批时，发票明细的本次核销数量合计超过发票明细剩余可核销数量(SURPLUS_CAN_VERIFER_NUMBER&lt;0)</li><li><strong>逻辑分析</strong>：checkWorkFlowData方法中按发票明细ID汇总本次核销数量，查询发票明细剩余可核销数量，若剩余可核销数量&lt;0则收集错误信息并抛出阻断性报错。需调整核销数量</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT uid.INVOICE_DETAILS_ID, uid.INVOICE_NUMBER, uid.SERVICES_NAME,
         uid.SURPLUS_CAN_VERIFER_NUMBER,
         (SELECT SUM(vid.THIS_VERIFER_NUMBER) FROM EPM_VERIFER_INVOICE_DETAILS vid
          WHERE vid.INVOICE_DETAILS_ID = uid.INVOICE_DETAILS_ID) AS 本次核销合计
  FROM EPM_UPLOAD_INVOICE_DETAILS uid
  WHERE uid.INVOICE_DETAILS_ID IN (
    SELECT vid.INVOICE_DETAILS_ID FROM EPM_VERIFER_INVOICE_DETAILS vid
    JOIN EPM_INVOICE_TRUTH_LINE itl ON vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID
    WHERE itl.INVOICE_TRUTH_ID = :invoiceTruthId
  )
    AND uid.SURPLUS_CAN_VERIFER_NUMBER &lt; 0
  -- 查出剩余可核销数量&lt;0的发票明细</code></pre>
</KbCard>

<KbCard title="常见问题">
<p><strong>Q1: 真实性核销凭证号如何生成？</strong></p>
<p>A: 通过编码规则AE.INVOICE_CANCELLATION_UPLOAD自动生成(RuleCodeEnum.INVOICE_CANCELLATION_UPLOAD_NO)。核销单号通过AE.INVOICE_AUTHENTICITY_VERIFI(工程)/AE.JZ_INVOICE_AUTHENTICITY_VER(家装)生成。</p>
<p><strong>Q2: 取消核销的五种类型区别？</strong></p>
<p>A: invoice=取消整张发票，invoiceDetail=取消单条发票明细，invLine=取消出库单行核销，veriferDetail=取消核销明细行，obsInvoice=作废发票。不同类型影响的数据范围不同，取消时均更新EFFECT_STATUS为canceled并记录取消信息。</p>
<p><strong>Q3: 三性校验是什么？</strong></p>
<p>A: 发票购买方与工程采购单位名称一致性(UNIT_NAME_IS_AGREEMENT)、发票销售方与经销商法人名称一致性(BILLING_NAME_IS_AGREEMENT)、发票日期是否在发货日期之前(DATE_IS_AGREEMENT)，用于验证发票真实性。</p>
<p><strong>Q4: 取消核销后出库单行可核销数量未回加</strong></p>
<ul><li><strong>原因</strong>：updateClData中invLine为空(无审批通过的核销明细)，或分布式锁获取失败</li><li><strong>处理</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, ith.HZ_APPROVE_STATUS
FROM EPM_VERIFER_INVOICE_DETAILS vid
JOIN EPM_INVOICE_TRUTH_LINE itl ON vid.INVOICE_TRUTH_LINE_ID = itl.INVOICE_TRUTH_LINE_ID
JOIN EPM_INVOICE_TRUTH_HEADER ith ON ith.INVOICE_TRUTH_ID = itl.INVOICE_TRUTH_ID
WHERE vid.EFFECT_STATUS IN ('invalid','valid')
  AND ith.HZ_APPROVE_STATUS IN ('NEW','RUN','APPROVED');</code></pre>
<p><strong>Q5: 审批通过后出库单行核销数量未更新</strong></p>
<ul><li><strong>原因</strong>：wfComplete回调未正确执行，或核销明细有效状态更新失败</li><li><strong>处理</strong>：检查EPM_VERIFER_INVOICE_DETAILS的EFFECT_STATUS是否为valid，检查INV_OUT_BILL_LINE的已核销数量/可核销数量</li></ul>
<p><strong>Q6: 单位转换率的作用？</strong></p>
<p>A: UOM_RATE用于计量单位转换，当发票明细单位与核销单位不一致时，通过转换率计算转化后剩余可核销数量(CONVERT_SUR_VERIFER_NUMBER=剩余可核销数量×UOM_RATE)，保证核销数量准确。</p>
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
<tr><td>2025-09-23</td><td>-</td><td>-</td><td>初始版本，工程真实性核销功能</td></tr>
<tr><td>2026-07-31</td><td>-</td><td>-</td><td>初始生成知识库文档</td></tr>
<tr><td>2026-08-30</td><td>-</td><td>CodeArts</td><td>按skill规范重写：移除网站内容补充/业务是什么/权限控制/历史排查记录章节、章节去编号、界面模块表格改为6列、上游依赖改为4列、下游影响改为bullet points、数据库表改为5列、报错表改为5列、新增明细字段列表/选择弹窗/导入/提交校验章节、合并6个重点逻辑和22个后端接口</td></tr>
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