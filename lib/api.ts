/**
 * Thin fetch wrapper around the ZA Law Associates ASP.NET Core API.
 * Set NEXT_PUBLIC_API_URL in .env.local to point at the running backend,
 * e.g. NEXT_PUBLIC_API_URL=https://localhost:5001/api
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:5001/api";

type RequestOptions = RequestInit & { token?: string };

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options;

  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(body?.message || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, token?: string) => request<T>(path, { method: "GET", token }),
  post: <T>(path: string, data?: unknown, token?: string) =>
    request<T>(path, { method: "POST", body: data ? JSON.stringify(data) : undefined, token }),
  put: <T>(path: string, data?: unknown, token?: string) =>
    request<T>(path, { method: "PUT", body: data ? JSON.stringify(data) : undefined, token }),
  patch: <T>(path: string, data?: unknown, token?: string) =>
    request<T>(path, { method: "PATCH", body: data ? JSON.stringify(data) : undefined, token }),
  delete: <T>(path: string, token?: string) => request<T>(path, { method: "DELETE", token }),
};
