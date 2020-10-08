import nodemailer from 'nodemailer'

export const sendMailTo = async (email: string) => {
    let account = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    })

    let receiver = {
        from: 'Equipe SAS Brasil <sasbrasil.fake@gmail.com>',
        to: email, 
        subject: 'Cadastro efetuado com sucesso',
        text: 'Olá, você foi cadastrado com sucesso na plataforma SAS Brasil.'
    }

    let info = transporter.sendMail(receiver, (error) => {
        if (error)
            throw new Error('Erro to send mail ;(');

        console.log('Email enviado com sucesso')
    })
}




