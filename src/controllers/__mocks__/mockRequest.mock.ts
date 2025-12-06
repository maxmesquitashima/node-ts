import { Request } from "express";

export const makeMockRequest = ({
  params,
  query,
  body,
}: {
  params?: any;
  query?: any;
  body?: any;
}): Request => {
  const request = {
    params: params || {},
    query: query || {},
    body: body || {},
  } as unknown;

  return request as Request;
};
