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
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">要货单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货订单编号，模糊查询</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入，支持模糊匹配</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">单据状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集HWKF.APPROVE_STATUS</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REVIWESTATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批是否成功</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，Boolean值2=成功/1=失败</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM系统回写的订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入，精确匹配</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策或价目表</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.PRICE_TYPE</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据业务状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DIVISION_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所属事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.DIVISION</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.CUSTOMER_CLASS</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.MKT.SALES_CHANNEL</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常规/计划订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.BILL_TYPE</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.CONTRACT_TYPE</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期从</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE_BEGIN</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期范围起</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动选择</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期至</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE_END</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期范围止</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动选择</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_MAN</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人姓名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">联系电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据创建人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单日期从</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE_INVBILL_BEGIN</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单日期范围起</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，手动选择</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">订单日期至</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">DATE_INVBILL_END</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">订单日期范围止</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">默认空，手动选择</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 2</span>
    <h2>列表页表格</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">序号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Index</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行序号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动生成</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据业务状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">流程状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批流程状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">拒绝时红色显示</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">要货单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Link</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货订单编号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">点击跳转详情页</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审核状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审核状态描述</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OA审批成功</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REVIWESTATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批是否成功</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Boolean翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM回写订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策/价目表</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DIVISION_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">客户简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CURRENCY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">交易公司</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TRADING_COMPANY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">开票单位</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILLING_UNIT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SALES_AREA</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OPERATION_CENTER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_MAN</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人姓名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">联系电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常规/计划订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">来源值集翻译</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">接口状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTF_INFO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM接口返回信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建人姓名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">创建时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATION_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">修改人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">LAST_UPDATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">修改人姓名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">修改时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">LAST_UPDATE_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">修改时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">操作</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Button</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看按钮</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">点击跳转详情页</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">操作</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">Button</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">删除按钮</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">hzApproveStatus='NEW'且saSalebillno为空</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">点击触发删除</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 3</span>
    <h2>详情页头表单</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">要货单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货订单编号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，保存后后端生成，disabled不可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE_INVBILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据创建日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认值当前日期，disabled不可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">申请人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据创建人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认值当前登录用户，disabled不可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据业务状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT，disabled不可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策/价目表</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.PRICE_TYPE_MAKT，optionsFilter仅允许2或3，stat=5或已审批或crm_edit_flag=2时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:AE.GET_POLICY，lovPara含isMakt:'2'、isDilterMaterial:true，priceType=2时必填，已审批/priceType≠2/crmEditFlag=2时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择折扣政策后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择折扣政策后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策有效期至</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">EFFECTIVE_DATE_END</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策有效期截止</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择折扣政策后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:BASIC_CUSTOM_ORG_LOV_2，必填，已审批/crmEditFlag=2/userType='D'时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择经销商后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择经销商后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SALES_AREA</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择经销商后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:SA_MKT_TERMINAL_LOV2，lovPara:usable:2、terminalStat:1、searchFlag:3、custId、custCode，选择经销商后可用</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择门店后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择门店后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OPERATION_CENTER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择门店后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">业务类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BUSINESS_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品/家装样品/长库龄</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.MAKT.BUSINESS_TYPE，priceType=3时必填，已审批/crmEditFlag=2/priceType≠3时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IN_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DatePicker</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，必填，max:一年后、min:今天，stat=5或已审批时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">常规/计划订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.EPM.BILL_TYPE，必填，optionsFilter仅允许1、2</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">订单产品线</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ORDER_PDT_LINE_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单产品线选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:AE.ORDER_PDT_LINE_SQL，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DIVISION_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所属事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认值当前用户deptName，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">交易公司</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TRADING_COMPANY_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:TRADING_LEGAL_SQL_V，必填，lovPara:searchFlag:4、tradingScope:1</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">开票单位</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILLING_UNIT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择交易公司后自动带出，disabled，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，来源值集AE.MKT.SALES_CHANNEL，bind:discountPolicyObj.channel，priceType=3时必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:AE.GET_PROJECT_INFO，渠道非3且非4时disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择项目后自动带出，disabled，colSpan=2</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Select</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认值'2'，来源值集AE.EPM.CONTRACT_TYPE，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_MAN_OBJ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Lov</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人选择</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，LOV:AE.CUSTOMER_ADDRESS_INFO，必填，lovPara:searchFlag:1</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">联系电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择收货人后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择收货人后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM回写订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，后端返回，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">余额账户</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ACCOUNT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">余额账户名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">可发货余额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MAY_CONSIGNMENT_AMOUNT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NumberField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可发货余额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">申请数量合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_SUM</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NumberField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所有行数量合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=SUM(行qtyBill)，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">申请金额合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">WTAMOUNT_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所有行折后金额合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=SUM(行wtamountBill)，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CURRENCY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextField</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择经销商后自动带出，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextArea</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单据备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，stat=5或已审批时disabled，newLine，colSpan=4</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">返回原因</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">RETURN_REASON</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TextArea</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批退回原因</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">orderStat=11或4时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，disabled</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">CRM返回信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">INTF_INFO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">TextArea</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">CRM接口返回信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">intfInfo非空时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">后端返回，disabled</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 4</span>
    <h2>详情页行表格</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据库列名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">组件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">业务释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">序号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Index</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行序号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动生成</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折扣信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_INFO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策坎级信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">viewQty=true时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策可下单数</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ACTIVE_QTY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策可下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">viewQty=true时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MATERIAL_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品产品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后自动带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MATERIAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品产品名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后自动带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">本次下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">本次申请下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，必填，min:1，step:1，editFlag时可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">已发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_DELIVERED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">已发货数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">未发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_UNDELIVERED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">未发货数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=qtyBill-qtyDelivered</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">取消数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_CANCELLED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">取消数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">回复数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">QTY_REPLY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">回复备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REPLY_NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">型号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MODEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品型号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后自动带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">是否紧急</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">URGENCY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Boolean</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否加急</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认1=否，Boolean(2/1)，editFlag且billType=2时可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计合同折扣(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_DISCOUNT_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原合同折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计合同折扣(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CONTRACT_DISCOUNT_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新合同折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计广告费(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">AD_FEE_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原广告费</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计广告费(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">AD_FEE_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新广告费</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计开单折扣(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_DISCOUNT_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原开单折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">计开单折扣(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BILL_DISCOUNT_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新开单折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">标准单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标准单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后自动带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INSTALL_UNIT_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后自动带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">标准单价不含安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">STANDARD_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">不含安装的标准单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=priceBill-installUnitPrice</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">包安装否</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IS_INSTALL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Boolean</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否包安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认2=是，Boolean(2/1)，展厅(customerSubclass=5)时强制为0</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">应用折扣率</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_RATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">应用折扣率</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:5</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">安装金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">INSTALL_UNIT_AMT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=qtyBill×installUnitPrice，展厅时为0</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折后单价含</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNT_INSTALLATION</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后含安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:7</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折后单价不含</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DISCOUNTED_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后不含安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:7</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">折后金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">WTAMOUNT_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Currency</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=qtyBill×discountedPrice，precision:2</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SM状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SM_STATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品SM状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">整箱包装数</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PACKAGE_QTY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">整箱包装数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">说明</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Text</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认空，editFlag时可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">全国生产起订量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MOQ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全国生产起订量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">全国当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">MONTH_SUBMIT_QTY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">Number</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">全国当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">billType=2时显示</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">后端返回</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 5</span>
    <h2>详情页Tab结构</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">Tab名称</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">内容</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品要货</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单+行表格</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">地址变更历史</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">地址变更历史记录表格</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">附件</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">附件上传管理</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">attachConfId=8161</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">流程审批</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">OA审批流程记录</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">hzInstanceId存在时显示</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">选择弹窗</span>
    <h2>选择弹窗</h2>
    <p>8 个单选 LOV 弹窗的入参与查询 SQL</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 1</span>
    <h2>折扣政策选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">isMakt</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">固定值2，区分样品及长库龄</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IS_MAKT=2的政策</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">isDilterMaterial</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">过滤物料</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否过滤物料</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">true</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">priceType</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策=2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_TYPE=2</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">custId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前选择的经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">10001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该客户可用政策</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">custCode</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前选择的经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">C001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">channel</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">当前销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">匹配渠道的政策</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT dp.POLICY_ID          AS 政策ID,
       dp.POLICY_CODE        AS 政策编码,
       dp.POLICY_NAME        AS 政策名称,
       dp.CHANNEL            AS 销售渠道,
       dp.EFFECTIVE_DATE_BEGIN AS 有效期从,
       dp.EFFECTIVE_DATE_END   AS 有效期至,
       dp.BUSINESS_TYPE      AS 业务类型,
       dp.BILL_TYPE          AS 订单类型
  FROM DISCOUNT_POLICY dp
 WHERE dp.IS_MAKT = 2
   AND dp.PRICE_TYPE = 2
   AND dp.STATUS = 'ACTIVE'
   AND SYSDATE BETWEEN dp.EFFECTIVE_DATE_BEGIN AND dp.EFFECTIVE_DATE_END
   AND dp.CUST_ID = :custId
   AND dp.CHANNEL = :channel
 ORDER BY dp.POLICY_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 2</span>
    <h2>经销商选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">searchFlag</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">divisionId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">100</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该事业部下客户</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">userType</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">用户类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">D=经销商</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">D</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT c.CUSTOMER_ID        AS 客户ID,
       c.CUSTOMER_CODE      AS 客户编码,
       c.CUSTOMER_NAME      AS 客户名称,
       c.CUSTOMER_SHORT_NAME AS 客户简称,
       c.SALES_AREA         AS 销售区域,
       c.CURRENCY           AS 币种
  FROM CUSTOMER c
 WHERE c.USER_TYPE = 'D'
   AND c.STATUS = 'ACTIVE'
   AND c.DIVISION_ID = :divisionId
 ORDER BY c.CUSTOMER_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 3</span>
    <h2>门店选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">usable</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可用标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否可用</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">terminalStat</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">启用状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">TERMINAL_STAT=1</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">searchFlag</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">3</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">custId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">10001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该客户下门店</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">custCode</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">客户编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">C001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT t.TERMINAL_ID        AS 门店ID,
       t.TERMINAL_CODE      AS 门店编码,
       t.TERMINAL_NAME      AS 门店名称,
       t.CUSTOMER_CLASS     AS 经营属性,
       t.OPERATION_CENTER   AS 运营中心
  FROM TERMINAL t
 WHERE t.USABLE = 2
   AND t.TERMINAL_STAT = 1
   AND t.CUST_ID = :custId
   AND t.STATUS = 'ACTIVE'
 ORDER BY t.TERMINAL_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 4</span>
    <h2>样品产品选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">discountPolicyId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前折扣政策</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">20001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该政策下产品</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">custId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">10001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">isMakt</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">固定值2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品产品</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">businessType</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">业务类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">3/12/16</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">3</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">匹配业务类型产品</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT m.MATERIAL_ID        AS 产品ID,
       m.MATERIAL_CODE      AS 产品编码,
       m.MATERIAL_NAME      AS 产品名称,
       m.MODEL              AS 型号,
       m.SM_STATE           AS SM状态,
       m.IS_INSTALL         AS 包安装否,
       m.PRICE_BILL         AS 标准单价,
       m.INSTALL_UNIT_PRICE AS 安装单价,
       m.PACKAGE_QTY        AS 整箱包装数,
       dpl.MOQ              AS 起订量,
       dpl.CAP_QTY          AS 封顶量,
       dpl.ACTIVE_QTY       AS 可下单数量
  FROM MATERIAL m
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.MATERIAL_ID = m.MATERIAL_ID
 WHERE dpl.POLICY_ID = :discountPolicyId
   AND m.IS_MAKT = 2
   AND m.STATUS = 'ACTIVE'
   AND m.SM_STATE NOT IN ('Z8')
 ORDER BY m.MATERIAL_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 5</span>
    <h2>收货人选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">searchFlag</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">custId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">客户ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">10001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">该客户收货地址</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT ca.ADDRESS_ID       AS 地址ID,
       ca.TAKE_MAN         AS 收货人,
       ca.TAKE_PHONE       AS 联系电话,
       ca.TAKE_ADDRESS     AS 收货地址
  FROM CUSTOMER_ADDRESS ca
 WHERE ca.CUST_ID = :custId
   AND ca.STATUS = 'ACTIVE'
 ORDER BY ca.DEFAULT_FLAG DESC, ca.ADDRESS_ID
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 6</span>
    <h2>交易公司选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">searchFlag</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">4</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">tradingScope</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易范围</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易范围标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">divisionId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">事业部ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">当前事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">100</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT tc.TRADING_COMPANY_ID   AS 交易公司ID,
       tc.TRADING_COMPANY_CODE AS 交易公司编码,
       tc.TRADING_COMPANY_NAME AS 交易公司名称,
       tc.BILLING_UNIT_ID      AS 开票单位ID,
       tc.BILLING_UNIT_NAME    AS 开票单位名称
  FROM TRADING_LEGAL tc
 WHERE tc.TRADING_SCOPE = 1
   AND tc.STATUS = 'ACTIVE'
   AND tc.DIVISION_ID = :divisionId
 ORDER BY tc.TRADING_COMPANY_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 7</span>
    <h2>项目选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">custId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">客户ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">10001</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">该客户关联项目</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">channel</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">当前渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT p.PROJECT_ID     AS 项目ID,
       p.PROJECT_CODE   AS 项目编码,
       p.PROJECT_NAME   AS 项目名称
  FROM PROJECT p
 WHERE p.CUST_ID = :custId
   AND p.STATUS = 'ACTIVE'
   AND SYSDATE BETWEEN p.EFFECTIVE_DATE_BEGIN AND p.EFFECTIVE_DATE_END
 ORDER BY p.PROJECT_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">弹窗 8</span>
    <h2>订单产品线选择（单选）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">入参</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;"></th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">数据范围</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">字段名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">中文名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">释义</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">示例</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;"></td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">divisionId</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">事业部ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">当前事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">100</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">&gt; 查询SQL：</p>

```sql
SELECT pl.PDT_LINE_ID   AS 产品线ID,
       pl.PDT_LINE_CODE AS 产品线编码,
       pl.PDT_LINE_NAME AS 产品线名称
  FROM ORDER_PDT_LINE pl
 WHERE pl.STATUS = 'ACTIVE'
   AND pl.DIVISION_ID = :divisionId
 ORDER BY pl.PDT_LINE_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">导入</span>
    <h2>导入</h2>
    <p>Excel 产品明细行导入的前置约定、字段映射、处理逻辑、异常与运维保障</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">import</span>
    <h2>前置约定</h2>
  </div>
  <ol style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>导入仅支持产品明细行导入，头信息需在页面上完整填写</li><li>导入文件格式为Excel(.xlsx)，首行为表头行</li><li>导入前需已选择折扣政策(priceType=2)或价目表(priceType=3)，确保产品价格可匹配</li><li>导入前需已选择经销商和门店，确保产品范围可限定</li><li>样品编码必须存在于折扣政策产品范围内或价目表产品范围内</li><li>同一要货单不允许导入重复样品编码</li></ol>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">import</span>
    <h2>字段映射</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段含义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">是否必输</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段格式</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">重复判定字段</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">样品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本，不超过50字符</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是，同一单内不可重复</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">本次下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">正整数，≥1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">否</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">是否紧急</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">否</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=是/1=否，默认1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">否</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">说明</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">否</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">文本，不超过200字符</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">否</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">import</span>
    <h2>处理逻辑</h2>
  </div>
  <ol style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>解析Excel文件，逐行读取样品编码、本次下单数量、是否紧急、说明</li><li>根据样品编码查询产品主数据，校验产品是否存在、SM状态是否允许下单</li><li>根据折扣政策ID查询产品行，获取起订量、封顶量、可下单数量、标准单价、安装单价</li><li>校验本次下单数量≥起订量且≤封顶量且≤可下单数量</li><li>自动计算：标准单价不含安装=标准单价-安装单价、安装金额=本次下单数量×安装单价、折后金额=本次下单数量×折后单价不含</li><li>展厅产品(customerSubclass=5)强制安装金额=0、包安装否=0</li><li>累计申请数量合计=SUM(本次下单数量)、申请金额合计=SUM(折后金额)</li><li>全部行校验通过后写入行表格</li></ol>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">import</span>
    <h2>异常与结果约定</h2>
  </div>
  <ol style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>样品编码不存在：跳过该行，记录错误"样品编码{code}不存在"</li><li>样品编码重复：跳过重复行，记录错误"样品编码{code}重复"</li><li>SM状态='Z8'：跳过该行，记录错误"样品{code}已停产，禁止下单"</li><li>下单数量&lt;起订量：跳过该行，记录错误"样品{code}下单数量{qty}低于起订量{moq}"</li><li>下单数量&gt;封顶量：跳过该行，记录错误"样品{code}下单数量{qty}超过封顶量{capQty}"</li><li>下单数量&gt;可下单数量：跳过该行，记录错误"样品{code}下单数量{qty}超过可下单数量{activeQty}"</li><li>导入完成后弹出结果提示：成功行数、失败行数、失败详情</li></ol>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">import</span>
    <h2>运维保障</h2>
  </div>
  <ol style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>导入文件大小限制10MB，超限拒绝上传</li><li>导入操作记录操作日志，包含操作人、操作时间、文件名、成功/失败行数</li><li>导入失败时可下载错误明细Excel，包含失败行号、样品编码、错误原因</li><li>导入过程事务性处理，任一行校验失败不影响其他行，最终统一写入</li></ol>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">其他按钮</span>
    <h2>其他按钮</h2>
    <p>列表页与详情页共 11 个操作按钮的显隐与执行逻辑</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">其他按钮</span>
    <h2>按钮清单</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">按钮名称</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">按钮作用</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">所在位置</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">显隐条件/可点击条件</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">影响</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">编辑</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">进入编辑模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">非审批中</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表单和行表格可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">取消编辑</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">退出编辑模式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">editFlag=true</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">放弃当前编辑内容</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">删除</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除要货订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">roleList含'AE20250907'且backEditFlag且无saSalebillno且hzApproveStatus='NEW'</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除头行数据，返还可下单数量</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">新建</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新建要货订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">跳转空白新建页</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">保存</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存订单草稿</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">editFlag且(backEditFlag或新建)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存头行信息至数据库</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">保存并提交</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存并提交审批</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">(backEditFlag或新建)且priceType≠3</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存并触发OA审批或直接生成CRM</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">查看下单数量及坎级</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看折扣政策可下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">editFlag且priceType=2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">弹窗展示可下单数量及坎级信息</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">生成CRM订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">手动生成CRM订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">backEditFlag且有interimBiino且priceType=3</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">调用CRM接口生成订单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">批量获取当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">获取全国当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">backEditFlag且billType=2</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">批量查询行产品当月报送总量</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">同步地址信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">同步收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详情页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">有customerCode</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">调用接口同步地址并记录变更历史</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">导出</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">导出要货订单</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">列表页</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">始终</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">导出Excel文件</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 1</span>
    <h2>编辑（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：单据非审批中状态</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：设置editFlag=true</li><li>第2点：头表单和行表格进入可编辑状态</li><li>第3点：根据priceType、stat、hzApproveStatus动态设置各字段disabled状态</li></ul><li><strong>接口调用</strong>：无</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.INTERIM_BIINO, h.HZ_APPROVE_STATUS, h.ORDER_STAT
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 2</span>
    <h2>取消编辑（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：editFlag=true</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：设置editFlag=false</li><li>第2点：重新加载原始数据，放弃当前编辑内容</li><li>第3点：头表单和行表格恢复disabled状态</li></ul><li><strong>接口调用</strong>：GET /list-detail重新加载详情</li><li><strong>排查SQL</strong>：无</li></ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 3</span>
    <h2>删除（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：roleList含'AE20250907'且backEditFlag且saSalebillno为空且hzApproveStatus='NEW'</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：校验hzApproveStatus≠APPROVED且stat≠5，否则提示"单据已经审核，不允许删除"</li><li>第2点：校验isAuditingWh≠2，否则提示"单据已经审核，不允许删除"</li><li>第3点：校验saSalebillno为空，否则提示"具备了订单号的订单，不允许删除"</li><li>第4点：调用updateActiveQty返还折扣政策可下单数量</li><li>第5点：删除SA_OUT_BILL_HEAD和SA_OUT_BILL_LINE数据</li></ul><li><strong>接口调用</strong>：DELETE /sa-out-bill-heads</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.HEAD_ID, h.HZ_APPROVE_STATUS, h.IS_AUDITING_WH, h.SA_SALEBILLNO, h.ORDER_STAT
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 4</span>
    <h2>新建（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：始终可点击</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：跳转空白新建页</li><li>第2点：头表单初始化默认值：订单日期=当前日期、申请人=当前用户、事业部=当前用户deptName、签约方式='2'、IS_MAKT=2</li><li>第3点：设置editFlag=true、backEditFlag=true</li></ul><li><strong>接口调用</strong>：无</li><li><strong>排查SQL</strong>：无</li></ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 5</span>
    <h2>保存（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：editFlag且(backEditFlag或新建)</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：执行preCheckData校验紧急行数、业务类型必填、折扣政策一致性、起订量、封顶量</li><li>第2点：执行verifyCustomer校验客户信息</li><li>第3点：执行updateActiveQty返还旧的可下单数量</li><li>第4点：执行saveHeadData保存头信息</li><li>第5点：执行saveLineData保存行信息</li><li>第6点：执行updateActiveQty扣减新的可下单数量</li></ul><li><strong>接口调用</strong>：POST /sa-out-bill-heads</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.BUSINESS_TYPE, h.HZ_APPROVE_STATUS
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 6</span>
    <h2>保存并提交（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：(backEditFlag或新建)且priceType≠3</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：执行保存全部校验逻辑</li><li>第2点：priceType=2时，设置hzApproveStatus=NEW，调用doOaRequestOrderAudit推送OA审批</li><li>第3点：OA流程编码根据渠道区分：渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT</li><li>第4点：OA单据名称YPYHDD</li><li>第5点：priceType=3时，设置hzApproveStatus=NO_APPROVED，直接生成CRM订单</li></ul><li><strong>接口调用</strong>：POST /sa-out-bill-heads/save-and-submit</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.CHANNEL, h.HZ_APPROVE_STATUS
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 7</span>
    <h2>查看下单数量及坎级（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：editFlag且priceType=2</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：设置viewQty=true</li><li>第2点：行表格显示折扣信息和政策可下单数列</li><li>第3点：查询折扣政策产品行的可下单数量和坎级信息</li></ul><li><strong>接口调用</strong>：无（前端联动显示）</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT dpl.MATERIAL_CODE, dpl.ACTIVE_QTY, dpl.MOQ, dpl.CAP_QTY, dpl.CAP_LEVEL
  FROM DISCOUNT_POLICY_LINE dpl
 WHERE dpl.POLICY_ID = :discountPolicyId
 ORDER BY dpl.MATERIAL_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 8</span>
    <h2>生成CRM订单（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：backEditFlag且有interimBiino且priceType=3</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：校验单据信息完整性</li><li>第2点：根据businessType映射CRM类型：3→Sample、12→HomeDecorationSample、16→Long_Inv_Age</li><li>第3点：调用CRM接口生成订单</li><li>第4点：CRM订单号回写至SA_OUT_BILL_HEAD.SA_SALEBILLNO</li></ul><li><strong>接口调用</strong>：POST /sa-out-bill-heads/update-create-crm</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.HEAD_ID, h.INTERIM_BIINO, h.PRICE_TYPE, h.BUSINESS_TYPE, h.SA_SALEBILLNO
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 9</span>
    <h2>批量获取当月报送总量（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：backEditFlag且billType=2</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：遍历行表格所有产品</li><li>第2点：查询每个产品全国当月报送总量</li><li>第3点：回写至行MONTH_SUBMIT_QTY字段</li></ul><li><strong>接口调用</strong>：POST /sa-out-bill-heads/get-cur-month-submit-qty</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT m.MATERIAL_CODE,
       NVL(SUM(l.QTY_BILL), 0) AS 当月报送总量
  FROM SA_OUT_BILL_HEAD h
  JOIN SA_OUT_BILL_LINE l ON l.HEAD_ID = h.HEAD_ID
  JOIN MATERIAL m ON m.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.IS_MAKT = 2
   AND h.BILL_TYPE = 2
   AND TRUNC(h.DATE_INVBILL, 'MM') = TRUNC(SYSDATE, 'MM')
   AND m.MATERIAL_ID = :materialId
 GROUP BY m.MATERIAL_CODE
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 10</span>
    <h2>同步地址信息（详情页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：有customerCode</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：调用接口获取经销商最新收货地址信息</li><li>第2点：更新头表单收货人、联系电话、收货地址</li><li>第3点：记录地址变更历史至地址变更历史Tab</li></ul><li><strong>接口调用</strong>：POST /sa-out-bill-heads/async-address</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT ca.TAKE_MAN, ca.TAKE_PHONE, ca.TAKE_ADDRESS
  FROM CUSTOMER_ADDRESS ca
 WHERE ca.CUST_ID = :custId
   AND ca.STATUS = 'ACTIVE'
   AND ca.DEFAULT_FLAG = 2
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮 11</span>
    <h2>导出（列表页）</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li><strong>触发条件</strong>：始终可点击</li><li><strong>执行逻辑</strong>：</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：根据当前查询条件导出列表数据</li><li>第2点：生成Excel文件并下载</li></ul><li><strong>接口调用</strong>：GET /sa-out-bill-heads/sample-order-export</li><li><strong>排查SQL</strong>：</li></ul>
</div>

```sql
SELECT h.INTERIM_BIINO      AS 要货单号,
       h.HZ_APPROVE_STATUS  AS 单据状态,
       h.SA_SALEBILLNO      AS CRM订单号,
       h.PRICE_TYPE         AS 价格类型,
       h.ORDER_STAT         AS 订单状态,
       h.CUSTOMER_CODE      AS 客户编码,
       h.CUSTOMER_NAME      AS 客户名称,
       h.TERMINAL_CODE      AS 门店编码,
       h.TERMINAL_NAME      AS 门店名称,
       h.IN_DATE            AS 期望到达日期,
       h.DATE_INVBILL       AS 订单日期,
       h.CREATED_BY_NAME    AS 创建人,
       h.CREATION_DATE      AS 创建时间
  FROM SA_OUT_BILL_HEAD h
 WHERE h.IS_MAKT = 2
   AND h.SEARCH_FLAG = 1
 ORDER BY h.CREATION_DATE DESC
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">保存校验</span>
    <h2>保存校验</h2>
    <p>保存时 preCheckData / verifyCustomer 的 10 项校验规则</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <h2>保存校验 规则明细</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>校验1：业务类型必填 —— isMakt=2时businessType不能为空</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：当IS_MAKT=2时，头表单BUSINESS_TYPE字段不能为空</li><li>第2点：priceType=3时businessType必填，priceType=2时非必填</li><li>第3点：businessType取值范围：3=样品、12=家装样品、16=长库龄</li></ul><li>系统体现：保存时preCheckData校验，businessType为空则提示"业务类型不能为空"</li><li>排查SQL：</li></ul><li>校验2：折扣政策一致性 —— businessType/channel/billType需与折扣政策一致</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：头表单BUSINESS_TYPE需与折扣政策BUSINESS_TYPE一致</li><li>第2点：头表单CHANNEL需与折扣政策CHANNEL一致</li><li>第3点：头表单BILL_TYPE需与折扣政策BILL_TYPE一致</li></ul><li>系统体现：保存时preCheckData校验，不一致则提示"折扣政策与单据信息不一致"</li><li>排查SQL：</li></ul><li>校验3：起订量校验 —— 订单行数量≥折扣政策产品行起订量</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：每行QTY_BILL≥折扣政策产品行MOQ</li><li>第2点：低于起订量拦截，提示"样品{code}下单数量{qty}低于起订量{moq}"</li></ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul><li>校验4：封顶量校验 —— 订单行数量≤折扣政策坎级封顶量</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：每行QTY_BILL≤折扣政策产品行CAP_QTY</li><li>第2点：超过封顶量拦截，提示"样品{code}下单数量{qty}超过封顶量{capQty}"</li></ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul><li>校验5：期望有效期校验 —— 期望到达日期不能晚于政策有效期</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：头表单IN_DATE≤折扣政策EFFECTIVE_DATE_END</li><li>第2点：超过政策有效期拦截，提示"期望到达日期不能晚于政策有效期"</li></ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul><li>校验6：紧急行数校验 —— 仅计划订单可加急，上限=ceil(总行数/5)</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：仅billType=2或14时可加急，常规订单(billType=1)不允许有紧急行</li><li>第2点：紧急行数(urgency=2)≤ceil(总行数/5)</li><li>第3点：超过上限拦截，提示"紧急行数超过上限{maxQty}"</li></ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul><li>校验7：期望到达日期范围校验 —— 根据订单类型和渠道限制日期范围</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：常规订单(billType=1)每月25号前下单，期望到达日期需为当月</li><li>第2点：25号后仅瓷砖产品线可下常规订单</li><li>第3点：计划订单(billType=2)电商渠道可选当月往后6个月内，其他渠道3个月内</li></ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul><li>校验8：价格校验 —— 明细行价格字段不能为空且不能≤0</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：每行PRICE_BILL、STANDARD_PRICE、DISCOUNT_RATE、DISCOUNT_INSTALLATION、DISCOUNTED_PRICE、WTAMOUNT_BILL不能为空</li><li>第2点：每行PRICE_BILL、STANDARD_PRICE、DISCOUNT_RATE、DISCOUNT_INSTALLATION、DISCOUNTED_PRICE、WTAMOUNT_BILL不能≤0</li></ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul><li>校验9：产品SM状态校验 —— 根据产品生命周期状态控制下单</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：smState='Z8'禁止下单，硬拦截</li><li>第2点：smState='Z6'计划淘汰中，提示关注但允许下单</li><li>第3点：smState='S6'进入售后阶段，提示关注但允许下单</li><li>第4点：smState='Z7'有库存数量发完即止，限制下单数量不超过库存</li></ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul><li>校验10：客户信息校验 —— 校验客户信息完整性</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：经销商必填，CUSTOMER_OBJ不能为空</li><li>第2点：门店必填，TERMINAL_OBJ不能为空</li><li>第3点：收货人必填，TAKE_MAN_OBJ不能为空</li><li>第4点：交易公司必填，TRADING_COMPANY_OBJ不能为空</li><li>第5点：订单产品线必填，ORDER_PDT_LINE_OBJ不能为空</li></ul><li>系统体现：保存时verifyCustomer校验</li><li>排查SQL：</li></ul></ul>
</div>

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验1 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.IS_MAKT, h.PRICE_TYPE, h.BUSINESS_TYPE
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND h.IS_MAKT = 2
   AND h.BUSINESS_TYPE IS NULL
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验2 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.BUSINESS_TYPE AS 单据业务类型, h.CHANNEL AS 单据渠道, h.BILL_TYPE AS 单据订单类型,
       dp.BUSINESS_TYPE AS 政策业务类型, dp.CHANNEL AS 政策渠道, dp.BILL_TYPE AS 政策订单类型
  FROM SA_OUT_BILL_HEAD h
  JOIN DISCOUNT_POLICY dp ON dp.POLICY_ID = h.DISCOUNT_POLICY_ID
 WHERE h.HEAD_ID = :headId
   AND (h.BUSINESS_TYPE <> dp.BUSINESS_TYPE OR h.CHANNEL <> dp.CHANNEL OR h.BILL_TYPE <> dp.BILL_TYPE)
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验3 排查 SQL</p>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.MOQ
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL < dpl.MOQ
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验4 排查 SQL</p>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.CAP_QTY
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL > dpl.CAP_QTY
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验5 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.IN_DATE, dp.EFFECTIVE_DATE_END
  FROM SA_OUT_BILL_HEAD h
  JOIN DISCOUNT_POLICY dp ON dp.POLICY_ID = h.DISCOUNT_POLICY_ID
 WHERE h.HEAD_ID = :headId
   AND h.IN_DATE > dp.EFFECTIVE_DATE_END
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验6 排查 SQL</p>

```sql
SELECT h.HEAD_ID,
       COUNT(l.LINE_ID) AS 总行数,
       SUM(CASE WHEN l.URGENCY = 2 THEN 1 ELSE 0 END) AS 紧急行数,
       CEIL(COUNT(l.LINE_ID) / 5) AS 紧急上限
  FROM SA_OUT_BILL_HEAD h
  JOIN SA_OUT_BILL_LINE l ON l.HEAD_ID = h.HEAD_ID
 WHERE h.HEAD_ID = :headId
 GROUP BY h.HEAD_ID
HAVING SUM(CASE WHEN l.URGENCY = 2 THEN 1 ELSE 0 END) > CEIL(COUNT(l.LINE_ID) / 5)
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验7 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.BILL_TYPE, h.CHANNEL, h.IN_DATE, h.ORDER_PDT_LINE_ID
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND h.IN_DATE > ADD_MONTHS(TRUNC(SYSDATE, 'MM'),
       CASE WHEN h.BILL_TYPE = 2 AND h.CHANNEL = :ecommerceChannel THEN 6
            WHEN h.BILL_TYPE = 2 THEN 3
            ELSE 0 END)
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验8 排查 SQL</p>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.PRICE_BILL, l.STANDARD_PRICE, l.DISCOUNT_RATE,
       l.DISCOUNT_INSTALLATION, l.DISCOUNTED_PRICE, l.WTAMOUNT_BILL
  FROM SA_OUT_BILL_LINE l
 WHERE l.HEAD_ID = :headId
   AND (l.PRICE_BILL IS NULL OR l.PRICE_BILL <= 0
     OR l.STANDARD_PRICE IS NULL OR l.STANDARD_PRICE <= 0
     OR l.DISCOUNT_RATE IS NULL OR l.DISCOUNT_RATE <= 0
     OR l.DISCOUNT_INSTALLATION IS NULL OR l.DISCOUNT_INSTALLATION <= 0
     OR l.DISCOUNTED_PRICE IS NULL OR l.DISCOUNTED_PRICE <= 0
     OR l.WTAMOUNT_BILL IS NULL OR l.WTAMOUNT_BILL <= 0)
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验9 排查 SQL</p>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, m.SM_STATE
  FROM SA_OUT_BILL_LINE l
  JOIN MATERIAL m ON m.MATERIAL_ID = l.MATERIAL_ID
 WHERE l.HEAD_ID = :headId
   AND m.SM_STATE = 'Z8'
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验10 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.CUSTOMER_ID, h.TERMINAL_ID, h.TAKE_MAN_ID,
       h.TRADING_COMPANY_ID, h.ORDER_PDT_LINE_ID
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND (h.CUSTOMER_ID IS NULL OR h.TERMINAL_ID IS NULL OR h.TAKE_MAN_ID IS NULL
     OR h.TRADING_COMPANY_ID IS NULL OR h.ORDER_PDT_LINE_ID IS NULL)
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">提交校验</span>
    <h2>提交校验</h2>
    <p>保存并提交时 OA 审批推送与 CRM 订单生成的校验</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <h2>提交校验 规则明细</h2>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>校验1：OA审批推送校验 —— priceType=2时推送OA审批流程</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：priceType=2时设置hzApproveStatus=NEW</li><li>第2点：OA单据名称YPYHDD</li><li>第3点：流程编码根据渠道区分：渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT</li><li>第4点：调用doOaRequestOrderAudit推送OA审批</li><li>第5点：OA审批通过后生成CRM订单</li></ul><li>系统体现：保存并提交按钮触发，priceType=3时跳过OA直接生成CRM</li><li>排查SQL：</li></ul><li>校验2：CRM订单生成校验 —— 生成CRM订单前校验</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：businessType映射：3→Sample、12→HomeDecorationSample、16→Long_Inv_Age</li><li>第2点：校验头行信息完整性</li><li>第3点：priceType=3时直接生成CRM，hzApproveStatus=NO_APPROVED</li><li>第4点：priceType=2时OA审批通过后生成CRM</li><li>第5点：CRM订单号回写至SA_SALEBILLNO</li></ul><li>系统体现：保存并提交或生成CRM订单按钮触发</li><li>排查SQL：</li></ul><li>校验3：可下单数量扣减校验 —— 提交前校验可下单数量充足</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>详细逻辑</li><ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;"><li>第1点：每行QTY_BILL≤折扣政策产品行ACTIVE_QTY</li><li>第2点：提交时调用updateActiveQty扣减可下单数量</li><li>第3点：可下单数量不足拦截，提示"样品{code}可下单数量不足"</li></ul><li>系统体现：保存并提交时updateActiveQty校验</li><li>排查SQL：</li></ul></ul>
</div>

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验1 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.CHANNEL, h.HZ_APPROVE_STATUS,
       CASE WHEN h.CHANNEL = 4 THEN 'SAMPLE_ORDER_REQUEST_PROJECT'
            ELSE 'SAMPLE_ORDER_REQUEST_NO_ROJECT' END AS 流程编码
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验2 排查 SQL</p>

```sql
SELECT h.HEAD_ID, h.BUSINESS_TYPE, h.PRICE_TYPE, h.HZ_APPROVE_STATUS, h.SA_SALEBILLNO,
       CASE h.BUSINESS_TYPE WHEN 3 THEN 'Sample'
            WHEN 12 THEN 'HomeDecorationSample'
            WHEN 16 THEN 'Long_Inv_Age' END AS CRM业务类型
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">校验3 排查 SQL</p>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.ACTIVE_QTY
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL > dpl.ACTIVE_QTY
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">状态机</span>
    <h2>状态机</h2>
    <p>单据状态与 OA 审批状态的流转关系</p>
  </div>
</div>

<p class="kl-tip" style="font-size:.74rem;font-weight:700;color:#7C3AED;margin:14px 0 6px;">状态机流转图 排查 SQL</p>

```text
┌───────────┐  保存   ┌───────────┐  提交(折扣政策)  ┌───────────┐
│  新建     │────────▶│  草稿     │─────────────────▶│ OA审批中  │
│  stat=1   │         │ stat=1    │                  │ NEW       │
└───────────┘         └─────┬─────┘                  └─────┬─────┘
                            │                              │
                     提交(价目表)                ┌────────┼────────┐
                            │                    ▼        ▼        ▼
                            ▼              ┌─────────┐┌─────────┐┌─────────┐
                      ┌───────────┐       │审批通过  ││审批拒绝  ││审批中    │
                      │直接生成CRM │       │stat=5   ││stat=4   ││          │
                      │NO_APPROVED│       └────┬────┘└────┬────┘└─────────┘
                      └─────┬─────┘            │           │
                            │                  ▼           ▼
                            │            ┌───────────┐┌───────────┐
                            │            │生成CRM    ││退回修改   │
                            │            │订单       ││           │
                            │            └─────┬─────┘└───────────┘
                            │                  │
                            │                  ▼
                            │            ┌───────────┐
                            └───────────▶│ ERP发货   │
                                         └───────────┘
```

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">state</span>
    <h2>状态机列表</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">状态机名称</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">状态释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">可执行的操作</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">stat=1</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">制单/草稿状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑、保存、删除、保存并提交</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">stat=4</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批拒绝/退回</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑、保存、保存并提交</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">stat=5</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批通过</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看、生成CRM订单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">stat=11</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批退回</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑、保存、保存并提交</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS=NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批中</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS=APPROVED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批通过</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看、生成CRM订单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS=NO_APPROVED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">无需OA审批(价目表/折扣单)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看、生成CRM订单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">HZ_APPROVE_STATUS=REJECTED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">OA审批拒绝</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">编辑、保存、保存并提交</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">---</p>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <h2>数据库表详解</h2>
    <p>头表与行表的字段、类型与业务逻辑</p>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">表 1</span>
    <h2>SA_OUT_BILL_HEAD（要货订单头表）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">类型</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">对应界面字段</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HEAD_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表主键ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">主键，自增</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">INTERIM_BIINO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存后后端生成，唯一</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">IS_MAKT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品及长库龄标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">固定值2，区分样品及长库龄要货订单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BUSINESS_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">业务类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">业务类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">3=样品、12=家装样品、16=长库龄</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PRICE_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">价格类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=折扣政策、3=价目表</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联DISCOUNT_POLICY.POLICY_ID</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择折扣政策后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_POLICY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折扣政策名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择折扣政策后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">EFFECTIVE_DATE_END</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策有效期至</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策有效期至</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择折扣政策后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联CUSTOMER.CUSTOMER_ID，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_SHORT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经销商简称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SALES_AREA</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售区域</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择经销商后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TERMINAL_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联TERMINAL.TERMINAL_ID</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TERMINAL_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TERMINAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">门店名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CUSTOMER_CLASS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">经营属性</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择门店后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">OPERATION_CENTER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">运营中心</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，选择门店后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">IN_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">期望到达日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">必填，校验范围</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILL_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单类型</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=常规、2=计划，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">ORDER_PDT_LINE_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单产品线ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单产品线</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联ORDER_PDT_LINE.PDT_LINE_ID，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DIVISION_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前用户deptId</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DIVISION_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">当前用户deptName</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TRADING_COMPANY_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联TRADING_LEGAL.TRADING_COMPANY_ID，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TRADING_COMPANY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">交易公司</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILLING_UNIT_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择交易公司后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILLING_UNIT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开票单位</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CHANNEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">bind折扣政策channel，priceType=3时必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PROJECT_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联PROJECT.PROJECT_ID</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PROJECT_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PROJECT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">项目名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CONTRACT_TYPE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">签约方式</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认值2</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TAKE_MAN_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联CUSTOMER_ADDRESS.ADDRESS_ID，必填</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TAKE_MAN</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人姓名</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TAKE_PHONE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">联系电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">联系电话</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">TAKE_ADDRESS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(500)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">收货地址</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SA_SALEBILLNO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM订单号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM回写，有值时禁止删除</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">ACCOUNT_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">余额账户</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">余额账户</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MAY_CONSIGNMENT_AMOUNT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可发货余额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">可发货余额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_SUM</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">申请数量合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">申请数量合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=SUM(行QTY_BILL)</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">WTAMOUNT_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">申请金额合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">申请金额合计</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=SUM(行WTAMOUNT_BILL)</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CURRENCY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">币种</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择经销商后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(1000)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">RETURN_REASON</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(1000)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">返回原因</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">返回原因</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审批退回时记录</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">INTF_INFO</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(2000)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM返回信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM返回信息</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM接口返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">ORDER_STAT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">1=制单、4=拒绝、5=通过、11=退回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_APPROVE_STATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">流程状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NEW/APPROVED/NO_APPROVED/REJECTED</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">REVIWESTATUS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批成功</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批成功</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=成功、1=失败</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">IS_AUDITING_WH</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">审核标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=已审核，禁止删除</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HZ_INSTANCE_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA流程实例ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">OA审批流程实例</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CRM_EDIT_FLAG</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CRM编辑标识</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=禁止编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DATE_INVBILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">订单日期</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认当前日期</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CREATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">申请人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">默认当前用户</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CREATION_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">创建时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动记录</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">LAST_UPDATED_BY_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">修改人</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动记录</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">LAST_UPDATE_DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">DATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">修改时间</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">系统自动记录</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">表 2</span>
    <h2>SA_OUT_BILL_LINE（要货订单行表）</h2>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:#F5F3FF;">
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">字段名</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">类型</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">释义</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">对应界面字段</th>
        <th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#111827;text-align:left;border-bottom:2px solid #E8ECF0;">逻辑</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">LINE_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行表主键ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">主键，自增</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">HEAD_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">头表ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联SA_OUT_BILL_HEAD.HEAD_ID</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MATERIAL_ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品ID</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">关联MATERIAL.MATERIAL_ID</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MATERIAL_CODE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(50)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品编码</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MATERIAL_NAME</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(200)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">样品名称</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MODEL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(100)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">型号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">型号</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">冗余字段</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">本次下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">本次下单数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">必填，≥1，校验起订量/封顶量</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_DELIVERED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">已发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">已发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_UNDELIVERED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">未发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">未发数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=QTY_BILL-QTY_DELIVERED</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_CANCELLED</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">取消数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">取消数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">QTY_REPLY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复数量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">REPLY_NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(500)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回复备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">URGENCY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否紧急</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否紧急</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=是、1=否，billType=2时可编辑</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CONTRACT_DISCOUNT_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原合同折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计合同折扣(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">CONTRACT_DISCOUNT_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新合同折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计合同折扣(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">AD_FEE_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原广告费</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计广告费(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">AD_FEE_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新广告费</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计广告费(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILL_DISCOUNT_OLD</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">原开单折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计开单折扣(原)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">BILL_DISCOUNT_NEW</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新开单折扣</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">计开单折扣(新)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PRICE_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标准单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标准单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后带出，校验&gt;0</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">INSTALL_UNIT_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装单价</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">选择样品后带出</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">STANDARD_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标准单价不含安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标准单价不含安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=PRICE_BILL-INSTALL_UNIT_PRICE</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">IS_INSTALL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">包安装否</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">包安装否</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">2=是、1=否，展厅强制为0</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_RATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">应用折扣率</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">应用折扣率</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:5</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">INSTALL_UNIT_AMT</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">安装金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=QTY_BILL×INSTALL_UNIT_PRICE，展厅为0</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNT_INSTALLATION</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后单价含安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后单价含</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:7</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">DISCOUNTED_PRICE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后单价不含安装</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后单价不含</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，precision:7</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">WTAMOUNT_BILL</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">折后金额</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">自动计算=QTY_BILL×DISCOUNTED_PRICE</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">SM_STATE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(10)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SM状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SM状态</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回，Z8禁止下单</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">PACKAGE_QTY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">整箱包装数</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">整箱包装数</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">NOTE</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VARCHAR2(500)</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">行备注</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">说明</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">手动输入</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MOQ</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全国生产起订量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全国生产起订量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示，后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">MONTH_SUBMIT_QTY</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全国当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">全国当月报送总量</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">billType=2时显示，后端返回</td>
        </tr>
        <tr>
          <td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;">CUSTOMER_SUBCLASS</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">NUMBER</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">客户子类</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">-</td>
          <td style="padding:9px 11px;font-size:.72rem;color:#374151;">5=展厅，影响安装金额计算</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p style="font-size:.78rem;color:#374151;line-height:1.8;margin:0;">---</p>
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
