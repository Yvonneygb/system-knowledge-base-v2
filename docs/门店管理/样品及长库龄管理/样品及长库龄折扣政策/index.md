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
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">定价约束</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">折扣政策规定了产品的最低起订量、封顶量、单价上限等约束条件，门店要货时必须遵守。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#F59E0B,#FBBF24);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H12M12 6L9 3M12 6L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10H4M4 10L7 7M4 10L7 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">数据隔离</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">按事业部隔离，不同事业部维护各自的折扣政策，数据不互通。</p>
        </div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#10B981,#34D399);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div>
          <h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">状态驱动</h5>
          <p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">政策头状态（草稿/生效/失效/作废）驱动行明细的可用性，失效/作废时行信息回显。</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">定义</span>
    <h2>本质 & 具体是什么</h2>
    <p>面向样品及长库龄要货的折扣政策配置，头表 + 行表结构</p>
  </div>
  <div class="biz-2col-inner" style="margin-top:8px;">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">政策头 (DISCOUNT_POLICY_HEAD)</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="padding:8px 10px;background:#F5F3FF;border-radius:8px;font-size:.75rem;">政策编码、名称、事业部、有效起止日期、业务类型、渠道、备注状态</div>
        <div style="padding:8px 10px;background:#F5F3FF;border-radius:8px;font-size:.75rem;">行信息（起订量、封顶量、单价限制等）在折扣政策行明细中维护</div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L8 8L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M2 8L8 12L14 8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">政策行 (DISCOUNT_POLICY_LINE)</h4>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;font-size:.75rem;">品牌、产品一级分类/二级分类、起订量、封顶量、单价限制、是否五金</div>
        <div style="padding:8px 10px;background:#F0FDF4;border-radius:8px;border:1px solid #D1FAE5;font-size:.75rem;">新增行初始化默认值：起订量区段标志显示、最低价/最高价上限</div>
      </div>
    </div>
  </div>
  <div class="kl-tip" style="margin-top:14px;">
    <strong>数据关系：</strong>折扣政策行明细（DISCOUNT_POLICY_LINE）通过 POLICY_ID 关联政策头（DISCOUNT_POLICY_HEAD），政策头 DELETE_FLAG = '0' 表示未删除。
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">流程</span>
    <h2>折扣政策管理流程</h2>
    <p>列表查询 → 新增/编辑 → 维护头信息 → 维护行明细 → 保存/提交</p>
  </div>
  <div class="biz-steps">
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h5>进入列表</h5>
      <small>列表页查询<br>已有折扣政策</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="1" width="10" height="14" rx="1" stroke="white" stroke-width="1.5"/><path d="M6 5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 8H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6 11H8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>新增/编辑</h5>
      <small>新建政策头<br>或编辑已有政策</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#10b981,#059669);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L10 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 5H11C12.1046 5 13 5.89543 13 7V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M10 11H7C5.89543 11 5 10.1046 5 9V8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <h5>维护行明细</h5>
      <small>添加品牌/分类<br>设起订量封顶量</small>
    </div>
    <div class="biz-step-arrow">&rarr;</div>
    <div class="biz-step-item">
      <div class="biz-step-circle" style="background:linear-gradient(135deg,#f59e0b,#d97706);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="14" height="10" rx="1" stroke="white" stroke-width="1.5"/><path d="M1 7H12" stroke="white" stroke-width="1.5"/><circle cx="12" cy="10.5" r="1.5" fill="white"/></svg></div>
      <h5>保存</h5>
      <small>保存政策头+行<br>状态为草稿</small>
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
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">集团运营</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增/编辑折扣政策，维护头信息与行明细，生效/失效/作废管理</td></tr>
        <tr><td style="padding:14px 16px;font-size:.73rem;font-weight:700;color:#111827;">门店要货时引用</td><td style="padding:14px 16px;font-size:.73rem;color:#374151;">在要货订单中选择折扣政策后，自动带入起订量、封顶量等约束信息</td></tr>
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
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 1</span>
    <h2>列表页查询</h2>
  </div>
  <KbQuote>列表页按事业部、政策名称、备注状态等条件查询折扣政策头数据</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>查询 DISCOUNT_POLICY_HEAD 表，filterData 传参 policyName、buCode、remarkStat、entId</li>
    <li>entId 从用户登录信息中获取，用于按事业部隔离</li>
    <li>remarkStat 传空时默认查询全部，传 'DRAFT' / 'EFFECTIVE' / 'INVALID' / 'OBSOLETE' 按备注状态筛选</li>
    <li>列表返回 policyId、policyCode、policyName、buCode、remarkStat、validStart、validEnd、entName 等字段</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 2</span>
    <h2>新增政策头</h2>
  </div>
  <KbQuote>新增时初始化默认值，保存时实体字段映射，完成后刷新列表</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>新增时 policyId 由后端自增生成，前端传空即可</li>
    <li>新增初始化：entId 从登录用户获取，policyCode 由后端编码规则自动生成</li>
    <li>validStart / validEnd 可以预设默认值：validStart = 当前日期，validEnd = 当前日期+1年</li>
    <li>保存时 remarkStat 默认赋 'DRAFT'（草稿）</li>
    <li>保存成功后调用 getList 刷新列表，formVisible = false 关闭弹窗</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 3</span>
    <h2>编辑政策头</h2>
  </div>
  <KbQuote>编辑时回显政策头已保存数据，部分字段在已生效后不可修改</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>编辑时根据 policyId 查询头数据回填到表单</li>
    <li>回填字段：policyName、buCode、validStart、validEnd、businessType、channel、remarkStat</li>
    <li>已生效（remarkStat='EFFECTIVE'）的政策不可编辑业务类型</li>
    <li>编辑保存时不做备注状态变更，保留原状态</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 4</span>
    <h2>行明细管理</h2>
  </div>
  <KbQuote>政策行明细关联头表，新增时初始化默认约束值</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>行明细通过 policyId 关联头表，新增行时传 policyId</li>
    <li>新增行初始化：起订量最小值下限、单价上限等初始默认值</li>
    <li>维护字段：品牌(brand)、一级分类(supCategory)、二级分类(subCategory)、起订量(minOrderQty)、封顶量(capQty)、单价上限(priceCeiling)、是否五金(isHardware)</li>
    <li>编辑已有政策时，行明细在编辑弹窗中按 policyId 查询并展示</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 5</span>
    <h2>备注状态变更</h2>
  </div>
  <KbQuote>政策头支持生效/失效/作废操作，变更后行明细数据状态联动</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>生效：remarkStat 从 'DRAFT' 变更为 'EFFECTIVE'，政策生效</li>
    <li>失效：remarkStat 从 'EFFECTIVE' 变更为 'INVALID'，行明细仍可查看但不可引用</li>
    <li>作废：remarkStat 从任意状态变更为 'OBSOLETE'，政策彻底作废</li>
    <li>失效/作废后，行明细信息在原政策记录中回显，不删除</li>
  </ul>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">关键逻辑 6</span>
    <h2>删除政策</h2>
  </div>
  <KbQuote>仅在草稿状态可删除，删除后不可恢复</KbQuote>
  <strong>具体逻辑：</strong>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>删除按钮仅在 remarkStat='DRAFT' 时展示</li>
    <li>删除前弹出二次确认提示</li>
    <li>确认后调用 DELETE 接口，DELETE_FLAG = '0' 标记已删除</li>
    <li>删除成功后刷新列表</li>
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
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 1</span>
    <h2>列表页</h2>
  </div>
  <KbQuote>列表页展示折扣政策列表，支持按条件查询</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:14%"><col style="width:9%"><col style="width:16%"><col style="width:12%"><col style="width:18%"><col style="width:14%"><col style="width:17%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">输入框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查询条件，按政策名称模糊搜索</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">用户输入后，filterData.policyName 传参</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">按政策状态筛选：全部/草稿/生效/失效/作废</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">filterData.remarkStat 传参，空值查询全部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DRAFT / EFFECTIVE / INVALID / OBSOLETE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">按事业部查询</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">filterData.entId 传参</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">查询</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">按钮</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">执行查询</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">组装 filterData 参数调用 getList</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">重置</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">按钮</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">重置查询条件</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">清空 filterData 所有字段</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 2</span>
    <h2>列表页表格列</h2>
  </div>
  <KbQuote>列表表格展示政策头主要字段</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:11%"><col style="width:9%"><col style="width:14%"><col style="width:12%"><col style="width:18%"><col style="width:18%"><col style="width:18%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动生成</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增时后端编码规则自动生成</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">POLICY_CODE</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称，可编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑时回填 form.policyName</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">POLICY_NAME</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所属事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">entId 关联 entName</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ENT_ID</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效起</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策生效开始日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回显 validStart</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VALID_START</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效止</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策生效结束日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回显 validEnd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VALID_END</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">标签</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策当前状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat 翻译为中文展示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DRAFT/EFFECTIVE/INVALID/OBSOLETE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REMARK_STAT</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">操作</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">按钮组</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑/删除/查看行明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">草稿可编辑删除，其他状态仅查看</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">详见按钮组区域</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 3</span>
    <h2>新增/编辑弹窗</h2>
  </div>
  <KbQuote>新增或编辑政策头时弹出表单弹窗</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:11%"><col style="width:9%"><col style="width:16%"><col style="width:12%"><col style="width:22%"><col style="width:12%"><col style="width:18%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">输入框</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增：用户输入；编辑：回填已有值</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">必填</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">POLICY_NAME</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">系统自动生成，不可编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑回填 policyCode，新增时不显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">POLICY_CODE</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">所属事业部</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增显示，编辑禁用</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增：从用户登录信息中填充</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">事业部列表</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">ENT_ID</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效起</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">日期选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策生效起始日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增默认当天；编辑回填 validStart</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VALID_START</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效止</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">日期选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策生效结束日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增默认当天+1年；编辑回填 validEnd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">yyyy-MM-dd</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">VALID_END</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">业务类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">要货业务类型</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑：remarkStat='EFFECTIVE'时禁用</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">3样品/12家装样品/16长库龄</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BUSINESS_TYPE</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">渠道</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">销售渠道</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉列表从渠道字典获取</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">渠道字典</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CHANNEL</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">备注状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">文本</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策当前状态</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">回填 remarkStat，新增不显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">DRAFT/EFFECTIVE/INVALID/OBSOLETE</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">REMARK_STAT</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">界面模块 4</span>
    <h2>行明细管理弹窗</h2>
  </div>
  <KbQuote>管理折扣政策的行明细，按品牌/分类设置起订量、封顶量、单价限制</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:11%"><col style="width:9%"><col style="width:16%"><col style="width:10%"><col style="width:22%"><col style="width:14%"><col style="width:18%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">字段名</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">组件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">取值/赋值逻辑</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">合法值</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">数据库列名</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">品牌</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品品牌</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从品牌字典获取</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">品牌编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">BRAND</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品一级分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品一级分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从分类字典获取</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">分类编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SUP_CATEGORY</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">产品二级分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">下拉选择</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">产品二级分类</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">从分类字典获取</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">分类编码</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">SUB_CATEGORY</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">起订量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数字输入</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">最小下单数量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增行时填入默认最小值下限</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">正整数</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">MIN_ORDER_QTY</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">封顶量</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数字输入</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">最大下单数量上限</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增行时填入默认上限值</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">正整数</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">CAP_QTY</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">单价限制</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">数字输入</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">单价上限限制</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新增行时填入默认最高价上限</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">正数</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">PRICE_CEILING</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">是否五金</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开关</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">是否五金品类产品</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">开关值 Y/N</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">Y/N</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">IS_HARDWARE</td></tr>
</tbody>
</table>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr" style="text-align:left;">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);">按钮组</span>
    <h2>操作按钮</h2>
  </div>
  <KbQuote>列表页和弹窗中的操作按钮</KbQuote>
  <div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
    <div class="kb-field-scroll">
<table class="kb-field-tbl" style="table-layout:fixed;min-width:960px;width:100%;border-collapse:collapse;margin:0;">
<colgroup><col style="width:12%"><col style="width:10%"><col style="width:16%"><col style="width:18%"><col style="width:44%"></colgroup>
<thead><tr><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">按钮</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">位置</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">业务释义</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">显隐条件</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">点击逻辑</th></tr></thead>
<tbody>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">新增</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表页</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">新建折扣政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">打开新增弹窗，初始化默认值</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑已有政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat='DRAFT' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">打开编辑弹窗，回填已有数据</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">查看</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">查看政策详情</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat!='DRAFT' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">打开只读视图查看政策详情</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除草稿政策</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat='DRAFT' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">二次确认后调用 DELETE，DELETE_FLAG='0'</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">生效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">将草稿政策生效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat='DRAFT' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">更新 remarkStat='EFFECTIVE'</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">失效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">将生效政策失效</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat='EFFECTIVE' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">更新 remarkStat='INVALID'</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">作废</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">将政策作废</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat!='OBSOLETE' 时显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">更新 remarkStat='OBSOLETE'</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">行明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">列表行</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">管理政策行明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">打开行明细管理弹窗</td></tr>
<tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">头弹窗</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存政策头数据</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">始终显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">校验必填后调用 SAVE，成功后刷新列表关闭弹窗</td></tr>
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
    <p>删除按钮和状态变更按钮按角色显隐</p>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:.78rem;color:#374151;line-height:1.9;">
    <li>删除按钮：仅 remarkStat='DRAFT' 且角色有 'AE20250907' 权限时显示</li>
    <li>生效/失效/作废按钮：仅在对应 remarkStat 状态下显示，无需额外角色</li>
    <li>编辑按钮：仅 remarkStat='DRAFT' 时显示</li>
    <li>查看按钮：remarkStat!='DRAFT' 时显示，替代编辑按钮</li>
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
    <p>保存/删除环节的典型报错与排查逻辑（点"查看"展开详细逻辑）</p>
  </div>
<div style="overflow-x:auto;border-radius:12px;border:1px solid #E8ECF0;background:#fff;">
  <table class="kl-table" style="margin:0;width:100%;border-collapse:collapse;">
    <thead><tr style="background:linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%);"><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">报错信息</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">提示节点</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">根因与解决方案</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:left;white-space:nowrap;border-bottom:2px solid #E8ECF0;">等级</th><th style="padding:9px 11px;font-size:.72rem;font-weight:800;color:#5B21B6;text-align:center;white-space:nowrap;border-bottom:2px solid #E8ECF0;">详细逻辑</th></tr></thead>
    <tbody>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策名称不能为空</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策名称为必填项，填写后保存</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">政策编码已存在</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">政策编码需唯一不重复，联系管理员确认</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">有效期起不能晚于有效期止</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">保存校验</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">validStart 必须早于 validEnd，调整日期</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">生效政策不可编辑</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">编辑操作</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">remarkStat='EFFECTIVE' 时编辑按钮不显示</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
        <tr><td style="padding:9px 11px;font-size:.72rem;font-weight:700;color:#111827;border-bottom:1px solid #E8ECF0;">该政策下存在行明细，禁止删除</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除操作</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;">删除前需先删除所有行明细</td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><span style="background:#FEF2F2;color:#DC2626;padding:2px 8px;border-radius:3px;font-weight:600;font-size:12px;">高</span></td><td style="padding:9px 11px;font-size:.72rem;color:#374151;border-bottom:1px solid #E8ECF0;text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
    </tbody>
  </table>
</div>
</div>

<div id="err-detail-1" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>政策名称不能为空</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre>（该报错的详细逻辑细则待补充；以下为表格中"根因与解决方案"供参考：）政策名称为必填项，填写后保存</div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>
<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>政策编码已存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre>（该报错的详细逻辑细则待补充；以下为表格中"根因与解决方案"供参考：）政策编码需唯一不重复，联系管理员确认</div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>
<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>有效期起不能晚于有效期止</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre>（该报错的详细逻辑细则待补充；以下为表格中"根因与解决方案"供参考：）validStart 必须早于 validEnd，调整日期</div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>
<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>生效政策不可编辑</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre>（该报错的详细逻辑细则待补充；以下为表格中"根因与解决方案"供参考：）remarkStat='EFFECTIVE' 时编辑按钮不显示</div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>
<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>该政策下存在行明细，禁止删除</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre>（该报错的详细逻辑细则待补充；以下为表格中"根因与解决方案"供参考：）删除前需先删除所有行明细</div>
    <div class="detail-tip" v-pre>等级：高</div>
  </div>
</div>

</div>
</div>
</div><div id="changelog" style="display:none;">
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
        <tr><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">2026-08-31</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;border-bottom:1px solid #E8ECF0;">-</td><td style="padding:10px 12px;font-size:.73rem;color:#374151;">按最新逻辑梳理MD重写：遵循知识库样式规范，BreadcrumbTabs + biz-intro/biz-flow/key-logic/detail-logic/permission/faq/changelog 区块</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>
</div>