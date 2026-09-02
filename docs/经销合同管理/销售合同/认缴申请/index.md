<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
  <div class="kl-card">
    <div class="biz-kl-hdr">
      <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
      <h2>认缴申请是什么</h2>
      <p>将一笔到款认款按合同类型认缴为合同保证金，并走审批的单据</p>
    </div>
    <div class="biz-2col-inner">
      <div class="kl-col-box">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">单据结构</h4>
        </div>
        <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">头行两层，关联认款记录</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
            <div style="font-size:.75rem;"><strong>申请头</strong> — 经销商、法人、认缴类型，关联一笔认款记录</div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
            <div style="font-size:.75rem;"><strong>申请行</strong> — 按合同类型填写认缴金额，受可用余额约束</div>
          </div>
        </div>
      </div>
      <div class="kl-col-box alt">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#059669,#047857);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"/><path d="M8 5.5V8L9.8 9.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">存在意义</h4>
        </div>
        <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">认款如何变成保证金</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
            <div style="font-size:.75rem;"><strong>抵扣来源</strong> — 基于 EBS 同步的到款认款发起认缴</div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
            <div style="font-size:.75rem;"><strong>缴清判定</strong> — 认缴生效后才更新合同与概况缴清状态</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="kl-card">
    <div class="biz-kl-hdr">
      <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 流程</span>
      <h2>认缴申请怎么流转</h2>
      <p>关联认款 → 填认缴金额 → 提交审批 → 生效并推送</p>
    </div>
    <div class="biz-steps">
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h5>新建申请</h5>
        <small>选认款记录<br>带出可用金额</small>
      </div>
      <div class="biz-step-arrow">&rarr;</div>
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h5>保存并提交</h5>
        <small>按合同类型填金额<br>启动审批</small>
      </div>
      <div class="biz-step-arrow">&rarr;</div>
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
        <h5>审批判断</h5>
        <small>通过则认缴生效<br>驳回回退未生效</small>
      </div>
      <div class="biz-step-arrow">&rarr;</div>
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#059669,#047857);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13L6 9L9 11L13 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h5>生效同步</h5>
        <small>生成认缴记录<br>更新缴清·推送CRM</small>
      </div>
    </div>
  </div>

  <div class="kl-card">
    <div class="biz-kl-hdr">
      <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 规则</span>
      <h2>关键规则与边界</h2>
      <p>认缴类型、金额上限与状态约束</p>
    </div>
    <div class="biz-3col">
      <div class="kl-col-box" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M2 6H14M5 2V4M11 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">认缴类型</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">分普通认缴与封顶认缴，类型由关联认款记录带入，影响撤销处理逻辑。</p>
          </div>
        </div>
      </div>
      <div class="kl-col-box alt" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"/><path d="M8 5.5V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">金额上限</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">每行认缴金额须大于0且不超过该认款记录的可用余额（认款金额减已使用）。</p>
          </div>
        </div>
      </div>
      <div class="kl-col-box" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">状态边界</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">仅"未生效"状态可编辑、提交或删除；审批中不可改动。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="kl-tip" style="margin-top:14px;">
      <strong>业务原则：</strong>认缴须基于真实到款认款，金额不得超出可用余额，经审批生效后才更新缴清状态并推送 CRM；撤销认款会反向回退认缴状态。
    </div>
  </div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">认缴申请 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★认缴申请★ → ⚖审批通过？ → 认缴生效(生成记录/更新缴清/推送CRM) → 结束（驳回则回退未生效）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="195" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="270" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">合同保证金</text>
      <rect x="360" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">保证金标准设定</text>
      <rect x="525" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">年度经销合同</text>
      <rect x="690" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="765" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">工作流引擎</text>
      <rect x="855" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="930" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM系统</text>
      <line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="194" x2="600" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="470" y="230" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★认缴申请★</text>
      <text x="600" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">选认款记录/按合同类型填认缴金额</text>
      <line x1="600" y1="284" x2="600" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <polygon points="600,300 680,340 600,380 520,340" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="344" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 审批通过？</text>
      <line x1="680" y1="340" x2="755" y2="340" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
      <rect x="755" y="325" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
      <text x="800" y="344" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">驳回 ✗</text>
      <line x1="800" y1="325" x2="800" y2="200" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="800" y1="200" x2="700" y2="200" stroke="#EF4444" stroke-width="1.5"/>
      <line x1="700" y1="200" x2="700" y2="257" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
      <line x1="600" y1="380" x2="600" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="500" y="400" width="200" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="425" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">认缴生效</text>
      <line x1="600" y1="440" x2="600" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="545" y="460" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="485" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="600" y1="500" x2="600" y2="520" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="520" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="542" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="270" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="370" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">生成认缴记录</text>
      <rect x="500" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="600" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">更新合同缴清状态</text>
      <rect x="730" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="830" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">推送CRM认缴状态</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑系统</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝/驳回</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：OA审批流程 {审批流转}">
<ul><li><strong>业务意义</strong>：认缴申请需经OA审批，确保认缴合规</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：保存并提交时发起OA审批(CONTRACT_PAYMENT_APPLY_MCS_AW)</li></ul>
<ul><li>第2点：审批通过后更新认缴状态，汇总到认缴概况</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：客户/法人关联 {数据关联}">
<ul><li><strong>业务意义</strong>：认缴申请需关联客户和法人信息</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：通过findCustomer接口根据客户查找法人信息</li></ul>
<ul><li>第2点：法人信息用于资金流向确认</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：认缴申请列表页">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>认缴单号</td><td>CM_CONTRACT_PAYMENT_APPLY.APPLY_NO</td><td>文本框</td><td>认缴申请单号</td><td>常显</td><td>自动生成</td></tr>
<tr><td>合同编号</td><td>CM_CONTRACT_PAYMENT_APPLY.CONTRACT_NO</td><td>文本框</td><td>关联合同编号</td><td>常显</td><td>选择合同带出</td></tr>
<tr><td>经销商</td><td>CM_CONTRACT_PAYMENT_APPLY.CUSTOMER_NAME</td><td>文本框</td><td>经销商名称</td><td>常显</td><td>系统带出</td></tr>
<tr><td>认缴金额</td><td>CM_CONTRACT_PAYMENT_APPLY.APPLY_AMT</td><td>数字输入框</td><td>申请认缴金额</td><td>常显</td><td>手动输入</td></tr>
<tr><td>H0流程审批状态</td><td>CM_CONTRACT_PAYMENT_APPLY.HZ_APPROVE_STATUS</td><td>文本框</td><td>流程审批状态</td><td>常显</td><td>流程回调更新</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<h4>弹窗1：合同选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>contractNo</td><td>合同编号</td><td>合同编号</td><td>"HT001"</td><td>已审批通过的经销合同</td></tr>
</tbody>
</table>
<blockquote>查询SQL（后端接口）：</blockquote>

```sql
SELECT SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CUSTOMER_NAME 
FROM SA_SALE_CONTRACT_HEAD WHERE HZ_APPROVE_STATUS = 'APPROVED'
```
</KbCard>

<KbCard title="导入">
<blockquote>本页面无导入功能。</blockquote>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>新增</td><td>新建认缴申请</td><td>列表页</td><td>始终可用</td><td>打开新建页面</td></tr>
<tr><td>保存</td><td>保存认缴信息</td><td>编辑页</td><td>编辑状态</td><td>调用save接口</td></tr>
<tr><td>保存并提交</td><td>发起OA审批</td><td>编辑页</td><td>保存后</td><td>发起CONTRACT_PAYMENT_APPLY_MCS_AW流程</td></tr>
<tr><td>删除</td><td>删除认缴申请</td><td>列表页</td><td>选中未提交记录</td><td>调用remove接口</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="保存校验">
<p><strong>校验1：</strong>合同不能为空 —— 确保认缴关联明确合同</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：保存时校验合同ID不为空</li></ul>
<p><strong>系统体现：</strong>toast提醒</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM CM_CONTRACT_PAYMENT_APPLY WHERE CONTRACT_ID IS NULL;
```
<p><strong>校验2：</strong>认缴金额必须大于0 —— 确保认缴金额有效</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：保存时校验认缴金额大于0</li></ul>
<p><strong>系统体现：</strong>toast提醒</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT * FROM CM_CONTRACT_PAYMENT_APPLY WHERE APPLY_AMT <= 0;
```
</KbCard>

<KbCard title="提交校验">
<p><strong>校验1：</strong>认缴金额不超过未缴余额 —— 确保认缴不超额</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：提交时校验认缴金额不超过合同未缴保证金余额</li></ul>
<p><strong>系统体现：</strong>阻断性报错</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT A.APPLY_AMT, S.UNPAID_AMT FROM CM_CONTRACT_PAYMENT_APPLY A, CM_CONTRACT_PAYMENT_SUMMARY S
    WHERE A.CONTRACT_ID = S.CONTRACT_ID AND A.APPLY_AMT > S.UNPAID_AMT;
```
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>

```text
新建 ──保存──→ 已保存 ──提交──→ 审批中 ──OA审批通过──→ 已审核
                                │
                                └──OA审批拒绝──→ 已拒绝
```
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>NEW</td><td>已保存未提交</td><td>编辑、保存、提交、删除</td></tr>
<tr><td>RUN</td><td>OA审批中</td><td>无（等待审批结果）</td></tr>
<tr><td>APPROVED</td><td>OA审批通过</td><td>查看</td></tr>
<tr><td>REJECTED</td><td>OA审批拒绝</td><td>修改、重新提交</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：CM_CONTRACT_PAYMENT_APPLY（认缴申请头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>APPLY_ID</td><td>BIGINT</td><td>主键ID</td><td>-</td><td>自增主键</td></tr>
<tr><td>APPLY_NO</td><td>VARCHAR</td><td>认缴单号</td><td>认缴单号</td><td>自动生成</td></tr>
<tr><td>CONTRACT_ID</td><td>BIGINT</td><td>合同ID</td><td>-</td><td>选择合同带出</td></tr>
<tr><td>CONTRACT_NO</td><td>VARCHAR</td><td>合同编号</td><td>合同编号</td><td>选择合同带出</td></tr>
<tr><td>CUSTOMER_NAME</td><td>VARCHAR</td><td>经销商名称</td><td>经销商</td><td>系统带出</td></tr>
<tr><td>APPLY_AMT</td><td>DECIMAL</td><td>认缴金额</td><td>认缴金额</td><td>手动输入</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>VARCHAR</td><td>H0流程审批状态</td><td>H0流程审批状态</td><td>流程回调更新</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表2：CM_CONTRACT_PAYMENT_APPLY_LINE（认缴申请明细表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>APPLY_LINE_ID</td><td>BIGINT</td><td>明细行主键</td><td>-</td><td>自增主键</td></tr>
<tr><td>APPLY_ID</td><td>BIGINT</td><td>关联头表ID</td><td>-</td><td>FK → CM_CONTRACT_PAYMENT_APPLY</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表3：CM_CONTRACT_PAYMENT_RECORD（认款记录表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>RECORD_ID</td><td>BIGINT</td><td>主键ID</td><td>-</td><td>自增主键</td></tr>
<tr><td>APPLY_ID</td><td>BIGINT</td><td>关联认缴申请ID</td><td>-</td><td>FK → CM_CONTRACT_PAYMENT_APPLY</td></tr>
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
<tr><td>合同不能为空</td><td>保存时</td><td>未选择合同</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>认缴金额必须大于0</td><td>保存时</td><td>认缴金额填写了0或负数</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>认缴金额超过未缴余额</td><td>提交时</td><td>认缴金额大于合同未缴保证金</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>行明细不能为空</td><td>保存时</td><td>认缴明细行未填写</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>法人已有封顶认缴记录，无需再次认缴</td><td>保存时</td><td>法人已完成封顶认缴</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>法人已有封顶认缴流程在审批中</td><td>保存时</td><td>法人封顶认缴流程未完成</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>当前法人存在普通认缴，请先中断或撤销</td><td>保存时</td><td>普通认缴与封顶认缴互斥</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>认缴的金额与封顶的金额不一致</td><td>保存时</td><td>封顶认缴金额与封顶配置不一致</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>认款单剩余可认款金额不足</td><td>提交时</td><td>认款单可认款余额小于申请金额</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>认款单不存在，请重新选择</td><td>保存时</td><td>关联认款单已被删除或撤销</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>申请单已认缴，不能进行重复认缴</td><td>保存时</td><td>认缴申请已执行认缴操作</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>流程编码缺失，请选择流程</td><td>提交时</td><td>OA流程编码未配置</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>请选择需要删除的数据</td><td>删除时</td><td>未选中删除数据</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>当前法人不存在</td><td>保存时</td><td>法人主数据缺失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>合同类型不能为空</td><td>保存时</td><td>合同类型参数缺失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>网络请求失败</td><td>全局</td><td>后端服务不可达或超时</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>权限不足，无法操作</td><td>全局</td><td>当前用户无对应操作权限</td><td>toast提醒</td><td>[查看]</td></tr>
</tbody>
</table>
<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>合同不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户在新建/编辑页未选择合同直接点击保存<br><strong>逻辑分析：</strong>保存接口cm-contract-payment-applys/save在写入CM_CONTRACT_PAYMENT_APPLY前校验CONTRACT_ID非空。合同是认缴申请的关联主体，未选择合同将导致认缴金额无归属，后续客户/法人（findCustomer接口）无法带出，未缴余额校验也无从执行。校验在Controller层前置拦截，toast提示后阻断保存</div>
  </div>
</div>

```sql
SELECT APPLY_ID, APPLY_NO, CONTRACT_ID, CONTRACT_NO, CUSTOMER_NAME,
         APPLY_AMT, HZ_APPROVE_STATUS
  FROM CM_CONTRACT_PAYMENT_APPLY
  WHERE CONTRACT_ID IS NULL OR CONTRACT_NO IS NULL;
```
<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>认缴金额必须大于0</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户在认缴金额输入框填写0、负数或留空后点击保存<br><strong>逻辑分析：</strong>认缴金额（APPLY_AMT）代表申请认缴的保证金金额，必须为正数。0或负数无业务意义，且审批通过后汇总到认缴概况（CM_CONTRACT_PAYMENT_SUMMARY）将出现异常（认缴金额为0或负数导致未缴金额计算错误）。校验APPLY_AMT &gt; 0，toast提示后阻断保存</div>
  </div>
</div>

```sql
SELECT APPLY_ID, APPLY_NO, CONTRACT_NO, CUSTOMER_NAME, APPLY_AMT, HZ_APPROVE_STATUS
  FROM CM_CONTRACT_PAYMENT_APPLY
  WHERE APPLY_AMT IS NULL OR APPLY_AMT <= 0;
```
<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>认缴金额超过未缴余额</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户点击"保存并提交"，提交校验发现APPLY_AMT &gt; 合同未缴保证金余额（UNPAID_AMT）<br><strong>逻辑分析：</strong>提交时校验认缴金额不超过合同未缴保证金余额，通过关联CM_CONTRACT_PAYMENT_APPLY.CONTRACT_ID与CM_CONTRACT_PAYMENT_SUMMARY.CONTRACT_ID比对UNPAID_AMT（未缴金额=认缴金额-已缴金额）。超出未缴余额意味着认缴超额，审批通过后已缴金额将超过认缴金额，保证金余额计算异常。此为阻断性报错，阻止OA流程（CONTRACT_PAYMENT_APPLY_MCS_AW）发起，需调减认缴金额或先确认认缴概况数据</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.CONTRACT_NO, A.APPLY_AMT,
         S.SUBSCRIPTION_AMT, S.PAID_AMT, S.UNPAID_AMT,
         (A.APPLY_AMT - S.UNPAID_AMT) AS 超额金额
  FROM CM_CONTRACT_PAYMENT_APPLY A
  JOIN CM_CONTRACT_PAYMENT_SUMMARY S ON A.CONTRACT_ID = S.CONTRACT_ID
  WHERE A.APPLY_AMT > S.UNPAID_AMT
    AND A.HZ_APPROVE_STATUS IN ('NEW', 'RUN');
```
<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>行明细不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户保存认缴申请时，认缴明细行（CM_CONTRACT_PAYMENT_APPLY_LINE）未填写或为空<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl在save方法中校验明细行非空。认缴明细行记录认款分配、认缴金额拆分等详细信息，无明细行将导致认缴申请无具体认款来源，审批通过后无法汇总到认缴概况。需添加至少一行认缴明细</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.CONTRACT_NO, A.APPLY_AMT, A.HZ_APPROVE_STATUS,
         (SELECT COUNT(*) FROM CM_CONTRACT_PAYMENT_APPLY_LINE L
          WHERE L.APPLY_ID = A.APPLY_ID) AS 明细行数
  FROM CM_CONTRACT_PAYMENT_APPLY A
  WHERE NOT EXISTS (SELECT 1 FROM CM_CONTRACT_PAYMENT_APPLY_LINE L
                    WHERE L.APPLY_ID = A.APPLY_ID);
```
<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>法人已有封顶认缴记录，无需再次认缴</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对已封顶认缴的法人再次发起封顶认缴申请<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验法人封顶认缴状态。若法人已在CM_CONTRACT_PAYMENT_SUMMARY中存在PAY_COMPLETE='Y'（已缴清）的封顶认缴记录，再次发起封顶认缴将导致重复认缴。封顶认缴代表法人保证金已缴清，无需再次认缴</div>
  </div>
</div>

```sql
SELECT S.SUMMARY_ID, S.CONTRACT_NO, S.CUSTOMER_NAME, S.SUBSCRIPTION_AMT,
         S.PAID_AMT, S.PAY_COMPLETE
  FROM CM_CONTRACT_PAYMENT_SUMMARY S
  WHERE S.CUSTOMER_ID = #{customerId}
    AND S.PAY_COMPLETE = 'Y'
    AND S.CONTRACT_TYPE = #{contractType};
```
<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>法人已有封顶认缴流程在审批中</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对已有封顶认缴流程在审批中的法人再次发起封顶认缴申请<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验法人是否存在审批中的封顶认缴申请（HZ_APPROVE_STATUS='RUN'且认缴类型为封顶）。重复发起将导致OA流程冲突和认缴金额重复计算。需先完成或中止已有封顶认缴流程</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.CONTRACT_NO, A.CUSTOMER_NAME,
         A.APPLY_AMT, A.APPLY_TYPE, A.HZ_APPROVE_STATUS
  FROM CM_CONTRACT_PAYMENT_APPLY A
  WHERE A.CUSTOMER_ID = #{customerId}
    AND A.APPLY_TYPE = 'CEILING'
    AND A.HZ_APPROVE_STATUS = 'RUN';
```
<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>当前法人存在普通认缴，请先中断或撤销</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对存在普通认缴的法人发起封顶认缴申请<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验普通认缴与封顶认缴互斥。若法人存在未完成或已审批的普通认缴（APPLY_TYPE='NORMAL'），不允许发起封顶认缴。封顶认缴要求法人所有认缴一次性缴清，与普通认缴的分批认缴逻辑冲突。需先中断普通认缴申请或撤销普通认缴</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.CONTRACT_NO, A.CUSTOMER_NAME,
         A.APPLY_TYPE, A.APPLY_AMT, A.HZ_APPROVE_STATUS
  FROM CM_CONTRACT_PAYMENT_APPLY A
  WHERE A.CUSTOMER_ID = #{customerId}
    AND A.APPLY_TYPE = 'NORMAL'
    AND A.HZ_APPROVE_STATUS IN ('NEW', 'RUN', 'APPROVED');
```
<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>认缴的金额与封顶的金额不一致</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户发起封顶认缴申请时，申请认缴金额与封顶配置金额（CM_DEPOSITS_CEILING）不一致<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验封顶认缴的申请金额必须等于法人封顶配置金额。封顶认缴代表一次性缴清全部保证金，金额不一致将导致缴清标识计算错误。需调整认缴金额与封顶配置一致</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.APPLY_AMT AS 申请认缴金额,
         C.CEILING_AMT AS 封顶金额,
         (A.APPLY_AMT - C.CEILING_AMT) AS 差额
  FROM CM_CONTRACT_PAYMENT_APPLY A
  JOIN CM_DEPOSITS_CEILING C ON A.CUSTOMER_ID = C.CUSTOMER_ID
  WHERE A.APPLY_TYPE = 'CEILING'
    AND A.APPLY_AMT != C.CEILING_AMT;
```
<div id="err-detail-9" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>认款单剩余可认款金额不足</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户提交认缴申请时，关联认款单（CM_DEPOSITS_PAYMENT）的剩余可认款金额小于申请认缴金额<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验认款单剩余可认款金额（认款金额-已认缴金额-已撤销金额）必须大于等于申请认缴金额。剩余金额不足将导致认缴超额，认款单金额被超用。需调减认缴金额或选择其他有余额的认款单</div>
  </div>
</div>

```sql
SELECT P.PAYMENT_ID, P.CONTRACT_NO, P.PAYMENT_AMT,
         (SELECT NVL(SUM(A.APPLY_AMT), 0) FROM CM_CONTRACT_PAYMENT_APPLY A
          WHERE A.PAYMENT_ID = P.PAYMENT_ID
            AND A.HZ_APPROVE_STATUS IN ('NEW', 'RUN', 'APPROVED')) AS 已认缴金额,
         P.PAYMENT_AMT - (SELECT NVL(SUM(A.APPLY_AMT), 0) FROM CM_CONTRACT_PAYMENT_APPLY A
          WHERE A.PAYMENT_ID = P.PAYMENT_ID
            AND A.HZ_APPROVE_STATUS IN ('NEW', 'RUN', 'APPROVED')) AS 剩余可认款金额
  FROM CM_DEPOSITS_PAYMENT P
  WHERE P.PAYMENT_ID = #{paymentId};
```
<div id="err-detail-10" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>认款单不存在，请重新选择</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户保存认缴申请时，关联的认款单（CM_DEPOSITS_PAYMENT）已被删除或撤销<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验关联认款单存在性。认款单不存在根因有三类：(1)认款单已被删除；(2)认款单已撤销（STATUS='CANCELLED'）；(3)PAYMENT_ID传入错误。需重新选择有效认款单</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.PAYMENT_ID,
         P.PAYMENT_ID AS 认款单ID, P.STATUS AS 认款状态
  FROM CM_CONTRACT_PAYMENT_APPLY A
  LEFT JOIN CM_DEPOSITS_PAYMENT P ON A.PAYMENT_ID = P.PAYMENT_ID
  WHERE A.PAYMENT_ID IS NOT NULL
    AND (P.PAYMENT_ID IS NULL OR P.STATUS = 'CANCELLED');
```
<div id="err-detail-11" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>申请单已认缴，不能进行重复认缴</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对已执行认缴操作的申请单再次发起认缴<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl校验申请单认缴状态。若申请单已认缴（已生成认款记录CM_CONTRACT_PAYMENT_RECORD），再次认缴将导致认款金额重复计算。需确认申请单状态，仅未认缴的申请单可发起认缴</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.HZ_APPROVE_STATUS,
         (SELECT COUNT(*) FROM CM_CONTRACT_PAYMENT_RECORD R
          WHERE R.APPLY_ID = A.APPLY_ID) AS 认款记录数
  FROM CM_CONTRACT_PAYMENT_APPLY A
  WHERE EXISTS (SELECT 1 FROM CM_CONTRACT_PAYMENT_RECORD R
                WHERE R.APPLY_ID = A.APPLY_ID);
```
<div id="err-detail-12" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>流程编码缺失，请选择流程</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户点击"保存并提交"，校验OA流程编码（CONTRACT_PAYMENT_APPLY_MCS_AW）为空<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl在saveAndSubmit中校验流程编码非空。流程编码缺失将导致OA流程无法启动。根因有二：(1)系统未配置CONTRACT_PAYMENT_APPLY_MCS_AW流程编码；(2)认缴类型未关联对应流程编码。需在流程配置中维护对应关系</div>
  </div>
</div>

```sql
SELECT APPLY_ID, APPLY_NO, CONTRACT_NO, APPLY_TYPE, HZ_APPROVE_STATUS
  FROM CM_CONTRACT_PAYMENT_APPLY
  WHERE APPLY_ID = #{applyId}
    AND HZ_APPROVE_STATUS = 'NEW';
```
<div id="err-detail-13" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>请选择需要删除的数据</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户未选中任何认缴申请记录直接点击"删除"按钮<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl在remove方法中校验传入的删除列表非空。未选中数据时删除操作无意义，且可能导致空指针异常。需先选中至少一条记录再删除</div>
  </div>
</div>

```sql
SELECT '请在前端列表页选中需要删除的认缴申请记录' AS 提示 FROM DUAL;
```
<div id="err-detail-14" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>当前法人不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户保存认缴申请时，根据经销商查询法人主数据返回空<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl根据经销商CUSTOMER_ID查询法人主数据，若经销商未配置法人关联或法人主数据已失效，将抛出此异常。法人是认缴资金流向确认的关键主体。需在经销商主数据中维护法人关联</div>
  </div>
</div>

```sql
SELECT A.APPLY_ID, A.APPLY_NO, A.CUSTOMER_NAME,
         C.CUSTOMER_ID, C.CORPORATE_CODE, C.CORPORATE_NAME
  FROM CM_CONTRACT_PAYMENT_APPLY A
  LEFT JOIN CUSTOMER C ON A.CUSTOMER_ID = C.CUSTOMER_ID
  WHERE C.CORPORATE_CODE IS NULL OR C.CORPORATE_NAME IS NULL;
```
<div id="err-detail-15" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>合同类型不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>保存认缴申请或查询时，CONTRACT_TYPE参数为空<br><strong>逻辑分析：</strong>CmContractPaymentApplyServiceImpl在多处校验合同类型非空。合同类型区分年度经销合同、临时合同等，影响保证金标准和封顶配置的匹配。合同类型为空将导致保证金标准无法匹配，认缴金额计算无依据。需前端正确传入合同类型参数</div>
  </div>
</div>

```sql
SELECT APPLY_ID, APPLY_NO, CONTRACT_NO, CUSTOMER_NAME, CONTRACT_TYPE, APPLY_AMT
  FROM CM_CONTRACT_PAYMENT_APPLY
  WHERE CONTRACT_TYPE IS NULL OR CONTRACT_TYPE = '';
```
<div id="err-detail-16" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>网络请求失败</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>前端调用cm-contract-payment-applys相关接口时，后端服务不可达或请求超时<br><strong>逻辑分析：</strong>前端通过axios调用AE_BUSINESS服务，网络异常、服务宕机、网关超时均会触发。前端拦截器统一捕获并toast提示。需检查AE_BUSINESS服务状态、网络连通性、网关配置</div>
  </div>
</div>

```sql
SELECT '网络层异常，无SQL排查' AS 提示 FROM DUAL;
```
<div id="err-detail-17" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>权限不足，无法操作</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>当前用户对认缴申请保存、提交、删除等操作无对应功能权限或数据权限<br><strong>逻辑分析：</strong>后端通过权限注解校验用户角色，前端通过菜单和按钮权限控制显隐。用户无权限时后端返回403，前端拦截器toast提示。需在权限管理中为用户分配对应角色</div>
  </div>
</div>

```sql
SELECT '权限层异常，请核查用户角色配置' AS 提示 FROM DUAL;
```
</KbCard>

<KbCard title="常见问题">

<div class="faq-qa-wrap">
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q1</span>
    <span style="font-size:15px;">OA审批未发起</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>OA系统不可用或工作流配置缺失<br><strong style="color:#7C3AED;">处理：</strong>检查工作流CONTRACT_PAYMENT_APPLY_MCS_AW配置
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
<tr><td>2026-08-30</td><td>-</td><td>AI</td><td>按skill规范重写</td></tr>
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