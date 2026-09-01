<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
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
  <div class="biz-kl-hdr" style="text-align:left;">
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
  <div class="biz-kl-hdr" style="text-align:left;">
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
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">角色</span>
    <h2>谁在做？主要在做什么？</h2>
    <p>门店运营 / 业务员发起，价格模式决定审批与下游动作</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">角色</th><th style="padding:12px 16px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">职责</th></tr></thead>
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
  <div class="biz-kl-hdr" style="text-align:left;">
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
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">上游依赖</span>
    <h2>上游依赖</h2>
    <p>页面渲染与保存提交依赖的主数据与外部系统</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">上游模块</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">依赖类型</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">依赖说明</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">依赖成立条件</th></tr></thead>
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
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">下游影响</span>
    <h2>下游影响</h2>
    <p>订单提交后对 CRM、ERP 及各关联模块的回写与联动</p>
  </div>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
      <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">影响</th><th style="padding:10px 12px;font-size:.75rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">说明</th></tr></thead>
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
<KbCard num="1" title="重点逻辑1：isMakt=2样品及长库龄标识区分 {标识区分}">
<ul><li><strong>业务意义</strong>：样品及长库龄要货订单与工程要货、家装要货共用SA_OUT_BILL_HEAD/SA_OUT_BILL_LINE表，通过IS_MAKT=2区分数据归属，确保业务隔离与统计准确</li><li><strong>具体逻辑描述</strong></li><li>第1点：列表查询固定带参数isMakt=2、searchFlag=1，仅返回样品及长库龄要货订单数据</li><li>第2点：新建订单时头表IS_MAKT字段默认赋值为2</li><li>第3点：折扣政策选择弹窗lovPara传入isMakt='2'，仅返回样品及长库龄适用的折扣政策</li><li>第4点：businessType进一步细分：3=样品、12=家装样品、16=长库龄</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：价格类型双轨制 {价格模式}">
<ul><li><strong>业务意义</strong>：支持折扣政策(priceType=2)和价目表(priceType=3)两种价格模式，折扣政策需走OA审批流程，价目表可直接生成CRM订单，满足不同业务场景的审批严格度要求</li><li><strong>具体逻辑描述</strong></li><li>第1点：priceType=2时折扣政策必填，业务类型非必填，保存并提交走OA审批流程(hzApproveStatus=NEW)</li><li>第2点：priceType=3时业务类型必填，折扣政策非必填，保存并提交直接生成CRM订单(hzApproveStatus=NO_APPROVED)</li><li>第3点：priceType选择框optionsFilter仅允许2或3，stat=5或已审批或crm_edit_flag=2时disabled</li><li>第4点：priceType切换时联动清空折扣政策相关字段、重置业务类型必填校验</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：期望到达日期严格校验 {日期校验}">
<ul><li><strong>业务意义</strong>：根据订单类型和销售渠道限制期望到达日期范围，确保生产排期合理，避免超期下单导致交付风险</li><li><strong>具体逻辑描述</strong></li><li>第1点：常规订单(billType=1)每月25号前下单，期望到达日期需为当月；25号后仅瓷砖产品线可下常规订单</li><li>第2点：计划订单(billType=2)电商渠道可选当月往后6个月内，其他渠道3个月内</li><li>第3点：期望到达日期不能晚于折扣政策有效期(effectiveDateEnd)</li><li>第4点：DatePicker组件max设为一年后、min设为今天，stat=5或已审批时disabled</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：产品SM状态拦截 {状态拦截}">
<ul><li><strong>业务意义</strong>：根据产品生命周期状态控制下单权限，避免对已停产/淘汰产品下单造成库存积压和交付风险</li><li><strong>具体逻辑描述</strong></li><li>第1点：smState='Z8'禁止下单，硬拦截</li><li>第2点：smState='Z6'计划淘汰中，提示关注但允许下单</li><li>第3点：smState='S6'进入售后阶段，提示关注但允许下单</li><li>第4点：smState='Z7'有库存数量发完即止，限制下单数量不超过库存</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：起订量与封顶量校验 {数量校验}">
<ul><li><strong>业务意义</strong>：基于折扣政策产品的起订量和坎级封顶量控制订单行数量，确保下单数量在政策允许范围内，保障折扣政策执行准确性</li><li><strong>具体逻辑描述</strong></li><li>第1点：订单行数量(qtyBill)≥折扣政策产品行起订量，低于起订量拦截</li><li>第2点：订单行数量(qtyBill)≤折扣政策坎级封顶量，超过封顶量拦截</li><li>第3点：保存时调用updateActiveQty扣减可下单数量，删除/取消时返还</li><li>第4点：get-view-qty按钮(priceType=2)可查看下单数量及坎级信息</li></ul>
</KbCard>

<KbCard num="6" title="重点逻辑6：紧急加急行数限制 {加急限制}">
<ul><li><strong>业务意义</strong>：限制紧急加急行数比例，避免大量加急订单冲击正常生产排期，仅计划订单允许加急</li><li><strong>具体逻辑描述</strong></li><li>第1点：仅计划订单(billType=2或14)可加急，常规订单不可加急</li><li>第2点：紧急行数上限=ceil(总行数/5)，即最多20%的行可加急</li><li>第3点：行urgency字段Boolean(2/1)，editFlag且billType=2时可编辑</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：列表页查询栏">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>要货单号</td><td>INTERIM_BIINO</td><td>TextField</td><td>要货订单编号，模糊查询</td><td>始终显示</td><td>默认空，手动输入，支持模糊匹配</td></tr>
<tr><td>单据状态</td><td>HZ_APPROVE_STATUS</td><td>Select</td><td>OA审批状态</td><td>始终显示</td><td>默认空，来源值集HWKF.APPROVE_STATUS</td></tr>
<tr><td>OA审批状态</td><td>REVIWESTATUS</td><td>Select</td><td>OA审批是否成功</td><td>始终显示</td><td>默认空，Boolean值2=成功/1=失败</td></tr>
<tr><td>CRM订单号</td><td>SA_SALEBILLNO</td><td>TextField</td><td>CRM系统回写的订单号</td><td>始终显示</td><td>默认空，手动输入，精确匹配</td></tr>
<tr><td>价格类型</td><td>PRICE_TYPE</td><td>Select</td><td>折扣政策或价目表</td><td>始终显示</td><td>默认空，来源值集AE.EPM.PRICE_TYPE</td></tr>
<tr><td>折扣政策编码</td><td>DISCOUNT_POLICY_CODE</td><td>TextField</td><td>折扣政策编码</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>折扣政策名称</td><td>DISCOUNT_POLICY_NAME</td><td>TextField</td><td>折扣政策名称</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>项目编码</td><td>PROJECT_CODE</td><td>TextField</td><td>关联项目编码</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>项目名称</td><td>PROJECT_NAME</td><td>TextField</td><td>关联项目名称</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>订单状态</td><td>ORDER_STAT</td><td>Select</td><td>单据业务状态</td><td>始终显示</td><td>默认空，来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT</td></tr>
<tr><td>事业部</td><td>DIVISION_ID</td><td>Select</td><td>所属事业部</td><td>始终显示</td><td>默认空，来源值集AE.EPM.DIVISION</td></tr>
<tr><td>客户编码</td><td>CUSTOMER_CODE</td><td>TextField</td><td>经销商编码</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>客户名称</td><td>CUSTOMER_NAME</td><td>TextField</td><td>经销商名称</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>客户简称</td><td>CUSTOMER_SHORT_NAME</td><td>TextField</td><td>经销商简称</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>门店编码</td><td>TERMINAL_CODE</td><td>TextField</td><td>门店编码</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>门店名称</td><td>TERMINAL_NAME</td><td>TextField</td><td>门店名称</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>经营属性</td><td>CUSTOMER_CLASS</td><td>Select</td><td>门店经营属性</td><td>始终显示</td><td>默认空，来源值集AE.CUSTOMER_CLASS</td></tr>
<tr><td>销售渠道</td><td>CHANNEL</td><td>Select</td><td>销售渠道类型</td><td>始终显示</td><td>默认空，来源值集AE.MKT.SALES_CHANNEL</td></tr>
<tr><td>订单类型</td><td>BILL_TYPE</td><td>Select</td><td>常规/计划订单</td><td>始终显示</td><td>默认空，来源值集AE.EPM.BILL_TYPE</td></tr>
<tr><td>签约方式</td><td>CONTRACT_TYPE</td><td>Select</td><td>签约方式</td><td>始终显示</td><td>默认空，来源值集AE.EPM.CONTRACT_TYPE</td></tr>
<tr><td>期望到达日期从</td><td>IN_DATE_BEGIN</td><td>DatePicker</td><td>期望到达日期范围起</td><td>始终显示</td><td>默认空，手动选择</td></tr>
<tr><td>期望到达日期至</td><td>IN_DATE_END</td><td>DatePicker</td><td>期望到达日期范围止</td><td>始终显示</td><td>默认空，手动选择</td></tr>
<tr><td>收货人</td><td>TAKE_MAN</td><td>TextField</td><td>收货人姓名</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>联系电话</td><td>TAKE_PHONE</td><td>TextField</td><td>收货人电话</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>收货地址</td><td>TAKE_ADDRESS</td><td>TextField</td><td>收货地址</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>创建人</td><td>CREATED_BY_NAME</td><td>TextField</td><td>单据创建人</td><td>始终显示</td><td>默认空，手动输入</td></tr>
<tr><td>订单日期从</td><td>DATE_INVBILL_BEGIN</td><td>DatePicker</td><td>订单日期范围起</td><td>始终显示</td><td>默认空，手动选择</td></tr>
<tr><td>订单日期至</td><td>DATE_INVBILL_END</td><td>DatePicker</td><td>订单日期范围止</td><td>始终显示</td><td>默认空，手动选择</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：列表页表格">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>序号</td><td>-</td><td>Index</td><td>行序号</td><td>始终显示</td><td>自动生成</td></tr>
<tr><td>订单状态</td><td>ORDER_STAT</td><td>Text</td><td>单据业务状态</td><td>始终显示</td><td>来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT翻译</td></tr>
<tr><td>流程状态</td><td>HZ_APPROVE_STATUS</td><td>Text</td><td>OA审批流程状态</td><td>始终显示</td><td>拒绝时红色显示</td></tr>
<tr><td>要货单号</td><td>INTERIM_BIINO</td><td>Link</td><td>要货订单编号</td><td>始终显示</td><td>点击跳转详情页</td></tr>
<tr><td>OA审核状态</td><td>HZ_APPROVE_STATUS</td><td>Text</td><td>OA审核状态描述</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>OA审批成功</td><td>REVIWESTATUS</td><td>Text</td><td>OA审批是否成功</td><td>始终显示</td><td>Boolean翻译</td></tr>
<tr><td>CRM订单号</td><td>SA_SALEBILLNO</td><td>Text</td><td>CRM回写订单号</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>价格类型</td><td>PRICE_TYPE</td><td>Text</td><td>折扣政策/价目表</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>折扣政策编码</td><td>DISCOUNT_POLICY_CODE</td><td>Text</td><td>折扣政策编码</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>折扣政策名称</td><td>DISCOUNT_POLICY_NAME</td><td>Text</td><td>折扣政策名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>事业部</td><td>DIVISION_NAME</td><td>Text</td><td>事业部名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>客户编码</td><td>CUSTOMER_CODE</td><td>Text</td><td>经销商编码</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>客户名称</td><td>CUSTOMER_NAME</td><td>Text</td><td>经销商名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>客户简称</td><td>CUSTOMER_SHORT_NAME</td><td>Text</td><td>经销商简称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>币种</td><td>CURRENCY</td><td>Text</td><td>交易币种</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>交易公司</td><td>TRADING_COMPANY_NAME</td><td>Text</td><td>交易公司名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>开票单位</td><td>BILLING_UNIT_NAME</td><td>Text</td><td>开票单位名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>门店编码</td><td>TERMINAL_CODE</td><td>Text</td><td>门店编码</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>门店名称</td><td>TERMINAL_NAME</td><td>Text</td><td>门店名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>经营属性</td><td>CUSTOMER_CLASS</td><td>Text</td><td>门店经营属性</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>销售区域</td><td>SALES_AREA</td><td>Text</td><td>销售区域</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>运营中心</td><td>OPERATION_CENTER</td><td>Text</td><td>运营中心</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>期望到达日期</td><td>IN_DATE</td><td>Text</td><td>期望到达日期</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>收货人</td><td>TAKE_MAN</td><td>Text</td><td>收货人姓名</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>联系电话</td><td>TAKE_PHONE</td><td>Text</td><td>收货人电话</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>收货地址</td><td>TAKE_ADDRESS</td><td>Text</td><td>收货地址</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>订单类型</td><td>BILL_TYPE</td><td>Text</td><td>常规/计划订单</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>销售渠道</td><td>CHANNEL</td><td>Text</td><td>销售渠道</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>签约方式</td><td>CONTRACT_TYPE</td><td>Text</td><td>签约方式</td><td>始终显示</td><td>来源值集翻译</td></tr>
<tr><td>项目编码</td><td>PROJECT_CODE</td><td>Text</td><td>项目编码</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>项目名称</td><td>PROJECT_NAME</td><td>Text</td><td>项目名称</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>备注</td><td>NOTE</td><td>Text</td><td>单据备注</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>接口状态</td><td>INTF_INFO</td><td>Text</td><td>CRM接口返回信息</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>创建人</td><td>CREATED_BY_NAME</td><td>Text</td><td>创建人姓名</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>创建时间</td><td>CREATION_DATE</td><td>Text</td><td>创建时间</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>修改人</td><td>LAST_UPDATED_BY_NAME</td><td>Text</td><td>修改人姓名</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>修改时间</td><td>LAST_UPDATE_DATE</td><td>Text</td><td>修改时间</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>操作</td><td>-</td><td>Button</td><td>查看按钮</td><td>始终显示</td><td>点击跳转详情页</td></tr>
<tr><td>操作</td><td>-</td><td>Button</td><td>删除按钮</td><td>hzApproveStatus='NEW'且saSalebillno为空</td><td>点击触发删除</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块3：详情页头表单">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>要货单号</td><td>INTERIM_BIINO</td><td>TextField</td><td>要货订单编号</td><td>始终显示</td><td>默认空，保存后后端生成，disabled不可编辑</td></tr>
<tr><td>订单日期</td><td>DATE_INVBILL</td><td>DatePicker</td><td>单据创建日期</td><td>始终显示</td><td>默认值当前日期，disabled不可编辑</td></tr>
<tr><td>申请人</td><td>CREATED_BY_NAME</td><td>TextField</td><td>单据创建人</td><td>始终显示</td><td>默认值当前登录用户，disabled不可编辑</td></tr>
<tr><td>订单状态</td><td>ORDER_STAT</td><td>Select</td><td>单据业务状态</td><td>始终显示</td><td>默认空，来源值集AE.EPM.REQUIRE_BILL.ORDER_STAT，disabled不可编辑</td></tr>
<tr><td>价格类型</td><td>PRICE_TYPE</td><td>Select</td><td>折扣政策/价目表</td><td>始终显示</td><td>默认空，来源值集AE.EPM.PRICE_TYPE_MAKT，optionsFilter仅允许2或3，stat=5或已审批或crm_edit_flag=2时disabled</td></tr>
<tr><td>折扣政策</td><td>DISCOUNT_POLICY_OBJ</td><td>Lov</td><td>折扣政策选择</td><td>始终显示</td><td>默认空，LOV:AE.GET_POLICY，lovPara含isMakt:'2'、isDilterMaterial:true，priceType=2时必填，已审批/priceType≠2/crmEditFlag=2时disabled</td></tr>
<tr><td>折扣政策编码</td><td>DISCOUNT_POLICY_CODE</td><td>TextField</td><td>折扣政策编码</td><td>始终显示</td><td>选择折扣政策后自动带出，disabled</td></tr>
<tr><td>折扣政策名称</td><td>DISCOUNT_POLICY_NAME</td><td>TextField</td><td>折扣政策名称</td><td>始终显示</td><td>选择折扣政策后自动带出，disabled</td></tr>
<tr><td>政策有效期至</td><td>EFFECTIVE_DATE_END</td><td>DatePicker</td><td>折扣政策有效期截止</td><td>始终显示</td><td>选择折扣政策后自动带出，disabled</td></tr>
<tr><td>经销商编码</td><td>CUSTOMER_OBJ</td><td>Lov</td><td>经销商选择</td><td>始终显示</td><td>默认空，LOV:BASIC_CUSTOM_ORG_LOV_2，必填，已审批/crmEditFlag=2/userType='D'时disabled</td></tr>
<tr><td>经销商名称</td><td>CUSTOMER_NAME</td><td>TextField</td><td>经销商名称</td><td>始终显示</td><td>选择经销商后自动带出，disabled</td></tr>
<tr><td>经销商简称</td><td>CUSTOMER_SHORT_NAME</td><td>TextField</td><td>经销商简称</td><td>始终显示</td><td>选择经销商后自动带出，disabled</td></tr>
<tr><td>销售区域</td><td>SALES_AREA</td><td>TextField</td><td>销售区域</td><td>始终显示</td><td>选择经销商后自动带出，disabled</td></tr>
<tr><td>门店编码</td><td>TERMINAL_OBJ</td><td>Lov</td><td>门店选择</td><td>始终显示</td><td>默认空，LOV:SA_MKT_TERMINAL_LOV2，lovPara:usable:2、terminalStat:1、searchFlag:3、custId、custCode，选择经销商后可用</td></tr>
<tr><td>门店名称</td><td>TERMINAL_NAME</td><td>TextField</td><td>门店名称</td><td>始终显示</td><td>选择门店后自动带出，disabled</td></tr>
<tr><td>经营属性</td><td>CUSTOMER_CLASS</td><td>TextField</td><td>门店经营属性</td><td>始终显示</td><td>选择门店后自动带出，disabled</td></tr>
<tr><td>运营中心</td><td>OPERATION_CENTER</td><td>TextField</td><td>运营中心</td><td>始终显示</td><td>选择门店后自动带出，disabled</td></tr>
<tr><td>业务类型</td><td>BUSINESS_TYPE</td><td>Select</td><td>样品/家装样品/长库龄</td><td>始终显示</td><td>默认空，来源值集AE.EPM.MAKT.BUSINESS_TYPE，priceType=3时必填，已审批/crmEditFlag=2/priceType≠3时disabled</td></tr>
<tr><td>期望到达日期</td><td>IN_DATE</td><td>DatePicker</td><td>期望到达日期</td><td>始终显示</td><td>默认空，必填，max:一年后、min:今天，stat=5或已审批时disabled</td></tr>
<tr><td>订单类型</td><td>BILL_TYPE</td><td>Select</td><td>常规/计划订单</td><td>始终显示</td><td>默认空，来源值集AE.EPM.BILL_TYPE，必填，optionsFilter仅允许1、2</td></tr>
<tr><td>订单产品线</td><td>ORDER_PDT_LINE_OBJ</td><td>Lov</td><td>订单产品线选择</td><td>始终显示</td><td>默认空，LOV:AE.ORDER_PDT_LINE_SQL，必填</td></tr>
<tr><td>事业部</td><td>DIVISION_NAME</td><td>TextField</td><td>所属事业部</td><td>始终显示</td><td>默认值当前用户deptName，disabled</td></tr>
<tr><td>交易公司</td><td>TRADING_COMPANY_OBJ</td><td>Lov</td><td>交易公司选择</td><td>始终显示</td><td>默认空，LOV:TRADING_LEGAL_SQL_V，必填，lovPara:searchFlag:4、tradingScope:1</td></tr>
<tr><td>开票单位</td><td>BILLING_UNIT_NAME</td><td>TextField</td><td>开票单位</td><td>始终显示</td><td>选择交易公司后自动带出，disabled，必填</td></tr>
<tr><td>销售渠道</td><td>CHANNEL</td><td>Select</td><td>销售渠道</td><td>始终显示</td><td>默认空，来源值集AE.MKT.SALES_CHANNEL，bind:discountPolicyObj.channel，priceType=3时必填</td></tr>
<tr><td>项目编码</td><td>PROJECT_OBJ</td><td>Lov</td><td>项目选择</td><td>始终显示</td><td>默认空，LOV:AE.GET_PROJECT_INFO，渠道非3且非4时disabled</td></tr>
<tr><td>项目名称</td><td>PROJECT_NAME</td><td>TextField</td><td>项目名称</td><td>始终显示</td><td>选择项目后自动带出，disabled，colSpan=2</td></tr>
<tr><td>签约方式</td><td>CONTRACT_TYPE</td><td>Select</td><td>签约方式</td><td>始终显示</td><td>默认值'2'，来源值集AE.EPM.CONTRACT_TYPE，disabled</td></tr>
<tr><td>收货人</td><td>TAKE_MAN_OBJ</td><td>Lov</td><td>收货人选择</td><td>始终显示</td><td>默认空，LOV:AE.CUSTOMER_ADDRESS_INFO，必填，lovPara:searchFlag:1</td></tr>
<tr><td>联系电话</td><td>TAKE_PHONE</td><td>TextField</td><td>收货人电话</td><td>始终显示</td><td>选择收货人后自动带出，disabled</td></tr>
<tr><td>收货地址</td><td>TAKE_ADDRESS</td><td>TextField</td><td>收货地址</td><td>始终显示</td><td>选择收货人后自动带出，disabled</td></tr>
<tr><td>CRM订单号</td><td>SA_SALEBILLNO</td><td>TextField</td><td>CRM回写订单号</td><td>始终显示</td><td>默认空，后端返回，disabled</td></tr>
<tr><td>余额账户</td><td>ACCOUNT_NAME</td><td>TextField</td><td>余额账户名称</td><td>始终显示</td><td>后端返回，disabled</td></tr>
<tr><td>可发货余额</td><td>MAY_CONSIGNMENT_AMOUNT</td><td>NumberField</td><td>可发货余额</td><td>始终显示</td><td>后端返回，disabled</td></tr>
<tr><td>申请数量合计</td><td>QTY_SUM</td><td>NumberField</td><td>所有行数量合计</td><td>始终显示</td><td>自动计算=SUM(行qtyBill)，disabled</td></tr>
<tr><td>申请金额合计</td><td>WTAMOUNT_BILL</td><td>Currency</td><td>所有行折后金额合计</td><td>始终显示</td><td>自动计算=SUM(行wtamountBill)，disabled</td></tr>
<tr><td>币种</td><td>CURRENCY</td><td>TextField</td><td>交易币种</td><td>始终显示</td><td>选择经销商后自动带出，disabled</td></tr>
<tr><td>备注</td><td>NOTE</td><td>TextArea</td><td>单据备注</td><td>始终显示</td><td>默认空，stat=5或已审批时disabled，newLine，colSpan=4</td></tr>
<tr><td>返回原因</td><td>RETURN_REASON</td><td>TextArea</td><td>审批退回原因</td><td>orderStat=11或4时显示</td><td>后端返回，disabled</td></tr>
<tr><td>CRM返回信息</td><td>INTF_INFO</td><td>TextArea</td><td>CRM接口返回信息</td><td>intfInfo非空时显示</td><td>后端返回，disabled</td></tr>
<tr><td>单据状态</td><td>AUDIT_STAT</td><td>Text</td><td>单据状态</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>OA审批成功</td><td>REVIWESTATUS</td><td>Boolean</td><td>OA审批是否成功</td><td>始终显示</td><td>Boolean(2/1)翻译，2=成功/1=失败</td></tr>
<tr><td>折扣政策ID</td><td>DISCOUNT_POLICY_ID</td><td>隐藏</td><td>折扣政策ID</td><td>始终显示</td><td>bind:discountPolicyObj.discountPolicyId</td></tr>
<tr><td>经销商ID</td><td>CUSTOMER_ID</td><td>隐藏</td><td>经销商ID</td><td>始终显示</td><td>bind:customerObj.customerId</td></tr>
<tr><td>经销商编码</td><td>CUSTOMER_CODE</td><td>隐藏</td><td>经销商编码</td><td>始终显示</td><td>bind:customerObj.customerCode</td></tr>
<tr><td>门店ID</td><td>TERMINAL_ID</td><td>隐藏</td><td>门店ID</td><td>始终显示</td><td>bind:terminalObj.terminalId</td></tr>
<tr><td>订单产品线ID</td><td>ORDER_PDT_LINE</td><td>隐藏</td><td>订单产品线ID</td><td>始终显示</td><td>bind:orderPdtLineObj.orderPdtLineId</td></tr>
<tr><td>订单产品线名称</td><td>ORDER_PDT_LINE_NAME</td><td>TextField</td><td>订单产品线名称</td><td>始终显示</td><td>bind:orderPdtLineObj.orderPdtLineName</td></tr>
<tr><td>事业部ID</td><td>ORGANIZATION_ID</td><td>隐藏</td><td>事业部ID</td><td>始终显示</td><td>默认值当前用户DEPT</td></tr>
<tr><td>交易公司ID</td><td>TRADING_COMPANY_ID</td><td>隐藏</td><td>交易公司ID</td><td>始终显示</td><td>bind:tradingCompanyObj.tradingCompanyId</td></tr>
<tr><td>开票单位ID</td><td>BILLING_UNIT_ID</td><td>隐藏</td><td>开票单位ID</td><td>始终显示</td><td>bind:tradingCompanyObj.legalEntityId</td></tr>
<tr><td>项目ID</td><td>PROJECT_ID</td><td>隐藏</td><td>项目ID</td><td>始终显示</td><td>bind:projectObj.projectId</td></tr>
<tr><td>收货人姓名</td><td>TAKE_MAN</td><td>TextField</td><td>收货人姓名</td><td>始终显示</td><td>bind:takeManObj.consignee</td></tr>
<tr><td>含运费</td><td>INCLUDE_FREIGHT_FLAG</td><td>Boolean</td><td>是否含运费</td><td>始终显示</td><td>bind:customerObj.includeFreightFlag，Boolean(Y/N)，默认N</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块4：详情页行表格">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>序号</td><td>-</td><td>Index</td><td>行序号</td><td>始终显示</td><td>自动生成</td></tr>
<tr><td>折扣信息</td><td>DISCOUNT_INFO</td><td>Text</td><td>折扣政策坎级信息</td><td>viewQty=true时显示</td><td>后端返回</td></tr>
<tr><td>政策可下单数</td><td>ACTIVE_QTY</td><td>Number</td><td>折扣政策可下单数量</td><td>viewQty=true时显示</td><td>后端返回</td></tr>
<tr><td>样品编码</td><td>MATERIAL_CODE</td><td>Text</td><td>样品产品编码</td><td>始终显示</td><td>选择样品后自动带出</td></tr>
<tr><td>样品名称</td><td>MATERIAL_NAME</td><td>Text</td><td>样品产品名称</td><td>始终显示</td><td>选择样品后自动带出</td></tr>
<tr><td>本次下单数量</td><td>QTY_BILL</td><td>Number</td><td>本次申请下单数量</td><td>始终显示</td><td>默认空，必填，min:1，step:1，editFlag时可编辑</td></tr>
<tr><td>已发数量</td><td>QTY_DELIVERED</td><td>Number</td><td>已发货数量</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>未发数量</td><td>QTY_UNDELIVERED</td><td>Number</td><td>未发货数量</td><td>始终显示</td><td>自动计算=qtyBill-qtyDelivered</td></tr>
<tr><td>取消数量</td><td>QTY_CANCELLED</td><td>Number</td><td>取消数量</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>回复数量</td><td>QTY_REPLY</td><td>Number</td><td>回复数量</td><td>billType=2时显示</td><td>后端返回</td></tr>
<tr><td>回复备注</td><td>REPLY_NOTE</td><td>Text</td><td>回复备注</td><td>billType=2时显示</td><td>后端返回</td></tr>
<tr><td>型号</td><td>MODEL</td><td>Text</td><td>产品型号</td><td>始终显示</td><td>选择样品后自动带出</td></tr>
<tr><td>是否紧急</td><td>URGENCY</td><td>Boolean</td><td>是否加急</td><td>始终显示</td><td>默认1=否，Boolean(2/1)，editFlag且billType=2时可编辑</td></tr>
<tr><td>计合同折扣(原)</td><td>CONTRACT_DISCOUNT_OLD</td><td>Currency</td><td>原合同折扣</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>计合同折扣(新)</td><td>CONTRACT_DISCOUNT_NEW</td><td>Currency</td><td>新合同折扣</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>计广告费(原)</td><td>AD_FEE_OLD</td><td>Currency</td><td>原广告费</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>计广告费(新)</td><td>AD_FEE_NEW</td><td>Currency</td><td>新广告费</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>计开单折扣(原)</td><td>BILL_DISCOUNT_OLD</td><td>Currency</td><td>原开单折扣</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>计开单折扣(新)</td><td>BILL_DISCOUNT_NEW</td><td>Currency</td><td>新开单折扣</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>标准单价</td><td>PRICE_BILL</td><td>Currency</td><td>标准单价</td><td>始终显示</td><td>选择样品后自动带出</td></tr>
<tr><td>安装单价</td><td>INSTALL_UNIT_PRICE</td><td>Currency</td><td>安装单价</td><td>始终显示</td><td>选择样品后自动带出</td></tr>
<tr><td>标准单价不含安装</td><td>STANDARD_PRICE</td><td>Currency</td><td>不含安装的标准单价</td><td>始终显示</td><td>自动计算=priceBill-installUnitPrice</td></tr>
<tr><td>包安装否</td><td>IS_INSTALL</td><td>Boolean</td><td>是否包安装</td><td>始终显示</td><td>默认2=是，Boolean(2/1)，展厅(customerSubclass=5)时强制为0</td></tr>
<tr><td>应用折扣率</td><td>DISCOUNT_RATE</td><td>Currency</td><td>应用折扣率</td><td>始终显示</td><td>后端返回，precision:5</td></tr>
<tr><td>安装金额</td><td>INSTALL_UNIT_AMT</td><td>Currency</td><td>安装金额</td><td>始终显示</td><td>自动计算=qtyBill×installUnitPrice，展厅时为0</td></tr>
<tr><td>折后单价含</td><td>DISCOUNT_INSTALLATION</td><td>Currency</td><td>折后含安装单价</td><td>始终显示</td><td>后端返回，precision:7</td></tr>
<tr><td>折后单价不含</td><td>DISCOUNTED_PRICE</td><td>Currency</td><td>折后不含安装单价</td><td>始终显示</td><td>后端返回，precision:7</td></tr>
<tr><td>折后金额</td><td>WTAMOUNT_BILL</td><td>Currency</td><td>折后金额</td><td>始终显示</td><td>自动计算=qtyBill×discountedPrice，precision:2</td></tr>
<tr><td>SM状态</td><td>SM_STATE</td><td>Text</td><td>产品SM状态</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>整箱包装数</td><td>PACKAGE_QTY</td><td>Number</td><td>整箱包装数量</td><td>始终显示</td><td>后端返回</td></tr>
<tr><td>说明</td><td>NOTE</td><td>Text</td><td>行备注</td><td>始终显示</td><td>默认空，editFlag时可编辑</td></tr>
<tr><td>全国生产起订量</td><td>MOQ</td><td>Number</td><td>全国生产起订量</td><td>billType=2时显示</td><td>后端返回</td></tr>
<tr><td>全国当月报送总量</td><td>MONTH_SUBMIT_QTY</td><td>Number</td><td>全国当月报送总量</td><td>billType=2时显示</td><td>后端返回</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块5：详情页Tab结构">
<table class="kb-field-tbl">
<thead>
<tr><th>Tab名称</th><th>内容</th><th>显隐条件</th></tr>
</thead>
<tbody>
<tr><td>样品要货</td><td>头表单+行表格</td><td>始终显示</td></tr>
<tr><td>地址变更历史</td><td>地址变更历史记录表格</td><td>始终显示</td></tr>
<tr><td>附件</td><td>附件上传管理</td><td>attachConfId=8161</td></tr>
<tr><td>流程审批</td><td>OA审批流程记录</td><td>hzInstanceId存在时显示</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<h4>弹窗1：折扣政策选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>isMakt</td><td>样品标识</td><td>固定值2，区分样品及长库龄</td><td>2</td><td>IS_MAKT=2的政策</td></tr>
<tr><td>isDilterMaterial</td><td>过滤物料</td><td>是否过滤物料</td><td>true</td><td></td></tr>
<tr><td>priceType</td><td>价格类型</td><td>折扣政策=2</td><td>2</td><td>PRICE_TYPE=2</td></tr>
<tr><td>custId</td><td>客户ID</td><td>当前选择的经销商ID</td><td>10001</td><td>该客户可用政策</td></tr>
<tr><td>custCode</td><td>客户编码</td><td>当前选择的经销商编码</td><td>C001</td><td></td></tr>
<tr><td>channel</td><td>销售渠道</td><td>当前销售渠道</td><td>1</td><td>匹配渠道的政策</td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗2：经销商选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>searchFlag</td><td>查询标识</td><td>查询模式</td><td>2</td><td></td></tr>
<tr><td>divisionId</td><td>事业部ID</td><td>当前事业部</td><td>100</td><td>该事业部下客户</td></tr>
<tr><td>userType</td><td>用户类型</td><td>D=经销商</td><td>D</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗3：门店选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>usable</td><td>可用标识</td><td>是否可用</td><td>2</td><td></td></tr>
<tr><td>terminalStat</td><td>门店状态</td><td>启用状态</td><td>1</td><td>TERMINAL_STAT=1</td></tr>
<tr><td>searchFlag</td><td>查询标识</td><td>查询模式</td><td>3</td><td></td></tr>
<tr><td>custId</td><td>客户ID</td><td>经销商ID</td><td>10001</td><td>该客户下门店</td></tr>
<tr><td>custCode</td><td>客户编码</td><td>经销商编码</td><td>C001</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗4：样品产品选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>discountPolicyId</td><td>折扣政策ID</td><td>当前折扣政策</td><td>20001</td><td>该政策下产品</td></tr>
<tr><td>custId</td><td>客户ID</td><td>经销商ID</td><td>10001</td><td></td></tr>
<tr><td>isMakt</td><td>样品标识</td><td>固定值2</td><td>2</td><td>样品产品</td></tr>
<tr><td>businessType</td><td>业务类型</td><td>3/12/16</td><td>3</td><td>匹配业务类型产品</td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗5：收货人选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>searchFlag</td><td>查询标识</td><td>查询模式</td><td>1</td><td></td></tr>
<tr><td>custId</td><td>客户ID</td><td>经销商ID</td><td>10001</td><td>该客户收货地址</td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗6：交易公司选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>searchFlag</td><td>查询标识</td><td>查询模式</td><td>4</td><td></td></tr>
<tr><td>tradingScope</td><td>交易范围</td><td>交易范围标识</td><td>1</td><td></td></tr>
<tr><td>divisionId</td><td>事业部ID</td><td>当前事业部</td><td>100</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗7：项目选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>custId</td><td>客户ID</td><td>经销商ID</td><td>10001</td><td>该客户关联项目</td></tr>
<tr><td>channel</td><td>销售渠道</td><td>当前渠道</td><td>1</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

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
<h4>弹窗8：订单产品线选择（单选）</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>入参</th><th></th><th></th><th></th><th>数据范围</th></tr>
</thead>
<tbody>
<tr><td>字段名</td><td>中文名</td><td>释义</td><td>示例</td><td></td></tr>
<tr><td>divisionId</td><td>事业部ID</td><td>当前事业部</td><td>100</td><td></td></tr>
</tbody>
</table>
<blockquote>查询SQL：</blockquote>

```sql
SELECT pl.PDT_LINE_ID   AS 产品线ID,
       pl.PDT_LINE_CODE AS 产品线编码,
       pl.PDT_LINE_NAME AS 产品线名称
  FROM ORDER_PDT_LINE pl
 WHERE pl.STATUS = 'ACTIVE'
   AND pl.DIVISION_ID = :divisionId
 ORDER BY pl.PDT_LINE_CODE
```
</KbCard>

<KbCard title="导入">
<h4>前置约定</h4>
<p>1. 导入仅支持产品明细行导入，头信息需在页面上完整填写</p>
<p>2. 导入文件格式为Excel(.xlsx)，首行为表头行</p>
<p>3. 导入前需已选择折扣政策(priceType=2)或价目表(priceType=3)，确保产品价格可匹配</p>
<p>4. 导入前需已选择经销商和门店，确保产品范围可限定</p>
<p>5. 样品编码必须存在于折扣政策产品范围内或价目表产品范围内</p>
<p>6. 同一要货单不允许导入重复样品编码</p>
<h4>字段映射</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段含义</th><th>是否必输</th><th>字段格式</th><th>重复判定字段</th></tr>
</thead>
<tbody>
<tr><td>样品编码</td><td>是</td><td>文本，不超过50字符</td><td>是，同一单内不可重复</td></tr>
<tr><td>本次下单数量</td><td>是</td><td>正整数，≥1</td><td>否</td></tr>
<tr><td>是否紧急</td><td>否</td><td>2=是/1=否，默认1</td><td>否</td></tr>
<tr><td>说明</td><td>否</td><td>文本，不超过200字符</td><td>否</td></tr>
</tbody>
</table>
<h4>处理逻辑</h4>
<p>1. 解析Excel文件，逐行读取样品编码、本次下单数量、是否紧急、说明</p>
<p>2. 根据样品编码查询产品主数据，校验产品是否存在、SM状态是否允许下单</p>
<p>3. 根据折扣政策ID查询产品行，获取起订量、封顶量、可下单数量、标准单价、安装单价</p>
<p>4. 校验本次下单数量≥起订量且≤封顶量且≤可下单数量</p>
<p>5. 自动计算：标准单价不含安装=标准单价-安装单价、安装金额=本次下单数量×安装单价、折后金额=本次下单数量×折后单价不含</p>
<p>6. 展厅产品(customerSubclass=5)强制安装金额=0、包安装否=0</p>
<p>7. 累计申请数量合计=SUM(本次下单数量)、申请金额合计=SUM(折后金额)</p>
<p>8. 全部行校验通过后写入行表格</p>
<h4>异常与结果约定</h4>
<p>1. 样品编码不存在：跳过该行，记录错误"样品编码&#123;code&#125;不存在"</p>
<p>2. 样品编码重复：跳过重复行，记录错误"样品编码&#123;code&#125;重复"</p>
<p>3. SM状态='Z8'：跳过该行，记录错误"样品&#123;code&#125;已停产，禁止下单"</p>
<p>4. 下单数量&lt;起订量：跳过该行，记录错误"样品&#123;code&#125;下单数量&#123;qty&#125;低于起订量&#123;moq&#125;"</p>
<p>5. 下单数量&gt;封顶量：跳过该行，记录错误"样品&#123;code&#125;下单数量&#123;qty&#125;超过封顶量&#123;capQty&#125;"</p>
<p>6. 下单数量&gt;可下单数量：跳过该行，记录错误"样品&#123;code&#125;下单数量&#123;qty&#125;超过可下单数量&#123;activeQty&#125;"</p>
<p>7. 导入完成后弹出结果提示：成功行数、失败行数、失败详情</p>
<h4>运维保障</h4>
<p>1. 导入文件大小限制10MB，超限拒绝上传</p>
<p>2. 导入操作记录操作日志，包含操作人、操作时间、文件名、成功/失败行数</p>
<p>3. 导入失败时可下载错误明细Excel，包含失败行号、样品编码、错误原因</p>
<p>4. 导入过程事务性处理，任一行校验失败不影响其他行，最终统一写入</p>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>编辑</td><td>进入编辑模式</td><td>详情页</td><td>非审批中</td><td>头表单和行表格可编辑</td></tr>
<tr><td>取消编辑</td><td>退出编辑模式</td><td>详情页</td><td>editFlag=true</td><td>放弃当前编辑内容</td></tr>
<tr><td>删除</td><td>删除要货订单</td><td>详情页</td><td>roleList含'AE20250907'且backEditFlag且无saSalebillno且hzApproveStatus='NEW'</td><td>删除头行数据，返还可下单数量</td></tr>
<tr><td>新建</td><td>新建要货订单</td><td>详情页</td><td>始终</td><td>跳转空白新建页</td></tr>
<tr><td>保存</td><td>保存订单草稿</td><td>详情页</td><td>editFlag且(backEditFlag或新建)</td><td>保存头行信息至数据库</td></tr>
<tr><td>保存并提交</td><td>保存并提交审批</td><td>详情页</td><td>(backEditFlag或新建)且priceType≠3</td><td>保存并触发OA审批或直接生成CRM</td></tr>
<tr><td>查看下单数量及坎级</td><td>查看折扣政策可下单数量</td><td>详情页</td><td>editFlag且priceType=2</td><td>弹窗展示可下单数量及坎级信息</td></tr>
<tr><td>生成CRM订单</td><td>手动生成CRM订单</td><td>详情页</td><td>backEditFlag且有interimBiino且priceType=3</td><td>调用CRM接口生成订单</td></tr>
<tr><td>批量获取当月报送总量</td><td>获取全国当月报送总量</td><td>详情页</td><td>backEditFlag且billType=2</td><td>批量查询行产品当月报送总量</td></tr>
<tr><td>同步地址信息</td><td>同步收货地址</td><td>详情页</td><td>有customerCode</td><td>调用接口同步地址并记录变更历史</td></tr>
<tr><td>导出</td><td>导出要货订单</td><td>列表页</td><td>始终</td><td>导出Excel文件</td></tr>
</tbody>
</table>
<h4>按钮1：编辑（详情页）</h4>
<ul><li><strong>触发条件</strong>：单据非审批中状态</li><li><strong>执行逻辑</strong>：</li><li>第1点：设置editFlag=true</li><li>第2点：头表单和行表格进入可编辑状态</li><li>第3点：根据priceType、stat、hzApproveStatus动态设置各字段disabled状态</li><li><strong>接口调用</strong>：无</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.INTERIM_BIINO, h.HZ_APPROVE_STATUS, h.ORDER_STAT
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<h4>按钮2：取消编辑（详情页）</h4>
<ul><li><strong>触发条件</strong>：editFlag=true</li><li><strong>执行逻辑</strong>：</li><li>第1点：设置editFlag=false</li><li>第2点：重新加载原始数据，放弃当前编辑内容</li><li>第3点：头表单和行表格恢复disabled状态</li><li><strong>接口调用</strong>：GET /list-detail重新加载详情</li><li><strong>排查SQL</strong>：无</li></ul>
<h4>按钮3：删除（详情页）</h4>
<ul><li><strong>触发条件</strong>：roleList含'AE20250907'且backEditFlag且saSalebillno为空且hzApproveStatus='NEW'</li><li><strong>执行逻辑</strong>：</li><li>第1点：校验hzApproveStatus≠APPROVED且stat≠5，否则提示"单据已经审核，不允许删除"</li><li>第2点：校验isAuditingWh≠2，否则提示"单据已经审核，不允许删除"</li><li>第3点：校验saSalebillno为空，否则提示"具备了订单号的订单，不允许删除"</li><li>第4点：调用updateActiveQty返还折扣政策可下单数量</li><li>第5点：删除SA_OUT_BILL_HEAD和SA_OUT_BILL_LINE数据</li><li><strong>接口调用</strong>：DELETE /sa-out-bill-heads</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.HEAD_ID, h.HZ_APPROVE_STATUS, h.IS_AUDITING_WH, h.SA_SALEBILLNO, h.ORDER_STAT
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<h4>按钮4：新建（详情页）</h4>
<ul><li><strong>触发条件</strong>：始终可点击</li><li><strong>执行逻辑</strong>：</li><li>第1点：跳转空白新建页</li><li>第2点：头表单初始化默认值：订单日期=当前日期、申请人=当前用户、事业部=当前用户deptName、签约方式='2'、IS_MAKT=2</li><li>第3点：设置editFlag=true、backEditFlag=true</li><li><strong>接口调用</strong>：无</li><li><strong>排查SQL</strong>：无</li></ul>
<h4>按钮5：保存（详情页）</h4>
<ul><li><strong>触发条件</strong>：editFlag且(backEditFlag或新建)</li><li><strong>执行逻辑</strong>：</li><li>第1点：执行preCheckData校验紧急行数、业务类型必填、折扣政策一致性、起订量、封顶量</li><li>第2点：执行verifyCustomer校验客户信息</li><li>第3点：执行updateActiveQty返还旧的可下单数量</li><li>第4点：执行saveHeadData保存头信息</li><li>第5点：执行saveLineData保存行信息</li><li>第6点：执行updateActiveQty扣减新的可下单数量</li><li><strong>接口调用</strong>：POST /sa-out-bill-heads</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.BUSINESS_TYPE, h.HZ_APPROVE_STATUS
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<h4>按钮6：保存并提交（详情页）</h4>
<ul><li><strong>触发条件</strong>：(backEditFlag或新建)且priceType≠3</li><li><strong>执行逻辑</strong>：</li><li>第1点：执行保存全部校验逻辑</li><li>第2点：priceType=2时，设置hzApproveStatus=NEW，调用doOaRequestOrderAudit推送OA审批</li><li>第3点：OA流程编码根据渠道区分：渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT</li><li>第4点：OA单据名称YPYHDD</li><li>第5点：priceType=3时，设置hzApproveStatus=NO_APPROVED，直接生成CRM订单</li><li><strong>接口调用</strong>：POST /sa-out-bill-heads/save-and-submit</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.CHANNEL, h.HZ_APPROVE_STATUS
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<h4>按钮7：查看下单数量及坎级（详情页）</h4>
<ul><li><strong>触发条件</strong>：editFlag且priceType=2</li><li><strong>执行逻辑</strong>：</li><li>第1点：设置viewQty=true</li><li>第2点：行表格显示折扣信息和政策可下单数列</li><li>第3点：查询折扣政策产品行的可下单数量和坎级信息</li><li><strong>接口调用</strong>：无（前端联动显示）</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT dpl.MATERIAL_CODE, dpl.ACTIVE_QTY, dpl.MOQ, dpl.CAP_QTY, dpl.CAP_LEVEL
  FROM DISCOUNT_POLICY_LINE dpl
 WHERE dpl.POLICY_ID = :discountPolicyId
 ORDER BY dpl.MATERIAL_CODE
```
<h4>按钮8：生成CRM订单（详情页）</h4>
<ul><li><strong>触发条件</strong>：backEditFlag且有interimBiino且priceType=3</li><li><strong>执行逻辑</strong>：</li><li>第1点：校验单据信息完整性</li><li>第2点：根据businessType映射CRM类型：3→Sample、12→HomeDecorationSample、16→Long_Inv_Age</li><li>第3点：调用CRM接口生成订单</li><li>第4点：CRM订单号回写至SA_OUT_BILL_HEAD.SA_SALEBILLNO</li><li><strong>接口调用</strong>：POST /sa-out-bill-heads/update-create-crm</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.HEAD_ID, h.INTERIM_BIINO, h.PRICE_TYPE, h.BUSINESS_TYPE, h.SA_SALEBILLNO
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<h4>按钮9：批量获取当月报送总量（详情页）</h4>
<ul><li><strong>触发条件</strong>：backEditFlag且billType=2</li><li><strong>执行逻辑</strong>：</li><li>第1点：遍历行表格所有产品</li><li>第2点：查询每个产品全国当月报送总量</li><li>第3点：回写至行MONTH_SUBMIT_QTY字段</li><li><strong>接口调用</strong>：POST /sa-out-bill-heads/get-cur-month-submit-qty</li><li><strong>排查SQL</strong>：</li></ul>

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
<h4>按钮10：同步地址信息（详情页）</h4>
<ul><li><strong>触发条件</strong>：有customerCode</li><li><strong>执行逻辑</strong>：</li><li>第1点：调用接口获取经销商最新收货地址信息</li><li>第2点：更新头表单收货人、联系电话、收货地址</li><li>第3点：记录地址变更历史至地址变更历史Tab</li><li><strong>接口调用</strong>：POST /sa-out-bill-heads/async-address</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT ca.TAKE_MAN, ca.TAKE_PHONE, ca.TAKE_ADDRESS
  FROM CUSTOMER_ADDRESS ca
 WHERE ca.CUST_ID = :custId
   AND ca.STATUS = 'ACTIVE'
   AND ca.DEFAULT_FLAG = 2
```
<h4>按钮11：导出（列表页）</h4>
<ul><li><strong>触发条件</strong>：始终可点击</li><li><strong>执行逻辑</strong>：</li><li>第1点：根据当前查询条件导出列表数据</li><li>第2点：生成Excel文件并下载</li><li><strong>接口调用</strong>：GET /sa-out-bill-heads/sample-order-export</li><li><strong>排查SQL</strong>：</li></ul>

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
</KbCard>

<KbCard title="保存校验">
<ul><li>校验1：业务类型必填 —— isMakt=2时businessType不能为空</li><li>详细逻辑</li></ul>
<p>- 第1点：当IS_MAKT=2时，头表单BUSINESS_TYPE字段不能为空</p>
<p>- 第2点：priceType=3时businessType必填，priceType=2时非必填</p>
<p>- 第3点：businessType取值范围：3=样品、12=家装样品、16=长库龄</p>
<ul><li>系统体现：保存时preCheckData校验，businessType为空则提示"业务类型不能为空"</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.IS_MAKT, h.PRICE_TYPE, h.BUSINESS_TYPE
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND h.IS_MAKT = 2
   AND h.BUSINESS_TYPE IS NULL
```
<ul><li>校验2：折扣政策一致性 —— businessType/channel/billType需与折扣政策一致</li><li>详细逻辑</li></ul>
<p>- 第1点：头表单BUSINESS_TYPE需与折扣政策BUSINESS_TYPE一致</p>
<p>- 第2点：头表单CHANNEL需与折扣政策CHANNEL一致</p>
<p>- 第3点：头表单BILL_TYPE需与折扣政策BILL_TYPE一致</p>
<ul><li>系统体现：保存时preCheckData校验，不一致则提示"折扣政策与单据信息不一致"</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.BUSINESS_TYPE AS 单据业务类型, h.CHANNEL AS 单据渠道, h.BILL_TYPE AS 单据订单类型,
       dp.BUSINESS_TYPE AS 政策业务类型, dp.CHANNEL AS 政策渠道, dp.BILL_TYPE AS 政策订单类型
  FROM SA_OUT_BILL_HEAD h
  JOIN DISCOUNT_POLICY dp ON dp.POLICY_ID = h.DISCOUNT_POLICY_ID
 WHERE h.HEAD_ID = :headId
   AND (h.BUSINESS_TYPE <> dp.BUSINESS_TYPE OR h.CHANNEL <> dp.CHANNEL OR h.BILL_TYPE <> dp.BILL_TYPE)
```
<ul><li>校验3：起订量校验 —— 订单行数量≥折扣政策产品行起订量</li><li>详细逻辑</li></ul>
<p>- 第1点：每行QTY_BILL≥折扣政策产品行MOQ</p>
<p>- 第2点：低于起订量拦截，提示"样品&#123;code&#125;下单数量&#123;qty&#125;低于起订量&#123;moq&#125;"</p>
<ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.MOQ
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL < dpl.MOQ
```
<ul><li>校验4：封顶量校验 —— 订单行数量≤折扣政策坎级封顶量</li><li>详细逻辑</li></ul>
<p>- 第1点：每行QTY_BILL≤折扣政策产品行CAP_QTY</p>
<p>- 第2点：超过封顶量拦截，提示"样品&#123;code&#125;下单数量&#123;qty&#125;超过封顶量&#123;capQty&#125;"</p>
<ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.CAP_QTY
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL > dpl.CAP_QTY
```
<ul><li>校验5：期望有效期校验 —— 期望到达日期不能晚于政策有效期</li><li>详细逻辑</li></ul>
<p>- 第1点：头表单IN_DATE≤折扣政策EFFECTIVE_DATE_END</p>
<p>- 第2点：超过政策有效期拦截，提示"期望到达日期不能晚于政策有效期"</p>
<ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.IN_DATE, dp.EFFECTIVE_DATE_END
  FROM SA_OUT_BILL_HEAD h
  JOIN DISCOUNT_POLICY dp ON dp.POLICY_ID = h.DISCOUNT_POLICY_ID
 WHERE h.HEAD_ID = :headId
   AND h.IN_DATE > dp.EFFECTIVE_DATE_END
```
<ul><li>校验6：紧急行数校验 —— 仅计划订单可加急，上限=ceil(总行数/5)</li><li>详细逻辑</li></ul>
<p>- 第1点：仅billType=2或14时可加急，常规订单(billType=1)不允许有紧急行</p>
<p>- 第2点：紧急行数(urgency=2)≤ceil(总行数/5)</p>
<p>- 第3点：超过上限拦截，提示"紧急行数超过上限&#123;maxQty&#125;"</p>
<ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul>

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
<ul><li>校验7：期望到达日期范围校验 —— 根据订单类型和渠道限制日期范围</li><li>详细逻辑</li></ul>
<p>- 第1点：常规订单(billType=1)每月25号前下单，期望到达日期需为当月</p>
<p>- 第2点：25号后仅瓷砖产品线可下常规订单</p>
<p>- 第3点：计划订单(billType=2)电商渠道可选当月往后6个月内，其他渠道3个月内</p>
<ul><li>系统体现：保存时preCheckData校验</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.BILL_TYPE, h.CHANNEL, h.IN_DATE, h.ORDER_PDT_LINE_ID
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND h.IN_DATE > ADD_MONTHS(TRUNC(SYSDATE, 'MM'),
       CASE WHEN h.BILL_TYPE = 2 AND h.CHANNEL = :ecommerceChannel THEN 6
            WHEN h.BILL_TYPE = 2 THEN 3
            ELSE 0 END)
```
<ul><li>校验8：价格校验 —— 明细行价格字段不能为空且不能≤0</li><li>详细逻辑</li></ul>
<p>- 第1点：每行PRICE_BILL、STANDARD_PRICE、DISCOUNT_RATE、DISCOUNT_INSTALLATION、DISCOUNTED_PRICE、WTAMOUNT_BILL不能为空</p>
<p>- 第2点：每行PRICE_BILL、STANDARD_PRICE、DISCOUNT_RATE、DISCOUNT_INSTALLATION、DISCOUNTED_PRICE、WTAMOUNT_BILL不能≤0</p>
<ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul>

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
<ul><li>校验9：产品SM状态校验 —— 根据产品生命周期状态控制下单</li><li>详细逻辑</li></ul>
<p>- 第1点：smState='Z8'禁止下单，硬拦截</p>
<p>- 第2点：smState='Z6'计划淘汰中，提示关注但允许下单</p>
<p>- 第3点：smState='S6'进入售后阶段，提示关注但允许下单</p>
<p>- 第4点：smState='Z7'有库存数量发完即止，限制下单数量不超过库存</p>
<ul><li>系统体现：保存时preCheckData逐行校验</li><li>排查SQL：</li></ul>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, m.SM_STATE
  FROM SA_OUT_BILL_LINE l
  JOIN MATERIAL m ON m.MATERIAL_ID = l.MATERIAL_ID
 WHERE l.HEAD_ID = :headId
   AND m.SM_STATE = 'Z8'
```
<ul><li>校验10：客户信息校验 —— 校验客户信息完整性</li><li>详细逻辑</li></ul>
<p>- 第1点：经销商必填，CUSTOMER_OBJ不能为空</p>
<p>- 第2点：门店必填，TERMINAL_OBJ不能为空</p>
<p>- 第3点：收货人必填，TAKE_MAN_OBJ不能为空</p>
<p>- 第4点：交易公司必填，TRADING_COMPANY_OBJ不能为空</p>
<p>- 第5点：订单产品线必填，ORDER_PDT_LINE_OBJ不能为空</p>
<ul><li>系统体现：保存时verifyCustomer校验</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.CUSTOMER_ID, h.TERMINAL_ID, h.TAKE_MAN_ID,
       h.TRADING_COMPANY_ID, h.ORDER_PDT_LINE_ID
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
   AND (h.CUSTOMER_ID IS NULL OR h.TERMINAL_ID IS NULL OR h.TAKE_MAN_ID IS NULL
     OR h.TRADING_COMPANY_ID IS NULL OR h.ORDER_PDT_LINE_ID IS NULL)
```
</KbCard>

<KbCard title="提交校验">
<ul><li>校验1：OA审批推送校验 —— priceType=2时推送OA审批流程</li><li>详细逻辑</li></ul>
<p>- 第1点：priceType=2时设置hzApproveStatus=NEW</p>
<p>- 第2点：OA单据名称YPYHDD</p>
<p>- 第3点：流程编码根据渠道区分：渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT</p>
<p>- 第4点：调用doOaRequestOrderAudit推送OA审批</p>
<p>- 第5点：OA审批通过后生成CRM订单</p>
<ul><li>系统体现：保存并提交按钮触发，priceType=3时跳过OA直接生成CRM</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.PRICE_TYPE, h.CHANNEL, h.HZ_APPROVE_STATUS,
       CASE WHEN h.CHANNEL = 4 THEN 'SAMPLE_ORDER_REQUEST_PROJECT'
            ELSE 'SAMPLE_ORDER_REQUEST_NO_ROJECT' END AS 流程编码
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<ul><li>校验2：CRM订单生成校验 —— 生成CRM订单前校验</li><li>详细逻辑</li></ul>
<p>- 第1点：businessType映射：3→Sample、12→HomeDecorationSample、16→Long_Inv_Age</p>
<p>- 第2点：校验头行信息完整性</p>
<p>- 第3点：priceType=3时直接生成CRM，hzApproveStatus=NO_APPROVED</p>
<p>- 第4点：priceType=2时OA审批通过后生成CRM</p>
<p>- 第5点：CRM订单号回写至SA_SALEBILLNO</p>
<ul><li>系统体现：保存并提交或生成CRM订单按钮触发</li><li>排查SQL：</li></ul>

```sql
SELECT h.HEAD_ID, h.BUSINESS_TYPE, h.PRICE_TYPE, h.HZ_APPROVE_STATUS, h.SA_SALEBILLNO,
       CASE h.BUSINESS_TYPE WHEN 3 THEN 'Sample'
            WHEN 12 THEN 'HomeDecorationSample'
            WHEN 16 THEN 'Long_Inv_Age' END AS CRM业务类型
  FROM SA_OUT_BILL_HEAD h
 WHERE h.HEAD_ID = :headId
```
<ul><li>校验3：可下单数量扣减校验 —— 提交前校验可下单数量充足</li><li>详细逻辑</li></ul>
<p>- 第1点：每行QTY_BILL≤折扣政策产品行ACTIVE_QTY</p>
<p>- 第2点：提交时调用updateActiveQty扣减可下单数量</p>
<p>- 第3点：可下单数量不足拦截，提示"样品&#123;code&#125;可下单数量不足"</p>
<ul><li>系统体现：保存并提交时updateActiveQty校验</li><li>排查SQL：</li></ul>

```sql
SELECT l.LINE_ID, l.MATERIAL_CODE, l.QTY_BILL, dpl.ACTIVE_QTY
  FROM SA_OUT_BILL_LINE l
  JOIN SA_OUT_BILL_HEAD h ON h.HEAD_ID = l.HEAD_ID
  JOIN DISCOUNT_POLICY_LINE dpl ON dpl.POLICY_ID = h.DISCOUNT_POLICY_ID AND dpl.MATERIAL_ID = l.MATERIAL_ID
 WHERE h.HEAD_ID = :headId
   AND l.QTY_BILL > dpl.ACTIVE_QTY
```
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>

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
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>stat=1</td><td>制单/草稿状态</td><td>编辑、保存、删除、保存并提交</td></tr>
<tr><td>stat=4</td><td>审批拒绝/退回</td><td>编辑、保存、保存并提交</td></tr>
<tr><td>stat=5</td><td>审批通过</td><td>查看、生成CRM订单</td></tr>
<tr><td>stat=11</td><td>审批退回</td><td>编辑、保存、保存并提交</td></tr>
<tr><td>HZ_APPROVE_STATUS=NEW</td><td>OA审批中</td><td>查看</td></tr>
<tr><td>HZ_APPROVE_STATUS=APPROVED</td><td>OA审批通过</td><td>查看、生成CRM订单</td></tr>
<tr><td>HZ_APPROVE_STATUS=NO_APPROVED</td><td>无需OA审批(价目表/折扣单)</td><td>查看、生成CRM订单</td></tr>
<tr><td>HZ_APPROVE_STATUS=REJECTED</td><td>OA审批拒绝</td><td>编辑、保存、保存并提交</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：SA_OUT_BILL_HEAD（要货订单头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>HEAD_ID</td><td>NUMBER</td><td>头表主键ID</td><td>-</td><td>主键，自增</td></tr>
<tr><td>INTERIM_BIINO</td><td>VARCHAR2(50)</td><td>要货单号</td><td>要货单号</td><td>保存后后端生成，唯一</td></tr>
<tr><td>IS_MAKT</td><td>NUMBER</td><td>样品及长库龄标识</td><td>-</td><td>固定值2，区分样品及长库龄要货订单</td></tr>
<tr><td>BUSINESS_TYPE</td><td>NUMBER</td><td>业务类型</td><td>业务类型</td><td>3=样品、12=家装样品、16=长库龄</td></tr>
<tr><td>PRICE_TYPE</td><td>NUMBER</td><td>价格类型</td><td>价格类型</td><td>2=折扣政策、3=价目表</td></tr>
<tr><td>DISCOUNT_POLICY_ID</td><td>NUMBER</td><td>折扣政策ID</td><td>折扣政策</td><td>关联DISCOUNT_POLICY.POLICY_ID</td></tr>
<tr><td>DISCOUNT_POLICY_CODE</td><td>VARCHAR2(50)</td><td>折扣政策编码</td><td>折扣政策编码</td><td>冗余字段，选择折扣政策后带出</td></tr>
<tr><td>DISCOUNT_POLICY_NAME</td><td>VARCHAR2(200)</td><td>折扣政策名称</td><td>折扣政策名称</td><td>冗余字段，选择折扣政策后带出</td></tr>
<tr><td>EFFECTIVE_DATE_END</td><td>DATE</td><td>政策有效期至</td><td>政策有效期至</td><td>冗余字段，选择折扣政策后带出</td></tr>
<tr><td>CUSTOMER_ID</td><td>NUMBER</td><td>经销商ID</td><td>经销商编码</td><td>关联CUSTOMER.CUSTOMER_ID，必填</td></tr>
<tr><td>CUSTOMER_CODE</td><td>VARCHAR2(50)</td><td>经销商编码</td><td>经销商编码</td><td>冗余字段</td></tr>
<tr><td>CUSTOMER_NAME</td><td>VARCHAR2(200)</td><td>经销商名称</td><td>经销商名称</td><td>冗余字段</td></tr>
<tr><td>CUSTOMER_SHORT_NAME</td><td>VARCHAR2(100)</td><td>经销商简称</td><td>经销商简称</td><td>冗余字段</td></tr>
<tr><td>SALES_AREA</td><td>VARCHAR2(50)</td><td>销售区域</td><td>销售区域</td><td>冗余字段，选择经销商后带出</td></tr>
<tr><td>TERMINAL_ID</td><td>NUMBER</td><td>门店ID</td><td>门店编码</td><td>关联TERMINAL.TERMINAL_ID</td></tr>
<tr><td>TERMINAL_CODE</td><td>VARCHAR2(50)</td><td>门店编码</td><td>门店编码</td><td>冗余字段</td></tr>
<tr><td>TERMINAL_NAME</td><td>VARCHAR2(200)</td><td>门店名称</td><td>门店名称</td><td>冗余字段</td></tr>
<tr><td>CUSTOMER_CLASS</td><td>VARCHAR2(50)</td><td>经营属性</td><td>经营属性</td><td>冗余字段，选择门店后带出</td></tr>
<tr><td>OPERATION_CENTER</td><td>VARCHAR2(50)</td><td>运营中心</td><td>运营中心</td><td>冗余字段，选择门店后带出</td></tr>
<tr><td>IN_DATE</td><td>DATE</td><td>期望到达日期</td><td>期望到达日期</td><td>必填，校验范围</td></tr>
<tr><td>BILL_TYPE</td><td>NUMBER</td><td>订单类型</td><td>订单类型</td><td>1=常规、2=计划，必填</td></tr>
<tr><td>ORDER_PDT_LINE_ID</td><td>NUMBER</td><td>订单产品线ID</td><td>订单产品线</td><td>关联ORDER_PDT_LINE.PDT_LINE_ID，必填</td></tr>
<tr><td>DIVISION_ID</td><td>NUMBER</td><td>事业部ID</td><td>事业部</td><td>当前用户deptId</td></tr>
<tr><td>DIVISION_NAME</td><td>VARCHAR2(200)</td><td>事业部名称</td><td>事业部</td><td>当前用户deptName</td></tr>
<tr><td>TRADING_COMPANY_ID</td><td>NUMBER</td><td>交易公司ID</td><td>交易公司</td><td>关联TRADING_LEGAL.TRADING_COMPANY_ID，必填</td></tr>
<tr><td>TRADING_COMPANY_NAME</td><td>VARCHAR2(200)</td><td>交易公司名称</td><td>交易公司</td><td>冗余字段</td></tr>
<tr><td>BILLING_UNIT_ID</td><td>NUMBER</td><td>开票单位ID</td><td>开票单位</td><td>选择交易公司后带出</td></tr>
<tr><td>BILLING_UNIT_NAME</td><td>VARCHAR2(200)</td><td>开票单位名称</td><td>开票单位</td><td>冗余字段，必填</td></tr>
<tr><td>CHANNEL</td><td>NUMBER</td><td>销售渠道</td><td>销售渠道</td><td>bind折扣政策channel，priceType=3时必填</td></tr>
<tr><td>PROJECT_ID</td><td>NUMBER</td><td>项目ID</td><td>项目编码</td><td>关联PROJECT.PROJECT_ID</td></tr>
<tr><td>PROJECT_CODE</td><td>VARCHAR2(50)</td><td>项目编码</td><td>项目编码</td><td>冗余字段</td></tr>
<tr><td>PROJECT_NAME</td><td>VARCHAR2(200)</td><td>项目名称</td><td>项目名称</td><td>冗余字段</td></tr>
<tr><td>CONTRACT_TYPE</td><td>NUMBER</td><td>签约方式</td><td>签约方式</td><td>默认值2</td></tr>
<tr><td>TAKE_MAN_ID</td><td>NUMBER</td><td>收货人ID</td><td>收货人</td><td>关联CUSTOMER_ADDRESS.ADDRESS_ID，必填</td></tr>
<tr><td>TAKE_MAN</td><td>VARCHAR2(100)</td><td>收货人姓名</td><td>收货人</td><td>冗余字段</td></tr>
<tr><td>TAKE_PHONE</td><td>VARCHAR2(50)</td><td>联系电话</td><td>联系电话</td><td>冗余字段</td></tr>
<tr><td>TAKE_ADDRESS</td><td>VARCHAR2(500)</td><td>收货地址</td><td>收货地址</td><td>冗余字段</td></tr>
<tr><td>SA_SALEBILLNO</td><td>VARCHAR2(50)</td><td>CRM订单号</td><td>CRM订单号</td><td>CRM回写，有值时禁止删除</td></tr>
<tr><td>ACCOUNT_NAME</td><td>VARCHAR2(200)</td><td>余额账户</td><td>余额账户</td><td>后端返回</td></tr>
<tr><td>MAY_CONSIGNMENT_AMOUNT</td><td>NUMBER</td><td>可发货余额</td><td>可发货余额</td><td>后端返回</td></tr>
<tr><td>QTY_SUM</td><td>NUMBER</td><td>申请数量合计</td><td>申请数量合计</td><td>自动计算=SUM(行QTY_BILL)</td></tr>
<tr><td>WTAMOUNT_BILL</td><td>NUMBER</td><td>申请金额合计</td><td>申请金额合计</td><td>自动计算=SUM(行WTAMOUNT_BILL)</td></tr>
<tr><td>CURRENCY</td><td>VARCHAR2(50)</td><td>币种</td><td>币种</td><td>选择经销商后带出</td></tr>
<tr><td>NOTE</td><td>VARCHAR2(1000)</td><td>备注</td><td>备注</td><td>手动输入</td></tr>
<tr><td>RETURN_REASON</td><td>VARCHAR2(1000)</td><td>返回原因</td><td>返回原因</td><td>审批退回时记录</td></tr>
<tr><td>INTF_INFO</td><td>VARCHAR2(2000)</td><td>CRM返回信息</td><td>CRM返回信息</td><td>CRM接口返回</td></tr>
<tr><td>ORDER_STAT</td><td>NUMBER</td><td>订单状态</td><td>订单状态</td><td>1=制单、4=拒绝、5=通过、11=退回</td></tr>
<tr><td>HZ_APPROVE_STATUS</td><td>VARCHAR2(50)</td><td>OA审批状态</td><td>流程状态</td><td>NEW/APPROVED/NO_APPROVED/REJECTED</td></tr>
<tr><td>REVIWESTATUS</td><td>NUMBER</td><td>OA审批成功</td><td>OA审批成功</td><td>2=成功、1=失败</td></tr>
<tr><td>IS_AUDITING_WH</td><td>NUMBER</td><td>审核标识</td><td>-</td><td>2=已审核，禁止删除</td></tr>
<tr><td>HZ_INSTANCE_ID</td><td>VARCHAR2(100)</td><td>OA流程实例ID</td><td>-</td><td>OA审批流程实例</td></tr>
<tr><td>CRM_EDIT_FLAG</td><td>NUMBER</td><td>CRM编辑标识</td><td>-</td><td>2=禁止编辑</td></tr>
<tr><td>DATE_INVBILL</td><td>DATE</td><td>订单日期</td><td>订单日期</td><td>默认当前日期</td></tr>
<tr><td>CREATED_BY_NAME</td><td>VARCHAR2(100)</td><td>创建人</td><td>申请人</td><td>默认当前用户</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>LAST_UPDATED_BY_NAME</td><td>VARCHAR2(100)</td><td>修改人</td><td>-</td><td>系统自动记录</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>修改时间</td><td>-</td><td>系统自动记录</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表2：SA_OUT_BILL_LINE（要货订单行表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>LINE_ID</td><td>NUMBER</td><td>行表主键ID</td><td>-</td><td>主键，自增</td></tr>
<tr><td>HEAD_ID</td><td>NUMBER</td><td>头表ID</td><td>-</td><td>关联SA_OUT_BILL_HEAD.HEAD_ID</td></tr>
<tr><td>MATERIAL_ID</td><td>NUMBER</td><td>产品ID</td><td>样品编码</td><td>关联MATERIAL.MATERIAL_ID</td></tr>
<tr><td>MATERIAL_CODE</td><td>VARCHAR2(50)</td><td>产品编码</td><td>样品编码</td><td>冗余字段</td></tr>
<tr><td>MATERIAL_NAME</td><td>VARCHAR2(200)</td><td>产品名称</td><td>样品名称</td><td>冗余字段</td></tr>
<tr><td>MODEL</td><td>VARCHAR2(100)</td><td>型号</td><td>型号</td><td>冗余字段</td></tr>
<tr><td>QTY_BILL</td><td>NUMBER</td><td>本次下单数量</td><td>本次下单数量</td><td>必填，≥1，校验起订量/封顶量</td></tr>
<tr><td>QTY_DELIVERED</td><td>NUMBER</td><td>已发数量</td><td>已发数量</td><td>后端返回</td></tr>
<tr><td>QTY_UNDELIVERED</td><td>NUMBER</td><td>未发数量</td><td>未发数量</td><td>自动计算=QTY_BILL-QTY_DELIVERED</td></tr>
<tr><td>QTY_CANCELLED</td><td>NUMBER</td><td>取消数量</td><td>取消数量</td><td>后端返回</td></tr>
<tr><td>QTY_REPLY</td><td>NUMBER</td><td>回复数量</td><td>回复数量</td><td>billType=2时显示</td></tr>
<tr><td>REPLY_NOTE</td><td>VARCHAR2(500)</td><td>回复备注</td><td>回复备注</td><td>billType=2时显示</td></tr>
<tr><td>URGENCY</td><td>NUMBER</td><td>是否紧急</td><td>是否紧急</td><td>2=是、1=否，billType=2时可编辑</td></tr>
<tr><td>CONTRACT_DISCOUNT_OLD</td><td>NUMBER</td><td>原合同折扣</td><td>计合同折扣(原)</td><td>后端返回</td></tr>
<tr><td>CONTRACT_DISCOUNT_NEW</td><td>NUMBER</td><td>新合同折扣</td><td>计合同折扣(新)</td><td>后端返回</td></tr>
<tr><td>AD_FEE_OLD</td><td>NUMBER</td><td>原广告费</td><td>计广告费(原)</td><td>后端返回</td></tr>
<tr><td>AD_FEE_NEW</td><td>NUMBER</td><td>新广告费</td><td>计广告费(新)</td><td>后端返回</td></tr>
<tr><td>BILL_DISCOUNT_OLD</td><td>NUMBER</td><td>原开单折扣</td><td>计开单折扣(原)</td><td>后端返回</td></tr>
<tr><td>BILL_DISCOUNT_NEW</td><td>NUMBER</td><td>新开单折扣</td><td>计开单折扣(新)</td><td>后端返回</td></tr>
<tr><td>PRICE_BILL</td><td>NUMBER</td><td>标准单价</td><td>标准单价</td><td>选择样品后带出，校验&gt;0</td></tr>
<tr><td>INSTALL_UNIT_PRICE</td><td>NUMBER</td><td>安装单价</td><td>安装单价</td><td>选择样品后带出</td></tr>
<tr><td>STANDARD_PRICE</td><td>NUMBER</td><td>标准单价不含安装</td><td>标准单价不含安装</td><td>自动计算=PRICE_BILL-INSTALL_UNIT_PRICE</td></tr>
<tr><td>IS_INSTALL</td><td>NUMBER</td><td>包安装否</td><td>包安装否</td><td>2=是、1=否，展厅强制为0</td></tr>
<tr><td>DISCOUNT_RATE</td><td>NUMBER</td><td>应用折扣率</td><td>应用折扣率</td><td>后端返回，precision:5</td></tr>
<tr><td>INSTALL_UNIT_AMT</td><td>NUMBER</td><td>安装金额</td><td>安装金额</td><td>自动计算=QTY_BILL×INSTALL_UNIT_PRICE，展厅为0</td></tr>
<tr><td>DISCOUNT_INSTALLATION</td><td>NUMBER</td><td>折后单价含安装</td><td>折后单价含</td><td>后端返回，precision:7</td></tr>
<tr><td>DISCOUNTED_PRICE</td><td>NUMBER</td><td>折后单价不含安装</td><td>折后单价不含</td><td>后端返回，precision:7</td></tr>
<tr><td>WTAMOUNT_BILL</td><td>NUMBER</td><td>折后金额</td><td>折后金额</td><td>自动计算=QTY_BILL×DISCOUNTED_PRICE</td></tr>
<tr><td>SM_STATE</td><td>VARCHAR2(10)</td><td>SM状态</td><td>SM状态</td><td>后端返回，Z8禁止下单</td></tr>
<tr><td>PACKAGE_QTY</td><td>NUMBER</td><td>整箱包装数</td><td>整箱包装数</td><td>后端返回</td></tr>
<tr><td>NOTE</td><td>VARCHAR2(500)</td><td>行备注</td><td>说明</td><td>手动输入</td></tr>
<tr><td>MOQ</td><td>NUMBER</td><td>全国生产起订量</td><td>全国生产起订量</td><td>billType=2时显示，后端返回</td></tr>
<tr><td>MONTH_SUBMIT_QTY</td><td>NUMBER</td><td>全国当月报送总量</td><td>全国当月报送总量</td><td>billType=2时显示，后端返回</td></tr>
<tr><td>CUSTOMER_SUBCLASS</td><td>NUMBER</td><td>客户子类</td><td>-</td><td>5=展厅，影响安装金额计算</td></tr>
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
<tr><td>业务类型不能为空</td><td>保存校验</td><td>isMakt=2时businessType必填，选择业务类型后保存</td><td>高</td><td>[查看](#报错1业务类型不能为空)</td></tr>
<tr><td>折扣政策与单据信息不一致</td><td>保存校验</td><td>businessType/channel/billType需与折扣政策一致，重新选择折扣政策或调整单据信息</td><td>高</td><td>[查看](#报错2折扣政策与单据信息不一致)</td></tr>
<tr><td>样品&#123;code&#125;下单数量&#123;qty&#125;低于起订量&#123;moq&#125;</td><td>保存校验</td><td>下单数量需≥折扣政策起订量，调整下单数量</td><td>高</td><td>[查看](#报错3样品code下单数量qty低于起订量moq)</td></tr>
<tr><td>样品&#123;code&#125;下单数量&#123;qty&#125;超过封顶量&#123;capQty&#125;</td><td>保存校验</td><td>下单数量需≤折扣政策封顶量，调整下单数量</td><td>高</td><td>[查看](#报错4样品code下单数量qty超过封顶量capqty)</td></tr>
<tr><td>期望到达日期不能晚于政策有效期</td><td>保存校验</td><td>期望到达日期需≤政策有效期至，调整期望到达日期</td><td>高</td><td>[查看](#报错5期望到达日期不能晚于政策有效期)</td></tr>
<tr><td>紧急行数超过上限&#123;maxQty&#125;</td><td>保存校验</td><td>紧急行数上限=ceil(总行数/5)，减少紧急行数</td><td>中</td><td>[查看](#报错6紧急行数超过上限maxqty)</td></tr>
<tr><td>样品&#123;code&#125;已停产，禁止下单</td><td>保存校验</td><td>产品SM状态='Z8'禁止下单，移除该行</td><td>高</td><td>[查看](#报错7样品code已停产禁止下单)</td></tr>
<tr><td>样品&#123;code&#125;可下单数量不足</td><td>提交校验</td><td>折扣政策可下单数量不足，调整下单数量或联系管理员</td><td>高</td><td>[查看](#报错8样品code可下单数量不足)</td></tr>
<tr><td>单据已经审核，不允许删除</td><td>删除操作</td><td>hzApproveStatus=APPROVED或stat=5或isAuditingWh=2，不可删除</td><td>高</td><td>[查看](#报错9单据已经审核不允许删除)</td></tr>
<tr><td>具备了订单号的订单，不允许删除</td><td>删除操作</td><td>saSalebillno不为空，已生成CRM订单不可删除</td><td>高</td><td>[查看](#报错10具备了订单号的订单不允许删除)</td></tr>
<tr><td>价格不能为空或小于等于0</td><td>保存校验</td><td>行价格字段缺失或异常，重新选择产品或联系管理员</td><td>高</td><td>[查看](#报错11价格不能为空或小于等于0)</td></tr>
<tr><td>只有计划订单可以加紧急</td><td>保存校验</td><td>仅计划订单(billType=2/14)允许加急，常规订单移除加急标记</td><td>高</td><td>[查看](#报错12只有计划订单可以加紧急)</td></tr>
<tr><td>存在重复下单的产品：&#123;code&#125;</td><td>保存校验</td><td>同一单据存在重复产品行，合并或删除重复行</td><td>高</td><td>[查看](#报错13存在重复下单的产品code)</td></tr>
<tr><td>价格类型为折扣政策的订单，政策id不能为空</td><td>保存校验</td><td>priceType=2时折扣政策ID必填，先选择折扣政策</td><td>高</td><td>[查看](#报错14价格类型为折扣政策的订单政策id不能为空)</td></tr>
<tr><td>明细行不能为空</td><td>保存校验</td><td>未添加产品明细行，先添加产品行</td><td>高</td><td>[查看](#报错15明细行不能为空)</td></tr>
<tr><td>您当前的经销合作合同已失效，暂无法正常下单，请联系业务员处理。</td><td>保存校验</td><td>经销商合作合同已失效，联系业务员续签合同</td><td>高</td><td>[查看](#报错16您当前的经销合作合同已失效暂无法正常下单请联系业务员处理)</td></tr>
<tr><td>价目表或者折扣单要货，不需要送签OA，请选择生成crm订单</td><td>保存并提交</td><td>priceType=3无需OA审批，改用生成CRM订单按钮</td><td>高</td><td>[查看](#报错17价目表或者折扣单要货不需要送签oa请选择生成crm订单)</td></tr>
<tr><td>该单据已经审核</td><td>保存并提交</td><td>单据已审核不可重复提交，刷新页面查看最新状态</td><td>高</td><td>[查看](#报错18该单据已经审核)</td></tr>
<tr><td>折扣政策不存在，请联系管理员</td><td>保存并提交</td><td>折扣政策已被删除，重新选择有效折扣政策</td><td>高</td><td>[查看](#报错19折扣政策不存在请联系管理员)</td></tr>
<tr><td>折扣政策【&#123;code&#125;】已失效，请联系区域经理</td><td>保存并提交</td><td>折扣政策已失效，联系区域经理重新配置或选择有效政策</td><td>高</td><td>[查看](#报错20折扣政策code已失效请联系区域经理)</td></tr>
<tr><td>折扣政策【&#123;code&#125;】不在有效期内，请联系区域经理</td><td>保存并提交</td><td>折扣政策已过期，联系区域经理或选择有效期内政策</td><td>高</td><td>[查看](#报错21折扣政策code不在有效期内请联系区域经理)</td></tr>
<tr><td>流程编码缺失，请选择流程！</td><td>保存并提交</td><td>OA流程编码未配置，联系管理员配置流程编码</td><td>高</td><td>[查看](#报错22流程编码缺失请选择流程)</td></tr>
<tr><td>地址不存在或数据异常，请点击右上角【同步地址信息】按钮后，重新选择地址!</td><td>保存校验</td><td>收货地址数据异常，点击同步地址信息后重新选择</td><td>高</td><td>[查看](#报错23地址不存在或数据异常请点击右上角同步地址信息按钮后重新选择地址)</td></tr>
<tr><td>当前折扣政策已失效，请重新选择！</td><td>保存并提交</td><td>折扣政策在提交前被失效，重新选择有效折扣政策</td><td>高</td><td>[查看](#报错24当前折扣政策已失效请重新选择)</td></tr>
<tr><td>您当前的要货订单已超有效期，请联系业务员处理。</td><td>保存并提交</td><td>订单超过有效期限制，联系业务员处理</td><td>高</td><td>[查看](#报错25您当前的要货订单已超有效期请联系业务员处理)</td></tr>
<tr><td>未查询到业务单据，请检查</td><td>操作校验</td><td>单据不存在或已被删除，刷新列表</td><td>高</td><td>[查看](#报错26未查询到业务单据请检查)</td></tr>
</tbody>
</table>
<h4>报错1：业务类型不能为空</h4>
<ul><li><strong>触发条件</strong>：点击"保存"或"保存并提交"按钮，preCheckData校验时，IS_MAKT=2且BUSINESS_TYPE为空</li><li><strong>逻辑分析</strong>：样品及长库龄要货订单需明确业务类型以区分样品(3)/家装样品(12)/长库龄(16)，并驱动后续CRM订单类型映射。校验逻辑读取SA_OUT_BILL_HEAD.BUSINESS_TYPE，当IS_MAKT=2且BUSINESS_TYPE为空时抛异常。priceType=3（价目表）时必填，priceType=2（折扣政策）时由折扣政策带入但若政策未选也会为空。常见根因：用户未选择业务类型、折扣政策未带入业务类型、或前端未做必填校验。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.is_makt            AS 样品标识,
         h.price_type         AS 价格类型,
         h.business_type      AS 业务类型,
         h.order_stat         AS 订单状态
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.business_type IS NULL
  ORDER  BY h.creation_date DESC;
```
<h4>报错2：折扣政策与单据信息不一致</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，头表BUSINESS_TYPE/CHANNEL/BILL_TYPE与关联折扣政策对应字段任一不一致</li><li><strong>逻辑分析</strong>：折扣政策限定了业务类型、销售渠道、订单类型范围，要货订单必须与所选政策保持一致才能享受折扣。校验逻辑关联SA_OUT_BILL_HEAD与DISCOUNT_POLICY，比对BUSINESS_TYPE、CHANNEL、BILL_TYPE三个字段，任一不一致即抛异常。常见根因：用户先选政策后改单据字段、或先填单据后选不匹配的政策、或政策被修改后单据未同步。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.business_type      AS 单据业务类型,
         h.channel            AS 单据销售渠道,
         h.bill_type          AS 单据订单类型,
         dp.business_type     AS 政策业务类型,
         dp.channel           AS 政策销售渠道,
         dp.bill_type         AS 政策订单类型
  FROM   sa_out_bill_head h
  JOIN   discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    (h.business_type <> dp.business_type
          OR h.channel <> dp.channel
          OR h.bill_type <> dp.bill_type)
  ORDER  BY h.creation_date DESC;
```
<h4>报错3：样品&#123;code&#125;下单数量&#123;qty&#125;低于起订量&#123;moq&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData逐行校验时，某行QTY_BILL&lt;折扣政策产品行MOQ</li><li><strong>逻辑分析</strong>：折扣政策对每个产品设定了全国生产起订量，下单数量低于起订量无法享受折扣价且影响生产排期。校验逻辑关联SA_OUT_BILL_LINE与DISCOUNT_POLICY_LINE，比对每行QTY_BILL与MOQ，低于则抛异常并提示具体产品编码、下单数量、起订量。常见根因：用户输入数量过小、未注意起订量提示、或折扣政策起订量配置过高。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT l.line_id           AS 行ID,
         l.material_code     AS 样品编码,
         l.material_name     AS 样品名称,
         l.qty_bill          AS 下单数量,
         dpl.moq             AS 起订量,
         h.interim_biino     AS 要货单号
  FROM   sa_out_bill_line l
  JOIN   sa_out_bill_head h ON h.head_id = l.head_id
  JOIN   discount_policy_line dpl ON dpl.policy_id = h.discount_policy_id
                                AND dpl.material_id = l.material_id
  WHERE  h.is_makt = 2
  AND    l.qty_bill < dpl.moq
  ORDER  BY h.creation_date DESC;
```
<h4>报错4：样品&#123;code&#125;下单数量&#123;qty&#125;超过封顶量&#123;capQty&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData逐行校验时，某行QTY_BILL&gt;折扣政策产品行CAP_QTY（坎级封顶量）</li><li><strong>逻辑分析</strong>：折扣政策对每个产品设定了坎级封顶量，下单数量超过封顶量无法享受折扣优惠。校验逻辑关联SA_OUT_BILL_LINE与DISCOUNT_POLICY_LINE，比对每行QTY_BILL与CAP_QTY，超过则抛异常并提示具体产品编码、下单数量、封顶量。常见根因：用户输入数量过大、未注意封顶量提示、或折扣政策封顶量配置过低。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT l.line_id           AS 行ID,
         l.material_code     AS 样品编码,
         l.material_name     AS 样品名称,
         l.qty_bill          AS 下单数量,
         dpl.cap_qty         AS 封顶量,
         h.interim_biino     AS 要货单号
  FROM   sa_out_bill_line l
  JOIN   sa_out_bill_head h ON h.head_id = l.head_id
  JOIN   discount_policy_line dpl ON dpl.policy_id = h.discount_policy_id
                                AND dpl.material_id = l.material_id
  WHERE  h.is_makt = 2
  AND    l.qty_bill > dpl.cap_qty
  ORDER  BY h.creation_date DESC;
```
<h4>报错5：期望到达日期不能晚于政策有效期</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，头表IN_DATE&gt;折扣政策EFFECTIVE_DATE_END</li><li><strong>逻辑分析</strong>：折扣政策有有效期限，期望到达日期超过政策有效期则该订单无法享受政策折扣。校验逻辑关联SA_OUT_BILL_HEAD与DISCOUNT_POLICY，比对IN_DATE与EFFECTIVE_DATE_END，超过则抛异常。常见根因：用户选择期望到达日期过晚、折扣政策即将到期、或前端未做日期范围限制。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.in_date            AS 期望到达日期,
         h.effective_date_end AS 政策有效期至,
         dp.effective_date_end AS 政策实际有效期至
  FROM   sa_out_bill_head h
  JOIN   discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    h.in_date > dp.effective_date_end
  ORDER  BY h.creation_date DESC;
```
<h4>报错6：紧急行数超过上限&#123;maxQty&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，紧急行数（URGENCY=2的行数）&gt;ceil(总行数/5)</li><li><strong>逻辑分析</strong>：为避免大量加急订单冲击正常生产排期，限制紧急行数比例不超过总行数的20%（ceil(总行数/5)）。仅计划订单（billType=2或14）允许加急，常规订单不允许有紧急行。校验逻辑统计SA_OUT_BILL_LINE中URGENCY=2的行数，超过上限则抛异常。常见根因：用户标记过多紧急行、或前端未做紧急行数限制提示。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id                              AS 头表ID,
         h.interim_biino                        AS 要货单号,
         h.bill_type                            AS 订单类型,
         COUNT(l.line_id)                       AS 总行数,
         SUM(CASE WHEN l.urgency = 2 THEN 1 ELSE 0 END) AS 紧急行数,
         CEIL(COUNT(l.line_id) / 5)             AS 紧急上限
  FROM   sa_out_bill_head h
  JOIN   sa_out_bill_line l ON l.head_id = h.head_id
  WHERE  h.is_makt = 2
  AND    h.bill_type IN (2, 14)
  GROUP  BY h.head_id, h.interim_biino, h.bill_type
  HAVING SUM(CASE WHEN l.urgency = 2 THEN 1 ELSE 0 END) > CEIL(COUNT(l.line_id) / 5);
```
<h4>报错7：样品&#123;code&#125;已停产，禁止下单</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData逐行校验时，某行产品SM_STATE='Z8'（已停产）</li><li><strong>逻辑分析</strong>：产品生命周期状态为Z8表示已停产，禁止下单以避免库存积压和交付风险。校验逻辑关联SA_OUT_BILL_LINE与MATERIAL，比对SM_STATE，为Z8则抛异常并提示具体产品编码。常见根因：用户选择已停产产品、产品在选品后被标记停产、或前端产品选择列表未过滤停产产品。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT l.line_id           AS 行ID,
         l.material_code     AS 样品编码,
         l.material_name     AS 样品名称,
         l.sm_state          AS SM状态,
         h.interim_biino     AS 要货单号
  FROM   sa_out_bill_line l
  JOIN   sa_out_bill_head h ON h.head_id = l.head_id
  WHERE  h.is_makt = 2
  AND    l.sm_state = 'Z8'
  ORDER  BY h.creation_date DESC;
```
<h4>报错8：样品&#123;code&#125;可下单数量不足</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，updateActiveQty校验时，某行QTY_BILL&gt;折扣政策产品行ACTIVE_QTY（可下单数量）</li><li><strong>逻辑分析</strong>：折扣政策对每个产品设定了可下单数量上限，多个订单共享同一政策时需扣减可下单数量。提交时校验逻辑关联SA_OUT_BILL_LINE与DISCOUNT_POLICY_LINE，比对QTY_BILL与ACTIVE_QTY，超过则抛异常并提示具体产品编码。常见根因：并发提交导致可下单数量被其他订单扣减、或用户下单数量超过剩余可下单数量。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT l.line_id           AS 行ID,
         l.material_code     AS 样品编码,
         l.material_name     AS 样品名称,
         l.qty_bill          AS 下单数量,
         dpl.active_qty      AS 可下单数量,
         h.interim_biino     AS 要货单号
  FROM   sa_out_bill_line l
  JOIN   sa_out_bill_head h ON h.head_id = l.head_id
  JOIN   discount_policy_line dpl ON dpl.policy_id = h.discount_policy_id
                                AND dpl.material_id = l.material_id
  WHERE  h.is_makt = 2
  AND    l.qty_bill > dpl.active_qty
  ORDER  BY h.creation_date DESC;
```
<h4>报错9：单据已经审核，不允许删除</h4>
<ul><li><strong>触发条件</strong>：点击"删除"按钮，删除前校验时，HZ_APPROVE_STATUS='APPROVED'或ORDER_STAT=5或IS_AUDITING_WH=2</li><li><strong>逻辑分析</strong>：已审核单据已进入下游业务流程（可能已生成CRM订单或推送ERP发货），删除会导致数据不一致。校验逻辑读取SA_OUT_BILL_HEAD的HZ_APPROVE_STATUS、ORDER_STAT、IS_AUDITING_WH，任一满足已审核条件则抛异常阻止删除。常见根因：用户尝试删除已审批通过的单据、或单据已进入发货流程。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id              AS 头表ID,
         h.interim_biino        AS 要货单号,
         h.hz_approve_status    AS OA审批状态,
         h.order_stat           AS 订单状态,
         h.is_auditing_wh       AS 审核标识,
         h.sa_salebillno        AS CRM订单号
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    (h.hz_approve_status = 'APPROVED'
          OR h.order_stat = 5
          OR h.is_auditing_wh = 2)
  ORDER  BY h.creation_date DESC;
```
<h4>报错10：具备了订单号的订单，不允许删除</h4>
<ul><li><strong>触发条件</strong>：点击"删除"按钮，删除前校验时，SA_SALEBILLNO（CRM订单号）不为空</li><li><strong>逻辑分析</strong>：单据已生成CRM订单（SA_SALEBILLNO有值）表示已进入CRM系统流转，删除会导致DMS与CRM数据不一致。校验逻辑读取SA_OUT_BILL_HEAD.SA_SALEBILLNO，不为空则抛异常阻止删除。常见根因：用户尝试删除已生成CRM订单的单据、或CRM订单已生成但前端未禁用删除按钮。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id              AS 头表ID,
         h.interim_biino        AS 要货单号,
         h.sa_salebillno        AS CRM订单号,
         h.hz_approve_status    AS OA审批状态,
         h.order_stat           AS 订单状态
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.sa_salebillno IS NOT NULL
  ORDER  BY h.creation_date DESC;
```
<h4>报错11：价格不能为空或小于等于0</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData逐行校验时，某行价格字段（PRICE_BILL/STANDARD_PRICE/DISCOUNT_RATE/DISCOUNT_INSTALLATION/DISCOUNTED_PRICE/WTAMOUNT_BILL）为空或&lt;=0</li><li><strong>逻辑分析</strong>：要货订单行需有有效价格才能正确计算金额并生成CRM订单。校验逻辑读取SA_OUT_BILL_LINE的PRICE_BILL、STANDARD_PRICE、DISCOUNT_RATE、DISCOUNT_INSTALLATION、DISCOUNTED_PRICE、WTAMOUNT_BILL六个价格字段，任一为空或&lt;=0则抛异常。常见根因：产品未正确带出价格、折扣政策折扣率异常、价目表未配置该产品价格、或价格计算逻辑异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT l.line_id              AS 行ID,
         l.material_code        AS 样品编码,
         l.material_name        AS 样品名称,
         l.price_bill           AS 标准单价,
         l.standard_price       AS 标准单价不含安装,
         l.discount_rate        AS 应用折扣率,
         l.discount_installation AS 折后单价含安装,
         l.discounted_price     AS 折后单价不含安装,
         l.wtamount_bill        AS 折后金额,
         h.interim_biino        AS 要货单号
  FROM   sa_out_bill_line l
  JOIN   sa_out_bill_head h ON h.head_id = l.head_id
  WHERE  h.is_makt = 2
  AND    (l.price_bill IS NULL OR l.price_bill <= 0
          OR l.standard_price IS NULL OR l.standard_price <= 0
          OR l.discount_rate IS NULL OR l.discount_rate <= 0
          OR l.discount_installation IS NULL OR l.discount_installation <= 0
          OR l.discounted_price IS NULL OR l.discounted_price <= 0
          OR l.wtamount_bill IS NULL OR l.wtamount_bill <= 0)
  ORDER  BY h.creation_date DESC;
```
<h4>报错12：只有计划订单可以加紧急</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，常规订单(BILL_TYPE=1)存在URGENCY=2(紧急)的行</li><li><strong>逻辑分析</strong>：仅计划订单(BILL_TYPE=2或14)允许加急，常规订单不允许有紧急行，避免加急订单冲击正常生产排期。校验逻辑读取SA_OUT_BILL_HEAD.BILL_TYPE和SA_OUT_BILL_LINE.URGENCY，常规订单存在紧急行则抛异常。常见根因：用户在常规订单中误标记紧急行、或前端未做订单类型与加急的联动限制。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.bill_type          AS 订单类型,
         l.line_id            AS 行ID,
         l.material_code      AS 样品编码,
         l.urgency            AS 是否紧急
  FROM   sa_out_bill_head h
  JOIN   sa_out_bill_line l ON l.head_id = h.head_id
  WHERE  h.is_makt = 2
  AND    h.bill_type = 1
  AND    l.urgency = 2
  ORDER  BY h.creation_date DESC;
```
<h4>报错13：存在重复下单的产品：&#123;code&#125;</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，同一单据存在MATERIAL_CODE重复的行</li><li><strong>逻辑分析</strong>：同一要货订单不允许存在重复产品行，避免重复下单和金额计算错误。校验逻辑统计SA_OUT_BILL_LINE中MATERIAL_CODE重复的行，重复则抛异常并提示具体产品编码。常见根因：用户重复添加同一产品、或导入文件包含重复产品编码。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         l.material_code      AS 样品编码,
         COUNT(l.line_id)     AS 重复行数
  FROM   sa_out_bill_head h
  JOIN   sa_out_bill_line l ON l.head_id = h.head_id
  WHERE  h.is_makt = 2
  GROUP  BY h.head_id, h.interim_biino, l.material_code
  HAVING COUNT(l.line_id) > 1
  ORDER  BY h.creation_date DESC;
```
<h4>报错14：价格类型为折扣政策的订单，政策id不能为空</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，PRICE_TYPE=2(折扣政策)且DISCOUNT_POLICY_ID为空</li><li><strong>逻辑分析</strong>：价格类型为折扣政策的订单必须关联折扣政策，否则无法计算折扣价格和校验起订量/封顶量。校验逻辑读取PRICE_TYPE和DISCOUNT_POLICY_ID，PRICE_TYPE=2且DISCOUNT_POLICY_ID为空则抛异常。常见根因：用户未选择折扣政策、折扣政策选择后未正确传ID、或前端联动异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.price_type         AS 价格类型,
         h.discount_policy_id AS 折扣政策ID,
         h.order_stat         AS 订单状态
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    h.discount_policy_id IS NULL
  ORDER  BY h.creation_date DESC;
```
<h4>报错15：明细行不能为空</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，preCheckData校验时，SA_OUT_BILL_LINE中该单据的明细行为空</li><li><strong>逻辑分析</strong>：要货订单必须包含至少一行产品明细才能保存，否则订单无意义。校验逻辑查询SA_OUT_BILL_LINE中HEAD_ID对应的行，为空则抛异常。常见根因：用户未添加产品行、产品行被全部删除、或导入失败后误点保存。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.order_stat         AS 订单状态,
         COUNT(l.line_id)     AS 明细行数
  FROM   sa_out_bill_head h
  LEFT   JOIN sa_out_bill_line l ON l.head_id = h.head_id
  WHERE  h.is_makt = 2
  GROUP  BY h.head_id, h.interim_biino, h.order_stat
  HAVING COUNT(l.line_id) = 0;
```
<h4>报错16：您当前的经销合作合同已失效，暂无法正常下单，请联系业务员处理。</h4>
<ul><li><strong>触发条件</strong>：点击"保存"或"保存并提交"按钮，校验经销商合作合同时，关联的经销合同已失效</li><li><strong>逻辑分析</strong>：经销商需有有效合作合同才能下单，合同失效则无法正常下单。校验逻辑查询经销商关联的经销合同状态，已失效则抛异常。常见根因：经销商合同到期未续签、合同被失效处理、或合同数据异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.customer_id        AS 经销商ID,
         h.customer_code      AS 经销商编码,
         c.contract_id        AS 合同ID,
         c.contract_code      AS 合同编码,
         c.valid_stat         AS 合同状态
  FROM   sa_out_bill_head h
  LEFT   JOIN customer_contract c ON c.customer_id = h.customer_id
  WHERE  h.is_makt = 2
  AND    c.valid_stat = 3
  ORDER  BY h.creation_date DESC;
```
<h4>报错17：价目表或者折扣单要货，不需要送签OA，请选择生成crm订单</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验时，PRICE_TYPE=3(价目表)但仍尝试推送OA审批</li><li><strong>逻辑分析</strong>：价目表(priceType=3)或折扣单要货无需OA审批，直接生成CRM订单即可。校验逻辑读取PRICE_TYPE，为3且尝试推送OA则抛异常提示改用生成CRM订单按钮。常见根因：用户误点保存并提交、或前端未根据priceType隐藏保存并提交按钮。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.price_type         AS 价格类型,
         h.hz_approve_status  AS OA审批状态
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.price_type = 3
  AND    h.hz_approve_status = 'NEW'
  ORDER  BY h.creation_date DESC;
```
<h4>报错18：该单据已经审核</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验时，单据HZ_APPROVE_STATUS=APPROVED或ORDER_STAT=5</li><li><strong>逻辑分析</strong>：已审核单据不允许重复提交审批，避免重复推送OA和生成CRM订单。校验逻辑读取HZ_APPROVE_STATUS和ORDER_STAT，已审核则抛异常。常见根因：用户重复点击保存并提交、或前端未做审核状态判断。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.hz_approve_status  AS OA审批状态,
         h.order_stat         AS 订单状态,
         h.sa_salebillno      AS CRM订单号
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    (h.hz_approve_status = 'APPROVED' OR h.order_stat = 5)
  ORDER  BY h.creation_date DESC;
```
<h4>报错19：折扣政策不存在，请联系管理员</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验折扣政策时，按DISCOUNT_POLICY_ID查询DISCOUNT_POLICY返回null</li><li><strong>逻辑分析</strong>：提交时需校验折扣政策存在性，政策不存在则无法享受折扣。校验逻辑查询DISCOUNT_POLICY，返回空则抛异常。常见根因：折扣政策被并发删除、DISCOUNT_POLICY_ID传值错误、或政策从未存在。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.discount_policy_id AS 折扣政策ID,
         h.discount_policy_code AS 折扣政策编码,
         dp.discount_policy_code AS 政策实际编码
  FROM   sa_out_bill_head h
  LEFT   JOIN discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    dp.policy_id IS NULL
  ORDER  BY h.creation_date DESC;
```
<h4>报错20：折扣政策【&#123;code&#125;】已失效，请联系区域经理</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验折扣政策时，DISCOUNT_POLICY.VALID=3(失效)</li><li><strong>逻辑分析</strong>：已失效折扣政策(VALID=3)不允许用于下单，避免享受已失效的折扣。校验逻辑读取DISCOUNT_POLICY.VALID，为3则抛异常并提示联系区域经理。常见根因：折扣政策被失效处理、政策过期被批量失效、或前端政策选择列表未实时刷新。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.discount_policy_id AS 折扣政策ID,
         h.discount_policy_code AS 折扣政策编码,
         dp.valid             AS 政策有效状态
  FROM   sa_out_bill_head h
  JOIN   discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    dp.valid = 3
  ORDER  BY h.creation_date DESC;
```
<h4>报错21：折扣政策【&#123;code&#125;】不在有效期内，请联系区域经理</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验折扣政策时，SYSDATE不在EFFECTIVE_DATE_START和EFFECTIVE_DATE_END区间内</li><li><strong>逻辑分析</strong>：折扣政策有有效期限，当前日期不在有效期内则不允许下单。校验逻辑比对SYSDATE与EFFECTIVE_DATE_START/EFFECTIVE_DATE_END，不在区间内则抛异常。常见根因：折扣政策已过期、政策未到生效日期、或系统时间异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.discount_policy_id AS 折扣政策ID,
         h.discount_policy_code AS 折扣政策编码,
         dp.effective_date_begin AS 政策有效期起,
         dp.effective_date_end   AS 政策有效期至,
         SYSDATE              AS 当前日期
  FROM   sa_out_bill_head h
  JOIN   discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    (SYSDATE < dp.effective_date_begin OR SYSDATE > dp.effective_date_end)
  ORDER  BY h.creation_date DESC;
```
<h4>报错22：流程编码缺失，请选择流程！</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，推送OA前校验流程编码(FlowCode)为空</li><li><strong>逻辑分析</strong>：推送OA审批需指定流程编码，流程编码为空则OA无法匹配审批流程。校验逻辑读取FlowCode，为空则抛异常。常见根因：前端未传FlowCode、流程编码配置缺失、或销售渠道与流程编码映射未配置。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.price_type         AS 价格类型,
         h.channel            AS 销售渠道,
         h.hz_approve_status  AS OA审批状态,
         h.hz_instance_id     AS 流程实例ID,
         CASE WHEN h.channel = 4 THEN 'SAMPLE_ORDER_REQUEST_PROJECT'
              ELSE 'SAMPLE_ORDER_REQUEST_NO_ROJECT' END AS 应流程编码
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    h.hz_instance_id IS NULL
  ORDER  BY h.creation_date DESC;
```
<h4>报错23：地址不存在或数据异常，请点击右上角【同步地址信息】按钮后，重新选择地址!</h4>
<ul><li><strong>触发条件</strong>：点击"保存"按钮，校验收货地址时，TAKE_MAN_ID对应地址记录不存在或数据异常</li><li><strong>逻辑分析</strong>：要货订单需有有效收货地址，地址不存在或数据异常则无法发货。校验逻辑查询CUSTOMER_ADDRESS中TAKE_MAN_ID对应记录，不存在或异常则抛异常并提示同步地址。常见根因：经销商地址档案变更、地址被删除、或地址数据不一致。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.customer_id        AS 经销商ID,
         h.take_man_id        AS 收货地址ID,
         h.take_man           AS 收货人,
         ca.address_id        AS 地址档案ID,
         ca.status            AS 地址状态
  FROM   sa_out_bill_head h
  LEFT   JOIN customer_address ca ON ca.address_id = h.take_man_id
  WHERE  h.is_makt = 2
  AND    (ca.address_id IS NULL OR ca.status <> 'ACTIVE')
  ORDER  BY h.creation_date DESC;
```
<h4>报错24：当前折扣政策已失效，请重新选择！</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，updateActiveQty校验时，折扣政策在提交期间被失效(VALID变为3)</li><li><strong>逻辑分析</strong>：折扣政策在用户编辑期间有效，但提交时被其他用户失效处理，导致政策无法使用。校验逻辑重新读取DISCOUNT_POLICY.VALID，为3则抛异常。常见根因：并发操作导致政策在提交前被失效、或政策过期被批量失效。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.discount_policy_id AS 折扣政策ID,
         h.discount_policy_code AS 折扣政策编码,
         dp.valid             AS 政策当前有效状态,
         dp.hz_approve_status AS 政策审批状态
  FROM   sa_out_bill_head h
  JOIN   discount_policy dp ON dp.policy_id = h.discount_policy_id
  WHERE  h.is_makt = 2
  AND    h.price_type = 2
  AND    dp.valid = 3
  ORDER  BY h.creation_date DESC;
```
<h4>报错25：您当前的要货订单已超有效期，请联系业务员处理。</h4>
<ul><li><strong>触发条件</strong>：点击"保存并提交"按钮，校验时，单据IN_DATE(期望到达日期)超过允许的有效期范围</li><li><strong>逻辑分析</strong>：要货订单有有效期限制，期望到达日期超过有效期则无法正常下单。校验逻辑比对IN_DATE与允许的有效期范围，超过则抛异常。常见根因：用户选择期望到达日期过晚、订单编辑时间过长导致超期、或有效期配置过短。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.in_date            AS 期望到达日期,
         h.date_invbill       AS 订单日期,
         h.effective_date_end AS 政策有效期至,
         h.order_stat         AS 订单状态
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.in_date > h.effective_date_end
  ORDER  BY h.creation_date DESC;
```
<h4>报错26：未查询到业务单据，请检查</h4>
<ul><li><strong>触发条件</strong>：点击"删除"、"生成CRM订单"等操作按钮，按HEAD_ID查询SA_OUT_BILL_HEAD返回null</li><li><strong>逻辑分析</strong>：操作前需查询单据确认存在，单据不存在则无法执行后续操作。校验逻辑查询SA_OUT_BILL_HEAD，返回空则抛异常。常见根因：单据被并发删除、HEAD_ID传值错误、或单据从未存在。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT h.head_id            AS 头表ID,
         h.interim_biino      AS 要货单号,
         h.hz_approve_status  AS OA审批状态,
         h.order_stat         AS 订单状态,
         h.sa_salebillno      AS CRM订单号
  FROM   sa_out_bill_head h
  WHERE  h.is_makt = 2
  AND    h.head_id = #{传入的headId};
```
</KbCard>

<KbCard title="常见问题">
<ul><li>问题1：折扣政策选择弹窗无数据</li><li>原因：当前经销商无可用折扣政策，或折扣政策已过期，或isMakt参数未正确传入</li><li>解决思路：检查经销商是否已选择，检查折扣政策是否在有效期内，检查lovPara中isMakt是否为'2'</li></ul>
<ul><li>问题2：保存并提交按钮不可点击</li><li>原因：priceType=3时保存并提交按钮隐藏，priceType=2时需满足(backEditFlag或新建)条件</li><li>解决思路：priceType=3时使用生成CRM订单按钮，priceType=2时确认编辑状态</li></ul>
<ul><li>问题3：OA审批流程未推送</li><li>原因：流程编码未正确匹配，或OA接口异常，或hzInstanceId未生成</li><li>解决思路：检查渠道是否正确(渠道4→SAMPLE_ORDER_REQUEST_PROJECT，其他→SAMPLE_ORDER_REQUEST_NO_ROJECT)，检查OA接口连通性</li></ul>
<ul><li>问题4：CRM订单生成失败</li><li>原因：businessType映射异常，或CRM接口异常，或单据信息不完整</li><li>解决思路：检查businessType是否为3/12/16，查看INTF_INFO字段获取CRM返回信息，检查单据完整性</li></ul>
<ul><li>问题5：可下单数量未正确扣减</li><li>原因：updateActiveQty未正确执行，或折扣政策产品行不存在</li><li>解决思路：检查DISCOUNT_POLICY_LINE是否存在对应产品行，检查ACTIVE_QTY字段值</li></ul>
<ul><li>问题6：期望到达日期无法选择当月之后</li><li>原因：常规订单(billType=1)25号前仅允许当月，计划订单(billType=2)渠道限制范围</li><li>解决思路：确认订单类型，25号后仅瓷砖产品线可下常规订单，计划订单电商渠道6个月内其他3个月内</li></ul>
<ul><li>问题7：展厅产品安装金额不为0</li><li>原因：customerSubclass=5展厅产品未正确识别</li><li>解决思路：检查CUSTOMER_SUBCLASS字段是否为5，展厅产品强制INSTALL_UNIT_AMT=0、IS_INSTALL=0</li></ul>
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
<tr><td>2026-08-29</td><td>-</td><td>-</td><td>初始版本，按照skill规范模板完整重写样品及长库龄要货订单逻辑梳理文档</td></tr>
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