import type { ReactElement } from 'react'
import Section from '../components/Section';

const Page = () => {
  return (
    <>
      <Section>
        <h1>Hello World</h1>
      </Section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Page
