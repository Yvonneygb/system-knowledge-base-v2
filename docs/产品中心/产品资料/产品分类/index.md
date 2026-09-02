<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>产品分类维护什么</h2>
    <p>构建多级产品分类体系，作为产品归并与检索的基础数据</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"/><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">树形结构</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">支持多级层级与同编码唯一</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>分类编码</strong> — 组织内唯一，作为关联主键</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>父级关系</strong> — 子分类挂靠上级，形成树状层级</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>排序号</strong> — 控制同级分类的展示顺序</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="white" stroke-width="1.5"/><path d="M8 5v3l2 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">状态与描述</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">控制可用性与补充说明</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>启用标志</strong> — Y/N 控制分类是否可用</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>分类名称</strong> — 业务展示用的可读名称</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>分类描述</strong> — 补充说明分类用途与范围</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>分类数据被谁引用</h2>
    <p>分类是产品体系的基础，被多个产品相关页面与前端复用</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"/><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"/><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">产品列表</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">产品按分类归并，列表与筛选均依赖分类。</p></div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2v12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">产品搜索</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">按分类检索产品，提升前端查找效率。</p></div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5 5h6M5 8h6M5 11h4" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">CRM展示</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">嵌入CRM详情页，作为前端分类选择器来源。</p></div>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
<h4 class="bf-main-title">产品分类 — 全链路流程图</h4>
<p class="bf-main-sub">开始 → ★维护产品分类★(新增/编辑/删除/移动节点) → 保存生效 → 结束（嵌入CRM产品详情页，无审批）</p>
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
<rect x="386" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">产品主档</text>
<rect x="496" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="545" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">组织/权限</text>
<rect x="606" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="655" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">编码规则</text>
<rect x="716" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="765" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM详情页</text>
<line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
<rect x="545" y="150" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
<line x1="600" y1="194" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="500" y="220" width="200" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
<text x="600" y="244" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★维护产品分类★</text>
<text x="600" y="263" text-anchor="middle" fill="#DCFCE7" font-size="10">新增/编辑/删除/移动节点·保存</text>
<line x1="600" y1="274" x2="600" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="545" y="300" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="325" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
<line x1="600" y1="340" x2="600" y2="380" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
<rect x="50" y="380" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="600" y="402" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
<rect x="270" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="345" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">产品列表(分类)</text>
<rect x="440" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="515" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">产品详情页</text>
<rect x="610" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="685" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">产品搜索</text>
<rect x="780" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="855" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">CRM展示</text>
</svg>
</div>
<div class="bf-fc-legend">
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束</span>
<span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑服务</span>
</div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：分类编码自动生成 `编码规则`">
<ul><li><strong>业务意义</strong>：分类编码自动生成，保证同级分类编码唯一且有规律</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：大类（itemClassLevel=1）按组织ID+分类级别统计现有数量</li></ul>
<ul><li>第2点：中类/小类按组织ID+分类级别+父级ID统计现有数量</li></ul>
<ul><li>第3点：编码 = "000" + (count+1)，取后3位字符（如001、002、...、999）</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：树形结构与父子关系 `层级管理`">
<ul><li><strong>业务意义</strong>：支持三级分类（大类→中类→小类），形成树状层级结构</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：分类级别itemClassLevel：1大类、2中类、3小类</li></ul>
<ul><li>第2点：新增子分类时，父分类的isEnd更新为1（否，表示非明细节点）</li></ul>
<ul><li>第3点：新增的分类isEnd默认为2（是，表示明细节点）</li></ul>
<ul><li>第4点：物料分类路径itemClassIdpath格式：\&#123;分类ID&#125;\</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：新增前重复校验 `数据唯一性`">
<ul><li><strong>业务意义</strong>：同一组织下、同一父级下，分类编码不能重复</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：新增时先按"编码+组织ID+父级ID"查询是否已存在</li></ul>
<ul><li>第2点：若已存在则不执行新增（静默跳过，不报错）</li></ul>
<ul><li>第3点：若不存在则设置isEnd=2、生成itemClassIdpath后插入</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：分类树查询页">
<blockquote>低代码页面（hlod），无独立前端源码，字段基于后端Entity ItemClass梳理。本菜单作为嵌入式组件嵌入CRM产品详情页使用</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>分类ID</td><td>ITEM_CLASS.ITEM_CLASS_ID</td><td>隐藏</td><td>分类主键</td><td>隐藏</td><td>序列ITEM_CLASS_S自动生成</td></tr>
<tr><td>分类编码</td><td>ITEM_CLASS.ITEM_CLASS_CODE</td><td>文本框</td><td>分类编码（同级唯一）</td><td>常显</td><td>自动生成：000+(count+1)取后3位</td></tr>
<tr><td>分类名称</td><td>ITEM_CLASS.ITEM_CLASS_NAME</td><td>文本框</td><td>分类显示名称</td><td>常显</td><td>用户输入</td></tr>
<tr><td>分类级别</td><td>ITEM_CLASS.ITEM_CLASS_LEVEL</td><td>下拉选择框</td><td>分类级别</td><td>常显</td><td>1大类/2中类/3小类</td></tr>
<tr><td>父级分类ID</td><td>ITEM_CLASS.ITEM_CLASS_PID</td><td>隐藏</td><td>上级分类ID</td><td>隐藏</td><td>新增时选择父级分类；顶级为空</td></tr>
<tr><td>物料分类路径</td><td>ITEM_CLASS.ITEM_CLASS_IDPATH</td><td>隐藏</td><td>分类路径</td><td>隐藏</td><td>格式：\&#123;分类ID&#125;\</td></tr>
<tr><td>路径</td><td>ITEM_CLASS.IDPATH</td><td>隐藏</td><td>路径</td><td>隐藏</td><td>默认"\"</td></tr>
<tr><td>是否明细</td><td>ITEM_CLASS.IS_END</td><td>下拉选择框</td><td>是否明细节点</td><td>常显</td><td>1否（有子节点）/2是（叶子节点）；必填</td></tr>
<tr><td>是否有效</td><td>ITEM_CLASS.ITEM_USABLE</td><td>下拉选择框</td><td>是否有效</td><td>常显</td><td>1否/2是；必填；新增默认2</td></tr>
<tr><td>备注</td><td>ITEM_CLASS.REMARK</td><td>文本域</td><td>备注</td><td>常显</td><td>-</td></tr>
<tr><td>是否零售</td><td>ITEM_CLASS.IS_RETAIL</td><td>下拉选择框</td><td>是否零售</td><td>常显</td><td>1否/2是</td></tr>
<tr><td>组织ID</td><td>ITEM_CLASS.ORGANIZATION_ID</td><td>隐藏</td><td>组织ID</td><td>隐藏</td><td>当前用户组织ID</td></tr>
<tr><td>是否初始化</td><td>ITEM_CLASS.IS_INIT</td><td>隐藏</td><td>是否初始化产生</td><td>隐藏</td><td>2表示用户新增（非初始化）；必填</td></tr>
</tbody>
</table>
<p><strong>列表查询SQL（Mapper: ItemClassMapper.selectList）：</strong></p>

```sql
SELECT
    IC.ITEM_CLASS_ID, IC.ITEM_CLASS_CODE, IC.ITEM_CLASS_NAME, IC.ITEM_CLASS_LEVEL,
    IC.ITEM_ID, IC.ITEM_CLASS_PID, IC.ITEM_CLASS_IDPATH, IC.IDPATH,
    IC.IS_END, IC.ITEM_USABLE, IC.REMARK, IC.ATTRIBUTE11, IC.ATTRIBUTE21,
    IC.ATTRIBUTE31, IC.ATTRIBUTE41, IC.ATTRIBUTE51, IC.CRM_ENTID, IC.ITEM_TYPE_ID,
    IC.IS_MIS_CRM, IC.ORGANIZATION_ID, IC.IS_RETAIL, IC.RESOURCE_ENTORGID,
    IC.DEPT_ID, IC.IS_INIT,
    IC.CREATION_DATE, IC.CREATED_BY, IC.LAST_UPDATED_BY, IC.LAST_UPDATE_DATE,
    IC.OBJECT_VERSION_NUMBER
FROM ITEM_CLASS IC
WHERE 1=1
  AND IC.ORGANIZATION_ID = #{organizationId}
  -- 动态条件：itemClassCode、itemClassName、itemClassLevel、itemClassPid等
```
</KbCard>

<KbCard title="界面模块2：新增分类表单">
<blockquote>低代码页面（hlod），字段基于ProductCategoryDTO梳理</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>分类编码</td><td>ITEM_CLASS.ITEM_CLASS_CODE</td><td>文本框</td><td>分类编码</td><td>常显</td><td>自动生成；新增前用于重复校验</td></tr>
<tr><td>分类名称</td><td>ITEM_CLASS.ITEM_CLASS_NAME</td><td>文本框</td><td>分类名称</td><td>常显</td><td>用户输入</td></tr>
<tr><td>分类级别</td><td>ITEM_CLASS.ITEM_CLASS_LEVEL</td><td>下拉选择框</td><td>分类级别</td><td>常显</td><td>1大类/2中类/3小类</td></tr>
<tr><td>父级ID</td><td>ITEM_CLASS.ITEM_CLASS_PID</td><td>隐藏</td><td>父级分类ID</td><td>隐藏</td><td>选择父级分类时带出；大类为空</td></tr>
<tr><td>是否有效</td><td>ITEM_CLASS.ITEM_USABLE</td><td>下拉选择框</td><td>是否有效</td><td>常显</td><td>1否/2是</td></tr>
<tr><td>组织ID</td><td>ITEM_CLASS.ORGANIZATION_ID</td><td>隐藏</td><td>组织ID</td><td>隐藏</td><td>当前用户组织ID</td></tr>
<tr><td>是否明细</td><td>ITEM_CLASS.IS_END</td><td>隐藏</td><td>是否明细</td><td>隐藏</td><td>新增时自动设置为2（是）</td></tr>
<tr><td>物料分类路径</td><td>ITEM_CLASS.ITEM_CLASS_IDPATH</td><td>隐藏</td><td>分类路径</td><td>隐藏</td><td>自动生成：\&#123;分类ID&#125;\</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<blockquote>本菜单无LOV选择弹窗。产品分类使用四级级联值集 CRM.PRODUCT_CLASS（SQL值集）在其他菜单中选择产品分类。</blockquote>
</KbCard>

<KbCard title="导入">
<blockquote>本菜单不支持导入功能。</blockquote>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>新增</td><td>新增产品分类</td><td>分类树页面</td><td>常显</td><td>调用save-item-class接口新增分类</td></tr>
<tr><td>删除</td><td>删除产品分类</td><td>分类树页面</td><td>常显</td><td>调用deleta-item-class接口物理删除分类</td></tr>
</tbody>
</table>
<h4>按钮1：新增（分类树页面）</h4>
<ul><li><strong>触发条件</strong>：常显</li><li><strong>执行逻辑</strong>：</li><li>第1点：填写分类名称、选择父级分类和分类级别</li><li>第2点：按"编码+组织ID+父级ID"查询是否已存在（getItemClass）</li><li>第3点：若已存在则静默跳过，不执行新增</li><li>第4点：若不存在，设置isEnd=2、生成itemClassIdpath=\&#123;分类ID&#125;\</li><li>第5点：插入ITEM_CLASS表（序列ITEM_CLASS_S.NEXTVAL生成主键）</li><li>第6点：更新父分类isEnd=1（否，表示有子节点）</li><li>第7点：同步插入ITEM_CLASS_IO表（组织ID+分类ID）</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/manual-classification/save-item-class</li><li><strong>排查SQL</strong>：</li></ul>

```sql
-- 新增前重复校验
SELECT ITEM_CLASS_ID, ITEM_CLASS_CODE, ITEM_CLASS_NAME, ITEM_CLASS_LEVEL, ITEM_USABLE
FROM ITEM_CLASS
WHERE ITEM_CLASS_CODE = #{itemClassCode}
  AND ORGANIZATION_ID = #{organizationId}
  AND ITEM_CLASS_PID = #{itemClassPid};

-- 新增SQL
INSERT INTO ITEM_CLASS (
    ITEM_CLASS_ID, ITEM_CLASS_CODE, ITEM_CLASS_NAME, ITEM_CLASS_LEVEL,
    ITEM_ID, ITEM_CLASS_PID, IDPATH, IS_END, ITEM_USABLE, REMARK,
    CREATED_BY, LAST_UPDATED_BY, ORGANIZATION_ID, IS_RETAIL,
    RESOURCE_ENTORGID, DEPT_ID, IS_INIT, ITEM_CLASS_IDPATH
) VALUES (
    ITEM_CLASS_S.NEXTVAL, #{itemClassCode}, #{itemClassName}, #{itemClassLevel},
    0, #{itemClassPid}, '\', #{isEnd}, #{itemUsable}, NULL,
    'admin', 'admin', #{organizationId}, 0, 0, 0, 0, #{itemClassIdPath}
);

-- 更新父分类是否明细
UPDATE ITEM_CLASS SET IS_END = 1 WHERE ITEM_CLASS_ID = #{itemClassPid};
```
<h4>按钮2：删除（分类树页面）</h4>
<ul><li><strong>触发条件</strong>：常显</li><li><strong>执行逻辑</strong>：</li><li>第1点：根据分类ID直接物理删除ITEM_CLASS记录</li><li>第2点：无子分类校验、无引用校验（直接删除）</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/manual-classification/deleta-item-class</li><li><strong>排查SQL</strong>：</li></ul>

```sql
-- 删除前检查子分类
SELECT * FROM ITEM_CLASS WHERE ITEM_CLASS_PID = #{itemClassId};
-- 删除SQL
DELETE FROM ITEM_CLASS WHERE ITEM_CLASS_ID = #{itemClassId};
```
</KbCard>

<KbCard title="保存校验">
<p><strong>校验1：</strong>分类编码+组织ID+父级ID不重复 —— 同一组织、同一父级下分类编码唯一</p>
<p><strong>详细逻辑</strong></p>
<ul><li>第1点：新增前按itemClassCode + organizationId + itemClassPid查询ITEM_CLASS表</li><li>第2点：若查询结果不为空，则不执行新增（静默跳过）</li></ul>
<p><strong>系统体现：</strong>静默跳过（不报错，不插入）</p>
<p><strong>排查SQL</strong></p>

```sql
SELECT COUNT(*) FROM ITEM_CLASS
    WHERE ITEM_CLASS_CODE = #{itemClassCode}
      AND ORGANIZATION_ID = #{organizationId}
      AND ITEM_CLASS_PID = #{itemClassPid};
```
</KbCard>

<KbCard title="提交校验">
<blockquote>本菜单无提交/审批功能，数据直接保存生效。</blockquote>
</KbCard>

<KbCard title="状态机">
<blockquote>本菜单无状态机，分类数据只有"有效/无效"两种状态，通过ITEM_USABLE字段控制。</blockquote>
<h4>状态机流转图</h4>

```text
┌─────────┐  新增   ┌──────────┐
│  无     │ ──────→ │ 有效(2)  │
└─────────┘         └──────────┘
                         │
                         │ 设置无效
                         ▼
                    ┌──────────┐
                    │ 无效(1)  │
                    └──────────┘
                         │
                         │ 设置有效
                         ▼
                    ┌──────────┐
                    │ 有效(2)  │
                    └──────────┘
```
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>有效（ITEM_USABLE=2）</td><td>分类可用，可被产品引用</td><td>编辑、删除、设置无效</td></tr>
<tr><td>无效（ITEM_USABLE=1）</td><td>分类不可用，不可被新产品引用</td><td>编辑、删除、设置有效</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：ITEM_CLASS（产品分类表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ITEM_CLASS_ID</td><td>NUMBER</td><td>主键ID</td><td>-</td><td>序列ITEM_CLASS_S自动生成</td></tr>
<tr><td>ITEM_CLASS_CODE</td><td>VARCHAR2</td><td>分类编码</td><td>分类编码</td><td>自动生成：000+(count+1)取后3位；同级唯一</td></tr>
<tr><td>ITEM_CLASS_NAME</td><td>VARCHAR2</td><td>分类名称</td><td>分类名称</td><td>用户输入</td></tr>
<tr><td>ITEM_CLASS_LEVEL</td><td>NUMBER</td><td>分类级别</td><td>分类级别</td><td>1大类/2中类/3小类</td></tr>
<tr><td>ITEM_ID</td><td>NUMBER</td><td>代表物料ID</td><td>-</td><td>关联ITEM表，新增时默认0</td></tr>
<tr><td>ITEM_CLASS_PID</td><td>NUMBER</td><td>父级分类ID</td><td>-</td><td>顶级为空；子分类挂靠上级</td></tr>
<tr><td>ITEM_CLASS_IDPATH</td><td>VARCHAR2</td><td>物料分类路径</td><td>-</td><td>格式：\&#123;分类ID&#125;\</td></tr>
<tr><td>IDPATH</td><td>VARCHAR2</td><td>路径</td><td>-</td><td>默认"\"</td></tr>
<tr><td>IS_END</td><td>NUMBER</td><td>是否明细</td><td>是否明细</td><td>1否（有子节点）/2是（叶子节点）；必填；新增默认2</td></tr>
<tr><td>ITEM_USABLE</td><td>NUMBER</td><td>是否有效</td><td>是否有效</td><td>1否/2是；必填；新增默认2</td></tr>
<tr><td>REMARK</td><td>VARCHAR2</td><td>备注</td><td>备注</td><td>-</td></tr>
<tr><td>ATTRIBUTE11</td><td>VARCHAR2</td><td>备用字段1</td><td>-</td><td>-</td></tr>
<tr><td>ATTRIBUTE21</td><td>VARCHAR2</td><td>备用字段2</td><td>-</td><td>-</td></tr>
<tr><td>ATTRIBUTE31</td><td>VARCHAR2</td><td>备用字段3</td><td>-</td><td>-</td></tr>
<tr><td>ATTRIBUTE41</td><td>NUMBER</td><td>备用字段4</td><td>-</td><td>-</td></tr>
<tr><td>ATTRIBUTE51</td><td>NUMBER</td><td>备用字段5</td><td>-</td><td>-</td></tr>
<tr><td>CRM_ENTID</td><td>NUMBER</td><td>CRM的entid</td><td>-</td><td>-</td></tr>
<tr><td>ITEM_TYPE_ID</td><td>NUMBER</td><td>CRM类别ID</td><td>-</td><td>-</td></tr>
<tr><td>IS_MIS_CRM</td><td>NUMBER</td><td>数据来源</td><td>-</td><td>1=MIS，2=CRM引入</td></tr>
<tr><td>ORGANIZATION_ID</td><td>NUMBER</td><td>组织ID</td><td>-</td><td>当前用户组织ID</td></tr>
<tr><td>IS_RETAIL</td><td>NUMBER</td><td>是否零售</td><td>是否零售</td><td>1否/2是</td></tr>
<tr><td>RESOURCE_ENTORGID</td><td>NUMBER</td><td>资源产品组织</td><td>-</td><td>-</td></tr>
<tr><td>DEPT_ID</td><td>NUMBER</td><td>资源部门</td><td>-</td><td>-</td></tr>
<tr><td>IS_INIT</td><td>NUMBER</td><td>是否初始化产生</td><td>-</td><td>2=用户新增；必填</td></tr>
<tr><td>CREATED_BY</td><td>NUMBER</td><td>创建人</td><td>-</td><td>框架自动填充</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>-</td><td>框架自动填充</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>NUMBER</td><td>最后更新人</td><td>-</td><td>框架自动填充</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>-</td><td>框架自动填充</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>版本号</td><td>-</td><td>乐观锁，框架自动填充</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="相关表：ITEM_CLASS_IO（产品分类组织关联表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ITEM_CLASS_ID</td><td>NUMBER</td><td>分类ID</td><td>-</td><td>FK→ITEM_CLASS.ITEM_CLASS_ID</td></tr>
<tr><td>ORGANIZATION_ID</td><td>NUMBER</td><td>组织ID</td><td>-</td><td>新增分类时同步插入</td></tr>
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
<tr><td>产品分类新增成功</td><td>新增成功</td><td>正常提示</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>产品分类删除成功</td><td>删除成功</td><td>正常提示</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>分类编码已存在，新增静默跳过</td><td>新增时</td><td>编码+组织ID+父级ID已存在，后端不报错不插入，前端显示成功但实际未新增</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>删除父分类产生孤儿节点</td><td>删除时</td><td>删除有子分类的父分类后，子分类ITEM_CLASS_PID指向不存在的记录</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>分类树查询失败</td><td>查询时</td><td>查询ITEM_CLASS表异常，检查组织ID参数和数据库连接</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>权限不足，无法操作分类</td><td>新增/删除时</td><td>用户未登录或无当前组织ID的访问权限</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>会话过期，请重新登录</td><td>任意操作时</td><td>登录态丢失，需重新登录获取token</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>暂无分类数据</td><td>查询时</td><td>当前组织下无分类数据，需先新增分类</td><td>toast提醒</td><td>[查看]</td></tr>
</tbody>
</table>
<h4>报错1：产品分类新增成功</h4>
<ul><li><strong>触发条件</strong>：新增分类保存成功后，前端toast提示</li><li><strong>逻辑分析</strong>：后端saveItemClass方法按"编码+组织ID+父级ID"查询ITEM_CLASS表，若已存在则静默跳过；若不存在则插入新记录（ITEM_CLASS_S.NEXTVAL生成主键），并更新父分类IS_END=1。前端根据接口返回成功标识显示toast。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT IC.ITEM_CLASS_ID AS 分类ID, IC.ITEM_CLASS_CODE AS 分类编码,
         IC.ITEM_CLASS_NAME AS 分类名称, IC.ITEM_CLASS_LEVEL AS 分类级别,
         IC.ITEM_CLASS_PID AS 父级ID, IC.IS_END AS 是否明细,
         IC.CREATION_DATE AS 创建时间
  FROM ITEM_CLASS IC
  WHERE IC.ITEM_CLASS_CODE = :itemClassCode
    AND IC.ORGANIZATION_ID = :organizationId
    AND IC.ITEM_CLASS_PID = :itemClassPid
  ORDER BY IC.CREATION_DATE DESC;
```
<h4>报错2：产品分类删除成功</h4>
<ul><li><strong>触发条件</strong>：删除分类成功后，前端toast提示</li><li><strong>逻辑分析</strong>：后端deletaItemClass方法根据ITEM_CLASS_ID直接物理删除ITEM_CLASS记录，无子分类校验、无引用校验。删除成功后前端toast提示并刷新分类树。注意：若父分类被删除，子分类的ITEM_CLASS_PID将指向不存在的记录（孤儿节点）。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
-- 删除前检查是否存在子分类（避免孤儿节点）
  SELECT IC.ITEM_CLASS_ID AS 子分类ID, IC.ITEM_CLASS_CODE AS 子分类编码,
         IC.ITEM_CLASS_NAME AS 子分类名称
  FROM ITEM_CLASS IC
  WHERE IC.ITEM_CLASS_PID = :itemClassId;
  -- 删除后确认记录已不存在
  SELECT COUNT(1) AS 剩余记录数 FROM ITEM_CLASS WHERE ITEM_CLASS_ID = :itemClassId;
```
<h4>报错3：分类编码已存在，新增静默跳过</h4>
<ul><li><strong>触发条件</strong>：新增分类时，编码+组织ID+父级ID在ITEM_CLASS表已存在</li><li><strong>逻辑分析</strong>：后端ManualClassificationServiceImpl.saveItemClass方法中，先通过manualClassificationMapper.getItemClass(dto)按"编码+组织ID+父级ID"查询ITEM_CLASS表。若查询结果不为空（CollectionUtils.isEmpty(list)为false），则不执行新增逻辑，直接返回。Controller层统一返回"产品分类新增成功"，前端显示成功提示但实际未新增数据。用户需检查ITEM_CLASS表确认是否已存在相同编码的分类。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT IC.ITEM_CLASS_ID AS 分类ID, IC.ITEM_CLASS_CODE AS 分类编码,
         IC.ITEM_CLASS_NAME AS 分类名称, IC.ITEM_CLASS_LEVEL AS 分类级别,
         IC.ITEM_CLASS_PID AS 父级ID, IC.ORGANIZATION_ID AS 组织ID,
         IC.CREATION_DATE AS 创建时间, IC.CREATED_BY AS 创建人
  FROM ITEM_CLASS IC
  WHERE IC.ITEM_CLASS_CODE = :itemClassCode
    AND IC.ORGANIZATION_ID = :organizationId
    AND IC.ITEM_CLASS_PID = :itemClassPid
  ORDER BY IC.CREATION_DATE DESC;
```
<h4>报错4：删除父分类产生孤儿节点</h4>
<ul><li><strong>触发条件</strong>：删除有子分类的父分类时，后端直接物理删除不校验子分类</li><li><strong>逻辑分析</strong>：后端ManualClassificationServiceImpl.deletaItemClass方法根据ITEM_CLASS_ID直接物理删除ITEM_CLASS记录，无子分类校验、无引用校验。若被删除的分类有子分类（ITEM_CLASS_PID指向被删除的分类ID），子分类将变成孤儿节点，查询分类树时无法挂载到父节点下。建议删除前先检查子分类，若有子分类应先删除所有子分类再删除父分类。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
-- 删除前检查是否存在子分类
  SELECT IC.ITEM_CLASS_ID AS 子分类ID, IC.ITEM_CLASS_CODE AS 子分类编码,
         IC.ITEM_CLASS_NAME AS 子分类名称, IC.ITEM_CLASS_LEVEL AS 子分类级别
  FROM ITEM_CLASS IC
  WHERE IC.ITEM_CLASS_PID = :itemClassId
    AND IC.ORGANIZATION_ID = :organizationId;
  -- 检查是否存在孤儿节点（ITEM_CLASS_PID指向不存在的记录）
  SELECT IC.ITEM_CLASS_ID AS 孤儿分类ID, IC.ITEM_CLASS_CODE AS 分类编码,
         IC.ITEM_CLASS_NAME AS 分类名称, IC.ITEM_CLASS_PID AS 指向的父级ID
  FROM ITEM_CLASS IC
  WHERE IC.ORGANIZATION_ID = :organizationId
    AND IC.ITEM_CLASS_PID IS NOT NULL
    AND NOT EXISTS (
      SELECT 1 FROM ITEM_CLASS P WHERE P.ITEM_CLASS_ID = IC.ITEM_CLASS_PID
    );
```
<h4>报错5：分类树查询失败</h4>
<ul><li><strong>触发条件</strong>：查询分类树时，ITEM_CLASS表查询异常</li><li><strong>逻辑分析</strong>：前端调用AE微服务接口/v1/&#123;organizationId&#125;/manual-classification/查询分类列表，后端ManualClassificationMapper.selectList按组织ID查询ITEM_CLASS表。若组织ID参数为空、数据库连接异常或SQL执行错误，则查询失败返回错误信息。常见于用户未正确登录导致组织ID丢失、数据库连接超时。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT COUNT(1) AS 分类总数
  FROM ITEM_CLASS IC
  WHERE IC.ORGANIZATION_ID = :organizationId;
```
<h4>报错6：权限不足，无法操作分类</h4>
<ul><li><strong>触发条件</strong>：用户未登录或无当前组织ID的访问权限时，新增/删除分类</li><li><strong>逻辑分析</strong>：Controller层@Permission(level = ResourceLevel.ORGANIZATION, permissionLogin = true)要求用户登录且具有组织级权限。若用户未登录或token过期，HZERO平台拦截器返回401/403错误。若用户无当前组织ID的访问权限，则无法操作分类数据。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT U.ID AS 用户ID, U.LOGIN_NAME AS 登录名, U.REAL_NAME AS 姓名,
         MR.ROLE_ID AS 角色ID, R.NAME AS 角色名称
  FROM HZERO.IAM_USER U
    LEFT JOIN HZERO.IAM_MEMBER_ROLE MR ON MR.USER_ID = U.ID
    LEFT JOIN HZERO.IAM_ROLE R ON R.ID = MR.ROLE_ID
  WHERE U.ID = :currentUserId;
```
<h4>报错7：会话过期，请重新登录</h4>
<ul><li><strong>触发条件</strong>：任意操作时，登录态丢失或token过期</li><li><strong>逻辑分析</strong>：HZERO平台基于JWT token进行会话管理，token过期后所有接口请求返回401状态码。前端axios拦截器捕获401错误后提示"会话过期，请重新登录"并跳转登录页。常见于长时间未操作、token过期时间到达、服务端重启导致token失效。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '检查用户登录态和token有效期，重新登录获取新token' AS 提示 FROM DUAL;
```
<h4>报错8：暂无分类数据</h4>
<ul><li><strong>触发条件</strong>：查询分类树时，当前组织下无分类数据</li><li><strong>逻辑分析</strong>：后端按组织ID查询ITEM_CLASS表，若查询结果为空则前端分类树显示"暂无数据"。常见于新组织未初始化分类数据、分类数据被全部删除。需先通过新增按钮创建大类分类。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT IC.ITEM_CLASS_LEVEL AS 分类级别, COUNT(1) AS 数量
  FROM ITEM_CLASS IC
  WHERE IC.ORGANIZATION_ID = :organizationId
  GROUP BY IC.ITEM_CLASS_LEVEL
  ORDER BY IC.ITEM_CLASS_LEVEL;
```
</KbCard>

<KbCard title="常见问题">
<ul><li>问题1：分类层级最多支持几级？</li><li>原因：系统支持3级分类（大类→中类→小类），由ITEM_CLASS_LEVEL字段控制（1/2/3）</li><li>解决思路：查询现有分类层级 <code>SELECT DISTINCT ITEM_CLASS_LEVEL FROM ITEM_CLASS ORDER BY ITEM_CLASS_LEVEL</code></li></ul>
<ul><li>问题2：删除有子分类的节点会怎样？</li><li>原因：后端删除接口直接物理删除，不校验子分类。若父分类被删除，子分类的ITEM_CLASS_PID将指向不存在的记录（孤儿节点）</li><li>解决思路：删除前应先检查子分类</li></ul>

```sql
SELECT * FROM ITEM_CLASS WHERE ITEM_CLASS_PID = #{要删除的分类ID};
```
<p>若有子分类，应先删除所有子分类再删除父分类</p>
<ul><li>问题3：分类编码可以修改吗？</li><li>原因：分类编码自动生成，新增后不支持修改。分类编码被产品引用后修改会影响关联关系</li><li>解决思路：不支持修改，如需调整请删除后重新新增</li></ul>
<ul><li>问题4：本菜单在CRM前端如何使用？</li><li>原因：作为嵌入式组件嵌入在CRM产品详情页中，通过AE微服务接口获取分类数据</li><li>解决思路：前端在arrow-crm包中调用AE微服务接口 <code>/v1/&#123;organizationId&#125;/manual-classification/</code></li></ul>
<ul><li>问题5：新增分类时编码已存在为什么不报错？</li><li>原因：后端saveItemClass方法中，若编码+组织ID+父级ID已存在，则静默跳过不执行新增，也不报错</li><li>解决思路：新增前可先查询确认</li></ul>

```sql
SELECT * FROM ITEM_CLASS
    WHERE ITEM_CLASS_CODE = #{编码}
      AND ORGANIZATION_ID = #{组织ID}
      AND ITEM_CLASS_PID = #{父级ID};
```
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
<tr><td>2026-08-29</td><td>-</td><td>AI</td><td>按skill规范完整重写，基于后端代码梳理（Entity/ServiceImpl/Controller/Mapper），补充界面模块1-2、按钮详细展开、保存校验SQL、状态机、数据库表详解</td></tr>
<tr><td>2026-08-03</td><td>-</td><td>AI</td><td>初始创建</td></tr>
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