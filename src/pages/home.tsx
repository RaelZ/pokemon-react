import React, { ReactElement } from 'react'

const Page = () => {
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}
export default Page
