module.exports = {

    index(request, response) {
        return response.render('index')
    },

    orphanages(request, response) {
        return response.render('orphanages')
    },

    orphanage(request, response) {
        return response.render('orphanage')
    },


    createOrphanage(request, response) {
        return response.render('create-orphanage')
    },

}




