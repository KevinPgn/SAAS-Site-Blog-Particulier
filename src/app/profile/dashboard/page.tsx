import { Dashboard } from '@/components/dashboard/Dashboard'
import React from 'react'
import prisma from '@/lib/prisma'

const DashboardPage = async () => {
  return (
    <section className='w-full flex-1'>
      <Dashboard />
    </section>
  )
}

export default DashboardPage