/** @jsxImportSource astro */

export interface TableColumnDef {
  id: string
  name: string
  title?: string
  cell: (data: string) => string | number
  classHeader?: string
  classData?: string
}
