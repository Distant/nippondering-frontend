import * as React from "react";
import { ReactNode } from "react";

type ResponsivePictureProps = {
  baseUrl: string,
  urls?: string[],
  breakpoints?: string[],
  webp?: boolean,
  alt?: string,
  className?: string,
  ref?: string | ((instance: HTMLImageElement | null) => void) | React.RefObject<HTMLImageElement> | null | undefined,
  customNode?: ReactNode
}

const useWebp = process.env.NEXT_PUBLIC_USE_WEBP == "true"
const replaceExtension = (p: string, webp: boolean) => webp ? p.replace(/\.[^/.]+$/, ".webp") : p

/**
 * 
 * Renders a <picture> with <sourceset> and <img> tags based on parameters provided, for optionally rendering webp images
 *  
 * Urls and sizes are expected largest to smallest
 */
export const ResponsivePicture = ({ baseUrl, urls, breakpoints, webp, alt, className, ref, customNode }: ResponsivePictureProps) => {
  const media = breakpoints ? breakpoints : ["1440px", "1280", "800px"];
  const wp = useWebp && webp
  
  return (
    <picture>
      {urls && urls.map((url, i) => {
        return (
          <React.Fragment key={url}>
            {wp && <source type="image/webp" media={media.length > i ? `(min-width: ${media[i]})` : ""} srcSet={replaceExtension(url, wp)} />}
            <source media={media.length > i ? `(min-width: ${media[i]})` : ""} srcSet={url} />
          </React.Fragment>
        )
      })}
      {wp && <source type="image/webp" media="(min-width: 0)" srcSet={replaceExtension(baseUrl, wp)} />}
      {customNode ? customNode : <img
        ref={ref}
        className={className}
        src={baseUrl}
        alt={alt} />}
    </picture>
  )
}