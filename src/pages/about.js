import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import TimeStampsSection from '../components/timestamps-section';
import ProjectsSection from '../components/projects-section';
import CertificatesSection from '../components/certificates-section';
import TMISection from '../components/tmi-section';

export default ({ data }) => {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, certificates } = about;
  return (
    <Layout>
      <SEO title="About" />
      <Bio author={author} language={language} />
      <TimeStampsSection timestamps={timestamps} />
      <CertificatesSection certificates={certificates} />
      <ProjectsSection projects={projects} />
      <TMISection />      
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            naver
            linkedIn
            instagram
            email      
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          certificates {
            date
            title
            description    
            issuer        
          }
        }
      }
    }
  }
`;
