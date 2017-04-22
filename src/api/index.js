import { version } from '../../package.json';
import { Router } from 'express';
import clients from './customers'

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/customers', clients({ config, db}));
	api.use('/insurances', clients({ config, db}));
	api.use('/accidents', clients({ config, db}));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
