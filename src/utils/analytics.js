const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID
const isProd = import.meta.env.PROD

let initialized = false

export function initGA4() {
  if (!isProd || !GA4_ID || initialized) return
  initialized = true

  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  script.async = true
  script.defer = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', GA4_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  })

  window.gtag = gtag
}

export function trackEvent(action, params = {}) {
  if (!isProd || !window.gtag) return
  window.gtag('event', action, params)
}

export function trackPageView(path) {
  if (!isProd || !window.gtag) return
  window.gtag('config', GA4_ID, { page_path: path || window.location.pathname })
}

export function trackResumeDownload(location = 'navbar') {
  trackEvent('resume_download', { location })
}

export function trackProjectClick(projectName) {
  trackEvent('project_click', { project_name: projectName })
}

export function trackProjectView(projectName) {
  trackEvent('project_view', { project_name: projectName })
}

export function trackSocialClick(platform, source = 'about_section') {
  trackEvent('social_click', { platform, source })
}

export function trackContactFormSubmit(formName = 'contact') {
  trackEvent('contact_form_submit', { form_name: formName, form_type: 'contact' })
}

export function trackCTAClick(ctaName, location) {
  trackEvent('cta_click', { cta_name: ctaName, location })
}

export function trackHireMe(location = 'contact_form') {
  trackEvent('hire_me_click', { location })
}
