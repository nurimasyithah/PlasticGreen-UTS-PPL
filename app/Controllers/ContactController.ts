import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PageController {
    // Metode untuk menampilkan halaman kontak
    public async contact({ view }: HttpContextContract) {
        return view.render('pages/contact') // Pastikan file ini ada
    }

    // Metode untuk menangani pengiriman formulir kontak
    public async submitContact({ request, response }: HttpContextContract) {
        // Logika untuk menangani data yang diterima dari formulir
        const formData = request.all()
        console.log(formData)

        // Misalnya, simpan data ke database atau kirim email

        // Redirect atau tampilkan pesan sukses
        return response.redirect().toRoute('contact') // Kembali ke halaman kontak
    }
}
