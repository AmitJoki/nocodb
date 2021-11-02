const templates = {
  title: 'Art Gallery Management',
  thumbnail: 'https://picsum.photos/200/300?1',
  tables: [
    {
      tn: 'blog',
      columns: [
        {
          cn: 'title',
          uidt: 'SingleLineText'
        },
        {
          cn: 'body',
          uidt: 'LongText'
        }
      ],
      hasMany: [
        {
          tn: 'comment',
          _cn: 'title3'
        }
      ],
      manyToMany: [
        {
          rtn: 'tag',
          _cn: 'title4'
        }
      ],
      v: [
        {
          _cn: 'comments_count',
          rl: {
            rltn: 'comment',
            rlcn: 'body',
            type: 'hm',
            fn: 'count'
          }
        }
      ]
    },
    {
      tn: 'comment',
      columns: [
        {
          cn: 'body',
          uidt: 'LongText'
        }
      ],
      hasMany: [],
      manyToMany: [],
      v: [
        {
          _cn: 'blog_title',
          lk: {
            ltn: 'blog',
            type: 'bt',
            lcn: 'title'
          }
        }
      ]
    },
    {
      tn: 'tag',
      columns: [
        {
          cn: 'title',
          uidt: 'SingleLineText'
        }
      ],
      hasMany: [],
      manyToMany: [],
      v: []
    }
  ],
  category: 'test',
  tags: 'a,b,c',
  description: 'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier, not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk!'

}

export default templates