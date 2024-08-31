"use client"
import {Button} from '@/components/ui/button'
import { useState } from 'react'
import { deleteSite } from '@/server/Actions'
export const Settings = ({siteId}: {siteId: string}) => {
  const [isActive, setIsActive] = useState(false)
  
  return <div className="w-full border border-gray-300 rounded-md p-5">
    <h3 className="text-lg font-semibold">Settings</h3>
    {/* user can delete the site here */}
    <Button className='mt-5' onClick={() => setIsActive(!isActive)} variant='destructive'>Delete Site</Button>
    
    {isActive && <div 
    onClick={() => setIsActive(!isActive)}
    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md bg-white p-5 rounded-md">
      <p>Are you sure you want to delete this site?</p>
      <p>This action cannot be undone.</p>
      <Button
      onClick={async () => await deleteSite({siteId})}
      className='mt-5' variant='destructive'>Delete Site</Button>
    </div>
    </div>}
  </div>
}