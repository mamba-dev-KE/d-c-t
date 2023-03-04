interface FetchOptions {
    method: string;
    headers: Record<string, string>;
    body?: string;
}

export const fetchData = async <T>(url: string, options?: FetchOptions): Promise<T> => {
    const res = await fetch(url, {
        method: options?.method ?? 'GET',
        headers: options?.headers ?? {},
        body: options?.body,
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: T = await res.json();
    return data;
}
