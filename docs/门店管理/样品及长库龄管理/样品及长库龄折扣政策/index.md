---
---

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

```text
选择适用对象      新建折扣政策        保存政策          提交审批          OA审批
(客户/区域/   →   填写政策信息   →   添加产品明细  →   校验政策    →   推送OA审批
 分类/省份)       设置折扣率         导入产品阶梯       推送OA数据       ↓
                                                       ↓        审批通过/驳回
                                                    保存并提交    OA回调处理
                                                                 有效状态=有效
```

</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 1</span>
    <h2>样品及长库龄来源标识 {来源系统}</h2>
  </div>
  <KbQuote>通过sourceType字段区分样品及长库龄折扣政策与工程/家装折扣政策</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>样品及长库龄折扣政策 sourceType=YXCRM</li>
    <li>工程/家装折扣政策 sourceType=EPMS</li>
    <li>非1、2点折扣政策 sourceType=Link</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 2</span>
    <h2>政策类型区分 {适用对象}</h2>
  </div>
  <KbQuote>折扣政策可按不同维度设置适用对象</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>policyType=1 按客户，指定customerId</li>
    <li>policyType=2 按区域，指定saleAreaId</li>
    <li>policyType=3 按客户分类，指定customerClass</li>
    <li>policyType=4 按省份，指定provinceId</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 3</span>
    <h2>产品明细导入 {导入功能}</h2>
  </div>
  <KbQuote>支持批量导入产品明细和阶梯政策</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>通过Excel文件导入产品明细</li>
    <li>导入时需指定折扣政策ID</li>
    <li>导入后自动生成产品行和阶梯政策行</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 4</span>
    <h2>OA审批集成 {OA集成}</h2>
  </div>
  <KbQuote>折扣政策走OA审批流程</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>保存并提交时推送OA审批数据</li>
    <li>OA审批通过回调时更新有效状态为有效(valid=2)</li>
    <li>OA审批驳回回调时更新有效状态</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 5</span>
    <h2>长库龄业务类型校验 {业务校验}</h2>
  </div>
  <KbQuote>校验计划订单业务类型不能为长库龄</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>提交时校验业务类型(businessType)</li>
    <li>长库龄业务类型有特殊校验规则</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">状态机</span>
    <h2>政策状态流转</h2>
  </div>
  <KbQuote>政策头valid字段驱动状态流转：未审核→审批中→有效→失效</KbQuote>
  <strong>状态机列表：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>未审核(valid=1)：新建未提交或被驳回，可编辑、保存、提交、删除</li>
    <li>RUN(审批中)：OA审批中，无可执行操作，等待OA审批结果</li>
    <li>有效(valid=2)：已审批通过，可发起失效</li>
    <li>失效(valid=3)：已失效，无可执行操作</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">说明</span>
    <h2>页面性质说明</h2>
  </div>
  <KbQuote>本页面为低代码页面(hlod)，无独立前端源码，基于后端API和Entity梳理。样品及长库龄折扣政策与工程/家装折扣政策共用EpmDiscountPolicy实体，通过sourceType=YXCRM区分。</KbQuote>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 1</span>
    <h2>折扣政策列表页</h2>
  </div>
  <KbQuote>列表页展示折扣政策列表，支持按条件查询</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:12%"><col style="width:14%"><col style="width:9%"><col style="width:16%"><col style="width:10%"><col style="width:18%"><col style="width:21%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策编号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存时自动生成</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户输入</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用对象类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=客户，2=区域，3=客户分类，4=省份</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1/2/3/4</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.VALID</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=未审核，2=有效，3=失效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1/2/3</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效开始日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">日期选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效开始日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效结束日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">日期选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效结束日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.CREATOR</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动记录</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EPM_DISCOUNT_POLICY.CREATETIME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">日期选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动记录</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">NEW/RUN/APPROVED/REJECTED</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">NEW/RUN/APPROVED/REJECTED</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 2</span>
    <h2>折扣政策详情页（头表单）</h2>
  </div>
  <KbQuote>详情页展示政策头表单字段，按政策类型动态显示适用对象字段</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:12%"><col style="width:14%"><col style="width:9%"><col style="width:14%"><col style="width:10%"><col style="width:16%"><col style="width:25%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策编号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动生成，不可编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可编辑，最大30字符</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">POLICY_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用对象类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=客户，2=区域，3=客户分类，4=省份</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1/2/3/4</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">适用客户</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_ID</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用客户</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型=1</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从客户档案选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">适用区域</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SALE_AREA_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用区域</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型=2</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从区域配置选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型=3</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=内部客户，2=外部客户</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1/2</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">适用省份</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROVINCE_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用省份</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型=4</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从省份配置选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">适用类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SUITABLE_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单选框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">通用/专项</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">normal=通用，special=专项</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">normal/special</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPES</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉多选框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单类型(多选)</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集，逗号分隔存储</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">业务类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BUSINESS_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">业务类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品优惠方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HEAD_PREFERENTIAL_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品优惠方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">默认折扣率</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HEAD_DISCOUNT_RATE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认折扣率</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">0-1</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">币种</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CURRENCY</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">币种</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">来源系统</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SOURCE_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">隐藏</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源系统</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">隐藏</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品及长库龄=YXCRM</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">YXCRM</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VALID</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=未审核，2=有效，3=失效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1/2/3</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">HZ_APPROVE_STATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">文本框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">NEW/RUN/APPROVED/REJECTED</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">NEW/RUN/APPROVED/REJECTED</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">选择弹窗 1</span>
    <h2>CRM产品选择弹窗（多选）</h2>
  </div>
  <KbQuote>从CRM系统查询产品信息，支持多选</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">中文名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">示例</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据范围</th></tr></thead>
      <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">organizationId</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部ID</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">100</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM系统中生效的产品</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">itemCode</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">产品编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">搜索关键词</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">ASC-001</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">-</td></tr>
      </tbody>
    </table>
  </div>
  <div style="margin-top:10px;padding:10px 12px;background:#F9FAFB;border-radius:8px;font-size:.73rem;color:#374151;">
    <strong>查询SQL（后端接口：CRM产品查询接口 invokeCrmProd）：</strong>
  </div>
```sql
-- 调用CRM系统产品查询接口
SELECT product_id, product_code, product_name, item_model, unit_price
FROM crm_product_info WHERE organization_id = #{organizationId} AND status = 'ACTIVE';
```
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">选择弹窗 2</span>
    <h2>产品型号选择弹窗（单选）</h2>
  </div>
  <KbQuote>查询产品型号列表，单选</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">中文名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">示例</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据范围</th></tr></thead>
      <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">itemModel</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">产品型号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">搜索关键词</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">MODEL-A</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">对应产品的型号列表</td></tr>
      </tbody>
    </table>
  </div>
  <div style="margin-top:10px;padding:10px 12px;background:#F9FAFB;border-radius:8px;font-size:.73rem;color:#374151;">
    <strong>查询SQL（后端接口：getModel）：</strong>
  </div>
```sql
SELECT item_model_id, item_model, model_name FROM epm_item_model WHERE item_model LIKE #{itemModel};
```
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">导入</span>
    <h2>产品明细导入</h2>
  </div>
  <KbQuote>支持通过Excel文件批量导入产品明细和阶梯政策</KbQuote>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">前置约定</strong>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>文件样例：Excel文件，包含产品编码、产品名称、型号、折扣率、阶梯数量、阶梯金额等列</li>
      <li>格式与文件大小限制：标准Excel格式</li>
    </ul>
  </div>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">字段映射</strong>
    <div style="overflow-x:auto;border-radius:8px;border:1px solid #E8ECF0;background:#fff;margin-top:6px;">
      <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
        <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段含义</th><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">是否必输</th><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段格式</th><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">重复判定字段</th></tr></thead>
        <tbody>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品编码</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品编码+型号</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品名称</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">型号</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">否</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣率</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数值(0-1)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">阶梯数量</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">否</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数值</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;">阶梯金额</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">否</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">数值</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">-</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">处理逻辑</strong>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li><strong>校验逻辑：</strong>校验产品编码是否存在、折扣率范围是否合法</li>
      <li><strong>导入逻辑：</strong>解析Excel → 校验产品 → 生成产品行和阶梯政策行</li>
      <li><strong>重复处理策略：</strong>报错</li>
      <li><strong>性能方案：</strong>同步处理</li>
    </ul>
  </div>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">异常与结果约定</strong>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>部分成功/失败时回滚整个导入</li>
      <li>结果反馈：返回导入成功明细列表</li>
    </ul>
  </div>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">运维保障</strong>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>日志记录：记录导入操作日志</li>
      <li>断点续传/重试机制：不支持，需重新导入</li>
    </ul>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮组</span>
    <h2>操作按钮</h2>
  </div>
  <KbQuote>列表页和详情页的操作按钮</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:12%"><col style="width:14%"><col style="width:10%"><col style="width:20%"><col style="width:44%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">按钮名称</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">按钮作用</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">所在位置</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件/可点击条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">影响</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">新建</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新建折扣政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">跳转新建页面</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存到EPM_DISCOUNT_POLICY</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">保存并提交</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存并提交审批</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批状态为NEW</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存后推送OA审批，发起工作流</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">导入产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入产品明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">调用importProduct接口</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">获取价格</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">获取产品实时价格</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">已选产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">调用getPrices接口</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效状态=未审核</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">调用delete接口</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">导出</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">导出政策列表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">列表页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">常显</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">调用导出接口</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 1</span>
    <h2>保存并提交（详情页）</h2>
  </div>
  <KbQuote>审批状态为NEW时可保存并提交OA审批</KbQuote>
  <strong>触发条件：</strong>审批状态为NEW
  <strong style="display:block;margin-top:8px;">执行逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>第1点：保存政策头和产品明细行</li>
    <li>第2点：校验政策数据完整性</li>
    <li>第3点：推送OA审批数据</li>
    <li>第4点：发起工作流</li>
  </ul>
  <div style="margin-top:8px;padding:8px 10px;background:#F9FAFB;border-radius:8px;font-size:.73rem;color:#374151;">
    <strong>接口调用：</strong>POST /v1/{organizationId}/epm-discount-policy/save-and-submit
  </div>
  <div style="margin-top:6px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT discount_policy_id, discount_policy_code, valid, hz_approve_status, source_type
FROM epm_discount_policy WHERE discount_policy_id = {id};
```
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 2</span>
    <h2>导入产品（详情页）</h2>
  </div>
  <KbQuote>通过Excel文件批量导入产品明细</KbQuote>
  <strong>触发条件：</strong>常显
  <strong style="display:block;margin-top:8px;">执行逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>第1点：上传Excel文件</li>
    <li>第2点：解析文件内容，校验产品编码</li>
    <li>第3点：生成产品明细行和阶梯政策行</li>
  </ul>
  <div style="margin-top:8px;padding:8px 10px;background:#F9FAFB;border-radius:8px;font-size:.73rem;color:#374151;">
    <strong>接口调用：</strong>POST /v1/{organizationId}/epm-discount-policy/importProduct
  </div>
  <div style="margin-top:6px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT * FROM epm_discount_policy_item WHERE discount_policy_id = {id};
```
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 3</span>
    <h2>删除（列表页）</h2>
  </div>
  <KbQuote>仅未审核状态的政策可删除</KbQuote>
  <strong>触发条件：</strong>有效状态为未审核(valid=1)
  <strong style="display:block;margin-top:8px;">执行逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>第1点：校验政策状态为未审核</li>
    <li>第2点：级联删除政策头和产品明细行</li>
  </ul>
  <div style="margin-top:8px;padding:8px 10px;background:#F9FAFB;border-radius:8px;font-size:.73rem;color:#374151;">
    <strong>接口调用：</strong>DELETE /v1/{organizationId}/epm-discount-policy
  </div>
  <div style="margin-top:6px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT discount_policy_id, valid FROM epm_discount_policy WHERE discount_policy_id IN ({ids});
```
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">保存校验</span>
    <h2>保存校验规则</h2>
  </div>
  <KbQuote>保存时校验政策类型与适用对象的对应关系</KbQuote>
  <div style="margin-top:10px;padding:10px 12px;background:#FEF2F2;border-radius:8px;border:1px solid #FECACA;">
    <strong style="font-size:.78rem;color:#DC2626;">校验1：政策类型校验</strong>
    <p style="font-size:.73rem;color:#374151;margin:4px 0 0;">确保按政策类型填写对应适用对象</p>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>policyType=1时customerId不能为空</li>
      <li>policyType=2时saleAreaId不能为空</li>
      <li>policyType=3时customerClass不能为空</li>
      <li>policyType=4时provinceId不能为空</li>
    </ul>
    <p style="font-size:.73rem;color:#374151;margin:6px 0 0;"><strong>系统体现：</strong>阻断性报错</p>
  </div>
  <div style="margin-top:8px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT policy_type, customer_id, sale_area_id, customer_class, province_id
FROM epm_discount_policy WHERE discount_policy_id = {id};
```
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">提交校验</span>
    <h2>提交校验规则</h2>
  </div>
  <KbQuote>提交OA审批前校验产品明细和业务类型</KbQuote>
  <div style="margin-top:10px;padding:10px 12px;background:#FEF2F2;border-radius:8px;border:1px solid #FECACA;">
    <strong style="font-size:.78rem;color:#DC2626;">校验1：产品明细非空校验</strong>
    <p style="font-size:.73rem;color:#374151;margin:4px 0 0;">确保政策有产品明细行</p>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>查询EPM_DISCOUNT_POLICY_ITEM表中该政策的明细行</li>
      <li>明细为空时不允许提交</li>
    </ul>
    <p style="font-size:.73rem;color:#374151;margin:6px 0 0;"><strong>系统体现：</strong>阻断性报错</p>
  </div>
  <div style="margin-top:8px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT COUNT(*) FROM epm_discount_policy_item WHERE discount_policy_id = {id};
```
  </div>
  <div style="margin-top:10px;padding:10px 12px;background:#FEF2F2;border-radius:8px;border:1px solid #FECACA;">
    <strong style="font-size:.78rem;color:#DC2626;">校验2：长库龄业务类型校验</strong>
    <p style="font-size:.73rem;color:#374151;margin:4px 0 0;">校验业务类型合法性</p>
    <ul style="margin:4px 0 0;padding-left:18px;font-size:.75rem;color:#374151;line-height:1.9;">
      <li>校验计划订单业务类型不能为长库龄</li>
    </ul>
    <p style="font-size:.73rem;color:#374151;margin:6px 0 0;"><strong>系统体现：</strong>阻断性报错</p>
  </div>
  <div style="margin-top:8px;">
    <strong style="font-size:.78rem;color:#1F2937;">排查SQL：</strong>
```sql
SELECT business_type FROM epm_discount_policy WHERE discount_policy_id = {id};
```
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">状态机</span>
    <h2>政策状态机流转</h2>
  </div>
  <KbQuote>政策头valid字段和hz_approve_status字段驱动状态流转</KbQuote>
  <div style="margin-top:10px;padding:12px;background:#F9FAFB;border-radius:8px;">
```text
未审核(valid=1) ──提交──→ RUN(审批中) ──OA审批通过──→ 有效(valid=2)
                              │
                              │OA审批驳回
                              ↓
                         未审核(valid=1)

有效(valid=2) ──发起失效──→ 失效流程 ──审批通过──→ 失效(valid=3)
```
  </div>
  <div style="margin-top:10px;">
    <strong style="font-size:.78rem;color:#1F2937;">状态机列表</strong>
    <div style="overflow-x:auto;border-radius:8px;border:1px solid #E8ECF0;background:#fff;margin-top:6px;">
      <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
        <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">状态机名称</th><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">状态释义</th><th style="padding:8px 10px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">可执行的操作</th></tr></thead>
        <tbody>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">未审核(valid=1)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新建未提交或被驳回</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑、保存、提交、删除</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">RUN(审批中)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批中</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">无（等待OA审批结果）</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效(valid=2)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">已审批通过</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">发起失效</td></tr>
          <tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;">失效(valid=3)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">已失效</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">无</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">数据库表</span>
    <h2>EPM_DISCOUNT_POLICY（折扣政策主表）</h2>
  </div>
  <KbQuote>折扣政策主表，存储政策头信息，sourceType=YXCRM标识样品及长库龄折扣政策</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:20%"><col style="width:10%"><col style="width:14%"><col style="width:16%"><col style="width:40%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">类型</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">对应界面字段</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">逻辑</th></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">主键，自增</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策单号</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策单号</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动生成</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户输入，最大30字符</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">POLICY_TYPE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=客户，2=区域，3=客户分类，4=省份</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用客户ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用客户</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">policyType=1时必填</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SALE_AREA_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用区域ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用区域</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">policyType=2时必填</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PROVINCE_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">省份ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用省份</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">policyType=4时必填</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户分类</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户分类</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=内部客户，2=外部客户</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">VALID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有效状态</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=未审核，2=有效，3=失效</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILL_TYPES</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单类型(多选)</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">逗号分隔</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BUSINESS_TYPE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">业务类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">业务类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HEAD_PREFERENTIAL_TYPE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品优惠方式</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品优惠方式</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HEAD_DISCOUNT_RATE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DECIMAL</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认折扣率</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认折扣率</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户输入</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SUITABLE_TYPE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用类型</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">normal=通用，special=专项</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SOURCE_TYPE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源系统</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源系统</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品及长库龄=YXCRM</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批状态</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批状态</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NEW/RUN/APPROVED/REJECTED</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_INSTANCE_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批实例ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">工作流实例ID</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CALLBACK_SOURCE</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回调来源</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=OA通过，2=OA驳回</td></tr>
<tr><td style="padding:8px 10px;font-size:.72rem;font-weight:700;color:#111827;">ORGANIZATION_ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">NUMBER</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">组织ID</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">-</td><td style="padding:8px 10px;font-size:.72rem;color:#374151;">当前事业部</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

</div>
</div>
</div>

<div id="permission" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(239,68,68,0.08);color:#DC2626;border-color:rgba(239,68,68,0.18);">权限控制</span>
    <h2>按钮与字段权限</h2>
    <p>操作按钮按有效状态和审批状态控制显隐</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>新建按钮：常显，跳转新建页面</li>
    <li>保存并提交按钮：仅审批状态(hz_approve_status)为NEW时可点击</li>
    <li>删除按钮：仅有效状态(valid)=1(未审核)时可点击</li>
    <li>导入产品按钮：常显</li>
    <li>获取价格按钮：已选产品时可点击</li>
    <li>导出按钮：常显</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">报错一览表</span>
    <h2>常见报错与根因</h2>
    <p>导入/保存/提交/删除/获取价格环节的典型报错与排查逻辑（点"查看"展开详细逻辑）</p>
  </div>
<div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
  <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
    <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">报错信息</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">提示节点</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">根因与解决方案</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:center;white-space:nowrap;border-bottom:2px solid #E8ECF0;">等级</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:center;white-space:nowrap;border-bottom:2px solid #E8ECF0;">详细逻辑</th></tr></thead>
    <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策id不能为空</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">未指定折扣政策ID，先保存政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">推送OA失败：折扣政策不存在</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA推送</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策已被删除，刷新列表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA回调失败：折扣政策不存在</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA回调</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策已被删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品行不能为空，请检查！</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存/提交</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策未维护产品明细行，先添加产品行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型为【计划订单】,业务类型不能为【长库龄】</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计划订单不允许长库龄业务类型，调整订单类型或业务类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称最大输入30个字符</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称超长，缩短名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-6" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">物料明细不能为空</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">适用类型为通用时物料明细为空，添加物料明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-7" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">适用类型为"通用"时，产品优惠方式只能为"折扣"</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">通用适用类型仅支持折扣优惠方式，调整优惠方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-8" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">在该时间区间内：...</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策有效区间与已有政策重复，调整有效区间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-9" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">未找到该单据</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策不存在或已被删除，刷新列表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-10" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">仅新建状态单据允许删除.</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策非新建状态不可删除，仅未审核政策可删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-11" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">导入数量不能超过{pageSize}</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入行数超限，分批导入</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-12" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">导入的产品编码查询不到对应的产品信息：{codes}</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品编码在CRM不存在，核对产品编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-13" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品导入异常，请联系管理员！</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">导入过程系统异常，联系管理员排查日志</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-14" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">请先维护OA系统信息</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存并提交</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA系统参数未配置，联系管理员维护OA配置</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-15" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">流程编码不能为空。</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存并提交</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA流程编码缺失，配置对应流程编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-16" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">以下型号涉及新品，不允许通过型号定义折扣政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新品型号不能定义政策，改用具体产品编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-17" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品编码与型号折扣政策冲突</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">同一产品编码与型号存在多个政策冲突，核对政策行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-18" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">超过政策该经销商剩余可下单数量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下单校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该经销商可下单数量不足，调整下单数量或联系区域经理</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-19" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">超过政策全部经销商剩余可下单数量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下单校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全部经销商可下单数量不足，调整下单数量或联系区域经理</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-20" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">请求CRM返回数据解析异常！</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">获取价格</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM接口返回数据格式异常，联系管理员排查CRM接口</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-21" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品编码请求CRM获取失败</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">获取价格</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM产品查询失败，核对产品编码或联系CRM管理员</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-22" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">Crm返回产品政策信息为空</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">获取价格</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM未返回产品政策信息，核对产品是否配置政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-23" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">客户的签约方式存在异常，请检查</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">客户签约方式数据异常，核对客户档案签约方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;text-align:center;"><a href="#err-detail-24" class="view-btn">查看</a></td></tr>
    </tbody>
  </table>
</div>
</div>

<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>折扣政策id不能为空</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"导入产品"按钮，调用importProduct接口时，传入的折扣政策ID（discountPolicyId）为null或0</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>导入产品明细需关联到具体折扣政策。若用户在政策头未保存（主键DISCOUNT_POLICY_ID未生成）时直接导入产品，或前端未传discountPolicyId字段，后端校验为空即抛异常。常见根因：用户未先保存政策头、保存失败后误点导入、或前端传参丢失。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, discount_policy_name, valid, hz_approve_status
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND (discount_policy_id IS NULL OR discount_policy_id = 0)
ORDER BY createtime DESC;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>推送OA失败：折扣政策不存在</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存并提交"按钮推送OA时，按discountPolicyId查询EPM_DISCOUNT_POLICY返回null</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>OA推送前需查询政策单组装数据。若单据在推送前被其他用户删除，或discountPolicyId传值错误，查询返回空，无法组装OA数据导致推送失败。常见根因：并发操作删除政策、传参错误、或事务未提交即调用OA推送。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, valid, hz_approve_status
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{传入的discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>OA回调失败：折扣政策不存在</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>OA审批完成回调DMS时，按回调报文中的discountPolicyId查询EPM_DISCOUNT_POLICY返回null</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>OA回调处理需更新政策有效状态。若回调期间政策被删除，或OA回调报文的单据ID与DMS不一致，查询返回空，回调处理失败。常见根因：政策被并发删除、OA配置错误、或回调报文ID丢失。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, valid, hz_approve_status, hz_instance_id, callback_source
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{OA回调报文中的discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品行不能为空，请检查！</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"或"保存并提交"按钮，checkProductLine校验时，EPM_DISCOUNT_POLICY_ITEM中该政策的产品明细行为空或全部被标记删除</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>折扣政策必须包含至少一行产品明细才能提交审批。校验逻辑查询EPM_DISCOUNT_POLICY_ITEM中对应且未删除的行，若为空则抛异常。常见根因：用户未导入产品或未添加产品行、产品行被全部删除、或导入产品失败后误点提交。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dp.discount_policy_id, dp.discount_policy_code, dp.hz_approve_status,
       COUNT(dpi.discount_policy_item_id) AS 产品行数
FROM epm_discount_policy dp
LEFT JOIN epm_discount_policy_item dpi ON dpi.discount_policy_id = dp.discount_policy_id AND dpi._status &lt;&gt; 'delete'
WHERE dp.source_type = 'YXCRM'
GROUP BY dp.discount_policy_id, dp.discount_policy_code, dp.hz_approve_status
HAVING COUNT(dpi.discount_policy_item_id) = 0;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>订单类型为【计划订单】,业务类型不能为【长库龄】</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验长库龄业务类型时，IS_MAKT=2且BILL_TYPE=2(计划订单)或99且BUSINESS_TYPE=16(长库龄)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>长库龄业务类型(BUSINESS_TYPE=16)仅适用于常规订单，计划订单(BILL_TYPE=2或99)不允许设置为长库龄业务类型。常见根因：用户误将计划订单与长库龄业务类型组合、或前端未做组合校验。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, bill_type, business_type, is_makt
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND is_makt = 2 AND bill_type IN (2, 99) AND business_type = 16;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>折扣政策名称最大输入30个字符</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，verifyPolicyName校验时，DISCOUNT_POLICY_NAME长度超过30</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>折扣政策名称有长度限制，超过30字符无法保存。常见根因：用户输入名称过长、或前端未做长度限制。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, discount_policy_name, LENGTH(discount_policy_name) AS 名称长度
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND LENGTH(discount_policy_name) > 30;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>物料明细不能为空</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验适用类型为通用(SUITABLE_TYPE=normal)时，EPM_DISCOUNT_POLICY_ITEM产品明细为空</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>适用类型为"通用"的折扣政策必须维护物料明细。常见根因：用户选择通用适用类型后未添加产品明细、或产品明细被全部删除。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dp.discount_policy_id, dp.discount_policy_code, dp.suitable_type,
       COUNT(dpi.discount_policy_item_id) AS 物料明细数
FROM epm_discount_policy dp
LEFT JOIN epm_discount_policy_item dpi ON dpi.discount_policy_id = dp.discount_policy_id
WHERE dp.source_type = 'YXCRM' AND dp.suitable_type = 'normal'
GROUP BY dp.discount_policy_id, dp.discount_policy_code, dp.suitable_type
HAVING COUNT(dpi.discount_policy_item_id) = 0;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>适用类型为"通用"时，产品优惠方式只能为"折扣"</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验适用类型为通用(SUITABLE_TYPE=normal)时，某产品行PREFERENTIAL_TYPE≠1(折扣)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>适用类型为"通用"的折扣政策，产品优惠方式只能为折扣(PREFERENTIAL_TYPE=1)。常见根因：用户选择通用适用类型后误设其他优惠方式、或前端未做联动限制。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dp.discount_policy_id, dp.discount_policy_code, dp.suitable_type,
       dpi.discount_policy_item_id, dpi.item_code, dpi.preferential_type
FROM epm_discount_policy dp
JOIN epm_discount_policy_item dpi ON dpi.discount_policy_id = dp.discount_policy_id
WHERE dp.source_type = 'YXCRM' AND dp.suitable_type = 'normal' AND dpi.preferential_type &lt;&gt; 1;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-9" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>在该时间区间内：...</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，checkTimeOverlap校验时，政策有效区间与同一产品/型号的已有政策有效区间重叠</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>同一产品或型号在同一时间区间内不允许存在多个有效折扣政策，避免折扣冲突。常见根因：用户新建政策有效区间与已有政策重叠、或未检查已有政策有效期。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT a.discount_policy_id, a.discount_policy_code, a.effective_date_start, a.effective_date_end,
       b.discount_policy_id, b.discount_policy_code, b.effective_date_start, b.effective_date_end
FROM epm_discount_policy a
JOIN epm_discount_policy b ON b.discount_policy_id > a.discount_policy_id
JOIN epm_discount_policy_item ai ON ai.discount_policy_id = a.discount_policy_id
JOIN epm_discount_policy_item bi ON bi.discount_policy_id = b.discount_policy_id AND bi.item_code = ai.item_code
WHERE a.source_type = 'YXCRM' AND b.source_type = 'YXCRM'
  AND a.effective_date_start &lt;= b.effective_date_end
  AND a.effective_date_end >= b.effective_date_start;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-10" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>未找到该单据</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"删除"按钮，doDelete校验时，按DISCOUNT_POLICY_ID查询EPM_DISCOUNT_POLICY返回null</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>删除操作需先查询政策确认存在。若政策在删除前被其他用户物理删除、DISCOUNT_POLICY_ID传值错误、或政策从未存在，查询返回空。常见根因：并发操作删除政策、传参错误、或数据不一致。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, hz_approve_status
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{传入的discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-11" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>仅新建状态单据允许删除.</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"删除"按钮，doDelete校验时，政策HZ_APPROVE_STATUS≠NEW(新建)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>仅新建状态(HZ_APPROVE_STATUS=NEW)的政策允许删除，已提交审批、审批通过、审批驳回的政策不允许删除。常见根因：用户尝试删除已提交或已审批的政策、或前端未做状态判断。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, hz_approve_status, valid
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND hz_approve_status &lt;&gt; 'NEW';
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-12" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>导入数量不能超过{pageSize}</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"导入产品"按钮，Excel解析完成后，数据行数超过系统配置的pageSize上限</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>导入产品明细有数量限制，超过pageSize无法导入，避免性能问题和事务超时。常见根因：用户上传过大Excel文件、或未分批导入。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, COUNT(discount_policy_item_id) AS 导入行数
FROM epm_discount_policy_item
WHERE discount_policy_id = #{discountPolicyId}
GROUP BY discount_policy_id
HAVING COUNT(discount_policy_item_id) > #{pageSize};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-13" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>导入的产品编码查询不到对应的产品信息：{codes}</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"导入产品"按钮，调用CRM产品查询接口后，导入的产品编码在CRM返回结果中不存在</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>导入产品明细需关联CRM产品主数据，产品编码在CRM不存在则无法获取产品信息。常见根因：用户输入错误产品编码、产品在CRM未建档、或产品已失效。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.item_code, dpi.discount_policy_id
FROM epm_discount_policy_item dpi
LEFT JOIN crm_product_info cp ON cp.product_code = dpi.item_code AND cp.status = 'ACTIVE'
WHERE dpi.discount_policy_id = #{discountPolicyId} AND cp.product_code IS NULL;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-14" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品导入异常，请联系管理员！</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"导入产品"按钮，导入过程中抛出非CommonException异常(如IO异常、解析异常、空指针等)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>导入过程涉及Excel解析、CRM接口调用、数据组装等环节，任一环节异常都会导致导入失败。系统捕获Exception后统一抛出。常见根因：Excel文件格式损坏、CRM接口超时、数据库异常、或代码bug。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, hz_approve_status
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-15" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>请先维护OA系统信息</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存并提交"按钮，推送OA前校验OA系统配置(接口地址、用户名、密码等)缺失</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>推送OA审批需依赖OA系统配置，配置缺失则无法推送。常见根因：OA系统配置未维护、配置被误删、或环境切换后配置未同步。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT oa_bill_name, oa_url, oa_user, oa_password
FROM oa_bill_ref
WHERE oa_bill_name = 'YXZT样品折扣政策申请';
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-16" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>流程编码不能为空。</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存并提交"按钮，推送OA前校验流程编码(FlowCode)为空</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>推送OA审批需指定流程编码，流程编码为空则OA无法匹配审批流程。常见根因：前端未传FlowCode、流程编码配置缺失、或政策类型与流程编码映射未配置。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code, hz_approve_status, hz_instance_id
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-17" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>以下型号涉及新品，不允许通过型号定义折扣政策</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验产品行时，某行按型号(ITEM_MODEL)定义且该型号涉及新品</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>涉及新品的型号不允许通过型号定义折扣政策，必须通过具体产品编码制定。常见根因：用户误用型号定义新品政策、或新品标识未同步。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.discount_policy_id, dpi.item_model, dpi.item_code
FROM epm_discount_policy_item dpi
JOIN epm_discount_policy dp ON dp.discount_policy_id = dpi.discount_policy_id
WHERE dp.source_type = 'YXCRM' AND dpi.item_code IS NULL AND dpi.item_model IS NOT NULL
  AND dpi.item_model IN (SELECT item_model FROM epm_item_model WHERE new_prod_flag = 1);
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-18" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品编码:[{code}] 与型号：[{model}] 折扣政策冲突</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验产品行时，同一产品编码与型号存在多个折扣政策行冲突</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>同一产品编码与型号不允许在多个折扣政策行中重复定义，避免折扣冲突。常见根因：用户重复添加同一产品、或导入文件包含重复产品。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT item_code, item_model, COUNT(discount_policy_item_id) AS 重复行数
FROM epm_discount_policy_item
WHERE discount_policy_id = #{discountPolicyId} AND item_code IS NOT NULL AND item_model IS NOT NULL
GROUP BY item_code, item_model
HAVING COUNT(discount_policy_item_id) > 1;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-19" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品【{code}】本次下单数量【{qty}】，超过政策该经销商剩余可下单数量【{activeQty}】</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>要货订单下单时，updateActiveQty校验，某行QTY_BILL>折扣政策产品行该经销商剩余可下单数量</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>折扣政策对每个产品按经销商设定可下单数量上限，多个订单共享同一政策时需扣减。常见根因：并发下单导致可下单数量被其他订单扣减、或用户下单数量超过剩余可下单数量。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.item_code, dpi.active_qty,
       dpc.customer_code, dpc.remain_qty
FROM epm_discount_policy_item dpi
JOIN epm_discount_policy dp ON dp.discount_policy_id = dpi.discount_policy_id
LEFT JOIN epm_discount_policy_customer dpc ON dpc.discount_policy_id = dp.discount_policy_id
WHERE dp.source_type = 'YXCRM' AND dpi.active_qty &lt; dpc.remain_qty;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-20" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品【{code}】本次下单数量【{qty}】，超过政策全部经销商剩余可下单数量【{activeQty}】</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>要货订单下单时，updateActiveQty校验，某行QTY_BILL>折扣政策产品行全部经销商合计剩余可下单数量</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>折扣政策对每个产品设定全部经销商合计可下单数量上限。常见根因：并发下单导致可下单数量被其他经销商订单扣减、或用户下单数量超过政策总剩余可下单数量。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.item_code, dpi.active_qty, SUM(dpc.remain_qty) AS 全部经销商剩余
FROM epm_discount_policy_item dpi
JOIN epm_discount_policy dp ON dp.discount_policy_id = dpi.discount_policy_id
LEFT JOIN epm_discount_policy_customer dpc ON dpc.discount_policy_id = dp.discount_policy_id
WHERE dp.source_type = 'YXCRM'
GROUP BY dpi.discount_policy_item_id, dpi.item_code, dpi.active_qty
HAVING dpi.active_qty &lt; SUM(dpc.remain_qty);
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-21" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>请求CRM返回数据解析异常！</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"获取价格"按钮，调用CRM产品查询接口后，返回数据JSON解析失败</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>获取产品价格需调用CRM接口，返回数据为JSON格式，解析失败则无法获取价格。常见根因：CRM接口返回非JSON格式数据、CRM接口异常、或网络传输中断。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT discount_policy_id, discount_policy_code
FROM epm_discount_policy
WHERE source_type = 'YXCRM' AND discount_policy_id = #{discountPolicyId};
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-22" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>产品编码[{code}]请求CRM获取失败原因:[{msg}]</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"获取价格"按钮，调用CRM产品查询接口，CRM返回失败信息(msg)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>获取产品价格需调用CRM接口，CRM返回失败信息则无法获取价格。常见根因：产品编码在CRM不存在、产品已失效、或CRM接口业务异常。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.item_code, dpi.discount_policy_id
FROM epm_discount_policy_item dpi
LEFT JOIN crm_product_info cp ON cp.product_code = dpi.item_code AND cp.status = 'ACTIVE'
WHERE dpi.discount_policy_id = #{discountPolicyId} AND cp.product_code IS NULL;
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-23" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>Crm返回产品政策信息为空</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>调用CRM产品政策查询接口后，CRM返回空数据</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>获取产品政策信息需调用CRM接口，返回空则无法组装政策数据。常见根因：产品在CRM未配置政策、CRM接口异常、或产品编码错误。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dpi.discount_policy_item_id, dpi.item_code, dpi.discount_policy_id
FROM epm_discount_policy_item dpi
WHERE dpi.discount_policy_id = #{discountPolicyId}
  AND NOT EXISTS (SELECT 1 FROM crm_policy_info cpi WHERE cpi.item_code = dpi.item_code);
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div id="err-detail-24" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>客户的签约方式存在异常，请检查</h4>
    <h5>触发条件</h5>
    <div class="detail-text" v-pre>点击"保存"按钮，校验客户签约方式时，客户档案签约方式数据异常(为空或非法值)</div>
    <h5>逻辑分析</h5>
    <div class="detail-text" v-pre>折扣政策关联客户时需校验客户签约方式，签约方式异常则政策无法正确执行。常见根因：客户档案签约方式未维护、签约方式数据被误改、或客户档案数据不一致。</div>
    <h5>排查SQL</h5>
    <div class="detail-text" v-pre>
```sql
SELECT dp.discount_policy_id, dp.discount_policy_code,
       dpc.customer_id, dpc.customer_code, c.contract_type AS 签约方式
FROM epm_discount_policy dp
JOIN epm_discount_policy_customer dpc ON dpc.discount_policy_id = dp.discount_policy_id
LEFT JOIN customer c ON c.customer_id = dpc.customer_id
WHERE dp.source_type = 'YXCRM' AND (c.contract_type IS NULL OR c.contract_type NOT IN (1, 2));
```
    </div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">常见问题</span>
    <h2>其他常见问题</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li><strong>问题1：OA审批推送失败</strong><br>原因：OA系统不可用或数据组装异常<br>解决思路：检查OA系统状态和OA单据配置"YXZT样品折扣政策申请"</li>
    <li><strong>问题2：产品导入失败</strong><br>原因：产品编码不存在或文件格式错误<br>解决思路：检查Excel文件格式和产品编码是否在CRM系统中存在</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="changelog" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">更新记录</span>
    <h2>更新记录</h2>
    <p>本菜单页面的修订历史</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">日期</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">提交ID</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">提交人</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">提交内容</th></tr></thead>
      <tbody>
        <tr><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">2026-08-31</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">基于MD源文件完整重写详细逻辑区块：补全列表页/详情页字段表、选择弹窗、导入逻辑、按钮详情、保存/提交校验、状态机、数据库表详解、24个FAQ报错详情</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">2026-08-30</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">按skill规范重写知识库文档</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;color:#374151;">2025-09-15</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">lfb</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">初始创建折扣类型政策功能</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>
</div>

<div id="history" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">历史排查记录</span>
    <h2>历史排查记录</h2>
    <p>本菜单相关的历史问题排查留痕</p>
  </div>
  <p style="font-size:.78rem;color:#6B7280;margin:0;">暂无历史排查记录。</p>
</div>

</div>
</div>
</div>

<div id="manual" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">操作手册</span>
    <h2>操作手册</h2>
    <p>本菜单的操作指导文档</p>
  </div>
  <p style="font-size:.78rem;color:#6B7280;margin:0;">暂无操作手册。</p>
</div>

</div>
</div>
</div>