---
---

<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">背景与动机</span>
    <h2>为何要做样品及长库龄要货订单</h2>
    <p>门店向集团申请样品及长库龄产品发货的业务单据，与工程/家装要货共用同一套表结构</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">业务隔离</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">与工程要货、家装要货共用 SA_OUT_BILL_HEAD / SA_OUT_BILL_LINE，通过 IS_MAKT=2 区分数据归属，确保统计准确。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#F59E0B,#FBBF24);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H12M12 6L9 3M12 6L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10H4M4 10L7 7M4 10L7 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">价格双轨</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">支持折扣政策(priceType=2，走OA审批)与价目表(priceType=3，直接生成CRM)两种价格模式。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#10B981,#34D399);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">下游贯通</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">审批通过或价目表模式直接生成CRM订单，并推送ERP发货，形成要货到发货的闭环。</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">定义</span>
    <h2>本质 & 具体是什么</h2>
    <p>门店维度的"要货申请"，头表 + 行表结构，按业务类型与价格类型细分</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"/><circle cx="8" cy="8" r="3" stroke="white" stroke-width="1.5"/><circle cx="8" cy="8" r="1" fill="white"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">业务类型 businessType</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>3</strong> — 样品</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>12</strong> — 家装样品</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>16</strong> — 长库龄</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">价格类型 priceType</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;"><div style="font-size:.75rem;"><strong>2 = 折扣政策</strong> — 必填折扣政策，保存并提交走 OA 审批</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;"><div style="font-size:.75rem;"><strong>3 = 价目表</strong> — 必填业务类型，保存并提交直接生成 CRM 订单</div></div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>数据隔离：</strong>列表查询固定带 isMakt=2、searchFlag=1，仅返回样品及长库龄要货订单；新建时头表 IS_MAKT 默认赋 2；折扣政策弹窗 lovPara 传入 isMakt='2'，仅返回适用政策。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>样品及长库龄要货订单全流程</h2>
    <p>从新建到 ERP 发货，价格模式决定审批路径</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>新建 / 编辑</h5>
      <small>列表页新建，进入<br>详情页维护头信息</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="1" width="10" height="14" rx="1" stroke="white" stroke-width="1.5"/><path d="M6 5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 8H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 11H8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>选价格模式</h5>
      <small>折扣政策(priceType=2)<br>或价目表(priceType=3)</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L10 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 5H11C12.1046 5 13 5.89543 13 7V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M10 11H7C5.89543 11 5 10.1046 5 9V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>添加行 / 选样品</h5>
      <small>校验起订量/封顶量<br>或价格完整性</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#f59e0b,#d97706);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="14" height="10" rx="1" stroke="white" stroke-width="1.5"/><path d="M1 7H12" stroke="white" stroke-width="1.5"/><circle cx="12" cy="10.5" r="1.5" fill="white"/></svg></div>
      <h5>保存并提交</h5>
      <small>OA审批(政策) 或<br>直接生成CRM(价目表)</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#3B82F6,#2563EB);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8L6 12L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>CRM / ERP</h5>
      <small>生成CRM订单<br>推送ERP发货</small>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">角色</span>
    <h2>谁在做？主要在做什么？</h2>
    <p>门店运营 / 业务员发起，价格模式决定审批与下游动作</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">角色</th><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">职责</th></tr></thead>
      <tbody>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店运营 / 业务员</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表页新建、详情页维护头信息与行、保存草稿、保存并提交</td></tr>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA 审批人</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">priceType=2 时审核 OA 流程（单据名 YPYHDD），通过或拒绝</td></tr>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;">CRM / ERP 系统</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;">审批通过或价目表模式生成 CRM 订单（businessType 映射 Sample/HomeDecorationSample/Long_Inv_Age），推送 ERP 发货</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程图</span>
    <h2>业务流程图</h2>
    <p>新建 → 编辑头信息 → 选价格模式 → 添加行选样品 → 保存并提交 → 审批/生成CRM → ERP发货</p>
  </div>
</div>

```text
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  进入列表页  │────▶│  新建/查看    │────▶│  编辑头信息   │
└─────────────┘     │  详情页      │     └──────┬───────┘
                    └──────────────┘            │
                                                ▼
                                      ┌──────────────────┐
                                      │ 选择折扣政策/价目表│
                                      │ (priceType=2/3)  │
                                      └────────┬─────────┘
                                               │
                              ┌────────────────┼────────────────┐
                              ▼                                 ▼
                    ┌──────────────────┐         ┌──────────────────┐
                    │ priceType=2      │         │ priceType=3      │
                    │ 折扣政策模式     │         │ 价目表模式       │
                    └────────┬─────────┘         └────────┬─────────┘
                             │                            │
                             ▼                            ▼
                    ┌──────────────────┐         ┌──────────────────┐
                    │ 添加行/选择样品  │         │ 添加行/选择样品  │
                    │ 校验起订量/封顶量│         │ 校验价格完整性   │
                    └────────┬─────────┘         └────────┬─────────┘
                             │                            │
                             ▼                            ▼
                    ┌──────────────────┐         ┌──────────────────┐
                    │ 保存并提交       │         │ 保存并提交       │
                    │ (save-and-submit)│         │ (update-create-  │
                    └────────┬─────────┘         │  crm)            │
                             │                   └────────┬─────────┘
                             ▼                            │
                    ┌──────────────────┐                  │
                    │ OA审批流程       │                  │
                    │ doOaRequestOrder │                  │
                    │ Audit            │                  │
                    └────────┬─────────┘                  │
                             │                            │
                ┌────────────┼────────────┐               │
                ▼            ▼             ▼               │
          ┌─────────┐  ┌─────────┐  ┌──────────┐          │
          │审批通过  │  │审批拒绝  │  │审批中    │          │
          └────┬────┘  └────┬────┘  └──────────┘          │
               │            │                              │
               ▼            ▼                              ▼
          ┌─────────┐  ┌─────────┐              ┌──────────────────┐
          │生成CRM  │  │退回修改  │              │直接生成CRM订单   │
          │订单     │  │(stat=4) │              │(hzApproveStatus  │
          └────┬────┘  └─────────┘              │=NO_APPROVED)    │
               │                                 └────────┬─────────┘
               ▼                                          │
          ┌─────────┐                                     │
          │ERP发货  │◀────────────────────────────────────┘
          └─────────┘
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">上游依赖</span>
    <h2>上游依赖</h2>
    <p>页面渲染与保存提交依赖的主数据与外部系统</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">上游模块</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">依赖类型</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">依赖说明</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">依赖成立条件</th></tr></thead>
      <tbody>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策管理</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策选择弹窗 AE.GET_POLICY，提供政策编码、名称、渠道、有效期、坎级、起订量、封顶量等</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">priceType=2 时必填</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价目表管理</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">价目表选择，提供产品标准单价、安装单价</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">priceType=3 时启用</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商选择弹窗 BASIC_CUSTOM_ORG_LOV_2，提供客户编码、名称、简称、销售区域</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单必填</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店选择弹窗 SA_MKT_TERMINAL_LOV2，提供门店编码、名称、经营属性、运营中心</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商已选择</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品选择弹窗，提供样品编码、名称、型号、SM状态、包安装否、标准单价</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">行表格添加行时</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人选择弹窗 AE.CUSTOMER_ADDRESS_INFO，提供收货人、联系电话、收货地址</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单必填</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">交易公司主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司选择弹窗 TRADING_LEGAL_SQL_V，提供交易公司、开票单位</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单必填</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目选择弹窗 AE.GET_PROJECT_INFO，提供项目编码、名称</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道非3且非4时可选</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品线主数据</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">LOV依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单产品线选择弹窗 AE.ORDER_PDT_LINE_SQL</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单必填</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">RPC调用</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">doOaRequestOrderAudit 推送 OA 审批流程，单据名称 YPYHDD</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">priceType=2 保存并提交时</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">RPC调用</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">生成 CRM 订单，businessType 映射 3→Sample / 12→HomeDecorationSample / 16→Long_Inv_Age</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批通过或 priceType=3 直接生成</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">ERP发货系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">RPC调用</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">ERP 发货处理</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM 订单生成后</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">值集管理</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">值集依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">HWKF.APPROVE_STATUS、AE.EPM.PRICE_TYPE、AE.EPM.REQUIRE_BILL.ORDER_STAT、AE.EPM.DIVISION 等</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">页面渲染时</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;">用户权限系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">权限依赖</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">roleList 含 'AE20250907' 控制删除按钮显隐</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">列表操作列</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">下游影响</span>
    <h2>下游影响</h2>
    <p>订单提交后对 CRM、ERP 及各关联模块的回写与联动</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">影响</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">说明</th></tr></thead>
      <tbody>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM 订单系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批通过后生成 CRM 订单，CRM 订单号回写 SA_OUT_BILL_HEAD.SA_SALEBILLNO；businessType=3 生成 Sample、12 生成 HomeDecorationSample、16 生成 Long_Inv_Age</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">ERP 发货系统</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM 订单生成后推送 ERP 发货，发货数量回写 SA_OUT_BILL_LINE 已发数量</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策可下单数量</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存时调用 updateActiveQty 扣减可下单数量，删除/取消时返还</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA 审批流程实例</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">priceType=2 保存并提交时创建 OA 流程实例，编码按渠道区分 SAMPLE_ORDER_REQUEST_PROJECT（渠道4）或 SAMPLE_ORDER_REQUEST_NO_ROJECT（其他）</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品 SM 状态管理</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">下单时校验产品 SM 状态，smState='Z8' 禁止下单，'Z6'/'S6' 提示关注</td></tr>
        <tr><td style="padding:10px 12px;font-size:.73rem;font-weight:700;color:#111827;">地址变更历史</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">同步地址信息按钮触发地址变更历史记录，写入地址变更历史 Tab</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 1</span>
    <h2>isMakt=2 样品及长库龄标识区分</h2>
    <p>与工程/家装要货共用表，靠 IS_MAKT=2 隔离数据归属</p>
  </div>
  <p style="font-size:.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">业务意义：确保业务隔离与统计准确，避免与工程/家装要货数据混淆。</p>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>列表查询固定带参数 isMakt=2、searchFlag=1，仅返回样品及长库龄要货订单数据</li>
    <li>新建订单时头表 IS_MAKT 字段默认赋值为 2</li>
    <li>折扣政策选择弹窗 lovPara 传入 isMakt='2'，仅返回样品及长库龄适用的折扣政策</li>
    <li>businessType 进一步细分：3=样品、12=家装样品、16=长库龄</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 2</span>
    <h2>价格类型双轨制</h2>
    <p>折扣政策(priceType=2)走 OA 审批；价目表(priceType=3)直接生成 CRM</p>
  </div>
  <p style="font-size:.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">业务意义：满足不同业务场景的审批严格度要求。</p>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>priceType=2 时折扣政策必填，业务类型非必填，保存并提交走 OA 审批（hzApproveStatus=NEW）</li>
    <li>priceType=3 时业务类型必填，折扣政策非必填，保存并提交直接生成 CRM 订单（hzApproveStatus=NO_APPROVED）</li>
    <li>priceType 选择框 optionsFilter 仅允许 2 或 3，stat=5 或已审批或 crm_edit_flag=2 时 disabled</li>
    <li>priceType 切换时联动清空折扣政策相关字段、重置业务类型必填校验</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 3</span>
    <h2>期望到达日期严格校验</h2>
    <p>按订单类型与销售渠道限制期望到达日期范围，避免超期下单</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>常规订单(billType=1)每月 25 号前下单，期望到达日期需为当月；25 号后仅瓷砖产品线可下常规订单</li>
    <li>计划订单(billType=2)电商渠道可选当月往后 6 个月内，其他渠道 3 个月内</li>
    <li>期望到达日期不能晚于折扣政策有效期（effectiveDateEnd）</li>
    <li>DatePicker 组件 max 设为一年后、min 设为今天，stat=5 或已审批时 disabled</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 4</span>
    <h2>产品 SM 状态拦截</h2>
    <p>按产品生命周期状态控制下单权限，避免对停产/淘汰产品下单</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>smState='Z8' 禁止下单，硬拦截</li>
    <li>smState='Z6' 计划淘汰中，提示关注但允许下单</li>
    <li>smState='S6' 进入售后阶段，提示关注但允许下单</li>
    <li>smState='Z7' 有库存数量发完即止，限制下单数量不超过库存</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 5</span>
    <h2>起订量与封顶量校验</h2>
    <p>基于折扣政策产品的起订量和坎级封顶量控制订单行数量</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>订单行数量(qtyBill) ≥ 折扣政策产品行起订量，低于起订量拦截</li>
    <li>订单行数量(qtyBill) ≤ 折扣政策坎级封顶量，超过封顶量拦截</li>
    <li>保存时调用 updateActiveQty 扣减可下单数量，删除/取消时返还</li>
    <li>get-view-qty 按钮(priceType=2)可查看下单数量及坎级信息</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">重点逻辑 6</span>
    <h2>紧急加急行数限制</h2>
    <p>仅计划订单允许加急，限制紧急行数比例，避免冲击生产排期</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>仅计划订单(billType=2 或 14)可加急，常规订单不可加急</li>
    <li>紧急行数上限 = ceil(总行数/5)，即最多 20% 的行可加急</li>
    <li>行 urgency 字段 Boolean(2/1)，editFlag 且 billType=2 时可编辑</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 1</span>
    <h2>列表页查询栏</h2>
    <p>列表页顶部查询条件字段（均始终显示）</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th></tr></thead>
      <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">要货单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货订单编号，模糊查询</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入，支持模糊匹配</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">单据状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 HWKF.APPROVE_STATUS</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REVIWESTATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批是否成功</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，Boolean 2=成功 / 1=失败</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM回写的订单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入，精确匹配</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价格类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策或价目表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.EPM.PRICE_TYPE</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联项目编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联项目名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据业务状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.EPM.REQUIRE_BILL.ORDER_STAT</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DIVISION_ID</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所属事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.EPM.DIVISION</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户简称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经营属性</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店经营属性</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.CUSTOMER_CLASS</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售渠道</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.MKT.SALES_CHANNEL</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常规/计划订单</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.EPM.BILL_TYPE</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">签约方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集 AE.EPM.CONTRACT_TYPE</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期从</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE_BEGIN</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期范围起</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动选择</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期至</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE_END</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期范围止</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动选择</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_MAN</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人姓名</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">联系电话</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人电话</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据创建人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">订单日期从</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">DATE_INVBILL_BEGIN</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">DatePicker</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">订单日期范围起</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">默认空，手动选择</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">订单日期至</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">DATE_INVBILL_END</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">DatePicker</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">订单日期范围止</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">默认空，手动选择</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 2</span>
    <h2>列表页表格</h2>
    <p>列表页结果字段（均始终显示）</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th></tr></thead>
      <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">序号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Index</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行序号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动生成</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据业务状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">流程状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批流程状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">拒绝时红色显示</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">要货单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Link</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货订单编号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">点击跳转详情页</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审核状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审核状态描述</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批成功</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REVIWESTATUS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批是否成功</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Boolean 翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM回写订单号</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价格类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策/价目表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DIVISION_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户简称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">币种</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CURRENCY</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易币种</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">交易公司</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TRADING_COMPANY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">开票单位</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILLING_UNIT_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经营属性</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店经营属性</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售区域</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SALES_AREA</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售区域</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">运营中心</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OPERATION_CENTER</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">运营中心</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_MAN</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人姓名</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">联系电话</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人电话</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常规/计划订单</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售渠道</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">签约方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_CODE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NOTE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据备注</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">接口状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTF_INFO</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM接口返回信息</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建人姓名</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATION_DATE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">修改人</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">LAST_UPDATED_BY_NAME</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">修改人姓名</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">修改时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">LAST_UPDATE_DATE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">修改时间</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">操作-查看</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Button</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看按钮</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">点击跳转详情页</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">操作-删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">Button</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">删除按钮</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">hzApproveStatus='NEW' 且 saSalebillno 为空时显示</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>
</div>

<div id="permission" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(239,68,68,0.08);color:#DC2626;border-color:rgba(239,68,68,0.18);">权限控制</span>
    <h2>删除按钮权限</h2>
    <p>列表操作列的删除按钮按角色显隐</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>roleList 含 'AE20250907' 时，删除按钮才显示</li>
    <li>同时需满足：backEditFlag 且 saSalebillno 为空 且 hzApproveStatus='NEW'</li>
    <li>删除动作：校验 hzApproveStatus≠APPROVED、stat≠5、isAuditingWh≠2、saSalebillno 为空，调用 updateActiveQty 返还可下单数量，删除头行数据</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(239,68,68,0.08);color:#DC2626;border-color:rgba(239,68,68,0.18);">用户权限</span>
    <h2>字段与按钮的权限依赖</h2>
    <p>页面渲染时按值集与角色决定字段显隐与可编辑</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>值集依赖：HWKF.APPROVE_STATUS、AE.EPM.PRICE_TYPE、AE.EPM.REQUIRE_BILL.ORDER_STAT、AE.EPM.DIVISION、AE.CUSTOMER_CLASS、AE.MKT.SALES_CHANNEL、AE.EPM.BILL_TYPE、AE.EPM.CONTRACT_TYPE 等用于下拉翻译</li>
    <li>角色依赖：userType='D' 时经销商字段 disabled；crmEditFlag=2 时多处字段 disabled；stat=5 或已审批时价格类型、期望到达日期等 disabled</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">报错一览表</span>
    <h2>常见报错与根因</h2>
    <p>保存/提交/删除环节的典型报错与解决方案</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">报错信息</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">提示节点</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">根因与解决方案</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">等级</th></tr></thead>
      <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">业务类型不能为空</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">isMakt=2 时 businessType 必填，选择业务类型后保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策与单据信息不一致</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">businessType/channel/billType 需与折扣政策一致，重新选择折扣政策或调整单据信息</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品{code}下单数量{qty}低于起订量{moq}</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下单数量需 ≥ 折扣政策起订量，调整下单数量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品{code}下单数量{qty}超过封顶量{capQty}</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下单数量需 ≤ 折扣政策封顶量，调整下单数量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期不能晚于政策有效期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期需 ≤ 政策有效期至，调整期望到达日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">紧急行数超过上限{maxQty}</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">紧急行数上限 = ceil(总行数/5)，减少紧急行数</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品{code}已停产，禁止下单</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品 SM状态='Z8' 禁止下单，移除该行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品{code}可下单数量不足</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">提交校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策可下单数量不足，调整下单数量或联系管理员</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">单据已经审核，不允许删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除操作</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">hzApproveStatus=APPROVED 或 stat=5 或 isAuditingWh=2，不可删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">具备了订单号的订单，不允许删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除操作</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">saSalebillno 不为空，已生成 CRM 订单不可删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">高</td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">价格不能为空或小于等于0</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">行价格字段缺失或异常，重新选择产品或联系管理员</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;">高</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">常见问题</span>
    <h2>常见问题排查思路</h2>
    <p>从现象到根因的快速定位</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li><strong>折扣政策选择弹窗无数据：</strong>当前经销商无可用折扣政策，或折扣政策已过期，或 isMakt 参数未正确传入（应为 '2'）</li>
    <li><strong>保存并提交按钮不可点击：</strong>priceType=3 时该按钮隐藏，改用"生成CRM订单"；priceType=2 时需处于编辑状态</li>
    <li><strong>OA审批流程未推送：</strong>流程编码未匹配（渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT），或 OA 接口异常</li>
    <li><strong>CRM订单生成失败：</strong>businessType 映射异常（须为 3/12/16），或 CRM 接口异常，查看 INTF_INFO 字段获取返回信息</li>
    <li><strong>可下单数量未正确扣减：</strong>updateActiveQty 未正确执行，或折扣政策产品行不存在，检查 DISCOUNT_POLICY_LINE.ACTIVE_QTY</li>
    <li><strong>期望到达日期无法选择当月之后：</strong>常规订单(billType=1) 25号前仅允许当月；计划订单(billType=2) 渠道限制范围（电商6个月/其他3个月）</li>
    <li><strong>展厅产品安装金额不为0：</strong>customerSubclass=5 展厅产品强制 INSTALL_UNIT_AMT=0、IS_INSTALL=0，检查该字段</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="changelog" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">更新记录</span>
    <h2>更新记录</h2>
    <p>本菜单页面的修订历史</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">日期</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">提交ID</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">提交人</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">提交内容</th></tr></thead>
      <tbody>
        <tr><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">2026-08-30</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">按最新逻辑梳理MD重写：遵循知识库样式规范，BreadcrumbTabs + biz-intro/biz-flow/key-logic/detail-logic/permission/faq/changelog 区块</td></tr>
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
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">历史排查记录</span>
    <h2>历史排查记录</h2>
    <p>本菜单相关的历史问题排查留痕</p>
  </div>
  <p style="font-size:.78rem;color:#6B7280;margin:0;">暂无历史排查记录。</p>
</div>

</div>
</div>
</div>
