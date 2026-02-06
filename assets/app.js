(function(){
  const toast = (msg) => {
    const el = document.getElementById('toast');
    if(!el) return;
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'), 2600);
  };

  // Simple form handler (mailto fallback)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name')?.toString().trim();
      const email = fd.get('email')?.toString().trim();
      const msg = fd.get('message')?.toString().trim();

      if(!name || !email || !msg){
        toast('Моля, попълни име, имейл и съобщение.');
        return;
      }

      // Mailto link (works on most desktops)
      const subject = encodeURIComponent('Запитване от сайта – CBD Зелена Капка');
      const body = encodeURIComponent(`Име: ${name}\nИмейл: ${email}\n\nСъобщение:\n${msg}`);
      window.location.href = `mailto:office@biodominator.bg?subject=${subject}&body=${body}`;
      toast('Отварям имейл клиента ти…');
      form.reset();
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
