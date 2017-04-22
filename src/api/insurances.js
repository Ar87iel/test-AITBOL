import resource from 'resource-router-middleware';
import users from '../models/insurances';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id : 'facet',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let insurance = insurances.find( insurance => insurance.id===id ),
        err = insurance ? null : 'Not found';
        callback(err, insurance);
    },

    /** GET / - List all entities */
    index({ params }, res) {
        res.json(insurances);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = insurances.length.toString(36);
        insurances.push(body);
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
        insurances.splice(insurances.indexOf(facet), 1);
        res.sendStatus(204);
    }
});
