import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const OutletContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0;
  overflow: hidden;
`

export const ContentBox = styled(Paper)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.4rem 0rem 3.2rem 0.8rem;
  // overflow: scroll;
  border-radius: 0;
  // background: transparent;
`
