import React from 'react'
import { Button } from '@chakra-ui/core'
import { ctaButtonProps } from './commonProps'
import dynamic from 'next/dynamic'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const HelpButton = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [load, setLoad] = React.useState(false)
  const HelpRequest = React.useRef<React.ComponentType<Props>>()
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    if (load) {
      const BelpRequest = dynamic<Props>(() => import('./helpRequestModal'), { ssr: false })
      HelpRequest.current = BelpRequest
      setLoaded(true)
    }
  }, [load])
  return (
    <>
      <Button display={{ base: "none", md: "inline-flex" }} {...ctaButtonProps} position="fixed" right={8} bottom={8} onClick={() => { setLoad(true); setOpen(true) }} fontSize="18px" p={6} borderRadius={24}>Got a Question?</Button>
      <Button display={{ base: "inline-flex", md: "none" }} {...ctaButtonProps} position="fixed" right={8} bottom={8} onClick={() => { setLoad(true); setOpen(true) }} fontSize="22px" borderRadius={"50%"}>?</Button>
      {HelpRequest.current && <HelpRequest.current isOpen={open} onClose={() => { setOpen(false) }} />}
    </>)
}
export default HelpButton