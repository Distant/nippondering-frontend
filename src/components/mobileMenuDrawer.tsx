import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex } from '@chakra-ui/core'
import { RefObject } from 'react';
import * as React from 'react';

type Props = {
  children: React.ReactNode[],
  isOpen: boolean,
  placement: "right",
  onOpen: () => void,
  onClose: () => void,
  finalFocusRef: RefObject<HTMLButtonElement>
}

const MobileMenuDrawer = ({ children, isOpen, placement, onOpen, onClose, finalFocusRef }: Props) => {
  return (<>

    <Button variant="unstyled" display={["block", "block", "none"]} ref={finalFocusRef} onClick={onOpen}>
      <svg
        style={{ margin: "auto" }}
        fill="white"
        width="16px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </Button>
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader backgroundColor="#934aad" color="white"></DrawerHeader>

          <DrawerBody backgroundColor="#934aad">
            <Flex direction="column" >
              {children}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>

  )
}
export default MobileMenuDrawer