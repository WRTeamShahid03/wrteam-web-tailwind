'use client'
import Layout from '@/components/layout/Layout'
import { axiosClient } from '@/lib/api'
import React, { useEffect, useState } from 'react'

// Define types for the settings data
interface SettingsData {
  installation_tnc: string;
  // Add other possible settings fields here if needed
}

const InstallationTerms = () => {

  const [loading, setLoading] = useState<boolean>(true)

  // Update the state type to match the expected structure
  const [settings, setSettings] = useState<SettingsData>({
    installation_tnc: ""
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axiosClient.get('/api/settings', {
          timeout: 10000,
          params: {
            type: "installation_tnc"
          }
        });

        // Check if response has data and update state with the settings object
        if (response?.data?.data) {
          setSettings(response.data.data);
          setLoading(false)
        }
      } catch (error) {
        // Fallback to empty object is already set in initial state
        console.error("Failed to fetch settings:", error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <Layout>
      <section className='container commonMT commonMB'>
        <div className='rounded-xl shadow-[0_2px_8px_0_#63636333] py-4 md:py-8 px-1 md:px-4 space-y-6 md:space-y-12'>
          <div className='flex justify-center'>
            <h1 className='text-xl font-semibold text-center secondaryColor underline sm:text-3xl'>Installation Terms Of Use </h1>
          </div>
          <div className="flex flex-col gap-8">
            {
              loading ?
                <div className=' flex flex-col gap-4 p-3 rounded-[16px] overflow-hidden animate-pulse'>
                   <div className='bg-gray-200 h-64 rounded-t-[8px]'></div>
                </div>
                :
            <div className='[&>p]:mb-2' dangerouslySetInnerHTML={{ __html: settings?.installation_tnc || "" }} />
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InstallationTerms