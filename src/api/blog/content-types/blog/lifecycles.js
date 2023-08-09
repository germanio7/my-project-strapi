
module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'german@mail.com',
                from: 'noreply@mail.com', // e.g. single sender verification in SendGrid
                subject: `Blog ${result.title} creado!`,
                text: `${result.title}`, // Replace with a valid field ID
                html: `# Blog ${result.title} creado!`,
            })
        } catch (err) {
            console.log(err);
        }
    }
}