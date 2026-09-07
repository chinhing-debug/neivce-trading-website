const defaults = {
  introduction: 'NEIVCE Trading PLT helps individuals and organisations grow with reliable e-commerce, programming, and computer training services.',
  announcement: 'Now accepting enquiries for customised training and digital projects.',
  ecommerce: 'We support businesses exploring online sales with practical e-commerce guidance and digital solutions.',
  programming: 'We develop focused programming solutions that help organisations improve workflows and build their digital presence.',
  training: 'We provide accessible computer training that builds everyday confidence and practical digital skills.',
  address: 'B5 - B7, Block B, Jalan TKS 1, Taman Kajang Sentral, 43000 Kajang, Selangor', telephone: '03-8737 8770'
};
const getContent = () => ({ ...defaults, ...JSON.parse(localStorage.getItem('neivceContent') || '{}') });
const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };

if (document.getElementById('companyIntroduction')) {
  const content = getContent();
  setText('companyIntroduction', content.introduction); setText('announcement', content.announcement);
  setText('serviceEcommerce', content.ecommerce); setText('serviceProgramming', content.programming); setText('serviceTraining', content.training); setText('address', content.address); setText('telephone', content.telephone);
  document.getElementById('telephone').href = 'tel:' + content.telephone.replace(/[^+\d]/g, '');
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelector('.menu-button').addEventListener('click', (event) => { const nav = document.getElementById('navigation'); const open = nav.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', open); });
  document.querySelectorAll('#navigation a').forEach(link => link.addEventListener('click', () => document.getElementById('navigation').classList.remove('open')));
  document.getElementById('enquiryForm').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.reset(); setText('formMessage', 'Thank you. Your enquiry has been received.'); });
}

if (document.getElementById('loginForm')) {
  const loginScreen = document.getElementById('loginScreen'), dashboard = document.getElementById('dashboard');
  const inputs = { introduction: 'introInput', announcement: 'announcementInput', ecommerce: 'ecommerceInput', programming: 'programmingInput', training: 'trainingInput', address: 'addressInput', telephone: 'telephoneInput' };
  const showDashboard = () => { loginScreen.hidden = true; dashboard.hidden = false; const content = getContent(); Object.entries(inputs).forEach(([key, id]) => document.getElementById(id).value = content[key]); };
  if (sessionStorage.getItem('neivceAdmin') === 'true') showDashboard();
  document.getElementById('loginForm').addEventListener('submit', (event) => { event.preventDefault(); if (document.getElementById('password').value === 'neivce2026') { sessionStorage.setItem('neivceAdmin', 'true'); showDashboard(); } else setText('loginMessage', 'Incorrect password. Please try again.'); });
  document.getElementById('contentForm').addEventListener('submit', (event) => { event.preventDefault(); const updated = {}; Object.entries(inputs).forEach(([key, id]) => updated[key] = document.getElementById(id).value.trim()); localStorage.setItem('neivceContent', JSON.stringify(updated)); setText('saveMessage', 'Saved. Your updates are now visible on the public website.'); });
  document.getElementById('resetContent').addEventListener('click', () => { localStorage.removeItem('neivceContent'); showDashboard(); setText('saveMessage', 'Default content restored.'); });
  document.getElementById('logout').addEventListener('click', () => { sessionStorage.removeItem('neivceAdmin'); dashboard.hidden = true; loginScreen.hidden = false; document.getElementById('loginForm').reset(); });
}
