import { version } from '../../package.json';
import { Router } from 'express';
import customers from './customers';
import insurances from './insurances';
import accidentes from './accidents';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/insurances', insurances({ config, db}));
	api.use('/customers', customers({ config, db}));
	api.use('/accidents', accidentes({ config, db}));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
