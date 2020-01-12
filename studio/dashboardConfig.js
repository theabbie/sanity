export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1aef5b0f67a091c233c39c',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-hd33scdz',
                  apiId: 'acc7f50f-f207-452d-b0cc-d0fce60b6bc6'
                },
                {
                  buildHookId: '5e1aef5b64c52df6cbd2eb62',
                  title: 'Blog Website',
                  name: 'sanity-web-zqigoz7v',
                  apiId: '5f37e16f-8fed-4e3d-81c7-ec2c73a9632a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theabbie/sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-web-zqigoz7v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
