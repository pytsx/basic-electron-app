import { Button, lighten, Typography } from "@mui/material"
import { MdAutoAwesome } from "react-icons/md"

export const BtnAutoAwesome = (): JSX.Element => {
  return (
    <Button
      size="small"
      sx={{
        minWidth: 'fit-content',
        padding: '.24rem .48rem',
        height: '100%',
        bgcolor: '#008000af',
        borderRadius: '0',
        '&:hover': { bgcolor: lighten('#008000af', 0.2) }
      }}
    >
      <Typography color="white" variant="caption" sx={{ lineHeight: '0rem' }}>
        <MdAutoAwesome />
      </Typography>
    </Button>
  )
}
