<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">业务是什么</span>
    <h2>合同签署异常处理</h2>
    <p>在电子合同签署过程中出现异常时，按类型恢复或终止，保障合同流程不卡死</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">为何要处理异常</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">解决两个业务痛点</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>流程不卡死</strong> — 签署异常需有出口，否则合同长期挂起</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>状态可恢复</strong> — 可重试的异常应支持恢复，减少重签成本</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 7L8 9L10 6"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">异常分几类</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">四类常见异常</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>拒签/ OA驳回</strong> — 对方拒绝或内部审批未通过</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;"><div style="font-size:.75rem;"><strong>用印异常/门户推送失败</strong> — 签章或推送环节出错</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>异常处理流程</h2>
    <p>从异常发生到判断可恢复性，再走恢复或终止</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5V8L10 10"/></svg></div>
      <h5>签署异常</h5>
      <small>拒签/OA驳回<br>用印/门户异常</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 3L14 8L8 13L2 8Z"/><path d="M8 6V8"/></svg></div>
      <h5>判断可恢复性</h5>
      <small>区分可重试<br>与需终止</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"/><path d="M8 4V12"/></svg></div>
      <h5>恢复流转</h5>
      <small>重新提交/用印<br>推送门户</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 8H10"/></svg></div>
      <h5>终止合同</h5>
      <small>不可恢复时<br>终止收尾</small>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>说明：</strong>异常处理由合同状态机驱动，无独立工作流；可恢复的异常提供重提交、重签、重推等恢复按钮。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键规则</span>
    <h2>异常处理的关键规则</h2>
    <p>异常分类处置，恢复与终止各有明确操作</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 3L14 8L8 13L2 8Z"/><path d="M8 6V8"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">异常分类处置</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">拒签、OA驳回、用印异常、门户推送失败分别匹配对应恢复动作。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"/><path d="M8 4V12"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">可恢复动作</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">重新提交OA、确认拒签、重新用印、重新推送门户等操作按需触发。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"/><path d="M6 8H10"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">可终止收尾</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">不可恢复的异常执行终止，合同状态收尾，不再占用签署流程。</p>
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
  <h4 class="bf-main-title">合同签署异常处理 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★合同签署异常处理★ → ⚖是否可恢复？ → 状态流转恢复/终止合同 → 结束</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="193" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="268" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">合同签署流程</text>
      <rect x="359" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="434" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">值集(合同类型/状态)</text>
      <rect x="525" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">OA系统</text>
      <rect x="691" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="766" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">用印系统</text>
      <rect x="857" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="932" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">合同模板</text>
      <line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="194" x2="600" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="460" y="290" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="315" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★合同签署异常处理★</text>
      <text x="600" y="335" text-anchor="middle" fill="#DCFCE7" font-size="10">查看异常列表·选异常合同·按类型处理</text>
      <line x1="600" y1="344" x2="600" y2="372" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="600,372 670,410 600,448 530,410" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="414" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 是否可恢复？</text>
      <line x1="600" y1="448" x2="600" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="510" y="470" width="180" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="497" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">状态流转恢复</text>
      <line x1="670" y1="410" x2="750" y2="410" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arr-gray)"/>
      <rect x="750" y="392" width="150" height="40" rx="6" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1.5"/>
      <text x="825" y="417" text-anchor="middle" fill="#4B5563" font-size="12" font-weight="600">终止合同</text>
      <line x1="825" y1="432" x2="825" y2="580" stroke="#9CA3AF" stroke-width="1.5"/>
      <line x1="825" y1="580" x2="645" y2="580" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#arr-gray)"/>
      <line x1="600" y1="514" x2="600" y2="560" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="555" y="560" width="90" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="585" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="600" y1="600" x2="600" y2="660" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="660" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="682" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="270" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="345" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">经销商合同管理</text>
      <rect x="440" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="515" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">OA系统(重推)</text>
      <rect x="610" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="685" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">用印系统(重用印)</text>
      <rect x="780" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="855" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门户系统(推送)</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑服务</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#9CA3AF;"></span> 终止/异常分支</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：异常分类处置">
<ul><li><strong>业务意义</strong>：不同异常类型匹配对应恢复动作，确保异常有出口不卡死</li><li><strong>具体逻辑描述</strong>：异常类型包括签署超时、签署失败、归档失败、回调失败等，分别匹配重新归档、修改合同状态、重发签署短信、合同同步等恢复动作</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：重新归档">
<ul><li><strong>业务意义</strong>：归档失败的合同需重新触发归档流程，确保合同归档完成</li><li><strong>具体逻辑描述</strong>：调用 fddContractFiling 接口，传入 electronicContractId，重新触发法大大归档</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：修改合同状态">
<ul><li><strong>业务意义</strong>：签署异常时品牌方可手动修正合同状态，使流程继续推进</li><li><strong>具体逻辑描述</strong>：调用 modify/contractStatus 接口，手动修改合同状态至目标状态</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：重发签署短信">
<ul><li><strong>业务意义</strong>：签署超时或短信未送达时，重新向经销商发送签署短信</li><li><strong>具体逻辑描述</strong>：调用 noticeDistributor/rePush 接口，传入 electronicContractId，重新推送签署通知短信</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：合同同步">
<ul><li><strong>业务意义</strong>：回调失败时签署状态与外部系统不一致，需手动触发同步</li><li><strong>具体逻辑描述</strong>：调用 callback/retry/update-signature 接口，传入 unifyContractCode，重新同步签署状态</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<h4>查询条件</h4>
<blockquote>前端代码：<code>contract/processing/stores/listConfig.tsx</code> 的 <code>listDS.queryFields</code>。DataSet 通过 <code>transport.read</code> 调用 <code>contractProcessingApi.query</code>（POST <code>ch/contract/process/page</code>）。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>来源合同编号</td><td>SOURCE_DOCUMENT_CODE</td><td>TextField</td><td>按来源合同编号查询</td><td>始终显示</td><td>手动输入，模糊查询</td></tr>
<tr><td>合同编号</td><td>ELECTRONIC_CONTRACT_CODE</td><td>TextField</td><td>按合同编号查询</td><td>始终显示</td><td>手动输入，模糊查询</td></tr>
<tr><td>经销商编码</td><td>AGENT_CODE</td><td>TextField</td><td>按经销商编码查询</td><td>始终显示</td><td>手动输入，模糊查询</td></tr>
<tr><td>合同类型</td><td>CONTRACT_TYPE</td><td>Select</td><td>按合同类型筛选</td><td>始终显示</td><td>值集 MBO.CONTRACT_TYPE</td></tr>
<tr><td>子合同类型</td><td>CONTRACT_SUB_TYPE</td><td>Select</td><td>按子合同类型筛选</td><td>始终显示</td><td>值集 MBO.CONTRACT_SUB_TEMPLATE（动态值集，lookupAxiosConfig 批量查询）</td></tr>
<tr><td>合同状态</td><td>CONTRACT_STATUS</td><td>Select</td><td>按合同状态筛选</td><td>始终显示</td><td>值集 MBO.CONTRACT_STATUS</td></tr>
</tbody>
</table>
<h4>列表表格</h4>
<blockquote>前端代码：<code>contract/processing/stores/listConfig.tsx</code> 的 <code>listDScolumns</code>。Table 使用 <code>queryBar=&#123;TableQueryBarType.professionalBar&#125;</code>，<code>customizedCode="column-group"</code>，列可拖拽/自定义。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>合同统一编号</td><td>UNIFY_CONTRACT_CODE</td><td>Button(link)</td><td>合同统一编号</td><td>始终显示</td><td>左锁定列，点击调用 `handleAction` 跳转详情页</td></tr>
<tr><td>合同编号</td><td>ELECTRONIC_CONTRACT_CODE</td><td>Button(link)</td><td>合同业务编号</td><td>始终显示</td><td>左锁定列，点击调用 `handleAction` 跳转详情页</td></tr>
<tr><td>来源合同编号</td><td>SOURCE_DOCUMENT_CODE</td><td>TextField</td><td>来源合同编号</td><td>始终显示</td><td>-</td></tr>
<tr><td>合同类型</td><td>CONTRACT_TYPE_NAME</td><td>TextField</td><td>合同类型名称</td><td>始终显示</td><td>后端返回 contractTypeName</td></tr>
<tr><td>经销商</td><td>AGENT_NAME</td><td>TextField</td><td>经销商名称</td><td>始终显示</td><td>-</td></tr>
<tr><td>经销商简称</td><td>SHORT_NAME</td><td>TextField</td><td>经销商简称</td><td>始终显示</td><td>-</td></tr>
<tr><td>交易公司</td><td>TRADE_COMPANY_NAME</td><td>TextField</td><td>交易公司名称</td><td>始终显示</td><td>-</td></tr>
<tr><td>合同有效期</td><td>BEGIN_DATE</td><td>TextField</td><td>合同有效期（起-止）</td><td>始终显示</td><td>渲染为 `$&#123;moment(beginDate).format('YYYY-MM-DD')&#125; ~ $&#123;moment(endDate).format('YYYY-MM-DD')&#125;`</td></tr>
<tr><td>法人编码</td><td>BILL_ACCT_CODE</td><td>TextField</td><td>法人编码</td><td>始终显示</td><td>-</td></tr>
<tr><td>法人名称</td><td>BILL_ACCT_NAME</td><td>TextField</td><td>法人名称</td><td>始终显示</td><td>-</td></tr>
<tr><td>状态</td><td>CONTRACT_STATUS_NAME</td><td>TextField</td><td>合同状态名称</td><td>始终显示</td><td>后端返回 contractStatusName</td></tr>
<tr><td>驳回原因</td><td>REJECT_REASON</td><td>TextField</td><td>驳回原因</td><td>始终显示</td><td>-</td></tr>
<tr><td>创建人</td><td>CREATE_USER_CODE</td><td>TextField</td><td>创建人编码</td><td>始终显示</td><td>-</td></tr>
<tr><td>创建时间</td><td>CREATE_TIME</td><td>TextField</td><td>创建时间</td><td>始终显示</td><td>-</td></tr>
<tr><td>发起人</td><td>INITIATOR</td><td>TextField</td><td>发起人</td><td>始终显示</td><td>-</td></tr>
<tr><td>发起时间</td><td>INITIATE_TIME</td><td>TextField</td><td>发起时间</td><td>始终显示</td><td>-</td></tr>
<tr><td>完成时间</td><td>COMPLETE_TIME</td><td>TextField</td><td>完成时间</td><td>始终显示</td><td>-</td></tr>
<tr><td>操作</td><td>-</td><td>Button(link)</td><td>行操作按钮组</td><td>始终显示</td><td>右锁定列，根据合同状态动态渲染不同操作按钮（见下表）</td></tr>
</tbody>
</table>
<p>查询SQL：</p>
<pre class="detail-sql" v-pre><code>SELECT EC.UNIFY_CONTRACT_CODE       AS "合同统一编号",
       EC.ELECTRONIC_CONTRACT_CODE  AS "合同编号",
       EC.SOURCE_DOCUMENT_CODE      AS "来源合同编号",
       EC.CONTRACT_TYPE_NAME        AS "合同类型",
       EC.AGENT_NAME                AS "经销商",
       EC.SHORT_NAME                AS "经销商简称",
       EC.TRADE_COMPANY_NAME        AS "交易公司",
       EC.BEGIN_DATE                AS "合同开始日期",
       EC.END_DATE                  AS "合同结束日期",
       EC.BILL_ACCT_CODE            AS "法人编码",
       EC.BILL_ACCT_NAME            AS "法人名称",
       EC.CONTRACT_STATUS_NAME      AS "状态",
       EC.REJECT_REASON             AS "驳回原因",
       EC.CREATE_USER_CODE          AS "创建人",
       TO_CHAR(EC.CREATE_TIME,'YYYY-MM-DD HH24:MI:SS') AS "创建时间",
       EC.INITIATOR                 AS "发起人",
       TO_CHAR(EC.INITIATE_TIME,'YYYY-MM-DD HH24:MI:SS') AS "发起时间",
       TO_CHAR(EC.COMPLETE_TIME,'YYYY-MM-DD HH24:MI:SS') AS "完成时间"
FROM ELECTRONIC_CONTRACT EC
WHERE (:sourceDocumentCode IS NULL OR EC.SOURCE_DOCUMENT_CODE LIKE '%' || :sourceDocumentCode || '%')
  AND (:electronicContractCode IS NULL OR EC.ELECTRONIC_CONTRACT_CODE LIKE '%' || :electronicContractCode || '%')
  AND (:agentCode IS NULL OR EC.AGENT_CODE LIKE '%' || :agentCode || '%')
  AND (:contractType IS NULL OR EC.CONTRACT_TYPE = :contractType)
  AND (:contractSubType IS NULL OR EC.CONTRACT_SUB_TYPE = :contractSubType)
  AND (:status IS NULL OR EC.CONTRACT_STATUS = :status)
ORDER BY EC.CREATE_TIME DESC;</code></pre>
</KbCard>

<KbCard title="选择弹窗">
<h4>弹窗1：修改合同状态弹窗（UpdateContractStatus 组件）</h4>
<blockquote>前端代码：<code>contract/processing/components/UpdateContractStatus.tsx</code>。通过 <code>updateContractStatusRef.current.open(data)</code> 打开，data 包含 id、electronicContractCode、contractStatus、newContractStatus。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>合同编号</td><td>ELECTRONIC_CONTRACT_CODE</td><td>TextField</td><td>当前合同编号</td><td>始终显示</td><td>disabled，由行数据传入</td></tr>
<tr><td>当前合同状态</td><td>CONTRACT_STATUS</td><td>Select</td><td>当前合同状态</td><td>始终显示</td><td>disabled，值集 MBO.CONTRACT_STATUS，textField=meaning，valueField=value</td></tr>
<tr><td>修改后合同状态</td><td>NEW_CONTRACT_STATUS</td><td>Select</td><td>修改后的目标合同状态</td><td>始终显示</td><td>required，值集 MBO.CONTRACT_STATUS，textField=meaning，valueField=value</td></tr>
</tbody>
</table>
<p>弹窗配置：<code>title='修改合同状态'</code>，<code>size='large'</code>，<code>closable=true</code>，<code>resizable=true</code>，<code>destroyOnClose=true</code>。</p>
<ul><li><code>onOk</code>：先 <code>formDS.validate()</code> 校验，通过后调用 <code>contractProcessingApi.updateContractStatus</code>（POST <code>ch/contract/process/modify/contractStatus</code>），提交 <code>formDS.current.toData()</code>；成功后调用 <code>onSuccess</code> 触发列表刷新。</li><li><code>onCancel</code>：<code>formDS.reset()</code> 重置表单。</li></ul>
</KbCard>

<KbCard title="其他按钮">
<blockquote>前端代码：<code>contract/processing/list.tsx</code> 头部按钮 + <code>contract/processing/stores/listConfig.tsx</code> 的 <code>getOperateBtns</code> 行操作按钮。行操作按钮根据 <code>record.get('contractStatus')</code> 动态显示，每个按钮配置 <code>permissionList</code> 权限码。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>所在位置</th><th>显隐条件</th><th>权限码</th><th>功能说明</th></tr>
</thead>
<tbody>
<tr><td>发起授权书</td><td>头部按钮</td><td>始终显示</td><td>-</td><td>跳转 `/contract/authorization/add` 新增授权书</td></tr>
<tr><td>发起联络函</td><td>头部按钮</td><td>始终显示</td><td>-</td><td>跳转 `/contract/contactLetter/add` 新增联络函</td></tr>
<tr><td>修改合同状态</td><td>行操作</td><td>始终显示</td><td>hzero.e_contract.brand.processing.ps.update_contract_status</td><td>打开"修改合同状态"弹窗，调用 `ch/contract/process/modify/contractStatus` 接口修改状态</td></tr>
<tr><td>合同签署发起</td><td>行操作</td><td>合同状态为 `temporary`</td><td>hzero.e_contract.brand.processing.ps.contract_sign_init</td><td>跳转签署发起页面 `/contract/&#123;contractFolder&#125;/sign/&#123;electronicContractId&#125;`</td></tr>
<tr><td>重新推送法大大</td><td>行操作</td><td>合同状态为 `waiting_seal`</td><td>hzero.e_contract.brand.processing.ps.resend_signing_sms</td><td>Modal.confirm 确认后调用 `ch/contract/process/noticeDistributor/rePush/&#123;electronicContractId&#125;` 接口重发签署短信，弹窗内展示签订主体和签订人信息</td></tr>
<tr><td>合同同步</td><td>行操作</td><td>合同状态为 `completed`</td><td>hzero.e_contract.brand.processing.ps.contract-sync</td><td>Modal.confirm 确认后调用 `ch/contract/callback/retry/update-signature/&#123;unifyContractCode&#125;` 接口同步签署状态</td></tr>
<tr><td>合同重新归档</td><td>行操作</td><td>合同状态为 `completed`/`submitted_oa`/`push_portal`/`pass_oa`</td><td>hzero.e_contract.brand.processing.ps.electronic_contract</td><td>Modal.confirm 确认后调用 `ch/contract/process/fddContractFiling/&#123;electronicContractId&#125;` 接口重新归档</td></tr>
<tr><td>拒签处理</td><td>行操作</td><td>合同状态为 `refuse_seal`</td><td>hzero.e_contract.brand.processing.ps.contract_reject</td><td>跳转详情页 `/contract/&#123;contractFolder&#125;/detail/&#123;electronicContractId&#125;`，传入 `actionType=PROCESS`</td></tr>
<tr><td>OA驳回处理</td><td>行操作</td><td>合同状态为 `reject_oa`</td><td>hzero.e_contract.brand.processing.ps.reject_oa</td><td>跳转详情页，传入 `actionType=REJECTION`</td></tr>
<tr><td>推送OA处理</td><td>行操作</td><td>合同状态为 `pending`</td><td>hzero.e_contract.brand.processing.ps.push_oa</td><td>跳转详情页，传入 `actionType=PUSHOA`</td></tr>
<tr><td>推送门户</td><td>行操作</td><td>合同状态为 `pass_oa`</td><td>hzero.e_contract.brand.processing.ps.push_h</td><td>跳转详情页，传入 `actionType=PASS_OA`</td></tr>
<tr><td>OA作废驳回处理</td><td>行操作</td><td>合同状态为 `oa_invalid_reject` 且合同类型为 `distribution_contract`</td><td>hzero.e_contract.brand.processing.oa_invalid_reject</td><td>跳转详情页，传入 `actionType=OA_CANCEL_REJECT`</td></tr>
</tbody>
</table>
<h4>按钮1：发起授权书（头部按钮）</h4>
<p>始终显示，点击后调用 <code>openTab(&#123; title: '发起授权书', key: '/contract/authorization/add' &#125;)</code> 跳转授权书新增页面。</p>
<h4>按钮2：发起联络函（头部按钮）</h4>
<p>始终显示，点击后调用 <code>openTab(&#123; title: '发起联络函', key: '/contract/contactLetter/add' &#125;)</code> 跳转联络函新增页面。</p>
<h4>按钮3：修改合同状态（行操作）</h4>
<p>始终显示，点击后通过 <code>updateContractStatusRef.current.open(data)</code> 打开"修改合同状态"弹窗，data 包含 id、electronicContractCode、contractStatus、newContractStatus。弹窗内展示合同编号（只读）、当前合同状态（只读）、修改后合同状态（必填），点击确定后调用 POST <code>ch/contract/process/modify/contractStatus</code> 接口，提交 <code>formDS.current.toData()</code>。成功后触发列表刷新。</p>
<h4>按钮4：合同签署发起（行操作）</h4>
<p>当合同状态为 <code>temporary</code>（临时/草稿）时显示，点击后跳转签署发起页面 <code>/contract/&#123;contractFolder&#125;/sign/&#123;electronicContractId&#125;</code>。其中 <code>contractFolder</code> 由 <code>CONTRACT_FOLDER_MAP[contractType]</code> 映射得到，<code>contractLabel</code> 由 <code>CONTRACT_LABEL_MAP[contractType]</code> 映射得到。</p>
<h4>按钮5：重新推送法大大（行操作）</h4>
<p>当合同状态为 <code>waiting_seal</code>（待签署）时显示，点击后弹出 Modal.confirm 确认框，标题"重发签署短信"，内容展示：</p>
<ul><li>① 签订主体：<code>&#123;billAcctName || '未知主体'&#125;</code></li><li>② 签订人：<code>&#123;signerName || '未知签订人'&#125;（&#123;mobile || '未知手机号'&#125;）</code></li></ul>
<p>确认后调用 POST <code>ch/contract/process/noticeDistributor/rePush/&#123;electronicContractId&#125;</code> 接口重新推送签署短信。</p>
<h4>按钮6：合同同步（行操作）</h4>
<p>当合同状态为 <code>completed</code>（已完成）时显示，点击后弹出 Modal.confirm 确认框，标题"合同同步"，内容"确定要同步该合同吗？"。确认后调用 POST <code>ch/contract/callback/retry/update-signature/&#123;unifyContractCode&#125;</code> 接口重新同步签署状态。成功后触发列表刷新。</p>
<h4>按钮7：合同重新归档（行操作）</h4>
<p>当合同状态为 <code>completed</code>/<code>submitted_oa</code>/<code>push_portal</code>/<code>pass_oa</code> 时显示，点击后弹出 Modal.confirm 确认框，标题"合同重新归档"，内容"确定要重新归档该合同吗？"。确认后调用 POST <code>ch/contract/process/fddContractFiling/&#123;electronicContractId&#125;</code> 接口重新触发法大大归档流程。成功后触发列表刷新。</p>
<h4>按钮8：拒签处理（行操作）</h4>
<p>当合同状态为 <code>refuse_seal</code>（拒签）时显示，点击后跳转详情页 <code>/contract/&#123;contractFolder&#125;/detail/&#123;electronicContractId&#125;</code>，传入 <code>actionType=PROCESS</code>，在详情页处理拒签流程。</p>
<h4>按钮9：OA驳回处理（行操作）</h4>
<p>当合同状态为 <code>reject_oa</code>（OA驳回）时显示，点击后跳转详情页，传入 <code>actionType=REJECTION</code>，在详情页处理OA驳回流程。</p>
<h4>按钮10：推送OA处理（行操作）</h4>
<p>当合同状态为 <code>pending</code>（OA审批中）时显示，点击后跳转详情页，传入 <code>actionType=PUSHOA</code>，在详情页处理推送OA流程。</p>
<h4>按钮11：推送门户（行操作）</h4>
<p>当合同状态为 <code>pass_oa</code>（OA通过）时显示，点击后跳转详情页，传入 <code>actionType=PASS_OA</code>，在详情页处理推送门户流程。</p>
<h4>按钮12：OA作废驳回处理（行操作）</h4>
<p>当合同状态为 <code>oa_invalid_reject</code>（OA作废驳回）且合同类型为 <code>distribution_contract</code>（经销合同）时显示，点击后跳转详情页，传入 <code>actionType=OA_CANCEL_REJECT</code>，在详情页处理OA作废驳回流程。</p>
</KbCard>

<KbCard title="保存/提交校验">
<ul><li>校验1：修改合同状态时目标状态必填 —— 确保状态变更目标明确</li><li>校验2：操作时需选择一条数据 —— 确保操作对象明确</li><li>校验3：合同存在性校验 —— 确保合同ID有效</li></ul>
</KbCard>

<KbCard title="状态机">
<pre class="detail-sql" v-pre><code>[签署超时] --重发短信--&gt; [待签署] --签署成功--&gt; [已完成]
                                    --签署失败--&gt; [签署失败]

[签署失败] --修改状态--&gt; [目标状态]
           --合同同步--&gt; [正常状态]

[归档失败] --重新归档--&gt; [已归档]

[回调失败] --合同同步--&gt; [正常状态]</code></pre>
<table class="kb-field-tbl">
<thead>
<tr><th>状态</th><th>状态说明</th><th>可执行操作</th></tr>
</thead>
<tbody>
<tr><td>签署超时</td><td>签署流程超时</td><td>重发签署短信、修改合同状态、合同同步</td></tr>
<tr><td>签署失败</td><td>签署流程失败</td><td>重发签署短信、修改合同状态、合同同步</td></tr>
<tr><td>归档失败</td><td>归档流程失败</td><td>重新归档、修改合同状态</td></tr>
<tr><td>回调失败</td><td>回调同步失败</td><td>合同同步、修改合同状态</td></tr>
<tr><td>待签署</td><td>等待经销商签署</td><td>修改合同状态</td></tr>
<tr><td>已完成</td><td>签署完成</td><td>修改合同状态</td></tr>
<tr><td>已归档</td><td>归档完成</td><td>修改合同状态</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="导入">
<p>不支持导入功能。</p>
</KbCard>

<KbCard title="ELECTRONIC_CONTRACT（电子合同表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ELECTRONIC_CONTRACT_ID</td><td>NUMBER</td><td>合同ID</td><td>-</td><td>主键</td></tr>
<tr><td>ELECTRONIC_CONTRACT_CODE</td><td>VARCHAR2(64)</td><td>合同业务编码</td><td>合同编号</td><td>系统自动生成</td></tr>
<tr><td>UNIFY_CONTRACT_CODE</td><td>VARCHAR2(64)</td><td>统一合同编码</td><td>-</td><td>跨系统关联</td></tr>
<tr><td>CONTRACT_NAME</td><td>VARCHAR2(256)</td><td>合同名称</td><td>合同名称</td><td>-</td></tr>
<tr><td>CONTRACT_TYPE</td><td>VARCHAR2(32)</td><td>合同类型</td><td>合同类型</td><td>值集 MBO.CONTRACT_TEMPLATE</td></tr>
<tr><td>CONTRACT_STATUS</td><td>VARCHAR2(32)</td><td>合同状态</td><td>签署状态</td><td>值集 MBO.CONTRACT_STATUS</td></tr>
<tr><td>EXCEPTION_TYPE</td><td>VARCHAR2(32)</td><td>异常类型</td><td>异常类型</td><td>值集 MBO.CONTRACT_EXCEPTION_TYPE</td></tr>
<tr><td>EXCEPTION_INFO</td><td>VARCHAR2(512)</td><td>异常信息</td><td>异常信息</td><td>异常发生时记录</td></tr>
<tr><td>AGENT_ID</td><td>NUMBER</td><td>经销商ID</td><td>-</td><td>关联经销商</td></tr>
<tr><td>AGENT_NAME</td><td>VARCHAR2(128)</td><td>经销商名称</td><td>经销商</td><td>-</td></tr>
<tr><td>BRAND_ID</td><td>NUMBER</td><td>品牌方ID</td><td>-</td><td>-</td></tr>
<tr><td>SIGN_URL</td><td>VARCHAR2(512)</td><td>签署链接</td><td>-</td><td>-</td></tr>
<tr><td>SEAL_STATUS</td><td>VARCHAR2(32)</td><td>用印状态</td><td>-</td><td>-</td></tr>
<tr><td>OA_STATUS</td><td>VARCHAR2(32)</td><td>OA审批状态</td><td>-</td><td>-</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>乐观锁版本号</td><td>-</td><td>-</td></tr>
<tr><td>CREATED_BY</td><td>NUMBER</td><td>创建人</td><td>-</td><td>系统自动</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>创建时间</td><td>系统自动</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>NUMBER</td><td>最后更新人</td><td>-</td><td>系统自动</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>更新时间</td><td>系统自动</td></tr>
</tbody>
</table>
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
<tr><td>合同状态不允许此操作</td><td>状态操作</td><td>当前状态不可执行该操作，确认合同当前状态是否正确</td><td>error</td><td>后端校验合同状态与操作匹配性</td></tr>
<tr><td>重新归档失败</td><td>重新归档</td><td>法大大接口调用异常，检查法大大服务连通性后重试</td><td>error</td><td>fddContractFiling 接口返回失败</td></tr>
<tr><td>重发短信失败</td><td>重发签署短信</td><td>短信平台接口异常，检查短信平台服务状态</td><td>error</td><td>noticeDistributor/rePush 接口返回失败</td></tr>
<tr><td>合同同步失败</td><td>合同同步</td><td>回调接口异常，检查外部系统状态后重试</td><td>error</td><td>callback/retry/update-signature 接口返回失败</td></tr>
<tr><td>合同不存在</td><td>处理时</td><td>合同ID无效，检查合同ID</td><td>error</td><td>后端校验合同存在性</td></tr>
<tr><td>网络异常/接口超时</td><td>任意接口调用</td><td>网络中断或接口响应超时，检查网络及后端超时配置</td><td>error</td><td>axios catch 或 timeout</td></tr>
<tr><td>权限不足</td><td>点击操作按钮</td><td>当前用户无对应按钮权限码，联系管理员授权</td><td>error</td><td>permissionList 校验未通过</td></tr>
<tr><td>法大大服务不可用</td><td>重新归档/合同同步</td><td>法大大服务异常，检查法大大服务状态</td><td>error</td><td>法大大接口返回失败</td></tr>
<tr><td>短信平台不可用</td><td>重发短信</td><td>短信平台服务异常，检查短信平台状态</td><td>error</td><td>短信平台接口返回失败</td></tr>
<tr><td>值集数据不显示</td><td>下拉选项</td><td>值集 MBO.CONTRACT_EXCEPTION_TYPE 等未配置，检查值集配置</td><td>warning</td><td>lookupCode 查询返回空</td></tr>
<tr><td>经销商手机号缺失</td><td>重发短信</td><td>经销商手机号为空或格式错误，检查经销商档案手机号</td><td>error</td><td>后端校验手机号非空</td></tr>
</tbody>
</table>
<h4>报错1：合同状态不允许此操作</h4>
<ul><li><strong>触发条件</strong>：执行重新归档、修改合同状态、重发签署短信、合同同步等操作时，当前合同状态不允许该操作</li><li><strong>逻辑分析</strong>：后端校验合同状态与操作匹配性，如归档失败状态才允许重新归档、签署超时/签署失败状态才允许重发短信、回调失败状态才允许合同同步。若当前状态与操作不匹配则提示"合同状态不允许此操作"。确保操作合法性，避免在错误状态下执行操作导致数据混乱</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号,
         CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态,
         EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE IS NOT NULL
    AND CONTRACT_STATUS NOT IN ('signing_timeout', 'signing_failed',
                                'filing_failed', 'callback_failed',
                                'pending_sign', 'completed', 'filed');</code></pre>
<h4>报错2：重新归档失败</h4>
<ul><li><strong>触发条件</strong>：调用 fddContractFiling 接口重新归档时，法大大接口调用异常</li><li><strong>逻辑分析</strong>：后端调用法大大归档接口 fddContractFiling，若法大大服务不可用、网络异常、归档参数错误、合同已归档等则接口返回失败，提示"重新归档失败"。需检查法大大服务连通性、合同归档参数、法大大服务日志</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号,
         CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态,
         EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息,
         TO_CHAR(LAST_UPDATE_DATE,'YYYY-MM-DD HH24:MI:SS') AS 最后更新时间
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE = 'filing_failed'
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错3：重发短信失败</h4>
<ul><li><strong>触发条件</strong>：调用 noticeDistributor/rePush 接口重发签署短信时，短信平台接口异常</li><li><strong>逻辑分析</strong>：后端调用短信平台接口 noticeDistributor/rePush，若短信平台服务不可用、网络异常、经销商手机号缺失或错误、短信模板配置错误等则接口返回失败，提示"重发短信失败"。需检查短信平台服务状态、经销商手机号、短信模板配置</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号,
         CONTRACT_NAME AS 合同名称,
         AGENT_NAME AS 经销商,
         CONTRACT_STATUS AS 签署状态,
         EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE IN ('signing_timeout', 'signing_failed')
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错4：合同同步失败</h4>
<ul><li><strong>触发条件</strong>：调用 callback/retry/update-signature 接口合同同步时，回调接口异常</li><li><strong>逻辑分析</strong>：后端调用回调接口 callback/retry/update-signature，若外部系统（法大大/OA）不可用、网络异常、unifyContractCode 无效、签署状态不匹配等则接口返回失败，提示"合同同步失败"。需检查外部系统状态、unifyContractCode 有效性、外部系统签署状态</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号,
         UNIFY_CONTRACT_CODE AS 统一合同编码,
         CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态,
         EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE = 'callback_failed'
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错5：合同不存在</h4>
<ul><li><strong>触发条件</strong>：执行异常处理操作时，传入的 electronicContractId 或 unifyContractCode 在数据库中不存在</li><li><strong>逻辑分析</strong>：后端校验合同存在性，根据传入的 electronicContractId 或 unifyContractCode 查询 ELECTRONIC_CONTRACT 表，若不存在则提示"合同不存在"。常见根因包括：合同ID被删除、合同ID传参错误、合同编码被修改等</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_ID AS 合同ID,
         ELECTRONIC_CONTRACT_CODE AS 合同编号,
         UNIFY_CONTRACT_CODE AS 统一合同编码,
         CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态
  FROM ELECTRONIC_CONTRACT
  WHERE ELECTRONIC_CONTRACT_ID IS NULL
     OR UNIFY_CONTRACT_CODE IS NULL;</code></pre>
<h4>报错6：网络异常/接口超时</h4>
<ul><li><strong>触发条件</strong>：任意接口调用时，网络中断或接口响应超过 axios timeout 配置</li><li><strong>逻辑分析</strong>：前端 axios 请求未收到响应或响应超时，触发 catch 回调统一提示"请求失败"。常见根因：网络中断、mbo-business 服务假死、数据库慢查询、法大大/短信平台响应慢等。需检查网络连通性、后端服务负载、外部系统状态</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号, CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态,
         TO_CHAR(LAST_UPDATE_DATE,'YYYY-MM-DD HH24:MI:SS') AS 最后更新时间
  FROM ELECTRONIC_CONTRACT
  WHERE LAST_UPDATE_DATE &gt;= SYSDATE - 1
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错7：权限不足</h4>
<ul><li><strong>触发条件</strong>：点击重新归档、修改合同状态、重发短信、合同同步等按钮时，当前用户无对应 permissionList 权限码</li><li><strong>逻辑分析</strong>：前端 Button 组件通过 permissionList 配置权限码，HZERO 框架校验当前用户角色是否包含该权限码，未包含则按钮不可见或禁用。若强制调用接口，后端也会校验权限返回403。需联系管理员配置对应角色权限</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT U.USER_NAME AS 用户名, R.ROLE_NAME AS 角色名, P.PERMISSION_CODE AS 权限码
  FROM SYS_USER U
  LEFT JOIN SYS_USER_ROLE UR ON U.USER_ID = UR.USER_ID
  LEFT JOIN SYS_ROLE R ON UR.ROLE_ID = R.ROLE_ID
  LEFT JOIN SYS_ROLE_PERMISSION RP ON R.ROLE_ID = RP.ROLE_ID
  LEFT JOIN SYS_PERMISSION P ON RP.PERMISSION_ID = P.PERMISSION_ID
  WHERE P.PERMISSION_CODE LIKE '%contract_exception%' ORDER BY U.USER_NAME;</code></pre>
<h4>报错8：法大大服务不可用</h4>
<ul><li><strong>触发条件</strong>：调用重新归档、合同同步等涉及法大大的接口时，法大大服务异常</li><li><strong>逻辑分析</strong>：后端调用法大大接口，若法大大服务不可用、网络异常、接口超时等则接口返回失败。需检查法大大服务运行状态、网络连通性、法大大接口配置</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号, CONTRACT_NAME AS 合同名称,
         CONTRACT_STATUS AS 签署状态, EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息,
         TO_CHAR(LAST_UPDATE_DATE,'YYYY-MM-DD HH24:MI:SS') AS 最后更新时间
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE IN ('filing_failed','callback_failed')
    AND LAST_UPDATE_DATE &gt;= SYSDATE - 7
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错9：短信平台不可用</h4>
<ul><li><strong>触发条件</strong>：调用重发短信接口时，短信平台服务异常</li><li><strong>逻辑分析</strong>：后端调用短信平台接口，若短信平台服务不可用、网络异常、接口超时等则接口返回失败。需检查短信平台服务状态、网络连通性、短信平台配置</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ELECTRONIC_CONTRACT_CODE AS 合同编号, AGENT_NAME AS 经销商,
         CONTRACT_STATUS AS 签署状态, EXCEPTION_TYPE AS 异常类型,
         EXCEPTION_INFO AS 异常信息
  FROM ELECTRONIC_CONTRACT
  WHERE EXCEPTION_TYPE IN ('signing_timeout','signing_failed')
    AND LAST_UPDATE_DATE &gt;= SYSDATE - 7
  ORDER BY LAST_UPDATE_DATE DESC;</code></pre>
<h4>报错10：值集数据不显示</h4>
<ul><li><strong>触发条件</strong>：查询条件或列表中异常类型等下拉选项为空</li><li><strong>逻辑分析</strong>：前端通过 lookupCode 查询值集 MBO.CONTRACT_EXCEPTION_TYPE、MBO.CONTRACT_STATUS 等，值集未配置或未启用则下拉选项为空。需在值集管理页面配置对应值集</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT LOOKUP_CODE AS 值集编码, LOOKUP_VALUE_CODE AS 值编码,
         LOOKUP_VALUE_NAME AS 值名称, ENABLE_FLAG AS 启用标记
  FROM SYS_LOOKUP_VALUE
  WHERE LOOKUP_CODE IN ('MBO.CONTRACT_EXCEPTION_TYPE','MBO.CONTRACT_STATUS')
    AND ENABLE_FLAG = 'N' ORDER BY LOOKUP_CODE;</code></pre>
<h4>报错11：经销商手机号缺失</h4>
<ul><li><strong>触发条件</strong>：重发签署短信时，经销商手机号为空或格式错误</li><li><strong>逻辑分析</strong>：后端校验经销商手机号非空且格式正确，若手机号为空或格式错误则返回业务异常。需检查经销商档案中的手机号字段</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT C.ELECTRONIC_CONTRACT_CODE AS 合同编号, C.AGENT_NAME AS 经销商,
         D.MOBILE AS 手机号, D.CONTACT_PHONE AS 联系电话
  FROM ELECTRONIC_CONTRACT C
  LEFT JOIN DISTRIBUTOR D ON C.AGENT_CODE = D.DISTRIBUTOR_CODE
  WHERE C.CONTRACT_STATUS IN ('signing_timeout','signing_failed')
    AND (D.MOBILE IS NULL OR D.MOBILE = ''
         OR REGEXP_LIKE(D.MOBILE, '^[^1][^3-9]') = FALSE);</code></pre>
</KbCard>

<KbCard title="常见问题">
<table class="kb-field-tbl">
<thead>
<tr><th>问题</th><th>排查方式</th></tr>
</thead>
<tbody>
<tr><td>异常类型有哪些</td><td>签署超时、签署失败、归档失败、回调失败等，查看值集 MBO.CONTRACT_EXCEPTION_TYPE</td></tr>
<tr><td>重新归档后合同状态未更新</td><td>检查法大大归档接口返回结果，确认归档是否成功</td></tr>
<tr><td>重发短信后经销商未收到</td><td>检查短信平台发送记录，确认经销商手机号是否正确</td></tr>
<tr><td>合同同步后状态仍不一致</td><td>检查外部系统签署状态，确认 unifyContractCode 是否正确</td></tr>
<tr><td>修改合同状态后流程未继续</td><td>检查目标状态是否合法，确认状态流转规则</td></tr>
</tbody>
</table>
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
<tr><td>2025-11-12</td><td>-</td><td>hfy</td><td>初始创建</td></tr>
<tr><td>2026-07-31</td><td>-</td><td>AI</td><td>对比网站补充定义、详细逻辑、数据库表字段等</td></tr>
<tr><td>2026-08-30</td><td>-</td><td>AI</td><td>按skill规范格式重写</td></tr>
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