import{_ as v}from"./chunks/contributors.b3a2dd5f.js";import{r as c,o as f,c as b,b as n,a,w as o,d as s,e as l,u as e,m as i,y as d,H as k,ah as y,C as _,_ as q}from"./app.94992fdf.js";const T=n("h1",{id:"icon",tabindex:"-1"},[s("Icon "),n("a",{class:"header-anchor vp-link",href:"#icon","aria-hidden":"true"},"#")],-1),x=n("p",null,"Element Plus proporciona un conjunto de iconos propios.",-1),S=n("h2",{id:"uso-de-iconos",tabindex:"-1"},[s("Uso de iconos "),n("a",{class:"header-anchor vp-link",href:"#uso-de-iconos","aria-hidden":"true"},"#")],-1),I=s("Si quiere "),E=n("strong",null,"usarlos directamente",-1),C=s(" como en el ejemplo, necesita "),P={href:"https://v3.vuejs.org/guide/component-registration.html#global-registration",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=s("registrar globalmente"),w=s(" los componentes antes de usarlos."),V=s("If you want to see all available SVG icons please check "),D={href:"https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},N=s("@element-plus/icons-vue@1.x"),z={href:"https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=s("@element-plus/icons-vue@latest"),U=s(" and the source "),R={href:"https://github.com/element-plus/element-plus-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},G=s("element-plus-icons"),L=s(" out or "),B=n("a",{href:"#icon-collection",class:"vp-link"},"Icon Collection",-1),M=l(`<h2 id="instalacion" tabindex="-1">Instalaci\xF3n <a class="header-anchor vp-link" href="#instalacion" aria-hidden="true">#</a></h2><h3 id="usando-gestor-de-paquetes" tabindex="-1">Usando gestor de paquetes <a class="header-anchor vp-link" href="#usando-gestor-de-paquetes" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># Elija el gestor de paquetes que prefiera.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="registrar-todos-los-iconos" tabindex="-1">Registrar todos los iconos <a class="header-anchor vp-link" href="#registrar-todos-los-iconos" aria-hidden="true">#</a></h3><p>Necesitas importar todos los iconos de <code>@element-plus/icons-vue</code> y registrarlos globalmente.</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// if you&#39;re using CDN, please remove this line.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),F=s("Tambi\xE9n puede consultar "),H={href:"https://codepen.io/sxzz/pen/xxpvdrg",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},O=s("esta plantilla"),$=s("."),W=n("h3",{id:"importar-en-el-navegador",tabindex:"-1"},[s("Importar en el navegador "),n("a",{class:"header-anchor vp-link",href:"#importar-en-el-navegador","aria-hidden":"true"},"#")],-1),Y=n("p",null,[s("Puede importar iconos de Element Plus directamente a las etiquetas HTML del navegador y usar la variable global "),n("code",null,"ElementPlusIconsVue"),s(".")],-1),J=s("Seg\xFAn los diferentes proveedores de CDN hay diferentes URLs de importaci\xF3n. Aqu\xED se usa "),K={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Q=s("unpkg"),X=s(" y "),Z={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},nn=s("jsDelivr"),sn=s(" como ejemplo. Tambi\xE9n puede utilizar otros proveedores CDN."),an=l(`<h4 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),tn={class:"tip custom-block"},en=n("p",{class:"custom-block-title"},"TIP",-1),on=s("Recomendamos usar CDN para importar Element Plus. Emple\xE1ndolo podr\xE1 bloquear la versi\xF3n en la direcci\xF3n del enlace, para no verse afectado por actualizaciones incompatibles cuando Element Plus se actualice en el futuro. Por favor, consulte en "),pn={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ln=s("unpkg.com"),cn=s(" para el m\xE9todo para bloquear la versi\xF3n."),un=n("h3",{id:"auto-importar",tabindex:"-1"},[s("Auto Importar "),n("a",{class:"header-anchor vp-link",href:"#auto-importar","aria-hidden":"true"},"#")],-1),rn=s("Use "),dn={href:"https://github.com/antfu/unplugin-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},kn=s("unplugin-icons"),_n=s(" y "),gn={href:"https://github.com/antfu/unplugin-auto-import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},hn=s("unplugin-auto-import"),mn=s(" para importar autom\xE1ticamente cualquier colecci\xF3n de iconos de iconify. Puede consultar "),vn={href:"https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},fn=s("esta plantilla"),bn=s("."),yn=n("h2",{id:"uso-simple",tabindex:"-1"},[s("Uso simple "),n("a",{class:"header-anchor vp-link",href:"#uso-simple","aria-hidden":"true"},"#")],-1),qn={class:"warning custom-block"},Tn=n("p",{class:"custom-block-title"},"WARNING",-1),xn=s("Debido a que el est\xE1ndar HTML ya ha definido una etiqueta llamada "),Sn={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},In=s("menu"),En=s(", necesita usar un alias para renderizar el icono, si registra "),Cn=n("code",null,"Menu",-1),Pn=s(" directamente no funcionar\xE1."),An=l(`<div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),wn=l(`<h2 id="combinado-con-el-icon" tabindex="-1">Combinado con el-icon <a class="header-anchor vp-link" href="#combinado-con-el-icon" aria-hidden="true">#</a></h2><p><code>el-icon</code> proporciona atributos adicionales para el icono SVG crudo, para m\xE1s detalles, por favor lea al final.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),Vn=n("p",null,[s(" con la clase extra "),n("b",null,"is-loading"),s(", su icono ser\xE1 capaz de rotar 360 grados en 2 segundos, tambi\xE9n puede anular esto ")],-1),Dn={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},Nn=n("span",{style:{"vertical-align":"middle"}}," Search ",-1),zn=l(`<h2 id="usando-el-icono-svg-directamente" tabindex="-1">Usando el icono SVG directamente <a class="header-anchor vp-link" href="#usando-el-icono-svg-directamente" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>
    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),jn={style:{"font-size":"20px"}},Un=n("h2",{id:"coleccion-de-iconos",tabindex:"-1"},[s("Colecci\xF3n de iconos "),n("a",{class:"header-anchor vp-link",href:"#coleccion-de-iconos","aria-hidden":"true"},"#")],-1),Rn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[n("strong",null,"Puede usar el icono SVG en cualquier versi\xF3n"),s(" siempre y cuando lo instale")]),n("p",null,[n("strong",null,"Puede hacer clic en el icono para copiarlo")])],-1),Gn=n("h2",{id:"api",tabindex:"-1"},[s("API "),n("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),Ln=n("h3",{id:"attributes",tabindex:"-1"},[s("Attributes "),n("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),Bn={class:"vp-table"},Mn=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Descripci\xF3n"),n("th",null,"Tipo"),n("th",null,"Default")])],-1),Fn=n("td",null,"color",-1),Hn=n("td",null,"Atributo de relleno de la etiqueta SVG",-1),On=n("td",null,"inherit from color",-1),$n=n("td",null,"size",-1),Wn=n("td",null,"Tama\xF1o del icono SVG. tama\xF1o x tama\xF1o",-1),Yn=s(" / "),Jn=n("td",null,"inherit from font size",-1),Kn=l('<h3 id="slots" tabindex="-1">Slots <a class="header-anchor vp-link" href="#slots" aria-hidden="true">#</a></h3><div class="vp-table"><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>default</td><td>personaliza el contenido por defecto</td></tr></tbody></table></div><h2 id="fuente" tabindex="-1">Fuente <a class="header-anchor vp-link" href="#fuente" aria-hidden="true">#</a></h2>',3),Qn={href:"https://github.com/element-plus/element-plus/tree/dev/packages/components/icon",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Xn=s("Componentes"),Zn=s(" \u2022 "),ns={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ss=s("Documentaci\xF3n"),as=n("h2",{id:"contribuidores",tabindex:"-1"},[s("Contribuidores "),n("a",{class:"header-anchor vp-link",href:"#contribuidores","aria-hidden":"true"},"#")],-1),is='{"title":"Icon","description":"","frontmatter":{"title":"Icon","lang":"es-ES"},"headers":[{"level":2,"title":"Uso de iconos","slug":"uso-de-iconos"},{"level":2,"title":"Instalaci\xF3n","slug":"instalacion"},{"level":3,"title":"Usando gestor de paquetes","slug":"usando-gestor-de-paquetes"},{"level":3,"title":"Registrar todos los iconos","slug":"registrar-todos-los-iconos"},{"level":3,"title":"Importar en el navegador","slug":"importar-en-el-navegador"},{"level":3,"title":"Auto Importar","slug":"auto-importar"},{"level":2,"title":"Uso simple","slug":"uso-simple"},{"level":2,"title":"Combinado con el-icon","slug":"combinado-con-el-icon"},{"level":2,"title":"Usando el icono SVG directamente","slug":"usando-el-icono-svg-directamente"},{"level":2,"title":"Colecci\xF3n de iconos","slug":"coleccion-de-iconos"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"Fuente","slug":"fuente"},{"level":2,"title":"Contribuidores","slug":"contribuidores"}],"relativePath":"es-ES/component/icon.md","lastUpdated":null}',ts={},us=Object.assign(ts,{__name:"icon",setup(es){return(os,ps)=>{const t=q,p=c("ElIcon"),u=c("ElRow"),g=c("ElButton"),h=c("IconList"),r=c("api-typing"),m=v;return f(),b("div",null,[T,x,S,n("ul",null,[n("li",null,[n("p",null,[I,E,C,n("a",P,[A,a(t,{class:"link-icon"})]),w])]),n("li",null,[n("p",null,[V,n("a",D,[N,a(t,{class:"link-icon"})]),n("a",z,[j,a(t,{class:"link-icon"})]),U,n("a",R,[G,a(t,{class:"link-icon"})]),L,B])])]),M,n("p",null,[F,n("a",H,[O,a(t,{class:"link-icon"})]),$]),W,Y,n("p",null,[J,n("a",K,[Q,a(t,{class:"link-icon"})]),X,n("a",Z,[nn,a(t,{class:"link-icon"})]),sn]),an,n("div",tn,[en,n("p",null,[on,n("a",pn,[ln,a(t,{class:"link-icon"})]),cn])]),un,n("p",null,[rn,n("a",dn,[kn,a(t,{class:"link-icon"})]),_n,n("a",gn,[hn,a(t,{class:"link-icon"})]),mn,n("a",vn,[fn,a(t,{class:"link-icon"})]),bn]),yn,n("div",qn,[Tn,n("p",null,[xn,n("a",Sn,[In,a(t,{class:"link-icon"})]),En,Cn,Pn])]),An,a(u,null,{default:o(()=>[n("div",null,[a(p,{size:30},{default:o(()=>[a(e(i))]),_:1}),a(e(i))])]),_:1}),wn,a(u,null,{default:o(()=>[Vn,n("div",Dn,[a(p,{size:20},{default:o(()=>[a(e(i))]),_:1}),a(p,{color:"#409EFC",class:"no-inherit"},{default:o(()=>[a(e(d))]),_:1}),a(p,null,{default:o(()=>[a(e(k))]),_:1}),a(p,{class:"is-loading"},{default:o(()=>[a(e(y))]),_:1}),a(g,{type:"primary"},{default:o(()=>[a(p,{style:{"vertical-align":"middle",color:"#fff"}},{default:o(()=>[a(e(_))]),_:1}),Nn]),_:1})])]),_:1}),zn,a(u,null,{default:o(()=>[n("div",jn,[a(e(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(d),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(k),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(_),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),Un,Rn,a(h),Gn,Ln,n("div",Bn,[n("table",null,[Mn,n("tbody",null,[n("tr",null,[Fn,Hn,n("td",null,[a(r,{type:"string",details:""})]),On]),n("tr",null,[$n,Wn,n("td",null,[a(r,{type:"number",details:""}),Yn,a(r,{type:"string",details:""})]),Jn])])])]),Kn,n("p",null,[n("a",Qn,[Xn,a(t,{class:"link-icon"})]),Zn,n("a",ns,[ss,a(t,{class:"link-icon"})])]),as,a(m,{id:"icon"})])}}});export{is as __pageData,us as default};