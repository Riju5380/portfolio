/** Fixed ambient backdrop: fine grid, two slow glows, and film grain. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="glow-a absolute -left-[15vw] -top-[20vh] h-[70vh] w-[60vw] rounded-full bg-violet/20 blur-[120px]" />
      <div className="glow-b absolute -right-[20vw] top-[30vh] h-[60vh] w-[50vw] rounded-full bg-cyan/10 blur-[140px]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  )
}
