import request from '@/config/request'

/**
 * @returns
 */
export function getIssues(): Promise<Issue[]> {
  return request.get('/issues')
}

/**
 * @returns
 */
export function addPraise(id, data): Promise<Issue> {
  return request.post(`/issues/${id}/reactions`, data)
}
