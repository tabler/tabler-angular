import { UiBadge } from '../../../services/ui.service'

export class UiLink {
  label?: string
  labelClass?: string
  link?: string
  linkClass?: string
  icon?: string
  badge?: UiBadge
  children?: UiLink[]
  divider?: boolean
  external?: boolean
  target?: string
}
