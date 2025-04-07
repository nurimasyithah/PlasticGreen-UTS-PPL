// app/Controllers/Http/PageController.ts

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PageController {
  // Method for home page
  public async index({ view }: HttpContextContract) {
    return view.render('pages/index', {
      title: 'Plastic Green Power',
      description: 'Innovative solutions for plastic waste and green energy'
    });
  }

  // Method for mission page
  public async mission({ view }: HttpContextContract) {
    return view.render('pages/mission', {
      title: 'Our Mission',
      description: 'Learn about our mission to transform plastic waste into green energy'
    });
  }

  // Method for projects page
  public async projects({ view }: HttpContextContract) {
    return view.render('pages/projects', {
      title: 'Our Projects',
      description: 'Explore our current projects in plastic waste conversion'
    });
  }

  // Method for research page
  public async research({ view }: HttpContextContract) {
    return view.render('pages/research', {
      title: 'Our Research',
      description: 'Latest research in plastic waste pyrolysis and energy storage'
    });
  }

  // Method for news page (added as it was in routes but missing in controller)
  public async news({ view }: HttpContextContract) {
    return view.render('pages/news', {
      title: 'Latest News',
      description: 'Stay updated with our latest news and developments'
    });
  }
  

  // Method for contact page
  public async contact({ view }: HttpContextContract) {
    return view.render('pages/contact', {
      title: 'Contact Us',
      description: 'Get in touch with our team for inquiries and partnerships'
    });
  }

  // Method for invest page (added as it was in routes but missing in controller)
  public async invest({ view }: HttpContextContract) {
    return view.render('pages/invest', {
      title: 'Invest With Us',
      description: 'Investment opportunities in green energy solutions'
    });
  }
}