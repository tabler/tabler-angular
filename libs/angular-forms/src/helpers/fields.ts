export class Field {
  public static defaultsEmail = {
    required: true,
  }

  public static defaultsPassword = {
    placeholder: '********',
    required: true,
    minLength: 8,
  }

  /**
   * This method is responsible for generating a FormlyFieldConfig object
   * @param type: string. Formly field type (input, textarea, date, custom)
   * @param templateType: string. Type variant (input type=range, input type=number)
   * @param key: the key for this field in the object model
   * @param options:
   */
  public static field(type: string, templateType: string, key: string, options: any = {}) {
    const hideExpression = options.hideExpression || false
    const expressionProperties = options.expressionProperties || false
    const className = options.className || false
    const templateOptions = {
      type: templateType,
    }

    const validators = { validation: options.validators || [] }
    const validation = options.validation || {}

    const toKeys = [
      'id',
      'name',
      'label',
      'placeholder',
      'description',
      'labelClasses',
      'fieldClasses',
      'readonly',
      'disabled',
      'required',
      'options',
      'min',
      'max',
      'minLength',
      'pattern',
      'multiple',
      'groupProp',
      'valueProp',
      'labelProp',
    ]

    toKeys.forEach(toKey => {
      if (options[toKey]) {
        templateOptions[toKey] = options[toKey]
      }
    })

    return {
      key,
      type,
      templateOptions,
      validators,
      validation,
      hideExpression,
      expressionProperties,
      className,
    }
  }

  public static input(key, options: any = {}) {
    return Field.field('input', 'text', key, options)
  }

  public static inputHorizontal(key, options: any = {}) {
    return Field.field('inputHorizontal', 'text', key, options)
  }

  public static email(key, options: any = {}) {
    return Field.field('input', 'email', key, Object.assign({}, Field.defaultsEmail, options))
  }

  public static emailHorizontal(key, options: any = {}) {
    return Field.field('inputHorizontal', 'email', key, Object.assign({}, Field.defaultsEmail, options))
  }

  public static range(key, options: any = {}) {
    return Field.field('range', 'range', key, options)
  }

  public static password(key, options: any = {}) {
    return Field.field('input', 'password', key, Object.assign({}, Field.defaultsPassword, options))
  }

  public static passwordHorizontal(key, options: any = {}) {
    return Field.field('inputHorizontal', 'password', key, Object.assign({}, Field.defaultsPassword, options))
  }

  public static date(key, options: any = {}) {
    return Field.field('input', 'date', key, options)
  }

  public static datetime(key, options: any = {}) {
    return Field.field('datetime', 'datetime', key, options)
  }

  public static radio(key, options: any = {}) {
    return Field.field('radio', 'radio', key, options)
  }

  public static textarea(key, options: any = {}) {
    return Field.field('textarea', 'text', key, options)
  }

  public static select(key, options: any = {}) {
    return Field.field('select', 'text', key, options)
  }

  public static multicheckbox(key, options: any = {}) {
    return Field.field('multicheckbox', 'multicheckbox', key, options)
  }

  public static checkbox(key, options: any = {}) {
    return Field.field('checkbox', 'checkbox', key, options)
  }

  public static group(fields: any[] = [], groupClassName = ''): any {
    return {
      fieldGroupClassName: groupClassName ? groupClassName : null,
      fieldGroup: fields,
    }
  }

  public static template(template: string) {
    return { template }
  }
}
