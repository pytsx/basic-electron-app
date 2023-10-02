import { FileClass, useExplorer } from '@renderer/Common'
import { IRenderVolume } from '../interface'
import { VolumeAccordion } from './Accordion'

export const RenderVolume = ({ volume }: IRenderVolume): JSX.Element => {
  const { addCurrentVolume } = useExplorer()
  function onClick(): void {
    addCurrentVolume(volume)
  }

  return (
    <VolumeAccordion volume={volume} onClick={onClick}>
      {volume.items.map((item) => {
        if (item instanceof FileClass) {
          return <i key={`explorer-file-${item.id}`}> {item.render()}</i>
        } else {
          return <i key={`explorer-folder-${item.id}`}> {item.render()}</i>
        }
      })}
    </VolumeAccordion>
  )
}
