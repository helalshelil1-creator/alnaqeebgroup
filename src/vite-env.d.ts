/// <reference types="vite/client" />

declare const __SITE_ORIGIN__: string
declare const __EDITION__: 'personal' | 'commercial'

interface ImportMetaEnv {
  readonly VITE_FORM_ENDPOINT?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
