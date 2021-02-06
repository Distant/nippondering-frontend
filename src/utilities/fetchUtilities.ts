import 'whatwg-fetch';

/**
 * Returns the path prepended with the environment specified domain
 */
export function url(path: string) {
  return process.env.NEXT_PUBLIC_URL + path
}

/**
 * Returns the path prepended with the environment specified image domain
 */
export function imgUrl(path: string) {
  return process.env.NEXT_PUBLIC_IMGURL + path
}

/**
 * Perform a GET fetch request with no-cors mode specified
 */
export function get(url: string, headers?: Headers | string[][] | Record<string, string> | undefined) {
  return fetch(new Request(
    url,
    {
      method: "GET",
      mode: 'cors',
    }
  ))
}

/**
 * Perform a POST fetch request with no-cors mode and json content-type specified 
 */
export function post(url: string, body: any, headers?: Headers | string[][] | Record<string, string> | undefined) {
  return fetch(new Request(
    url,
    {
      method: "POST",
      mode: 'cors',
      body: body,
      headers: headers ?? {"content-type": "application/json"}
    }
  ))
}