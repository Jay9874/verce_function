export default function handler(request) {
  const { method } = request;

  switch (method) {
    case "GET":
      return new Response(JSON.stringify({ message: "Hello from GET request!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    case "POST":
      return new Response(JSON.stringify({ message: "Data received via POST!" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });

    case "PUT":
      return new Response(JSON.stringify({ message: "Resource updated via PUT!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

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