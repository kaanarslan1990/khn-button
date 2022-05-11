import React from 'react'

import { DashedButton, DefaultButton,LinkButton, PrimaryButton, TextButton } from 'khn-button'
import 'khn-button/dist/index.css'

const App = () => {
  return (
    <div className="container">

    <PrimaryButton type="primary" text="Primary" />
    <DefaultButton type="default" text="Default" />
    <DashedButton type="dashed" text="Dashed" />
    <TextButton type="text" text="Text" />
    <LinkButton type="link" text="Link" />

    </div>
  )
}

export default App
