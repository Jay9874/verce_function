export default function handler(request) {
  return new Response(JSON.stringify({ message: "Hello from Vercel, no framework!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}