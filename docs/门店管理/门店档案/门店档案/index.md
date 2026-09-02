<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>维护什么</h2>
    <p>门店档案是门店的基础主数据，供各下游模块统一引用</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5H13V13.5H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M5.5 5.5H10.5M5.5 8H10.5M5.5 10.5H8.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">档案来源</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">门店档案如何生成</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>新建申请</strong> — 新建门店申请审批通过后自动建档</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>变更申请</strong> — 门店变更申请审批通过后更新档案</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>批量导入</strong> — 通过导入方式生成门店档案</div>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L12 5V11L8 14L4 11V5Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">局部维护</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">直接可维护的范围</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>其他情况说明</strong> — 补充门店其他情况说明</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>面积变动说明</strong> — 记录门店面积变动情况</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;">
          <div style="font-size:.75rem;"><strong>核心属性</strong> — 编码、名称、经销商等变更须走变更申请流程</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>影响范围</h2>
    <p>门店档案被哪些下游模块引用</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 2.5V5.5M10 2.5V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">变更与装修</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门店变更申请、门店装修申请与进度更新等模块引用门店档案。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#4ADE80);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M5.5 8L7.5 10L11 5.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">验收与报销</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门店验收与报销流程引用门店档案信息。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#F97316,#FB923C);"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 7H11" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">门头展板</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">门头展板报销申请等模块查询门店档案信息。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>数据原则：</strong>门店档案是下游业务引用的统一基准，核心属性一经建档须通过审批变更，直接维护仅限说明类信息，确保数据一致与可追溯。
  </div>
</div>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">门店档案 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★门店档案维护★ → 结束（上游由新建/变更申请审批通过及导入生成，下游供变更/装修/报销等模块引用）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="210" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="330" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">新建门店申请(审批通过)</text>
      <rect x="480" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">门店变更申请(审批通过)</text>
      <rect x="750" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="870" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">门店档案导入</text>
      <line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="545" y="150" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="175" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="190" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="470" y="220" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="244" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★门店档案维护★</text>
      <text x="600" y="263" text-anchor="middle" fill="#DCFCE7" font-size="10">查询·维护说明/面积变动</text>
      <line x1="600" y1="274" x2="600" y2="304" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="545" y="304" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="329" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="600" y1="344" x2="600" y2="384" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="384" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="406" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="280" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="380" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店变更申请</text>
      <rect x="500" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="600" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店装修申请与进度</text>
      <rect x="720" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="820" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门店验收与报销</text>
      <rect x="940" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="1040" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">门头展板报销申请</text>
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
<KbCard num="1" title="重点逻辑1：主数据表无审批流程">
<ul><li><strong>业务意义</strong>：门店档案是基础主数据，不涉及审批流程，由上游申请单审批通过后自动生成/更新</li><li><strong>具体逻辑描述</strong>：</li><li>门店档案由"新建门店申请"审批通过后通过syncMktTerminal方法自动生成</li><li>门店档案由"门店变更申请"审批通过后通过onWfComplete方法自动更新</li><li>本页面仅支持查询和补充信息编辑，不支持新增/删除</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：数据权限按组织+经销商隔离">
<ul><li><strong>业务意义</strong>：查询时自动按当前用户组织ID和经销商编码过滤，确保数据隔离</li><li><strong>具体逻辑描述</strong>：</li><li>selectList方法：entid为空时自动填充当前组织ID，custCode为空时自动填充当前经销商编码</li><li>finFeeApplyLov方法：同样自动填充组织ID、经销商编码，并注入装修提前天数</li><li>默认按terminalId降序排列</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：保存仅支持局部更新">
<ul><li><strong>业务意义</strong>：保存接口仅更新补充信息字段，不支持全字段编辑</li><li><strong>具体逻辑描述</strong>：</li><li>save方法先按主键查询，不存在抛CommonException("数据不存在")</li><li>仅更新两个字段：otherCondition（其他情况说明）、terminalAreaChange（门店面积变动说明）</li><li>使用updateByPrimaryKeySelective选择性更新</li><li>批量插入附件关系（ObjAttachRel）</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：LOV接口支持装修申请和门头报销">
<ul><li><strong>业务意义</strong>：为下游模块提供门店选择LOV接口</li><li><strong>具体逻辑描述</strong>：</li><li>finFeeApplyLov：门店装修申请与进度更新时选择门店，注入advancePermissibleTime（装修提前天数）</li><li>custDhReimburseHead：门头展板报销申请时选择门店，直接透传查询</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<h4>门店档案列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>门店ID</td><td>TERMINAL_ID</td><td>隐藏</td><td>主键</td><td>常显</td><td>系统自动生成</td></tr>
<tr><td>门店编码</td><td>TERMINAL_CODE</td><td>文本</td><td>门店编码</td><td>常显</td><td>新建门店申请审批通过时生成</td></tr>
<tr><td>门店名称</td><td>TERMINAL_NAME</td><td>文本</td><td>门店名称</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>经销商编码</td><td>CUST_CODE</td><td>文本</td><td>经销商编码</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>经销商名称</td><td>CUST_NAME</td><td>文本</td><td>经销商名称</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>门店类型</td><td>TERMINAL_TYPE</td><td>文本</td><td>门店类型</td><td>常显</td><td>1=专卖/2=商超/3=家装/4=社区/5=乡镇</td></tr>
<tr><td>门店面积</td><td>TERMINAL_AREA</td><td>数值</td><td>门店面积</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>门店状态</td><td>TERMINAL_STAT</td><td>文本</td><td>门店状态</td><td>常显</td><td>1=运营中, 2=撤店</td></tr>
<tr><td>经营属性</td><td>CUSTOMER_CLASS</td><td>文本</td><td>经营属性</td><td>常显</td><td>1=直营专营/2=经销专营/3=分销</td></tr>
<tr><td>装修风格</td><td>DECORATION_STYLE</td><td>文本</td><td>店面装修风格</td><td>常显</td><td>LOV翻译</td></tr>
<tr><td>门店装修等级</td><td>FIXUP_GRADE</td><td>文本</td><td>门店装修等级</td><td>常显</td><td>LOV翻译(AE.FIXUP_GRADE)</td></tr>
<tr><td>有效状态</td><td>USABLE</td><td>文本</td><td>有效状态</td><td>常显</td><td>2=有效</td></tr>
<tr><td>省份名称</td><td>PROVINCE_AREANAME</td><td>文本</td><td>省份</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>城市名称</td><td>CITY_AREANAME</td><td>文本</td><td>城市</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>区县名称</td><td>COUNTY_AREANAME</td><td>文本</td><td>区县</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>门店详细地址</td><td>ADDR</td><td>文本</td><td>门店详细地址</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>开店日期</td><td>IN_SHOP_DATE</td><td>日期</td><td>开店日期</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>撤店日期</td><td>SHUT_DATE</td><td>日期</td><td>撤店日期</td><td>常显</td><td>门店变更申请审批通过时更新</td></tr>
<tr><td>最新装修日期</td><td>LATEST_DECORATION_DATE</td><td>日期</td><td>最新装修日期</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>店长姓名</td><td>SORE_MANAGERS_NAME</td><td>文本</td><td>店长姓名</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>店长联系电话</td><td>SORE_MANAGERS_TEL</td><td>文本</td><td>店长联系电话</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>其他情况说明</td><td>OTHER_CONDITION</td><td>文本域</td><td>其他情况说明</td><td>常显</td><td>用户输入（补充信息）</td></tr>
<tr><td>门店面积变动说明</td><td>TERMINAL_AREA_CHANGE</td><td>文本域</td><td>面积变动说明</td><td>常显</td><td>用户输入（补充信息）</td></tr>
<tr><td>备注</td><td>NOTE</td><td>文本域</td><td>备注</td><td>常显</td><td>从申请单同步</td></tr>
<tr><td>创建人</td><td>CREATOR</td><td>文本</td><td>创建人</td><td>常显</td><td>系统自动赋值</td></tr>
<tr><td>创建时间</td><td>CREATE_TIME</td><td>日期</td><td>创建时间</td><td>常显</td><td>系统自动赋值</td></tr>
</tbody>
</table>
<h4>其他按钮</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>查询</td><td>查询门店档案列表</td><td>列表页</td><td>常显</td><td>调用GET /mkt-terminals，按组织+经销商过滤</td></tr>
<tr><td>保存</td><td>保存补充信息</td><td>详情页</td><td>常显</td><td>调用POST /mkt-terminals，更新otherCondition和terminalAreaChange+附件</td></tr>
</tbody>
</table>
<h4>按钮1：查询（列表页）</h4>
<ul><li><strong>业务意义</strong>：查询门店档案列表</li><li><strong>具体逻辑描述</strong>：</li><li>调用GET <code>/v1/&#123;organizationId&#125;/mkt-terminals</code> 接口</li><li>自动填充entid（当前组织ID）和custCode（当前经销商编码）</li><li>使用@ProcessLovValue翻译LOV字段</li><li>默认按terminalId降序排列</li></ul>
<h4>按钮2：保存（详情页）</h4>
<ul><li><strong>业务意义</strong>：保存门店补充信息</li><li><strong>具体逻辑描述</strong>：</li><li>调用POST <code>/v1/&#123;organizationId&#125;/mkt-terminals</code> 接口</li><li>先按主键查询，不存在抛CommonException("数据不存在")</li><li>仅更新otherCondition和terminalAreaChange两个字段</li><li>批量插入附件关系</li></ul>
</KbCard>

<KbCard title="后端接口">
<table class="kb-field-tbl">
<thead>
<tr><th>接口名称</th><th>请求方式</th><th>接口路径</th><th>权限</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>网点资料列表</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-terminals`</td><td>permissionLogin=true</td><td>分页查询门店档案，自动按组织+经销商过滤</td></tr>
<tr><td>网点资料保存</td><td>POST</td><td>`/v1/&#123;organizationId&#125;/mkt-terminals`</td><td>permissionLogin=true</td><td>保存补充信息（otherCondition+terminalAreaChange+附件）</td></tr>
<tr><td>门店装修申请LOV</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-terminals/fin-fee-apply-lov`</td><td>permissionLogin=true</td><td>装修申请时选择门店，注入装修提前天数</td></tr>
<tr><td>门头报销门店LOV</td><td>GET</td><td>`/v1/&#123;organizationId&#125;/mkt-terminals/cust-dh-reimburse`</td><td>permissionLogin=true</td><td>门头展板报销时选择门店</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="状态机">
<blockquote>门店档案为主数据表，无状态流转。门店状态（TERMINAL_STAT）由门店变更申请审批通过后更新：1=运营中 → 2=撤店。</blockquote>
</KbCard>

<KbCard title="上游依赖">
<table class="kb-field-tbl">
<thead>
<tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
</thead>
<tbody>
<tr><td>新建门店申请</td><td>数据来源</td><td>审批通过后通过syncMktTerminal生成门店档案</td><td>新建门店申请已审批通过</td></tr>
<tr><td>门店变更申请</td><td>数据来源</td><td>审批通过后更新门店档案</td><td>门店变更申请已审批通过</td></tr>
<tr><td>经销商主数据</td><td>数据来源</td><td>提供经销商信息</td><td>经销商已创建</td></tr>
<tr><td>事业部基础设置</td><td>数据来源</td><td>提供事业部信息</td><td>事业部已配置</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="下游影响">
<ul><li>门店装修申请：通过finFeeApplyLov接口选择门店</li><li>门店验收与报销：基于门店档案进行验收报销</li><li>门头展板报销：通过custDhReimburseHead接口选择门店</li><li>门店报表：所有门店报表的数据基础</li></ul>
</KbCard>

<KbCard title="MKT_TERMINAL（门店档案表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>TERMINAL_ID</td><td>NUMBER</td><td>门店ID(主键)</td><td>门店ID</td><td>自增</td></tr>
<tr><td>TERMINAL_CODE</td><td>VARCHAR2</td><td>门店编码</td><td>门店编码</td><td>barCode+divisionCode+5位Redis流水号</td></tr>
<tr><td>TERMINAL_NAME</td><td>VARCHAR2</td><td>门店名称</td><td>门店名称</td><td>从申请单同步</td></tr>
<tr><td>CUST_ID</td><td>NUMBER</td><td>经销商ID</td><td>-</td><td>从申请单同步</td></tr>
<tr><td>CUST_CODE</td><td>VARCHAR2</td><td>经销商编码</td><td>经销商编码</td><td>从申请单同步</td></tr>
<tr><td>CUST_NAME</td><td>VARCHAR2</td><td>经销商名称</td><td>经销商名称</td><td>从申请单同步</td></tr>
<tr><td>TERMINAL_TYPE</td><td>NUMBER</td><td>门店类型</td><td>门店类型</td><td>1=专卖/2=商超/3=家装/4=社区/5=乡镇</td></tr>
<tr><td>TERMINAL_AREA</td><td>NUMBER</td><td>门店面积</td><td>门店面积</td><td>从申请单同步</td></tr>
<tr><td>TERMINAL_STAT</td><td>NUMBER</td><td>门店状态</td><td>门店状态</td><td>1=运营中, 2=撤店</td></tr>
<tr><td>CUSTOMER_CLASS</td><td>NUMBER</td><td>经营属性</td><td>经营属性</td><td>1=直营专营/2=经销专营/3=分销</td></tr>
<tr><td>DECORATION_STYLE</td><td>NUMBER</td><td>装修风格</td><td>装修风格</td><td>LOV翻译</td></tr>
<tr><td>FIXUP_GRADE</td><td>NUMBER</td><td>门店装修等级</td><td>门店装修等级</td><td>LOV翻译(AE.FIXUP_GRADE)</td></tr>
<tr><td>USABLE</td><td>NUMBER</td><td>有效状态</td><td>有效状态</td><td>2=有效</td></tr>
<tr><td>PROVINCE_AREANAME</td><td>VARCHAR2</td><td>省份名称</td><td>省份名称</td><td>从申请单同步</td></tr>
<tr><td>CITY_AREANAME</td><td>VARCHAR2</td><td>城市名称</td><td>城市名称</td><td>从申请单同步</td></tr>
<tr><td>COUNTY_AREANAME</td><td>VARCHAR2</td><td>区县名称</td><td>区县名称</td><td>从申请单同步</td></tr>
<tr><td>ADDR</td><td>VARCHAR2</td><td>门店详细地址</td><td>门店详细地址</td><td>从申请单同步</td></tr>
<tr><td>IN_SHOP_DATE</td><td>DATE</td><td>开店日期</td><td>开店日期</td><td>从申请单同步</td></tr>
<tr><td>SHUT_DATE</td><td>DATE</td><td>撤店日期</td><td>撤店日期</td><td>变更申请审批通过时更新</td></tr>
<tr><td>OTHER_CONDITION</td><td>VARCHAR2</td><td>其他情况说明</td><td>其他情况说明</td><td>用户输入（补充信息）</td></tr>
<tr><td>TERMINAL_AREA_CHANGE</td><td>VARCHAR2</td><td>面积变动说明</td><td>面积变动说明</td><td>用户输入（补充信息）</td></tr>
<tr><td>ORGANIZATION_ID</td><td>NUMBER</td><td>组织ID</td><td>-</td><td>租户组织标识</td></tr>
<tr><td>ENTID</td><td>NUMBER</td><td>企业ID</td><td>-</td><td>LOV翻译(AE.ITEM_ORGANIZATION)</td></tr>
<tr><td>DIVISION_ID</td><td>NUMBER</td><td>事业部ID</td><td>-</td><td>从申请单同步</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>数据不存在</td><td>保存时</td><td>门店档案不存在或已被删除，请检查门店ID</td><td>高</td><td><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>网络请求失败</td><td>全局</td><td>后端服务不可达或超时，请检查网络与服务状态</td><td>中</td><td><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>权限不足</td><td>全局</td><td>当前用户无门店档案操作权限或数据权限隔离</td><td>中</td><td><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>查询无数据</td><td>列表查询时</td><td>当前组织/经销商下无门店档案数据</td><td>低</td><td><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
</tbody>
</table>
<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>数据不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>点击"保存"按钮补充其他情况说明/面积变动说明时，按terminalId调用selectByPrimaryKey查询MKT_TERMINAL返回null<br><strong>逻辑分析：</strong>保存接口仅支持局部更新otherCondition和terminalAreaChange两个字段，前置需先校验门店档案存在。若门店档案在编辑期间被上游"门店变更申请"流程撤店删除（实际为状态置为撤店而非物理删除）、terminalId传值错误（如前端缓存了已失效ID）、或并发场景下被清理，查询返回空，抛CommonException中断保存。需核查门店档案是否仍处于有效运营状态。</div>
  </div>
</div>

```sql
SELECT t.terminal_id         AS 门店ID,
         t.terminal_code       AS 门店编码,
         t.terminal_name       AS 门店名称,
         t.terminal_stat       AS 门店状态,
         t.usable              AS 有效状态,
         t.update_time         AS 最后更新时间
  FROM   mkt_terminal t
   WHERE  t.terminal_id = #{传入的terminalId}
   AND    (t.usable IS NULL OR t.terminal_stat = 2)
   ORDER  BY t.update_time DESC;
```
<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>网络请求失败</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>前端调用门店档案接口（查询列表、保存补充信息、LOV选择）时，请求超时或后端服务不可达<br><strong>逻辑分析：</strong>低代码页面通过axios请求后端API（/v1/&#123;organizationId&#125;/mkt-terminals、fin-fee-apply-lov、cust-dh-reimburse等）。若后端ae-business服务未启动、网络中断、网关超时、或数据库连接池耗尽导致请求堆积，axios捕获网络异常，前端展示通用错误提示，列表数据无法加载或保存操作失败。需核查后端服务健康状态、网络连通性、网关配置及数据库连接池。</div>
  </div>
</div>

```sql
SELECT '服务连通性检查' AS 检查项,
         COUNT(*)          AS 门店档案总记录数,
         MAX(t.update_time) AS 最后更新时间
  FROM   mkt_terminal t
  WHERE  t.usable = 2;
```
<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>权限不足</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>当前用户无门店档案相关操作权限（查询/保存/LOV选择）<br><strong>逻辑分析：</strong>低代码页面通过permissionLogin=true进行登录校验，selectList方法自动按当前用户组织ID（entid）和经销商编码（custCode）过滤数据实现数据权限隔离。若用户角色未分配门店档案菜单权限、权限码配置缺失、或组织ID/经销商编码不匹配导致数据权限隔离后无可见数据，接口返回403/401或空列表。需核查用户角色权限配置及组织数据权限、经销商主数据关联。</div>
  </div>
</div>

```sql
SELECT t.terminal_id         AS 门店ID,
         t.terminal_code       AS 门店编码,
         t.terminal_name       AS 门店名称,
         t.cust_code           AS 经销商编码,
         t.entid               AS 企业ID,
         t.organization_id     AS 组织ID
  FROM   mkt_terminal t
  WHERE  t.organization_id = #{当前用户组织ID}
  AND    t.cust_code = #{当前经销商编码}
  ORDER  BY t.terminal_id DESC;
```
<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>查询无数据</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>进入门店档案列表页或调用LOV接口查询时，按当前组织ID和经销商编码过滤后返回空列表<br><strong>逻辑分析：</strong>selectList方法在entid为空时自动填充当前组织ID、custCode为空时自动填充当前经销商编码，按terminalId降序排列。若当前用户所属组织/经销商下确实无门店档案（如新建门店申请未审批通过、门店档案均被撤店terminal_stat=2、或经销商主数据未关联门店），查询返回空列表，前端展示空表格。此为正常业务情况而非错误，但用户可能误判为故障。需核查该组织/经销商下门店档案是否已建立及有效状态。</div>
  </div>
</div>

```sql
SELECT t.terminal_id         AS 门店ID,
         t.terminal_code       AS 门店编码,
         t.terminal_name       AS 门店名称,
         t.cust_code           AS 经销商编码,
         t.terminal_stat       AS 门店状态,
         t.usable              AS 有效状态,
         t.entid               AS 企业ID,
         t.organization_id     AS 组织ID
  FROM   mkt_terminal t
  WHERE  t.organization_id = #{当前用户组织ID}
  AND    t.cust_code = #{当前经销商编码}
  ORDER  BY t.terminal_id DESC;
```
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="常见问题">
<p><strong>Q1：门店档案如何创建？</strong></p>
<p>A：由"新建门店申请"审批通过后自动生成（syncMktTerminal方法），不支持在本页面直接新增。</p>
<p><strong>Q2：门店档案如何更新？</strong></p>
<p>A：由"门店变更申请"审批通过后自动更新（onWfComplete方法）。本页面仅支持补充"其他情况说明"和"面积变动说明"。</p>
<p><strong>Q3：查询时如何过滤数据？</strong></p>
<p>A：自动按当前用户组织ID（entid）和经销商编码（custCode）过滤，确保数据隔离。</p>
<p><strong>Q4：LOV接口有什么用？</strong></p>
<p>A：finFeeApplyLov为门店装修申请提供门店选择（注入装修提前天数），custDhReimburseHead为门头展板报销提供门店选择。</p>
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
<tr><td>2025-11-13</td><td>-</td><td>YD</td><td>初始创建门店档案管理功能</td></tr>
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