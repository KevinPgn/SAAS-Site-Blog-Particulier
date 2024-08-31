import {Settings} from '@/components/dashboard/settings/Settings'
import React from 'react'

interface SettingsPageProps {
  params: {
    siteId: string
  }
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { siteId } = params

  return (
    <section className='w-full overflow-auto flex-1 p-5'>
        <Settings siteId={siteId}/>   
    </section>
  )
}

export default SettingsPage