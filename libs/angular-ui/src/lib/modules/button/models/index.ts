export interface UiButton {
  label?: string
  icon?: string
  classNames?: string
  outline?: boolean
  type?: UiButtonType
  color?: UiButtonColor
  size?: UiButtonSize
  action?: UiButtonAction
  event?: string
  payload?: string
}

export interface UiButtonAction {
  type: string
  payload: any
  $event?: any
}

export type UiButtonColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-dark'
  | 'outline-light'
export type UiButtonSize = 'xl' | 'lg' | 'md' | 'sm' | ''
export type UiButtonType = 'button' | 'submit'
