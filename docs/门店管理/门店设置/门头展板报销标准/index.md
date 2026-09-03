<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>维护什么</h2>
    <p>配置门头展板报销标准，明确不同场景下的报销金额上限</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M5.5 5.5H10.5M5.5 8H10.5M5.5 10.5H8.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">标准配置</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">报销标准的设定维度</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>生效管理</strong> — 新建默认未生效，审批通过后生效，支持手动作废</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>经销商限额</strong> — 可标识是否对经销商设置限额，并区分额度内/额度外计算</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>行为控制</strong> — 可配置是否允许单独门店申请、是否允许超额报销、审批是否可调金额</div>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 7H11" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">行匹配规则</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">标准明细的匹配口径</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>多维匹配</strong> — 按装修项目、适用门店类型、标准等级、数量范围匹配对应标准</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>金额区分</strong> — 同一行内分别设定额度内与额度外的报销金额</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>影响范围</h2>
    <p>报销标准被哪些下游模块引用</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M5.5 8L7.5 10L11 5.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">门店验收报销</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门店验收与报销按标准匹配报销金额，控制费用支出。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 2.5V5.5M10 2.5V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">门店装修申请</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门店装修申请引用标准作为费用预估与申请依据。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>生效原则：</strong>报销标准须审批通过后方可被下游引用，作废后即停止生效，确保报销金额口径始终受控且可追溯。
  </div>
</div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
<h4 class="bf-main-title">【门头展板报销标准】 — 全链路流程图</h4>
<p class="bf-main-sub">开始 → ★维护报销标准★ → ⚖审批通过？ → 生效(供下游引用) → 结束（拒绝则修改重提）</p>
<div class="bf-fc-svg-wrap">
<svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
<marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
<marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
<marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
</defs>
<rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
<rect x="345" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="405" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">事业部</text>
<rect x="475" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="535" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">词汇quota_type</text>
<rect x="605" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="665" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">词汇quota_out_limit</text>
<rect x="735" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="795" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">词汇装修项目</text>
<line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
<rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
<line x1="600" y1="194" x2="600" y2="222" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="515" y="222" width="170" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
<text x="600" y="246" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★维护报销标准★</text>
<text x="600" y="266" text-anchor="middle" fill="#DCFCE7" font-size="10">填头/行·保存·提交审批</text>
<line x1="600" y1="276" x2="600" y2="304" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<polygon points="600,304 670,334 600,364 530,334" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="338" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">⚖ 审批通过？</text>
<line x1="670" y1="334" x2="780" y2="334" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"/>
<rect x="735" y="319" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
<text x="780" y="338" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">拒绝 ✗</text>
<line x1="780" y1="319" x2="780" y2="249" stroke="#EF4444" stroke-width="1.5"/>
<line x1="780" y1="249" x2="515" y2="249" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"/>
<line x1="600" y1="364" x2="600" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="520" y="392" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
<text x="600" y="419" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">生效·供下游引用</text>
<line x1="600" y1="436" x2="600" y2="464" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="545" y="464" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="491" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
<line x1="600" y1="508" x2="600" y2="528" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
<rect x="50" y="528" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="600" y="550" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
<rect x="440" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="515" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店验收与报销</text>
<rect x="610" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="685" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店装修申请</text>
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
<KbCard num="1" title="重点逻辑1：政策标准有效期">
<ul><li><strong>业务意义</strong>：控制政策标准的有效时间范围，确保装修申请引用的是有效政策</li><li><strong>具体逻辑描述</strong>：</li><li>政策标准有开始日期和结束日期</li><li>装修申请提交时校验当前日期在有效期内</li><li>失效操作标记政策标准不可用</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：补贴标准行明细">
<ul><li><strong>业务意义</strong>：每个政策标准头下可配置多个补贴项目行</li><li><strong>具体逻辑描述</strong>：</li><li>行表POLICY_STANDARD_LINE关联头表</li><li>每行包含补贴项目/补贴方式/标准金额</li><li>支持行级别增删改</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<p>本页面为hlod低代码页面，基于后端API梳理。</p>
<h4>头部信息区</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>政策标准编号</td><td>POLICY_STANDARD_NO</td><td>TextField</td><td>政策标准编号</td><td>始终</td><td>编码规则生成</td></tr>
<tr><td>补贴类型</td><td>SUBSIDY_TYPE</td><td>Select</td><td>补贴类型</td><td>始终</td><td>用户选择</td></tr>
<tr><td>装修等级</td><td>FIXUP_GRADE</td><td>Select(AE.FIXUP_GRADE)</td><td>装修等级</td><td>始终</td><td>用户选择</td></tr>
<tr><td>开始日期</td><td>START_DATE</td><td>DatePicker</td><td>有效期开始</td><td>始终</td><td>用户输入</td></tr>
<tr><td>结束日期</td><td>END_DATE</td><td>DatePicker</td><td>有效期结束</td><td>始终</td><td>用户输入</td></tr>
<tr><td>状态</td><td>HZ_APPROVE_STATUS</td><td>Select</td><td>审核状态</td><td>始终</td><td>系统维护</td></tr>
</tbody>
</table>
<h4>政策标准行明细</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>补贴项目</td><td>DECORATE_PROJECT</td><td>Select</td><td>补贴项目</td><td>始终</td><td>用户选择</td></tr>
<tr><td>补贴方式</td><td>SUBSIDY_MODE</td><td>Select</td><td>补贴方式</td><td>始终</td><td>用户选择</td></tr>
<tr><td>标准金额</td><td>STANDARD_AMT</td><td>NumberField</td><td>标准金额(元/㎡)</td><td>始终</td><td>用户输入</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口</th><th>方法</th><th>路径</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>列表查询</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads`</td><td>查询政策标准列表</td></tr>
<tr><td>有效LOV</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads/lov`</td><td>查询有效政策标准LOV</td></tr>
<tr><td>补贴项目LOV</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads/project-lov`</td><td>查询补贴项目LOV</td></tr>
<tr><td>失效</td><td>POST</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads/invalid`</td><td>失效政策标准</td></tr>
<tr><td>创建/更新</td><td>POST</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads`</td><td>新增或更新政策标准</td></tr>
<tr><td>删除</td><td>DELETE</td><td>`/v1/&#123;organizationId&#125;/policy-standard-heads`</td><td>删除政策标准</td></tr>
<tr><td>行列表</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/policy-standard-lines`</td><td>查询政策标准行列表</td></tr>
<tr><td>行明细</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/policy-standard-lines/detail`</td><td>查询政策标准行明细</td></tr>
<tr><td>创建/更新行</td><td>POST</td><td>`/v1/&#123;organizationId&#125;/policy-standard-lines`</td><td>新增或更新政策标准行</td></tr>
<tr><td>删除行</td><td>DELETE</td><td>`/v1/&#123;organizationId&#125;/policy-standard-lines`</td><td>删除政策标准行</td></tr>
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
<tr><td>失效</td><td>HZ_APPROVE_STATUS为APPROVED</td><td>标记政策标准失效</td><td>POST /invalid</td></tr>
<tr><td>删除</td><td>HZ_APPROVE_STATUS为NEW</td><td>删除政策标准头表及行表</td><td>DELETE</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="保存校验">
<p><strong>校验1：</strong>补贴类型/装修等级必填 —— 确保政策标准基本配置完整</p>
<ul><li><strong>详细逻辑</strong>：前端必填校验</li><li><strong>系统体现</strong>：C7N内置校验</li><li><strong>排查SQL</strong>：<code>SELECT POLICY_STANDARD_ID FROM POLICY_STANDARD_HEAD WHERE SUBSIDY_TYPE IS NULL OR FIXUP_GRADE IS NULL</code></li></ul>
<p><strong>校验2：</strong>有效期范围合法 —— 开始日期≤结束日期</p>
<ul><li><strong>详细逻辑</strong>：前端日期校验</li><li><strong>系统体现</strong>：C7N内置校验</li><li><strong>排查SQL</strong>：<code>SELECT POLICY_STANDARD_ID FROM POLICY_STANDARD_HEAD WHERE START_DATE &gt; END_DATE</code></li></ul>
</KbCard>

<KbCard title="提交校验">
<p><strong>校验1：</strong>至少配置一行补贴标准 —— 确保政策标准有具体补贴项目</p>
<ul><li><strong>详细逻辑</strong>：提交时校验行表非空</li><li><strong>系统体现</strong>：后端校验</li><li><strong>排查SQL</strong>：<code>SELECT H.POLICY_STANDARD_ID FROM POLICY_STANDARD_HEAD H WHERE NOT EXISTS (SELECT 1 FROM POLICY_STANDARD_LINE L WHERE L.HEADER_ID=H.POLICY_STANDARD_ID)</code></li></ul>
</KbCard>

<KbCard title="状态机">

```text
NEW(新建) ──提交审批──→ RUN(审批中) ──┬──审批通过──→ APPROVED(已审批)
                                       │
                                       └──审批驳回──→ REJECTED(已驳回)

APPROVED ──失效──→ (已失效)
NEW ──删除──→ (删除)
```
</KbCard>

<KbCard title="工作流">
<ul><li><strong>工作流编码</strong>：<code>STORE_POLICY_STANDARD_HEAD</code>（门头报销标准）</li></ul>
</KbCard>

<KbCard title="POLICY_STANDARD_HEAD（政策标准头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>POLICY_STANDARD_ID</td><td>Long</td><td>主键ID</td><td>-</td><td>自增</td></tr>
<tr><td>POLICY_STANDARD_NO</td><td>String</td><td>政策标准编号</td><td>政策标准编号</td><td>编码规则生成</td></tr>
<tr><td>SUBSIDY_TYPE</td><td>Long</td><td>补贴类型</td><td>补贴类型</td><td>用户选择</td></tr>
<tr><td>FIXUP_GRADE</td><td>Long</td><td>装修等级</td><td>装修等级</td><td>用户选择</td></tr>
<tr><td>START_DATE</td><td>LocalDate</td><td>有效期开始</td><td>开始日期</td><td>用户输入</td></tr>
<tr><td>END_DATE</td><td>LocalDate</td><td>有效期结束</td><td>结束日期</td><td>用户输入</td></tr>
<tr><td>ORGANIZATION_ID</td><td>Long</td><td>组织ID</td><td>-</td><td>系统赋值</td></tr>
<tr><td>HZ_INSTANCE_ID</td><td>String</td><td>流程实例ID</td><td>-</td><td>工作流启动后赋值</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>String</td><td>流程审批状态</td><td>状态</td><td>NEW/RUN/APPROVED/REJECTED</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="POLICY_STANDARD_LINE（政策标准行表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>POLICY_LINE_ID</td><td>Long</td><td>主键ID</td><td>-</td><td>自增</td></tr>
<tr><td>HEADER_ID</td><td>Long</td><td>头表ID</td><td>-</td><td>关联头表</td></tr>
<tr><td>DECORATE_PROJECT</td><td>String</td><td>补贴项目</td><td>补贴项目</td><td>用户选择</td></tr>
<tr><td>SUBSIDY_MODE</td><td>String</td><td>补贴方式</td><td>补贴方式</td><td>用户选择</td></tr>
<tr><td>STANDARD_AMT</td><td>BigDecimal</td><td>标准金额(元/㎡)</td><td>标准金额</td><td>用户输入</td></tr>
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
<tr><td>政策标准不存在</td><td>doSelect/doDelete</td><td>policyStandardId对应记录不存在</td><td>高</td><td style="text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>有效期不合法</td><td>保存时</td><td>开始日期&gt;结束日期</td><td>中</td><td style="text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>年度不能为空</td><td>saveData/headParamCheck</td><td>启用额外预算时未填写年度，补全年度</td><td>中</td><td style="text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>额度外超额处理策略不能为空</td><td>saveData/headParamCheck</td><td>启用客户限额时未选择超额处理策略，补全策略</td><td>中</td><td style="text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
<tr><td>数量上限必须大于0且大于下限</td><td>saveData/lineParamCheck</td><td>行明细maxNum&lt;=minNum或maxNum&lt;=0，修正数量区间</td><td>中</td><td style="text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
<tr><td>单据id 不能为空</td><td>doUpdate/doDelete/checkUpOrDelete</td><td>更新或删除时policyStandardId为空，补全单据ID</td><td>高</td><td style="text-align:center;"><a href="#err-detail-6" class="view-btn">查看</a></td></tr>
<tr><td>当前数据不允许执行当前操作</td><td>doUpdate/doDelete/checkUpOrDelete</td><td>单据状态非NEW/INTERRUPT/REBUT，确认单据状态后再操作</td><td>高</td><td style="text-align:center;"><a href="#err-detail-7" class="view-btn">查看</a></td></tr>
</tbody>
</table>
</KbCard>

<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>政策标准不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>执行doSelect(详情查询)/doDelete(删除)接口时，按policyStandardId调用selectByPrimaryKey查询POLICY_STANDARD_HEAD返回null<br><strong>逻辑分析：</strong>详情查询和删除均需先按主键POLICY_STANDARD_ID定位政策标准头表记录。若政策标准在操作前被其他用户删除，或前端传入的policyStandardId为错误值/过期值（如列表缓存后他人已删除），selectByPrimaryKey返回null，后端抛出"政策标准不存在"阻断性异常，后续读取SUBSIDY_TYPE、FIXUP_GRADE、有效期等字段及关联行表均无法进行。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.policy_standard_id   AS 政策标准ID,
         h.policy_standard_no   AS 政策标准编号,
         h.subsidy_type         AS 补贴类型,
         h.fixup_grade          AS 装修等级,
         h.hz_approve_status    AS 审批状态
  FROM   policy_standard_head h
  WHERE  h.policy_standard_id = #{传入的policyStandardId};</code></pre>
  </div>
</div>

<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>有效期不合法</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>执行保存接口时，校验START_DATE(开始日期)大于END_DATE(结束日期)<br><strong>逻辑分析：</strong>政策标准有效期控制装修申请引用的合法性，要求START_DATE≤END_DATE，确保有效期内可被装修申请提交时引用。若用户在前端日期控件选择时误将开始日期晚于结束日期（如跨年配置时年份选错），前端C7N内置日期校验会拦截并提示"有效期不合法"。该异常为非阻断性提示，用户修正日期后可重新保存。若绕过前端直接调用后端，后端亦应做二次校验。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT policy_standard_id   AS 政策标准ID,
         policy_standard_no   AS 政策标准编号,
         start_date           AS 开始日期,
         end_date             AS 结束日期,
         hz_approve_status    AS 审批状态
  FROM   policy_standard_head
  WHERE  start_date &gt; end_date
  ORDER  BY policy_standard_no;</code></pre>
  </div>
</div>

<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>年度不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用saveData(新增/更新政策标准)接口时，headParamCheck校验useExtraBudgetFlag(启用额外预算标志)为"Y"且year(年度)为null<br><strong>逻辑分析：</strong>政策标准支持启用额外预算(useExtraBudgetFlag=Y)，启用后需指定年度(year)用于关联预算额度控制。若前端勾选"启用额外预算"但未选择年度即点击保存，或LOV选择后未正确回传year，headParamCheck校验year为null即抛出"年度不能为空"阻断性异常，后续预算额度关联逻辑无法执行。该异常为非阻断性提示，用户补全年度后可重新保存。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.policy_standard_id   AS 政策标准ID,
         h.policy_standard_no   AS 政策标准编号,
         h.subsidy_type         AS 补贴类型,
         h.fixup_grade          AS 装修等级,
         h.hz_approve_status    AS 审批状态
  FROM   policy_standard_head h
  WHERE  h.use_extra_budget_flag = 'Y'
  AND    h.year IS NULL;</code></pre>
  </div>
</div>

<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>额度外超额处理策略不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用saveData(新增/更新政策标准)接口时，headParamCheck校验custLimitFlag(启用客户限额标志)为"Y"且extraBudgetExcessStrategy(额度外超额处理策略)为null<br><strong>逻辑分析：</strong>政策标准支持启用客户限额(custLimitFlag=Y)，启用后需配置额度外超额处理策略(extraBudgetExcessStrategy)定义超出额度时的处理方式(如阻断/提示/允许)。若前端勾选"启用客户限额"但未选择超额处理策略即点击保存，headParamCheck校验extraBudgetExcessStrategy为null即抛出"额度外超额处理策略不能为空"阻断性异常，后续超额处理逻辑无法确定执行策略。该异常为非阻断性提示，用户补全策略后可重新保存。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.policy_standard_id            AS 政策标准ID,
         h.policy_standard_no            AS 政策标准编号,
         h.cust_limit_flag               AS 启用客户限额,
         h.extra_budget_excess_strategy  AS 额度外超额处理策略,
         h.hz_approve_status             AS 审批状态
  FROM   policy_standard_head h
  WHERE  h.cust_limit_flag = 'Y'
  AND    h.extra_budget_excess_strategy IS NULL;</code></pre>
  </div>
</div>

<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>数量上限必须大于0且大于下限</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用saveData(新增/更新政策标准)接口时，lineParamCheck校验某行明细的maxNum(数量上限)小于等于minNum(数量下限)，或maxNum小于等于0<br><strong>逻辑分析：</strong>政策标准行明细通过minNum(数量下限)和maxNum(数量上限)定义数量区间，用于下游装修申请/验收报销按数量匹配补贴标准。要求maxNum &gt; minNum且maxNum &gt; 0，确保区间非空且上限为正数。若用户配置时误将上限填小于等于下限（如minNum=100、maxNum=50），或上限填0/负数，区间为空集，任何数量都无法匹配该行，下游匹配不到对应补贴标准。后端校验maxNum.compareTo(minNum) &lt;= 0 || maxNum.compareTo(BigDecimal.ZERO) &lt;= 0即抛出"数量上限必须大于0且大于下限"。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT l.policy_line_id        AS 政策标准行ID,
         l.head_id               AS 头表ID,
         l.decorate_project      AS 补贴项目,
         l.subsidy_mode          AS 补贴方式,
         l.min_num               AS 数量下限,
         l.max_num               AS 数量上限
  FROM   policy_standard_line l
  WHERE  l.max_num &lt;= l.min_num
  OR     l.max_num &lt;= 0;</code></pre>
  </div>
</div>

<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>单据id 不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用doUpdate(更新政策标准)或doDelete(删除政策标准)接口时，checkUpOrDelete校验传入的policyStandardId(单据ID)为null<br><strong>逻辑分析：</strong>更新和删除操作均需按policyStandardId定位POLICY_STANDARD_HEAD记录，policyStandardId是操作的唯一标识。若前端未传入policyStandardId（如新增误调更新接口、或列表行ID未正确回传），checkUpOrDelete校验id为null即抛出"单据id 不能为空"阻断性异常，后续selectByPrimaryKey(null)会抛空指针。该异常为阻断性错误，需确认前端正确传入单据ID。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.policy_standard_id   AS 政策标准ID,
         h.policy_standard_no   AS 政策标准编号,
         h.hz_approve_status    AS 审批状态
  FROM   policy_standard_head h
  WHERE  h.policy_standard_id IS NULL;</code></pre>
  </div>
</div>

<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>当前数据不允许执行当前操作</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>调用doUpdate(更新政策标准)或doDelete(删除政策标准)接口时，checkUpOrDelete校验单据的HZ_APPROVE_STATUS(审批状态)不在NEW(新建)/INTERRUPT(中断)/REBUT(驳回)范围内<br><strong>逻辑分析：</strong>政策标准仅在NEW(新建)、INTERRUPT(中断)、REBUT(驳回)状态下允许更新或删除，其他状态(如RUN审批中、APPROVED已审批)下数据受流程保护不可修改。若前端在单据审批中或已审批后仍触发更新/删除操作（如用户重复点击、页面缓存未刷新状态），checkUpOrDelete校验状态不在允许范围内即抛出"当前数据不允许执行当前操作"阻断性异常，保护流程数据完整性。该异常为阻断性错误，需确认单据状态后再操作。</div>
<h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT h.policy_standard_id   AS 政策标准ID,
         h.policy_standard_no   AS 政策标准编号,
         h.hz_approve_status    AS 审批状态,
         CASE h.hz_approve_status
           WHEN 'NEW'       THEN '新建'
           WHEN 'RUN'       THEN '审批中'
           WHEN 'APPROVED'  THEN '已审批'
           WHEN 'REJECTED'  THEN '已驳回'
           WHEN 'INTERRUPT' THEN '中断'
           WHEN 'REBUT'     THEN '驳回'
           ELSE h.hz_approve_status
         END                    AS 审批状态释义
  FROM   policy_standard_head h
  WHERE  h.hz_approve_status NOT IN ('NEW', 'INTERRUPT', 'REBUT');</code></pre>
  </div>
</div>

<KbCard title="Q1：装修申请提交时报&quot;没有有效期内的政策标准&quot;">
<p><strong>根因</strong>：当前日期不在任何政策标准的有效期内</p>
<p><strong>解决方案</strong>：延长政策标准的有效期或新增覆盖当前日期的政策标准</p>
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