import resource from 'resource-router-middleware';
import customers from '../models/customers';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id : 'customer',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let customer = customers.find( customer => customer.id===id ),
        err = customer ? null : 'Not found';
        callback(err, customer);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = customers.length.toString(36);
        customers.push(body);
        res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ customer }, res) {
        res.json(customer);
    },

    /** PUT /:id - Update a given entity */
    update({ customer, body }, res) {
        for (let key in body) {
            if (key!=='id') {
                customer[key] = body[key];
            }
        }
        res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ customer }, res) {
        customers.splice(customers.indexOf(customer), 1);
        res.sendStatus(204);
    }
});