import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiButton, UiButtonSize, UiButtonColor, UiButtonType } from '../../models'

@Component({
  selector: 'ui-button',
  template: `
    <button [type]="_type"
            class="{{_classNames}}"
            [disabled]="disabled"
            (click)="handleClick($event)">
      <i *ngIf="_icon" class="{{_icon}}" [class.mr-1]="_label"></i>
      <ng-container *ngIf="_label">
        {{_label}}
      </ng-container>
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  public static copyProps = ['color', 'size', 'type', 'label', 'icon', 'disabled', 'event', 'payload']

  @Input() public config: UiButton = {}
  @Input() public color: UiButtonColor
  @Input() public size: UiButtonSize
  @Input() public type: UiButtonType
  @Input() public label: string
  @Input() public icon: string
  @Input() public disabled = false
  @Input() public event = 'SUBMIT'
  @Input() public payload: any

  @Output() public action = new EventEmitter()

  ngOnInit() {
    // Get the values from the inputs and merge them with the config object.
    const inputMap = ButtonComponent.copyProps
      .filter(item => typeof this[item] !== 'undefined')
      .reduce((a, c) => ({ ...a, [c]: this[c] }), {})
    // The config object takes precedence
    this.config = { ...inputMap, ...this.config }
  }

  public get _size() {
    return this.config.size || ''
  }

  public get _label() {
    return this.config.label || null
  }

  public get _icon() {
    return this.config.icon || null
  }

  public get _color() {
    return this.config.color || 'primary'
  }

  public get _event() {
    return this.config.event || 'SUBMIT'
  }

  public get _type() {
    return this.config.type || 'button'
  }

  public get _payload() {
    return this.config.payload || null
  }

  public get _classNames() {
    const base = 'btn'
    const size = `${base}-${this._size}`
    const color = `${base}-${this._color}`
    return this.config.classNames || `${base} ${size} ${color}`
  }

  public handleClick($event) {
    this.action.emit({
      type: this._event,
      payload: Object.assign({}, this._payload),
      $event,
    })
  }
}
