<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>产品图册维护什么</h2>
    <p>将产品图片按主题分组管理，丰富前端展示内容</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"/><circle cx="6" cy="6.5" r="1" stroke="white" stroke-width="1.5"/><path d="M3 12l4-3 3 2 3-2.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">图册分组</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">一个产品可有多个图册</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>图册名称</strong> — 如"外观图""安装图"等主题</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>封面图</strong> — 默认取首图，可手动指定</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>排序号</strong> — 控制图册展示先后顺序</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="8" r="1.5" stroke="white" stroke-width="1.5"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">图片关联</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">图册与图片为多对多关系</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>添加图片</strong> — 从已上传图片中选入图册</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>移除图片</strong> — 仅取消关联，不删原图</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>图片排序</strong> — 控制图册内展示顺序</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>图册数据被谁引用</h2>
    <p>图册作为产品素材，直接服务于详情页与前端展示</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"/><circle cx="6" cy="6.5" r="1" stroke="white" stroke-width="1.5"/><path d="M3 12l4-3 3 2 3-2.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">详情页</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">嵌入CRM产品详情页图册Tab展示。</p></div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2v12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">前端展示</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">在商城/门户等前端按图册呈现产品。</p></div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">产品推广</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">作为推广素材提升产品曝光吸引力。</p></div>
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
<h4 class="bf-main-title">产品图册 — 全链路流程图</h4>
<p class="bf-main-sub">开始 → ★维护产品图册★(新增/编辑/删除·添加移除图片) → 保存生效 → 结束（嵌入CRM产品详情页，无审批）</p>
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
<text x="545" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">产品图片</text>
<rect x="606" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="655" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">组织/权限</text>
<rect x="716" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
<text x="765" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM详情页</text>
<line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
<rect x="545" y="150" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
<line x1="600" y1="194" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="500" y="220" width="200" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
<text x="600" y="244" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★维护产品图册★</text>
<text x="600" y="263" text-anchor="middle" fill="#DCFCE7" font-size="10">新增/编辑/删除图册·添加移除图片</text>
<line x1="600" y1="274" x2="600" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
<rect x="545" y="300" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="600" y="325" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
<line x1="600" y1="340" x2="600" y2="380" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
<rect x="50" y="380" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="600" y="402" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
<rect x="355" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="430" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">产品详情页</text>
<rect x="525" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="600" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">前端/CRM展示</text>
<rect x="695" y="418" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
<text x="770" y="441" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">产品推广</text>
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
<KbCard num="1" title="重点逻辑1：PLM定时同步 `数据同步`">
<ul><li><strong>业务意义</strong>：自动从PLM系统同步产品图册，保持图册数据与PLM一致</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：定时任务getProdPhotosJob调用PLM接口获取产品图册列表</li></ul>
<ul><li>第2点：调用PLM接口获取图册压缩包并上传至OSS</li></ul>
<ul><li>第3点：按source+sourceCode去重，已存在的记录跳过，新记录写入OBJ_FILE_BUS_REL</li></ul>
<ul><li>第4点：同步记录来源标记为PLM，记录sourceCode用于去重</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：图片签名预览 `安全访问`">
<ul><li><strong>业务意义</strong>：OSS图片需签名后才能访问，确保图片访问安全性</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：查询图册数据后，对图片类型文件调用GET /hfle/v1/0/files/signedUrl获取签名URL</li></ul>
<ul><li>第2点：按页签名（每页6张），切换轮播页时签名目标页图片</li></ul>
<ul><li>第3点：签名失败时跳过该图片，不影响其他图片展示</li></ul>
<ul><li>第4点：非图片类型文件直接使用原始URL</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：分页轮播展示 `界面交互`">
<ul><li><strong>业务意义</strong>：产品图册可能数量较多，采用轮播分页展示提升用户体验</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：查询全部图册数据（size=1000），前端按每页6张切片分页</li></ul>
<ul><li>第2点：使用Carousel轮播组件展示，左右箭头切换页面</li></ul>
<ul><li>第3点：仅访问过的页面渲染内容，未访问页面占位，优化性能</li></ul>
<ul><li>第4点：每张图片以卡片形式展示，标题为附件类型名称</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：产品图册查询页">
<blockquote>本页面为低代码页面（hlod），无独立前端路由。前端组件位于arrow-crm/src/pages/product/stores/product/detailImgListConfig.tsx（ProductImgList组件），在产品详情页中作为Tab页渲染。后端Controller路径：/v1/&#123;organizationId&#125;/files（GET），固定传入busType=prodPhoto、relBusType=prod。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>附件类型</td><td>OBJ_FILE_BUS_REL.FILE_TYPE_ID（间接）</td><td>下拉选择框</td><td>按图片分类类型筛选</td><td>常显</td><td>1.默认值：无 2.来源：值集CRM.OBJ_FILE_TYPE（busType=prodPhoto） 3.查询方式：= 4.选择后触发查询</td></tr>
<tr><td>附件名称</td><td>HFLE_FILE.FILE_NAME（间接）</td><td>文本框</td><td>按文件名称筛选</td><td>常显</td><td>1.默认值：无 2.查询方式：LIKE 3.输入后触发查询</td></tr>
<tr><td>图片卡片</td><td>OBJ_FILE_BUS_REL.FILE_URL</td><td>图片预览</td><td>展示产品图片缩略图，点击可预览大图</td><td>常显</td><td>1.来源：签名URL 2.每页6张，轮播切换 3.非图片类型显示文件图标 4.卡片标题为附件类型名称</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：产品图册查询页-按钮区">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>重置</td><td>-</td><td>按钮</td><td>清空查询条件并重新查询</td><td>有查询条件时显示</td><td>1.点击后清空附件类型和附件名称，重新查询全部图册</td></tr>
<tr><td>刷新</td><td>-</td><td>图标按钮</td><td>重新查询当前条件下的图册数据</td><td>常显</td><td>1.点击后按当前查询条件重新查询，重置页码为第一页</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<blockquote>本菜单为图册查询页面，无选择弹窗。</blockquote>
</KbCard>

<KbCard title="导入">
<h4>前置约定</h4>
<ul><li>文件格式：Excel（.xlsx）</li><li>模板编码：CRM.PROD_PHOTO</li><li>导入处理类：ProdPhotoImport（busType=prodPhoto）</li><li>权限：hzero.product_data.product_info.product_list.ps.import</li><li>仅内部用户可操作（从产品列表页触发）</li></ul>
<h4>字段映射</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段含义</th><th>是否必输</th><th>字段格式</th><th>重复判定字段</th></tr>
</thead>
<tbody>
<tr><td>产品编码</td><td>是</td><td>文本</td><td>是</td></tr>
<tr><td>图片类型</td><td>是</td><td>文本</td><td>否</td></tr>
<tr><td>文件URL</td><td>是</td><td>文本/URL</td><td>否</td></tr>
</tbody>
</table>
<blockquote>具体字段映射规则由导入模板CRM.PROD_PHOTO定义。</blockquote>
<h4>处理逻辑</h4>
<ul><li><strong>校验逻辑</strong>：由导入框架按模板配置校验，ProdPhotoImport类处理busType=prodPhoto的导入</li><li><strong>导入逻辑</strong>：通过HZERO导入框架处理，写入OBJ_FILE_BUS_REL表</li><li><strong>重复处理策略</strong>：按模板配置</li><li><strong>性能方案</strong>：异步导入</li></ul>
<h4>异常与结果约定</h4>
<ul><li>部分成功/失败时的处理：由导入框架控制，支持失败明细导出</li><li>结果反馈机制：导入完成后提示成功/失败数量</li></ul>
<h4>运维保障</h4>
<ul><li>日志记录：HZERO导入框架自动记录导入日志</li><li>断点续传/重试机制：支持失败行重新导入</li></ul>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>重置</td><td>清空查询条件</td><td>查询页</td><td>有查询条件时显示</td><td>清空条件并重新查询全部图册</td></tr>
<tr><td>刷新</td><td>刷新图册列表</td><td>查询页</td><td>常显</td><td>按当前条件重新查询</td></tr>
</tbody>
</table>
<h4>按钮1：重置（查询页）</h4>
<ul><li><strong>触发条件</strong>：附件类型或附件名称有值时显示</li><li><strong>执行逻辑</strong>：</li><li>第1点：清空附件类型和附件名称查询条件</li><li>第2点：重置页码为第一页</li><li>第3点：重新查询全部图册数据</li><li><strong>接口调用</strong>：GET /v1/&#123;organizationId&#125;/files?busType=prodPhoto&amp;relBusType=prod&amp;busId=&#123;prodCode&#125;</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT F.ID, F.FILE_URL, F.FILE_TYPE_ID, F.BUS_ID, F.REL_BUS_TYPE, F.SOURCE, F.SOURCE_CODE
FROM OBJ_FILE_BUS_REL F
WHERE F.REL_BUS_TYPE = 'prod'
  AND F.BUS_ID = :prodCode
  AND F.FILE_TYPE_ID IN (
    SELECT ID FROM OBJ_FILE_TYPE WHERE BUS_TYPE = 'prodPhoto'
  );
```
<h4>按钮2：刷新（查询页）</h4>
<ul><li><strong>触发条件</strong>：常显</li><li><strong>执行逻辑</strong>：</li><li>第1点：重置页码为第一页</li><li>第2点：按当前查询条件重新查询</li><li><strong>接口调用</strong>：GET /v1/&#123;organizationId&#125;/files?busType=prodPhoto&amp;relBusType=prod&amp;busId=&#123;prodCode&#125;&amp;fileName=&#123;fileName&#125;&amp;fileBusType=&#123;fileBusType&#125;</li><li><strong>排查SQL</strong>：无</li></ul>
</KbCard>

<KbCard title="保存校验">
<blockquote>本菜单为查询展示页面，无保存操作，无保存校验。</blockquote>
</KbCard>

<KbCard title="提交校验">
<blockquote>本菜单为查询展示页面，无提交操作，无提交校验。</blockquote>
</KbCard>

<KbCard title="状态机">
<blockquote>本菜单为查询展示页面，无状态流转。</blockquote>
</KbCard>

<KbCard title="表1：OBJ_FILE_BUS_REL（附件与业务数据关系表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ID</td><td>NUMBER</td><td>主键</td><td>-</td><td>自增主键</td></tr>
<tr><td>REL_BUS_TYPE</td><td>VARCHAR</td><td>关联业务类型</td><td>-</td><td>产品图册固定为'prod'（FileRelBusTypeEnums.PROD）</td></tr>
<tr><td>BUS_ID</td><td>VARCHAR</td><td>业务数据ID</td><td>-</td><td>产品图册中为产品编码（LNK_PROD.PROD_CODE）</td></tr>
<tr><td>FILE_URL</td><td>VARCHAR</td><td>文件URL</td><td>图片卡片</td><td>对应HZERO.HFLE_FILE.file_url，需签名后访问</td></tr>
<tr><td>FILE_TYPE_ID</td><td>NUMBER</td><td>文件类型ID</td><td>附件类型（间接）</td><td>关联OBJ_FILE_TYPE.ID，busType=prodPhoto</td></tr>
<tr><td>SOURCE</td><td>VARCHAR</td><td>来源</td><td>-</td><td>PLM=PLM同步，IMPORT=导入，CHANGE=变更申请</td></tr>
<tr><td>SOURCE_CODE</td><td>VARCHAR</td><td>来源编码</td><td>-</td><td>PLM同步时用于去重</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>-</td><td>自动记录</td></tr>
<tr><td>CREATED_BY</td><td>VARCHAR</td><td>创建人</td><td>-</td><td>自动记录</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>-</td><td>自动记录</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>VARCHAR</td><td>最后更新人</td><td>-</td><td>自动记录</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>乐观锁版本号</td><td>-</td><td>乐观锁控制</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表2：OBJ_FILE_TYPE（文件类型表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ID</td><td>NUMBER</td><td>主键</td><td>-</td><td>关联OBJ_FILE_BUS_REL.FILE_TYPE_ID</td></tr>
<tr><td>BUS_TYPE</td><td>VARCHAR</td><td>业务类型</td><td>-</td><td>产品图册固定为'prodPhoto'</td></tr>
<tr><td>FILE_BUS_TYPE</td><td>VARCHAR</td><td>文件业务类型编码</td><td>附件类型</td><td>值集CRM.OBJ_FILE_TYPE</td></tr>
<tr><td>FILE_BUS_TYPE_NAME</td><td>VARCHAR</td><td>文件业务类型名称</td><td>图片卡片标题</td><td>附件类型中文名称</td></tr>
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
<tr><td>获取产品图册失败</td><td>查询图册时</td><td>调用files接口失败，检查网络连接或后端服务状态</td><td>toast提醒</td><td style="text-align:center;"><a href="#err-detail-1" class="view-btn">查看</a></td></tr>
<tr><td>图片预览失败/空白</td><td>点击图片预览时</td><td>图片签名URL获取失败，检查OSS配置和文件是否存在</td><td>界面异常</td><td style="text-align:center;"><a href="#err-detail-2" class="view-btn">查看</a></td></tr>
<tr><td>暂无数据</td><td>查询图册时</td><td>产品无图册数据或PLM同步任务未执行，需先导入或同步图册</td><td>toast提醒</td><td style="text-align:center;"><a href="#err-detail-3" class="view-btn">查看</a></td></tr>
<tr><td>文件类型不存在:prodPhoto:xxx</td><td>导入图册时</td><td>导入的图片类型在OBJ_FILE_TYPE表中不存在，需先配置文件类型</td><td>阻断性报错</td><td style="text-align:center;"><a href="#err-detail-4" class="view-btn">查看</a></td></tr>
<tr><td>PLM同步图册失败</td><td>定时任务执行时</td><td>PLM接口异常或文件解压上传失败，检查PLM接口连通性和OSS配置</td><td>阻断性报错</td><td style="text-align:center;"><a href="#err-detail-5" class="view-btn">查看</a></td></tr>
<tr><td>PLM同步文件类型xxx不存在</td><td>定时任务执行时</td><td>PLM返回的图片类型在OBJ_FILE_TYPE表中不存在，需先配置文件类型</td><td>toast提醒</td><td style="text-align:center;"><a href="#err-detail-6" class="view-btn">查看</a></td></tr>
<tr><td>权限不足</td><td>查询/导入时</td><td>当前用户无产品图册操作权限，需分配对应权限角色</td><td>toast提醒</td><td style="text-align:center;"><a href="#err-detail-7" class="view-btn">查看</a></td></tr>
<tr><td>会话过期</td><td>页面操作时</td><td>登录会话已过期，需重新登录</td><td>toast提醒</td><td style="text-align:center;"><a href="#err-detail-8" class="view-btn">查看</a></td></tr>
</tbody>
</table>
<blockquote><strong>"获取产品图册失败"详细逻辑：</strong>
（1）调用GET /v1/&#123;organizationId&#125;/files接口返回failed=true时提示此错误。
（2）排查SQL：
``<code>sql
-- 检查产品图册数据是否存在
SELECT COUNT(1) FROM OBJ_FILE_BUS_REL WHERE REL_BUS_TYPE = 'prod' AND BUS_ID = :prodCode;
</code>``</blockquote>
<div id="err-detail-2" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>图片预览失败/空白</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>点击图片卡片预览大图时，签名URL获取失败或图片加载失败<br><strong>逻辑分析：</strong>前端调用GET /hfle/v1/0/files/signedUrl获取OSS签名URL，若HFLE_FILE表中文件不存在、OSS文件已被删除、或签名URL过期则预览失败。前端逻辑：签名失败时跳过该图片不影响其他图片展示，但该卡片显示空白。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT F.ID AS 关联ID, F.FILE_URL AS 文件URL, F.BUS_ID AS 产品编码,
         F.SOURCE AS 来源, F.SOURCE_CODE AS 来源编码,
         H.FILE_NAME AS 文件名, H.FILE_SIZE AS 文件大小
  FROM OBJ_FILE_BUS_REL F
    LEFT JOIN HZERO.HFLE_FILE H ON H.FILE_URL = F.FILE_URL
  WHERE F.REL_BUS_TYPE = 'prod'
    AND F.BUS_ID = :prodCode
    AND H.FILE_URL IS NULL;
--</code></pre></div>
</div>


<div id="err-detail-3" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>暂无数据</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>查询产品图册时，GET /v1/&#123;organizationId&#125;/files接口返回空列表content=[]<br><strong>逻辑分析：</strong>前端searchFn调用files接口查询busType=prodPhoto&amp;relBusType=prod&amp;busId=&#123;prodCode&#125;的图册数据，若返回content为空数组则前端List组件渲染"暂无数据"占位图。常见于产品无图册数据、PLM同步任务未执行或图册数据被删除。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT COUNT(1) AS 图册数量
  FROM OBJ_FILE_BUS_REL F
  WHERE F.REL_BUS_TYPE = 'prod'
    AND F.BUS_ID = :prodCode
    AND F.FILE_TYPE_ID IN (SELECT ID FROM OBJ_FILE_TYPE WHERE BUS_TYPE = 'prodPhoto');
--</code></pre></div>
</div>


<div id="err-detail-4" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>文件类型不存在:prodPhoto:xxx</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>通过Excel导入产品图册时，导入的图片类型在OBJ_FILE_TYPE表中不存在<br><strong>逻辑分析：</strong>后端ObjFileBusRelServiceImpl.getFileBusRel方法根据fileBusType=prodPhoto和fileType查询OBJ_FILE_TYPE表（status=1），若objFileTypeDb为null则抛出RuntimeException。导入处理类ProdPhotoImport继承ObjFileBusRelImportServiceImpl，固定busType=prodPhoto。常见于导入模板的图片类型值与系统配置不一致。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT T.ID, T.BUS_TYPE, T.FILE_BUS_TYPE, T.FILE_BUS_TYPE_NAME, T.STATUS
  FROM OBJ_FILE_TYPE T
  WHERE T.BUS_TYPE = 'prodPhoto'
  ORDER BY T.FILE_BUS_TYPE;
  -- 若查询结果不含导入的fileType值，则需在OBJ_FILE_TYPE表中新增配置
--</code></pre></div>
</div>


<div id="err-detail-5" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>PLM同步图册失败</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>定时任务getProdPhotosJob执行时，调用PLM接口获取图册压缩包或解压上传文件失败<br><strong>逻辑分析：</strong>后端ProdPicturesJob.uploadFile方法将PLM返回的压缩包写入临时文件、解压、按文件类型上传至OSS并写入OBJ_FILE_BUS_REL。任一环节异常（PLM接口超时、压缩包损坏、解压失败、OSS上传失败）均抛出RuntimeException，事务回滚。常见于PLM接口不可用、OSS配置错误或磁盘空间不足。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>-- 检查最近PLM同步的图册数据
  SELECT F.BUS_ID AS 产品编码, F.FILE_URL AS 文件URL, F.SOURCE AS 来源,
         F.SOURCE_CODE AS 来源编码, F.CREATION_DATE AS 同步时间
  FROM OBJ_FILE_BUS_REL F
  WHERE F.SOURCE = 'PLM'
    AND F.CREATION_DATE &gt;= SYSDATE - 1
  ORDER BY F.CREATION_DATE DESC;
--</code></pre></div>
</div>


<div id="err-detail-6" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>PLM同步文件类型xxx不存在</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>PLM同步任务执行时，PLM返回的图片类型（smallDocType）在OBJ_FILE_TYPE表中不存在<br><strong>逻辑分析：</strong>后端ProdPicturesJob.uploadFile方法根据busType=prodPhoto和smallDocType查询OBJ_FILE_TYPE表，若objFileTypeDb为null则记录error日志并跳过该文件（continue），不抛出异常。该图片不会被同步，需在OBJ_FILE_TYPE表补充对应文件类型配置后重新同步。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT T.FILE_BUS_TYPE AS 已配置类型编码, T.FILE_BUS_TYPE_NAME AS 类型名称
  FROM OBJ_FILE_TYPE T
  WHERE T.BUS_TYPE = 'prodPhoto' AND T.STATUS = '1';
  -- 对比PLM返回的smallDocType值，补充缺失的类型配置
--</code></pre></div>
</div>


<div id="err-detail-7" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>权限不足</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户访问产品图册查询页或执行导入操作时，当前用户无对应权限<br><strong>逻辑分析：</strong>产品图册查询页通过低代码平台渲染，权限由HZERO IAM控制。导入操作需权限hzero.product_data.product_info.product_list.ps.import。若用户无权限则接口返回403或前端按钮不显示。常见于用户角色未分配产品图册相关权限。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>SELECT R.ROLE_CODE, R.ROLE_NAME, P.PERMISSION_CODE, P.DESCRIPTION
  FROM HZERO.IAM_ROLE R
    JOIN HZERO.IAM_ROLE_PERMISSION RP ON R.ID = RP.ROLE_ID
    JOIN HZERO.IAM_PERMISSION P ON RP.PERMISSION_ID = P.ID
  WHERE P.PERMISSION_CODE LIKE '%product_list.ps.import%'
    AND R.ROLE_CODE = :currentRoleCode;
--</code></pre></div>
</div>


<div id="err-detail-8" class="error-detail-overlay">
  <div class="error-detail-box" v-pre>
    <a href="#" class="close-btn">&times;</a>
    <h4><span style="color:#7C3AED;">报错：</span>会话过期</h4>
    <h5>详细逻辑</h5>
    <div class="detail-text" v-pre><strong>触发条件：</strong>用户在产品图册页面操作时，登录会话（access_token）已过期<br><strong>逻辑分析：</strong>前端请求携带的access_token过期，后端返回401未授权。前端HZERO框架拦截401状态码跳转登录页。常见于长时间未操作页面或token有效期过短。</div>
      <h5>排查SQL</h5>
    <pre class="detail-sql language-sql" v-pre><code>-- 无直接SQL，检查用户会话状态
  SELECT U.LOGIN_NAME, U.LAST_LOGIN_DATE AS 最后登录时间
  FROM HZERO.IAM_USER U
  WHERE U.LOGIN_NAME = :currentLoginName;
--</code></pre></div>
</div>


</KbCard>

<KbCard title="常见问题">

<div class="faq-qa-wrap">
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q1</span>
    <span style="font-size:15px;">图册数据为空</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>可能PLM同步任务未执行、产品无图册数据、或图册数据被删除
  </div>
</div>
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q2</span>
    <span style="font-size:15px;">PLM同步的图册未更新</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>定时任务getProdPhotosJob未执行或PLM接口异常<br><strong style="color:#7C3AED;">处理：</strong>检查定时任务执行日志和PLM接口连通性
  </div>
</div>
<div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
  <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
    <span class="kl-num">Q3</span>
    <span style="font-size:15px;">图片无法预览</span>
  </div>
  <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
    <strong style="color:#7C3AED;">原因：</strong>OSS文件已被删除或签名URL过期<br><strong style="color:#7C3AED;">处理：</strong>检查HFLE_FILE表中文件是否存在，重新上传或同步图册
  </div>
</div>
</div>

```sql
-- 检查图册数据
    SELECT F.*, T.FILE_BUS_TYPE, T.FILE_BUS_TYPE_NAME
    FROM OBJ_FILE_BUS_REL F
      LEFT JOIN OBJ_FILE_TYPE T ON F.FILE_TYPE_ID = T.ID
    WHERE F.REL_BUS_TYPE = 'prod' AND F.BUS_ID = :prodCode;
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
<tr><td>2025-12-18</td><td>-</td><td>-</td><td>附件与业务数据关系表(ObjFileBusRel)初始创建</td></tr>
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