const b=document.querySelector('.menu-btn'),m=document.querySelector('#menu');
if(b&&m){
  b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));
}
const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();

const SUPABASE_URL='https://lqfuwhtrviymeqyzkyvx.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_iB4VmrZof1TX6E_69MXZbA__M1MpVqM';

const form=document.querySelector('#devis-form');
const statusEl=document.querySelector('#form-status');
const submitBtn=document.querySelector('#devis-submit');

function setStatus(message,type=''){
  if(!statusEl) return;
  statusEl.textContent=message;
  statusEl.className='form-status wide '+type;
}

if(form){
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    if(!form.reportValidity()) return;

    const data=new FormData(form);
    const commune=(data.get('commune')||'').trim();
    const besoin=(data.get('message')||'').trim();
    const message=[commune ? `Commune : ${commune}` : '', besoin].filter(Boolean).join('\n\n');

    const payload={
      nom:(data.get('nom')||'').trim(),
      email:(data.get('email')||'').trim(),
      telephone:(data.get('telephone')||'').trim(),
      service:(data.get('service')||'').trim(),
      message,
      statut:'nouveau'
    };

    submitBtn.disabled=true;
    submitBtn.textContent='Envoi en cours…';
    setStatus('Envoi de votre demande…','sending');

    try{
      const response=await fetch(`${SUPABASE_URL}/rest/v1/demandes_devis`,{
        method:'POST',
        headers:{
          'apikey':SUPABASE_PUBLISHABLE_KEY,
          'Authorization':`Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          'Content-Type':'application/json',
          'Prefer':'return=minimal'
        },
        body:JSON.stringify(payload)
      });

      if(!response.ok){
        let details='';
        try{ details=await response.text(); }catch(_e){}
        console.error('Supabase:',response.status,details);
        throw new Error('Envoi impossible');
      }

      form.reset();
      setStatus('Merci ! Votre demande a bien été envoyée. Nous vous recontacterons rapidement.','success');
    }catch(err){
      console.error(err);
      setStatus("Une erreur est survenue. Vous pouvez nous appeler au 06 15 20 03 87 ou réessayer dans quelques instants.",'error');
    }finally{
      submitBtn.disabled=false;
      submitBtn.textContent='Envoyer ma demande';
    }
  });
}
