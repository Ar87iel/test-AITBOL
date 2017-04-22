import resource from 'resource-router-middleware';
import accidents from '../models/accidents';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id : 'facet',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let accident = accidents.find( accident => accident.id===id ),
        err = accident ? null : 'Not found';
        callback(err, accident);
    },

    /** GET / - List all entities */
    index({ params }, res) {
        res.json(accident);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = accidents.length.toString(36);
        accidents.push(body);
        res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ facet }, res) {
        res.json(facet);
    },

    /** PUT /:id - Update a given entity */
    update({ facet, body }, res) {
        for (let key in body) {
            if (key!=='id') {
                facet[key] = body[key];
            }
        }
        res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ facet }, res) {
        accidents.splice(accidents.indexOf(facet), 1);
        res.sendStatus(204);
    }
});
