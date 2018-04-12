export const NoteModel = {
  icon: 'fa fa-fw  fa-pencil-square-o',
  id: 'Notes',
  name: 'Notes',
  properties: {
    id: {
      required: true,
      type: 'string',
    },
    title: {
      id: 'title',
      type: 'string',
    },
    content: {
      id: 'content',
      type: 'string',
    },
  },
  fields: [
    {
      key: 'title',
      type: 'string',
      link: true,
    },
    {
      key: 'created',
      type: 'date',
      headerClass: 'w-25 text-right',
      columnClass: 'text-right',
    },
  ],
}
