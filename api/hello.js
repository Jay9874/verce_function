export default function handler(request) {
  return new Response(JSON.stringify({ message: "Hello from Vercel Edge Runtime!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const config = {
  runtime: "edge"
};