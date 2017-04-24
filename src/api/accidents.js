import resource from 'resource-router-middleware';
import accidents from '../models/accidents';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id : 'accident',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let accident = accidents.find( accident => accident.id===id ),
        err = accident ? null : 'Not found';
        callback(err, accident);
    },

    /** GET / - List all entities*/
    index({ params }, res) {
        let litos = accidents.sort(function(a, b) {
            if (true) return ((a['date'] + "").toLowerCase() > (b['date'] + "").toLowerCase()) ? 1 : ((a['date'] < b['date']) ? -1 : 0);
            else return (b['date'] > a['date']) ? 1 : ((b['date'] < a['date']) ? -1 : 0);
        });

        res.json(litos);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = accidents.length.toString(36);
        accidents.push(body);
        res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ accident }, res) {
        res.json(accident);
    },

    /** PUT /:id - Update a given entity */
    update({ accident, body }, res) {
        for (let key in body) {
            if (key!=='id') {
                accident[key] = body[key];
            }
        }
        res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ accident }, res) {
        accidents.splice(accidents.indexOf(accident), 1);
        res.sendStatus(204);
    }
});