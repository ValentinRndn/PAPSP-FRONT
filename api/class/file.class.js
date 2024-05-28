class File {
    constructor(id, titre, description, image, categorie, pdf) {
        this._id = id;
        this._titre = titre;
        this._description = description;
        this._image = image;
        this._categorie = categorie;
        this._pdf = pdf;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get categorie() {
        return this._categorie;
    }

    set categorie(value) {
        this._categorie = value;
    }

    get pdf() {
        return this._pdf;
    }

    set pdf(value) {
        this._pdf = value;
    }

    //FromMap
    static fromMap(map) {
        return new File(map.id, map.titre, map.description, map.image, map.categorie, map.pdf);
    }

    //ToMap
    toMap() {
        return {
            id: this._id,
            titre: this._titre,
            description: this._description,
            image: this._image,
            categorie: this._categorie,
            pdf: this._pdf
        };
    }
}

module.exports = File;