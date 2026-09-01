<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">背景与动机</span>
    <h2>为何要做样品及长库龄折扣政策</h2>
    <p>门店在样品及长库龄要货时，需按折扣政策管理价格与数量限制，确保线下统一执行</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">来源隔离</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">与工程/家装折扣政策共用EPM_DISCOUNT_POLICY实体，通过sourceType=YXCRM区分样品及长库龄折扣政策。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#F59E0B,#FBBF24);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H12M12 6L9 3M12 6L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10H4M4 10L7 7M4 10L7 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">多维度适用</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">支持按客户、区域、客户分类、省份四个维度设置适用对象，灵活覆盖不同业务场景。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#10B981,#34D399);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">OA审批驱动</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">政策走OA审批流程，审批通过后valid=2生效，要货订单可引用该折扣政策计算折扣。</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">定义</span>
    <h2>本质 & 具体是什么</h2>
    <p>面向样品及长库龄要货的折扣政策配置，头表 + 产品明细行结构</p>
  </div>
  <div class="biz-2col-inner" style="margin-top:8px;">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">政策头 (EPM_DISCOUNT_POLICY)</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="padding:8px 10px;background:#F5F3FF;border-radius:8px;font-size:.75rem;">政策单号、名称、政策类型、适用对象、有效起止日期、业务类型、订单类型、币种、默认折扣率等</div>
        <div style="padding:8px 10px;background:#F5F3FF;border-radius:8px;font-size:.75rem;">sourceType=YXCRM标识样品及长库龄折扣政策，valid字段控制有效状态(1未审核/2有效/3失效)</div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L8 8L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M2 8L8 12L14 8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">产品明细行 (EPM_DISCOUNT_POLICY_ITEM)</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;font-size:.75rem;">产品编码、产品名称、型号、折扣率、阶梯数量、阶梯金额、可下单数量等</div>
        <div style="padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;font-size:.75rem;">通过discountPolicyId关联政策头，支持Excel批量导入</div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>数据关系：</strong>产品明细行（EPM_DISCOUNT_POLICY_ITEM）通过 DISCOUNT_POLICY_ID 关联政策头（EPM_DISCOUNT_POLICY），sourceType=YXCRM 标识样品及长库龄折扣政策。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>折扣政策管理流程</h2>
    <p>选择适用对象 → 新建折扣政策 → 保存政策 → 提交审批 → OA审批 → 有效</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>选择适用对象</h5>
      <small>客户/区域/<br>分类/省份</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="1" width="10" height="14" rx="1" stroke="white" stroke-width="1.5"/><path d="M6 5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 8H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 11H8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>新建政策</h5>
      <small>填写政策信息<br>设置折扣率</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L10 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 5H11C12.1046 5 13 5.89543 13 7V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M10 11H7C5.89543 11 5 10.1046 5 9V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>添加产品明细</h5>
      <small>导入产品阶梯<br>或手动添加</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#f59e0b,#d97706);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="14" height="10" rx="1" stroke="white" stroke-width="1.5"/><path d="M1 7H12" stroke="white" stroke-width="1.5"/><circle cx="12" cy="10.5" r="1.5" fill="white"/></svg></div>
      <h5>提交审批</h5>
      <small>推送OA审批<br>OA回调处理</small>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">角色</span>
    <h2>谁在做？主要在做什么？</h2>
    <p>集团运营维护折扣政策配置，门店要货时引用</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">角色</th><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">职责</th></tr></thead>
      <tbody>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">集团运营</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">新建/编辑折扣政策，维护适用对象与产品明细，提交OA审批</td></tr>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;">OA审批人</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;">在OA系统中审批折扣政策，通过或驳回</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">上下游</span>
    <h2>上下游依赖关系</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:10px 12px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">上游模块</th><th style="padding:10px 12px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">依赖类型</th><th style="padding:10px 12px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">依赖说明</th></tr></thead>
      <tbody>
        <tr><td style="padding:10px 12px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM产品系统</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数据依赖</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">提供产品信息、产品型号、产品实时价格</td></tr>
        <tr><td style="padding:10px 12px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户档案</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数据依赖</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">提供适用客户信息</td></tr>
        <tr><td style="padding:10px 12px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">区域配置</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数据依赖</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">提供适用区域、省份信息</td></tr>
        <tr><td style="padding:10px 12px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批系统</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">配置依赖</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">推送OA审批表单，接收OA回调结果(单据"YXZT样品折扣政策申请")</td></tr>
        <tr><td style="padding:10px 12px;font-size:.72rem;font-weight:700;color:#111827;">值集配置</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;">配置依赖</td><td style="padding:10px 12px;font-size:.72rem;color:#374151;">政策类型、客户分类、订单类型等值集(epm.policy_type/epm.customer_class)</td></tr>
      </tbody>
    </table>
  </div>
  <div style="margin-top:12px;padding:10px 12px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;font-size:.73rem;color:#065F46;">
    <strong>下游影响：</strong>①政策审批通过后(valid=2)，样品及长库龄要货订单可引用该折扣政策计算折扣；②政策可通过折扣政策失效单发起失效流程，失效后valid=3；③政策审批通过后同步到CRM系统。
  </div>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程图</span>
    <h2>业务流程图</h2>
    <p>选择适用对象 → 新建折扣政策 → 保存政策 → 提交审批 → OA审批 → 有效</p>
  </div>
</div>

<div style="overflow-x:auto;padding:12px 0;white-space:nowrap;">
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr>
      <td style="padding:4px 8px;">
        <div style="background:#E6F1FB;border:2px solid #378ADD;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:600;color:#185FA5;">选择适用对象<br><small style="font-weight:400;">客户/区域/分类/省份</small></div>
      </td>
      <td style="padding:4px 4px;text-align:center;font-size:11px;color:#888780;">→</td>
      <td style="padding:4px 8px;">
        <div style="background:#E6F1FB;border:2px solid #378ADD;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:600;color:#185FA5;">新建折扣政策<br><small style="font-weight:400;">填写政策信息、设置折扣率</small></div>
      </td>
      <td style="padding:4px 4px;text-align:center;font-size:11px;color:#888780;">→</td>
      <td style="padding:4px 8px;">
        <div style="background:#E6F1FB;border:2px solid #378ADD;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:600;color:#185FA5;">保存政策<br><small style="font-weight:400;">添加产品明细、导入产品阶梯</small></div>
      </td>
      <td style="padding:4px 4px;text-align:center;font-size:11px;color:#888780;">→</td>
      <td style="padding:4px 8px;">
        <div style="background:#FEF3C7;border:2px solid #FCD34D;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:600;color:#92400E;">提交审批<br><small style="font-weight:400;">校验政策、推送OA数据</small></div>
      </td>
      <td style="padding:4px 4px;text-align:center;font-size:11px;color:#888780;">→</td>
      <td style="padding:4px 8px;">
        <div style="background:#F0FDF4;border:2px solid #86EFAC;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:600;color:#166534;">OA审批<br><small style="font-weight:400;">审批通过/驳回、OA回调处理</small></div>
      </td>
    </tr>
  </table>
</div>

</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：样品及长库龄来源标识 {来源系统}">
<ul><li><strong>业务意义</strong>：通过sourceType字段区分样品及长库龄折扣政策与工程/家装折扣政策</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：样品及长库龄折扣政策sourceType=YXCRM</li></ul>
<ul><li>第2点：工程/家装折扣政策sourceType=EPMS</li></ul>
<ul><li>第3点：非1、2点折扣政策sourceType=Link</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：政策类型区分 {适用对象}">
<ul><li><strong>业务意义</strong>：折扣政策可按不同维度设置适用对象</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：policyType=1按客户，指定customerId</li></ul>
<ul><li>第2点：policyType=2按区域，指定saleAreaId</li></ul>
<ul><li>第3点：policyType=3按客户分类，指定customerClass</li></ul>
<ul><li>第4点：policyType=4按省份，指定provinceId</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：产品明细导入 {导入功能}">
<ul><li><strong>业务意义</strong>：支持批量导入产品明细和阶梯政策</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：通过Excel文件导入产品明细</li></ul>
<ul><li>第2点：导入时需指定折扣政策ID</li></ul>
<ul><li>第3点：导入后自动生成产品行和阶梯政策行</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：OA审批集成 {OA集成}">
<ul><li><strong>业务意义</strong>：折扣政策走OA审批流程</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：保存并提交时推送OA审批数据</li></ul>
<ul><li>第2点：OA审批通过回调时更新有效状态为有效(valid=2)</li></ul>
<ul><li>第3点：OA审批驳回回调时更新有效状态</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：长库龄业务类型校验 {业务校验}">
<ul><li><strong>业务意义</strong>：校验计划订单业务类型不能为长库龄</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：提交时校验业务类型(businessType)</li></ul>
<ul><li>第2点：长库龄业务类型有特殊校验规则</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：折扣政策列表页">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>政策申请编号</td><td>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td>TextField</td><td>政策编号</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>审核状态</td><td>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td>Select</td><td>审批状态(NEW/RUN/APPROVED/REJECTED)</td><td>常显</td><td>值集HWKF.APPROVE_STATUS</td></tr>
<tr><td>有效状态</td><td>EPM_DISCOUNT_POLICY.VALID</td><td>Select</td><td>有效状态(1未审核/2有效/3失效)</td><td>常显</td><td>值集AE.VALID</td></tr>
<tr><td>政策类型</td><td>EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td>Select</td><td>适用对象类型</td><td>常显</td><td>值集AE.EPM.POLICY_TYPE</td></tr>
<tr><td>创建人</td><td>EPM_DISCOUNT_POLICY.CREATED_BY_NAME</td><td>TextField</td><td>创建人</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>创建时间</td><td>EPM_DISCOUNT_POLICY.CREATION_DATE</td><td>DatePicker</td><td>创建时间</td><td>常显</td><td>日期范围查询</td></tr>
<tr><td>政策名称</td><td>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td>TextField</td><td>政策名称</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>适用客户</td><td>EPM_DISCOUNT_POLICY.CUSTOMER_ALL_NAME</td><td>TextField</td><td>适用客户</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>适用区域</td><td>EPM_DISCOUNT_POLICY.SALE_AREA_NAME</td><td>TextField</td><td>适用区域</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>适用省份</td><td>EPM_DISCOUNT_POLICY.PROVINCE_NAME</td><td>TextField</td><td>适用省份</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>适用客户分类</td><td>EPM_DISCOUNT_POLICY.CUSTOMER_CLASS</td><td>Select</td><td>适用客户分类</td><td>常显</td><td>值集AE.EPM.MAKT.BUSINESS_TYPE</td></tr>
<tr><td>币种</td><td>EPM_DISCOUNT_POLICY.CURRENCY</td><td>TextField</td><td>币种</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>有效开始日期</td><td>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td>DatePicker</td><td>有效开始日期</td><td>常显</td><td>日期范围查询</td></tr>
<tr><td>有效结束日期</td><td>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td>DatePicker</td><td>有效结束日期</td><td>常显</td><td>日期范围查询</td></tr>
<tr><td>批次开始日期</td><td>EPM_DISCOUNT_POLICY.BATCH_START_DATE</td><td>DatePicker</td><td>批次开始日期</td><td>常显</td><td>日期范围查询</td></tr>
<tr><td>批次结束日期</td><td>EPM_DISCOUNT_POLICY.BATCH_END_DATE</td><td>DatePicker</td><td>批次结束日期</td><td>常显</td><td>日期范围查询</td></tr>
<tr><td>累计促销任务量</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_PROMOTION</td><td>Select</td><td>是否累计促销任务量</td><td>常显</td><td>值集AE.MKT.CUMULATIVE_PROMOTION</td></tr>
<tr><td>累计发货类型</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_SHIPMENT</td><td>Select</td><td>累计发货类型</td><td>常显</td><td>值集AE.MKT.ARRCUMULATIVESHIPMENT</td></tr>
<tr><td>累计发货金额</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_AMT</td><td>NumberField</td><td>累计发货金额（万）</td><td>常显</td><td>数值查询</td></tr>
<tr><td>累计发货数量</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_QTY</td><td>NumberField</td><td>累计发货数量</td><td>常显</td><td>数值查询</td></tr>
<tr><td>销售渠道</td><td>EPM_DISCOUNT_POLICY.CHANNEL</td><td>Select</td><td>销售渠道</td><td>常显</td><td>值集AE.MKT.SALES_CHANNEL</td></tr>
<tr><td>计广告费</td><td>EPM_DISCOUNT_POLICY.IS_CAL_AD</td><td>CheckBox</td><td>是否计广告费</td><td>常显</td><td>boolean，trueValue=2，falseValue=1</td></tr>
<tr><td>政策描述</td><td>EPM_DISCOUNT_POLICY.NOTE</td><td>TextField</td><td>政策描述</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>最后更新人</td><td>EPM_DISCOUNT_POLICY.LAST_UPDATED_BY_NAME</td><td>TextField</td><td>最后更新人</td><td>常显</td><td>模糊搜索</td></tr>
<tr><td>最后更新时间</td><td>EPM_DISCOUNT_POLICY.LAST_UPDATE_DATE</td><td>DatePicker</td><td>最后更新时间</td><td>常显</td><td>日期范围查询</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：折扣政策详情页-基本信息（headDS，Form表单）">
<blockquote>字段来源：<code>SampleDiscountPolicy/stores/headDS.ts</code>（476行），Form columns=4布局，isMakt=2固定，suitableType=special固定。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>政策申请编号</td><td>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td>TextField</td><td>政策编号，只读</td><td>始终显示</td><td>系统自动生成，disabled</td></tr>
<tr><td>申请人</td><td>EPM_DISCOUNT_POLICY.CREATED_BY_NAME</td><td>TextField</td><td>申请人</td><td>始终显示</td><td>默认当前登录用户realName</td></tr>
<tr><td>申请时间</td><td>EPM_DISCOUNT_POLICY.CREATION_DATE</td><td>TextField</td><td>申请时间</td><td>始终显示</td><td>默认new Date()</td></tr>
<tr><td>审核状态</td><td>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td>Select</td><td>审批状态</td><td>始终显示</td><td>值集HWKF.APPROVE_STATUS，默认NEW</td></tr>
<tr><td>政策类型</td><td>EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td>Select</td><td>适用对象类型(必填)</td><td>始终显示</td><td>值集AE.EPM.POLICY_TYPE，切换时清空关联字段(customerObj/saleAreaObj/provinceObj/customerClass)</td></tr>
<tr><td>政策名称</td><td>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td>TextField</td><td>政策名称(必填)</td><td>始终显示</td><td>用户输入，maxLength=30</td></tr>
<tr><td>适用事业部Id</td><td>EPM_DISCOUNT_POLICY.DIVISION_ID</td><td>TextField</td><td>事业部ID</td><td>始终显示</td><td>默认当前用户所属事业部DEPT</td></tr>
<tr><td>适用事业部</td><td>EPM_DISCOUNT_POLICY.DIVISION_NAME</td><td>TextField</td><td>事业部名称，只读</td><td>始终显示</td><td>默认当前用户deptName，disabled</td></tr>
<tr><td>订单类型</td><td>EPM_DISCOUNT_POLICY.BILL_TYPE</td><td>Select</td><td>订单类型(必填)</td><td>始终显示</td><td>值集动态：事业部111走AE.EPM.ORDER_CHOOSE_OVERSEAS2，其他走AE.EPM.ORDER_CHOOSE</td></tr>
<tr><td>事业部</td><td>EPM_DISCOUNT_POLICY.ORGANIZATION_ID</td><td>TextField</td><td>事业部ID</td><td>始终显示</td><td>默认当前用户DEPT</td></tr>
<tr><td>订单类型(多选)</td><td>EPM_DISCOUNT_POLICY.BILL_TYPES</td><td>Select</td><td>订单类型多选</td><td>始终显示</td><td>值集AE.DISCOUNT_POLICY_BILL_TYPE，ignore=always，提交时从billType转换</td></tr>
<tr><td>业务类型</td><td>EPM_DISCOUNT_POLICY.BUSINESS_TYPE</td><td>Select</td><td>业务类型(必填)</td><td>始终显示</td><td>值集AE.EPM.MAKT.BUSINESS_TYPE，切换时清空customerObj/saleAreaObj/provinceObj/customerClass</td></tr>
<tr><td>适用客户</td><td>EPM_DISCOUNT_POLICY.CUSTOMER_STR</td><td>TextField</td><td>适用客户名称</td><td>policyType=1时必填</td><td>动态必填</td></tr>
<tr><td>适用区域</td><td>EPM_DISCOUNT_POLICY.SALE_AREA_ID</td><td>Lov(AE.SALE_SALEAREAS)</td><td>适用区域</td><td>policyType=2时必填+可用</td><td>type=object，valueField=areaid，lovPara&#123;useType=2,isuseable=2&#125;，ignore=always；绑定saleAreaId/saleAreaCode/saleAreaName</td></tr>
<tr><td>适用省份</td><td>EPM_DISCOUNT_POLICY.PROVINCE_ID</td><td>Lov(AE.APPLY_SCPAREA)</td><td>适用省份</td><td>policyType=4时必填+可用</td><td>type=object，valueField=areaid，lovPara&#123;areatype=4&#125;，ignore=always；绑定provinceId/provinceName</td></tr>
<tr><td>适用客户分类</td><td>EPM_DISCOUNT_POLICY.CUSTOMER_CLASS</td><td>Select</td><td>适用客户分类</td><td>policyType=3时必填+可用</td><td>值集AE.APPLICABLE_CUSTOMER_CLASS</td></tr>
<tr><td>有效开始日期</td><td>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td>DatePicker</td><td>有效开始日期(必填)</td><td>始终显示</td><td>min=当前日期，max=年底</td></tr>
<tr><td>有效结束日期</td><td>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td>DatePicker</td><td>有效结束日期(必填)</td><td>始终显示</td><td>min=开始日期，max=年底，未选择开始日期时禁用</td></tr>
<tr><td>销售渠道</td><td>EPM_DISCOUNT_POLICY.CHANNEL</td><td>Select</td><td>销售渠道(必填)</td><td>始终显示</td><td>值集AE.MKT.SALES_CHANNEL</td></tr>
<tr><td>政策描述</td><td>EPM_DISCOUNT_POLICY.NOTE</td><td>TextArea</td><td>政策描述</td><td>始终显示</td><td>用户输入</td></tr>
<tr><td>累计促销任务量</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_PROMOTION</td><td>Select</td><td>是否累计促销任务量</td><td>始终显示</td><td>值集AE.MKT.CUMULATIVE_PROMOTION，切换时清空cumulativeShipment/cumulativeAmt/cumulativeQty</td></tr>
<tr><td>累计发货类型</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_SHIPMENT</td><td>Select</td><td>累计发货类型</td><td>有累计促销任务量时必填+可用</td><td>值集AE.MKT.ARRCUMULATIVESHIPMENT</td></tr>
<tr><td>累计发货金额(万)</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_AMT</td><td>NumberField</td><td>累计发货金额(万)</td><td>cumulativeShipment=1时必填+可用</td><td>number type</td></tr>
<tr><td>累计发货数量</td><td>EPM_DISCOUNT_POLICY.CUMULATIVE_QTY</td><td>NumberField</td><td>累计发货数量</td><td>cumulativeShipment=2时必填+可用</td><td>number type</td></tr>
<tr><td>计广告费</td><td>EPM_DISCOUNT_POLICY.IS_CAL_AD</td><td>CheckBox</td><td>是否计广告费</td><td>始终显示</td><td>boolean，trueValue=2，falseValue=1，默认1；businessType=3/16时禁用</td></tr>
<tr><td>币种(LOV)</td><td>EPM_DISCOUNT_POLICY.CURRENCY</td><td>Lov(HPFM.CURRENCY)</td><td>币种选择(必填)</td><td>始终显示</td><td>type=object，valueField=currencyCode，lovPara&#123;tenantId=0&#125;，ignore=always</td></tr>
<tr><td>批次开始日期</td><td>EPM_DISCOUNT_POLICY.BATCH_START_DATE</td><td>DatePicker</td><td>批次开始日期</td><td>始终显示</td><td>max=批次结束日期</td></tr>
<tr><td>批次结束日期</td><td>EPM_DISCOUNT_POLICY.BATCH_END_DATE</td><td>DatePicker</td><td>批次结束日期</td><td>始终显示</td><td>min=批次开始日期</td></tr>
<tr><td>政策分析说明</td><td>EPM_DISCOUNT_POLICY.POLICY_ANALYSIS_DESCRIPTION</td><td>TextField</td><td>政策分析说明，只读</td><td>始终显示</td><td>disabled=true，后端计算返回</td></tr>
<tr><td>备注</td><td>EPM_DISCOUNT_POLICY.REMARK</td><td>TextField</td><td>备注</td><td>始终显示</td><td>用户输入</td></tr>
<tr><td>来源系统</td><td>EPM_DISCOUNT_POLICY.SOURCE_TYPE</td><td>隐藏</td><td>固定值YXCRM</td><td>隐藏</td><td>提交时固定写入isMakt=2、suitableType=special</td></tr>
<tr><td>有效状态</td><td>EPM_DISCOUNT_POLICY.VALID</td><td>TextField</td><td>有效状态</td><td>始终显示</td><td>1=未审核，2=有效，3=失效</td></tr>
<tr><td>审批状态</td><td>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td>TextField</td><td>审批状态</td><td>始终显示</td><td>NEW/RUN/APPROVED/REJECTED</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块3：产品明细列表（LineDS，EPM_DISCOUNT_POLICY_ITEM）">
<blockquote>字段来源：<code>SampleDiscountPolicy/stores/LineDS.ts</code>，28个字段定义，Table表格展示，与headDS通过children关联。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>申请类型</td><td>EPM_DISCOUNT_POLICY_ITEM.APPLICATION_TYPE</td><td>Select</td><td>产品/型号/全产品</td><td>始终显示</td><td>值集AE.EPM.APPLICATION_TYPE，必填，1=产品2=型号3=全产品</td></tr>
<tr><td>新品</td><td>EPM_DISCOUNT_POLICY_ITEM.NEW_PROD_FLAG</td><td>TextField</td><td>是否新品标记</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>产品定位</td><td>EPM_DISCOUNT_POLICY_ITEM.PROD_POSITIONING</td><td>TextField</td><td>产品定位</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>优惠方式</td><td>EPM_DISCOUNT_POLICY_ITEM.PREFERENTIAL_TYPE</td><td>Select</td><td>折扣/特价</td><td>始终显示</td><td>值集AE.EPM.PREFERENTIAL_TYPE</td></tr>
<tr><td>产品编码(LOV)</td><td>-</td><td>Lov(AE.GET_CRM_ITEM)</td><td>CRM产品选择</td><td>申请类型=产品</td><td>多选，valueField=itemCode，applicationType=1时必填、applicationType=2/3时禁用；lovPara传channel/currency/divisionId/customerCode/isMakt=2/inAccount=2/flag=2/prodChooseControlFlag=2/type=1/isHome=1/suitableType=special</td></tr>
<tr><td>产品编码</td><td>EPM_DISCOUNT_POLICY_ITEM.ITEM_CODE</td><td>TextField</td><td>产品编码</td><td>始终显示</td><td>从LOV联动带入</td></tr>
<tr><td>产品名称</td><td>EPM_DISCOUNT_POLICY_ITEM.ITEM_NAME</td><td>TextField</td><td>产品名称</td><td>始终显示</td><td>从LOV联动带入</td></tr>
<tr><td>产品型号(LOV)</td><td>-</td><td>Lov(AE.GET_MODEL)</td><td>产品型号选择</td><td>申请类型=型号</td><td>多选，valueField=itemModel，applicationType=2时必填、applicationType=1/3时禁用</td></tr>
<tr><td>产品型号</td><td>EPM_DISCOUNT_POLICY_ITEM.ITEM_MODEL</td><td>TextField</td><td>产品型号</td><td>始终显示</td><td>从LOV联动带入</td></tr>
<tr><td>生命状态</td><td>EPM_DISCOUNT_POLICY_ITEM.SM_STATE</td><td>TextField</td><td>产品生命状态</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>库龄区间</td><td>EPM_DISCOUNT_POLICY_ITEM.STOCK_AGE_NUM_STR</td><td>TextField</td><td>库龄区间</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>月平均动销数量</td><td>EPM_DISCOUNT_POLICY_ITEM.AVG_MONTH_DYNAMIC_SALE_NUM</td><td>NumberField</td><td>月平均动销数量</td><td>applicationType=1时显示</td><td>applicationType=1显示数值，否则置空</td></tr>
<tr><td>库存消化周期</td><td>EPM_DISCOUNT_POLICY_ITEM.INVENTORY_DIGESTION_MONTHS</td><td>NumberField</td><td>库存消化周期(月)</td><td>applicationType=1时显示</td><td>applicationType=1显示数值，否则置空</td></tr>
<tr><td>计广告费</td><td>EPM_DISCOUNT_POLICY_ITEM.CAL_ADVERTISE_EXPENSES</td><td>CheckBox</td><td>是否计广告费</td><td>始终显示</td><td>boolean，trueValue=2，falseValue=1，默认1</td></tr>
<tr><td>计开单折扣</td><td>EPM_DISCOUNT_POLICY_ITEM.CAL_BILLING_DISCOUNT</td><td>CheckBox</td><td>是否计开单折扣</td><td>始终显示</td><td>boolean，trueValue=2，falseValue=1，默认1</td></tr>
<tr><td>单位</td><td>EPM_DISCOUNT_POLICY_ITEM.UOM_NAME</td><td>TextField</td><td>计量单位</td><td>始终显示</td><td>从LOV联动带入</td></tr>
<tr><td>标准单价(含安装)</td><td>EPM_DISCOUNT_POLICY_ITEM.STAND_PRICE</td><td>NumberField</td><td>含安装标准单价</td><td>始终显示</td><td>后端返回，值为0时不显示</td></tr>
<tr><td>安装单价</td><td>EPM_DISCOUNT_POLICY_ITEM.INSTALL_UNIT_PRICE</td><td>NumberField</td><td>安装单价</td><td>始终显示</td><td>后端返回，值为0时不显示</td></tr>
<tr><td>标准单价(不含安装)</td><td>EPM_DISCOUNT_POLICY_ITEM.STANDARD_PRICE</td><td>NumberField</td><td>不含安装标准单价</td><td>始终显示</td><td>后端返回，值为null时显示0</td></tr>
<tr><td>成本</td><td>EPM_DISCOUNT_POLICY_ITEM.ITEM_COST</td><td>NumberField</td><td>物料实际成本单价</td><td>始终显示</td><td>通过接口取各事业部平均成本</td></tr>
<tr><td>政策封顶总数量行</td><td>EPM_DISCOUNT_POLICY_ITEM.TOTAL_CAP_NUMBER</td><td>NumberField</td><td>政策封顶总数量行</td><td>始终显示</td><td>用户输入，min=0，precision=0</td></tr>
<tr><td>单个经销商封顶数量校验</td><td>EPM_DISCOUNT_POLICY_ITEM.CAPPING</td><td>CheckBox</td><td>是否启用封顶数量校验</td><td>始终显示</td><td>boolean，trueValue=2，falseValue=1，默认1</td></tr>
<tr><td>单个经销商封顶数量</td><td>EPM_DISCOUNT_POLICY_ITEM.CUSTOMER_CAPS_NUMBER</td><td>NumberField</td><td>单个经销商封顶数量</td><td>capping=true时显示</td><td>必填，precision=0，min=0，校验：政策封顶总数量行必须大于单个经销商封顶数量</td></tr>
<tr><td>是否已终止</td><td>EPM_DISCOUNT_POLICY_ITEM.VALID_STAT</td><td>NumberField</td><td>生效状态</td><td>始终显示</td><td>默认0</td></tr>
<tr><td>备注</td><td>EPM_DISCOUNT_POLICY_ITEM.REMARK</td><td>TextField</td><td>产品行备注</td><td>始终显示</td><td>用户输入</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块4：阶梯政策明细列表（InfoDS，EPM_DISCOUNT_POLICY_ITEM_LINE）">
<blockquote>字段来源：<code>SampleDiscountPolicy/stores/InfoDS.ts</code>，6个字段定义，嵌入在产品行下方展开显示，与LineDS通过children关联。</blockquote>
<blockquote>每个产品明细行下可展开多行阶梯政策（坎级），按起订量区间设置不同折扣率/特价。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>起订量</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.MINIMUM_QTY</td><td>NumberField</td><td>阶梯起订数量(下限)</td><td>始终显示</td><td>用户输入，min=1，step=1，值为0时不显示</td></tr>
<tr><td>封顶量</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.CAPPING_QTY</td><td>NumberField</td><td>阶梯封顶数量(上限)</td><td>始终显示</td><td>用户输入，min=1，step=1，值为0时不显示</td></tr>
<tr><td>特价</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.SPECIAL_OFFER</td><td>NumberField</td><td>特价金额</td><td>优惠方式=特价时必填+可用</td><td>用户输入，precision=3，min=0.001；优惠方式=折扣时禁用</td></tr>
<tr><td>折扣率</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.DISCOUNT_RATE</td><td>NumberField</td><td>折扣率</td><td>优惠方式=折扣时必填+可用</td><td>用户输入，precision=3，min=0.001；优惠方式=特价时禁用</td></tr>
<tr><td>价值链</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.VALUE_CHAIN</td><td>NumberField</td><td>价值链</td><td>始终显示</td><td>用户输入</td></tr>
<tr><td>警戒线提醒</td><td>EPM_DISCOUNT_POLICY_ITEM_LINE.EPM_DPIL_EXT.WARNNING_LINE_MSG</td><td>TextField</td><td>警戒线提醒信息</td><td>始终显示</td><td>从epmDpilExt扩展表获取，后端返回</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<h4>弹窗1：CRM产品选择弹窗（多选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>organizationId</td><td>事业部ID</td><td>当前事业部</td><td>100</td><td>CRM系统中生效的产品</td></tr>
<tr><td>itemCode</td><td>产品编码</td><td>搜索关键词</td><td>ASC-001</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL（后端接口：CRM产品查询接口invokeCrmProd）：</blockquote>
<pre class="detail-sql" v-pre><code>-- 调用CRM系统产品查询接口
SELECT product_id, product_code, product_name, item_model, unit_price
FROM crm_product_info WHERE organization_id = #{organizationId} AND status = 'ACTIVE';</code></pre>
<h4>弹窗2：产品型号选择弹窗（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>itemModel</td><td>产品型号</td><td>搜索关键词</td><td>MODEL-A</td><td>对应产品的型号列表</td></tr>
</tbody>
</table>
<blockquote>查询SQL（后端接口：getModel）：</blockquote>
<pre class="detail-sql" v-pre><code>SELECT item_model_id, item_model, model_name FROM epm_item_model WHERE item_model LIKE #{itemModel};</code></pre>
</KbCard>

<KbCard title="导入">
<h4>前置约定</h4>
<ul><li>文件样例：Excel文件，包含产品编码、产品名称、型号、折扣率、阶梯数量、阶梯金额等列</li><li>格式与文件大小限制：标准Excel格式</li></ul>
<h4>字段映射</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段含义</th><th>是否必输</th><th>字段格式</th><th>重复判定字段</th></tr>
</thead>
<tbody>
<tr><td>产品编码</td><td>是</td><td>文本</td><td>产品编码+型号</td></tr>
<tr><td>产品名称</td><td>是</td><td>文本</td><td>-</td></tr>
<tr><td>型号</td><td>否</td><td>文本</td><td>-</td></tr>
<tr><td>折扣率</td><td>是</td><td>数值(0-1)</td><td>-</td></tr>
<tr><td>阶梯数量</td><td>否</td><td>数值</td><td>-</td></tr>
<tr><td>阶梯金额</td><td>否</td><td>数值</td><td>-</td></tr>
</tbody>
</table>
<h4>处理逻辑</h4>
<ul><li><strong>校验逻辑</strong>：校验产品编码是否存在、折扣率范围是否合法</li><li><strong>导入逻辑</strong>：解析Excel→校验产品→生成产品行和阶梯政策行</li><li><strong>重复处理策略</strong>：报错</li><li><strong>性能方案</strong>：同步处理</li></ul>
<h4>异常与结果约定</h4>
<ul><li>部分成功/失败时回滚整个导入</li><li>结果反馈：返回导入成功明细列表</li></ul>
<h4>运维保障</h4>
<ul><li>日志记录：记录导入操作日志</li><li>断点续传/重试机制：不支持，需重新导入</li></ul>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>新建</td><td>新建折扣政策</td><td>列表页</td><td>常显</td><td>跳转新建页面</td></tr>
<tr><td>保存</td><td>保存政策</td><td>详情页</td><td>常显</td><td>保存到EPM_DISCOUNT_POLICY</td></tr>
<tr><td>保存并提交</td><td>保存并提交审批</td><td>详情页</td><td>审批状态为NEW</td><td>保存后推送OA审批，发起工作流</td></tr>
<tr><td>导入产品</td><td>导入产品明细</td><td>详情页</td><td>常显</td><td>调用importProduct接口</td></tr>
<tr><td>获取价格</td><td>获取产品实时价格</td><td>详情页</td><td>已选产品</td><td>调用getPrices接口</td></tr>
<tr><td>删除</td><td>删除政策</td><td>列表页</td><td>有效状态=未审核</td><td>调用delete接口</td></tr>
<tr><td>导出</td><td>导出政策列表</td><td>列表页</td><td>常显</td><td>调用导出接口</td></tr>
</tbody>
</table>
<h4>按钮1：保存并提交（详情页）</h4>
<ul><li><strong>触发条件</strong>：审批状态为NEW</li><li><strong>执行逻辑</strong>：</li><li>第1点：保存政策头和产品明细行</li><li>第2点：校验政策数据完整性</li><li>第3点：推送OA审批数据</li><li>第4点：发起工作流</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/epm-discount-policy/save-and-submit</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id, discount_policy_code, valid, hz_approve_status, source_type
FROM epm_discount_policy WHERE discount_policy_id = {id};</code></pre>
<h4>按钮2：导入产品（详情页）</h4>
<ul><li><strong>触发条件</strong>：常显</li><li><strong>执行逻辑</strong>：</li><li>第1点：上传Excel文件</li><li>第2点：解析文件内容，校验产品编码</li><li>第3点：生成产品明细行和阶梯政策行</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/epm-discount-policy/importProduct</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT * FROM epm_discount_policy_item WHERE discount_policy_id = {id};</code></pre>
<h4>按钮3：删除（列表页）</h4>
<ul><li><strong>触发条件</strong>：有效状态为未审核(valid=1)</li><li><strong>执行逻辑</strong>：</li><li>第1点：校验政策状态为未审核</li><li>第2点：级联删除政策头和产品明细行</li><li><strong>接口调用</strong>：DELETE /v1/&#123;organizationId&#125;/epm-discount-policy</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id, valid FROM epm_discount_policy WHERE discount_policy_id IN ({ids});</code></pre>
</KbCard>

<KbCard title="保存校验">
<ul><li>校验1：政策类型校验 —— 确保按政策类型填写对应适用对象</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：policyType=1时customerId不能为空</p>
<p>- 第2点：policyType=2时saleAreaId不能为空</p>
<p>- 第3点：policyType=3时customerClass不能为空</p>
<p>- 第4点：policyType=4时provinceId不能为空</p>
<ul><li>系统体现：阻断性报错</li></ul>
<ul><li>排查SQL：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT policy_type, customer_id, sale_area_id, customer_class, province_id
    FROM epm_discount_policy WHERE discount_policy_id = {id};</code></pre>
</KbCard>

<KbCard title="提交校验">
<ul><li>校验1：产品明细非空校验 —— 确保政策有产品明细行</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：查询EPM_DISCOUNT_POLICY_ITEM表中该政策的明细行</p>
<p>- 第2点：明细为空时不允许提交</p>
<ul><li>系统体现：阻断性报错</li></ul>
<ul><li>排查SQL：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT COUNT(*) FROM epm_discount_policy_item WHERE discount_policy_id = {id};</code></pre>
<ul><li>校验2：长库龄业务类型校验 —— 校验业务类型合法性</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：校验计划订单业务类型不能为长库龄</p>
<ul><li>系统体现：阻断性报错</li></ul>
<ul><li>排查SQL：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT business_type FROM epm_discount_policy WHERE discount_policy_id = {id};</code></pre>
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>
<pre class="lang-text" v-pre><code>未审核(valid=1) ──提交──→ RUN(审批中) ──OA审批通过──→ 有效(valid=2)
                              │
                              │OA审批驳回
                              ↓
                         未审核(valid=1)

有效(valid=2) ──发起失效──→ 失效流程 ──审批通过──→ 失效(valid=3)</code></pre>
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>未审核(valid=1)</td><td>新建未提交或被驳回</td><td>编辑、保存、提交、删除</td></tr>
<tr><td>RUN(审批中)</td><td>OA审批中</td><td>无（等待OA审批结果）</td></tr>
<tr><td>有效(valid=2)</td><td>已审批通过</td><td>发起失效</td></tr>
<tr><td>失效(valid=3)</td><td>已失效</td><td>无</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：EPM_DISCOUNT_POLICY（折扣政策主表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>DISCOUNT_POLICY_ID</td><td>NUMBER</td><td>政策ID</td><td>-</td><td>主键，自增</td></tr>
<tr><td>DISCOUNT_POLICY_CODE</td><td>VARCHAR2</td><td>政策单号</td><td>政策单号</td><td>自动生成</td></tr>
<tr><td>DISCOUNT_POLICY_NAME</td><td>VARCHAR2</td><td>政策名称</td><td>政策名称</td><td>用户输入</td></tr>
<tr><td>POLICY_TYPE</td><td>NUMBER</td><td>政策类型</td><td>政策类型</td><td>1=客户，2=区域，3=客户分类，4=省份</td></tr>
<tr><td>CUSTOMER_ID</td><td>NUMBER</td><td>适用客户ID</td><td>适用客户</td><td>policyType=1时必填</td></tr>
<tr><td>SALE_AREA_ID</td><td>NUMBER</td><td>适用区域ID</td><td>适用区域</td><td>policyType=2时必填</td></tr>
<tr><td>SALE_AREA_NAME</td><td>VARCHAR2</td><td>适用区域名称</td><td>适用区域</td><td>从区域配置带入</td></tr>
<tr><td>PROVINCE_ID</td><td>NUMBER</td><td>省份ID</td><td>适用省份</td><td>policyType=4时必填</td></tr>
<tr><td>PROVINCE_NAME</td><td>VARCHAR2</td><td>省份名称</td><td>适用省份</td><td>从省份配置带入</td></tr>
<tr><td>CUSTOMER_CLASS</td><td>NUMBER</td><td>客户分类</td><td>客户分类</td><td>1=内部客户，2=外部客户</td></tr>
<tr><td>EFFECTIVE_DATE_START</td><td>DATE</td><td>有效开始日期</td><td>有效开始日期</td><td>用户选择</td></tr>
<tr><td>EFFECTIVE_DATE_END</td><td>DATE</td><td>有效结束日期</td><td>有效结束日期</td><td>用户选择</td></tr>
<tr><td>VALID</td><td>NUMBER</td><td>有效状态</td><td>有效状态</td><td>1=未审核，2=有效，3=失效</td></tr>
<tr><td>STAT</td><td>NUMBER</td><td>单据状态</td><td>单据状态</td><td>-</td></tr>
<tr><td>BILL_TYPE</td><td>NUMBER</td><td>订单类型</td><td>-</td><td>-</td></tr>
<tr><td>BILL_TYPES</td><td>VARCHAR2</td><td>订单类型(多选)</td><td>订单类型</td><td>逗号分隔</td></tr>
<tr><td>BUSINESS_TYPE</td><td>NUMBER</td><td>业务类型</td><td>业务类型</td><td>来源值集</td></tr>
<tr><td>IS_CAL_SECOND_YEAR_DISCOUNT</td><td>NUMBER</td><td>计次年折扣</td><td>计次年折扣</td><td>-</td></tr>
<tr><td>IS_CAL_AD</td><td>NUMBER</td><td>计广告费</td><td>计广告费</td><td>-</td></tr>
<tr><td>ISTASKS</td><td>NUMBER</td><td>是否累计促销任务量</td><td>是否累计促销任务量</td><td>-</td></tr>
<tr><td>CUMULATIVETASKS</td><td>NUMBER</td><td>累计任务量</td><td>-</td><td>-</td></tr>
<tr><td>CONTRACT_ID</td><td>NUMBER</td><td>协议ID</td><td>-</td><td>关联协议</td></tr>
<tr><td>CONTRACT_CODE</td><td>VARCHAR2</td><td>协议编码</td><td>-</td><td>-</td></tr>
<tr><td>CONTRACT_NAME</td><td>VARCHAR2</td><td>协议名称</td><td>-</td><td>-</td></tr>
<tr><td>INTEGRATED_VALUE_CHAIN</td><td>DECIMAL</td><td>整单价值链</td><td>-</td><td>-</td></tr>
<tr><td>IS_MAKT</td><td>NUMBER</td><td>是否营销中台</td><td>-</td><td>-</td></tr>
<tr><td>CHANNEL</td><td>NUMBER</td><td>渠道</td><td>-</td><td>-</td></tr>
<tr><td>HEAD_PREFERENTIAL_TYPE</td><td>NUMBER</td><td>产品优惠方式</td><td>产品优惠方式</td><td>来源值集</td></tr>
<tr><td>HEAD_DISCOUNT_RATE</td><td>DECIMAL</td><td>默认折扣率</td><td>默认折扣率</td><td>用户输入</td></tr>
<tr><td>CURRENCY</td><td>VARCHAR2</td><td>币种</td><td>币种</td><td>来源值集</td></tr>
<tr><td>SUITABLE_TYPE</td><td>VARCHAR2</td><td>适用类型</td><td>适用类型</td><td>normal=通用，special=专项</td></tr>
<tr><td>SOURCE_TYPE</td><td>VARCHAR2</td><td>来源系统</td><td>来源系统</td><td>样品及长库龄=YXCRM</td></tr>
<tr><td>DIVISION_ID</td><td>NUMBER</td><td>适用事业部ID</td><td>-</td><td>-</td></tr>
<tr><td>DIVISION_NAME</td><td>VARCHAR2</td><td>适用事业部</td><td>适用事业部</td><td>-</td></tr>
<tr><td>NOTE</td><td>VARCHAR2</td><td>政策描述</td><td>政策描述</td><td>用户输入</td></tr>
<tr><td>CREATOR</td><td>VARCHAR2</td><td>创建人</td><td>创建人</td><td>系统自动记录</td></tr>
<tr><td>CREATETIME</td><td>DATE</td><td>创建时间</td><td>创建时间</td><td>系统自动记录</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>VARCHAR2</td><td>审批状态</td><td>审批状态</td><td>NEW/RUN/APPROVED/REJECTED</td></tr>
<tr><td>HZ_INSTANCE_ID</td><td>NUMBER</td><td>审批实例ID</td><td>-</td><td>工作流实例ID</td></tr>
<tr><td>CALLBACK_SOURCE</td><td>VARCHAR2</td><td>回调来源</td><td>-</td><td>1=OA通过，2=OA驳回</td></tr>
<tr><td>ORGANIZATION_ID</td><td>NUMBER</td><td>组织ID</td><td>-</td><td>当前事业部</td></tr>
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
<tr><td>折扣政策id不能为空</td><td>导入产品</td><td>未指定折扣政策ID，先保存政策</td><td>阻断性报错</td><td>[查看](#报错1折扣政策id不能为空)</td></tr>
<tr><td>推送OA失败：折扣政策不存在</td><td>OA推送</td><td>政策已被删除，刷新列表</td><td>阻断性报错</td><td>[查看](#报错2推送oa失败折扣政策不存在)</td></tr>
<tr><td>OA回调失败：折扣政策不存在</td><td>OA回调</td><td>政策已被删除</td><td>阻断性报错</td><td>[查看](#报错3oa回调失败折扣政策不存在)</td></tr>
<tr><td>产品行不能为空，请检查！</td><td>保存/提交</td><td>政策未维护产品明细行，先添加产品行</td><td>阻断性报错</td><td>[查看](#报错4产品行不能为空请检查)</td></tr>
<tr><td>订单类型为【计划订单】,业务类型不能为【长库龄】</td><td>保存校验</td><td>计划订单不允许长库龄业务类型，调整订单类型或业务类型</td><td>阻断性报错</td><td>[查看](#报错5订单类型为计划订单业务类型不能为长库龄)</td></tr>
<tr><td>折扣政策名称最大输入30个字符</td><td>保存</td><td>政策名称超长，缩短名称</td><td>阻断性报错</td><td>[查看](#报错6折扣政策名称最大输入30个字符)</td></tr>
<tr><td>物料明细不能为空</td><td>保存</td><td>适用类型为通用时物料明细为空，添加物料明细</td><td>阻断性报错</td><td>[查看](#报错7物料明细不能为空)</td></tr>
<tr><td>适用类型为"通用"时，产品优惠方式只能为"折扣"</td><td>保存</td><td>通用适用类型仅支持折扣优惠方式，调整优惠方式</td><td>阻断性报错</td><td>[查看](#报错8适用类型为通用时产品优惠方式只能为折扣)</td></tr>
<tr><td>在该时间区间内：...</td><td>保存</td><td>政策有效区间与已有政策重复，调整有效区间</td><td>阻断性报错</td><td>[查看](#报错9在该时间区间内)</td></tr>
<tr><td>未找到该单据</td><td>删除</td><td>政策不存在或已被删除，刷新列表</td><td>阻断性报错</td><td>[查看](#报错10未找到该单据)</td></tr>
<tr><td>仅新建状态单据允许删除.</td><td>删除</td><td>政策非新建状态不可删除，仅未审核政策可删除</td><td>阻断性报错</td><td>[查看](#报错11仅新建状态单据允许删除)</td></tr>
<tr><td>导入数量不能超过&#123;pageSize&#125;</td><td>导入产品</td><td>导入行数超限，分批导入</td><td>阻断性报错</td><td>[查看](#报错12导入数量不能超过pagesize)</td></tr>
<tr><td>导入的产品编码查询不到对应的产品信息：&#123;codes&#125;</td><td>导入产品</td><td>产品编码在CRM不存在，核对产品编码</td><td>阻断性报错</td><td>[查看](#报错13导入的产品编码查询不到对应的产品信息codes)</td></tr>
<tr><td>产品导入异常，请联系管理员！</td><td>导入产品</td><td>导入过程系统异常，联系管理员排查日志</td><td>阻断性报错</td><td>[查看](#报错14产品导入异常请联系管理员)</td></tr>
<tr><td>请先维护OA系统信息</td><td>保存并提交</td><td>OA系统参数未配置，联系管理员维护OA配置</td><td>阻断性报错</td><td>[查看](#报错15请先维护oa系统信息)</td></tr>
<tr><td>流程编码不能为空。</td><td>保存并提交</td><td>OA流程编码缺失，配置对应流程编码</td><td>阻断性报错</td><td>[查看](#报错16流程编码不能为空)</td></tr>
<tr><td>以下型号涉及新品，不允许通过型号定义折扣政策，请通过具体产品编码制定折扣政策</td><td>保存</td><td>新品型号不能定义政策，改用具体产品编码</td><td>阻断性报错</td><td>[查看](#报错17以下型号涉及新品不允许通过型号定义折扣政策请通过具体产品编码制定折扣政策)</td></tr>
<tr><td>产品编码:[&#123;code&#125;] 与型号：[&#123;model&#125;] 折扣政策冲突</td><td>保存</td><td>同一产品编码与型号存在多个政策冲突，核对政策行</td><td>阻断性报错</td><td>[查看](#报错18产品编码code-与型号model-折扣政策冲突)</td></tr>
<tr><td>产品【&#123;code&#125;】本次下单数量【&#123;qty&#125;】，超过政策该经销商剩余可下单数量【&#123;activeQty&#125;】，请检查！</td><td>下单校验</td><td>该经销商可下单数量不足，调整下单数量或联系区域经理</td><td>阻断性报错</td><td>[查看](#报错19产品code本次下单数量qty超过政策该经销商剩余可下单数量activeqty请检查)</td></tr>
<tr><td>产品【&#123;code&#125;】本次下单数量【&#123;qty&#125;】，超过政策全部经销商剩余可下单数量【&#123;activeQty&#125;】，请检查！</td><td>下单校验</td><td>全部经销商可下单数量不足，调整下单数量或联系区域经理</td><td>阻断性报错</td><td>[查看](#报错20产品code本次下单数量qty超过政策全部经销商剩余可下单数量activeqty请检查)</td></tr>
<tr><td>请求CRM返回数据解析异常！</td><td>获取价格</td><td>CRM接口返回数据格式异常，联系管理员排查CRM接口</td><td>阻断性报错</td><td>[查看](#报错21请求crm返回数据解析异常)</td></tr>
<tr><td>产品编码[&#123;code&#125;]请求CRM获取失败原因:[&#123;msg&#125;]</td><td>获取价格</td><td>CRM产品查询失败，核对产品编码或联系CRM管理员</td><td>阻断性报错</td><td>[查看](#报错22产品编码code请求crm获取失败原因msg)</td></tr>
<tr><td>Crm返回产品政策信息为空</td><td>获取价格</td><td>CRM未返回产品政策信息，核对产品是否配置政策</td><td>阻断性报错</td><td>[查看](#报错23crm返回产品政策信息为空)</td></tr>
<tr><td>客户的签约方式存在异常，请检查</td><td>保存</td><td>客户签约方式数据异常，核对客户档案签约方式</td><td>阻断性报错</td><td>[查看](#报错24客户的签约方式存在异常请检查)</td></tr>
</tbody>
</table>
<h4>报错1：折扣政策id不能为空</h4>
<ul><li><strong>触发条件</strong>：点击"导入产品"按钮，调用importProduct接口时，传入的折扣政策ID（discountPolicyId）为null或0</li><li><strong>逻辑分析</strong>：导入产品明细需关联到具体折扣政策。若用户在政策头未保存（主键DISCOUNT_POLICY_ID未生成）时直接导入产品，或前端未传discountPolicyId字段，后端校验为空即抛异常，无法将产品明细挂载到政策。常见根因：用户未先保存政策头、保存失败后误点导入、或前端传参丢失。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         discount_policy_name  AS 政策名称,
         valid                 AS 有效状态,
         hz_approve_status     AS 审批状态
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    (discount_policy_id IS NULL OR discount_policy_id = 0)
  ORDER  BY createtime DESC;</code></pre>
<h4>报错2：推送OA失败：折扣政策不存在</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮推送OA时，按discountPolicyId查询EPM_DISCOUNT_POLICY返回null</li><li><strong>逻辑分析</strong>：OA推送前需查询政策单组装数据。若单据在推送前被其他用户删除（物理删除），或discountPolicyId传值错误，查询返回空，无法组装OA数据导致推送失败。常见根因：并发操作删除政策、传参错误、或事务未提交即调用OA推送。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         valid                 AS 有效状态,
         hz_approve_status     AS 审批状态
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{传入的discountPolicyId};</code></pre>
<h4>报错3：OA回调失败：折扣政策不存在</h4>
<ul><li><strong>触发条件</strong>：OA审批完成回调DMS时，按回调报文中的discountPolicyId查询EPM_DISCOUNT_POLICY返回null</li><li><strong>逻辑分析</strong>：OA回调处理需更新政策有效状态（通过则valid=2，驳回则维持未审核）。若回调期间政策被删除，或OA回调报文的单据ID与DMS不一致（如OA配置错误、ID映射异常），查询返回空，回调处理失败，有效状态无法更新。常见根因：政策被并发删除、OA配置错误、或回调报文ID丢失。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         valid                 AS 有效状态,
         hz_approve_status     AS 审批状态,
         hz_instance_id        AS 工作流实例ID,
         callback_source       AS 回调来源
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{OA回调报文中的discountPolicyId};</code></pre>
<h4>报错4：产品行不能为空，请检查！</h4>
<ul><li><strong>触发条件</strong>：点击"保存"或"保存并提交"按钮，checkProductLine校验时，EPM_DISCOUNT_POLICY_ITEM中该政策的产品明细行为空或全部被标记删除</li><li><strong>逻辑分析</strong>：折扣政策必须包含至少一行产品明细才能提交审批，否则OA审批无产品数据可推送。校验逻辑查询EPM_DISCOUNT_POLICY_ITEM中DISCOUNT_POLICY_ID对应且未删除的行，若为空则抛异常。常见根因：用户未导入产品或未添加产品行、产品行被全部删除、或导入产品失败后误点提交。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dp.discount_policy_id    AS 政策ID,
         dp.discount_policy_code  AS 政策单号,
         dp.hz_approve_status     AS 审批状态,
         COUNT(dpi.discount_policy_item_id) AS 产品行数
  FROM   epm_discount_policy dp
  LEFT   JOIN epm_discount_policy_item dpi
         ON dpi.discount_policy_id = dp.discount_policy_id
        AND dpi._status &lt;&gt; 'delete'
  WHERE  dp.source_type = 'YXCRM'
  GROUP  BY dp.discount_policy_id, dp.discount_policy_code, dp.hz_approve_status
  HAVING COUNT(dpi.discount_policy_item_id) = 0;</code></pre>
<h4>报错5：订单类型为【计划订单】,业务类型不能为【长库龄】</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验长库龄业务类型时，IS_MAKT=2且BILL_TYPE=2(计划订单)或99且BUSINESS_TYPE=16(长库龄)</li><li><strong>逻辑分析</strong>：长库龄业务类型(BUSINESS_TYPE=16)仅适用于常规订单，计划订单(BILL_TYPE=2或99)不允许设置为长库龄业务类型。校验逻辑读取EPM_DISCOUNT_POLICY的BILL_TYPE和BUSINESS_TYPE，组合非法即抛异常。常见根因：用户误将计划订单与长库龄业务类型组合、或前端未做组合校验。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         bill_type             AS 订单类型,
         business_type         AS 业务类型,
         is_makt               AS 样品标识
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    is_makt = 2
  AND    bill_type IN (2, 99)
  AND    business_type = 16;</code></pre>
<h4>报错6：折扣政策名称最大输入30个字符</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，verifyPolicyName校验时，DISCOUNT_POLICY_NAME长度超过30</li><li><strong>逻辑分析</strong>：折扣政策名称有长度限制，超过30字符无法保存。校验逻辑读取DISCOUNT_POLICY_NAME字段长度，超过30即抛异常。常见根因：用户输入名称过长、或前端未做长度限制。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         discount_policy_name  AS 政策名称,
         LENGTH(discount_policy_name) AS 名称长度
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    LENGTH(discount_policy_name) &gt; 30;</code></pre>
<h4>报错7：物料明细不能为空</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验适用类型为通用(SUITABLE_TYPE=normal)时，EPM_DISCOUNT_POLICY_ITEM产品明细为空</li><li><strong>逻辑分析</strong>：适用类型为"通用"的折扣政策必须维护物料明细，否则政策无法适用任何产品。校验逻辑读取SUITABLE_TYPE，若为normal且产品明细为空则抛异常。常见根因：用户选择通用适用类型后未添加产品明细、或产品明细被全部删除。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dp.discount_policy_id    AS 政策ID,
         dp.discount_policy_code  AS 政策单号,
         dp.suitable_type         AS 适用类型,
         COUNT(dpi.discount_policy_item_id) AS 物料明细数
  FROM   epm_discount_policy dp
  LEFT   JOIN epm_discount_policy_item dpi
         ON dpi.discount_policy_id = dp.discount_policy_id
  WHERE  dp.source_type = 'YXCRM'
  AND    dp.suitable_type = 'normal'
  GROUP  BY dp.discount_policy_id, dp.discount_policy_code, dp.suitable_type
  HAVING COUNT(dpi.discount_policy_item_id) = 0;</code></pre>
<h4>报错8：适用类型为"通用"时，产品优惠方式只能为"折扣"</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验适用类型为通用(SUITABLE_TYPE=normal)时，某产品行PREFERENTIAL_TYPE≠1(折扣)</li><li><strong>逻辑分析</strong>：适用类型为"通用"的折扣政策，产品优惠方式只能为折扣(PREFERENTIAL_TYPE=1)，不支持其他优惠方式。校验逻辑遍历产品明细，若SUITABLE_TYPE=normal且PREFERENTIAL_TYPE≠1则抛异常。常见根因：用户选择通用适用类型后误设其他优惠方式、或前端未做联动限制。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dp.discount_policy_id    AS 政策ID,
         dp.discount_policy_code  AS 政策单号,
         dp.suitable_type         AS 适用类型,
         dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.preferential_type    AS 优惠方式
  FROM   epm_discount_policy dp
  JOIN   epm_discount_policy_item dpi
         ON dpi.discount_policy_id = dp.discount_policy_id
  WHERE  dp.source_type = 'YXCRM'
  AND    dp.suitable_type = 'normal'
  AND    dpi.preferential_type &lt;&gt; 1;</code></pre>
<h4>报错9：在该时间区间内：...</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，checkTimeOverlap校验时，政策有效区间与同一产品/型号的已有政策有效区间重叠</li><li><strong>逻辑分析</strong>：同一产品或型号在同一时间区间内不允许存在多个有效折扣政策，避免折扣冲突。校验逻辑查询EPM_DISCOUNT_POLICY_ITEM关联的政策，比对EFFECTIVE_DATE_START和EFFECTIVE_DATE_END区间，重叠则抛异常并提示具体重叠区间。常见根因：用户新建政策有效区间与已有政策重叠、或未检查已有政策有效期。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT a.discount_policy_id    AS 政策ID1,
         a.discount_policy_code  AS 政策单号1,
         a.effective_date_start  AS 有效期起1,
         a.effective_date_end    AS 有效期至1,
         b.discount_policy_id    AS 政策ID2,
         b.discount_policy_code  AS 政策单号2,
         b.effective_date_start  AS 有效期起2,
         b.effective_date_end    AS 有效期至2
  FROM   epm_discount_policy a
  JOIN   epm_discount_policy b
         ON b.discount_policy_id &gt; a.discount_policy_id
  JOIN   epm_discount_policy_item ai
         ON ai.discount_policy_id = a.discount_policy_id
  JOIN   epm_discount_policy_item bi
         ON bi.discount_policy_id = b.discount_policy_id
        AND bi.item_code = ai.item_code
  WHERE  a.source_type = 'YXCRM'
  AND    b.source_type = 'YXCRM'
  AND    a.effective_date_start &lt;= b.effective_date_end
  AND    a.effective_date_end   &gt;= b.effective_date_start;</code></pre>
<h4>报错10：未找到该单据</h4>
<ul><li><strong>触发条件</strong>：点击"删除"按钮，doDelete校验时，按DISCOUNT_POLICY_ID查询EPM_DISCOUNT_POLICY返回null</li><li><strong>逻辑分析</strong>：删除操作需先查询政策确认存在。若政策在删除前被其他用户物理删除、DISCOUNT_POLICY_ID传值错误、或政策从未存在，查询返回空，无法删除，抛异常。常见根因：并发操作删除政策、传参错误、或数据不一致。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         hz_approve_status     AS 审批状态
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{传入的discountPolicyId};</code></pre>
<h4>报错11：仅新建状态单据允许删除.</h4>
<ul><li><strong>触发条件</strong>：点击"删除"按钮，doDelete校验时，政策HZ_APPROVE_STATUS≠NEW(新建)</li><li><strong>逻辑分析</strong>：仅新建状态(HZ_APPROVE_STATUS=NEW)的政策允许删除，已提交审批、审批通过、审批驳回的政策不允许删除，避免破坏审批流程和数据一致性。校验逻辑读取HZ_APPROVE_STATUS，非NEW则抛异常。常见根因：用户尝试删除已提交或已审批的政策、或前端未做状态判断。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         hz_approve_status     AS 审批状态,
         valid                 AS 有效状态
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    hz_approve_status &lt;&gt; 'NEW';</code></pre>
<h4>报错12：导入数量不能超过&#123;pageSize&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"导入产品"按钮，Excel解析完成后，数据行数超过系统配置的pageSize上限</li><li><strong>逻辑分析</strong>：导入产品明细有数量限制，超过pageSize(系统配置)无法导入，避免性能问题和事务超时。校验逻辑统计解析后的数据行数，超过pageSize则抛异常。常见根因：用户上传过大Excel文件、或未分批导入。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         COUNT(discount_policy_item_id) AS 导入行数
  FROM   epm_discount_policy_item
  WHERE  discount_policy_id = #{discountPolicyId}
  GROUP  BY discount_policy_id
  HAVING COUNT(discount_policy_item_id) &gt; #{pageSize};</code></pre>
<h4>报错13：导入的产品编码查询不到对应的产品信息：&#123;codes&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"导入产品"按钮，调用CRM产品查询接口后，导入的产品编码在CRM返回结果中不存在</li><li><strong>逻辑分析</strong>：导入产品明细需关联CRM产品主数据，产品编码在CRM不存在则无法获取产品信息(名称、型号、价格等)。校验逻辑比对导入编码集合与CRM返回编码集合，差集非空则抛异常并提示具体不存在的编码。常见根因：用户输入错误产品编码、产品在CRM未建档、或产品已失效。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.discount_policy_id   AS 政策ID
  FROM   epm_discount_policy_item dpi
  LEFT   JOIN crm_product_info cp
         ON cp.product_code = dpi.item_code
        AND cp.status = 'ACTIVE'
  WHERE  dpi.discount_policy_id = #{discountPolicyId}
  AND    cp.product_code IS NULL;</code></pre>
<h4>报错14：产品导入异常，请联系管理员！</h4>
<ul><li><strong>触发条件</strong>：点击"导入产品"按钮，导入过程中抛出非CommonException异常(如IO异常、解析异常、空指针等)</li><li><strong>逻辑分析</strong>：导入过程涉及Excel解析、CRM接口调用、数据组装等环节，任一环节异常都会导致导入失败。系统捕获Exception后统一抛出"产品导入异常，请联系管理员！"，避免暴露技术细节。常见根因：Excel文件格式损坏、CRM接口超时、数据库异常、或代码bug。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         hz_approve_status     AS 审批状态
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{discountPolicyId};</code></pre>
<h4>报错15：请先维护OA系统信息</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，推送OA前校验OA系统配置(接口地址、用户名、密码等)缺失</li><li><strong>逻辑分析</strong>：推送OA审批需依赖OA系统配置(接口地址、用户名、密码等)，配置缺失则无法推送。校验逻辑读取OA系统配置，任一缺失则抛异常。常见根因：OA系统配置未维护、配置被误删、或环境切换后配置未同步。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT oa_bill_name        AS OA单据名称,
         oa_url              AS OA接口地址,
         oa_user             AS OA用户名,
         oa_password         AS OA密码
  FROM   oa_bill_ref
  WHERE  oa_bill_name = 'YXZT样品折扣政策申请';</code></pre>
<h4>报错16：流程编码不能为空。</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，推送OA前校验流程编码(FlowCode)为空</li><li><strong>逻辑分析</strong>：推送OA审批需指定流程编码，流程编码为空则OA无法匹配审批流程。校验逻辑读取FlowCode，为空则抛异常。常见根因：前端未传FlowCode、流程编码配置缺失、或政策类型与流程编码映射未配置。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号,
         hz_approve_status     AS 审批状态,
         hz_instance_id        AS 流程实例ID
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{discountPolicyId};</code></pre>
<h4>报错17：以下型号涉及新品，不允许通过型号定义折扣政策，请通过具体产品编码制定折扣政策</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验产品行时，某行按型号(ITEM_MODEL)定义且该型号涉及新品</li><li><strong>逻辑分析</strong>：涉及新品的型号不允许通过型号定义折扣政策，必须通过具体产品编码制定，避免新品政策范围不可控。校验逻辑识别新品型号，若政策行按型号定义且涉及新品则抛异常。常见根因：用户误用型号定义新品政策、或新品标识未同步。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.discount_policy_id   AS 政策ID,
         dpi.item_model           AS 型号,
         dpi.item_code            AS 产品编码
  FROM   epm_discount_policy_item dpi
  JOIN   epm_discount_policy dp
         ON dp.discount_policy_id = dpi.discount_policy_id
  WHERE  dp.source_type = 'YXCRM'
  AND    dpi.item_code IS NULL
  AND    dpi.item_model IS NOT NULL
  AND    dpi.item_model IN (SELECT item_model FROM epm_item_model WHERE new_prod_flag = 1);</code></pre>
<h4>报错18：产品编码:[&#123;code&#125;] 与型号：[&#123;model&#125;] 折扣政策冲突</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验产品行时，同一产品编码与型号存在多个折扣政策行冲突</li><li><strong>逻辑分析</strong>：同一产品编码与型号不允许在多个折扣政策行中重复定义，避免折扣冲突。校验逻辑识别重复的产品编码+型号组合，冲突则抛异常。常见根因：用户重复添加同一产品、或导入文件包含重复产品。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT item_code            AS 产品编码,
         item_model           AS 型号,
         COUNT(discount_policy_item_id) AS 重复行数
  FROM   epm_discount_policy_item
  WHERE  discount_policy_id = #{discountPolicyId}
  AND    item_code IS NOT NULL
  AND    item_model IS NOT NULL
  GROUP  BY item_code, item_model
  HAVING COUNT(discount_policy_item_id) &gt; 1;</code></pre>
<h4>报错19：产品【&#123;code&#125;】本次下单数量【&#123;qty&#125;】，超过政策该经销商剩余可下单数量【&#123;activeQty&#125;】，请检查！</h4>
<ul><li><strong>触发条件</strong>：要货订单下单时，updateActiveQty校验，某行QTY_BILL&gt;折扣政策产品行该经销商剩余可下单数量</li><li><strong>逻辑分析</strong>：折扣政策对每个产品按经销商设定可下单数量上限，多个订单共享同一政策时需扣减。下单数量超过该经销商剩余可下单数量则抛异常。常见根因：并发下单导致可下单数量被其他订单扣减、或用户下单数量超过剩余可下单数量。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.active_qty           AS 可下单数量,
         dpc.customer_code        AS 经销商编码,
         dpc.remain_qty           AS 经销商剩余可下单数量
  FROM   epm_discount_policy_item dpi
  JOIN   epm_discount_policy dp ON dp.discount_policy_id = dpi.discount_policy_id
  LEFT   JOIN epm_discount_policy_customer dpc ON dpc.discount_policy_id = dp.discount_policy_id
  WHERE  dp.source_type = 'YXCRM'
  AND    dpi.active_qty &lt; dpc.remain_qty;</code></pre>
<h4>报错20：产品【&#123;code&#125;】本次下单数量【&#123;qty&#125;】，超过政策全部经销商剩余可下单数量【&#123;activeQty&#125;】，请检查！</h4>
<ul><li><strong>触发条件</strong>：要货订单下单时，updateActiveQty校验，某行QTY_BILL&gt;折扣政策产品行全部经销商合计剩余可下单数量</li><li><strong>逻辑分析</strong>：折扣政策对每个产品设定全部经销商合计可下单数量上限，下单数量超过全部经销商剩余可下单数量则抛异常。常见根因：并发下单导致可下单数量被其他经销商订单扣减、或用户下单数量超过政策总剩余可下单数量。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.active_qty           AS 可下单数量,
         SUM(dpc.remain_qty)      AS 全部经销商剩余可下单数量
  FROM   epm_discount_policy_item dpi
  JOIN   epm_discount_policy dp ON dp.discount_policy_id = dpi.discount_policy_id
  LEFT   JOIN epm_discount_policy_customer dpc ON dpc.discount_policy_id = dp.discount_policy_id
  WHERE  dp.source_type = 'YXCRM'
  GROUP  BY dpi.discount_policy_item_id, dpi.item_code, dpi.active_qty
  HAVING dpi.active_qty &lt; SUM(dpc.remain_qty);</code></pre>
<h4>报错21：请求CRM返回数据解析异常！</h4>
<ul><li><strong>触发条件</strong>：点击"获取价格"按钮，调用CRM产品查询接口后，返回数据JSON解析失败</li><li><strong>逻辑分析</strong>：获取产品价格需调用CRM接口，返回数据为JSON格式，解析失败则无法获取价格。校验逻辑尝试解析JSON，异常则抛出。常见根因：CRM接口返回非JSON格式数据、CRM接口异常、或网络传输中断。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT discount_policy_id    AS 政策ID,
         discount_policy_code  AS 政策单号
  FROM   epm_discount_policy
  WHERE  source_type = 'YXCRM'
  AND    discount_policy_id = #{discountPolicyId};</code></pre>
<h4>报错22：产品编码[&#123;code&#125;]请求CRM获取失败原因:[&#123;msg&#125;]</h4>
<ul><li><strong>触发条件</strong>：点击"获取价格"按钮，调用CRM产品查询接口，CRM返回失败信息(msg)</li><li><strong>逻辑分析</strong>：获取产品价格需调用CRM接口，CRM返回失败信息则无法获取价格。校验逻辑读取CRM返回的msg，非空则抛异常并提示具体失败原因。常见根因：产品编码在CRM不存在、产品已失效、或CRM接口业务异常。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.discount_policy_id   AS 政策ID
  FROM   epm_discount_policy_item dpi
  LEFT   JOIN crm_product_info cp
         ON cp.product_code = dpi.item_code
        AND cp.status = 'ACTIVE'
  WHERE  dpi.discount_policy_id = #{discountPolicyId}
  AND    cp.product_code IS NULL;</code></pre>
<h4>报错23：Crm返回产品政策信息为空</h4>
<ul><li><strong>触发条件</strong>：调用CRM产品政策查询接口后，CRM返回空数据</li><li><strong>逻辑分析</strong>：获取产品政策信息需调用CRM接口，返回空则无法组装政策数据。校验逻辑判断返回数据为空则抛异常。常见根因：产品在CRM未配置政策、CRM接口异常、或产品编码错误。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dpi.discount_policy_item_id AS 产品行ID,
         dpi.item_code            AS 产品编码,
         dpi.discount_policy_id   AS 政策ID
  FROM   epm_discount_policy_item dpi
  WHERE  dpi.discount_policy_id = #{discountPolicyId}
  AND    NOT EXISTS (
    SELECT 1 FROM crm_policy_info cpi WHERE cpi.item_code = dpi.item_code
  );</code></pre>
<h4>报错24：客户的签约方式存在异常，请检查</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验客户签约方式时，客户档案签约方式数据异常(为空或非法值)</li><li><strong>逻辑分析</strong>：折扣政策关联客户时需校验客户签约方式，签约方式异常则政策无法正确执行。校验逻辑读取客户档案签约方式，为空或非法值则抛异常。常见根因：客户档案签约方式未维护、签约方式数据被误改、或客户档案数据不一致。</li><li><strong>排查SQL</strong>：</li></ul>
<pre class="detail-sql" v-pre><code>SELECT dp.discount_policy_id    AS 政策ID,
         dp.discount_policy_code  AS 政策单号,
         dpc.customer_id          AS 客户ID,
         dpc.customer_code        AS 客户编码,
         c.contract_type         AS 签约方式
  FROM   epm_discount_policy dp
  JOIN   epm_discount_policy_customer dpc
         ON dpc.discount_policy_id = dp.discount_policy_id
  LEFT   JOIN customer c
         ON c.customer_id = dpc.customer_id
  WHERE  dp.source_type = 'YXCRM'
  AND    (c.contract_type IS NULL OR c.contract_type NOT IN (1, 2));</code></pre>
</KbCard>

<KbCard title="常见问题">
<ul><li>问题1：OA审批推送失败</li><li>原因：OA系统不可用或数据组装异常</li><li>解决思路：检查OA系统状态和OA单据配置"YXZT样品折扣政策申请"</li></ul>
<ul><li>问题2：产品导入失败</li><li>原因：产品编码不存在或文件格式错误</li><li>解决思路：检查Excel文件格式和产品编码是否在CRM系统中存在</li></ul>
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
<tr><td>2026-08-30</td><td>-</td><td>-</td><td>按skill规范重写知识库文档</td></tr>
<tr><td>2025-09-15</td><td>-</td><td>lfb</td><td>初始创建折扣类型政策功能</td></tr>
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