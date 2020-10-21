const Database = require('./db')

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.7044881",
            "46.8745772",
            "Lar dos meninos",
            "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "(011) 9 62468360",
            "https://images.unsplash.com/photo-1600063296677-1bb44cd2c615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h ate 8h",
            "0"
        );

    `)

    // consultar todos os dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // deletando registro de um usuario especifico no banco de dados
    const deleteOrphanage = await db.all('DELETE FROM orphanages WHERE id = "3"')
    console.log(deleteOrphanage)

    // alterando valor de um campo no banco de dados
    const deleteOrphanage = await db.all('UPDATE orphanages SET lng="-46.8445772" WHERE id = "2"')
    console.log(deleteOrphanage)
})