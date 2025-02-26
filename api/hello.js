export default async function handler(request) {
  const { method } = request;

  switch (method) {
    case "GET":
      return new Response(JSON.stringify({ message: "Hello from GET request!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    case "POST":
      try {
        const body = await request.json();
        return new Response(JSON.stringify({ message: "POST received", data: body }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

    case "PUT":
      try {
        const body = await request.json();
        return new Response(JSON.stringify({ message: "PUT updated", data: body }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

    case "DELETE":
      return new Response(JSON.stringify({ message: "Resource deleted via DELETE!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    default:
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
  }
}

export const config = {
  runtime: "edge"
};