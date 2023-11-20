import { serialize, parse } from 'cookie';

export function setCookie(res, name, value, options = {}) {
  console.log("Inside setCookie function");
  console.log("res:", res);

  const cookie = serialize(name, value, options);
  res.setHeader('Set-Cookie', cookie);
}

export function getCookie(req, name) {
  const cookies = parse(req.headers.cookie || '');
  return cookies[name];
}