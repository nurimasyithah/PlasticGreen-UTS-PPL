import Route from '@ioc:Adonis/Core/Route'

// Homepage
Route.get('/', async ({ view }) => {
  return view.render('pages/index', {
    title: 'Plastic Green',
    description: 'Solusi pengolahan sampah plastik berkelanjutan'
  })
}).as('beranda')

// Halaman lain
Route.get('/mission', async ({ view }) => {
  return view.render('pages/mission', {
    title: 'Plastic Green - Misi',
    description: 'Pelajari misi kami untuk masa depan yang berkelanjutan'
  })
}).as('mission')

Route.get('/projects', 'PageController.projects').as('projects')
Route.get('/contact', 'PageController.contact').as('contact')
Route.post('/contact', 'PageController.submitContact').as('contact.submit')
Route.get('/news', 'PageController.news').as('news')

Route.get('/:slug.html', async ({ params, response }) => {
  return response.redirect(`/${params.slug}`, false, 301)
})
