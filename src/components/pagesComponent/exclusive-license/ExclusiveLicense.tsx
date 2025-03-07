import React from 'react'
import Layout from '@/components/layout/Layout'
import TextSection from './sections/TextSection';
import BenefitsSect from './sections/BenefitsSect';
import AdvantagesSect from './sections/AdvantagesSect';
import ProcessSect from './sections/ProcessSect';
import ComparisionSect from './sections/ComparisionSect';
import ContactUsSect from './sections/ContactUsSect';

const ExclusiveLicense = () => {

  return (
    <Layout>

      <TextSection />

      <BenefitsSect />

      <AdvantagesSect />

      <ProcessSect />

      <ComparisionSect />

      <ContactUsSect />

    </Layout>
  )
}

export default ExclusiveLicense