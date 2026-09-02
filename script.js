
const chapters=[...document.querySelectorAll('.chapter-title')];
const toc=document.getElementById('toc');
chapters.forEach(h=>{const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;a.addEventListener('click',()=>document.getElementById('sidebar').classList.remove('open'));toc.appendChild(a)});
const links=[...toc.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});chapters.forEach(h=>observer.observe(h));
const sidebar=document.getElementById('sidebar');document.getElementById('menuBtn').onclick=()=>sidebar.classList.toggle('open');
document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('ch4-theme',document.body.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('ch4-theme')==='dark')document.body.classList.add('dark');
const topBtn=document.getElementById('topBtn');addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const search=document.getElementById('searchBox');search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('#content > *:not(.hero)').forEach(el=>{el.classList.toggle('search-hidden',q && !el.textContent.toLowerCase().includes(q))})});
