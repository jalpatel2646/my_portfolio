import { useEffect } from 'react'
import { initGA4 } from '../utils/analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function Analytics() {
  useEffect(() => { initGA4() }, [])
  return <VercelAnalytics />
}
