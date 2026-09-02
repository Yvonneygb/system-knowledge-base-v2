<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
  <div class="kl-card">
    <div class="biz-kl-hdr">
      <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
      <h2>合同保证金查什么</h2>
      <p>从 EBS 共享系统同步的到款认款记录视图，管理认款、撤销与认缴跳转</p>
    </div>
    <div class="biz-3col">
      <div class="kl-col-box" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"/><path d="M8 5.5V8L9.8 9.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">认款来源</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">记录来自 EBS 共享到款，含认款单号、金额与同步时间。</p>
          </div>
        </div>
      </div>
      <div class="kl-col-box alt" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">认缴类型</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">区分普通认缴与封顶认缴，封顶类型影响撤销与缴清判定。</p>
          </div>
        </div>
      </div>
      <div class="kl-col-box" style="margin-bottom:0;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M2 6H14M5 2V4M11 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
          <div>
            <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">状态标识</h5>
            <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">认款状态分已认款与撤销认款，决定可执行的操作。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="kl-card">
    <div class="biz-kl-hdr">
      <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 使用</span>
      <h2>怎么用它管理认款</h2>
      <p>查询认款 → 撤销或发起认缴 → 同步更新缴清状态</p>
    </div>
    <div class="biz-steps">
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h5>查询认款</h5>
        <small>查看 EBS 同步<br>到款认款记录</small>
      </div>
      <div class="biz-step-arrow">&rarr;</div>
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h5>撤销/认缴</h5>
        <small>撤销认款<br>或跳转认缴申请</small>
      </div>
      <div class="biz-step-arrow">&rarr;</div>
      <div class="biz-step-item">
        <div class="biz-step-circle" style="background:linear-gradient(135deg,#059669,#047857);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13L6 9L9 11L13 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h5>更新状态</h5>
        <small>更新合同缴清<br>推送 CRM</small>
      </div>
    </div>
    <div class="kl-tip" style="margin-top:14px;">
      <strong>使用原则：</strong>合同保证金页是认款数据的管理台，本身由 EBS 同步驱动；撤销认款会反向回退合同与认缴概况的缴清状态，封顶认缴与普通认缴处理逻辑不同。
    </div>
  </div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">合同保证金 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★合同保证金管理★(查询/撤销认款/认缴申请) → 结束（撤销更新合同与认缴概况·推送CRM；认缴申请跳转）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="270" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="370" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">EBS共享系统</text>
      <rect x="500" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">保证金标准设定</text>
      <rect x="730" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="830" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">年度经销合同</text>
      <line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="194" x2="600" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="430" y="230" width="340" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★合同保证金管理★</text>
      <text x="600" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">查询认款记录/撤销认款/认缴申请跳转</text>
      <line x1="600" y1="284" x2="600" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="545" y="400" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="425" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="600" y1="440" x2="600" y2="460" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="460" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="482" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="270" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="370" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">更新合同认缴状态</text>
      <rect x="500" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="600" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">更新认缴概况</text>
      <rect x="730" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="830" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">跳转认缴申请</text>
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
<KbCard num="1" title="重点逻辑1：保证金到款管理 {到款管理}">
<ul><li><strong>业务意义</strong>：管理保证金到款记录，掌握保证金缴纳情况</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：通过search接口查询保证金到款记录</li></ul>
<ul><li>第2点：支持撤销认款(cancelPayById)，通过EPM_PAYMENT_ALLOT_CANCEL工作流</li></ul>
<ul><li>第3点：支持从认款记录发起认缴申请(respectively)</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：保证金封顶与标准 {配置管理}">
<ul><li><strong>业务意义</strong>：通过封顶和标准配置控制保证金上限和缴纳标准</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：保证金封顶(CmDepositsCeiling)设置保证金上限</li></ul>
<ul><li>第2点：保证金标准(CmDepositsPayStandard)配置缴纳标准</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：合同保证金列表页">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>到款ID</td><td>CM_DEPOSITS_PAYMENT.PAYMENT_ID</td><td>文本框</td><td>到款记录ID</td><td>常显</td><td>系统生成</td></tr>
<tr><td>合同编号</td><td>CM_DEPOSITS_PAYMENT.CONTRACT_NO</td><td>文本框</td><td>关联合同编号</td><td>常显</td><td>系统带出</td></tr>
<tr><td>经销商</td><td>CM_DEPOSITS_PAYMENT.CUSTOMER_NAME</td><td>文本框</td><td>经销商名称</td><td>常显</td><td>系统带出</td></tr>
<tr><td>到款金额</td><td>CM_DEPOSITS_PAYMENT.PAYMENT_AMT</td><td>数字显示框</td><td>到款金额</td><td>常显</td><td>系统带出</td></tr>
<tr><td>到款日期</td><td>CM_DEPOSITS_PAYMENT.PAYMENT_DATE</td><td>日期显示框</td><td>到款日期</td><td>常显</td><td>系统带出</td></tr>
<tr><td>认款状态</td><td>CM_DEPOSITS_PAYMENT.STATUS</td><td>文本框</td><td>认款状态</td><td>常显</td><td>系统更新</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<blockquote>本页面查询条件使用文本输入，无独立弹窗。</blockquote>
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
<tr><td>查询</td><td>查询保证金到款</td><td>列表页</td><td>始终可用</td><td>调用search接口</td></tr>
<tr><td>撤销认款</td><td>撤销认款记录</td><td>列表页</td><td>选中可撤销记录</td><td>调用cancelPayById接口</td></tr>
<tr><td>认缴申请</td><td>发起认缴申请</td><td>列表页</td><td>选中认款记录</td><td>调用respectively接口</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="保存校验">
<blockquote>本页面为查询管理页面，无保存操作。</blockquote>
</KbCard>

<KbCard title="提交校验">
<blockquote>本页面无提交操作。撤销认款通过EPM_PAYMENT_ALLOT_CANCEL工作流。</blockquote>
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>

```text
到款 ──认缴申请──→ 已认缴 ──撤销认款──→ 已撤销
```
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
</tbody>
</table>
<p>&gt;|</p>
<table class="kb-field-tbl">
<thead>
<tr><th>已到款</th><th>保证金已到款未认缴</th><th>查询、认缴申请</th></tr>
</thead>
<tbody>
<tr><td>已撤销</td><td>认款已撤销</td><td>查询</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：CM_DEPOSITS_PAYMENT（保证金到款表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>PAYMENT_ID</td><td>BIGINT</td><td>主键ID</td><td>到款ID</td><td>自增主键</td></tr>
<tr><td>CONTRACT_NO</td><td>VARCHAR</td><td>合同编号</td><td>合同编号</td><td>系统带出</td></tr>
<tr><td>CUSTOMER_NAME</td><td>VARCHAR</td><td>经销商名称</td><td>经销商</td><td>系统带出</td></tr>
<tr><td>PAYMENT_AMT</td><td>DECIMAL</td><td>到款金额</td><td>到款金额</td><td>系统带出</td></tr>
<tr><td>PAYMENT_DATE</td><td>DATE</td><td>到款日期</td><td>到款日期</td><td>系统带出</td></tr>
<tr><td>STATUS</td><td>VARCHAR</td><td>认款状态</td><td>认款状态</td><td>系统更新</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表2：CM_DEPOSITS_CEILING（保证金封顶表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>CEILING_ID</td><td>BIGINT</td><td>主键ID</td><td>-</td><td>自增主键</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表3：CM_DEPOSITS_PAY_STANDARD（保证金标准表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>PAY_STANDARD_ID</td><td>BIGINT</td><td>主键ID</td><td>-</td><td>自增主键</td></tr>
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
<tr><td>撤销认款失败</td><td>撤销时</td><td>认款已被使用或状态不可撤销</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>保证金ID不能空</td><td>撤销/认缴时</td><td>未选中到款记录或记录ID丢失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>该笔认款金额已进行撤销操作，不能进行认领</td><td>认缴申请时</td><td>认款已撤销，不可再认领</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>该认款已转换为封顶认款，不能再进行认缴操作</td><td>认缴申请时</td><td>认款已用于封顶认缴</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>当前法人不存在，请联系it处理</td><td>认缴申请时</td><td>经销商未关联法人主数据</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>法人编码不能为空</td><td>认缴申请时</td><td>经销商法人编码缺失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>事业部id、经销商id不能为空</td><td>查询/认缴时</td><td>必填参数缺失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>合同类型不能为空</td><td>查询/认缴时</td><td>合同类型参数缺失</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>网络请求失败</td><td>全局</td><td>后端服务不可达或超时</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>权限不足，无法操作</td><td>全局</td><td>当前用户无对应操作权限</td><td>toast提醒</td><td>[查看]</td></tr>
</tbody>
</table>
<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>撤销认款失败</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户选中认款记录点击"撤销认款"，cancelPayById接口通过EPM_PAYMENT_ALLOT_CANCEL工作流撤销时返回失败<br><strong>逻辑分析：</strong>撤销认款通过EPM_PAYMENT_ALLOT_CANCEL工作流执行，撤销后恢复认款状态并回退保证金余额。失败根因有三类：(1)认款已被使用，如已关联保证金减免申请（CM_DEPOSITS_REDUCTION_HEAD）或已汇总到认缴概况（CM_CONTRACT_PAYMENT_SUMMARY），不可撤销；(2)认款状态不可撤销，STATUS非"已认缴"（如已撤销或已到款未认缴）；(3)工作流EPM_PAYMENT_ALLOT_CANCEL配置缺失或OA系统不可用。需核查认款使用情况及状态</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.PAYMENT_AMT, P.PAYMENT_DATE, P.STATUS,
         (SELECT SUM(R.REDUCTION_AMT) FROM CM_DEPOSITS_REDUCTION_HEAD R
          WHERE R.CONTRACT_ID = P.CONTRACT_ID AND R.HZ_APPROVE_STATUS = 'APPROVED') AS 已减免金额
  FROM CM_DEPOSITS_PAYMENT P
  WHERE P.PAYMENT_ID = #{paymentId};</code></pre></div>
</div>


<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>保证金ID不能空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户在列表页未选中记录或选中记录ID丢失，直接点击"撤销认款"或"认缴申请"按钮<br><strong>逻辑分析：</strong>cancelPayById与respectively接口在CmDepositsPaymentServiceImpl中前置校验PAYMENT_ID非空。保证金ID是到款记录的主键，未传入将导致后续查询、状态更新、工作流发起均无法定位记录。校验在Service层拦截，toast提示后阻断操作</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT, PAYMENT_DATE, STATUS
  FROM CM_DEPOSITS_PAYMENT
  WHERE PAYMENT_ID IS NULL OR PAYMENT_ID = 0;</code></pre></div>
</div>


<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>该笔认款金额已进行撤销操作，不能进行认领</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对已撤销的认款记录再次点击"认缴申请"按钮<br><strong>逻辑分析：</strong>认缴申请(respectively)接口校验认款状态，若该笔认款已执行过撤销操作（STATUS='CANCELLED'或已记录撤销历史），则不允许再发起认领。撤销操作会写入CmDepositsPaymentHistory历史表，再次认领将导致认款金额重复使用，破坏保证金余额一致性。需选择状态为"已到款"或"已认缴"的有效记录</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT P.PAYMENT_ID, P.CONTRACT_NO, P.PAYMENT_AMT, P.STATUS,
         H.OPERATION_TYPE, H.OPERATION_DATE
  FROM CM_DEPOSITS_PAYMENT P
  LEFT JOIN CM_DEPOSITS_PAYMENT_HISTORY H ON P.PAYMENT_ID = H.PAYMENT_ID
  WHERE P.STATUS = 'CANCELLED'
    AND H.OPERATION_TYPE = 'CANCEL';</code></pre></div>
</div>


<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>该认款已转换为封顶认款，不能再进行认缴操作</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户对已用于封顶认缴的认款记录点击"认缴申请"按钮<br><strong>逻辑分析：</strong>认款记录存在CONVERT_CEILING_FLAG字段标识是否已转换为封顶认款。当CONVERT_CEILING_FLAG='Y'时，该认款已纳入封顶认缴流程，再次发起普通认缴将导致同一笔款项被双重认缴。封顶认缴与普通认缴互斥，需先撤销封顶认缴再发起普通认缴</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT,
         PAYMENT_STATUS, CONVERT_CEILING_FLAG, PAYMENT_TYPE
  FROM CM_DEPOSITS_PAYMENT
  WHERE CONVERT_CEILING_FLAG = 'Y'
    AND PAYMENT_STATUS = 'SHARE_COMPLETE_PAY';</code></pre></div>
</div>


<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>当前法人不存在，请联系it处理</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户发起认缴申请，respectively接口根据经销商查询法人主数据返回空<br><strong>逻辑分析：</strong>认缴申请需关联法人信息用于资金流向确认。CmDepositsPaymentServiceImpl根据经销商CUSTOMER_ID查询法人主数据表，若经销商未配置法人关联或法人主数据已失效，将抛出此异常。需联系IT在经销商主数据中维护法人关联关系</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT P.PAYMENT_ID, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,
         C.CUSTOMER_ID, C.CORPORATE_CODE, C.CORPORATE_NAME
  FROM CM_DEPOSITS_PAYMENT P
  LEFT JOIN CUSTOMER_CORPORATE_REL C ON P.BILLING_UNIT_CODE = C.CUSTOMER_CODE
  WHERE C.CORPORATE_CODE IS NULL;</code></pre></div>
</div>


<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>法人编码不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>认缴申请或保证金同步时，经销商对应的法人编码（CORPORATE_CODE）为空<br><strong>逻辑分析：</strong>法人编码是保证金认缴推送CRM、资金流向确认的关键标识。CmDepositsPaymentServiceImpl在同步保证金或发起认缴前校验法人编码非空。法人编码缺失将导致CRM侧无法匹配法人主体，资金流向无法确认。需在经销商主数据中维护法人编码</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,
         C.CUSTOMER_CODE, C.CORPORATE_CODE
  FROM CM_DEPOSITS_PAYMENT P
  LEFT JOIN CUSTOMER C ON P.BILLING_UNIT_CODE = C.CUSTOMER_CODE
  WHERE C.CORPORATE_CODE IS NULL OR C.CORPORATE_CODE = '';</code></pre></div>
</div>


<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>事业部id、经销商id不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>查询保证金到款或发起认缴申请时，ENTID（事业部ID）或CUSTOMER_ID（经销商ID）参数为空<br><strong>逻辑分析：</strong>事业部和经销商是保证金数据隔离的核心维度。CmDepositsPaymentServiceImpl在查询、认缴、撤销等操作前校验ENTID和CUSTOMER_ID非空。参数为空将导致查询无数据范围或认缴无法定位保证金归属。通常由前端未正确传入当前事业部或未选择经销商导致</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT PAYMENT_ID, CONTRACT_NO, ENTID, BILLING_UNIT_CODE, CUSTOMER_NAME, PAYMENT_AMT
  FROM CM_DEPOSITS_PAYMENT
  WHERE ENTID IS NULL OR BILLING_UNIT_CODE IS NULL;</code></pre></div>
</div>


<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>合同类型不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>查询保证金或发起认缴申请时，CONTRACT_TYPE（合同类型）参数为空<br><strong>逻辑分析：</strong>合同类型区分年度经销合同、临时合同等不同类型，影响保证金标准和封顶配置的匹配。CmDepositsPaymentServiceImpl在查询和认缴前校验CONTRACT_TYPE非空。合同类型为空将导致保证金标准（CM_DEPOSITS_PAY_STANDARD）无法匹配，认缴金额计算无依据。需前端正确传入合同类型参数</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, CONTRACT_TYPE, PAYMENT_AMT
  FROM CM_DEPOSITS_PAYMENT
  WHERE CONTRACT_TYPE IS NULL OR CONTRACT_TYPE = '';</code></pre></div>
</div>


<div id="err-detail-9" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>网络请求失败</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>前端调用cm-deposits-payments相关接口时，后端服务不可达或请求超时<br><strong>逻辑分析：</strong>前端通过axios调用AE_BUSINESS服务，网络异常、服务宕机、网关超时均会触发。前端拦截器统一捕获并toast提示。需检查AE_BUSINESS服务状态、网络连通性、网关配置</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT '网络层异常，无SQL排查' AS 提示 FROM DUAL;</code></pre></div>
</div>


<div id="err-detail-10" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>权限不足，无法操作</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>当前用户对撤销认款、认缴申请等操作无对应功能权限或数据权限<br><strong>逻辑分析：</strong>后端通过权限注解校验用户角色，前端通过菜单和按钮权限控制显隐。用户无权限时后端返回403，前端拦截器toast提示。需在权限管理中为用户分配对应角色</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT '权限层异常，请核查用户角色配置' AS 提示 FROM DUAL;</code></pre></div>
</div>


</KbCard>

<KbCard title="常见问题">

<div class="faq-qa-wrap">
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q1</span>
    <span style="font-size:15px;">保证金余额不正确</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>到款记录或撤销记录未及时更新<br><strong style="color:#7C3AED;">处理：</strong>检查SQL <code>SELECT SUM(PAYMENT_AMT) FROM CM_DEPOSITS_PAYMENT WHERE CONTRACT_NO = #&#123;contractNo&#125; AND STATUS = 'VALID'</code>
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