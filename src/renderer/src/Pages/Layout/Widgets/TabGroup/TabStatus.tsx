import { Typography, styled } from '@mui/material'
import { tabStatusEnum } from '@renderer/Common'
import { VscCircleFilled } from 'react-icons/vsc'

export const TabStatus = ({ status }: { status: tabStatusEnum }): JSX.Element => {
  switch (status) {
    case 'UNSAVED':
      return (
        <TabStatusContainer>
          1
          <VscCircleFilled />
        </TabStatusContainer>
      )

    default:
      return <></>
  }
}
const TabStatusContainer = styled(Typography)`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
`
