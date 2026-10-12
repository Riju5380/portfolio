/** Small technical label: `01 / ABOUT ———` */
export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label flex items-center gap-4">
      <span className="text-violet-soft">{index}</span>
      <span aria-hidden="true">/</span>
      <span className="text-ink/80">{title}</span>
      <span aria-hidden="true" className="h-px flex-1 max-w-24 bg-line-strong" />
    </div>
  )
}
