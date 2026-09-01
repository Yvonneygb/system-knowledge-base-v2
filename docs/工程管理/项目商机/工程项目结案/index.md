<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>工程项目结案是什么</h2>
    <p>对已履约完毕的工程合同或工程项目进行收尾，关闭其后续业务流转</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="5" height="12" rx="1" stroke="white" stroke-width="1.5"/><rect x="9" y="2" width="5" height="7" rx="1" stroke="white" stroke-width="1.5"/><path d="M9 12H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">结案解决什么</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">两种结案方式</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>合同结案</strong> — 对单个工程合同及其增补合同收尾，标记结案日期与结案类型。</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>项目结案</strong> — 对整项目收尾，其下已审批通过的合同一并失效，并更新项目进度为结案阶段。</div>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0ea5e9,#0284c7);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="white" stroke-width="1.5"/><path d="M8 5V8L10 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">结案后的影响</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">状态收口与联动</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>状态失效</strong> — 结案后对应合同与项目有效状态置为失效，不再参与后续业务流转。</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>下游联动</strong> — 结案结果回写项目档案、推送 CRM 系统，供项目透视与结案状态查询使用。</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 流程</span>
    <h2>结案如何流转</h2>
    <p>创建结案单 → 提交审批 → 审批通过后执行收尾逻辑</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13M8 3V13" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>创建结案单</h5>
      <small>选择结案类型(合同/项目)<br>填写说明并保存</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#f97316,#ea580c);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3V7H6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 13V9H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7C4 10 6 12 8 12C10 12 12 10 13 8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>提交审批</h5>
      <small>发起工作流审批<br>拒绝则修改后重提</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#16a34a,#15803d);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>执行收尾</h5>
      <small>置失效·回写结案信息<br>更新项目进度</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#0ea5e9,#0284c7);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>推送联动</h5>
      <small>同步 CRM 系统<br>供项目透视与结案查询</small>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">工程项目结案 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★创建结案单★ → ⚖结案类型？ → 提交工作流·⚖审批通过？ → 执行结案逻辑/更新进度/推送CRM → 结束（拒绝则修改重提）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 990" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="77" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="126" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">工程合同</text>
      <rect x="235" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="284" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">项目档案</text>
      <rect x="393" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="442" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">阶段定义</text>
      <rect x="551" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">工作流引擎</text>
      <rect x="709" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="758" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM系统</text>
      <rect x="867" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="916" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">出库单</text>
      <rect x="1025" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="1074" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">结案值集</text>
      <line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="540" y="150" width="120" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="194" x2="600" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="470" y="230" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★创建结案单★</text>
      <text x="600" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">选结案类型·填说明·保存</text>
      <line x1="600" y1="284" x2="600" y2="320" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="600,320 670,350 600,380 530,350" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="354" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 结案类型？</text>
      <line x1="530" y1="350" x2="450" y2="350" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="300" y="330" width="150" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="375" y="355" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">项目结案(1)</text>
      <line x1="375" y1="370" x2="375" y2="450" stroke="#16A34A" stroke-width="1.5"/>
      <line x1="375" y1="450" x2="600" y2="450" stroke="#16A34A" stroke-width="1.5" marker-end="url(#arr-green)"/>
      <line x1="670" y1="350" x2="750" y2="350" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="750" y="330" width="150" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="825" y="355" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">合同结案(2)</text>
      <line x1="825" y1="370" x2="825" y2="450" stroke="#16A34A" stroke-width="1.5"/>
      <line x1="825" y1="450" x2="600" y2="450" stroke="#16A34A" stroke-width="1.5" marker-end="url(#arr-green)"/>
      <rect x="505" y="410" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="435" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">提交工作流·CONTRACT_COMPLETED_MAIN</text>
      <line x1="600" y1="450" x2="600" y2="480" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="600,480 670,510 600,540 530,510" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="514" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 审批通过？</text>
      <line x1="670" y1="510" x2="700" y2="510" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
      <rect x="700" y="496" width="80" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
      <text x="740" y="515" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">拒绝 ✗</text>
      <line x1="700" y1="510" x2="460" y2="510" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="460" y1="510" x2="460" y2="450" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="460" y1="450" x2="600" y2="450" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
      <line x1="600" y1="540" x2="600" y2="580" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="505" y="580" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="605" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">执行结案逻辑</text>
      <line x1="600" y1="620" x2="600" y2="650" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="505" y="650" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="675" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">更新项目进度(项目结案)</text>
      <line x1="600" y1="690" x2="600" y2="720" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="505" y="720" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="745" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">推送CRM·validStatus=0</text>
      <line x1="600" y1="760" x2="600" y2="790" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="540" y="790" width="120" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="817" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="600" y1="834" x2="600" y2="860" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="860" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="882" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="85" y="898" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="160" y="921" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">工程合同</text>
      <rect x="305" y="898" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="380" y="921" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">项目档案</text>
      <rect x="525" y="898" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="600" y="921" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">CRM系统推送</text>
      <rect x="745" y="898" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="820" y="921" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">项目透视</text>
      <rect x="965" y="898" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="1040" y="921" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">结案状态查询</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝/驳回</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：操作类型区分">
<ul><li><strong>业务意义</strong>：区分对单个合同收尾还是对整个项目收尾，两种类型处理逻辑和影响范围不同</li><li><strong>具体逻辑描述</strong>：</li><li>actionType=1为项目结案：查询项目下所有审批通过的合同，批量失效，同时更新项目报备状态</li><li>actionType=2为合同结案：仅对目标合同及其增补合同收尾，不影响项目整体状态</li><li>前端选择操作类型后，低代码表单根据actionType显示不同的选择弹窗（项目选择或合同选择）</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：工作流审批回调">
<ul><li><strong>业务意义</strong>：结案单需走审批流程，审批通过后才执行实际的收尾逻辑</li><li><strong>具体逻辑描述</strong>：</li><li>工作流编码：CONTRACT_COMPLETED_MAIN（工程项目结案）</li><li>提交后触发工作流，审批通过回调wfComplete方法</li><li>wfComplete判断审批结果为APPROVED时调用doAudit执行收尾</li><li>wfProcSubmit、volidate、eventExecute均返回null，无特殊提交前校验</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：合同结案核心逻辑">
<ul><li><strong>业务意义</strong>：对单个工程合同进行收尾，标记结案日期与结案类型，同时联动增补合同</li><li><strong>具体逻辑描述</strong>：</li><li>将目标合同的结案日期设为当前时间，结案类型设为提交时选择的值，有效状态设为失效(3)</li><li>查询该合同下所有增补合同(MAIN_CONTRACT_ID=当前合同ID)，批量更新增补合同的结案日期和结案类型</li><li><strong>增补合同不会更新有效状态</strong>，仅更新结案日期和结案类型</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：项目结案核心逻辑">
<ul><li><strong>业务意义</strong>：对整个项目进行收尾，项目下所有已审批通过的合同一并失效</li><li><strong>具体逻辑描述</strong>：</li><li>查询项目下所有审批状态为"审批通过"(HZ_APPROVE_STATUS=APPROVED)的合同</li><li>批量更新合同有效状态为失效(3)、结案日期为当前时间、结案类型为提交时选择的值</li><li>将项目报备的有效状态设为失效(3)，项目进度状态设为2，记录结案时间(CLOSE_PROJECT_TIME)</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：项目进度自动更新">
<ul><li><strong>业务意义</strong>：结案审批通过后自动更新项目阶段为"项目结案"，记录项目进度历程</li><li><strong>具体逻辑描述</strong>：</li><li>查询阶段定义表(EPM_STAGE_DEF)中阶段名称为"项目结案"的记录，获取STAGE_ID</li><li>调用EpmProjectStageService.doMotionUpdate更新项目进度</li><li>进度内容格式为：<code>&#123;日期&#125;项目结案</code>（如"2026-08-30项目结案"）</li><li>doMotionUpdate先查询项目是否已存在该阶段，不存在时更新项目表的阶段信息并插入阶段历程记录</li></ul>
</KbCard>

<KbCard num="6" title="重点逻辑6：CRM推送">
<ul><li><strong>业务意义</strong>：将报备失效状态同步到CRM系统，供项目透视与结案状态查询使用</li><li><strong>具体逻辑描述</strong>：</li><li>查询项目关联的报备记录(EPM_REPORT)，获取客户信息</li><li>查询客户主文件(CUSTOMER)获取客户简称</li><li>推送数据包含：客户编码(acctCode)、客户名称(acctName)、客户简称(acctAbbr)、组织编码(orgCode)、报备编号(reportNo)、项目名称(projectName)、有效状态(validStatus=0)</li><li>调用ArrowEbsSdkService.indivireportAdd推送</li><li>推送失败仅记录日志(LOGGER.error)，不影响结案主流程</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<blockquote>本页面为hlod低代码页面，界面模块由低代码平台配置承载。以下基于后端DTO/VO/Entity字段和前端合同页面中结案相关字段梳理。</blockquote>
<h4>查询区</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>项目编码</td><td>EPM_PROJECT.PROJECT_CODE</td><td>文本输入</td><td>模糊查询项目编码</td><td>始终显示</td><td>手动输入，模糊匹配</td></tr>
<tr><td>项目名称</td><td>EPM_PROJECT.PROJECT_NAME</td><td>文本输入</td><td>模糊查询项目名称</td><td>始终显示</td><td>手动输入，模糊匹配</td></tr>
<tr><td>合同编码</td><td>EPM_PROJECT_CONTRACT.CONTRACT_CODE</td><td>文本输入</td><td>模糊查询合同编码</td><td>始终显示</td><td>手动输入，模糊匹配</td></tr>
<tr><td>操作类型</td><td>EPM_CONTRACT_COMPLETED.ACTION_TYPE</td><td>下拉框</td><td>选择结案操作类型</td><td>始终显示</td><td>1=项目结案, 2=合同结案</td></tr>
</tbody>
</table>
<h4>结案单头信息</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>结案单号</td><td>EPM_CONTRACT_COMPLETED.COMPLETED_CODE</td><td>文本</td><td>结案单编号</td><td>始终显示</td><td>系统自动生成</td></tr>
<tr><td>操作类型</td><td>EPM_CONTRACT_COMPLETED.ACTION_TYPE</td><td>下拉框</td><td>1=项目结案, 2=合同结案</td><td>始终显示</td><td>手动选择，决定结案范围</td></tr>
<tr><td>项目ID</td><td>EPM_CONTRACT_COMPLETED.PROJECT_ID</td><td>隐藏</td><td>关联项目</td><td>actionType=1时显示</td><td>选择项目弹窗回写</td></tr>
<tr><td>合同ID</td><td>EPM_CONTRACT_COMPLETED.CONTRACT_ID</td><td>隐藏</td><td>关联合同</td><td>actionType=2时显示</td><td>选择合同弹窗回写</td></tr>
<tr><td>结案类型</td><td>EPM_CONTRACT_COMPLETED.COMPLETED_TYPE</td><td>下拉框</td><td>结案类型分类</td><td>始终显示</td><td>LOV编码AE.EPM.CONTRACT_COMPLETED_TYPE，值：1=正常结案、2=提前结案、3=逾期结案</td></tr>
<tr><td>结案说明</td><td>EPM_CONTRACT_COMPLETED.COMPLETED_DESC</td><td>文本域</td><td>结案原因说明</td><td>始终显示</td><td>手动输入</td></tr>
<tr><td>备注</td><td>EPM_CONTRACT_COMPLETED.REMARK</td><td>文本域</td><td>备注信息</td><td>始终显示</td><td>手动输入</td></tr>
<tr><td>审批状态</td><td>EPM_CONTRACT_COMPLETED.HZ_APPROVE_STATUS</td><td>文本</td><td>工作流审批状态</td><td>始终显示</td><td>系统自动回写</td></tr>
<tr><td>销售区域</td><td>EPM_CONTRACT_COMPLETED.SALE_REGION</td><td>文本</td><td>经销商销售区域</td><td>始终显示</td><td>系统自动带出</td></tr>
</tbody>
</table>
<h4>结案关联合同列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>合同编码</td><td>EPM_PROJECT_CONTRACT.CONTRACT_CODE</td><td>文本</td><td>合同编码</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>合同名称</td><td>EPM_PROJECT_CONTRACT.CONTRACT_NAME</td><td>文本</td><td>合同名称</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>主合同编码</td><td>EPM_PROJECT_CONTRACT.MAIN_CONTRACT_CODE</td><td>文本</td><td>主合同编码(增补合同时显示)</td><td>mainContractId不为空时显示</td><td>项目结案查询时关联主合同信息</td></tr>
<tr><td>主合同名称</td><td>EPM_PROJECT_CONTRACT.MAIN_CONTRACT_NAME</td><td>文本</td><td>主合同名称(增补合同时显示)</td><td>mainContractId不为空时显示</td><td>项目结案查询时关联主合同信息</td></tr>
<tr><td>有效状态</td><td>EPM_PROJECT_CONTRACT.VALID</td><td>文本</td><td>合同有效状态</td><td>始终显示</td><td>1=未审核, 2=有效, 3=失效</td></tr>
<tr><td>结案日期</td><td>EPM_PROJECT_CONTRACT.COMPLETED_DATE</td><td>日期</td><td>合同结案日期</td><td>始终显示</td><td>审批通过后系统自动回写，disabled=true</td></tr>
<tr><td>结案类型</td><td>EPM_PROJECT_CONTRACT.COMPLETED_TYPE</td><td>文本</td><td>合同结案类型</td><td>始终显示</td><td>审批通过后系统自动回写，disabled=true，LOV: AE.EPM.CONTRACT_COMPLETED_TYPE</td></tr>
</tbody>
</table>
<h4>出库未发货明细列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>要货单号</td><td>SA_OUT_BILL_HEAD.SA_SALEBILLNO</td><td>文本</td><td>出库单要货单号</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>合同编码</td><td>SA_OUT_BILL_HEAD.CONTRACT_CODE</td><td>文本</td><td>出库单关联合同编码</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>合同名称</td><td>SA_OUT_BILL_HEAD.CONTRACT_NAME</td><td>文本</td><td>出库单关联合同名称</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>物料编码</td><td>ITEM.ITEM_CODE</td><td>文本</td><td>物料编码</td><td>始终显示</td><td>关联ITEM表查询</td></tr>
<tr><td>物料名称</td><td>ITEM.ITEM_NAME</td><td>文本</td><td>物料名称</td><td>始终显示</td><td>关联ITEM表查询</td></tr>
<tr><td>开单数量</td><td>SA_OUT_BILL_LINE.QTY_BILL</td><td>数值</td><td>出库单开单数量</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>出库确认数量</td><td>SA_OUT_BILL_LINE.CONFIRM_OUT_QTY</td><td>数值</td><td>已出库确认数量</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>取消数量</td><td>SA_OUT_BILL_LINE.CANCEL_QTY</td><td>数值</td><td>取消数量</td><td>始终显示</td><td>关联查询回写</td></tr>
<tr><td>未发数量</td><td>-</td><td>数值</td><td>未发货数量</td><td>始终显示</td><td>计算: QTY_BILL - CONFIRM_OUT_QTY - CANCEL_QTY</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>方法</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>`/v1/&#123;organizationId&#125;/epm-contract-completeds/detail`</td><td>查询结案详情(关联合同列表+出库明细)</td></tr>
</tbody>
</table>
<p><strong>Controller</strong>：<code>EpmContractCompletedController.detail</code> (EpmContractCompletedController.java:37)</p>
<p><strong>Service</strong>：<code>EpmContractCompletedServiceImpl.detail</code></p>
<p><strong>参数</strong>：EpmContractCompletedDTO（关键字段：flag、actionType、contractId、projectId）</p>
<p><strong>返回</strong>：EpmContractCompletedVO（含epmProjectContracts合同列表、epmProjectOuts出库明细列表）</p>
</KbCard>

<KbCard title="detail接口逻辑">
<p><strong>场景1: flag=9 且 actionType=2 (合同结案查询)</strong></p>
<p>1. 校验contractId非空，为空时返回空VO</p>
<p>2. 根据contractId查询主合同下所有增补合同列表(MAIN_CONTRACT_ID=contractId)</p>
<p>3. 查询合同关联的出库明细(selectEpmProjectOutByContractId，条件contractId)</p>
<p>4. 返回合同列表 + 出库明细</p>
<p><strong>场景2: flag=9 且 actionType=1 (项目结案查询)</strong></p>
<p>1. 校验projectId非空，为空时返回空VO</p>
<p>2. 查询项目下所有合同列表(PROJECT_ID=projectId)</p>
<p>3. 收集所有mainContractId，批量查询主合同信息，关联主合同编码和名称到VO</p>
<p>4. 获取项目下所有合同ID列表，查询合同关联的出库明细(selectEpmProjectOutByContractId，条件contractIds)</p>
<p>5. 返回合同列表 + 出库明细</p>
</KbCard>

<KbCard title="doAudit审核逻辑(工作流审批通过回调)">
<pre class="detail-sql" v-pre><code>wfComplete(dto) → 判断审批结果 == APPROVED → doAudit(epmContractCompleted)</code></pre>
<p><strong>合同结案(actionType=2):</strong></p>
<pre class="detail-sql" v-pre><code>1. 查询目标合同 → 设置 completedDate=now, completedType=提交值, valid=3
2. 更新合同(COMPLETED_DATE, COMPLETED_TYPE, VALID)
3. 查询增补合同(MAIN_CONTRACT_ID=当前合同ID)
4. 批量更新增补合同(COMPLETED_DATE=now, COMPLETED_TYPE=提交值) —— 不更新VALID</code></pre>
<p><strong>项目结案(actionType=1):</strong></p>
<pre class="detail-sql" v-pre><code>1. 查询项目下所有已审批通过的合同(HZ_APPROVE_STATUS=APPROVED)
2. 批量更新合同(VALID=3, COMPLETED_DATE=now, COMPLETED_TYPE=提交值)
3. 更新项目报备(PROJECT_VALID=3, PROJECT_STAGE_TYPE=2, CLOSE_PROJECT_TIME=now)</code></pre>
<p><strong>公共逻辑:</strong></p>
<pre class="detail-sql" v-pre><code>1. 查询阶段定义(STAGE_NAME='项目结案') → 获取STAGE_ID
2. 调用doMotionUpdate更新项目进度(内容: "{日期}项目结案")
3. 查询项目报备 → 获取客户信息
4. 查询客户主文件 → 获取客户简称
5. 推送CRM(indivireportAdd): validStatus=0</code></pre>
</KbCard>

<KbCard title="doMotionUpdate项目进度更新逻辑">
<ul><li>查询项目是否已存在当前阶段(EPM_PROJECT_STAGE中PROJECT_ID+STAGE_ID)</li><li>若不存在：</li></ul>
<p>1. 查询阶段定义获取阶段信息(STAGE_NAME、STAGE_NOTE)</p>
<p>2. 更新项目表(EPM_PROJECT)的STAGE_ID、STAGE_NAME、STAGE_NOTE、STAGE_DESC</p>
<p>3. 插入项目阶段历程记录(EPM_PROJECT_STAGE)</p>
<ul><li>若已存在：不重复更新</li></ul>
</KbCard>

<KbCard title="出库明细查询SQL逻辑">
<pre class="detail-sql" v-pre><code>SELECT l.*, i.ITEM_CODE, i.ITEM_NAME, h.SA_SALEBILLNO, h.CONTRACT_CODE, h.CONTRACT_NAME
FROM SA_OUT_BILL_LINE l
LEFT JOIN SA_OUT_BILL_HEAD h ON h.SA_OUT_BILL_HEAD_ID = l.SA_OUT_BILL_HEAD_ID
LEFT JOIN ITEM i ON i.ITEM_ID = l.ITEM_ID
WHERE h.ORDER_STAT = 3
  AND (l.QTY_BILL - l.CONFIRM_OUT_QTY - l.CANCEL_QTY) &gt; 0
  AND h.CONTRACT_ID = #{contractId}   -- 合同结案时
  -- 或 h.CONTRACT_ID IN (#{contractIds}) -- 项目结案时</code></pre>
</KbCard>

<KbCard title="选择弹窗">
<table class="kb-field-tbl">
<thead>
<tr><th>选择项</th><th>触发场景</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>项目选择弹窗</td><td>actionType=1(项目结案)时</td><td>选择项目，回写projectId、projectCode、projectName</td></tr>
<tr><td>合同选择弹窗</td><td>actionType=2(合同结案)时</td><td>选择合同，回写contractId、contractCode、contractName</td></tr>
<tr><td>结案类型选择</td><td>填写结案单时</td><td>LOV编码`AE.EPM.CONTRACT_COMPLETED_TYPE`，值：1=正常结案、2=提前结案、3=逾期结案</td></tr>
</tbody>
</table>
<p>本菜单为hlod低代码页面，选择行为通过低代码表单配置实现。</p>
</KbCard>

<KbCard title="导入">
<p>不支持导入功能。结案单是单条创建并走审批流程，不支持Excel批量导入。</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>序号</th><th>按钮名</th><th>显示条件</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>新建</td><td>始终显示</td><td>跳转低代码详情页创建结案单</td></tr>
<tr><td>2</td><td>查看</td><td>始终显示</td><td>跳转详情查看结案信息</td></tr>
<tr><td>3</td><td>编辑</td><td>新建/拒绝状态</td><td>修改结案单</td></tr>
<tr><td>4</td><td>提交</td><td>新建/拒绝状态</td><td>启动工作流审批（CONTRACT_COMPLETED_MAIN）</td></tr>
</tbody>
</table>
<h4>按钮1：新建（列表页）</h4>
<ul><li><strong>业务意义</strong>：创建新的结案单</li><li><strong>具体逻辑描述</strong>：跳转低代码详情页，填写结案信息后保存</li></ul>
<h4>按钮2：查看（列表页）</h4>
<ul><li><strong>业务意义</strong>：查看结案单详情</li><li><strong>具体逻辑描述</strong>：跳转详情页，展示结案单信息、关联合同列表和出库明细</li></ul>
<h4>按钮3：编辑（详情页）</h4>
<ul><li><strong>业务意义</strong>：修改未提交或被拒绝的结案单</li><li><strong>具体逻辑描述</strong>：仅在新建/拒绝状态下可编辑</li></ul>
<h4>按钮4：提交（详情页）</h4>
<ul><li><strong>业务意义</strong>：提交结案单走审批流程</li><li><strong>具体逻辑描述</strong>：仅在新建/拒绝状态下可提交，提交后触发工作流CONTRACT_COMPLETED_MAIN</li></ul>
</KbCard>

<KbCard title="保存校验">
<ul><li>校验1：actionType=2时contractId必填 —— 合同结案必须选择目标合同</li><li><strong>详细逻辑</strong>：后端detail接口中，actionType=2且contractId为空时返回空VO，阻断查询</li><li><strong>系统体现</strong>：低代码表单必填校验</li><li><strong>排查SQL</strong>：<code>SELECT * FROM EPM_CONTRACT_COMPLETED WHERE CONTRACT_ID IS NULL AND ACTION_TYPE = 2;</code></li></ul>
<ul><li>校验2：actionType=1时projectId必填 —— 项目结案必须选择目标项目</li><li><strong>详细逻辑</strong>：后端detail接口中，actionType=1且projectId为空时返回空VO，阻断查询</li><li><strong>系统体现</strong>：低代码表单必填校验</li><li><strong>排查SQL</strong>：<code>SELECT * FROM EPM_CONTRACT_COMPLETED WHERE PROJECT_ID IS NULL AND ACTION_TYPE = 1;</code></li></ul>
<ul><li>校验3：结案类型completedType必填 —— 结案必须选择结案类型</li><li><strong>详细逻辑</strong>：前端低代码表单LOV选择必填</li><li><strong>系统体现</strong>：低代码表单必填校验</li><li><strong>排查SQL</strong>：<code>SELECT * FROM EPM_CONTRACT_COMPLETED WHERE COMPLETED_TYPE IS NULL;</code></li></ul>
</KbCard>

<KbCard title="提交校验">
<ul><li>校验1：工作流提交校验 —— 结案单提交走工作流审批</li><li><strong>详细逻辑</strong>：EpmContractCompletedServiceImpl的wfProcSubmit、volidate、eventExecute方法均返回null，无特殊提交前校验，校验由低代码平台和工作流引擎承载</li><li><strong>系统体现</strong>：工作流编码CONTRACT_COMPLETED_MAIN</li><li><strong>排查SQL</strong>：<code>SELECT ECC.CONTRACT_COMPLETED_ID, ECC.COMPLETED_CODE, ECC.HZ_APPROVE_STATUS, ECC.HZ_INSTANCE_ID FROM EPM_CONTRACT_COMPLETED ECC WHERE ECC.COMPLETED_CODE = '结案单号';</code></li></ul>
</KbCard>

<KbCard title="状态机">
<pre class="lang-text" v-pre><code>┌──────────┐  提交结案  ┌──────────┐  审批通过  ┌──────────┐
│  新建    │ ────────→ │ 审批中    │ ────────→ │ 已结案   │
│ (DRAFT)  │           │ (APPROVING)│          │ (DONE)   │
└──────────┘           └────┬─────┘           └──────────┘
      ↑                      │
      │                审批拒绝/驳回
      │                      │
      └──────────────────────┘</code></pre>
</KbCard>

<KbCard title="上游依赖">
<table class="kb-field-tbl">
<thead>
<tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
</thead>
<tbody>
<tr><td>工程合同(EPM_PROJECT_CONTRACT)</td><td>数据依赖</td><td>合同结案时查询和更新合同状态</td><td>合同存在且已审批通过</td></tr>
<tr><td>项目档案(EPM_PROJECT)</td><td>数据依赖</td><td>项目结案时更新项目状态和进度</td><td>项目存在且已生效</td></tr>
<tr><td>阶段定义(EPM_STAGE_DEF)</td><td>数据依赖</td><td>查询"项目结案"阶段定义更新项目进度</td><td>阶段定义表中存在STAGE_NAME='项目结案'的记录</td></tr>
<tr><td>工作流引擎</td><td>流程依赖</td><td>结案单提交走工作流审批</td><td>工作流编码CONTRACT_COMPLETED_MAIN已配置</td></tr>
<tr><td>CRM系统</td><td>接口依赖</td><td>推送报备失效状态到CRM</td><td>ArrowEbsSdkService.indivireportAdd接口可用</td></tr>
<tr><td>出库单(SA_OUT_BILL_HEAD/LINE)</td><td>数据依赖</td><td>查询合同关联的出库未发货明细</td><td>出库单ORDER_STAT=3且未发货数量&gt;0</td></tr>
<tr><td>报备(EPM_REPORT)</td><td>数据依赖</td><td>查询项目关联报备获取客户信息用于CRM推送</td><td>项目存在关联报备记录</td></tr>
<tr><td>客户主文件(CUSTOMER)</td><td>数据依赖</td><td>查询客户简称用于CRM推送</td><td>报备关联客户存在</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="下游影响">
<ul><li><strong>工程合同(EPM_PROJECT_CONTRACT)</strong>：结案后合同VALID置为3(失效)，COMPLETED_DATE和COMPLETED_TYPE回写，不再参与后续业务流转</li><li><strong>项目档案(EPM_PROJECT)</strong>：项目结案后PROJECT_VALID置为3(失效)，PROJECT_STAGE_TYPE置为2，CLOSE_PROJECT_TIME记录结案时间</li><li><strong>项目阶段历程(EPM_PROJECT_STAGE)</strong>：自动插入"项目结案"阶段记录</li><li><strong>CRM系统</strong>：推送报备失效状态(validStatus=0)，供项目透视与结案状态查询使用</li><li><strong>增补合同</strong>：合同结案时增补合同COMPLETED_DATE和COMPLETED_TYPE被回写(但不更新VALID)</li><li><strong>项目透视</strong>：结案状态可供项目透视查询使用</li></ul>
</KbCard>

<KbCard title="EPM_CONTRACT_COMPLETED（工程项目合同结案主表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>CONTRACT_COMPLETED_ID</td><td>BIGINT</td><td>主键，工程项目合同结案ID</td><td>-</td><td>系统自动生成</td></tr>
<tr><td>ORGANIZATION_ID</td><td>BIGINT</td><td>组织ID</td><td>-</td><td>系统自动填充</td></tr>
<tr><td>COMPLETED_CODE</td><td>VARCHAR</td><td>合同结案单号</td><td>结案单号</td><td>系统自动生成</td></tr>
<tr><td>CONTRACT_ID</td><td>BIGINT</td><td>工程项目合同ID</td><td>合同ID</td><td>actionType=2时使用，选择合同弹窗回写</td></tr>
<tr><td>PROJECT_ID</td><td>BIGINT</td><td>工程项目ID</td><td>项目ID</td><td>actionType=1时使用，选择项目弹窗回写</td></tr>
<tr><td>COMPLETED_TYPE</td><td>VARCHAR</td><td>结案类型</td><td>结案类型</td><td>1=正常结案, 2=提前结案, 3=逾期结案</td></tr>
<tr><td>COMPLETED_DESC</td><td>VARCHAR</td><td>结案说明</td><td>结案说明</td><td>手动输入</td></tr>
<tr><td>REMARK</td><td>VARCHAR</td><td>备注</td><td>备注</td><td>手动输入</td></tr>
<tr><td>STAT</td><td>BIGINT</td><td>单据状态(已弃用)</td><td>-</td><td>使用HZ_APPROVE_STATUS字段</td></tr>
<tr><td>WFID</td><td>BIGINT</td><td>流程ID</td><td>-</td><td>工作流引擎回写</td></tr>
<tr><td>WFFLAG</td><td>BIGINT</td><td>流程状态</td><td>-</td><td>工作流引擎回写</td></tr>
<tr><td>ACTION_TYPE</td><td>BIGINT</td><td>操作类型</td><td>操作类型</td><td>1=项目结案, 2=合同结案</td></tr>
<tr><td>SALE_REGION</td><td>VARCHAR</td><td>经销商销售区域</td><td>销售区域</td><td>系统自动带出</td></tr>
<tr><td>HZ_INSTANCE_ID</td><td>BIGINT</td><td>H0流程实例ID</td><td>-</td><td>工作流引擎回写</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>VARCHAR</td><td>H0流程审批状态</td><td>审批状态</td><td>工作流引擎回写</td></tr>
<tr><td>CALLBACK_SOURCE</td><td>VARCHAR</td><td>外部审批回调来源</td><td>-</td><td>枚举CallbackSourceEnum</td></tr>
<tr><td>CREATION_DATE</td><td>DATETIME</td><td>创建时间</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>CREATED_BY</td><td>BIGINT</td><td>创建人</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATETIME</td><td>最后更新时间</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>BIGINT</td><td>最后更新人</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>BIGINT</td><td>乐观锁版本号</td><td>-</td><td>系统自动维护</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="EPM_PROJECT_CONTRACT（工程项目合同表 - 结案相关字段）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>CONTRACT_ID</td><td>BIGINT</td><td>主键，工程项目合同ID</td><td>-</td><td>关联结案单CONTRACT_ID</td></tr>
<tr><td>PROJECT_ID</td><td>BIGINT</td><td>工程项目ID</td><td>-</td><td>项目结案时查询条件</td></tr>
<tr><td>MAIN_CONTRACT_ID</td><td>BIGINT</td><td>主合同ID</td><td>-</td><td>&gt;0时为增补合同，合同结案时批量查询</td></tr>
<tr><td>COMPLETED_DATE</td><td>DATETIME</td><td>结案日期</td><td>结案日期</td><td>审批通过后系统自动回写为当前时间</td></tr>
<tr><td>COMPLETED_TYPE</td><td>BIGINT</td><td>结案类型</td><td>结案类型</td><td>审批通过后系统自动回写，1=正常, 2=提前, 3=逾期</td></tr>
<tr><td>VALID</td><td>BIGINT</td><td>有效状态</td><td>有效状态</td><td>结案后置为3(失效)，1=未审核, 2=有效, 3=失效</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>VARCHAR</td><td>H0流程审批状态</td><td>-</td><td>项目结案时筛选APPROVED的合同</td></tr>
<tr><td>CONTRACT_CODE</td><td>VARCHAR</td><td>合同编码</td><td>合同编码</td><td>关联查询回写</td></tr>
<tr><td>CONTRACT_NAME</td><td>VARCHAR</td><td>合同名称</td><td>合同名称</td><td>关联查询回写</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="EPM_PROJECT（项目信息表 - 结案相关字段）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>PROJECT_ID</td><td>BIGINT</td><td>主键，项目ID</td><td>-</td><td>关联结案单PROJECT_ID</td></tr>
<tr><td>PROJECT_VALID</td><td>BIGINT</td><td>项目有效状态</td><td>-</td><td>项目结案后置为3(失效)，1=未生效, 2=已生效, 3=已失效, 4=已冻结</td></tr>
<tr><td>PROJECT_STAGE_TYPE</td><td>BIGINT</td><td>项目进度状态</td><td>-</td><td>项目结案后置为2</td></tr>
<tr><td>CLOSE_PROJECT_TIME</td><td>DATETIME</td><td>结案时间</td><td>-</td><td>项目结案后系统自动回写为当前时间</td></tr>
<tr><td>STAGE_ID</td><td>BIGINT</td><td>当前阶段ID</td><td>-</td><td>doMotionUpdate更新为"项目结案"阶段ID</td></tr>
<tr><td>STAGE_NAME</td><td>VARCHAR</td><td>当前阶段名称</td><td>-</td><td>doMotionUpdate更新为"项目结案"</td></tr>
<tr><td>STAGE_NOTE</td><td>VARCHAR</td><td>当前阶段备注</td><td>-</td><td>doMotionUpdate更新</td></tr>
<tr><td>STAGE_DESC</td><td>VARCHAR</td><td>当前阶段描述</td><td>-</td><td>doMotionUpdate更新为"&#123;日期&#125;项目结案"</td></tr>
<tr><td>PROJECT_CODE</td><td>VARCHAR</td><td>项目编码</td><td>项目编码</td><td>查询条件</td></tr>
<tr><td>PROJECT_NAME</td><td>VARCHAR</td><td>项目名称</td><td>项目名称</td><td>查询条件</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="EPM_STAGE_DEF（项目阶段定义表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>STAGE_ID</td><td>BIGINT</td><td>主键，阶段ID</td><td>-</td><td>结案时查询STAGE_NAME='项目结案'获取</td></tr>
<tr><td>ORGANIZATION_ID</td><td>BIGINT</td><td>组织ID</td><td>-</td><td>查询条件</td></tr>
<tr><td>STAGE_NAME</td><td>VARCHAR</td><td>阶段名称</td><td>-</td><td>结案时查询值为"项目结案"</td></tr>
<tr><td>STAGE_NOTE</td><td>VARCHAR</td><td>阶段备注</td><td>-</td><td>更新项目时回写</td></tr>
<tr><td>SEQ</td><td>BIGINT</td><td>序号</td><td>-</td><td>阶段排序</td></tr>
<tr><td>UPDATE_MODE</td><td>BIGINT</td><td>更新方式</td><td>-</td><td>1=手动, 2=自动</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="EPM_REPORT（项目报备表 - CRM推送相关字段）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>REPORT_ID</td><td>BIGINT</td><td>主键，报备ID</td><td>-</td><td>系统自动生成</td></tr>
<tr><td>PROJECT_ID</td><td>BIGINT</td><td>项目ID</td><td>-</td><td>关联查询条件</td></tr>
<tr><td>CUSTOMER_ID</td><td>BIGINT</td><td>客户ID</td><td>-</td><td>用于查询客户简称</td></tr>
<tr><td>CUSTOMER_CODE</td><td>VARCHAR</td><td>客户编码</td><td>-</td><td>CRM推送字段acctCode</td></tr>
<tr><td>CUSTOMER_NAME</td><td>VARCHAR</td><td>客户名称</td><td>-</td><td>CRM推送字段acctName</td></tr>
<tr><td>PROJECT_CODE</td><td>VARCHAR</td><td>项目编码</td><td>-</td><td>CRM推送字段reportNo</td></tr>
<tr><td>PROJECT_NAME</td><td>VARCHAR</td><td>项目名称</td><td>-</td><td>CRM推送字段projectName</td></tr>
<tr><td>DIVISION_NAME</td><td>VARCHAR</td><td>组织名称</td><td>-</td><td>CRM推送字段orgCode</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="SA_OUT_BILL_HEAD（出库单头表 - 结案查询关联）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>SA_OUT_BILL_HEAD_ID</td><td>BIGINT</td><td>主键，出库单头ID</td><td>-</td><td>关联出库单行</td></tr>
<tr><td>CONTRACT_ID</td><td>BIGINT</td><td>合同ID</td><td>-</td><td>结案时查询关联合同的出库明细</td></tr>
<tr><td>ORDER_STAT</td><td>BIGINT</td><td>单据状态</td><td>-</td><td>查询条件：3=已审核</td></tr>
<tr><td>SA_SALEBILLNO</td><td>VARCHAR</td><td>要货单号</td><td>要货单号</td><td>查询回写</td></tr>
<tr><td>CONTRACT_CODE</td><td>VARCHAR</td><td>合同编码</td><td>合同编码</td><td>查询回写</td></tr>
<tr><td>CONTRACT_NAME</td><td>VARCHAR</td><td>合同名称</td><td>合同名称</td><td>查询回写</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="SA_OUT_BILL_LINE（出库单行表 - 结案查询关联）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>SA_OUT_BILL_LINE_ID</td><td>BIGINT</td><td>主键，出库单行ID</td><td>-</td><td>系统自动生成</td></tr>
<tr><td>SA_OUT_BILL_HEAD_ID</td><td>BIGINT</td><td>出库单头ID</td><td>-</td><td>关联出库单头</td></tr>
<tr><td>ITEM_ID</td><td>BIGINT</td><td>物料ID</td><td>-</td><td>关联ITEM表</td></tr>
<tr><td>QTY_BILL</td><td>BIGINT</td><td>开单数量</td><td>开单数量</td><td>用于计算未发数量</td></tr>
<tr><td>CONFIRM_OUT_QTY</td><td>BIGINT</td><td>出库确认数量</td><td>出库确认数量</td><td>用于计算未发数量</td></tr>
<tr><td>CANCEL_QTY</td><td>BIGINT</td><td>取消数量</td><td>取消数量</td><td>用于计算未发数量</td></tr>
<tr><td>ITEM_CODE</td><td>VARCHAR</td><td>物料编码</td><td>物料编码</td><td>关联ITEM表查询</td></tr>
<tr><td>ITEM_NAME</td><td>VARCHAR</td><td>物料名称</td><td>物料名称</td><td>关联ITEM表查询</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="查询SQL">
<pre class="detail-sql" v-pre><code>-- 查询结案单列表
SELECT * FROM EPM_CONTRACT_COMPLETED
WHERE ORGANIZATION_ID = #{organizationId}
ORDER BY CONTRACT_COMPLETED_ID DESC;

-- 合同结案查询增补合同
SELECT * FROM EPM_PROJECT_CONTRACT
WHERE MAIN_CONTRACT_ID = #{contractId};

-- 项目结案查询项目下合同
SELECT * FROM EPM_PROJECT_CONTRACT
WHERE PROJECT_ID = #{projectId};

-- 项目结案查询审批通过的合同
SELECT * FROM EPM_PROJECT_CONTRACT
WHERE PROJECT_ID = #{projectId}
  AND HZ_APPROVE_STATUS = 'APPROVED';

-- 查询"项目结案"阶段定义
SELECT * FROM EPM_STAGE_DEF
WHERE ORGANIZATION_ID = #{organizationId}
  AND STAGE_NAME = '项目结案';</code></pre>
</KbCard>

<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>参数不能为空</td><td>提交结案时</td><td>必填参数缺失，补全必填参数后重新提交</td><td>高</td><td>低代码表单必填校验</td></tr>
<tr><td>项目状态不允许结案</td><td>提交结案时</td><td>项目未生效或已结案，确认项目状态为可结案状态</td><td>高</td><td>项目结案时项目状态需为已生效(2)</td></tr>
<tr><td>结案原因必填</td><td>提交结案时</td><td>结案原因为空，补填结案原因后重新提交</td><td>中</td><td>COMPLETED_DESC字段必填</td></tr>
<tr><td>将报备状态推送到CRM推送失败</td><td>后端日志</td><td>CRM接口调用异常，检查CRM服务可用性，不影响结案主流程</td><td>低</td><td>doAudit中try-catch捕获异常仅记录日志</td></tr>
<tr><td>NullPointerException: stageDefs.get(0)</td><td>后端日志</td><td>阶段定义表中缺少STAGE_NAME='项目结案'的记录，补充阶段定义数据</td><td>高</td><td>doAudit中查询阶段定义为空时数组越界</td></tr>
<tr><td>NullPointerException: epmReports.get(0)</td><td>审批通过回调</td><td>项目无关联报备记录(EPM_REPORT)，检查项目报备数据</td><td>高</td><td>doAudit中epmReports.get(0)数组越界</td></tr>
<tr><td>NullPointerException: customer.getShortName()</td><td>审批通过回调</td><td>报备关联客户在CUSTOMER表中不存在，检查客户主数据</td><td>高</td><td>doAudit中customerRepository.selectByPrimaryKey返回null</td></tr>
<tr><td>NullPointerException: epmProjectContract</td><td>审批通过回调(合同结案)</td><td>合同ID在EPM_PROJECT_CONTRACT中不存在，检查合同档案</td><td>高</td><td>doAudit中selectByPrimaryKey返回null</td></tr>
<tr><td>NullPointerException: epmProject</td><td>审批通过回调(项目结案)</td><td>项目ID在EPM_PROJECT中不存在，检查项目档案</td><td>高</td><td>doAudit中selectByPrimaryKey返回null</td></tr>
</tbody>
</table>
<h4>报错1：参数不能为空</h4>
<ul><li><strong>触发条件</strong>：提交项目结案时，低代码表单必填参数(如项目ID、结案类型等)缺失</li><li><strong>逻辑分析</strong>：低代码表单提交前执行必填校验，关键字段为空时阻断提交。需补全必填参数后重新提交</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ecc.CONTRACT_COMPLETED_ID, ecc.COMPLETED_CODE, ecc.PROJECT_ID, ecc.ACTION_TYPE,
         ecc.COMPLETED_TYPE, ecc.COMPLETED_DESC, ecc.HZ_APPROVE_STATUS
  FROM EPM_CONTRACT_COMPLETED ecc
  WHERE ecc.PROJECT_ID IS NULL
     OR ecc.ACTION_TYPE IS NULL
     OR ecc.COMPLETED_TYPE IS NULL
  -- 查出关键字段为空的异常结案单</code></pre>
<h4>报错2：项目状态不允许结案</h4>
<ul><li><strong>触发条件</strong>：提交项目结案时，项目状态(PROJECT_VALID)非已生效(2)或已结案</li><li><strong>逻辑分析</strong>：项目结案时校验EPM_PROJECT.PROJECT_VALID必须为2(已生效)，且未结案(CLOSE_PROJECT_TIME为空)。若项目未生效或已结案则阻断结案操作</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ep.PROJECT_ID, ep.PROJECT_CODE, ep.PROJECT_VALID, ep.PROJECT_STAGE_TYPE,
         ep.CLOSE_PROJECT_TIME, ep.VALID
  FROM EPM_PROJECT ep
  WHERE ep.PROJECT_ID = :projectId
  -- 期望 PROJECT_VALID = 2 且 CLOSE_PROJECT_TIME IS NULL</code></pre>
<h4>报错3：结案原因必填</h4>
<ul><li><strong>触发条件</strong>：提交项目结案时，结案原因(COMPLETED_DESC)为空</li><li><strong>逻辑分析</strong>：COMPLETED_DESC字段为结案必填项，用于记录结案原因说明。提交校验该字段非空，为空时阻断提交</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ecc.CONTRACT_COMPLETED_ID, ecc.COMPLETED_CODE, ecc.COMPLETED_DESC, ecc.HZ_APPROVE_STATUS
  FROM EPM_CONTRACT_COMPLETED ecc
  WHERE ecc.COMPLETED_DESC IS NULL OR TRIM(ecc.COMPLETED_DESC) = ''
  -- 查出结案原因为空的异常数据</code></pre>
<h4>报错4：将报备状态推送到CRM推送失败</h4>
<ul><li><strong>触发条件</strong>：结案审批通过后doAudit方法中调用CRM接口推送报备状态失败</li><li><strong>逻辑分析</strong>：doAudit中通过try-catch捕获CRM推送异常，仅记录错误日志不阻断主流程。可能原因：CRM服务不可用、网络异常、客户信息缺失。检查后端日志关键字"将报备状态推送到CRM推送失败"</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT er.REPORT_ID, er.PROJECT_ID, er.CUSTOMER_ID, er.CUSTOMER_CODE, er.CUSTOMER_NAME,
         er.DIVISION_NAME, er.HZ_APPROVE_STATUS
  FROM EPM_REPORT er
  WHERE er.PROJECT_ID = :projectId
  -- 检查报备关联客户信息是否完整，作为CRM推送参数</code></pre>
<h4>报错5：NullPointerException: stageDefs.get(0)</h4>
<ul><li><strong>触发条件</strong>：结案审批通过后doAudit方法中查询EPM_STAGE_DEF表STAGE_NAME='项目结案'的记录为空，stageDefs.get(0)数组越界</li><li><strong>逻辑分析</strong>：doAudit中按ORGANIZATION_ID和STAGE_NAME='项目结案'查询阶段定义，若未配置该阶段则返回空列表，调用get(0)时抛出NullPointerException。需在EPM_STAGE_DEF表中补充对应组织的'项目结案'阶段定义</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT esd.STAGE_ID, esd.STAGE_NAME, esd.ORGANIZATION_ID, esd.STAGE_DESC
  FROM EPM_STAGE_DEF esd
  WHERE esd.STAGE_NAME = '项目结案'
    AND esd.ORGANIZATION_ID = :organizationId
  -- 若返回空，则需补充阶段定义数据</code></pre>
<h4>报错6：NullPointerException: epmReports.get(0)</h4>
<ul><li><strong>触发条件</strong>：结案审批通过后doAudit方法中查询项目关联报备(EPM_REPORT)为空，epmReports.get(0)数组越界</li><li><strong>逻辑分析</strong>：doAudit中按PROJECT_ID查询EPM_REPORT获取报备数据用于CRM推送，若项目无关联报备记录则返回空列表，调用get(0)时抛出IndexOutOfBoundsException。可能原因：项目报备被删除、PROJECT_ID未关联报备。需检查项目报备数据完整性</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ep.PROJECT_ID, ep.PROJECT_CODE, ep.PROJECT_NAME, ep.PROJECT_VALID,
         er.REPORT_ID, er.REPORT_CODE, er.CUSTOMER_ID
  FROM EPM_PROJECT ep
  LEFT JOIN EPM_REPORT er ON ep.PROJECT_ID = er.PROJECT_ID
  WHERE ep.PROJECT_ID = :projectId
  -- 若REPORT_ID为空，说明项目无关联报备记录</code></pre>
<h4>报错7：NullPointerException: customer.getShortName()</h4>
<ul><li><strong>触发条件</strong>：结案审批通过后doAudit方法中查询报备关联客户(CUSTOMER)返回null，后续调用customer.getShortName()抛出NullPointerException</li><li><strong>逻辑分析</strong>：doAudit中customerRepository.selectByPrimaryKey(epmReport.getCustomerId())按CUSTOMER_ID查询客户主文件，若客户被删除或报备CUSTOMER_ID指向不存在的客户，则返回null。需检查客户主数据是否完整</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT er.REPORT_ID, er.PROJECT_ID, er.CUSTOMER_ID, er.CUSTOMER_CODE,
         c.CUSTOMER_ID AS 客户档案ID, c.SHORT_NAME AS 客户简称
  FROM EPM_REPORT er
  LEFT JOIN CUSTOMER c ON er.CUSTOMER_ID = c.CUSTOMER_ID
  WHERE er.PROJECT_ID = :projectId
    AND c.CUSTOMER_ID IS NULL
  -- 查出客户档案不存在的报备记录</code></pre>
<h4>报错8：NullPointerException: epmProjectContract</h4>
<ul><li><strong>触发条件</strong>：合同结案(actionType=2)审批通过后doAudit方法中查询合同(EPM_PROJECT_CONTRACT)返回null，后续调用epmProjectContract.setCompletedDate()抛出NullPointerException</li><li><strong>逻辑分析</strong>：doAudit中epmProjectContractRepository.selectByPrimaryKey(epmContractCompleted.getContractId())按CONTRACT_ID查询合同，若合同被删除或CONTRACT_ID错误，则返回null。需检查合同档案是否存在</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ecc.CONTRACT_COMPLETED_ID, ecc.COMPLETED_CODE, ecc.CONTRACT_ID, ecc.ACTION_TYPE,
         epc.CONTRACT_ID AS 合同档案ID, epc.CONTRACT_CODE, epc.VALID
  FROM EPM_CONTRACT_COMPLETED ecc
  LEFT JOIN EPM_PROJECT_CONTRACT epc ON ecc.CONTRACT_ID = epc.CONTRACT_ID
  WHERE ecc.CONTRACT_COMPLETED_ID = :contractCompletedId
    AND ecc.ACTION_TYPE = 2
    AND epc.CONTRACT_ID IS NULL
  -- 查出合同档案不存在的结案单</code></pre>
<h4>报错9：NullPointerException: epmProject</h4>
<ul><li><strong>触发条件</strong>：项目结案(actionType=1)审批通过后doAudit方法中查询项目(EPM_PROJECT)返回null，后续调用epmProject.setProjectValid()抛出NullPointerException</li><li><strong>逻辑分析</strong>：doAudit中epmProjectRepository.selectByPrimaryKey(epmContractCompleted.getProjectId())按PROJECT_ID查询项目档案，若项目被删除或PROJECT_ID错误，则返回null。需检查项目档案是否存在</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT ecc.CONTRACT_COMPLETED_ID, ecc.COMPLETED_CODE, ecc.PROJECT_ID, ecc.ACTION_TYPE,
         ep.PROJECT_ID AS 项目档案ID, ep.PROJECT_CODE, ep.PROJECT_VALID
  FROM EPM_CONTRACT_COMPLETED ecc
  LEFT JOIN EPM_PROJECT ep ON ecc.PROJECT_ID = ep.PROJECT_ID
  WHERE ecc.CONTRACT_COMPLETED_ID = :contractCompletedId
    AND ecc.ACTION_TYPE = 1
    AND ep.PROJECT_ID IS NULL
  -- 查出项目档案不存在的结案单</code></pre>
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="Q1: 结案审批通过后合同状态没有更新为失效？">
<p><strong>可能原因:</strong> 工作流审批状态未更新为APPROVED(5)，或回调接口未正确触发。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>-- 1. 查询结案单审批状态
SELECT ECC.CONTRACT_COMPLETED_ID, ECC.COMPLETED_CODE, ECC.ACTION_TYPE, ECC.HZ_APPROVE_STATUS, ECC.COMPLETED_TYPE
FROM EPM_CONTRACT_COMPLETED ECC
WHERE ECC.COMPLETED_CODE = '结案单号';

-- 2. 查询合同当前有效状态和结案信息
SELECT EPC.CONTRACT_ID, EPC.CONTRACT_CODE, EPC.VALID, EPC.COMPLETED_DATE, EPC.COMPLETED_TYPE, EPC.HZ_APPROVE_STATUS
FROM EPM_PROJECT_CONTRACT EPC
WHERE EPC.CONTRACT_ID = 合同ID;

-- 3. 检查工作流实例状态
SELECT ECC.HZ_INSTANCE_ID, ECC.HZ_APPROVE_STATUS
FROM EPM_CONTRACT_COMPLETED ECC
WHERE ECC.CONTRACT_COMPLETED_ID = 结案ID;</code></pre>
</KbCard>

<KbCard title="Q2: 项目结案后报备状态未失效？">
<p><strong>可能原因:</strong> 项目结案(actionType=1)审批未通过，或doAudit执行异常。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>-- 1. 查询项目当前状态
SELECT EP.PROJECT_ID, EP.PROJECT_CODE, EP.PROJECT_VALID, EP.PROJECT_STAGE_TYPE, EP.CLOSE_PROJECT_TIME
FROM EPM_PROJECT EP
WHERE EP.PROJECT_ID = 项目ID;

-- 2. 查询报备状态
SELECT ER.REPORT_ID, ER.PROJECT_ID, ER.HZ_APPROVE_STATUS, ER.CUSTOMER_CODE, ER.CUSTOMER_NAME
FROM EPM_REPORT ER
WHERE ER.PROJECT_ID = 项目ID;</code></pre>
</KbCard>

<KbCard title="Q3: 合同结案后增补合同未结案？">
<p><strong>说明:</strong> 合同结案时增补合同仅更新结案日期和结案类型，不更新有效状态(VALID)，这是设计行为。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>-- 1. 查询主合同下的增补合同
SELECT EPC.CONTRACT_ID, EPC.CONTRACT_CODE, EPC.MAIN_CONTRACT_ID, EPC.COMPLETED_DATE, EPC.COMPLETED_TYPE, EPC.VALID
FROM EPM_PROJECT_CONTRACT EPC
WHERE EPC.MAIN_CONTRACT_ID = 主合同ID;

-- 2. 对比主合同结案信息
SELECT EPC.CONTRACT_ID, EPC.CONTRACT_CODE, EPC.COMPLETED_DATE, EPC.COMPLETED_TYPE
FROM EPM_PROJECT_CONTRACT EPC
WHERE EPC.CONTRACT_ID = 主合同ID;</code></pre>
</KbCard>

<KbCard title="Q4: 结案后CRM推送失败？">
<p><strong>说明:</strong> CRM推送失败不影响结案主流程，系统仅记录错误日志。检查日志搜索关键字: <code>将报备状态推送到CRM推送失败</code>。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>-- 1. 查询报备关联客户信息
SELECT ER.REPORT_ID, ER.PROJECT_ID, ER.CUSTOMER_ID, ER.CUSTOMER_CODE, ER.CUSTOMER_NAME, ER.DIVISION_NAME
FROM EPM_REPORT ER
WHERE ER.PROJECT_ID = 项目ID;

-- 2. 查询客户详细信息
SELECT C.CUSTOMER_ID, C.CUSTOMER_CODE, C.CUSTOMER_NAME, C.SHORT_NAME
FROM CUSTOMER C
WHERE C.CUSTOMER_ID = 客户ID;</code></pre>
</KbCard>

<KbCard title="Q5: 结案后项目进度未更新？">
<p><strong>可能原因:</strong> 阶段定义表中缺少STAGE_NAME='项目结案'的记录，导致查询报空指针。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>-- 1. 查询"项目结案"阶段定义
SELECT ESD.STAGE_ID, ESD.STAGE_NAME, ESD.ORGANIZATION_ID
FROM EPM_STAGE_DEF ESD
WHERE ESD.STAGE_NAME = '项目结案'
  AND ESD.ORGANIZATION_ID = 组织ID;

-- 2. 查询项目当前阶段
SELECT EP.PROJECT_ID, EP.STAGE_ID, EP.STAGE_NAME, EP.STAGE_DESC
FROM EPM_PROJECT EP
WHERE EP.PROJECT_ID = 项目ID;</code></pre>
</KbCard>

<KbCard title="Q6: 如何查询结案单关联的出库未发货明细？">
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>SELECT l.SA_OUT_BILL_LINE_ID, l.ITEM_ID, i.ITEM_CODE, i.ITEM_NAME,
       l.QTY_BILL, l.CONFIRM_OUT_QTY, l.CANCEL_QTY,
       (l.QTY_BILL - l.CONFIRM_OUT_QTY - l.CANCEL_QTY) AS UNDELIVERED_QTY,
       h.SA_SALEBILLNO, h.CONTRACT_CODE, h.CONTRACT_NAME
FROM SA_OUT_BILL_LINE l
LEFT JOIN SA_OUT_BILL_HEAD h ON h.SA_OUT_BILL_HEAD_ID = l.SA_OUT_BILL_HEAD_ID
LEFT JOIN ITEM i ON i.ITEM_ID = l.ITEM_ID
WHERE h.ORDER_STAT = 3
  AND (l.QTY_BILL - l.CONFIRM_OUT_QTY - l.CANCEL_QTY) &gt; 0
  AND h.CONTRACT_ID = 合同ID;</code></pre>
</KbCard>

<KbCard title="Q7: 结案日期和状态前端显示为空？">
<p><strong>说明:</strong> COMPLETED_TYPE值为0时，前端会转换为null不展示。结案审批通过后系统自动回写结案日期和类型，若为空说明结案审批未通过。</p>
<p><strong>排查SQL:</strong></p>
<pre class="detail-sql" v-pre><code>SELECT EPC.CONTRACT_ID, EPC.COMPLETED_DATE, EPC.COMPLETED_TYPE
FROM EPM_PROJECT_CONTRACT EPC
WHERE EPC.CONTRACT_ID = 合同ID;</code></pre>
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
<tr><td>2026-08-30</td><td>-</td><td>AI</td><td>按skill规范重写，补充代码梳理：后端Controller/ServiceImpl/Entity/DTO/VO/Mapper XML完整分析，补充界面模块6列表格、数据库表5列表格、报错一览表5列、上游依赖4列、下游影响bullet points、选择弹窗、保存校验、提交校验、状态机等</td></tr>
<tr><td>2026-07-28</td><td>-</td><td>AI</td><td>初始创建，梳理工程项目结案完整业务逻辑</td></tr>
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