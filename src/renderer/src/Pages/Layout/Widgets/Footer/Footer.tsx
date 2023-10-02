import { Box, Button, ThemeProvider, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { FooterContainer, footerTheme } from './styled'
import { BtnAutoAwesome } from './Widgets'
import theme from '@renderer/Common/Style/theme'
import styled from '@emotion/styled'
import { IFooterBtns, actionButtonType } from './Interface'
import { footerButtonsScript } from './script'

export const Footer = ({
  btnsScript = footerButtonsScript
}: {
  btnsScript?: IFooterBtns
}): JSX.Element => {
  const [backgroundColor] = React.useState(theme.palette.primary.main)
  const footerBtnArr = Object.keys(btnsScript)

  return (
    <ThemeProvider theme={{ ...footerTheme }}>
      <FooterContainer background={backgroundColor}>
        <BtnAutoAwesome />
        <BtnsContainer>
          {footerBtnArr.map((key) => (
            <div key={key}>
              {btnsScript[`${key}`].map(
                (btn: actionButtonType): JSX.Element => (
                  <Tooltip key={btn.id} title={btn.placeholder}>
                    <Button onClick={btn.action ? (): void => btn.action!() : (): void => {}}>
                      {btn.icon ? (
                        <btn.icon style={{ color: footerTheme.palette.text.primary }} />
                      ) : (
                        <></>
                      )}
                      {btn.label ? <Typography>{btn?.label}</Typography> : <></>}
                    </Button>
                  </Tooltip>
                )
              )}
            </div>
          ))}
        </BtnsContainer>
      </FooterContainer>
    </ThemeProvider>
  )
}

export const BtnsContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.48rem 0 0.24rem;
`
