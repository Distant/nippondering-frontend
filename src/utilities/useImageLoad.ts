import * as React from "react";

/**
 *  Returns a ref to attach to an <img> and a boolean representing the loaded state
 */
const useImageLoad = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false)
  const imgRef: React.MutableRefObject<HTMLImageElement | null> = React.useRef(null)
  const listenerAttached = React.useRef(false)

  React.useEffect(() => {
    const handler = (_: any) => { setImgLoaded(true) }
    const img = imgRef.current
    if (!img) return

    if (!imgLoaded && !listenerAttached.current) {
      if (img.complete) { setImgLoaded(true) }
      else {
        img.addEventListener("load", handler)
        listenerAttached.current = true
      }
    }

    return () => {
      if (imgLoaded && listenerAttached.current) {
        img.removeEventListener("load", handler)
      }
    }
  })
  return { imgRef, imgLoaded }
}

export default useImageLoad