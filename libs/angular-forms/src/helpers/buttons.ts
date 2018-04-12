import { UiButton } from '@tabler/angular-ui'

export class Button {
  public static button(label: string, config?: UiButton) {
    return Object.assign({}, { label }, config)
  }

  public static save(config?: UiButton) {
    const btn = {
      label: 'Save',
      color: 'success',
      event: 'SAVE',
    }
    return Object.assign({}, btn, config)
  }

  public static saveClose(config?: UiButton) {
    const btn = {
      label: 'Save and Close',
      color: 'success',
      outline: true,
      event: 'SAVE_CLOSE',
    }
    return Object.assign({}, btn, config)
  }

  public static close(config?: UiButton) {
    const btn = {
      color: 'secondary',
      label: 'Close',
      event: 'CLOSE',
      outline: true,
    }
    return Object.assign({}, btn, config)
  }

  public static cancel(config?: UiButton) {
    const btn = {
      color: 'secondary',
      label: 'Cancel',
      event: 'CANCEL',
      outline: true,
    }
    return Object.assign({}, btn, config)
  }
}

export class ButtonGroup {
  public static saveAndClose(config?: UiButton) {
    return [Button.save(config), Button.saveClose(config), Button.close(config)]
  }

  public static saveClose(config?: UiButton) {
    return [Button.save(config), Button.close(config)]
  }

  public static saveAndCancel(config?: UiButton) {
    return [Button.save(config), Button.saveClose(config), Button.cancel(config)]
  }

  public static saveCancel(config?: UiButton) {
    return [Button.save(config), Button.cancel(config)]
  }
}
