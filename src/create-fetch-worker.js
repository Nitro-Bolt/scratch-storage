/* global Worker */

/**
 * Create the worker used for parallel asset downloads.
 * @returns {Worker} the fetch worker
 */
const createFetchWorker = () => new Worker(new URL('./FetchWorkerTool.worker.js', import.meta.url));

module.exports = createFetchWorker;
