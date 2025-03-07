'use client'
import React from 'react'
import Layout from '@/components/layout/Layout'
import TextSection from './sections/TextSection';
import BenefitsSect from './sections/BenefitsSect';
import AdvantagesSect from './sections/AdvantagesSect';
import ProcessSect from './sections/ProcessSect';
import ComparisonSect from './sections/ComparisonSect';
import ContactUsSect from './sections/ContactUsSect';
import FaqsSect from './sections/FaqsSect';

const ExclusiveLicense = () => {

  return (
    <Layout>

      <TextSection />

      <BenefitsSect />

      <AdvantagesSect />

      <ProcessSect />

      <ComparisonSect />

      <ContactUsSect />

      <FaqsSect />

    </Layout>
  )
}

export default ExclusiveLicense