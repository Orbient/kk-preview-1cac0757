import{_ as e,b as t,d as n,f as r,h as i,l as a,m as o,n as s,o as c,r as l,v as u,x as d,y as f}from"./data.CBp2qVNS.js";import{t as p}from"./order-text.DGYYlmQ8.js";var m=class extends Error{auth=!1},h=`krovati:demo-admin`,g=()=>c.get(`krovati:demo-catalog`,null)??a(),_=e=>{if(!c.set(`krovati:demo-catalog`,e))throw new m(`Браузер не даёт сохранить: в демо место под фото ограничено, удалите пару загруженных`);return e},v=e=>new Promise(t=>setTimeout(()=>t(e),250));function ee(e,t,n){return/^image\/(jpeg|png|webp)$/.test(e.type)?new Promise((r,i)=>{let a=new Image;a.onload=()=>{let e=Math.min(1,t/Math.max(a.width,a.height)),o=Object.assign(document.createElement(`canvas`),{width:Math.round(a.width*e),height:Math.round(a.height*e)});o.getContext(`2d`).drawImage(a,0,0,o.width,o.height),URL.revokeObjectURL(a.src),o.toBlob(e=>e?r(e):i(new m(`Не получилось обработать фото`)),`image/webp`,n)},a.onerror=()=>i(new m(`Не получилось открыть фото — нужен JPG, PNG или WebP`)),a.src=URL.createObjectURL(e)}):Promise.reject(new m(`Нужна картинка JPG, PNG или WebP`))}var y=e=>new Promise(t=>{let n=new FileReader;n.onload=()=>t(String(n.result)),n.readAsDataURL(e)}),b={me:()=>v({ok:c.get(h,!1),max:!1}),async login(e,t){if(await v(0),e.trim()!==`demo`||t!==`demo`)throw new m(`Неверный логин или пароль`);c.set(h,!0)},logout:async()=>void c.set(h,!1),products:()=>v(g()),async save(e,t){let n=g();if(n.some(n=>n.id===e.id&&n.id!==t))throw new m(`Товар с таким адресом уже есть`);let r=n.findIndex(e=>e.id===t);return r<0?n.unshift(e):n[r]=e,v(_(n))},remove:async e=>v(_(g().filter(t=>t.id!==e))),reorder:async e=>v(_([...g()].sort((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)))),upload:async e=>y(await ee(e,1200,.82)),orders:()=>v({orders:c.get(l,[]),max:!1}),async status(e,t){c.set(l,c.get(l,[]).map(n=>n.number===e?{...n,status:t}:n))},async resend(){throw new m(`В демо-версии MAX не подключён — на рабочем сайте заказ уйдёт боту`)},max:()=>v({ok:!1,error:`В демо-версии сервера нет — проверка MAX заработает на хостинге`,ready:!1})},te=()=>{c.set(s,null),localStorage.removeItem(s),localStorage.removeItem(l)},x=(e,t=document)=>t.querySelector(e),S=(e,t=document)=>[...t.querySelectorAll(e)],C=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,w=x(`[data-login]`),T=x(`[data-app]`),E=x(`[data-view]`),D=[],O=[],k=!1,A=null,j=``,M=!1,N=x(`[data-toast]`),P=0;function F(e,t=`ok`){N.innerHTML=`<span class="toast-ic${t===`err`?` is-err`:``}">${f(t===`ok`?`check`:`close`)}</span><span>${r(e)}</span>`,N.hidden=!1,clearTimeout(P),C()||d.fromTo(N,{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,ease:`expo.out`}),P=window.setTimeout(()=>N.hidden=!0,t===`err`?6e3:3200)}var I=`krovati:admin-draft`;function L(e){e instanceof m&&e.auth&&(A&&M&&sessionStorage.setItem(I,JSON.stringify({draft:A,original:j,hash:location.hash})),M=!1,V()),F(e instanceof m?e.message:`Что-то пошло не так. Попробуйте ещё раз`,`err`)}var R=x(`[data-confirm]`);function z(e,t,n=`Удалить`){return x(`[data-confirm-text]`,R).textContent=e,x(`[data-confirm-sub]`,R).textContent=t,x(`[data-confirm-yes]`,R).textContent=n,R.returnValue=``,R.showModal(),new Promise(e=>R.addEventListener(`close`,()=>e(R.returnValue===`yes`),{once:!0}))}var ne=t=>{let n=t.sizes.map(e=>e.price),r=Math.min(...n),i=Math.max(...n);return r===i?e(r):`${e(r).replace(/ ₽$/,``)} – ${e(i)}`},re={а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,е:`e`,ё:`e`,ж:`zh`,з:`z`,и:`i`,й:`y`,к:`k`,л:`l`,м:`m`,н:`n`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,у:`u`,ф:`f`,х:`h`,ц:`c`,ч:`ch`,ш:`sh`,щ:`sch`,ъ:``,ы:`y`,ь:``,э:`e`,ю:`yu`,я:`ya`},ie=e=>e.toLowerCase().split(``).map(e=>re[e]??e).join(``).replace(/[^a-z0-9]+/g,`-`).slice(0,40).replace(/^-+|-+$/g,``),ae=()=>({id:``,title:``,short:``,description:``,cats:[],cut:``,photos:[],sizes:[{label:``,price:0}],colors:[],features:[],stock:`in`,active:!0}),B=e=>JSON.parse(JSON.stringify(e));async function oe(){let e=await b.me().catch(()=>({ok:!1,max:!1}));if(!e.ok)return V();k=!!e.max,U()}function V(){T.hidden=!0,w.hidden=!1,x(`[name="login"]`,w).focus(),C()||d.from(`.ad-login-card`,{y:30,autoAlpha:0,duration:.9,ease:`expo.out`})}var H=x(`[data-login-form]`);H.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(H),n=x(`[data-login-err]`,H),r=x(`[data-login-label]`,H),i=x(`button[type="submit"]`,H);if(n.textContent=``,!t.get(`login`)||!t.get(`password`))return void(n.textContent=`Введите логин и пароль`);i.disabled=!0,r.textContent=`Входим…`;try{await b.login(String(t.get(`login`)),String(t.get(`password`))),k=!!(await b.me()).max,H.reset(),U()}catch(e){n.textContent=e instanceof m?e.message:`Сервер не ответил. Попробуйте ещё раз`,C()||d.fromTo(`.ad-login-card`,{x:-8},{x:0,duration:.6,ease:`elastic.out(1, 0.3)`})}finally{i.disabled=!1,r.textContent=`Войти`}}),x(`[data-eye]`).addEventListener(`click`,e=>{let t=e.currentTarget,n=x(`[name="password"]`,H),r=n.type===`password`;n.type=r?`text`:`password`,t.innerHTML=f(r?`eye-off`:`eye`),t.setAttribute(`aria-label`,r?`Скрыть пароль`:`Показать пароль`)}),x(`[data-logout]`).addEventListener(`click`,async()=>{(!M||await z(`Выйти без сохранения?`,`Изменения в товаре пропадут.`,`Выйти`))&&(M=!1,await b.logout().catch(()=>{}),location.hash=``,V())});async function U(){w.hidden=!0,T.hidden=!1;try{[D,{orders:O,max:k}]=await Promise.all([b.products(),b.orders()])}catch(e){L(e)}K(),G()}var W=location.hash;addEventListener(`hashchange`,async()=>{if(M&&!location.hash.startsWith(`#edit`)&&!location.hash.startsWith(`#new`)){let e=location.hash;if(history.replaceState(null,``,W),!await z(`Уйти без сохранения?`,`Изменения в товаре пропадут.`,`Уйти`))return;M=!1,location.hash=e}else G()}),addEventListener(`beforeunload`,e=>{M&&e.preventDefault()});function G(){if(T.hidden)return;let e=location.hash.slice(1);W=location.hash;let[t,n]=e.split(`/`);S(`[data-tab]`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===(t===`edit`||t===`new`?`products`:t||`products`))),t===`orders`?$():t===`settings`?ue():t===`new`?J(null):t===`edit`?J(decodeURIComponent(n??``)):q(),scrollTo(0,0),C()||d.fromTo(E,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,ease:`expo.out`})}function K(){let e=O.filter(e=>e.status===`new`).length,t=x(`[data-new-count]`);t.textContent=String(e),t.hidden=e===0}function q(){let e=D.filter(e=>e.active).length;E.innerHTML=`<div class="ad-head">
  <div><h1>Товары</h1><p class="ad-sub tnum">${D.length} в каталоге · ${e} на сайте</p></div>
  <a class="btn btn-orange" href="#new">${f(`plus`)}Добавить товар</a>
</div>
${D.length?`<ul class="ad-list" role="list">${D.map((e,n)=>`<li class="ad-row${e.active?``:` is-off`}" data-id="${r(e.id)}">
  <div class="ad-move">
    <button type="button" data-move="-1" aria-label="Выше"${n===0?` disabled`:``}>${f(`arrow-u`)}</button>
    <button type="button" data-move="1" aria-label="Ниже"${n===D.length-1?` disabled`:``}>${f(`arrow-d`)}</button>
  </div>
  <a class="ad-thumb" href="#edit/${encodeURIComponent(e.id)}" tabindex="-1"><img src="${r(u(e.cut))}" alt="" loading="lazy" /></a>
  <a class="ad-row-main" href="#edit/${encodeURIComponent(e.id)}">
    <b>${r(e.title)}</b>
    <span>${r(e.cats.map(e=>t.find(t=>t.id===e)?.label).filter(Boolean).join(`, `)||`Без типа`)} · ${e.sizes.length} ${e.sizes.length===1?`размер`:e.sizes.length<5?`размера`:`размеров`} · ${e.colors.length} цв.</span>
  </a>
  <span class="ad-row-price tnum">${ne(e)}</span>
  <label class="ad-switch" title="${e.active?`Скрыть с сайта`:`Показать на сайте`}">
    <input type="checkbox" data-active${e.active?` checked`:``} /><span></span><em>${e.active?`На сайте`:`Скрыт`}</em>
  </label>
  <div class="ad-act">
    <a class="ad-ico" href="#edit/${encodeURIComponent(e.id)}" aria-label="Изменить">${f(`edit`)}</a>
    <button type="button" class="ad-ico" data-dup aria-label="Сделать копию">${f(`dup`)}</button>
    <button type="button" class="ad-ico ad-del" data-del aria-label="Удалить">${f(`trash`)}</button>
  </div>
</li>`).join(``)}</ul>`:`<div class="ad-empty"><p>Каталог пуст. Добавьте первую модель — она сразу появится на сайте.</p><a class="btn btn-orange" href="#new">${f(`plus`)}Добавить товар</a></div>`}`}E.addEventListener(`click`,async e=>{let t=e.target,n=t.closest(`.ad-row`);if(!n)return;let r=n.dataset.id,i=D.find(e=>e.id===r),a=t.closest(`[data-move]`);if(a){let e=D.indexOf(i),t=e+Number(a.dataset.move),n=D.map(e=>e.id);[n[e],n[t]]=[n[t],n[e]];try{D=await b.reorder(n),q();let e=x(`.ad-row[data-id="${CSS.escape(r)}"]`,E);e&&!C()&&d.fromTo(e,{backgroundColor:`#ffe1c9`},{backgroundColor:`#ffffff`,duration:1.2,clearProps:`backgroundColor`}),x(`.ad-row[data-id="${CSS.escape(r)}"] [data-move="${a.dataset.move}"]`,E)?.focus()}catch(e){L(e)}}else if(t.closest(`[data-dup]`)){let e=B(i),t=i.id.slice(0,36).replace(/-+$/,``),n=2;for(;D.some(e=>e.id===`${t}-${n}`);)n++;e.id=`${t}-${n}`,e.title=`${i.title} (копия)`,e.active=!1;try{D=await b.save(e,``),F(`Копия создана и скрыта с сайта — поправьте и включите`),q()}catch(e){L(e)}}else if(t.closest(`[data-del]`)){if(!await z(`Удалить «${i.title}»?`,`Товар пропадёт с сайта и из каталога. Если он может вернуться — лучше просто скройте его переключателем.`))return;try{D=await b.remove(r),F(`Товар удалён`),q()}catch(e){L(e)}}}),E.addEventListener(`change`,async e=>{let t=e.target;if(!t.matches(`[data-active]`))return;let n=t.closest(`.ad-row`).dataset.id,r=B(D.find(e=>e.id===n));r.active=t.checked;try{D=await b.save(r,n),F(r.active?`Товар снова на сайте`:`Товар скрыт с сайта`),q()}catch(e){t.checked=!t.checked,L(e)}});function J(e){let t=JSON.parse(sessionStorage.getItem(I)||`null`);if(sessionStorage.removeItem(I),t&&t.hash===location.hash)return A=t.draft,j=t.original,M=!0,Y(),F(`Вернули несохранённые правки — нажмите «Сохранить»`);let n=e?D.find(t=>t.id===e):null;if(e&&!n)return void(location.hash=`#products`);A=n?B(n):ae(),j=n?.id??``,M=!1,Y()}function Y(e){let n=A,a=!j,s=[n.cut,...n.photos].filter(Boolean);E.innerHTML=`<form class="ad-edit" data-edit novalidate>
<div class="ad-head">
  <div><a class="ad-crumb" href="#products">${f(`chev-l`)}Товары</a><h1>${a?`Новый товар`:r(n.title||`Без названия`)}</h1></div>
  ${a?``:`<a class="ad-link" href="${o(n)}" target="_blank" rel="noopener">Открыть на сайте ${f(`arrow-ur`)}</a>`}
</div>
<div class="ad-cols">
  <div class="ad-form">
    <section class="ad-panel">
      <h2>Основное</h2>
      <label class="ad-fld"><span>Название</span><input data-f="title" value="${r(n.title)}" maxlength="80" placeholder="Двухъярусная «Домик»" required /></label>
      <label class="ad-fld"><span>Адрес страницы <i>${r(i(`catalog/`))}<b data-slug-view>${r(n.id||`…`)}</b>/</i></span><input data-f="id" value="${r(n.id)}" maxlength="40" placeholder="domik" pattern="[a-z0-9-]+" autocapitalize="off" spellcheck="false" /></label>
      <label class="ad-fld"><span>Строка на карточке</span><input data-f="short" value="${r(n.short)}" maxlength="140" placeholder="Главное в одной строке: материал, особенность" /></label>
      <label class="ad-fld"><span>Описание <i>абзацы — через пустую строку</i></span><textarea data-f="description" rows="6" maxlength="3000">${r(n.description)}</textarea></label>
      <div class="ad-fld"><span>Тип кровати <i>в каком фильтре каталога показывать</i></span>
        <div class="ad-chips">${t.map(e=>`<label class="ad-chip"><input type="checkbox" data-cat value="${e.id}"${n.cats.includes(e.id)?` checked`:``} /><span>${e.label}</span></label>`).join(``)}</div>
      </div>
      <div class="ad-two">
        <label class="ad-fld"><span>Наличие</span><span class="ad-sel"><select data-f="stock"><option value="in"${n.stock===`in`?` selected`:``}>В наличии на складе</option><option value="order"${n.stock===`order`?` selected`:``}>Под заказ</option></select>${f(`chev-r`)}</span></label>
        <label class="ad-fld"><span>Метка на карточке <i>необязательно</i></span><input data-f="badge" value="${r(n.badge??``)}" maxlength="24" placeholder="Хит, Новинка" /></label>
      </div>
      <label class="ad-switch ad-switch-lg"><input type="checkbox" data-f="active"${n.active?` checked`:``} /><span></span><em>Показывать на сайте</em></label>
    </section>

    <section class="ad-panel">
      <h2>Размеры и цены</h2>
      <p class="ad-hint">Первый размер показывается на странице товара выбранным. На карточке — самая низкая цена «от».</p>
      <div class="ad-rows">${n.sizes.map((e,t)=>`<div class="ad-rowf">
  <label class="ad-fld"><span class="${t?`sr-only`:``}">Размер, см</span><input data-f="sizes.${t}.label" value="${r(e.label)}" maxlength="24" placeholder="180×90" /></label>
  <label class="ad-fld ad-money"><span class="${t?`sr-only`:``}">Цена</span><input data-f="sizes.${t}.price" value="${e.price?e.price.toLocaleString(`ru-RU`):``}" inputmode="numeric" placeholder="31000" class="tnum" /><em>₽</em></label>
  <button type="button" class="ad-ico ad-del" data-rm="sizes.${t}" aria-label="Убрать размер"${n.sizes.length===1?` disabled`:``}>${f(`close`)}</button>
</div>`).join(``)}</div>
      ${n.sizes.length<20?`<button type="button" class="ad-add" data-add-row="sizes">${f(`plus`)}Добавить размер</button>`:`<p class="ad-hint">Это максимум — 20 размеров.</p>`}
    </section>

    <section class="ad-panel">
      <h2>Цвета велюра</h2>
      <p class="ad-hint">Фото цвета показывается, когда покупатель нажимает на этот цвет. Пока цвет не выбран, везде главная картинка из блока «Фото».</p>
      <div class="ad-rows">${n.colors.map((e,t)=>`<div class="ad-rowf ad-rowc">
  <label class="ad-color" style="--sw:${r(e.hex)}"><input type="color" data-f="colors.${t}.hex" value="${r(e.hex)}" aria-label="Цвет" /></label>
  <label class="ad-fld"><span class="sr-only">Название цвета</span><input data-f="colors.${t}.name" value="${r(e.name)}" maxlength="30" placeholder="Изумруд" /></label>
  <details class="ad-pick">
    <summary>${e.img?`<img src="${r(u(e.img))}" alt="" />`:f(`upload`)}<span>${e.img?`Фото цвета`:`Без фото`}</span></summary>
    <div class="ad-pick-pop">
      ${s.map(n=>`<button type="button" data-color-img="${t}" data-path="${r(n)}" aria-label="Выбрать это фото"${n===e.img?` aria-pressed="true"`:``}><img src="${r(u(n))}" alt="" /></button>`).join(``)}
      <label class="ad-pick-up">${f(`upload`)}<span>Загрузить</span><input type="file" accept="image/jpeg,image/png,image/webp" data-upload="color:${t}" hidden /></label>
      ${e.img?`<button type="button" class="ad-pick-x" data-color-img="${t}" data-path="">Без фото</button>`:``}
    </div>
  </details>
  <button type="button" class="ad-ico ad-del" data-rm="colors.${t}" aria-label="Убрать цвет">${f(`close`)}</button>
</div>`).join(``)}</div>
      ${n.colors.length<24?`<button type="button" class="ad-add" data-add-row="colors">${f(`plus`)}Добавить цвет</button>`:`<p class="ad-hint">Это максимум — 24 цвета.</p>`}
    </section>

    <section class="ad-panel">
      <h2>Фото</h2>
      <div class="ad-photos">
        <div class="ad-cut">
          <span class="ad-lbl">Главная картинка <i>на карточке и первой на странице товара, лучше PNG без фона</i></span>
          <label class="ad-drop${n.cut?` has`:``}">${n.cut?`<img src="${r(u(n.cut))}" alt="" />`:`${f(`upload`)}<span>Загрузить</span>`}<input type="file" accept="image/jpeg,image/png,image/webp" data-upload="cut" hidden /></label>
        </div>
        <div class="ad-gal">
          <span class="ad-lbl">Галерея на странице товара <i>${n.photos.length} из 12</i></span>
          <div class="ad-gal-grid">
            ${n.photos.map((e,t)=>`<figure class="ad-ph"><img src="${r(u(e))}" alt="" />
  <div class="ad-ph-act">
    <button type="button" data-ph="${t}" data-dir="-1" aria-label="Левее"${t===0?` disabled`:``}>${f(`chev-l`)}</button>
    <button type="button" data-ph="${t}" data-dir="1" aria-label="Правее"${t===n.photos.length-1?` disabled`:``}>${f(`chev-r`)}</button>
    <button type="button" data-ph-x="${t}" aria-label="Убрать фото">${f(`trash`)}</button>
  </div></figure>`).join(``)}
            ${n.photos.length<12?`<label class="ad-drop ad-drop-sm">${f(`plus`)}<span>Добавить фото</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple data-upload="photos" hidden /></label>`:``}
          </div>
        </div>
      </div>
    </section>

    <section class="ad-panel">
      <h2>Особенности</h2>
      <p class="ad-hint">До 8 коротких пунктов с галочкой на странице товара.</p>
      <div class="ad-rows">${n.features.map((e,t)=>`<div class="ad-rowf ad-rowt"><label class="ad-fld"><span class="sr-only">Пункт ${t+1}</span><input data-f="features.${t}" value="${r(e)}" maxlength="60" placeholder="Массив берёзы" /></label><button type="button" class="ad-ico ad-del" data-rm="features.${t}" aria-label="Убрать пункт">${f(`close`)}</button></div>`).join(``)}</div>
      ${n.features.length<8?`<button type="button" class="ad-add" data-add-row="features">${f(`plus`)}Добавить пункт</button>`:``}
    </section>
  </div>

  <aside class="ad-preview" aria-label="Превью карточки">
    <span class="ad-lbl">Так карточка выглядит на сайте</span>
    <div class="ad-card" data-preview></div>
  </aside>
</div>

<div class="ad-save">
  <p class="ad-save-t" data-dirty-t>${a?`Новый товар ещё не сохранён`:`Изменений нет`}</p>
  <a class="btn btn-soft" href="#products">Отмена</a>
  <button type="submit" class="btn btn-orange" data-save>${f(`check`)}<span>Сохранить</span></button>
</div>
</form>`,X(),Z(M),e&&x(`[data-f="${e}"]`,E)?.focus()}function X(){let e=x(`[data-preview]`,E);if(!e||!A)return;let t=A,r=t.sizes.some(e=>e.price>0),i={...t,title:t.title||`Название товара`,short:t.short||`Строка на карточке`,sizes:r?t.sizes.filter(e=>e.price>0):[{label:``,price:0}],cut:t.cut||t.photos[0]||`img/cut/olivia-orange.webp`,colors:t.colors.filter(e=>e.name)};e.innerHTML=n(i,!1),e.classList.toggle(`is-ghost`,!t.cut&&!t.photos.length)}function Z(e){M=e;let t=x(`[data-dirty-t]`,E);t&&(t.textContent=e?`Есть несохранённые изменения`:j?`Изменений нет`:`Новый товар ещё не сохранён`,t.classList.toggle(`on`,e))}function se(e,t,n){let r=t.split(`.`),i=r.pop(),a=r.reduce((e,t)=>e[/^\d+$/.test(t)?Number(t):t],e);a[/^\d+$/.test(i)?Number(i):i]=n}E.addEventListener(`input`,e=>{let t=e.target;if(!A||!t.closest(`[data-edit]`))return;let n=t.dataset.f;if(n){let e=t.type===`checkbox`?t.checked:t.value;if(n.endsWith(`.price`)){let n=t.value.replace(/\D/g,``).slice(0,8);t.value=n?Number(n).toLocaleString(`ru-RU`):``,e=Number(n)||0}if(n===`id`&&(t.value=t.value.toLowerCase().replace(/[^a-z0-9-]/g,``),e=t.value,t.dataset.touched=`1`),se(A,n,e),n===`title`&&!j){let t=x(`[data-f="id"]`,E);t.dataset.touched||(t.value=ie(String(e)),A.id=t.value)}(n===`id`||n===`title`)&&(x(`[data-slug-view]`,E).textContent=A.id||`…`),n.startsWith(`colors.`)&&n.endsWith(`.hex`)&&t.closest(`.ad-color`).style.setProperty(`--sw`,String(e))}t.matches(`[data-cat]`)&&(A.cats=S(`[data-cat]`,E).filter(e=>e.checked).map(e=>e.value)),Z(!0),X()}),E.addEventListener(`change`,e=>{let t=e.target;A&&t.closest(`[data-edit]`)&&(t.matches(`[data-f="stock"]`)&&(A.stock=t.value,Z(!0)),t.matches(`[data-upload]`)&&ce(t))});async function ce(e){let t=[...e.files??[]];if(!t.length||!A)return;let n=e.dataset.upload;e.closest(`label`)?.classList.add(`is-busy`);let r=n===`photos`?t.slice(0,Math.max(0,12-A.photos.length)):t.slice(0,1);n===`photos`&&r.length<t.length&&F(`В галерее не больше 12 фото — загрузим ${r.length}`,`err`);let i=0;try{for(let e of r){let t=await b.upload(e);n===`cut`?A.cut=t:n===`photos`?A.photos.push(t):n.startsWith(`color:`)&&(A.colors[Number(n.split(`:`)[1])].img=t),i++}i&&F(i>1?`Фото загружены`:`Фото загружено`)}catch(e){L(e)}finally{i&&Z(!0),(location.hash.startsWith(`#edit`)||location.hash.startsWith(`#new`))&&Y()}}E.addEventListener(`click`,e=>{let t=e.target;if(!A||!t.closest(`[data-edit]`))return;let n=t.closest(`[data-add-row]`);if(n){let e=n.dataset.addRow,t={sizes:20,colors:24,features:8}[e]??0;if(A[e].length>=t)return F(`Не больше ${t}`,`err`);e===`sizes`&&A.sizes.push({label:``,price:0}),e===`colors`&&A.colors.push({name:``,hex:`#c9b8a6`}),e===`features`&&A.features.push(``),Z(!0);let r=A[e].length-1;Y(e===`sizes`?`sizes.${r}.label`:e===`colors`?`colors.${r}.name`:`features.${r}`);return}let r=t.closest(`[data-rm]`);if(r){let[e,t]=r.dataset.rm.split(`.`);A[e].splice(Number(t),1),Z(!0),Y();return}let i=t.closest(`[data-color-img]`);if(i){let e=A.colors[Number(i.dataset.colorImg)];i.dataset.path?e.img=i.dataset.path:delete e.img,Z(!0),Y();return}let a=t.closest(`[data-ph]`);if(a){let e=Number(a.dataset.ph),t=e+Number(a.dataset.dir);[A.photos[e],A.photos[t]]=[A.photos[t],A.photos[e]],Z(!0),Y();return}let o=t.closest(`[data-ph-x]`);o&&(A.photos.splice(Number(o.dataset.phX),1),Z(!0),Y())}),E.addEventListener(`submit`,async e=>{if(e.preventDefault(),!A)return;let t=B(A);t.title=t.title.trim(),t.sizes=t.sizes.filter(e=>e.label.trim()),t.colors=t.colors.filter(e=>e.name.trim()),t.features=t.features.map(e=>e.trim()).filter(Boolean),t.badge?.trim()||delete t.badge;let n=t.title?/^[a-z0-9][a-z0-9-]{1,39}$/.test(t.id)?t.sizes.length?t.sizes.some(e=>!(e.price>0))?[`У каждого размера должна быть цена`,`sizes.${t.sizes.findIndex(e=>!(e.price>0))}.price`]:new Set(t.sizes.map(e=>e.label.trim())).size===t.sizes.length?new Set(t.colors.map(e=>e.name.trim())).size===t.colors.length?!t.cut&&!t.photos.length?[`Загрузите хотя бы одну картинку`,``]:null:[`Названия цветов повторяются`,``]:[`Размеры повторяются`,``]:[`Нужен хотя бы один размер`,`sizes.0.label`]:[`Адрес страницы: латиница, цифры и дефис, от 2 символов`,`id`]:[`Нужно название`,`title`];if(n){F(n[0],`err`);let e=n[1]&&x(`[data-f="${n[1]}"]`,E);e&&(e.focus(),e.setAttribute(`aria-invalid`,`true`),e.addEventListener(`input`,()=>e.removeAttribute(`aria-invalid`),{once:!0}));return}t.cut||=t.photos[0];let r=x(`[data-save]`,E);r.disabled=!0;try{D=await b.save(t,j);let e=!j;j=t.id,A=B(D.find(e=>e.id===t.id)??t),M=!1,F(e?`Товар добавлен на сайт`:`Сохранено — на сайте уже новая версия`),history.replaceState(null,``,`#edit/${encodeURIComponent(t.id)}`),W=location.hash,Y()}catch(e){L(e)}finally{r.disabled=!1}});var Q={new:`Новый`,work:`В работе`,done:`Выполнен`,cancel:`Отменён`};async function $(){E.innerHTML=`<div class="ad-head"><div><h1>Заказы</h1><p class="ad-sub">Загружаем…</p></div></div>`;try{({orders:O,max:k}=await b.orders())}catch(e){L(e)}K();let t=O.filter(e=>e.status===`new`).length;E.innerHTML=`<div class="ad-head">
  <div><h1>Заказы</h1><p class="ad-sub tnum">${O.length?`${O.length} всего · ${t} новых`:`Пока нет`}</p></div>
</div>
${k?``:`<div class="ad-note">${f(`max`)}<p><b>MAX ещё не подключён.</b> Заказы сохраняются здесь, а в мессенджер не приходят. В демо-версии это нормально.</p></div>`}
${O.length?`<ul class="ad-orders" role="list">${O.map(t=>`<li class="ad-order st-${t.status}" data-num="${r(t.number)}">
  <details>
    <summary>
      <span class="ad-o-num tnum">№${r(t.number)}</span>
      <span class="ad-o-who"><b>${r(t.name)}</b><small class="tnum">${r(t.created)} · ${r(t.phone)}</small></span>
      <span class="ad-o-sum tnum">${e(t.total)}</span>
      <span class="ad-o-st">${Q[t.status]}</span>
      ${f(`chev-r`,`ad-o-chev`)}
    </summary>
    <div class="ad-o-body">
      <ul class="ad-o-items" role="list">${t.items.map(t=>`<li><span>${r(t.title)} <small>${r([t.size,t.color].filter(Boolean).join(` · `))}</small></span><span class="tnum">${t.qty} × ${e(t.price)}</span><b class="tnum">${e(t.sum)}</b></li>`).join(``)}</ul>
      <dl class="ad-o-info">
        <div><dt>Связаться</dt><dd>${r(t.contact)} · <a href="tel:+${r(t.phone.replace(/\D/g,``))}">${r(t.phone)}</a></dd></div>
        <div><dt>${r(t.delivery)}</dt><dd>${r(t.address||`—`)}</dd></div>
        ${t.comment?`<div><dt>Комментарий</dt><dd>${r(t.comment)}</dd></div>`:``}
        <div><dt>Уведомление</dt><dd>${t.notified?.length?`Отправлено: ${t.notified.map(e=>({max:`MAX`,telegram:`Telegram`,email:`почта`})[e]??e).join(`, `)}`:`Никуда не отправлено`}</dd></div>
      </dl>
      <div class="ad-o-act">
        <div class="ad-seg" role="group" aria-label="Статус">${Object.keys(Q).map(e=>`<button type="button" data-status="${e}" aria-pressed="${e===t.status}">${Q[e]}</button>`).join(``)}</div>
        <button type="button" class="btn btn-soft btn-sm" data-copy>${f(`copy`)}Скопировать текст</button>
        ${t.notified?.length?``:`<button type="button" class="btn btn-dark btn-sm" data-resend>${f(`send`)}Отправить в MAX</button>`}
      </div>
    </div>
  </details>
</li>`).join(``)}</ul>`:`<div class="ad-empty"><p>Заказов пока нет. Когда покупатель оформит корзину, заказ появится здесь${k?` и придёт в MAX`:``}.</p>${`<a class="btn btn-orange" href="${i(`catalog/`)}" target="_blank" rel="noopener">Оформить тестовый заказ ${f(`arrow-ur`)}</a>`}</div>`}`}E.addEventListener(`click`,async e=>{let t=e.target,n=t.closest(`.ad-order`);if(!n)return;let r=O.find(e=>e.number===n.dataset.num),i=t.closest(`[data-status]`);if(i){let e=i.dataset.status;try{await b.status(r.number,e),r.status=e,n.className=`ad-order st-${e}`,S(`[data-status]`,n).forEach(e=>e.setAttribute(`aria-pressed`,String(e===i))),x(`.ad-o-st`,n).textContent=Q[e],K()}catch(e){L(e)}}else if(t.closest(`[data-copy]`))try{await navigator.clipboard.writeText(p(r)),F(`Текст заказа скопирован — можно переслать менеджеру`)}catch{F(`Браузер не дал скопировать текст`,`err`)}else if(t.closest(`[data-resend]`))try{await b.resend(r.number),F(`Заказ отправлен в MAX`),$()}catch(e){L(e)}});async function le(){let e=x(`[data-guard]`,E);if(!e)return;let t=await fetch(i(`api/data/orders.json`),{cache:`no-store`}).catch(()=>null),n=!!t&&t.ok&&(await t.text()).trim().startsWith(`[`);e.textContent=n?`Файл с заказами открыт из интернета! Передайте разработчику: вынести data_dir за пределы сайта`:`Закрыт от посторонних`,e.classList.toggle(`on`,!n),e.classList.toggle(`bad`,n)}function ue(){E.innerHTML=`<div class="ad-head"><div><h1>Уведомления</h1><p class="ad-sub">Куда приходят заказы и заявки с сайта</p></div></div>
<div class="ad-set">
  <section class="ad-panel ad-max">
    <div class="ad-max-h">
      <span class="ad-max-ic">${f(`max`)}</span>
      <div><h2>Бот в MAX</h2><p class="ad-state${k?` on`:``}">${k?`Подключён — заказы приходят в чат`:`Не подключён`}</p></div>
    </div>
    <ol class="ad-steps">
      <li><b>Проверка бизнеса.</b> Фабрика проходит проверку на business.max.ru (через банк или Госуслуги — обычно в тот же день).</li>
      <li><b>Бот.</b> В кабинете создаём бота «Кровати и Ко» и копируем его токен. Модерация — до 48 часов.</li>
      <li><b>Чат менеджеров.</b> Добавляем бота в чат, куда должны падать заказы, и пишем в чат любое сообщение.</li>
      <li><b>Подключение.</b> Токен и номер чата вписываются в <code>api/config.php</code> на хостинге — это делает разработчик, 5 минут.</li>
    </ol>
    <div class="ad-max-act">
      <button type="button" class="btn btn-dark" data-max-check>${f(`send`)}Проверить связь</button>
      <span class="ad-hint" data-max-out>В демо-версии сервера нет: проверка заработает на хостинге.</span>
    </div>
    <div data-max-chats></div>
  </section>
  <section class="ad-panel">
    <h2>Что приходит менеджеру</h2>
    <p class="ad-hint">Сообщение бота при каждом заказе. Цены сервер пересчитывает по каталогу — подделать сумму из браузера нельзя.</p>
    <div class="bubble"><span class="bubble-who">${f(`max`)}Бот «Кровати и Ко»</span><pre>${r(p({number:`1042`,created:`01.11.2026 14:05`,name:`Анна`,phone:`+7 (900) 123-45-67`,contact:`Написать в MAX`,delivery:`Доставка`,address:`Казань, ул. Баумана, 12, кв. 4`,comment:`Лестница слева`,items:[{title:`Двухъярусная «Домик»`,size:`180×90`,color:`Изумруд`,qty:1,price:31e3,sum:31e3},{title:`Овальная «Оливия»`,size:`160×80`,color:`Терракота`,qty:1,price:27e3,sum:27e3}],total:58e3,status:`new`,notified:[]}))}</pre></div>
  </section>
  
  <section class="ad-panel"><h2>Демо-данные</h2><p class="ad-hint">Вернуть каталог к исходному и удалить тестовые заказы в этом браузере.</p><button type="button" class="btn btn-soft" data-reset>Сбросить демо</button></section>
</div>`,le()}E.addEventListener(`click`,async e=>{let t=e.target;if(t.closest(`[data-max-check]`)){let e=x(`[data-max-out]`,E);e.textContent=`Проверяем…`;let t=await b.max(!0).catch(()=>({ok:!1,error:`Сервер не ответил`}));if(!t.ok){e.textContent=t.error??`Не получилось`;return}e.textContent=`Бот «${t.bot}» на связи.${t.sent?` Тестовое сообщение отправлено.`:t.ready?` Сообщение не ушло — проверьте номер чата.`:` Чат для заказов ещё не указан.`}`,x(`[data-max-chats]`,E).innerHTML=t.chats?.length?`<p class="ad-lbl">Чаты бота — номер нужного впишите в config.php (max.chat_id)</p><ul class="ad-chats" role="list">${t.chats.map(e=>`<li><b>${r(e.title)}</b><code>${r(e.id)}</code></li>`).join(``)}</ul>`:`<p class="ad-hint">Бот пока ни в одном чате. Добавьте его в чат менеджеров и нажмите «Проверить связь» ещё раз.</p>`}else if(t.closest(`[data-reset]`)){if(!await z(`Сбросить демо-данные?`,`Каталог вернётся к исходному, тестовые заказы удалятся.`,`Сбросить`))return;te(),D=await b.products(),O=[],K(),F(`Демо сброшено`)}}),oe();