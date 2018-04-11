export const BeerModel = {
  icon: 'fa fa-fw fa-beer',
  id: 'Beers',
  name: 'Beers',
  properties: {
    brewery: {
      id: 'brewery',
      type: 'string',
      visible: 'true'
    },
    id: {
      required: true,
      type: 'string'
    },
    name: {
      id: 'name',
      type: 'string',
      visible: 'true'
    },
    percentage: {
      id: 'percentage',
      type: 'string'
    },
    type: {
      id: 'type',
      type: 'string'
    }
  },
  fields: [
    {
      label: 'Brewery',
      key: 'brewery',
      type: 'string',
      link: true,
    }, {
      label: 'Name',
      key: 'name',
      type: 'string'
    },
    {
      label: 'Percentage',
      key: 'percentage',
      type: 'string',
      headerClass: 'w-25 text-right',
      columnClass: 'text-right',
    },
  ]
}
