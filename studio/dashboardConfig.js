export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dcb29e57c531fc6eb8e6c86',
                  title: 'Sanity Studio',
                  name: 'sanity-puppets-blog-studio',
                  apiId: '37c35dff-ca4f-4938-864e-a8132469826f'
                },
                {
                  buildHookId: '5dcb29e55922a6a88f08a1ed',
                  title: 'Blog Website',
                  name: 'sanity-puppets-blog',
                  apiId: 'c24ca573-283b-4a3e-aedb-c3ce73417328'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esmith7196/sanity-puppets-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-puppets-blog.netlify.com', category: 'apps'}
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
