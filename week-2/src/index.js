/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		if (request.method == "POST"){
      const data = {
        requestMethod: "You requested this resource via HTTP POST.",
      };
			return Response.json(data);
		}
		else {
			const data = {
        requestMethod: "POST was not used",
      };

      return Response.json(data);
		}
	},
};
