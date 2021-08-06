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
                  buildHookId: '610d8a6f8e155c1848fb16f2',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7a5525es',
                  apiId: '2db8934b-8d70-4835-90d0-72c59348b0ed'
                },
                {
                  buildHookId: '610d8a70a0112c0d6021b348',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ejvygd6p',
                  apiId: 'b9ee47ea-31a7-42f6-b652-04ed704809eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miguelapb35/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ejvygd6p.netlify.app', category: 'apps'}
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
