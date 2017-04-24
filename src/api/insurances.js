import resource from 'resource-router-middleware';
import insurances from '../models/insurances';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id : 'insurance',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let insurance = insurances.find( insurance => insurance.id===id ),
        err = insurance ? null : 'Not found';
        callback(err, insurance);
    },

    /** GET / - List all entities*/
    index({ params }, res) {
        let litos = insurances.sort(function(a, b) {
            if (true) return ((a['vPlate'] + "").toLowerCase() > (b['vPlate'] + "").toLowerCase()) ? 1 : ((a['vPlate'] < b['vPlate']) ? -1 : 0);
            else return (b['vPlate'] > a['vPlate']) ? 1 : ((b['vPlate'] < a['vPlate']) ? -1 : 0);
        });

        res.json(litos);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = insurances.length.toString(36);
        insurances.push(body);
        res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ insurance }, res) {
        res.json(insurance);
    },

    /** PUT /:id - Update a given entity */
    update({ insurance, body }, res) {
        for (let key in body) {
            if (key!=='id') {
                insurance[key] = body[key];
            }
        }
        res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ insurance }, res) {
        insurances.splice(insurances.indexOf(insurance), 1);
        res.sendStatus(204);
    }
});