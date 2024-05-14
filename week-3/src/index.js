export default {
	async fetch(request, env, ctx) {
		// if bot score is less than 30
		if (request.cf.botManagement.score < 30){
			const remote = "https://httpbin.org/get";
			return await fetch(remote, request);
		}

		// if POST
		if (request.method == "POST"){
      		const data = {
        		requestMethod: "You requested this resource via HTTP POST.",
      		};
			return Response.json(data);
		}

		// if GET
		if (request.method == "GET"){
			const remote = "https://origin.week3.codeclub2024.clarkmerrick.com/";
			return await fetch(remote, request);
	  	}

		// ALL ELSE
		else {
			const data = {
        		requestMethod: "POST was not used",
      		};
      		return Response.json(data);
		}
	},
};
