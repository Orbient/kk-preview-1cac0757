import{C as e,S as t,a as n,f as r,g as i,h as a,n as o,p as s,r as c,s as l,v as u,w as d,y as f}from"./data.BijB8GdK.js";import{t as p}from"./order-text.BN9bIG5h.js";var m=class extends Error{auth=!1},h=`krovati:demo-admin`,g=()=>n(),_=e=>{if(!l.set(`krovati:demo-catalog`,e))throw new m(`Браузер не даёт сохранить: в демо место под фото ограничено, удалите пару загруженных`);return e},v=e=>new Promise(t=>setTimeout(()=>t(e),250));function ee(e,t,n){return/^image\/(jpeg|png|webp)$/.test(e.type)?new Promise((r,i)=>{let a=new Image;a.onload=()=>{let e=Math.min(1,t/Math.max(a.width,a.height)),o=Object.assign(document.createElement(`canvas`),{width:Math.round(a.width*e),height:Math.round(a.height*e)});o.getContext(`2d`).drawImage(a,0,0,o.width,o.height),URL.revokeObjectURL(a.src),o.toBlob(e=>e?r(e):i(new m(`Не получилось обработать фото`)),`image/webp`,n)},a.onerror=()=>i(new m(`Не получилось открыть фото — нужен JPG, PNG или WebP`)),a.src=URL.createObjectURL(e)}):Promise.reject(new m(`Нужна картинка JPG, PNG или WebP`))}var te=e=>new Promise(t=>{let n=new FileReader;n.onload=()=>t(String(n.result)),n.readAsDataURL(e)}),y={me:()=>v({ok:l.get(h,!1),max:!1}),async login(e,t){if(await v(0),e.trim()!==`admin`||t!==`admin`)throw new m(`Неверный логин или пароль`);l.set(h,!0)},logout:async()=>void l.set(h,!1),products:()=>v(g()),async save(e,t){let n=g();if(n.some(n=>n.id===e.id&&n.id!==t))throw new m(`Товар с таким адресом уже есть`);let r=n.findIndex(e=>e.id===t);return r<0?n.unshift(e):n[r]=e,v(_(n))},remove:async e=>v(_(g().filter(t=>t.id!==e))),reorder:async e=>v(_([...g()].sort((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)))),upload:async e=>te(await ee(e,1200,.82)),uploadVideo:async()=>{throw new m(`В демо-версии видео не сохраняется — на рабочем сайте оно загрузится на сервер`)},orders:()=>v({orders:l.get(c,[]),leads:[],max:!1}),async status(e,t){l.set(c,l.get(c,[]).map(n=>n.number===e?{...n,status:t}:n))},async resend(){throw new m(`В демо-версии MAX не подключён — на рабочем сайте заказ уйдёт боту`)},max:()=>v({ok:!1,error:`В демо-версии сервера нет — проверка MAX заработает на хостинге`,ready:!1})},ne=()=>{l.set(o,null),localStorage.removeItem(o),localStorage.removeItem(c)},b=(e,t=document)=>t.querySelector(e),x=(e,t=document)=>[...t.querySelectorAll(e)],S=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,C=b(`[data-login]`),w=b(`[data-app]`),T=b(`[data-view]`),E=[],D=[],O=[],k=!1,A=null,j=``,M=!1,N=``,P=b(`[data-toast]`),F=0;function I(e,n=`ok`){P.innerHTML=`<span class="toast-ic${n===`err`?` is-err`:``}">${t(n===`ok`?`check`:`close`)}</span><span>${s(e)}</span>`,P.hidden=!1,clearTimeout(F),S()||d.fromTo(P,{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,ease:`expo.out`}),F=window.setTimeout(()=>P.hidden=!0,n===`err`?6e3:3200)}var L=`krovati:admin-draft`;function R(e){e instanceof m&&e.auth&&(A&&M&&sessionStorage.setItem(L,JSON.stringify({draft:A,original:j,hash:location.hash})),M=!1,W()),I(e instanceof m?e.message:`Что-то пошло не так. Попробуйте ещё раз`,`err`)}var z=b(`[data-confirm]`);function B(e,t,n=`Удалить`){return b(`[data-confirm-text]`,z).textContent=e,b(`[data-confirm-sub]`,z).textContent=t,b(`[data-confirm-yes]`,z).textContent=n,z.returnValue=``,z.showModal(),new Promise(e=>z.addEventListener(`close`,()=>e(z.returnValue===`yes`),{once:!0}))}var re=e=>{let t=e.sizes.map(e=>e.price),n=Math.min(...t),r=Math.max(...t);return n===r?u(n):`${u(n).replace(/ ₽$/,``)} – ${u(r)}`},ie={а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,е:`e`,ё:`e`,ж:`zh`,з:`z`,и:`i`,й:`y`,к:`k`,л:`l`,м:`m`,н:`n`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,у:`u`,ф:`f`,х:`h`,ц:`c`,ч:`ch`,ш:`sh`,щ:`sch`,ъ:``,ы:`y`,ь:``,э:`e`,ю:`yu`,я:`ya`},ae=e=>e.toLowerCase().split(``).map(e=>ie[e]??e).join(``).replace(/[^a-z0-9]+/g,`-`).slice(0,40).replace(/^-+|-+$/g,``),oe=()=>({id:``,title:``,short:``,description:``,cats:[],cut:``,photos:[],sizes:[{label:``,price:0}],colors:[],features:[],stock:`in`,active:!0}),V=e=>JSON.parse(JSON.stringify(e)),se=e=>e?e.toLocaleString(`ru-RU`):``,H=(e,t,n,r)=>{let i=e%10,a=e%100;return i===1&&a!==11?t:i>=2&&i<=4&&(a<12||a>14)?n:r},U=e=>e.sizes.map(t=>({label:t.label,price:Math.min(...Object.values(e.prices).flatMap(e=>Object.values(e).map(e=>e[t.key]??1/0)))})).filter(e=>Number.isFinite(e.price));function ce(e){let t=(t,n)=>e.sizes.some(r=>e.prices[t]?.[n]?.[r.key]);if(!t(e.def.variant,e.def.frame)){for(let n of e.variants)for(let r of e.frames)if(t(n.key,r.key))return void Object.assign(e.def,{variant:n.key,frame:r.key})}}async function le(){let e=await y.me().catch(()=>({ok:!1,max:!1}));if(!e.ok)return W();k=!!e.max,K()}function W(){w.hidden=!0,C.hidden=!1,b(`[name="login"]`,C).focus(),S()||d.from(`.ad-login-card`,{y:30,autoAlpha:0,duration:.9,ease:`expo.out`})}var G=b(`[data-login-form]`);G.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(G),n=b(`[data-login-err]`,G),r=b(`[data-login-label]`,G),i=b(`button[type="submit"]`,G);if(n.textContent=``,!t.get(`login`)||!t.get(`password`))return void(n.textContent=`Введите логин и пароль`);i.disabled=!0,r.textContent=`Входим…`;try{await y.login(String(t.get(`login`)),String(t.get(`password`))),k=!!(await y.me()).max,G.reset(),K()}catch(e){n.textContent=e instanceof m?e.message:`Сервер не ответил. Попробуйте ещё раз`,S()||d.fromTo(`.ad-login-card`,{x:-8},{x:0,duration:.6,ease:`elastic.out(1, 0.3)`})}finally{i.disabled=!1,r.textContent=`Войти`}}),b(`[data-eye]`).addEventListener(`click`,e=>{let n=e.currentTarget,r=b(`[name="password"]`,G),i=r.type===`password`;r.type=i?`text`:`password`,n.innerHTML=t(i?`eye-off`:`eye`),n.setAttribute(`aria-label`,i?`Скрыть пароль`:`Показать пароль`)}),b(`[data-logout]`).addEventListener(`click`,async()=>{(!M||await B(`Выйти без сохранения?`,`Изменения в товаре пропадут.`,`Выйти`))&&(M=!1,await y.logout().catch(()=>{}),location.hash=``,W())});async function K(){C.hidden=!0,w.hidden=!1;try{[E,{orders:D,max:k}]=await Promise.all([y.products(),y.orders()])}catch(e){R(e)}J(),ue()}var q=location.hash;addEventListener(`hashchange`,async()=>{if(M&&!location.hash.startsWith(`#edit`)&&!location.hash.startsWith(`#new`)){let e=location.hash;if(history.replaceState(null,``,q),!await B(`Уйти без сохранения?`,`Изменения в товаре пропадут.`,`Уйти`))return;M=!1,location.hash=e}else ue()}),addEventListener(`beforeunload`,e=>{M&&e.preventDefault()});function ue(){if(w.hidden)return;let e=location.hash.slice(1);q=location.hash;let[t,n]=e.split(`/`);x(`[data-tab]`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===(t===`edit`||t===`new`?`products`:t||`products`))),t===`orders`?ge():t===`settings`?ve():t===`new`?de(null):t===`edit`?de(decodeURIComponent(n??``)):Y(),scrollTo(0,0),S()||d.fromTo(T,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,ease:`expo.out`})}function J(){let e=D.filter(e=>e.status===`new`).length,t=b(`[data-new-count]`);t.textContent=String(e),t.hidden=e===0}function Y(){let n=E.filter(e=>e.active).length;T.innerHTML=`<div class="ad-head">
  <div><h1>Товары</h1><p class="ad-sub tnum">${E.length} в каталоге · ${n} на сайте</p></div>
  <a class="btn btn-orange" href="#new">${t(`plus`)}Добавить товар</a>
</div>
${E.length?`<ul class="ad-list" role="list">${E.map((n,r)=>`<li class="ad-row${n.active?``:` is-off`}" data-id="${s(n.id)}">
  <div class="ad-move">
    <button type="button" data-move="-1" aria-label="Выше"${r===0?` disabled`:``}>${t(`arrow-u`)}</button>
    <button type="button" data-move="1" aria-label="Ниже"${r===E.length-1?` disabled`:``}>${t(`arrow-d`)}</button>
  </div>
  <a class="ad-thumb" href="#edit/${encodeURIComponent(n.id)}" tabindex="-1"><img src="${s(f(n.cut))}" alt="" loading="lazy" /></a>
  <a class="ad-row-main" href="#edit/${encodeURIComponent(n.id)}">
    <b>${s(n.title)}</b>
    <span>${s(n.cats.map(t=>e.find(e=>e.id===t)?.label).filter(Boolean).join(`, `)||`Без типа`)} · ${n.sizes.length} ${n.sizes.length===1?`размер`:n.sizes.length<5?`размера`:`размеров`} · ${n.colors.length} цв.</span>
  </a>
  <span class="ad-row-price tnum">${re(n)}</span>
  <label class="ad-switch" title="${n.active?`Скрыть с сайта`:`Показать на сайте`}">
    <input type="checkbox" data-active${n.active?` checked`:``} /><span></span><em>${n.active?`На сайте`:`Скрыт`}</em>
  </label>
  <div class="ad-act">
    <a class="ad-ico" href="#edit/${encodeURIComponent(n.id)}" aria-label="Изменить">${t(`edit`)}</a>
    <button type="button" class="ad-ico" data-dup aria-label="Сделать копию">${t(`dup`)}</button>
    <button type="button" class="ad-ico ad-del" data-del aria-label="Удалить">${t(`trash`)}</button>
  </div>
</li>`).join(``)}</ul>`:`<div class="ad-empty"><p>Каталог пуст. Добавьте первую модель — она сразу появится на сайте.</p><a class="btn btn-orange" href="#new">${t(`plus`)}Добавить товар</a></div>`}`}T.addEventListener(`click`,async e=>{let t=e.target,n=t.closest(`.ad-row`);if(!n)return;let r=n.dataset.id,i=E.find(e=>e.id===r),a=t.closest(`[data-move]`);if(a){let e=E.indexOf(i),t=e+Number(a.dataset.move),n=E.map(e=>e.id);[n[e],n[t]]=[n[t],n[e]];try{E=await y.reorder(n),Y();let e=b(`.ad-row[data-id="${CSS.escape(r)}"]`,T);e&&!S()&&d.fromTo(e,{backgroundColor:`#ffe1c9`},{backgroundColor:`#ffffff`,duration:1.2,clearProps:`backgroundColor`}),b(`.ad-row[data-id="${CSS.escape(r)}"] [data-move="${a.dataset.move}"]`,T)?.focus()}catch(e){R(e)}}else if(t.closest(`[data-dup]`)){let e=V(i),t=i.id.slice(0,36).replace(/-+$/,``),n=2;for(;E.some(e=>e.id===`${t}-${n}`);)n++;e.id=`${t}-${n}`,e.title=`${i.title} (копия)`,e.active=!1;try{E=await y.save(e,``),I(`Копия создана и скрыта с сайта — поправьте и включите`),Y()}catch(e){R(e)}}else if(t.closest(`[data-del]`)){if(!await B(`Удалить «${i.title}»?`,`Товар пропадёт с сайта и из каталога. Если он может вернуться — лучше просто скройте его переключателем.`))return;try{E=await y.remove(r),I(`Товар удалён`),Y()}catch(e){R(e)}}}),T.addEventListener(`change`,async e=>{let t=e.target;if(!t.matches(`[data-active]`))return;let n=t.closest(`.ad-row`).dataset.id,r=V(E.find(e=>e.id===n));r.active=t.checked;try{E=await y.save(r,n),I(r.active?`Товар снова на сайте`:`Товар скрыт с сайта`),Y()}catch(e){t.checked=!t.checked,R(e)}});function de(e){let t=JSON.parse(sessionStorage.getItem(L)||`null`);if(sessionStorage.removeItem(L),t&&t.hash===location.hash)return A=t.draft,j=t.original,M=!0,X(),I(`Вернули несохранённые правки — нажмите «Сохранить»`);let n=e?E.find(t=>t.id===e):null;if(e&&!n)return void(location.hash=`#products`);A=n?V(n):oe(),j=n?.id??``,M=!1,N=A.matrix?.def.variant??``,X()}function X(n){let r=A,o=!j,c=[r.cut,...r.photos].filter(Boolean);T.innerHTML=`<form class="ad-edit" data-edit novalidate>
<div class="ad-head">
  <div><a class="ad-crumb" href="#products">${t(`chev-l`)}Товары</a><h1>${o?`Новый товар`:s(r.title||`Без названия`)}</h1></div>
  ${o?``:`<a class="ad-link" href="${a(r)}" target="_blank" rel="noopener">Открыть на сайте ${t(`arrow-ur`)}</a>`}
</div>
<div class="ad-cols">
  <div class="ad-form">
    <section class="ad-panel">
      <h2>Основное</h2>
      <label class="ad-fld"><span>Название</span><input data-f="title" value="${s(r.title)}" maxlength="80" placeholder="Двухъярусная «Домик»" required /></label>
      <label class="ad-fld"><span>Адрес страницы <i>${s(i(`catalog/`))}<b data-slug-view>${s(r.id||`…`)}</b>/</i></span><input data-f="id" value="${s(r.id)}" maxlength="40" placeholder="domik" pattern="[a-z0-9-]+" autocapitalize="off" spellcheck="false" /></label>
      <label class="ad-fld"><span>Строка на карточке</span><input data-f="short" value="${s(r.short)}" maxlength="140" placeholder="Главное в одной строке: материал, особенность" /></label>
      <label class="ad-fld"><span>Описание <i>абзацы — через пустую строку</i></span><textarea data-f="description" rows="6" maxlength="3000">${s(r.description)}</textarea></label>
      <div class="ad-fld"><span>Тип кровати <i>в каком фильтре каталога показывать</i></span>
        <div class="ad-chips">${e.map(e=>`<label class="ad-chip"><input type="checkbox" data-cat value="${e.id}"${r.cats.includes(e.id)?` checked`:``} /><span>${e.label}</span></label>`).join(``)}</div>
      </div>
      <div class="ad-two">
        <label class="ad-fld"><span>Наличие</span><span class="ad-sel"><select data-f="stock"><option value="in"${r.stock===`in`?` selected`:``}>В наличии на складе</option><option value="order"${r.stock===`order`?` selected`:``}>Под заказ</option></select>${t(`chev-r`)}</span></label>
        <label class="ad-fld"><span>Метка на карточке <i>необязательно</i></span><input data-f="badge" value="${s(r.badge??``)}" maxlength="24" placeholder="Хит, Новинка" /></label>
      </div>
      <div class="ad-two">
        <label class="ad-fld"><span>Общая высота, см <i>для двухъярусных и чердаков</i></span><input data-f="height" type="number" inputmode="numeric" min="50" max="300" value="${r.height??``}" placeholder="Например, 180" /></label>
        <label class="ad-fld"><span>Ламели верхнего яруса от пола, см <i>включает проверку потолка</i></span><input data-f="upper" type="number" inputmode="numeric" min="50" max="250" value="${r.upper??``}" placeholder="Например, 130" /></label>
      </div>
      <label class="ad-fld"><span>Сертификат <i>ссылка на запись в реестре pub.fsa.gov.ru — если у модели свой сертификат, иначе берётся общий</i></span><input data-f="cert" type="url" value="${s(r.cert??``)}" maxlength="300" placeholder="https://pub.fsa.gov.ru/rss/certificate/view/…" inputmode="url" autocapitalize="off" spellcheck="false" /></label>
      <label class="ad-switch ad-switch-lg"><input type="checkbox" data-f="active"${r.active?` checked`:``} /><span></span><em>Показывать на сайте</em></label>
      <label class="ad-switch ad-switch-lg"><input type="checkbox" data-f="pending"${r.pending?` checked`:``} /><span></span><em>Цена уточняется <i>вместо цены и корзины — «Узнать цену»</i></em></label>
    </section>

    ${r.matrix?fe(r.matrix):`<section class="ad-panel">
      <h2>Размеры и цены</h2>
      <p class="ad-hint">Первый размер показывается на странице товара выбранным. На карточке — самая низкая цена «от».</p>
      <div class="ad-rows">${r.sizes.map((e,n)=>`<div class="ad-rowf">
  <label class="ad-fld"><span class="${n?`sr-only`:``}">Размер, см</span><input data-f="sizes.${n}.label" value="${s(e.label)}" maxlength="24" placeholder="180×90" /></label>
  <label class="ad-fld ad-money"><span class="${n?`sr-only`:``}">Цена</span><input data-f="sizes.${n}.price" value="${e.price?e.price.toLocaleString(`ru-RU`):``}" inputmode="numeric" placeholder="31000" class="tnum" /><em>₽</em></label>
  <button type="button" class="ad-ico ad-del" data-rm="sizes.${n}" aria-label="Убрать размер"${r.sizes.length===1?` disabled`:``}>${t(`close`)}</button>
</div>`).join(``)}</div>
      ${r.sizes.length<20?`<button type="button" class="ad-add" data-add-row="sizes">${t(`plus`)}Добавить размер</button>`:`<p class="ad-hint">Это максимум — 20 размеров.</p>`}
    </section>

    <section class="ad-panel">
      <h2>Цвета</h2>
      <p class="ad-hint">Цвета каркаса или ткани — кружки на карточке. Фото цвета показывается, когда покупатель нажимает на этот цвет. Пока цвет не выбран, везде главная картинка из блока «Фото».</p>
      <div class="ad-rows">${r.colors.map((e,n)=>`<div class="ad-rowf ad-rowc">
  <label class="ad-color" style="--sw:${s(e.hex)}"><input type="color" data-f="colors.${n}.hex" value="${s(e.hex)}" aria-label="Цвет" /></label>
  <label class="ad-fld"><span class="sr-only">Название цвета</span><input data-f="colors.${n}.name" value="${s(e.name)}" maxlength="30" placeholder="Изумруд" /></label>
  <details class="ad-pick">
    <summary>${e.img?`<img src="${s(f(e.img))}" alt="" />`:t(`upload`)}<span>${e.img?`Фото цвета`:`Без фото`}</span></summary>
    <div class="ad-pick-pop">
      ${c.map(t=>`<button type="button" data-color-img="${n}" data-path="${s(t)}" aria-label="Выбрать это фото"${t===e.img?` aria-pressed="true"`:``}><img src="${s(f(t))}" alt="" /></button>`).join(``)}
      <label class="ad-pick-up">${t(`upload`)}<span>Загрузить</span><input type="file" accept="image/jpeg,image/png,image/webp" data-upload="color:${n}" hidden /></label>
      ${e.img?`<button type="button" class="ad-pick-x" data-color-img="${n}" data-path="">Без фото</button>`:``}
    </div>
  </details>
  <button type="button" class="ad-ico ad-del" data-rm="colors.${n}" aria-label="Убрать цвет">${t(`close`)}</button>
</div>`).join(``)}</div>
      ${r.colors.length<24?`<button type="button" class="ad-add" data-add-row="colors">${t(`plus`)}Добавить цвет</button>`:`<p class="ad-hint">Это максимум — 24 цвета.</p>`}
    </section>`}

    <section class="ad-panel">
      <h2>Фото</h2>
      <div class="ad-photos">
        <div class="ad-cut">
          <span class="ad-lbl">Главная картинка <i>на карточке и первой на странице товара, лучше PNG без фона</i></span>
          <label class="ad-drop${r.cut?` has`:``}">${r.cut?`<img src="${s(f(r.cut))}" alt="" />`:`${t(`upload`)}<span>Загрузить</span>`}<input type="file" accept="image/jpeg,image/png,image/webp" data-upload="cut" hidden /></label>
        </div>
        <div class="ad-gal">
          <span class="ad-lbl">Галерея на странице товара <i>${r.photos.length} из 12</i></span>
          <div class="ad-gal-grid">
            ${r.photos.map((e,n)=>`<figure class="ad-ph"><img src="${s(f(e))}" alt="" />
  <div class="ad-ph-act">
    <button type="button" data-ph="${n}" data-dir="-1" aria-label="Левее"${n===0?` disabled`:``}>${t(`chev-l`)}</button>
    <button type="button" data-ph="${n}" data-dir="1" aria-label="Правее"${n===r.photos.length-1?` disabled`:``}>${t(`chev-r`)}</button>
    <button type="button" data-ph-x="${n}" aria-label="Убрать фото">${t(`trash`)}</button>
  </div></figure>`).join(``)}
            ${r.photos.length<12?`<label class="ad-drop ad-drop-sm">${t(`plus`)}<span>Добавить фото</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple data-upload="photos" hidden /></label>`:``}
          </div>
        </div>
        <div class="ad-gal">
          <span class="ad-lbl">Видео <i>${(r.videos??[]).length} из 3 · MP4 или WebM до 60 МБ, на странице товара — после фото</i></span>
          <div class="ad-gal-grid">
            ${(r.videos??[]).map((e,n)=>`<figure class="ad-ph ad-vid"><video src="${s(f(e))}#t=0.5" muted playsinline preload="metadata"></video>
  <div class="ad-ph-act">
    <button type="button" data-vid-x="${n}" aria-label="Убрать видео">${t(`trash`)}</button>
  </div></figure>`).join(``)}
            ${(r.videos??[]).length<3?`<label class="ad-drop ad-drop-sm">${t(`plus`)}<span>Добавить видео</span><input type="file" accept="video/mp4,video/webm" data-upload="videos" hidden /></label>`:``}
          </div>
        </div>
      </div>
    </section>

    <section class="ad-panel">
      <h2>Особенности</h2>
      <p class="ad-hint">До 8 коротких пунктов с галочкой на странице товара.</p>
      <div class="ad-rows">${r.features.map((e,n)=>`<div class="ad-rowf ad-rowt"><label class="ad-fld"><span class="sr-only">Пункт ${n+1}</span><input data-f="features.${n}" value="${s(e)}" maxlength="60" placeholder="Массив берёзы" /></label><button type="button" class="ad-ico ad-del" data-rm="features.${n}" aria-label="Убрать пункт">${t(`close`)}</button></div>`).join(``)}</div>
      ${r.features.length<8?`<button type="button" class="ad-add" data-add-row="features">${t(`plus`)}Добавить пункт</button>`:``}
    </section>
  </div>

  <aside class="ad-preview" aria-label="Превью карточки">
    <span class="ad-lbl">Так карточка выглядит на сайте</span>
    <div class="ad-card" data-preview></div>
  </aside>
</div>

<div class="ad-save">
  <p class="ad-save-t" data-dirty-t>${o?`Новый товар ещё не сохранён`:`Изменений нет`}</p>
  <a class="btn btn-soft" href="#products">Отмена</a>
  <button type="submit" class="btn btn-orange" data-save>${t(`check`)}<span>Сохранить</span></button>
</div>
</form>`,Z(),Q(M),n&&b(`[data-f="${n}"]`,T)?.focus()}function fe(e){let t=e.variants.some(e=>e.key===N)?N:e.def.variant,n=t=>Object.values(e.prices[t]??{}).reduce((e,t)=>e+Object.keys(t).length,0),r=(e,t=!1)=>`<span class="ad-mx-sw${t&&!e?` is-wood`:``}" style="--sw:${s(e||`#d9b98c`)}"></span>`;return`<section class="ad-panel">
      <h2>Цены</h2>
      <p class="ad-hint">Цена зависит от ${e.variants.length>1?`исполнения, `:``}цвета${e.frames.length>1?` каркаса`:``} и размера${e.fabrics.length?`, ткань на цену не влияет`:``}. Пустая клетка — такого сочетания нет: покупатель не сможет его выбрать. На карточке — самая низкая цена «от».</p>
      ${e.variants.length>1?`<div class="ad-fld"><span>Исполнение</span><div class="ad-chips">${e.variants.map(e=>`<button type="button" class="ad-chip-b" data-mx-var="${s(e.key)}" aria-pressed="${e.key===t}">${s(e.name)} <small class="tnum">${n(e.key)}</small></button>`).join(``)}</div></div>`:``}
      <div class="ad-mx"><table>
        <thead><tr><th scope="col">${e.sizeTitle.startsWith(`Размер`)?`Размер`:s(e.sizeTitle.replace(/, (см|мм)$/,``))}</th>${e.frames.map(e=>`<th scope="col">${r(e.hex,!0)}${s(e.name)}</th>`).join(``)}</tr></thead>
        <tbody>${e.sizes.map(n=>`<tr><th scope="row" class="tnum">${s(n.label)}</th>${e.frames.map(r=>`<td><input data-mx data-v="${s(t)}" data-fr="${s(r.key)}" data-s="${s(n.key)}" value="${se(e.prices[t]?.[r.key]?.[n.key])}" inputmode="numeric" class="tnum" placeholder="—" aria-label="${s(`${n.label}, ${r.name}`)}" /></td>`).join(``)}</tr>`).join(``)}</tbody>
      </table></div>
      ${e.frames.length>1?`<p class="ad-hint ad-mx-more">Цвета не помещаются — листайте таблицу вбок →</p>`:``}
      <label class="ad-fld"><span>Опции и пометки <i>по строке; «Доп. опция: ящики — от 3 530 ₽» попадёт на сайте в блок «Можно добавить»</i></span><textarea data-mx-extras rows="4" maxlength="1000">${s((e.extras??[]).join(`
`))}</textarea></label>
    </section>

    <section class="ad-panel">
      <h2>Цвета и ткани</h2>
      <p class="ad-hint">Набор цветов и фото к ним — из прайса и съёмки производства. Новый цвет каркаса или ткани добавляет разработчик вместе с фото.</p>
      <div class="ad-fld"><span>${e.frames.length>1?`Цвет каркаса`:`Цвет`}</span><div class="ad-chips">${e.frames.map(e=>`<span class="ad-chip-ro">${r(e.hex,!0)}${s(e.name)}</span>`).join(``)}</div></div>
      ${e.fabrics.length?`<div class="ad-fld"><span>Ткань — ${e.fabrics.length} ${H(e.fabrics.length,`цвет`,`цвета`,`цветов`)}</span><div class="ad-chips">${e.fabrics.map(e=>`<span class="ad-chip-ro">${r(e.hex)}${s(e.name)}</span>`).join(``)}</div></div>`:``}
    </section>`}function Z(){let e=b(`[data-preview]`,T);if(!e||!A)return;let t=A,n=t.sizes.some(e=>e.price>0),i={...t,title:t.title||`Название товара`,short:t.short||`Строка на карточке`,sizes:n?t.sizes.filter(e=>e.price>0):[{label:``,price:0}],cut:t.cut||t.photos[0]||`img/catalog/lacy-003/800/lacy-003__white__velour-pink.webp`,colors:t.colors.filter(e=>e.name)};e.innerHTML=r(i,!1),e.classList.toggle(`is-ghost`,!t.cut&&!t.photos.length)}function Q(e){M=e;let t=b(`[data-dirty-t]`,T);t&&(t.textContent=e?`Есть несохранённые изменения`:j?`Изменений нет`:`Новый товар ещё не сохранён`,t.classList.toggle(`on`,e))}function pe(e,t,n){let r=t.split(`.`),i=r.pop(),a=r.reduce((e,t)=>e[/^\d+$/.test(t)?Number(t):t],e);a[/^\d+$/.test(i)?Number(i):i]=n}T.addEventListener(`input`,e=>{let t=e.target;if(!A||!t.closest(`[data-edit]`))return;let n=A.matrix;if(n&&t.matches(`[data-mx]`)){let e=t.value.replace(/\D/g,``).slice(0,8);t.value=e?Number(e).toLocaleString(`ru-RU`):``;let{v:r,fr:i,s:a}=t.dataset,o=(n.prices[r]??={})[i]??={};return Number(e)>0?o[a]=Number(e):delete o[a],A.sizes=U(n),Q(!0),Z()}if(n&&t.matches(`[data-mx-extras]`))return n.extras=t.value.split(`
`),Q(!0);let r=t.dataset.f;if(r){let e=t.type===`checkbox`?t.checked:t.value;if(r.endsWith(`.price`)){let n=t.value.replace(/\D/g,``).slice(0,8);t.value=n?Number(n).toLocaleString(`ru-RU`):``,e=Number(n)||0}if(r===`id`&&(t.value=t.value.toLowerCase().replace(/[^a-z0-9-]/g,``),e=t.value,t.dataset.touched=`1`),pe(A,r,e),r===`title`&&!j){let t=b(`[data-f="id"]`,T);t.dataset.touched||(t.value=ae(String(e)),A.id=t.value)}(r===`id`||r===`title`)&&(b(`[data-slug-view]`,T).textContent=A.id||`…`),r.startsWith(`colors.`)&&r.endsWith(`.hex`)&&t.closest(`.ad-color`).style.setProperty(`--sw`,String(e))}t.matches(`[data-cat]`)&&(A.cats=x(`[data-cat]`,T).filter(e=>e.checked).map(e=>e.value)),Q(!0),Z()}),T.addEventListener(`change`,e=>{let t=e.target;A&&t.closest(`[data-edit]`)&&(t.matches(`[data-f="stock"]`)&&(A.stock=t.value,Q(!0)),t.matches(`[data-upload]`)&&me(t))});async function me(e){let t=[...e.files??[]];if(!t.length||!A)return;let n=e.dataset.upload;e.closest(`label`)?.classList.add(`is-busy`);let r=n===`photos`?t.slice(0,Math.max(0,12-A.photos.length)):t.slice(0,1);n===`photos`&&r.length<t.length&&I(`В галерее не больше 12 фото — загрузим ${r.length}`,`err`);let i=0;try{for(let e of r){let t=n===`videos`?await y.uploadVideo(e):await y.upload(e);n===`videos`?(A.videos??=[]).push(t):n===`cut`?A.cut=t:n===`photos`?A.photos.push(t):n.startsWith(`color:`)&&(A.colors[Number(n.split(`:`)[1])].img=t),i++}i&&I(n===`videos`?`Видео загружено — нажмите «Сохранить»`:i>1?`Фото загружены`:`Фото загружено`)}catch(e){R(e)}finally{i&&Q(!0),(location.hash.startsWith(`#edit`)||location.hash.startsWith(`#new`))&&X()}}T.addEventListener(`click`,e=>{let t=e.target;if(!A||!t.closest(`[data-edit]`))return;let n=t.closest(`[data-mx-var]`);if(n)return N=n.dataset.mxVar,X(),b(`[data-mx-var="${CSS.escape(N)}"]`,T)?.focus();let r=t.closest(`[data-add-row]`);if(r){let e=r.dataset.addRow,t={sizes:20,colors:24,features:8}[e]??0;if(A[e].length>=t)return I(`Не больше ${t}`,`err`);e===`sizes`&&A.sizes.push({label:``,price:0}),e===`colors`&&A.colors.push({name:``,hex:`#c9b8a6`}),e===`features`&&A.features.push(``),Q(!0);let n=A[e].length-1;X(e===`sizes`?`sizes.${n}.label`:e===`colors`?`colors.${n}.name`:`features.${n}`);return}let i=t.closest(`[data-rm]`);if(i){let[e,t]=i.dataset.rm.split(`.`);A[e].splice(Number(t),1),Q(!0),X();return}let a=t.closest(`[data-color-img]`);if(a){let e=A.colors[Number(a.dataset.colorImg)];a.dataset.path?e.img=a.dataset.path:delete e.img,Q(!0),X();return}let o=t.closest(`[data-ph]`);if(o){let e=Number(o.dataset.ph),t=e+Number(o.dataset.dir);[A.photos[e],A.photos[t]]=[A.photos[t],A.photos[e]],Q(!0),X();return}let s=t.closest(`[data-vid-x]`);if(s){A.videos?.splice(Number(s.dataset.vidX),1),A.videos?.length||delete A.videos,Q(!0),X();return}let c=t.closest(`[data-ph-x]`);c&&(A.photos.splice(Number(c.dataset.phX),1),Q(!0),X())}),T.addEventListener(`submit`,async e=>{if(e.preventDefault(),!A)return;let t=V(A);t.title=t.title.trim(),t.sizes=t.sizes.filter(e=>e.label.trim()),t.colors=t.colors.filter(e=>e.name.trim()),t.features=t.features.map(e=>e.trim()).filter(Boolean),t.badge?.trim()||delete t.badge;for(let e of[`height`,`upper`]){let n=Math.round(Number(t[e]));n>0?t[e]=n:delete t[e]}t.cert=t.cert?.trim(),t.cert||delete t.cert,t.pending||delete t.pending;let n=t.matrix;n&&(n.extras=(n.extras??[]).map(e=>e.trim()).filter(Boolean).slice(0,8),t.pending?n.pending=!0:delete n.pending,ce(n),t.sizes=U(n));let r=t.title?/^[a-z0-9][a-z0-9-]{1,39}$/.test(t.id)?n&&!t.sizes.length?[`Укажите хотя бы одну цену в таблице`,``]:t.sizes.length?t.sizes.some(e=>!(e.price>0))?[`У каждого размера должна быть цена`,`sizes.${t.sizes.findIndex(e=>!(e.price>0))}.price`]:new Set(t.sizes.map(e=>e.label.trim())).size===t.sizes.length?new Set(t.colors.map(e=>e.name.trim())).size===t.colors.length?!t.cut&&!t.photos.length?[`Загрузите хотя бы одну картинку`,``]:null:[`Названия цветов повторяются`,``]:[`Размеры повторяются`,``]:[`Нужен хотя бы один размер`,`sizes.0.label`]:[`Адрес страницы: латиница, цифры и дефис, от 2 символов`,`id`]:[`Нужно название`,`title`];if(r){I(r[0],`err`);let e=r[1]&&b(`[data-f="${r[1]}"]`,T);e&&(e.focus(),e.setAttribute(`aria-invalid`,`true`),e.addEventListener(`input`,()=>e.removeAttribute(`aria-invalid`),{once:!0}));return}t.cut||=t.photos[0];let i=b(`[data-save]`,T);i.disabled=!0;try{E=await y.save(t,j);let e=!j;j=t.id,A=V(E.find(e=>e.id===t.id)??t),M=!1,I(e?`Товар добавлен на сайт`:`Сохранено — на сайте уже новая версия`),history.replaceState(null,``,`#edit/${encodeURIComponent(t.id)}`),q=location.hash,X()}catch(e){R(e)}finally{i.disabled=!1}});var $={new:`Новый`,work:`В работе`,done:`Выполнен`,cancel:`Отменён`};function he(){let e=D.filter(e=>e.status===`new`).length;return D.length?`${D.length} всего · ${e} ${H(e,`новый`,`новых`,`новых`)}`:`Пока нет`}async function ge(){T.innerHTML=`<div class="ad-head"><div><h1>Заказы</h1><p class="ad-sub">Загружаем…</p></div></div>`;try{({orders:D,leads:O=[],max:k}=await y.orders())}catch(e){R(e)}J(),T.innerHTML=`<div class="ad-head">
  <div><h1>Заказы</h1><p class="ad-sub tnum" data-orders-sub>${he()}</p></div>
</div>
${k?``:`<div class="ad-note">${t(`max`)}<p><b>MAX ещё не подключён.</b> Заказы сохраняются здесь, а в мессенджер не приходят. В демо-версии это нормально.</p></div>`}
${D.length?`<ul class="ad-orders" role="list">${D.map(e=>`<li class="ad-order st-${e.status}" data-num="${s(e.number)}">
  <details>
    <summary>
      <span class="ad-o-num tnum">№${s(e.number)}</span>
      <span class="ad-o-who"><b>${s(e.name)}</b><small class="tnum">${s(e.created)} · ${s(e.phone)}</small></span>
      <span class="ad-o-sum tnum">${u(e.total)}</span>
      <span class="ad-o-st">${$[e.status]}</span>
      ${t(`chev-r`,`ad-o-chev`)}
    </summary>
    <div class="ad-o-body">
      <ul class="ad-o-items" role="list">${e.items.map(e=>`<li><span>${s(e.title)} <small>${s([e.size,e.color].filter(Boolean).join(` · `))}</small></span><span class="tnum">${e.qty} × ${u(e.price)}</span><b class="tnum">${u(e.sum)}</b></li>`).join(``)}</ul>
      <dl class="ad-o-info">
        <div><dt>Связаться</dt><dd>${s(e.contact)} · <a href="tel:+${s(e.phone.replace(/\D/g,``))}">${s(e.phone)}</a></dd></div>
        <div><dt>${s(e.delivery)}</dt><dd>${s(e.address||`—`)}</dd></div>
        ${e.comment?`<div><dt>Комментарий</dt><dd>${s(e.comment)}</dd></div>`:``}
        <div><dt>Уведомление</dt><dd>${e.notified?.length?`Отправлено: ${e.notified.map(e=>({max:`MAX`,telegram:`Telegram`,email:`почта`})[e]??e).join(`, `)}`:`Никуда не отправлено`}</dd></div>
      </dl>
      <div class="ad-o-act">
        <div class="ad-seg" role="group" aria-label="Статус">${Object.keys($).map(t=>`<button type="button" data-status="${t}" aria-pressed="${t===e.status}">${$[t]}</button>`).join(``)}</div>
        <button type="button" class="btn btn-soft btn-sm" data-copy>${t(`copy`)}Скопировать текст</button>
        ${e.notified?.length?``:`<button type="button" class="btn btn-dark btn-sm" data-resend>${t(`send`)}Отправить в MAX</button>`}
      </div>
    </div>
  </details>
</li>`).join(``)}</ul>`:`<div class="ad-empty"><p>Заказов пока нет. Когда покупатель оформит корзину, заказ появится здесь${k?` и придёт в MAX`:``}.</p>${`<a class="btn btn-orange" href="${i(`catalog/`)}" target="_blank" rel="noopener">Оформить тестовый заказ ${t(`arrow-ur`)}</a>`}</div>`}
${O.length?`<div class="ad-head ad-head-sub"><div><h2>Заявки на звонок</h2><p class="ad-sub tnum">${O.length} всего. Хранятся 3 года, потом удаляются сами</p></div></div>
<ul class="ad-leads" role="list">${O.slice(0,200).map(e=>`<li><span class="tnum">${s(e.created)}</span><b>${s(e.name||`Без имени`)}</b><a class="tnum" href="tel:+${s(e.phone.replace(/\D/g,``))}">${s(e.phone)}</a><small>${s([e.source,e.comment].filter(Boolean).join(` · `))}</small></li>`).join(``)}</ul>`:``}`}T.addEventListener(`click`,async e=>{let t=e.target,n=t.closest(`.ad-order`);if(!n)return;let r=D.find(e=>e.number===n.dataset.num),i=t.closest(`[data-status]`);if(i){let e=i.dataset.status;try{await y.status(r.number,e),r.status=e,n.className=`ad-order st-${e}`,x(`[data-status]`,n).forEach(e=>e.setAttribute(`aria-pressed`,String(e===i))),b(`.ad-o-st`,n).textContent=$[e],b(`[data-orders-sub]`,T).textContent=he(),J()}catch(e){R(e)}}else if(t.closest(`[data-copy]`))try{await navigator.clipboard.writeText(p(r)),I(`Текст заказа скопирован — можно переслать менеджеру`)}catch{I(`Браузер не дал скопировать текст`,`err`)}else if(t.closest(`[data-resend]`))try{await y.resend(r.number),I(`Заказ отправлен в MAX`),ge()}catch(e){R(e)}});async function _e(){let e=b(`[data-guard]`,T);if(!e)return;let t=await fetch(i(`api/data/orders.json`),{cache:`no-store`}).catch(()=>null),n=!!t&&t.ok&&(await t.text()).trim().startsWith(`[`);e.textContent=n?`Файл с заказами открыт из интернета! Передайте разработчику: вынести data_dir за пределы сайта`:`Закрыт от посторонних`,e.classList.toggle(`on`,!n),e.classList.toggle(`bad`,n)}function ve(){T.innerHTML=`<div class="ad-head"><div><h1>Уведомления</h1><p class="ad-sub">Куда приходят заказы и заявки с сайта</p></div></div>
<div class="ad-set">
  <section class="ad-panel ad-max">
    <div class="ad-max-h">
      <span class="ad-max-ic">${t(`max`)}</span>
      <div><h2>Бот в MAX</h2><p class="ad-state${k?` on`:``}">${k?`Подключён — заказы приходят в чат`:`Не подключён`}</p></div>
    </div>
    <ol class="ad-steps">
      <li><b>Проверка бизнеса.</b> Компания проходит проверку на business.max.ru (через банк или Госуслуги — обычно в тот же день).</li>
      <li><b>Бот.</b> В кабинете создаём бота «Кроватико» и копируем его токен. Модерация — до 48 часов.</li>
      <li><b>Чат для заказов.</b> Тот, кто принимает заказы, находит бота в MAX и нажимает «Начать». Если заказы должны видеть несколько человек — бота добавляют в группу администратором и пишут там любое сообщение.</li>
      <li><b>Подключение.</b> Токен и номер чата вписываются в <code>api/config.php</code> на хостинге — это делает разработчик, 5 минут.</li>
    </ol>
    <div class="ad-max-act">
      <button type="button" class="btn btn-dark" data-max-check>${t(`send`)}Проверить связь</button>
      <span class="ad-hint" data-max-out>В демо-версии сервера нет: проверка заработает на хостинге.</span>
    </div>
    <div data-max-chats></div>
  </section>
  <section class="ad-panel">
    <h2>Что приходит менеджеру</h2>
    <p class="ad-hint">Сообщение бота при каждом заказе. Цены сервер пересчитывает по каталогу — подделать сумму из браузера нельзя.</p>
    <div class="bubble"><span class="bubble-who">${t(`max`)}Бот «Кроватико»</span><pre>${s(p({number:`1042`,created:`01.11.2026 14:05`,name:`Анна`,phone:`+7 (900) 123-45-67`,contact:`Написать в MAX`,delivery:`Доставка`,address:`Казань, ул. Баумана, 12, кв. 4`,comment:`Лестница слева`,items:[{title:`Двухъярусная «Домик»`,size:`180×90`,color:`Изумруд`,qty:1,price:31e3,sum:31e3},{title:`Кровать-домик «003» Лейси люкс`,size:`160×80`,color:`Белый · Велюр розовый`,qty:1,price:14750,sum:14750}],total:45750,status:`new`,notified:[]}))}</pre></div>
  </section>
  
  <section class="ad-panel"><h2>Демо-данные</h2><p class="ad-hint">Вернуть каталог к исходному и удалить тестовые заказы в этом браузере.</p><button type="button" class="btn btn-soft" data-reset>Сбросить демо</button></section>
</div>`,_e()}T.addEventListener(`click`,async e=>{let t=e.target;if(t.closest(`[data-max-check]`)){let e=b(`[data-max-out]`,T);e.textContent=`Проверяем…`;let t=await y.max(!0).catch(()=>({ok:!1,error:`Сервер не ответил`}));if(!t.ok){e.textContent=t.error??`Не получилось`;return}e.textContent=`Бот «${t.bot}» на связи.${t.sent?` Тестовое сообщение отправлено.`:t.ready?` Сообщение не ушло — проверьте номер чата.`:` Чат для заказов ещё не указан.`}`,b(`[data-max-chats]`,T).innerHTML=t.chats?.length?`<p class="ad-lbl">Чаты бота — номер нужного впишите в config.php (max.chat_id)</p><ul class="ad-chats" role="list">${t.chats.map(e=>`<li><b>${s(e.title)}</b><code>${s(e.id)}</code></li>`).join(``)}</ul>`:`<p class="ad-hint">Бот пока не видит ни одного чата. Найдите бота в MAX и нажмите «Начать» (или добавьте его в группу менеджеров администратором и напишите там любое сообщение), потом нажмите «Проверить связь» ещё раз.</p>`}else if(t.closest(`[data-reset]`)){if(!await B(`Сбросить демо-данные?`,`Каталог вернётся к исходному, тестовые заказы удалятся.`,`Сбросить`))return;ne(),E=await y.products(),D=[],J(),I(`Демо сброшено`)}}),le();