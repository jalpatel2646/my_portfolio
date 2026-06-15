import { useEffect } from 'react'
import { initGA4 } from '../utils/analytics'

export default function Analytics() {
  useEffect(() => { initGA4() }, [])
  return null
}
