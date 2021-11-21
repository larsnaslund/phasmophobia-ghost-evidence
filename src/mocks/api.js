/**
 * Mocking an API by using Mock Service Worker
 * This will let us make proper API calls in the code, which we respond to in here as there's no proper API developed yet.
 * 
 * Things could be split into files: browser.js, handlers.js, etc. to simplify extension for other environments, but this app will just focus on the browser for now.
 */

import { rest } from 'msw';
import { setupWorker } from 'msw'
// Data to serve
import { GHOSTS, EVIDENCE } from './db.data';

const handlers = [
    rest.get('/api/ghosts', (req, res, ctx) => res(ctx.json(GHOSTS))),
    rest.get('/api/ghost-evidence', (req, res, ctx) => res(ctx.json(EVIDENCE))),
];

export const worker = setupWorker(...handlers);
