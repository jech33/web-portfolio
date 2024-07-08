import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  title: 'Compact List',
  name: 'compactList',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            {
              name: 'item',
              type: 'object',
              preview: {
                select: {
                  label: 'label',
                  place: 'place',
                  time: 'time',
                },
                prepare(value) {
                  const { label, place, time } = value;
                  console.log(value);
                  return {
                    title: `${place} - ${label} [${time}]`,
                  };
                },
              },
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                },
                {
                  name: 'place',
                  type: 'string',
                  title: 'Place',
                },
                {
                  name: 'time',
                  type: 'string',
                  title: 'Time',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
