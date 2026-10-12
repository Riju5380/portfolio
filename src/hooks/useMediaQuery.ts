import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** Desktop-class device: precise pointer, hover, and enough room for heavier effects. */
export function useFinePointer() {
  return useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
}
