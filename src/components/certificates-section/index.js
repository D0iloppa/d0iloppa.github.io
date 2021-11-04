import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const CertificatesSection = ({ certificates }) => {
  if (!certificates || certificates.length < 2) return null;
  return (
  <div className="certificates-section-wrapper">
      <div className="certificates-section">
        <SectionHeader title="Certificates" />
        <div className="body">
          {certificates.map((certificate, index) =>
            index === 0 ? null : (
              <div className="certificate" key={index}>
                <div className="date">{certificate.date}</div>
                  <div className="title">{certificate.title}</div>
                  <div className="issuer">{certificate.issuer}</div>
                  <div className="description">{certificate.description}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
