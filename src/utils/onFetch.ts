
interface FetchParamsI {
  url: string;
  method: string;
  body?: any;
  headers?: { [key: string]: string };
}

export async function onFetch<T>(params: FetchParamsI): Promise<{
  data: T | null;
  error: string | null;
  isLoading: boolean;
}> {
  const fetchResponse: {
    data: T | null;
    error: string | null;
    isLoading: boolean;
  } = {
    data: null,
    error: null,
    isLoading: true,
  };

  const auth = localStorage.getItem("_auth");
  try {
    const options: RequestInit = {
      method: params.method || "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (auth) {
      
      options.headers = {
        ...options.headers,
        "Authorization": `Bearer ${auth}`,
      };
    }

    if (params.body && options.method !== "GET") {
      options.body = JSON.stringify(params.body);
    }

    const response = await fetch(params.url, options);
    
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }

    const result = await response.json();
    fetchResponse.data = result;
  } catch (err: any) {
    fetchResponse.error = err.message || "Something went wrong";
  } finally {
    fetchResponse.isLoading = false;
  }

  return fetchResponse;
}
